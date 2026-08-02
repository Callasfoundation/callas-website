import { Link, useNavigate, useRouterState, Outlet } from "@tanstack/react-router";
import { LayoutDashboard, FileText, Calendar, Users, Image, Mail, Settings, LogOut, Menu, X, Handshake, BookOpen, Layers, HeartHandshake, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import logo from "@/assets/images/logo/callas-logo.png";

const items = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/posts", label: "Posts", icon: FileText },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/team", label: "Team", icon: Users },
  { to: "/admin/gallery", label: "Gallery", icon: Image },
  { to: "/admin/messages", label: "Messages", icon: Mail, countResource: "contact" },
  { to: "/admin/volunteers", label: "Volunteers", icon: HeartHandshake, countResource: "volunteers" },
  { to: "/admin/partners", label: "Partners", icon: Handshake },
  { to: "/admin/resources", label: "Resources", icon: BookOpen },
  { to: "/admin/shop", label: "Shop", icon: ShoppingBag },
  { to: "/admin/programmes", label: "Programmes", icon: Layers },
  { to: "/admin/settings", label: "Settings", icon: Settings },
  { to: "/admin/impact", label: "Impact", icon: LayoutDashboard },
] as const;

const POLL_INTERVAL_MS = 20000;

type Unreadable = { isRead: boolean };

export function AdminShell() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      const resources = Array.from(new Set(items.map((i) => ("countResource" in i ? i.countResource : null)).filter(Boolean))) as string[];
      const results = await Promise.all(
        resources.map(async (resource) => {
          try {
            const rows = await api.list<Unreadable>(resource);
            return [resource, rows.filter((r) => !r.isRead).length] as const;
          } catch {
            return [resource, 0] as const;
          }
        }),
      );
      if (!cancelled) setCounts(Object.fromEntries(results));
    }

    poll();
    const id = setInterval(poll, POLL_INTERVAL_MS);
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  async function signOut() { await api.logout(); navigate({ to: "/admin", replace: true }); }

  return (
    <div className="min-h-screen bg-canvas flex">
      <aside className={`${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:sticky top-0 z-40 h-screen w-64 bg-ink text-white flex flex-col transition-transform`}>
        <div className="px-5 py-5 border-b border-white/10 flex items-center gap-3">
          <div className="relative">
            <img src={logo} alt="" className="h-9 w-9 bg-white rounded-full p-0.5" />
            {Object.values(counts).some((n) => n > 0) && (
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-brand-red ring-2 ring-ink" />
            )}
          </div>
          <div><div className="font-display font-bold">Callas Admin</div><div className="text-[10px] uppercase tracking-widest text-white/60">Portal</div></div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {items.map((i) => {
            const active = pathname === i.to;
            const count = "countResource" in i ? counts[i.countResource] ?? 0 : 0;
            return (
              <Link key={i.to} to={i.to} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${active ? "bg-brand-red text-white" : "text-white/80 hover:bg-white/10"}`}>
                <i.icon className="h-4 w-4" />
                <span className="flex-1">{i.label}</span>
                {count > 0 && (
                  <span className="grid place-items-center min-w-[1.25rem] h-5 px-1 rounded-full bg-brand-red text-white text-[11px] font-bold leading-none">{count > 99 ? "99+" : count}</span>
                )}
              </Link>
            );
          })}
        </nav>
        <button onClick={signOut} className="m-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm bg-white/10 hover:bg-brand-red text-white transition-colors"><LogOut className="h-4 w-4" /> Sign out</button>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 h-14">
          <button className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          <div className="font-display font-bold text-ink">{items.find((i) => i.to === pathname)?.label ?? "Admin"}</div>
          <div className="text-xs text-muted-foreground">Signed in</div>
        </header>
        <main className="flex-1 p-4 lg:p-8"><Outlet /></main>
      </div>
    </div>
  );
}