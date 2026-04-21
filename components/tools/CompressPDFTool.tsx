"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { PDFDocument } from "pdf-lib";

type CompressionLevel = "low" | "medium" | "high";
interface FileState { file: File; name: string; originalSize: number; }
interface ResultState { blob: Blob; compressedSize: number; originalSize: number; }

const LEVELS: Record<CompressionLevel, { dpi: number; quality: number; label: string }> = {
  low:    { dpi: 150, quality: 0.85, label: "Low — best quality, moderate reduction" },
  medium: { dpi: 120, quality: 0.70, label: "Medium — balanced quality and size" },
  high:   { dpi: 96,  quality: 0.50, label: "High — smallest file, reduced quality" },
};

const FACTS = [
  "Your file never leaves this browser tab.",
  "Zero uploads. Zero servers. Zero risk.",
  "WebAssembly runs the compression on your device.",
  "When you close this tab, all data is gone.",
  "No account. No email. No trace.",
];

function formatBytes(b: number): string {
  if (b < 1024) return b + " B";
  if (b < 1048576) return (b / 1024).toFixed(1) + " KB";
  return (b / 1048576).toFixed(2) + " MB";
}

function reductionPct(o: number, c: number): string {
  return (((o - c) / o) * 100).toFixed(1) + "%";
}

async function renderPageToJpeg(page: any, dpi: number, quality: number): Promise<Uint8Array | null> {
  try {
    const scale = dpi / 72;
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    const ctx = canvas.getContext("2d");
    const task = page.render({ canvasContext: ctx, viewport });
    await Promise.race([task.promise.catch(() => {}), new Promise(r => setTimeout(r, 8000))]);
    return await new Promise(resolve => {
      canvas.toBlob(blob => {
        if (!blob) { resolve(null); return; }
        blob.arrayBuffer().then(buf => resolve(new Uint8Array(buf))).catch(() => resolve(null));
      }, "image/jpeg", quality);
    });
  } catch { return null; }
}

