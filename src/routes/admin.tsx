import { createFileRoute, Outlet, Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  LayoutDashboard, Newspaper, Calendar, Users, Images, Inbox, Settings, LogOut, Shield,
} from "lucide-react";
import { useAuth, logout } from "@/lib/auth";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin — Callas Foundation" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminLayout,
});

const NAV = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/posts", label: "Posts", icon: Newspaper },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/team", label: "Team", icon: Users },
  { to: "/admin/gallery", label: "Gallery", icon: Images },
  { to: "/admin/messages", label: "Messages", icon: Inbox },
  { to: "/admin/settings", label: "Settings", icon: Settings },
] as const;

function AdminLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { user, ready, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const isLogin = pathname === "/admin";

  // Client-side guard: redirect to /admin if accessing protected pages unauthenticated
  useEffect(() => {
    if (!ready) return;
    if (!isAuthenticated && !isLogin) {
      navigate({ to: "/admin", replace: true });
    }
  }, [ready, isAuthenticated, isLogin, navigate]);

  // Login screen — no chrome
  if (isLogin) {
    return <Outlet />;
  }

  if (!ready || !isAuthenticated) {
    return (
      <div className="grid min-h-screen place-items-center bg-callas-canvas text-sm text-callas-ink/60">
        Loading…
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-callas-canvas text-callas-ink">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-callas-line bg-white lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-callas-line px-5">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-callas-red text-white">
            <Shield className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold">Callas Admin</div>
            <div className="text-[10px] uppercase tracking-wider text-callas-ink/50">Control Panel</div>
          </div>
        </div>
        <nav className="flex-1 space-y-0.5 p-3">
          {NAV.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold transition ${
                  active ? "bg-callas-ink text-white" : "text-callas-ink/70 hover:bg-callas-canvas hover:text-callas-ink"
                }`}
              >
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-callas-line p-3">
          <div className="px-3 py-2 text-xs text-callas-ink/60">
            Signed in as
            <div className="font-bold text-callas-ink">{user?.displayName}</div>
          </div>
          <button
            onClick={async () => { await logout(); navigate({ to: "/admin", replace: true }); }}
            className="mt-1 flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-callas-red hover:bg-callas-red/10"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b border-callas-line bg-white/90 px-6 backdrop-blur">
          <div className="flex items-center gap-3 lg:hidden">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-callas-red text-white">
              <Shield className="h-4 w-4" />
            </div>
            <div className="font-display text-sm font-bold">Callas Admin</div>
          </div>
          <div className="hidden text-sm font-semibold text-callas-ink lg:block">
            {NAV.find((n) => n.to === pathname)?.label ?? "Admin"}
          </div>
          <div className="flex items-center gap-2">
            <a href="/" className="hidden rounded-full border border-callas-line px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-callas-ink/70 hover:bg-callas-canvas sm:inline-flex">
              View site
            </a>
            <button
              onClick={async () => { await logout(); navigate({ to: "/admin", replace: true }); }}
              className="inline-flex items-center gap-1.5 rounded-full bg-callas-ink px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white lg:hidden"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign out
            </button>
          </div>
        </header>

        {/* Mobile nav strip */}
        <div className="flex gap-1 overflow-x-auto border-b border-callas-line bg-white px-3 py-2 lg:hidden">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold ${
                  active ? "bg-callas-ink text-white" : "text-callas-ink/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <main className="flex-1 p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
