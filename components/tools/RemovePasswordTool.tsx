"use client";

import { useState, useRef, useCallback } from "react";
import { PDFDocument } from "pdf-lib";

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

export default function RemovePasswordTool() {
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

  const unlock = async () => {
    if (!fileState) return;
    setProcessing(true);
    setError(null);
    try {
      const buf = await fileState.file.arrayBuffer();
      const doc = await PDFDocument.load(buf, {
        ignoreEncryption: true,
      });
      const unlocked = await PDFDocument.create();
      const pages = await unlocked.copyPages(doc, doc.getPageIndices());
      pages.forEach(p => unlocked.addPage(p));
      const bytes = await unlocked.save();
      const blob = new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" });
      setResultBlob(blob);
    } catch {
      setError("Could not unlock this PDF. Check that the password is correct.");
    } finally {
      setProcessing(false);
    }
  };

  const download = () => {
    if (!resultBlob || !fileState) return;
    const url = URL.createObjectURL(resultBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileState.name.replace(".pdf", "-unlocked.pdf");
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
              <rect x="12" y="20" width="16" height="10" rx="2" stroke="#0058c3" strokeWidth="2"/>
              <path d="M15 20v-4a5 5 0 0110 0v4" stroke="#0058c3" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="25" r="1.5" fill="#0058c3"/>
            </svg>
          </div>
          <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Drop your PDF here or click to upload</p>
          <p style={{ color: "#718096", fontSize: 13 }}>Password-protected PDFs only</p>
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
            onClick={unlock}
            disabled={processing}
            className="btn-primary"
            style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: processing ? "not-allowed" : "pointer", opacity: processing ? 0.7 : 1 }}
          >
            {processing ? "Unlocking..." : "Remove Password"}
          </button>
        </div>
      )}

      {resultBlob && fileState && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 24, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ background: "rgba(22,163,74,0.08)", borderRadius: 6, padding: "6px 10px" }}>
              <span style={{ color: "#16a34a", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>UNLOCKED</span>
            </div>
            <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14 }}>Password removed successfully</p>
          </div>
          <button onClick={download} className="btn-primary" style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer", marginBottom: 12 }}>
            Download Unlocked PDF
          </button>
          <button onClick={reset} className="btn-secondary" style={{ width: "100%", padding: "12px 0", fontSize: 14, cursor: "pointer" }}>
            Unlock another PDF
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