function DataStreamLoader({ progress, currentPage, totalPages }: { progress: number; currentPage: number; totalPages: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [factIndex, setFactIndex] = useState(0);
  const [factVisible, setFactVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactVisible(false);
      setTimeout(() => { setFactIndex(i => (i + 1) % FACTS.length); setFactVisible(true); }, 350);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width = 560;
    const H = canvas.height = 80;

    interface Particle { x: number; y: number; vx: number; size: number; alpha: number; done: boolean; hue: number; }
    const particles: Particle[] = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * W,
        y: H * 0.3 + Math.random() * H * 0.4,
        vx: 0.8 + Math.random() * 2.2,
        size: 2 + Math.random() * 3,
        alpha: 0.3 + Math.random() * 0.7,
        done: Math.random() < progress / 100,
        hue: 210 + Math.random() * 20,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const grad = ctx.createLinearGradient(0, 0, W, 0);
      grad.addColorStop(0, "rgba(0,88,195,0)");
      grad.addColorStop(0.2, "rgba(0,88,195,0.06)");
      grad.addColorStop(0.8, "rgba(0,112,243,0.06)");
      grad.addColorStop(1, "rgba(0,112,243,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      const splitX = (progress / 100) * W;

      particles.forEach(p => {
        p.x += p.vx;
        if (p.x > W + 10) p.x = -10;
        p.done = p.x < splitX;

        const color = p.done
          ? `rgba(22,163,74,${p.alpha})`
          : `rgba(0,${Math.floor(88 + (p.x / W) * 60)},${Math.floor(195 + (p.x / W) * 40)},${p.alpha})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        if (p.size > 3) {
          ctx.beginPath();
          ctx.moveTo(p.x - p.vx * 4, p.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = color.replace(String(p.alpha), String(p.alpha * 0.4));
          ctx.lineWidth = p.size * 0.5;
          ctx.stroke();
        }
      });

      ctx.beginPath();
      ctx.moveTo(splitX, 8);
      ctx.lineTo(splitX, H - 8);
      ctx.strokeStyle = splitX > 20 ? "rgba(22,163,74,0.5)" : "rgba(0,88,195,0.3)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [progress]);

  return (
    <div style={{ padding: "28px 24px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase" }}>
          Processing
        </span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#0058c3" }}>
          {totalPages > 0 ? `${Math.min(currentPage, totalPages)} / ${totalPages} pages` : "Initializing..."}
        </span>
      </div>

      <div style={{ borderRadius: 6, overflow: "hidden", marginBottom: 12, background: "#f1f4f6" }}>
        <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: 80 }} />
      </div>

      <div style={{ background: "#e5e9eb", borderRadius: 4, height: 3, marginBottom: 16, overflow: "hidden" }}>
        <div style={{
          background: progress > 90 ? "linear-gradient(135deg, #16a34a, #15803d)" : "linear-gradient(135deg, #0058c3, #0070f3)",
          height: 3,
          borderRadius: 4,
          width: `${progress}%`,
          transition: "width 0.4s ease, background 0.5s ease",
        }} />
      </div>

      <p style={{
        fontSize: 12,
        fontWeight: 600,
        color: "#0058c3",
        letterSpacing: "-0.01em",
        opacity: factVisible ? 1 : 0,
        transition: "opacity 0.35s ease",
        minHeight: 18,
        margin: 0,
      }}>
        {FACTS[factIndex]}
      </p>
    </div>
  );
}

export default function CompressPDFTool() {
  const [fileState, setFileState] = useState<FileState | null>(null);
  const [level, setLevel] = useState<CompressionLevel>("medium");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [result, setResult] = useState<ResultState | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file.type !== "application/pdf") { setError("Only PDF files are supported."); return; }
    setError(null); setResult(null);
    setFileState({ file, name: file.name, originalSize: file.size });
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const compress = async () => {
    if (!fileState) return;
    setProcessing(true); setProgress(0); setCurrentPage(0); setTotalPages(0); setError(null);
    try {
      const { dpi, quality } = LEVELS[level];
      const arrayBuffer = await fileState.file.arrayBuffer();

      const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      if (level === "medium" || level === "high") {
        pdfDoc.setTitle(""); pdfDoc.setAuthor(""); pdfDoc.setSubject("");
        pdfDoc.setKeywords([]); pdfDoc.setProducer(""); pdfDoc.setCreator("");
      }
      if (level === "high") {
        pdfDoc.setCreationDate(new Date(0)); pdfDoc.setModificationDate(new Date(0));
      }
      const structBytes = await pdfDoc.save({ useObjectStreams: true, addDefaultPage: false });
      setProgress(10);

      let bestBytes: Uint8Array = structBytes;
      let bestSize: number = structBytes.byteLength;

      try {
        const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/legacy/build/pdf.worker.mjs", import.meta.url).toString();
        const originalWarn = console.warn;
        console.warn = () => {};

        const pdfJsDoc = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer), verbosity: 0 }).promise;
        const numPages = pdfJsDoc.numPages;
        const MAX_CANVAS_PAGES = 10;
        const pagesToRender = Math.min(numPages, MAX_CANVAS_PAGES);
        setTotalPages(pagesToRender);

        const outDoc = await PDFDocument.create();
        let pagesRendered = 0;

        for (let i = 1; i <= pagesToRender; i++) {
          setCurrentPage(i);
          setProgress(10 + Math.round((i / pagesToRender) * 80));
          try {
            const page = await pdfJsDoc.getPage(i);
            const jpegBytes = await renderPageToJpeg(page, dpi, quality);
            if (jpegBytes) {
              const jpegImage = await outDoc.embedJpg(jpegBytes);
              const { width, height } = jpegImage.scale(1);
              const outPage = outDoc.addPage([width, height]);
              outPage.drawImage(jpegImage, { x: 0, y: 0, width, height });
              pagesRendered++;
            }
          } catch {}
        }

        console.warn = originalWarn;

        if (pagesRendered === pagesToRender) {
          const canvasBytes = await outDoc.save({ useObjectStreams: true });
          if (canvasBytes.byteLength < bestSize) { bestBytes = canvasBytes; bestSize = canvasBytes.byteLength; }
        }
      } catch {}

      setProgress(100);

      if (bestSize >= fileState.originalSize) {
        setError("This PDF is already fully optimized and cannot be reduced further.");
        return;
      }

      const blob = new Blob([bestBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      setResult({ blob, compressedSize: blob.size, originalSize: fileState.originalSize });
    } catch {
      setError("Could not compress this PDF. It may be corrupted or unsupported.");
    } finally {
      setProcessing(false); setProgress(0); setCurrentPage(0); setTotalPages(0);
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
    setFileState(null); setResult(null); setError(null);
    setProgress(0); setCurrentPage(0); setTotalPages(0);
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
          style={{ background: dragging ? "rgba(0,88,195,0.06)" : "#ffffff", border: "2px dashed " + (dragging ? "#0058c3" : "rgba(74,85,104,0.25)"), padding: "56px 32px", textAlign: "center" }}
        >
          <input ref={inputRef} type="file" accept="application/pdf" onChange={onInputChange} className="hidden" />
          <div style={{ marginBottom: 12 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ margin: "0 auto" }}>
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
        <div style={{ background: "rgba(220,38,38,0.06)", borderRadius: 8, padding: "12px 16px" }}>
          <p style={{ color: "#dc2626", fontSize: 13, fontWeight: 500 }}>{error}</p>
          <button onClick={reset} style={{ color: "#0058c3", fontSize: 12, background: "none", border: "none", cursor: "pointer", padding: "8px 0 0", fontWeight: 600 }}>Try another PDF</button>
        </div>
      )}

      {fileState && !result && !error && (
        <div style={{ background: "#ffffff", borderRadius: 8, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", overflow: "hidden" }}>
          {processing ? (
            <DataStreamLoader progress={progress} currentPage={currentPage} totalPages={totalPages} />
          ) : (
            <div style={{ padding: 20 }}>
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
                <button onClick={reset} style={{ color: "#718096", fontSize: 12, background: "none", border: "none", cursor: "pointer", padding: 4 }}>Remove</button>
              </div>

              <div style={{ marginBottom: 20 }}>
                <p style={{ color: "#4a5568", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Compression Level</p>
                <div style={{ display: "flex", gap: 8 }}>
                  {(["low", "medium", "high"] as CompressionLevel[]).map(l => (
                    <button key={l} onClick={() => setLevel(l)} style={{ flex: 1, padding: "10px 8px", borderRadius: 6, border: level === l ? "1.5px solid #0058c3" : "1.5px solid rgba(74,85,104,0.15)", background: level === l ? "rgba(0,88,195,0.06)" : "#f7fafc", color: level === l ? "#0058c3" : "#4a5568", fontWeight: level === l ? 700 : 500, fontSize: 12, cursor: "pointer", textAlign: "center" }}>
                      {l.charAt(0).toUpperCase() + l.slice(1)}
                    </button>
                  ))}
                </div>
                <p style={{ color: "#718096", fontSize: 12, marginTop: 8 }}>{LEVELS[level].label}</p>
              </div>

              <button onClick={compress} className="btn-primary" style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer" }}>
                Compress PDF
              </button>
            </div>
          )}
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

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[{ label: "ORIGINAL", value: formatBytes(result.originalSize) }, { label: "COMPRESSED", value: formatBytes(result.compressedSize) }, { label: "SAVED", value: reductionPct(result.originalSize, result.compressedSize) }].map(({ label, value }) => (
              <div key={label} style={{ background: "#f7fafc", borderRadius: 8, padding: "14px 12px", textAlign: "center" }}>
                <p style={{ color: "#718096", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
                <p style={{ color: "#181c1e", fontSize: 16, fontWeight: 700 }}>{value}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,88,195,0.08)", borderRadius: 4, padding: "5px 10px" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1L2 3v3c0 2.5 1.67 4.5 4 5 2.33-.5 4-2.5 4-5V3L6 1z" fill="#0058c3"/></svg>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#0058c3", letterSpacing: "0.04em" }}>Processed Locally</span>
            </div>
          </div>

          <button onClick={download} className="btn-primary" style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer", marginBottom: 12 }}>
            Download Compressed PDF
          </button>
          <button onClick={reset} className="btn-secondary" style={{ width: "100%", padding: "12px 0", fontSize: 14, cursor: "pointer" }}>
            Compress another PDF
          </button>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5C3.74 1.5 1.5 3.74 1.5 6.5S3.74 11.5 6.5 11.5 11.5 9.26 11.5 6.5 9.26 1.5 6.5 1.5zm0 4.5a1 1 0 110-2 1 1 0 010 2zm1 3H5.5V7h2v2z" fill="#718096"/></svg>
        <p style={{ color: "#718096", fontSize: 12 }}>Your file never leaves your browser. Processed locally.</p>
      </div>
    </div>
  );
}
