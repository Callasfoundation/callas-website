import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Calendar, MapPin } from "lucide-react";
import { events } from "@/data/content";

export const Route = createFileRoute("/_public/events")({
  head: () => ({ meta: [{ title: "Events — Callas Foundation" }, { name: "description", content: "Upcoming and past events at Callas Foundation." }] }),
  component: () => {
    const upcoming = events.filter((e) => !e.past);
    const past = events.filter((e) => e.past);
    return (
      <>
        <PageHeader eyebrow="Gather With Us" title="Events, trainings & forums." crumbs={[{ label: "Events" }]} />
        <section className="bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {[["Upcoming", upcoming], ["Past", past]].map(([label, list]) => (
            <div key={label as string}>
              <h2 className="font-display text-3xl font-bold text-ink">{label as string}</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(list as typeof events).map((e, i) => (
                  <Reveal key={e.slug} delay={i * 0.05}>
                    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white h-full hover:-translate-y-1 hover:shadow-xl transition-all">
                      <div className="aspect-[16/10] overflow-hidden"><img src={e.image} alt="" loading="lazy" className="h-full w-full object-cover" /></div>
                      <div className="p-6">
                        <span className="rounded-full bg-brand-red/10 text-brand-red px-2.5 py-0.5 text-xs font-semibold">{e.category}</span>
                        <h3 className="mt-3 font-display text-xl font-bold text-ink">{e.title}</h3>
                        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-brand-blue" />{new Date(e.date).toLocaleDateString("en-ZA", { dateStyle: "long" })} · {e.time}</div>
                          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-blue" />{e.location}</div>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">{e.excerpt}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
          <div><Link to="/contact" className="text-sm font-semibold text-brand-blue hover:underline">Host an event with us →</Link></div>
        </div></section>
      </>
    );
  },
});