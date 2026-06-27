import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Users, type LucideIcon } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/PageShell";

export interface ProgrammeStep { title: string; body: string }
export interface ProgrammeMetric { value: string; label: string }
export interface ProgrammeLocation { ward: string; cadence: string; lead: string }

interface Props {
  icon: LucideIcon;
  tag: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  overview: string[];
  workflow: ProgrammeStep[];
  metrics: ProgrammeMetric[];
  locations: ProgrammeLocation[];
  outcomes: string[];
  partners: string[];
}

export function ProgrammeDetail({
  icon: Icon, tag, title, lead, image, imageAlt,
  overview, workflow, metrics, locations, outcomes, partners,
}: Props) {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-canvas">
        <div className="container-x grid gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Link to="/programmes" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue hover:underline">
              ← All programmes
            </Link>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
              <Icon className="h-3.5 w-3.5 text-brand-red" />
              {tag}
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-ink md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/volunteer" className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:opacity-95">Volunteer for this</Link>
              <Link to="/support" className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink hover:bg-white">Fund a cohort</Link>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl">
            <img src={image} alt={imageAlt} width={1280} height={896} className="aspect-[5/4] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Overview + metrics */}
      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Programme overview" title="How this work is structured on the ground" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              {overview.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="grid h-fit grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/60">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white p-5">
                <p className="font-display text-3xl font-bold text-ink">{m.value}</p>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="border-b border-slate-200/60 bg-canvas">
        <div className="container-x py-20">
          <SectionHeading eyebrow="Workflow" title="The path a participant walks with us" />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl border border-slate-200/80 bg-white p-6"
              >
                <span className="font-display text-5xl font-bold text-brand-blue/20">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-semibold text-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Locations & outcomes */}
      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Deployment" title="Where this work happens" />
            <ul className="mt-8 divide-y divide-slate-100 rounded-2xl border border-slate-200/80">
              {locations.map((l) => (
                <li key={l.ward} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-blue/10 text-brand-blue"><MapPin className="h-4 w-4" /></span>
                  <div>
                    <p className="font-semibold text-ink">{l.ward}</p>
                    <p className="text-xs text-muted-foreground">{l.cadence}</p>
                  </div>
                  <span className="hidden text-xs text-muted-foreground sm:flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{l.lead}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Outcomes" title="What we hold ourselves accountable to" />
            <ul className="mt-8 space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl bg-canvas p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <span className="text-sm leading-relaxed text-ink/85">{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operational partners</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span key={p} className="rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-ink/80">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas">
        <div className="container-x py-16">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-10 md:p-14">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">Move this programme forward</p>
                <h3 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">Sponsor the next cohort or join the team</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/donate" className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 hover:scale-[1.02] transition-transform">Donate</Link>
                <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink hover:bg-canvas">
                  Volunteer <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
