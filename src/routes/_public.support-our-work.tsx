import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";

export const Route = createFileRoute("/_public/support-our-work")({
  head: () => ({ meta: [{ title: "Support Our Work — Callas Foundation" }, { name: "description", content: "Corporate and institutional partnership tiers with Callas Foundation." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Partner With Us" title="Institutional & corporate partnerships." description="Callas is a data-informed grassroots NPO with a decade of measurable outcomes on the Cape Flats." crumbs={[{ label: "Support Our Work" }]} />
      <section className="bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-6 md:grid-cols-3">
        {[{ t: "Programme Sponsor", p: "R25,000 / quarter", d: "Underwrite one programme pillar for a quarter." }, { t: "Corporate Partner", p: "R100,000 / year", d: "Named partnership with reporting, site visits and staff volunteer days." }, { t: "Legacy Circle", p: "R500,000+", d: "Multi-year impact commitment with dedicated liaison." }].map((x, i) => (
          <Reveal key={x.t} delay={i * 0.08}><div className="rounded-2xl border border-slate-200 p-8 h-full hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-xs uppercase tracking-[0.22em] text-brand-blue font-semibold">Tier</div>
            <h3 className="mt-2 font-display text-2xl font-bold text-ink">{x.t}</h3>
            <div className="mt-2 text-brand-red font-bold">{x.p}</div>
            <p className="mt-3 text-muted-foreground">{x.d}</p>
            <Link to="/contact" className="mt-6 inline-block rounded-full bg-ink text-white px-5 py-2.5 text-sm font-semibold">Speak to us</Link>
          </div></Reveal>
        ))}
      </div></section>
    </>
  ),
});