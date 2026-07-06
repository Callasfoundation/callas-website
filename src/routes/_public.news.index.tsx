import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { news } from "@/data/content";

export const Route = createFileRoute("/_public/news/")({
  head: () => ({ meta: [{ title: "News — Callas Foundation" }, { name: "description", content: "Latest news from Callas Foundation on the Cape Flats." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="From the Field" title="News & stories." description="Milestones, dialogues and community wins from the Cape Flats." crumbs={[{ label: "News" }]} />
      <section className="bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {news.map((n, i) => (
          <Reveal key={n.slug} delay={i * 0.05}>
            <Link to="/news/$slug" params={{ slug: n.slug }} className="group block h-full rounded-2xl overflow-hidden border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden"><img src={n.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground"><span className="rounded-full bg-brand-blue/10 text-brand-blue px-2.5 py-0.5 font-semibold">{n.category}</span><span>{new Date(n.date).toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" })}</span></div>
                <h3 className="mt-3 font-display text-xl font-bold text-ink group-hover:text-brand-blue transition-colors">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div></section>
    </>
  ),
});