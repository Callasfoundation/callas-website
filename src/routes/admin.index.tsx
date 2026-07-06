import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Lock, LogIn } from "lucide-react";
import { api, auth } from "@/lib/api";
// `auth` is used by the redirect-if-signed-in effect below.
import logo from "@/assets/callas-logo.asset.json";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin — Callas Foundation" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => { if (auth.isAuthenticated()) navigate({ to: "/admin/dashboard" }); }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await api.login(email, password);
      navigate({ to: "/admin/dashboard" });
    } catch {
      setError("Invalid email or password.");
    } finally { setLoading(false); }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-ink text-white p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-ink via-brand-blue-dark/40 to-ink" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <form onSubmit={submit} className="relative w-full max-w-md rounded-2xl bg-white text-ink p-8 shadow-2xl">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="" className="h-12 w-12" />
          <div>
            <div className="font-display text-xl font-bold">Callas Admin</div>
            <div className="text-xs text-muted-foreground">Secure staff portal</div>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</label>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:border-brand-blue" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Password</label>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:border-brand-blue" />
          </div>
          {error && <div className="rounded-lg bg-brand-red/10 text-brand-red px-4 py-2 text-sm">{error}</div>}
          <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 font-semibold disabled:opacity-60">
            {loading ? "Signing in…" : <><LogIn className="h-4 w-4" /> Sign In</>}
          </button>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5"><Lock className="h-3 w-3" /> Sessions use secure httpOnly cookies. See <code>backend/</code>.</p>
        </div>
      </form>
    </div>
  );
}