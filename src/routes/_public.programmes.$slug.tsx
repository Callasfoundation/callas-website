import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getProgramme, programmes } from "@/data/programmes";

export const Route = createFileRoute("/_public/programmes/$slug")({
  loader: ({ params }) => {
    const p = getProgramme(params.slug);
    if (!p) throw notFound();
    return { programme: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.programme.title} — Callas Foundation` },
          { name: "description", content: loaderData.programme.short },
          { property: "og:title", content: `${loaderData.programme.title} — Callas Foundation` },
          { property: "og:description", content: loaderData.programme.short },
          { property: "og:image", content: loaderData.programme.image },
        ]
      : [{ title: "Programme — Callas Foundation" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-4xl font-bold text-ink">Programme not found</h1>
        <Link to="/programmes" className="mt-4 inline-block text-brand-blue underline">Back to all programmes</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-[60vh] grid place-items-center px-4 text-center">
      <button onClick={reset} className="text-brand-blue underline">Try again</button>
    </div>
  ),
  component: ProgrammeDetail,
});

function ProgrammeDetail() {
  const { programme } = Route.useLoaderData() as { programme: import("@/data/programmes").Programme };
  const others = programmes.filter((p) => p.slug !== programme.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Programme" title={programme.title} description={programme.short} crumbs={[{ label: "Programmes", to: "/programmes" }, { label: programme.title }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div>
              <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                <img src={programme.image} alt={programme.title} className="h-full w-full object-cover" />
              </div>
              <p className="mt-8 text-xl leading-relaxed text-ink">{programme.intro}</p>

              <h2 className="mt-12 font-display text-3xl font-bold text-ink">What we deliver</h2>
              <ul className="mt-6 space-y-3">
                {programme.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-display text-3xl font-bold text-ink">How the programme runs</h2>
              <div className="mt-6 space-y-4">
                {programme.steps.map((s, i) => (
                  <div key={s.title} className="flex gap-4 rounded-xl border border-slate-200 p-5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-blue text-white font-display font-bold">{i + 1}</div>
                    <div>
                      <div className="font-display font-bold text-ink">{s.title}</div>
                      <p className="text-sm text-muted-foreground mt-1">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <aside className="lg:col-span-1 space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-canvas border border-slate-200 p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-brand-blue font-semibold">Impact</div>
                <div className="mt-4 space-y-4">
                  {programme.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-3xl font-bold text-ink">{s.value}</div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-brand-red text-white p-6">
                <div className="font-display text-xl font-bold">Support this programme</div>
                <p className="mt-2 text-sm text-white/90">Your donation goes directly to this pillar of our work.</p>
                <Link to="/donate" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-brand-red px-4 py-2 text-sm font-semibold hover:-translate-y-0.5 transition-transform">
                  Donate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-canvas border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="font-display text-2xl font-bold text-ink">Explore other programmes</div>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} to="/programmes/$slug" params={{ slug: p.slug }} className="group rounded-xl border border-slate-200 bg-white p-5 hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3">
                  <div className={`grid h-9 w-9 place-items-center rounded-lg ${p.color === "red" ? "bg-brand-red text-white" : p.color === "blue" ? "bg-brand-blue text-white" : "bg-ink text-white"}`}>
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div className="font-display font-bold text-ink group-hover:text-brand-blue transition-colors">{p.title}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}