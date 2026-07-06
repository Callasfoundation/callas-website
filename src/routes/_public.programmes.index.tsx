import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { ArrowRight } from "lucide-react";
import { programmes } from "@/data/programmes";

export const Route = createFileRoute("/_public/programmes/")({
  head: () => ({
    meta: [
      { title: "Our Programmes — Callas Foundation" },
      { name: "description", content: "Seven programme pillars: Access to Justice, Psychosocial Support, First Responder Training, BBB Boys, Community Kitchen, Human Rights Clubs, Men's Engagement." },
      { property: "og:title", content: "Callas Foundation — Programmes" },
      { property: "og:description", content: "One integrated response to violence, poverty and inequality." },
    ],
  }),
  component: ProgrammesIndex,
});

function ProgrammesIndex() {
  return (
    <>
      <PageHeader eyebrow="What We Do" title="Seven programmes. One integrated response." description="From court accompaniment to hot meals to boys' mentorship — every pillar reinforces the others." crumbs={[{ label: "Programmes" }]} />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to="/programmes/$slug" params={{ slug: p.slug }} className="group relative block h-full overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-brand-blue/30">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className={`inline-grid h-11 w-11 place-items-center rounded-xl -mt-12 relative shadow-lg mb-4 ${p.color === "red" ? "bg-brand-red text-white" : p.color === "blue" ? "bg-brand-blue text-white" : "bg-ink text-white"}`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-brand-blue transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.short}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
                    Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}