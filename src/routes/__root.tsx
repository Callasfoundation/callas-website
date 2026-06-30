import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

import { SiteLayout } from "../components/SiteLayout";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="font-display text-8xl font-bold text-callas-red">404</div>
        <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
        <p className="mt-2 max-w-md text-sm text-callas-ink/70">
          The page you’re looking for doesn’t exist or has moved. Use the navigation above, or return to the home page.
        </p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-callas-red px-5 py-2.5 text-sm font-bold text-white hover:bg-callas-red-dark">
          Go home
        </Link>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  
  return (
    <SiteLayout>
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="font-display text-2xl font-bold">This page didn’t load</h1>
        <p className="mt-2 max-w-md text-sm text-callas-ink/70">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-callas-red px-5 py-2.5 text-sm font-bold text-white hover:bg-callas-red-dark"
          >Try again</button>
          <a href="/" className="rounded-full border border-callas-line px-5 py-2.5 text-sm font-bold text-callas-ink hover:bg-callas-canvas">Go home</a>
        </div>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Callas Foundation — Standing With Survivors. Building Safer Communities." },
      { name: "description", content: "Callas Foundation is a Cape Flats non-profit responding to gender-based violence through justice, healing, training, youth mentorship, and daily community feeding." },
      { name: "author", content: "Callas Foundation" },
      { name: "keywords", content: "Gender-Based Violence Cape Town, GBV support Cape Flats, Protection Orders Cape Town, Trauma Counselling, Community Kitchen, Violence Prevention" },
      { property: "og:title", content: "Callas Foundation — Helping In Our Way" },
      { property: "og:description", content: "Frontline GBV response, access to justice, community feeding and youth mentorship across the Cape Flats." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
  { rel: "stylesheet", href: appCss },
  { rel: "icon", type: "image/png", href: "/favicon.png" },
],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
