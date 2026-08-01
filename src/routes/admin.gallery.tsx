import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Plus, Trash2, Pencil, Save, X } from "lucide-react";
import { api } from "@/lib/api";
import { MediaUpload } from "@/components/admin/MediaUpload";

type GalleryItem = { id: string; imageUrl: string; caption: string; category: string; mediaType: "image" | "video" };

export const Route = createFileRoute("/admin/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: GalleryAdmin,
});

function GalleryAdmin() {
  const navigate = useNavigate();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    setLoading(true);
    try { setItems(await api.list<GalleryItem>("gallery")); }
    catch (e) { setError(e instanceof Error ? e.message : "Failed to load"); }
    finally { setLoading(false); }
  }
  useEffect(() => { refresh(); }, []);

  const categories = Array.from(new Set(items.map((i) => i.category).filter(Boolean))).sort();

  async function save(payload: GalleryItem) {
    try {
      if (payload.id) await api.update("gallery", payload.id, payload);
      else await api.create("gallery", payload);
      setEditing(null); setCreating(false); refresh();
    } catch (e) {
      if (e instanceof Error && e.message === "Unauthorized") { navigate({ to: "/admin" }); return; }
      setError(e instanceof Error ? e.message : "Failed to save");
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this item?")) return;
    try { await api.remove("gallery", id); refresh(); }
    catch (e) {
      if (e instanceof Error && e.message === "Unauthorized") { navigate({ to: "/admin" }); return; }
      setError(e instanceof Error ? e.message : "Failed to delete");
    }
  }

  const active = editing ?? (creating ? ({ id: "", imageUrl: "", caption: "", category: "", mediaType: "image" } as GalleryItem) : null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl font-bold text-ink">Gallery</h1>
          <p className="text-sm text-muted-foreground">Photos and videos, organised by category</p>
        </div>
        <button onClick={() => { setCreating(true); setEditing(null); }} className="inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 text-sm font-semibold">
          <Plus className="h-4 w-4" /> New
        </button>
      </div>

      {error && <div className="mb-4 rounded-lg bg-brand-red/10 text-brand-red px-4 py-2 text-sm">{error}</div>}

      {active && <GalleryForm initial={active} categories={categories} onCancel={() => { setEditing(null); setCreating(false); }} onSave={save} />}

      {loading && <p className="text-muted-foreground">Loading…</p>}
      {!loading && categories.length === 0 && <p className="text-muted-foreground">No items yet.</p>}

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <div className="text-xs uppercase tracking-wider text-brand-blue font-semibold mb-3">{cat}</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {items.filter((i) => i.category === cat).map((item) => (
              <div key={item.id} className="group relative rounded-lg overflow-hidden border border-slate-200 aspect-square">
                {item.mediaType === "video" ? (
                  <video src={item.imageUrl} className="h-full w-full object-cover" />
                ) : (
                  <img src={item.imageUrl} alt={item.caption} className="h-full w-full object-cover" />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button onClick={() => { setEditing(item); setCreating(false); }} className="p-1.5 rounded-full bg-white text-ink"><Pencil className="h-3.5 w-3.5" /></button>
                  <button onClick={() => remove(item.id)} className="p-1.5 rounded-full bg-white text-brand-red"><Trash2 className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function GalleryForm({ initial, categories, onSave, onCancel }: { initial: GalleryItem; categories: string[]; onSave: (v: GalleryItem) => void; onCancel: () => void }) {
  const [values, setValues] = useState<GalleryItem>({ ...initial });
  const [newCategory, setNewCategory] = useState(false);

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(values); }} className="mb-6 rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-5 space-y-4">
      <div className="font-display font-bold text-ink">{initial.id ? "Edit" : "New"} gallery item</div>

      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Type</label>
        <div className="mt-1 flex gap-2">
          {(["image", "video"] as const).map((t) => (
            <button key={t} type="button" onClick={() => setValues({ ...values, mediaType: t, imageUrl: "" })}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${values.mediaType === t ? "bg-brand-red text-white" : "bg-white border border-slate-300 text-ink"}`}>
              {t === "image" ? "Photo" : "Video"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Category</label>
        {!newCategory ? (
          <div className="mt-1 flex gap-2">
            <select value={values.category} onChange={(e) => setValues({ ...values, category: e.target.value })} className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-brand-blue">
              <option value="">Select a category…</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <button type="button" onClick={() => { setNewCategory(true); setValues({ ...values, category: "" }); }} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-brand-blue whitespace-nowrap">+ New category</button>
          </div>
        ) : (
          <div className="mt-1 flex gap-2">
            <input value={values.category} onChange={(e) => setValues({ ...values, category: e.target.value })} placeholder="e.g. Community Kitchen" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-brand-blue" />
            <button type="button" onClick={() => setNewCategory(false)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-ink whitespace-nowrap">Use existing</button>
          </div>
        )}
      </div>

      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{values.mediaType === "video" ? "Video" : "Photo"}</label>
        <div className="mt-1">
          <MediaUpload value={values.imageUrl} onChange={(url) => setValues({ ...values, imageUrl: url })} accept={values.mediaType} />
        </div>
      </div>

      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Caption</label>
        <input value={values.caption} onChange={(e) => setValues({ ...values, caption: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-brand-blue" />
      </div>

      <div className="flex gap-2 pt-2">
        <button type="submit" className="inline-flex items-center gap-1.5 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 text-sm font-semibold"><Save className="h-4 w-4" /> Save</button>
        <button type="button" onClick={onCancel} className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 text-ink px-4 py-2 text-sm font-semibold"><X className="h-4 w-4" /> Cancel</button>
      </div>
    </form>
  );
}