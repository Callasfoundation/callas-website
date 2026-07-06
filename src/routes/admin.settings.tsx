import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { KeyRound, Save } from "lucide-react";
import { api, auth } from "@/lib/api";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Settings — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  const user = auth.user();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    if (next.length < 8) return setMsg({ kind: "err", text: "New password must be at least 8 characters." });
    if (next !== confirm) return setMsg({ kind: "err", text: "New passwords don't match." });
    setBusy(true);
    try {
      await api.changePassword(current, next);
      setMsg({ kind: "ok", text: "Password updated." });
      setCurrent(""); setNext(""); setConfirm("");
    } catch (e) {
      setMsg({ kind: "err", text: e instanceof Error ? e.message : "Could not update password." });
    } finally { setBusy(false); }
  }

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold text-ink">Settings</h1>
        <p className="text-muted-foreground">Manage your Callas Foundation admin account.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="font-display text-lg font-bold text-ink">Account</div>
        <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
          <dt className="text-muted-foreground">Name</dt><dd className="col-span-2 font-medium text-ink">{user?.name ?? "—"}</dd>
          <dt className="text-muted-foreground">Email</dt><dd className="col-span-2 font-medium text-ink">{user?.email ?? "—"}</dd>
        </dl>
      </div>

      <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
        <div className="flex items-center gap-2 font-display text-lg font-bold text-ink"><KeyRound className="h-4 w-4 text-brand-blue" /> Change password</div>
        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Current password</label>
          <input type="password" required value={current} onChange={(e) => setCurrent(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">New password</label>
            <input type="password" required minLength={8} value={next} onChange={(e) => setNext(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Confirm new password</label>
            <input type="password" required minLength={8} value={confirm} onChange={(e) => setConfirm(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5" />
          </div>
        </div>
        {msg && <div className={`rounded-lg px-4 py-2 text-sm ${msg.kind === "ok" ? "bg-green-50 text-green-700" : "bg-brand-red/10 text-brand-red"}`}>{msg.text}</div>}
        <button disabled={busy} className="inline-flex items-center gap-1.5 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 text-sm font-semibold disabled:opacity-60">
          <Save className="h-4 w-4" /> {busy ? "Saving…" : "Update password"}
        </button>
      </form>
    </div>
  );
}
