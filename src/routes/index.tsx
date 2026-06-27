import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, ShieldCheck, Scale, HeartPulse, Users, UtensilsCrossed,
  GraduationCap, Handshake, Quote, Star, MapPin, Phone,
} from "lucide-react";
import { PageShell, SectionHeading } from "@/components/PageShell";
import heroImg from "@/assets/hero-women.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import justiceImg from "@/assets/justice.jpg";
import volunteerImg from "@/assets/volunteer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Callas Foundation — Dignity. Protection. Restoration." },
      { name: "description", content: "Frontline support and structural advocacy for survivors of gender-based violence across Zimbabwe." },
      { property: "og:title", content: "Callas Foundation" },
      { property: "og:description", content: "Dignity. Protection. Restoration." },
    ],
  }),
  component: Home,
});

const METRICS = [
  { value: "184,200", label: "Hot meals served through community kitchens", trend: "+22% YoY" },
  { value: "2,940", label: "Survivors accompanied through court proceedings", trend: "since 2019" },
  { value: "47", label: "Active neighbourhood monitoring cells", trend: "across 9 wards" },
  { value: "1,360", label: "First responders certified in trauma-informed care", trend: "2024 cohort" },
];

const PILLARS = [
  { icon: Scale,           title: "Access to Justice",        copy: "Free legal aid, protection orders & court accompaniment.", to: "/programmes/access-to-justice", tint: "from-brand-blue/10" },
  { icon: HeartPulse,      title: "Psychosocial Support",      copy: "Trauma counselling and clinical safety frameworks.", to: "/programmes/psychosocial-support", tint: "from-brand-red/10" },
  { icon: ShieldCheck,     title: "First Responders Training", copy: "Equipping neighbourhood monitors and early-warning cells.", to: "/programmes/first-responders", tint: "from-brand-blue/10" },
  { icon: Users,           title: "BBB Boys Programme",        copy: "Behavioural mentorship and accountability for young men.", to: "/programmes/bbb-boys", tint: "from-brand-blue/10" },
  { icon: UtensilsCrossed, title: "Community Kitchen",         copy: "Hot, dignified meals for high-risk households daily.", to: "/programmes/community-kitchen", tint: "from-brand-red/10" },
  { icon: GraduationCap,   title: "Human Rights Clubs",        copy: "Classroom curriculum on safe boundaries and leadership.", to: "/programmes/human-rights-clubs", tint: "from-brand-blue/10" },
  { icon: Handshake,       title: "Men's Engagement",          copy: "Forums on accountability, fatherhood and family equity.", to: "/programmes/mens-engagement", tint: "from-brand-red/10" },
];

