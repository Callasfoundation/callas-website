import { useRef, useState } from "react";
import { Upload, Loader2, Check, FileText } from "lucide-react";
import { uploadToCloudinary } from "@/lib/cloudinary";

export function MediaUpload({
  value,
  onChange,
  accept = "image",
}: {
  value: string;
  onChange: (url: string) => void;
  accept?: "image" | "video" | "raw";
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    try {
      const url = await uploadToCloudinary(file, accept);
      onChange(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  const acceptAttr = accept === "video" ? "video/*" : accept === "raw" ? ".pdf,.doc,.docx" : "image/*";

  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-ink hover:border-brand-blue disabled:opacity-60"
        >
          {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
          {uploading ? "Uploading…" : value ? "Replace file" : "Choose file"}
        </button>
        {value && !uploading && <span className="inline-flex items-center gap-1 text-xs text-green-600"><Check className="h-3.5 w-3.5" /> Uploaded</span>}
        <input ref={inputRef} type="file" accept={acceptAttr} className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
      </div>
      {error && <p className="mt-1.5 text-xs text-brand-red">{error}</p>}
      {value && accept === "image" && <img src={value} alt="" className="mt-2 h-28 w-28 object-cover rounded-lg border border-slate-200" />}
      {value && accept === "video" && <video src={value} controls className="mt-2 h-28 rounded-lg border border-slate-200" />}
      {value && accept === "raw" && (
        <a href={value} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs text-brand-blue underline"><FileText className="h-3.5 w-3.5" /> View uploaded file</a>
      )}
      <input type="url" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Or paste a URL directly" className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs text-muted-foreground focus:outline-none focus:border-brand-blue" />
    </div>
  );
}