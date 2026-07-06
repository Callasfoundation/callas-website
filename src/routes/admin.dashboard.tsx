import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FileText, Calendar, Users, Image as ImageIcon, Mail } from "lucide-react";
import { api } from "@/lib/api";

const resources = [
  { key: "posts", label: "Posts", icon: FileText, to: "/admin/posts" },
  { key: "events", label: "Events", icon: Calendar, to: "/admin/events" },
  { key: "team", label: "Team", icon: Users, to: "/admin/team" },
  { key: "gallery", label: "Gallery", icon: ImageIcon, to: "/admin/gallery" },
  { key: "messages", label: "Messages", icon: Mail, to: "/admin/messages" },
] as const;

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: Dashboard,
});

function Dashboard() {
  const [counts, setCounts] = useState<Record<string, number | null>>({});
  const [backendUp, setBackendUp] = useState<boolean | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        await api.ping();
        if (!alive) return;
        setBackendUp(true);
      } catch {
        if (!alive) return;
        setBackendUp(false);
        return;
      }
      for (const r of resources) {
        try {
          const rows = await api.list(r.key);
          if (!alive) return;
          setCounts((c) => ({ ...c, [r.key]: (rows as unknown[]).length }));
        } catch {
          if (!alive) return;
          setCounts((c) => ({ ...c, [r.key]: null }));
        }
      }
    })();
    return () => { alive = false; };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-ink">Welcome back.</h1>
        <p className="text-muted-foreground">Manage content and review incoming messages.</p>
      </div>
      {backendUp === false && (
        <div className="rounded-xl border border-brand-red/30 bg-brand-red/5 text-brand-red p-4 text-sm">
          Backend is not reachable. Start it locally with <code className="font-mono">cd backend &amp;&amp; uvicorn main:app --reload</code>, then reload this page.
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {resources.map((r) => (
          <Link key={r.key} to={r.to} className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-blue transition-colors">
            <r.icon className="h-5 w-5 text-brand-blue" />
            <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{r.label}</div>
            <div className="mt-1 font-display text-3xl font-bold text-ink">
              {counts[r.key] === undefined ? "…" : counts[r.key] === null ? "—" : counts[r.key]}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}