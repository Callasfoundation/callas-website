import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { api } from "@/lib/api";

type NewsItem = { id: number; title: string; body: string; category: string; publishedDate: string; author: string; imageUrl: string };

export const Route = createFileRoute("/_public/news/$id")({
  component: NewsDetail,
});

function NewsDetail() {
  const { id } = Route.useParams();
  const [item, setItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<NewsItem>("news", id).then(setItem).finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="py-20 text-center text-muted-foreground">Loading…</div>;
  if (!item) return <div className="py-20 text-center text-muted-foreground">Article not found.</div>;

  return (
    <>
      <PageHeader eyebrow={item.category} title={item.title} crumbs={[{ label: "News", to: "/news" }, { label: item.title }]} image={item.imageUrl} />
      <section className="bg-white"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-sm text-muted-foreground mb-6">{item.author} · {new Date(item.publishedDate).toLocaleDateString()}</div>
        <div className="prose max-w-none whitespace-pre-line">{item.body}</div>
      </div></section>
    </>
  );
}