const STORIES = [
  {
    quote: "When I walked into the Mufakose office I had nothing — no ID, no shoes. Callas walked me through every door I needed: police, court, hospital, school for my children.",
    name: "Tendai M.",
    role: "Survivor · Harare West",
  },
  {
    quote: "Our ward used to lose a woman to domestic violence almost every month. The monitoring cells trained by Callas have changed that completely.",
    name: "Cde. R. Sibanda",
    role: "Councillor · Ward 39",
  },
  {
    quote: "The boys we work with through BBB now run their own peer-conflict circles in school. That's structural change you can hear in the corridors.",
    name: "Mr. Phiri",
    role: "Headmaster, Mukai High",
  },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-canvas">
        <div className="grid-fade absolute inset-0" />
        <div className="container-x relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-32">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
              24/7 Crisis Response Active
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-5xl font-bold leading-[0.95] text-ink md:text-7xl lg:text-[5.5rem]"
            >
              Dignity.<br />
              <span className="text-brand-blue">Protection.</span><br />
              <span className="text-brand-red">Restoration.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Callas Foundation walks alongside survivors of gender-based violence — from the first
              call for safety, through the courtroom, to the rebuilding of a household.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/get-help"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-all hover:shadow-xl hover:shadow-brand-red/40"
              >
                <Phone className="h-4 w-4" />
                I need help now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:bg-white"
              >
                Explore our work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-brand-blue" /> 9 wards · Harare Metro</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-brand-blue" /> PVO 23/2019</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl shadow-brand-blue/10">
              <img src={heroImg} alt="Community of women supported by Callas Foundation" width={1920} height={1280} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-6 pt-24">
                <p className="font-display text-2xl font-semibold text-white">Mufakose Solidarity Circle</p>
                <p className="mt-1 text-sm text-white/80">Survivor-led peer support · meets every Saturday</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xl md:block"
            >
              <div className="flex items-center gap-1 text-brand-red">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-2 text-sm font-semibold text-ink">Rated A+ on transparency</p>
              <p className="mt-1 text-xs text-muted-foreground">By the Zimbabwe Council of NGOs, 2024 review.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x py-16 md:py-20">
          <SectionHeading
            eyebrow="Operational footprint"
            title="What our community has built together"
            description="Every figure is verified quarterly against field reports, donor receipts and partner attestations."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-200/60 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white p-7 transition-colors hover:bg-canvas"
              >
                <p className="font-display text-4xl font-bold text-ink md:text-5xl">{m.value}</p>
                <p className="mt-3 text-sm leading-snug text-muted-foreground">{m.label}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-blue">{m.trend}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b border-slate-200/60 bg-canvas">
        <div className="container-x py-20 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Seven pillars"
              title="The work, broken into the shape it actually takes"
              description="Each pillar is led by survivors, professionals and community members who own its outcomes."
            />
            <Link to="/programmes" className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white">
              All programmes <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PILLARS.map((p) => (
              <motion.div
                key={p.title}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
              >
                <Link
                  to={p.to}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.tint} via-transparent to-transparent`} />
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200/80 bg-canvas text-brand-blue transition-colors group-hover:border-brand-blue/30 group-hover:bg-brand-blue group-hover:text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMPACT */}
      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div className="relative grid grid-cols-2 gap-4">
            <img src={kitchenImg} width={1280} height={896} loading="lazy" alt="Community kitchen" className="aspect-square rounded-2xl object-cover shadow-card" />
            <img src={justiceImg} width={1280} height={896} loading="lazy" alt="Legal aid session" className="mt-12 aspect-square rounded-2xl object-cover shadow-card" />
            <img src={volunteerImg} width={1280} height={896} loading="lazy" alt="Volunteer distribution" className="aspect-square rounded-2xl object-cover shadow-card" />
            <div className="mt-12 grid aspect-square place-items-center rounded-2xl border border-slate-200/80 bg-canvas p-6 text-center">
              <div>
                <p className="font-display text-5xl font-bold text-brand-red">96%</p>
                <p className="mt-2 text-sm text-muted-foreground">of survivors stayed safe 12 months after intake</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why it works"
              title="A continuum of care, not a single appointment"
              description="From the first crisis call to long-term reintegration, every step is owned by a named caseworker who stays with the household."
            />
            <ul className="mt-8 space-y-5">
              {[
                "Same-day safe-housing referral with vetted partner shelters.",
                "Pro-bono legal team registered with the Law Society of Zimbabwe.",
                "Weekly trauma-informed counselling for 12 weeks, free at point of use.",
                "Children's education continuity through our school liaison desk.",
              ].map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base text-ink/85">{line}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/support" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white hover:opacity-90">Support our work</Link>
              <Link to="/volunteer" className="rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:bg-canvas">Volunteer with us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="bg-canvas">
        <div className="container-x py-20 md:py-28">
          <SectionHeading eyebrow="Voices" title="The people we walk with" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {STORIES.map((s, i) => (
              <motion.figure
                key={s.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card"
              >
                <Quote className="h-7 w-7 text-brand-red/70" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink/85">"{s.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-semibold text-ink">{s.name}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #2B59C3 0, transparent 40%), radial-gradient(circle at 80% 70%, #D91A1A 0, transparent 40%)",
        }}/>
        <div className="container-x relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-display text-4xl font-bold md:text-6xl">
              The hand you extend tonight is the future a child wakes up to tomorrow.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-white/75">
              Every contribution is allocated within 72 hours and reported back to you with case-level outcomes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/donate" className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 hover:scale-[1.02] transition-transform">
                Donate now
              </Link>
              <Link to="/volunteer" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                Join the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
