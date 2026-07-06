import { createFileRoute, Outlet, redirect, useRouterState } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { auth } from "@/lib/api";

export const Route = createFileRoute("/admin")({
  component: AdminRoot,
  beforeLoad: ({ location }) => {
    if (location.pathname !== "/admin" && typeof window !== "undefined" && !auth.isAuthenticated()) {
      throw redirect({ to: "/admin" });
    }
  },
});

function AdminRoot() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/admin") return <Outlet />;
  return <AdminShell />;
}