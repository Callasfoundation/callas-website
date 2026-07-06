import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { ShieldAlert, Scale, HeartHandshake, Users, Sprout } from "lucide-react";
import { team, uploadedPhotos } from "@/data/content";

export const Route = createFileRoute("/_public/about")({
  head: () => ({
    meta: [
      { title: "About Us — Callas Foundation" },
      { name: "description", content: "Callas Foundation is a Cape Flats NPO championing gender justice, trauma-informed care and food security. NPO 217-433." },
      { property: "og:title", content: "About Callas Foundation" },
      { property: "og:description", content: "Three decades of grassroots activism. One integrated response." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: ShieldAlert, title: "Champion Human Rights", body: "Advocate fiercely for the rights of women, children and marginalised groups." },
  { icon: Scale, title: "Advance Access to Justice", body: "Provide survivors with court support, legal advocacy and rights awareness." },
  { icon: HeartHandshake, title: "Healing & Empowerment", body: "Holistic psychosocial support that restores agency and emotional resilience." },
  { icon: Users, title: "Challenge Patriarchy", body: "Dismantle patriarchal norms in homes, schools and systems." },
  { icon: Sprout, title: "Build Resilient Communities", body: "Strengthen localised responses to GBV and poverty through grassroots leadership." },
];

const timeline = [
  { year: "Early 1990s", body: "Founder Caroline Peters begins on the frontlines as a rape crisis volunteer." },
  { year: "2000s", body: "Grassroots expertise informs national legislation — the Domestic Violence Act and the Sexual Offences Bill." },
  { year: "September 2018", body: "Callas Foundation formally registers with the Department of Social Development (NPO 217-433)." },
  { year: "2020", body: "The Community Kitchen opens in Bridgetown, serving hot meals daily." },
  { year: "2023", body: "First Responder training crosses 200 graduates across the Cape Flats." },
  { year: "2026", body: "Twelve active Human Rights Clubs; kitchen consistently above 500 meals per day." },
];

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Callas" title="Three decades of grassroots activism. One integrated response." description="A community-driven NPO built on lived experience of the Cape Flats — where hunger, poverty and gender-based violence share a doorstep."
        crumbs={[{ label: "About" }]} image={uploadedPhotos[5]} />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold text-center">Watch our story</div>
            <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-slate-200 shadow-lg bg-black">
              <iframe
                src="https://drive.google.com/file/d/1wp2z8KO1ewHrnozt57Fmbxc24AlWHUKW/preview"
                title="Callas Foundation — our story"
                allow="autoplay"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-16 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-brand-blue font-semibold">Our Vision</div>
              <h2 className="mt-2 font-display text-4xl font-bold text-ink leading-tight">A safe, equitable and empowered community — free from the cycles of violence and structural inequality.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold">Our Mission</div>
              <p className="mt-2 text-lg text-ink leading-relaxed">
                To champion gender justice by supporting women, children and men through grassroots outreach, trauma-informed care and legal empowerment — while systematically disrupting the institutions that uphold inequality.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Callas addresses gender-based violence not in isolation, but by tackling its intersections with deep-seated poverty, systemic patriarchy and food insecurity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-brand-blue font-semibold">Core Pillars</div>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-ink">What we stand for.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue/30">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold">Our Journey</div>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-ink">Rooted in the Cape Flats.</h2>
          </Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 pb-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}>
                  <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 h-3 w-3 rounded-full bg-brand-red ring-4 ring-white" />
                  <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}>
                    <div className="text-brand-blue font-display font-bold text-xl">{t.year}</div>
                    <p className="mt-1 text-muted-foreground">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-brand-blue font-semibold">Our Team</div>
                <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-ink">The people behind the work.</h2>
              </div>
              <Link to="/founder" className="text-sm font-semibold text-brand-red hover:underline">Meet our founder →</Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="font-display text-lg font-bold text-ink">{m.name}</div>
                    <div className="text-sm text-brand-blue font-semibold">{m.role}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}