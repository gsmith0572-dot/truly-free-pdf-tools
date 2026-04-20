"use client";

import { useState, useRef, useCallback } from "react";

interface FileState {
  file: File;
  name: string;
  size: number;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function textToDocx(text: string, filename: string): Blob {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const paragraphs = escaped
    .split("\n")
    .map(line => line.trim())
    .map(line => "<w:p><w:r><w:t xml:space=\"preserve\">" + (line || " ") + "</w:t></w:r></w:p>")
    .join("");

  const docxml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
    + "<w:body>" + paragraphs + "</w:body></w:document>";

  const relsxml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
    + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>'
    + "</Relationships>";

  const contenttypes = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
    + '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
    + '<Default Extension="xml" ContentType="application/xml"/>'
    + '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'
    + "</Types>";

  const enc = new TextEncoder();
  const docBytes = enc.encode(docxml);
  const relsBytes = enc.encode(relsxml);
  const ctBytes = enc.encode(contenttypes);

  function zip(files: { name: string; data: Uint8Array }[]): Uint8Array {
    const parts: Uint8Array[] = [];
    const centralDir: Uint8Array[] = [];
    let offset = 0;

    for (const file of files) {
      const nameBytes = enc.encode(file.name);
      const local = new Uint8Array(30 + nameBytes.length + file.data.length);
      const view = new DataView(local.buffer);
      view.setUint32(0, 0x04034b50, true);
      view.setUint16(4, 20, true);
      view.setUint16(6, 0, true);
      view.setUint16(8, 0, true);
      view.setUint16(10, 0, true);
      view.setUint16(12, 0, true);
      view.setUint32(14, 0, true);
      view.setUint32(18, file.data.length, true);
      view.setUint32(22, file.data.length, true);
      view.setUint16(26, nameBytes.length, true);
      view.setUint16(28, 0, true);
      local.set(nameBytes, 30);
      local.set(file.data, 30 + nameBytes.length);

      const cd = new Uint8Array(46 + nameBytes.length);
      const cdv = new DataView(cd.buffer);
      cdv.setUint32(0, 0x02014b50, true);
      cdv.setUint16(4, 20, true);
      cdv.setUint16(6, 20, true);
      cdv.setUint16(8, 0, true);
      cdv.setUint16(10, 0, true);
      cdv.setUint16(12, 0, true);
      cdv.setUint16(14, 0, true);
      cdv.setUint32(16, 0, true);
      cdv.setUint32(20, file.data.length, true);
      cdv.setUint32(24, file.data.length, true);
      cdv.setUint16(28, nameBytes.length, true);
      cdv.setUint16(30, 0, true);
      cdv.setUint16(32, 0, true);
      cdv.setUint16(34, 0, true);
      cdv.setUint16(36, 0, true);
      cdv.setUint32(38, 0, true);
      cdv.setUint32(42, offset, true);
      cd.set(nameBytes, 46);

      parts.push(local);
      centralDir.push(cd);
      offset += local.length;
    }

    const cdSize = centralDir.reduce((s, c) => s + c.length, 0);
    const eocd = new Uint8Array(22);
    const ev = new DataView(eocd.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, files.length, true);
    ev.setUint16(10, files.length, true);
    ev.setUint32(12, cdSize, true);
    ev.setUint32(16, offset, true);
    ev.setUint16(20, 0, true);

    const all = [...parts, ...centralDir, eocd];
    const total = all.reduce((s, a) => s + a.length, 0);
    const result = new Uint8Array(total);
    let pos = 0;
    for (const a of all) { result.set(a, pos); pos += a.length; }
    return result;
  }

  const zipBytes = zip([
    { name: "_rels/.rels", data: relsBytes },
    { name: "[Content_Types].xml", data: ctBytes },
    { name: "word/document.xml", data: docBytes },
  ]);

  return new Blob([zipBytes], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
}

export default function PDFToWordTool() {
  const [fileState, setFileState] = useState<FileState | null>(null);
  const [processing, setProcessing] = useState(false);
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file.type !== "application/pdf") {
      setError("Only PDF files are supported.");
      return;
    }
    setError(null);
    setResultBlob(null);
    setFileState({ file, name: file.name, size: file.size });
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const convert = async () => {
    if (!fileState) return;
    setProcessing(true);
    setError(null);
    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs";
      const buf = await fileState.file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items
          .map((item: unknown) => (item as { str: string }).str)
          .join(" ");
        fullText += pageText + "\n\n";
      }
      if (!fullText.trim()) {
        setError("No text found. This PDF may be scanned or image-based.");
        setProcessing(false);
        return;
      }
      const blob = textToDocx(fullText, fileState.name);
      setResultBlob(blob);
    } catch {
      setError("Could not convert this PDF. It may be corrupted or encrypted.");
    } finally {
      setProcessing(false);
    }
  };

  const download = () => {
    if (!resultBlob || !fileState) return;
    const url = URL.createObjectURL(resultBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileState.name.replace(".pdf", ".docx");
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setFileState(null);
    setResultBlob(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      {!fileState && (
        <div
          onDrop={onDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-md transition-all duration-150"
          style={{
            background: dragging ? "rgba(0,88,195,0.06)" : "#ffffff",
            border: "2px dashed " + (dragging ? "#0058c3" : "rgba(74,85,104,0.25)"),
            padding: "56px 32px",
            textAlign: "center",
          }}
        >
          <input ref={inputRef} type="file" accept="application/pdf" onChange={e => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} className="hidden" />
          <div style={{ marginBottom: 12 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto" }}>
              <rect width="40" height="40" rx="8" fill="rgba(0,88,195,0.08)"/>
              <path d="M20 12v12M14 18l6-6 6 6" stroke="#0058c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 28h16" stroke="#0058c3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Drop your PDF here or click to upload</p>
          <p style={{ color: "#718096", fontSize: 13 }}>Text-based PDFs only — not for scanned documents</p>
        </div>
      )}

      {error && (
        <div style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 8, padding: "12px 16px" }}>
          <p style={{ color: "#dc2626", fontSize: 13, fontWeight: 500 }}>{error}</p>
        </div>
      )}

      {fileState && !resultBlob && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 20, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ background: "rgba(0,88,195,0.08)", borderRadius: 6, padding: "6px 10px" }}>
                <span style={{ color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>PDF</span>
              </div>
              <div>
                <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{fileState.name}</p>
                <p style={{ color: "#718096", fontSize: 12 }}>{formatBytes(fileState.size)}</p>
              </div>
            </div>
            <button onClick={reset} style={{ color: "#718096", fontSize: 12, background: "none", border: "none", cursor: "pointer", padding: 4 }}>Remove</button>
          </div>
          <button
            onClick={convert}
            disabled={processing}
            className="btn-primary"
            style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: processing ? "not-allowed" : "pointer", opacity: processing ? 0.7 : 1 }}
          >
            {processing ? "Converting..." : "Convert to Word"}
          </button>
        </div>
      )}

      {resultBlob && fileState && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 24, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ background: "rgba(22,163,74,0.08)", borderRadius: 6, padding: "6px 10px" }}>
              <span style={{ color: "#16a34a", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>DONE</span>
            </div>
            <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14 }}>Conversion complete</p>
          </div>
          <button onClick={download} className="btn-primary" style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer", marginBottom: 12 }}>
            Download .docx
          </button>
          <button onClick={reset} className="btn-secondary" style={{ width: "100%", padding: "12px 0", fontSize: 14, cursor: "pointer" }}>
            Convert another PDF
          </button>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 1.5C3.74 1.5 1.5 3.74 1.5 6.5S3.74 11.5 6.5 11.5 11.5 9.26 11.5 6.5 9.26 1.5 6.5 1.5zm0 4.5a1 1 0 110-2 1 1 0 010 2zm1 3H5.5V7h2v2z" fill="#718096"/>
        </svg>
        <p style={{ color: "#718096", fontSize: 12 }}>Your files never leave your browser. Processed locally.</p>
      </div>
    </div>
  );
}
