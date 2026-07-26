// src/routes/_public.news.index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { api } from "@/lib/api";

type NewsItem = { id: number; title: string; excerpt: string; category: string; publishedDate: string; author: string; imageUrl: string };

export const Route = createFileRoute("/_public/news/")({
  head: () => ({ meta: [{ title: "News — Callas Foundation" }] }),
  component: NewsIndex,
});

function NewsIndex() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.list<NewsItem>("news")
      .then((rows) => setItems(rows.sort((a, b) => +new Date(b.publishedDate) - +new Date(a.publishedDate))))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHeader eyebrow="Updates" title="News from the field." crumbs={[{ label: "News" }]} />
      <section className="bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {loading && <p className="text-muted-foreground">Loading…</p>}
        {!loading && items.length === 0 && <p className="text-muted-foreground">No news yet.</p>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <Link key={n.id} to="/news/$id" params={{ id: String(n.id) }} className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow block">
              {n.imageUrl && <img src={n.imageUrl} alt="" className="w-full h-44 object-cover" />}
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-brand-blue font-semibold">{n.category}</div>
                <h3 className="font-display text-lg font-bold text-ink mt-1">{n.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{n.excerpt}</p>
                <div className="text-xs text-muted-foreground mt-3">{n.author} · {new Date(n.publishedDate).toLocaleDateString()}</div>
              </div>
            </Link>
          ))}
        </div>
      </div></section>
    </>
  );
}