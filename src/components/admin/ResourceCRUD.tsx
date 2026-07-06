import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { api } from "@/lib/api";

type Field = { key: string; label: string; type?: "text" | "textarea" | "date" | "url" };

export function ResourceCRUD({
  resource,
  title,
  fields,
}: {
  resource: string;
  title: string;
  fields: Field[];
}) {
  type Row = Record<string, string> & { id: string };
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Row | null>(null);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    setLoading(true);
    try { setRows(await api.list<Row>(resource)); setError(null); }
    catch (e) { setError(e instanceof Error ? e.message : "Failed to load"); }
    finally { setLoading(false); }
  }
  useEffect(() => { refresh(); }, [resource]); // eslint-disable-line react-hooks/exhaustive-deps

  async function save(payload: Row) {
    if (payload.id) await api.update(resource, payload.id, payload);
    else await api.create(resource, payload);
    setEditing(null); setCreating(false); refresh();
  }
  async function remove(id: string) {
    if (!confirm("Delete this item?")) return;
    await api.remove(resource, id); refresh();
  }

  const active = editing ?? (creating ? ({ id: "" } as Row) : null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl font-bold text-ink">{title}</h1>
          <p className="text-sm text-muted-foreground">Manage <code className="text-brand-blue">/api/{resource}</code></p>
        </div>
        <button onClick={() => { setCreating(true); setEditing(null); }} className="inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 text-sm font-semibold">
          <Plus className="h-4 w-4" /> New
        </button>
      </div>

      {error && <div className="mb-4 rounded-lg bg-brand-red/10 text-brand-red px-4 py-2 text-sm">{error}</div>}

      {active && <RowForm fields={fields} initial={active} onCancel={() => { setEditing(null); setCreating(false); }} onSave={save} />}

      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              {fields.slice(0, 3).map((f) => <th key={f.key} className="text-left px-4 py-3 font-semibold">{f.label}</th>)}
              <th className="px-4 py-3 w-32"></th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">Loading…</td></tr>}
            {!loading && rows.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No items yet.</td></tr>}
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50">
                {fields.slice(0, 3).map((f) => <td key={f.key} className="px-4 py-3 max-w-xs truncate">{String(r[f.key] ?? "")}</td>)}
                <td className="px-4 py-3 text-right">
                  <button onClick={() => { setEditing(r); setCreating(false); }} className="inline-flex items-center gap-1 text-brand-blue hover:text-brand-blue-dark mr-3"><Pencil className="h-4 w-4" /></button>
                  <button onClick={() => remove(r.id)} className="inline-flex items-center gap-1 text-brand-red hover:text-brand-red-dark"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RowForm({ fields, initial, onSave, onCancel }: { fields: Field[]; initial: Record<string, string> & { id: string }; onSave: (v: Record<string, string> & { id: string }) => void; onCancel: () => void }) {
  const [values, setValues] = useState<Record<string, string> & { id: string }>({ ...initial });
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(values); }} className="mb-6 rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-5 space-y-3">
      <div className="font-display font-bold text-ink">{initial.id ? "Edit" : "New"}</div>
      {fields.map((f) => (
        <div key={f.key}>
          <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{f.label}</label>
          {f.type === "textarea" ? (
            <textarea rows={4} value={values[f.key] ?? ""} onChange={(e) => setValues({ ...values, [f.key]: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-brand-blue" />
          ) : (
            <input type={f.type || "text"} value={values[f.key] ?? ""} onChange={(e) => setValues({ ...values, [f.key]: e.target.value })} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:border-brand-blue" />
          )}
        </div>
      ))}
      <div className="flex gap-2 pt-2">
        <button type="submit" className="inline-flex items-center gap-1.5 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 text-sm font-semibold"><Save className="h-4 w-4" /> Save</button>
        <button type="button" onClick={onCancel} className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 text-ink px-4 py-2 text-sm font-semibold"><X className="h-4 w-4" /> Cancel</button>
      </div>
    </form>
  );
}