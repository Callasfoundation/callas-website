import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Scale, HeartPulse, ShieldCheck, Users, UtensilsCrossed, GraduationCap, Handshake,
  ArrowRight, HandCoins, HeartHandshake, TrendingUp,
} from "lucide-react";
import { PageShell, SectionHeading } from "@/components/PageShell";
import justiceImg from "@/assets/justice.jpg";
import counselingImg from "@/assets/counseling.jpg";
import trainingImg from "@/assets/training.jpg";
import boysImg from "@/assets/boys-program.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import youthImg from "@/assets/youth-club.jpg";
import mensImg from "@/assets/mens-forum.jpg";

export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Programmes — Callas Foundation" },
      { name: "description", content: "Seven operational pillars: justice, psychosocial care, first-responder training, BBB Boys, community kitchens, human rights clubs and men's engagement." },
    ],
  }),
  component: ProgrammesIndex,
});

const TRACK_RECORD = [
  { value: "184,200", label: "Hot meals served", trend: "+22% YoY" },
  { value: "2,940", label: "Survivors in court accompaniment", trend: "since 2019" },
  { value: "1,360", label: "First responders certified", trend: "2024 cohort" },
  { value: "47", label: "Neighbourhood monitoring cells", trend: "9 wards" },
];

const PROGRAMMES = [
  { icon: Scale,           to: "/programmes/access-to-justice",     title: "Access to Justice",            blurb: "Pro-bono legal teams, protection-order drafting and court accompaniment for survivors.", img: justiceImg, kpi: "1,420 cases / yr" },
  { icon: HeartPulse,      to: "/programmes/psychosocial-support",  title: "Psychosocial Support",          blurb: "Trauma-informed counselling, peer circles and clinical safety frameworks.", img: counselingImg, kpi: "12-week intake" },
  { icon: ShieldCheck,     to: "/programmes/first-responders",      title: "GBV First Responders",          blurb: "Training neighbourhood monitoring cells, safe routing and early trauma detection.", img: trainingImg, kpi: "1,360 certified" },
  { icon: Users,           to: "/programmes/bbb-boys",              title: "BBB Boys Programme",            blurb: "Behavioural mentorship and accountability circles for boys aged 11–17.", img: boysImg, kpi: "14 schools" },
  { icon: UtensilsCrossed, to: "/programmes/community-kitchen",     title: "Community Kitchen",             blurb: "Three permanent kitchens turning donor produce into 600 hot meals daily.", img: kitchenImg, kpi: "184k meals" },
  { icon: GraduationCap,   to: "/programmes/human-rights-clubs",    title: "Human Rights Clubs",            blurb: "Classroom curriculum on safe boundaries, leadership and child rights.", img: youthImg, kpi: "26 schools" },
  { icon: Handshake,       to: "/programmes/mens-engagement",       title: "Men's Engagement Forums",       blurb: "Forums on accountability, fatherhood and equitable household decision-making.", img: mensImg, kpi: "42 forums / yr" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

function ProgrammesIndex() {
  return (
    <PageShell>
      {/* TRACK RECORD — surfaced at the top */}
      <section className="border-b border-slate-200/60 bg-ink text-white">
        <div className="container-x py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60"
          >
            <TrendingUp className="h-3.5 w-3.5 text-brand-red" />
            Track record of field action
          </motion.div>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
              Outcomes the community has built — verified quarterly.
            </h2>
            <p className="max-w-sm text-sm text-white/70">
              Every figure below is cross-checked against field reports, donor receipts and partner attestations.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {TRACK_RECORD.map((m) => (
              <motion.div
                key={m.label}
                variants={itemVariants}
                className="bg-ink p-6"
              >
                <p className="font-display text-4xl font-bold md:text-5xl">{m.value}</p>
                <p className="mt-2 text-sm text-white/75">{m.label}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-brand-red">{m.trend}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200/60 bg-canvas">
        <div className="container-x py-20 md:py-24">
          <SectionHeading
            eyebrow="Operational matrix"
            title="Seven programmes. One continuum of care."
            description="A directory of every active workstream — each one routed from the same intake desk."
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {PROGRAMMES.map((p) => (
              <motion.div key={p.to} variants={itemVariants}>
                <Link
                  to={p.to}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink shadow">
                      <p.icon className="h-3 w-3 text-brand-red" /> {p.kpi}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                      Open programme <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DONATE + VOLUNTEER EMPHASIS */}
      <section className="relative overflow-hidden border-t border-slate-200/60 bg-canvas">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: "radial-gradient(circle at 15% 20%, rgba(43,89,195,0.10) 0, transparent 45%), radial-gradient(circle at 85% 80%, rgba(217,26,26,0.10) 0, transparent 45%)",
        }} />
        <div className="container-x relative py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/70">
              Power the next case
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              These programmes only exist because people show up — with <span className="text-brand-red">money</span> and with <span className="text-brand-blue">time</span>.
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              A single donation funds a protection order. A single Saturday in the kitchen feeds 120 children. Pick the lane that fits you.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-brand-red/20 bg-white p-8 shadow-card"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-red/10 blur-2xl" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-red/10 text-brand-red">
                  <HandCoins className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Donate</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every contribution is allocated within 72 hours and reported back to you with case-level outcomes. Give once, or set up a monthly commitment.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  <li>· $25 — one survivor's safe transit & intake</li>
                  <li>· $80 — a week of trauma counselling</li>
                  <li>· $250 — full legal representation for a case</li>
                </ul>
                <Link
                  to="/donate"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-transform hover:scale-[1.02]"
                >
                  Donate now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-brand-blue/20 bg-white p-8 shadow-card"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/10 blur-2xl" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">Volunteer</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Skilled and unskilled hands are equally welcome. Counsellors, paralegals, drivers, kitchen leads, translators, peer mentors.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  <li>· Saturday community kitchens</li>
                  <li>· Court accompaniment rota</li>
                  <li>· School outreach &amp; rights clubs</li>
                </ul>
                <Link
                  to="/volunteer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:scale-[1.02]"
                >
                  Join the team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            Representing an organisation? <Link to="/support" className="font-semibold text-ink underline-offset-4 hover:underline">Explore corporate partnerships →</Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
