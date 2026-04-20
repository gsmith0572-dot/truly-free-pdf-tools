"use client";

import { useState, useRef, useCallback } from "react";
import { PDFDocument } from "pdf-lib";

interface FileState {
  file: File;
  name: string;
  pageCount: number;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function parseRanges(input: string, total: number): number[][] | null {
  const ranges: number[][] = [];
  const parts = input.split(",").map(s => s.trim()).filter(Boolean);
  for (const part of parts) {
    if (part.includes("-")) {
      const [a, b] = part.split("-").map(s => parseInt(s.trim(), 10));
      if (isNaN(a) || isNaN(b) || a < 1 || b > total || a > b) return null;
      const pages = [];
      for (let i = a; i <= b; i++) pages.push(i - 1);
      ranges.push(pages);
    } else {
      const n = parseInt(part, 10);
      if (isNaN(n) || n < 1 || n > total) return null;
      ranges.push([n - 1]);
    }
  }
  return ranges.length > 0 ? ranges : null;
}

export default function SplitPDFTool() {
  const [fileState, setFileState] = useState<FileState | null>(null);
  const [rangeInput, setRangeInput] = useState("");
  const [splitMode, setSplitMode] = useState<"all" | "range">("all");
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState<Blob[]>([]);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const originalBufRef = useRef<ArrayBuffer | null>(null);

  const handleFile = useCallback(async (file: File) => {
    if (file.type !== "application/pdf") {
      setError("Only PDF files are supported.");
      return;
    }
    setError(null);
    setResults([]);
    const buf = await file.arrayBuffer();
    originalBufRef.current = buf;
    const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
    setFileState({ file, name: file.name, pageCount: doc.getPageCount() });
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const split = async () => {
    if (!fileState || !originalBufRef.current) return;
    setProcessing(true);
    setError(null);
    try {
      const buf = originalBufRef.current;
      const blobs: Blob[] = [];

      if (splitMode === "all") {
        for (let i = 0; i < fileState.pageCount; i++) {
          const src = await PDFDocument.load(buf, { ignoreEncryption: true });
          const out = await PDFDocument.create();
          const [page] = await out.copyPages(src, [i]);
          out.addPage(page);
          const bytes = await out.save();
          blobs.push(new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" }));
        }
      } else {
        const ranges = parseRanges(rangeInput, fileState.pageCount);
        if (!ranges) {
          setError("Invalid page range. Use format: 1-3, 5, 7-9");
          setProcessing(false);
          return;
        }
        for (const pages of ranges) {
          const src = await PDFDocument.load(buf, { ignoreEncryption: true });
          const out = await PDFDocument.create();
          const copied = await out.copyPages(src, pages);
          copied.forEach(p => out.addPage(p));
          const bytes = await out.save();
          blobs.push(new Blob([bytes.buffer as ArrayBuffer], { type: "application/pdf" }));
        }
      }
      setResults(blobs);
    } catch {
      setError("Could not split this PDF. It may be corrupted.");
    } finally {
      setProcessing(false);
    }
  };

  const downloadOne = (blob: Blob, index: number) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (fileState?.name.replace(".pdf", "") || "split") + "-part" + (index + 1) + ".pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadAll = () => {
    results.forEach((blob, i) => downloadOne(blob, i));
  };

  const reset = () => {
    setFileState(null);
    setResults([]);
    setError(null);
    setRangeInput("");
    originalBufRef.current = null;
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
          <p style={{ color: "#718096", fontSize: 13 }}>PDF files only</p>
        </div>
      )}

      {error && (
        <div style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 8, padding: "12px 16px" }}>
          <p style={{ color: "#dc2626", fontSize: 13, fontWeight: 500 }}>{error}</p>
        </div>
      )}

      {fileState && results.length === 0 && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 20, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ background: "rgba(0,88,195,0.08)", borderRadius: 6, padding: "6px 10px" }}>
                <span style={{ color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>PDF</span>
              </div>
              <div>
                <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{fileState.name}</p>
                <p style={{ color: "#718096", fontSize: 12 }}>{fileState.pageCount} pages</p>
              </div>
            </div>
            <button onClick={reset} style={{ color: "#718096", fontSize: 12, background: "none", border: "none", cursor: "pointer", padding: 4 }}>Remove</button>
          </div>

          <div style={{ marginBottom: 20 }}>
            <p style={{ color: "#4a5568", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Split Mode</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              {([["all", "Extract all pages"], ["range", "Custom ranges"]] as const).map(([val, label]) => (
                <button key={val} onClick={() => setSplitMode(val)} style={{
                  flex: 1, padding: "10px 8px", borderRadius: 6,
                  border: splitMode === val ? "1.5px solid #0058c3" : "1.5px solid rgba(74,85,104,0.15)",
                  background: splitMode === val ? "rgba(0,88,195,0.06)" : "#f7fafc",
                  color: splitMode === val ? "#0058c3" : "#4a5568",
                  fontWeight: splitMode === val ? 700 : 500,
                  fontSize: 12, cursor: "pointer",
                }}>
                  {label}
                </button>
              ))}
            </div>
            {splitMode === "range" && (
              <div>
                <input
                  type="text"
                  value={rangeInput}
                  onChange={e => setRangeInput(e.target.value)}
                  placeholder="e.g. 1-3, 5, 7-9"
                  style={{
                    width: "100%", padding: "10px 12px", borderRadius: 6,
                    border: "1.5px solid rgba(74,85,104,0.2)",
                    background: "#f7fafc", color: "#181c1e", fontSize: 14,
                    outline: "none", boxSizing: "border-box",
                  }}
                />
                <p style={{ color: "#718096", fontSize: 12, marginTop: 6 }}>
                  Each range becomes a separate PDF. Total pages: {fileState.pageCount}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={split}
            disabled={processing}
            className="btn-primary"
            style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: processing ? "not-allowed" : "pointer", opacity: processing ? 0.7 : 1 }}
          >
            {processing ? "Splitting..." : "Split PDF"}
          </button>
        </div>
      )}

      {results.length > 0 && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 24, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ background: "rgba(22,163,74,0.08)", borderRadius: 6, padding: "6px 10px" }}>
              <span style={{ color: "#16a34a", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>DONE</span>
            </div>
            <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14 }}>{results.length} PDF{results.length > 1 ? "s" : ""} ready</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {results.map((blob, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f7fafc", borderRadius: 6, padding: "10px 14px" }}>
                <p style={{ color: "#181c1e", fontSize: 13, fontWeight: 500 }}>
                  Part {i + 1} — {formatBytes(blob.size)}
                </p>
                <button onClick={() => downloadOne(blob, i)} className="btn-secondary" style={{ fontSize: 12, padding: "6px 14px", cursor: "pointer" }}>
                  Download
                </button>
              </div>
            ))}
          </div>

          {results.length > 1 && (
            <button onClick={downloadAll} className="btn-primary" style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer", marginBottom: 12 }}>
              Download All
            </button>
          )}

          <button onClick={reset} className="btn-secondary" style={{ width: "100%", padding: "12px 0", fontSize: 14, cursor: "pointer" }}>
            Split another PDF
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
