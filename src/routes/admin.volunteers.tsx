// src/routes/admin.volunteers.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { api } from "@/lib/api";

type Volunteer = { id: string; name: string; email: string; phone: string; track: string; availableDays: string; note: string; dateSubmitted: string; isRead: boolean };

export const Route = createFileRoute("/admin/volunteers")({
  head: () => ({ meta: [{ title: "Volunteers — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: Volunteers,
});

function Volunteers() {
  const [rows, setRows] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      setRows(await api.list<Volunteer>("volunteers"));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load volunteer sign-ups.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { refresh(); }, []);

  async function toggleRead(v: Volunteer) {
    await api.markVolunteerRead(v.id, !v.isRead);
    refresh();
  }

  async function remove(id: string) {
    if (!confirm("Delete this volunteer sign-up?")) return;
    await api.remove("volunteers", id);
    refresh();
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-ink mb-6">Volunteer Sign-ups</h1>
      {error && <div className="mb-4 rounded-lg bg-brand-red/10 text-brand-red px-4 py-3 text-sm">{error}</div>}
      {loading ? <p className="text-muted-foreground">Loading…</p> : (
        <div className="space-y-3">
          {rows.map((v) => (
            <div key={v.id} className={`rounded-xl border p-4 ${v.isRead ? "border-slate-200" : "border-brand-blue/40 bg-brand-blue/5"}`}>
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold text-ink">{v.name} &lt;{v.email}&gt;</div>
                  <div className="text-xs text-muted-foreground">{v.phone} · Available: {v.availableDays} · {new Date(v.dateSubmitted).toLocaleString()}</div>
                </div>
                <div className="flex gap-3 shrink-0">
                  <button onClick={() => toggleRead(v)} className="text-xs text-brand-blue hover:underline">{v.isRead ? "Mark unread" : "Mark read"}</button>
                  <button onClick={() => remove(v.id)} className="text-brand-red hover:text-brand-red-dark"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="mt-2 text-sm"><span className="font-semibold text-brand-blue">Interests: </span>{v.track}</div>
              {v.note && <p className="mt-1 text-sm text-muted-foreground">{v.note}</p>}
            </div>
          ))}
          {rows.length === 0 && <p className="text-muted-foreground">No volunteer sign-ups yet.</p>}
        </div>
      )}
    </div>
  );
}