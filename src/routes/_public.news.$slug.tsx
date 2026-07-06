import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { news } from "@/data/content";

export const Route = createFileRoute("/_public/news/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [{ title: `${loaderData.item.title} — Callas Foundation` }, { name: "description", content: loaderData.item.excerpt }, { property: "og:image", content: loaderData.item.image }]
      : [{ title: "Article — Callas Foundation" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (<div className="min-h-[50vh] grid place-items-center"><Link to="/news" className="text-brand-blue underline">Back to news</Link></div>),
  errorComponent: ({ reset }) => (<div className="min-h-[50vh] grid place-items-center"><button onClick={reset} className="text-brand-blue underline">Retry</button></div>),
  component: () => {
    const { item } = Route.useLoaderData() as { item: (typeof news)[number] };
    return (
      <>
        <PageHeader eyebrow={item.category} title={item.title} crumbs={[{ label: "News", to: "/news" }, { label: item.title }]} />
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-sm text-muted-foreground">{new Date(item.date).toLocaleDateString("en-ZA", { dateStyle: "long" })} · {item.author}</div>
          <img src={item.image} alt="" className="mt-6 w-full rounded-2xl aspect-video object-cover" />
          <p className="mt-8 text-xl text-ink leading-relaxed">{item.excerpt}</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">{item.body}</p>
        </article>
      </>
    );
  },
});