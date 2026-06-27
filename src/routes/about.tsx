import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/PageShell";
import hero from "@/assets/hero-women.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Callas Foundation" },
      { name: "description", content: "Founded in Mufakose in 2018, Callas Foundation is a survivor-led organisation working across Harare to end gender-based violence." },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2018", title: "First listening circle", body: "Twelve women met every Saturday under a jacaranda tree in Mufakose. The Foundation was registered nine months later." },
  { year: "2019", title: "PVO certification", body: "Granted Private Voluntary Organisation status (PVO 23/2019) and opened our first dedicated intake office." },
  { year: "2021", title: "Community kitchens launched", body: "Three permanent kitchens opened across high-risk wards, serving 600 meals daily within six months." },
  { year: "2023", title: "BBB Boys Programme expansion", body: "Mentorship programme scaled to 14 schools after a two-year pilot showed a 41% drop in playground conflict." },
  { year: "2025", title: "Regional advocacy seat", body: "Joined the SADC Civil Society GBV Reference Group, taking ward-level evidence to policy tables." },
];

const TRUSTEES = [
  { name: "Dr. Nyarai Chigwedere", role: "Chair · Clinical Psychologist", focus: "Trauma frameworks" },
  { name: "Adv. Tatenda Moyo",     role: "Vice Chair · Family Law",      focus: "Access to justice" },
  { name: "Mr. Brighton Sibanda",  role: "Treasurer · CA(Z)",            focus: "Financial stewardship" },
  { name: "Mrs. Ruvimbo Phiri",    role: "Trustee · Educator",           focus: "Youth programmes" },
  { name: "Mr. Kudakwashe Mpofu",  role: "Trustee · Community Leader",    focus: "Men's engagement" },
  { name: "Ms. Farai Ndlovu",      role: "Trustee · Survivor Advocate",   focus: "Lived-experience council" },
];

function About() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
        </div>
        <div className="container-x relative py-24 text-white md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Our story</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Born under a jacaranda. Built into a movement.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Callas Foundation began with twelve women refusing to be silent. Today it is a continuum
            of care reaching nine wards, three schools' districts, and one national policy table.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x grid gap-16 py-20 md:py-28 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow="Mission"
            title="To restore dignity, protection and restoration for every woman, child and family touched by violence."
          />
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              We refuse the false choice between immediate safety and long-term structural change.
              Our programmes braid the two — answering a midnight call while drafting a by-law for
              the next council meeting.
            </p>
            <p>
              Our work is owned by the people closest to it. Every site lead is recruited from the
              community they serve, every curriculum is co-designed with survivors, and every annual
              report is audited and published openly.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { icon: Calendar, k: "Est.", v: "2018" },
                { icon: MapPin, k: "Wards", v: "9" },
                { icon: Users, k: "Staff & volunteers", v: "210+" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-slate-200/80 bg-canvas p-4">
                  <s.icon className="h-4 w-4 text-brand-blue" />
                  <p className="mt-3 font-display text-2xl font-bold text-ink">{s.v}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/60 bg-canvas">
        <div className="container-x py-20 md:py-28">
          <SectionHeading eyebrow="Timeline" title="Seven years, traced honestly" />
          <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6"
              >
                <p className="font-display text-3xl font-bold text-brand-blue">{t.year}</p>
                <p className="mt-2 font-semibold text-ink">{t.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x py-20 md:py-28">
          <SectionHeading
            eyebrow="Governance"
            title="The board accountable for our integrity"
            description="Our trustees serve unpaid three-year terms, declare interests publicly and meet quarterly."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TRUSTEES.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-slate-200/80 bg-canvas p-6 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white hover:shadow-card"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-blue/10 font-display text-lg font-bold text-brand-blue">
                  {t.name.split(" ").slice(-1)[0][0]}
                </div>
                <p className="mt-5 font-semibold text-ink">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">Focus: {t.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container-x py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-ink p-10 text-white md:flex-row md:items-center md:p-14">
            <div>
              <h3 className="font-display text-3xl font-bold md:text-4xl">Read the full 2024 annual report</h3>
              <p className="mt-2 max-w-xl text-white/70">Audited financials, ward-level outcomes and a letter from the Chair.</p>
            </div>
            <Link to="/support" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-white/90">
              Open the report <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
