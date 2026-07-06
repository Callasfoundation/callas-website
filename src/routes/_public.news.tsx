import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/_public/news")({ component: () => <Outlet /> });