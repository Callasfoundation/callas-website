import { Link, useNavigate, useRouterState, Outlet } from "@tanstack/react-router";
import { LayoutDashboard, FileText, Calendar, Users, Image, Mail, Settings, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/api";
import logo from "@/assets/images/logo/callas-logo.png";

const items = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/posts", label: "Posts", icon: FileText },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/team", label: "Team", icon: Users },
  { to: "/admin/gallery", label: "Gallery", icon: Image },
  { to: "/admin/messages", label: "Messages", icon: Mail },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;

export function AdminShell() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  async function signOut() { await api.logout(); navigate({ to: "/admin", replace: true }); }

  return (
    <div className="min-h-screen bg-canvas flex">
      <aside className={`${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:sticky top-0 z-40 h-screen w-64 bg-ink text-white flex flex-col transition-transform`}>
        <div className="px-5 py-5 border-b border-white/10 flex items-center gap-3">
          <img src={logo} alt="" className="h-9 w-9 bg-white rounded-full p-0.5" />
          <div><div className="font-display font-bold">Callas Admin</div><div className="text-[10px] uppercase tracking-widest text-white/60">Portal</div></div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {items.map((i) => {
            const active = pathname === i.to;
            return (
              <Link key={i.to} to={i.to} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${active ? "bg-brand-red text-white" : "text-white/80 hover:bg-white/10"}`}>
                <i.icon className="h-4 w-4" /> {i.label}
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