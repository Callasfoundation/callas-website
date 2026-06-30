import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ImpactCounter } from "@/components/ImpactCounter";
import aboutImg from "@/assets/about-circle.jpg";
import communityImg from "@/assets/community-wide.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Callas Foundation" },
      { name: "description", content: "Callas Foundation is a Cape Flats community-rooted organisation responding to gender-based violence with dignity, justice, and care since 2014." },
      { property: "og:title", content: "About Callas Foundation" },
      { property: "og:description", content: "A community-rooted GBV response organisation built by, and for, the Cape Flats." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Dignity first", body: "Every survivor, every child, every neighbour is met with respect — no questions, no judgement, no conditions." },
  { title: "Community-rooted", body: "Our staff, board, and volunteers live in the communities we serve. We are not visitors here." },
  { title: "Survivor-led", body: "Survivors shape our programmes, our advocacy, and our governance. Their voices set the agenda." },
  { title: "Radically transparent", body: "Audited financials, programme outcomes, and board minutes are published openly every year." },
];

const TEAM = [
  { name: "Nontuthuzelo Mbele", role: "Executive Director" },
  { name: "Aaliyah Davids", role: "Head of Access to Justice" },
  { name: "Sipho Khumalo", role: "BBB Boys Programme Lead" },
  { name: "Carmen Williams", role: "Community Kitchen Manager" },
  { name: "Fatima Adams", role: "Psychosocial Services Lead" },
  { name: "Jonathan Petersen", role: "Men's Engagement Facilitator" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Callas Foundation"
        title={<>Rooted in the Cape Flats. <span className="text-white/80">Built for change.</span></>}
        subtitle="Callas Foundation was founded in 2014 by community organisers, paralegals, and mothers who refused to accept gender-based violence as normal."
        variant="blue"
      />

      <section className="bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <img src={aboutImg} alt="" width={1400} height={1000} loading="lazy" className="rounded-2xl" />
          </div>
          <div className="space-y-5">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Our Story</div>
            <h2 className="font-display text-4xl font-bold leading-tight">Twelve years of helping in our way.</h2>
            <p className="text-base leading-relaxed text-callas-ink/80">
              What started as a soup pot on a Manenberg stoep has grown into seven frontline programmes serving 14 communities across the Cape Flats. Through every season — from the violent winter of 2016 to the lockdowns of 2020 to today — Callas has stayed where it began: in the streets, kitchens, courtrooms and classrooms of our own neighbourhoods.
            </p>
            <p className="text-base leading-relaxed text-callas-ink/80">
              We refuse the language of saviours. We are neighbours, paralegals, counsellors, fathers, mothers, and survivors organising with each other for a future that doesn’t need us — but in the meantime, we are here every single day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-callas-canvas">
        <div className="container-x py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Our Values</div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">Four commitments we don’t bend on.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border-l-4 border-callas-red bg-white p-7">
                <div className="inline-flex items-center gap-2 text-callas-red"><CheckCircle2 className="h-5 w-5" /><span className="font-display text-xl font-bold text-callas-ink">{v.title}</span></div>
                <p className="mt-3 text-sm leading-relaxed text-callas-ink/80">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactCounter variant="light" />

      <section className="bg-white">
        <div className="container-x py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Our People</div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">The team holding the line.</h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((p) => (
              <div key={p.name} className="rounded-xl bg-callas-canvas p-6">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-callas-blue font-display text-lg font-bold text-white">
                  {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="mt-4 font-display text-lg font-bold">{p.name}</div>
                <div className="text-sm text-callas-ink/70">{p.role}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/governance" className="text-sm font-bold text-callas-blue hover:underline">See full governance & board →</Link>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-callas-ink text-white">
        <img src={communityImg} alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="container-x relative py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl">“This is our community. We refuse to let violence have the last word.”</h2>
          <div className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-callas-red">— Callas Foundation Board, 2026</div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
