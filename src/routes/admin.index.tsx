import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Lock, Loader2, ShieldAlert } from "lucide-react";
import { login, useAuth } from "@/lib/auth";

export const Route = createFileRoute("/admin/")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const { isAuthenticated, ready } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (ready && isAuthenticated) navigate({ to: "/admin/dashboard", replace: true });
  }, [ready, isAuthenticated, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      await login(username.trim(), password);
      navigate({ to: "/admin/dashboard", replace: true });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Sign-in failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-callas-ink p-12 text-white lg:flex">
        <div className="absolute inset-0 bg-gradient-to-br from-callas-red/30 via-transparent to-callas-blue/30" />
        <div className="relative">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Callas Foundation</div>
          <div className="mt-2 font-display text-2xl font-bold">Admin Control Panel</div>
        </div>
        <div className="relative">
          <div className="font-display text-5xl font-bold leading-[1.05]">
            Standing with<br />survivors.<br />
            <span className="text-callas-red">Every day.</span>
          </div>
          <p className="mt-6 max-w-md text-sm text-white/70">
            Secure access for Callas team members. All actions are logged and audited.
          </p>
        </div>
        <div className="relative text-xs text-white/50">© {new Date().getFullYear()} Callas Foundation</div>
      </div>

      {/* Login form */}
      <div className="flex items-center justify-center bg-white p-6 sm:p-12">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-callas-red text-white">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight">Admin sign-in</h1>
          <p className="mt-2 text-sm text-callas-ink/65">
            Enter your credentials to access the Callas Foundation control panel.
          </p>

          <label className="mt-8 block">
            <span className="text-xs font-bold uppercase tracking-wider text-callas-ink/70">Username</span>
            <input
              autoFocus
              autoComplete="username"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setErr(""); }}
              className="mt-1.5 w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none transition focus:border-callas-blue focus:ring-2 focus:ring-callas-blue/20"
              placeholder="admin"
              required
            />
          </label>

          <label className="mt-4 block">
            <span className="text-xs font-bold uppercase tracking-wider text-callas-ink/70">Password</span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setErr(""); }}
              className="mt-1.5 w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none transition focus:border-callas-blue focus:ring-2 focus:ring-callas-blue/20"
              placeholder="••••••••"
              required
            />
          </label>

          {err && (
            <div className="mt-4 flex items-start gap-2 rounded-md border border-callas-red/30 bg-callas-red/10 p-3 text-xs font-semibold text-callas-red">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" /> {err}
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-callas-red px-5 py-3 text-sm font-bold text-white shadow-lg shadow-callas-red/30 transition hover:bg-callas-red-dark disabled:opacity-60"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
            {busy ? "Signing in…" : "Sign in"}
          </button>

          <p className="mt-6 text-[11px] leading-relaxed text-callas-ink/50">
            This sign-in connects to <code className="rounded bg-callas-canvas px-1 py-0.5">/api/auth/login</code>.
            Until the ASP.NET Core backend is wired up, use the development
            credentials <code className="rounded bg-callas-canvas px-1 py-0.5">admin</code> /
            <code className="rounded bg-callas-canvas px-1 py-0.5"> callas2026</code>.
          </p>
        </form>
      </div>
    </div>
  );
}
