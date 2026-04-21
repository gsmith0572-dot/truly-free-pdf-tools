"use client";

import { useState, useRef, useCallback } from "react";
import { PDFDocument } from "pdf-lib";
import AdSlot from "@/components/ads/AdSlot";

type CompressionLevel = "low" | "medium" | "high";

interface FileState {
  file: File;
  name: string;
  originalSize: number;
}

interface ResultState {
  blob: Blob;
  compressedSize: number;
  originalSize: number;
}

const COMPRESSION_LABELS: Record<CompressionLevel, string> = {
  low: "Low - Best quality",
  medium: "Medium - Balanced",
  high: "High - Smallest size",
};

const COMPRESSION_SCALE: Record<CompressionLevel, number> = {
  low: 0.85,
  medium: 0.65,
  high: 0.40,
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function reductionPct(original: number, compressed: number): string {
  const pct = ((original - compressed) / original) * 100;
  return pct.toFixed(1) + "%";
}

export default function CompressPDFTool() {
  const [fileState, setFileState] = useState<FileState | null>(null);
  const [level, setLevel] = useState<CompressionLevel>("medium");
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<ResultState | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file.type !== "application/pdf") {
      setError("Only PDF files are supported.");
      return;
    }
    setError(null);
    setResult(null);
    setFileState({ file, name: file.name, originalSize: file.size });
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const compress = async () => {
    if (!fileState) return;
    setProcessing(true);
    setError(null);
    try {
      const arrayBuffer = await fileState.file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const pages = pdfDoc.getPages();
      const scale = COMPRESSION_SCALE[level];
      for (const page of pages) {
        const { width, height } = page.getSize();
        page.setSize(width * scale, height * scale);
        page.scaleContent(scale, scale);
        page.setSize(width, height);
      }
      const compressed = await pdfDoc.save({ useObjectStreams: true, addDefaultPage: false });
      const blob = new Blob([compressed.buffer as ArrayBuffer], { type: "application/pdf" });
      setResult({ blob, compressedSize: blob.size, originalSize: fileState.originalSize });
    } catch {
      setError("Could not compress this PDF. It may be encrypted or corrupted.");
    } finally {
      setProcessing(false);
    }
  };

  const download = () => {
    if (!result || !fileState) return;
    const url = URL.createObjectURL(result.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileState.name.replace(".pdf", "-compressed.pdf");
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setFileState(null);
    setResult(null);
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
          <input ref={inputRef} type="file" accept="application/pdf" onChange={onInputChange} className="hidden" />
          <div style={{ marginBottom: 12 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto" }}>
              <rect width="40" height="40" rx="8" fill="rgba(0,88,195,0.08)"/>
              <path d="M20 12v12M14 18l6-6 6 6" stroke="#0058c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 28h16" stroke="#0058c3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>
            Drop your PDF here or click to upload
          </p>
          <p style={{ color: "#718096", fontSize: 13 }}>PDF files only</p>
        </div>
      )}

      {error && (
        <div style={{ background: "rgba(220,38,38,0.06)", borderRadius: 8, padding: "12px 16px", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}>
          <p style={{ color: "#dc2626", fontSize: 13, fontWeight: 500 }}>{error}</p>
        </div>
      )}

      {fileState && !result && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 20, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ background: "rgba(0,88,195,0.08)", borderRadius: 6, padding: "6px 10px" }}>
                <span style={{ color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>PDF</span>
              </div>
              <div>
                <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{fileState.name}</p>
                <p style={{ color: "#718096", fontSize: 12 }}>{formatBytes(fileState.originalSize)}</p>
              </div>
            </div>
            <button onClick={reset} style={{ color: "#718096", fontSize: 12, background: "none", border: "none", cursor: "pointer", padding: 4 }}>
              Remove
            </button>
          </div>

          <div style={{ marginBottom: 20 }}>
            <p style={{ color: "#4a5568", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              Compression Level
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {(["low", "medium", "high"] as CompressionLevel[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  style={{
                    flex: 1,
                    padding: "10px 8px",
                    borderRadius: 6,
                    border: level === l ? "1.5px solid #0058c3" : "1.5px solid rgba(74,85,104,0.15)",
                    background: level === l ? "rgba(0,88,195,0.06)" : "#f7fafc",
                    color: level === l ? "#0058c3" : "#4a5568",
                    fontWeight: level === l ? 700 : 500,
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "all 0.1s ease",
                    textAlign: "center",
                  }}
                >
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </button>
              ))}
            </div>
            <p style={{ color: "#718096", fontSize: 12, marginTop: 8 }}>{COMPRESSION_LABELS[level]}</p>
          </div>

          <button
            onClick={compress}
            disabled={processing}
            className="btn-primary"
            style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: processing ? "not-allowed" : "pointer", opacity: processing ? 0.7 : 1 }}
          >
            {processing ? "Compressing..." : "Compress PDF"}
          </button>
        </div>
      )}

      {result && fileState && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 24, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ background: "rgba(22,163,74,0.08)", borderRadius: 6, padding: "6px 10px" }}>
              <span style={{ color: "#16a34a", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>DONE</span>
            </div>
            <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14 }}>Compression complete</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
            {[
              { label: "ORIGINAL", value: formatBytes(result.originalSize) },
              { label: "COMPRESSED", value: formatBytes(result.compressedSize) },
              { label: "SAVED", value: reductionPct(result.originalSize, result.compressedSize) },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "#f7fafc", borderRadius: 8, padding: "14px 12px", textAlign: "center" }}>
                <p style={{ color: "#718096", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
                <p style={{ color: "#181c1e", fontSize: 16, fontWeight: 700 }}>{value}</p>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 20, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", borderRadius: 8, overflow: "hidden" }}>
            <AdSlot slot="8942680933" format="rectangle" />
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,88,195,0.08)", borderRadius: 4, padding: "5px 10px" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L2 3v3c0 2.5 1.67 4.5 4 5 2.33-.5 4-2.5 4-5V3L6 1z" fill="#0058c3"/>
              </svg>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#0058c3", letterSpacing: "0.04em" }}>Processed Locally</span>
            </div>
          </div>

          <button
            onClick={download}
            className="btn-primary"
            style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer", marginBottom: 12 }}
          >
            Download Compressed PDF
          </button>

          <button
            onClick={reset}
            className="btn-secondary"
            style={{ width: "100%", padding: "12px 0", fontSize: 14, cursor: "pointer" }}
          >
            Compress another PDF
          </button>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 1.5C3.74 1.5 1.5 3.74 1.5 6.5S3.74 11.5 6.5 11.5 11.5 9.26 11.5 6.5 9.26 1.5 6.5 1.5zm0 4.5a1 1 0 110-2 1 1 0 010 2zm1 3H5.5V7h2v2z" fill="#718096"/>
        </svg>
        <p style={{ color: "#718096", fontSize: 12 }}>
          Your file never leaves your browser. Processed locally.
        </p>
      </div>
    </div>
  );
}
