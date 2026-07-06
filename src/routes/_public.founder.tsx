import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Award, BookOpen, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_public/founder")({
  head: () => ({
    meta: [
      { title: "Caroline Peters — Founder & Executive Director | Callas Foundation" },
      { name: "description", content: "Caroline Peters — African feminist, three decades on the frontlines of the GBV response, Chair of MenEngage South Africa." },
      { property: "og:title", content: "Caroline Peters — Callas Foundation" },
      { property: "og:description", content: "Founder & Executive Director of Callas Foundation." },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <>
      <PageHeader eyebrow="Our Founder" title="Caroline Peters" description="African feminist, seasoned social justice advocate and community leader with over three decades on the frontlines of the gender-based violence response."
        crumbs={[{ label: "About", to: "/about" }, { label: "Founder" }]} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-5 items-start">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 bg-brand-blue/15 rounded-3xl blur-xl" />
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" alt="Caroline Peters" className="relative w-full rounded-2xl object-cover aspect-[4/5]" />
            </div>
            <div className="mt-6 rounded-2xl bg-ink text-white p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold">National Leadership</div>
              <div className="mt-2 font-display text-2xl font-bold">Chair, MenEngage South Africa</div>
              <p className="mt-2 text-sm text-white/80">Leading nationwide initiatives that engage men and boys as proactive allies in eliminating GBV.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-ink">
              <p className="text-xl leading-relaxed text-ink">
                Caroline Peters is the Founder and Executive Director of the Callas Foundation and one of South Africa's most respected voices on gender-based violence. Her career has spanned crisis rooms, community halls, magistrates' courts and the highest chambers of legislative reform.
              </p>
              <h2 className="font-display text-3xl font-bold mt-10">Early Advocacy</h2>
              <p className="text-muted-foreground">
                Caroline began her journey in the early 1990s as a rape crisis volunteer, sitting through the long nights and longer aftermaths beside survivors nobody else knew how to help.
              </p>
              <h2 className="font-display text-3xl font-bold mt-8">Legislative Impact</h2>
              <p className="text-muted-foreground">
                Her grassroots expertise has informed national law. Caroline played a pivotal role in shaping crucial national legislation, contributing to discussions on the Domestic Violence Act and the Sexual Offences Bill.
              </p>
              <h2 className="font-display text-3xl font-bold mt-8">Community Leadership</h2>
              <p className="text-muted-foreground">
                In 2018 Caroline formally registered the Callas Foundation, translating three decades of relationships across the Cape Flats into an organisation that now serves 500+ meals a day, supports over 1,200 cases a year, and trains community responders across nine suburbs.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: BookOpen, label: "Policy contributions", value: "DVA · SOB" },
                { icon: Award, label: "Years in the sector", value: "30+" },
                { icon: Users, label: "Communities served", value: "9 Suburbs" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-200 p-5">
                  <s.icon className="h-5 w-5 text-brand-blue" />
                  <div className="mt-3 font-display text-2xl font-bold text-ink">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 text-sm font-semibold transition-colors">
              Get in touch with Caroline's office <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}