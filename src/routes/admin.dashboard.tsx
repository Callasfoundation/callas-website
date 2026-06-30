import { createFileRoute, Link } from "@tanstack/react-router";
import { Newspaper, Calendar, Inbox, Images, TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { useImpact, useNews, useEvents } from "@/lib/store";

export const Route = createFileRoute("/admin/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [impact] = useImpact();
  const [news] = useNews();
  const [events] = useEvents();

  const cards = [
    { label: "Posts published", value: news.length, icon: Newspaper, to: "/admin/posts", color: "bg-callas-red" },
    { label: "Upcoming events", value: events.length, icon: Calendar, to: "/admin/events", color: "bg-callas-blue" },
    { label: "Team members", value: 12, icon: Users, to: "/admin/team", color: "bg-callas-ink" },
    { label: "Unread messages", value: 4, icon: Inbox, to: "/admin/messages", color: "bg-callas-red" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Overview</div>
        <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="mt-1 text-sm text-callas-ink/65">Snapshot of content, events, and engagement across Callas Foundation.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.label} to={c.to} className="group rounded-2xl border border-callas-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-callas-red hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className={`grid h-10 w-10 place-items-center rounded-lg ${c.color} text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-callas-ink/40 transition group-hover:text-callas-red" />
              </div>
              <div className="mt-4 font-display text-3xl font-bold">{c.value}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-callas-ink/60">{c.label}</div>
            </Link>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <section className="rounded-2xl border border-callas-line bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Live impact metrics</h2>
            <Link to="/admin/settings" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-callas-red">
              <TrendingUp className="h-3 w-3" /> Edit metrics
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-callas-line/70">
            {impact.map((s, i) => (
              <li key={i} className="flex items-center justify-between py-3">
                <span className="text-sm text-callas-ink/75">{s.label}</span>
                <span className="font-display text-xl font-bold text-callas-blue">
                  {s.value.toLocaleString()}{s.suffix}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-callas-line bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Recent posts</h2>
            <Link to="/admin/posts" className="text-xs font-bold uppercase tracking-wider text-callas-red">Manage</Link>
          </div>
          <ul className="mt-4 space-y-3">
            {news.slice(0, 4).map((n) => (
              <li key={n.id} className="rounded-lg border border-callas-line/70 p-3">
                <div className="text-xs font-bold uppercase tracking-wider text-callas-red">{n.category}</div>
                <div className="mt-0.5 text-sm font-bold leading-tight">{n.title}</div>
                <div className="mt-1 text-[11px] text-callas-ink/60">{new Date(n.date).toLocaleDateString("en-ZA")}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-callas-line bg-white p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Backend integration</h2>
            <span className="rounded-full bg-callas-canvas px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-callas-ink/60">Pending</span>
          </div>
          <p className="mt-2 text-sm text-callas-ink/70">
            The admin panel is wired to placeholder REST endpoints. Point the
            following routes at your ASP.NET Core API to go live:
          </p>
          <ul className="mt-4 grid gap-2 text-xs font-mono text-callas-ink/80 sm:grid-cols-2">
            <li><code className="rounded bg-callas-canvas px-2 py-1">POST /api/auth/login</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">POST /api/auth/logout</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">GET /api/posts</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">POST /api/posts</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">PUT /api/posts/{`{id}`}</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">DELETE /api/posts/{`{id}`}</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">GET /api/events</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">POST /api/events</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">GET /api/team</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">GET /api/gallery</code></li>
            <li><code className="rounded bg-callas-canvas px-2 py-1">GET /api/messages</code></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
