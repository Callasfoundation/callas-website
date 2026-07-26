// src/routes/admin.messages.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { api } from "@/lib/api";

type Message = { id: string; name: string; email: string; subject: string; category: string; message: string; dateSubmitted: string; isRead: boolean };

export const Route = createFileRoute("/admin/messages")({
  head: () => ({ meta: [{ title: "Messages — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: Messages,
});

function Messages() {
  const [rows, setRows] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    setLoading(true);
    try { setRows(await api.list<Message>("contact")); } finally { setLoading(false); }
  }
  useEffect(() => { refresh(); }, []);

  async function toggleRead(m: Message) {
    await api.markContactRead(m.id, !m.isRead);
    refresh();
  }
  async function remove(id: string) {
    if (!confirm("Delete this message?")) return;
    await api.remove("contact", id);
    refresh();
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-ink mb-6">Contact Messages</h1>
      {loading ? <p className="text-muted-foreground">Loading…</p> : (
        <div className="space-y-3">
          {rows.map((m) => (
            <div key={m.id} className={`rounded-xl border p-4 ${m.isRead ? "border-slate-200" : "border-brand-blue/40 bg-brand-blue/5"}`}>
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold text-ink">{m.subject || "(no subject)"} — {m.name} &lt;{m.email}&gt;</div>
                  <div className="text-xs text-muted-foreground">{m.category} · {new Date(m.dateSubmitted).toLocaleString()}</div>
                </div>
                <div className="flex gap-3 shrink-0">
                  <button onClick={() => toggleRead(m)} className="text-xs text-brand-blue hover:underline">{m.isRead ? "Mark unread" : "Mark read"}</button>
                  <button onClick={() => remove(m.id)} className="text-brand-red hover:text-brand-red-dark"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
              <p className="mt-2 text-sm">{m.message}</p>
            </div>
          ))}
          {rows.length === 0 && <p className="text-muted-foreground">No messages yet.</p>}
        </div>
      )}
    </div>
  );
}