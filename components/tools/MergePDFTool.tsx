"use client";

import { useState, useRef, useCallback } from "react";
import { PDFDocument } from "pdf-lib";

interface PDFFile {
  id: string;
  file: File;
  name: string;
  size: number;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

export default function MergePDFTool() {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [processing, setProcessing] = useState(false);
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const pdfs = Array.from(incoming).filter(f => f.type === "application/pdf");
    if (pdfs.length === 0) {
      setError("Only PDF files are supported.");
      return;
    }
    setError(null);
    setResultBlob(null);
    setFiles(prev => [
      ...prev,
      ...pdfs.map(f => ({
        id: Math.random().toString(36).slice(2),
        file: f,
        name: f.name,
        size: f.size,
      })),
    ]);
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  }, [addFiles]);

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setResultBlob(null);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setFiles(prev => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  };

  const moveDown = (index: number) => {
    setFiles(prev => {
      if (index === prev.length - 1) return prev;
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  };

  const merge = async () => {
    if (files.length < 2) {
      setError("Add at least 2 PDF files to merge.");
      return;
    }
    setProcessing(true);
    setError(null);
    try {
      const merged = await PDFDocument.create();
      for (const f of files) {
        const buf = await f.file.arrayBuffer();
        const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach(p => merged.addPage(p));
      }
      const bytes = await merged.save();
      const blob = new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" });
      setResultBlob(blob);
    } catch {
      setError("Could not merge these PDFs. One or more files may be corrupted.");
    } finally {
      setProcessing(false);
    }
  };

  const download = () => {
    if (!resultBlob) return;
    const url = URL.createObjectURL(resultBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "merged.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setFiles([]);
    setResultBlob(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      <div
        onDrop={onDrop}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-md transition-all duration-150"
        style={{
          background: dragging ? "rgba(0,88,195,0.06)" : "#ffffff",
          border: "2px dashed " + (dragging ? "#0058c3" : "rgba(74,85,104,0.25)"),
          padding: "40px 32px",
          textAlign: "center",
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          multiple
          onChange={e => { if (e.target.files) addFiles(e.target.files); }}
          className="hidden"
        />
        <div style={{ marginBottom: 10 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto" }}>
            <rect width="40" height="40" rx="8" fill="rgba(0,88,195,0.08)"/>
            <path d="M20 12v12M14 18l6-6 6 6" stroke="#0058c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 28h16" stroke="#0058c3" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>
          Drop PDFs here or click to upload
        </p>
        <p style={{ color: "#718096", fontSize: 13 }}>Select multiple files — order them below</p>
      </div>

      {error && (
        <div style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 8, padding: "12px 16px" }}>
          <p style={{ color: "#dc2626", fontSize: 13, fontWeight: 500 }}>{error}</p>
        </div>
      )}

      {files.length > 0 && !resultBlob && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 20, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <p style={{ color: "#4a5568", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {files.length} file{files.length > 1 ? "s" : ""} — drag to reorder
            </p>
            <button onClick={reset} style={{ color: "#718096", fontSize: 12, background: "none", border: "none", cursor: "pointer" }}>
              Clear all
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {files.map((f, i) => (
              <div key={f.id} style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#f7fafc",
                borderRadius: 6,
                padding: "10px 12px",
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <button onClick={() => moveUp(i)} style={{ background: "none", border: "none", cursor: i === 0 ? "default" : "pointer", opacity: i === 0 ? 0.3 : 1, padding: 0, lineHeight: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 9V3M3 6l3-3 3 3" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button onClick={() => moveDown(i)} style={{ background: "none", border: "none", cursor: i === files.length - 1 ? "default" : "pointer", opacity: i === files.length - 1 ? 0.3 : 1, padding: 0, lineHeight: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 3v6M3 6l3 3 3-3" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
                <div style={{ background: "rgba(0,88,195,0.08)", borderRadius: 4, padding: "4px 8px" }}>
                  <span style={{ color: "#0058c3", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em" }}>PDF</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "#181c1e", fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name}</p>
                  <p style={{ color: "#718096", fontSize: 11 }}>{formatBytes(f.size)}</p>
                </div>
                <button onClick={() => removeFile(f.id)} style={{ color: "#718096", fontSize: 12, background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={merge}
            disabled={processing || files.length < 2}
            className="btn-primary"
            style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: processing || files.length < 2 ? "not-allowed" : "pointer", opacity: processing || files.length < 2 ? 0.7 : 1 }}
          >
            {processing ? "Merging..." : "Merge " + files.length + " PDFs"}
          </button>
        </div>
      )}

      {resultBlob && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 24, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ background: "rgba(22,163,74,0.08)", borderRadius: 6, padding: "6px 10px" }}>
              <span style={{ color: "#16a34a", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>DONE</span>
            </div>
            <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14 }}>{files.length} PDFs merged successfully</p>
          </div>
          <button
            onClick={download}
            className="btn-primary"
            style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer", marginBottom: 12 }}
          >
            Download Merged PDF
          </button>
          <button
            onClick={reset}
            className="btn-secondary"
            style={{ width: "100%", padding: "12px 0", fontSize: 14, cursor: "pointer" }}
          >
            Merge more PDFs
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
