import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Check, Heart, CreditCard, Building2, Repeat, Sparkles } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/PageShell";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Callas Foundation" },
      { name: "description", content: "Direct your gift to a specific outcome — meals, legal aid, counselling or a sponsored cohort." },
    ],
  }),
  component: Donate,
});

const TIERS = [
  { amount: 25,  label: "Daily Meals",        impact: "Funds 10 hot meals delivered to high-risk households this week.", popular: false },
  { amount: 75,  label: "Counselling Hour",   impact: "Sponsors one clinical counselling session for a survivor.",         popular: true  },
  { amount: 200, label: "Legal Filing",       impact: "Covers the filing & service of a protection order from start to finish.", popular: false },
  { amount: 500, label: "Cohort Sponsor",     impact: "Funds a 25-person first responders cohort for a quarter.",          popular: false },
];

function Donate() {
  const [tier, setTier] = useState(75);
  const [recurring, setRecurring] = useState(true);

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-canvas">
        <div className="grid-fade absolute inset-0" />
        <div className="container-x relative py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">Capital ingestion</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] text-ink md:text-7xl">
            Choose the outcome. We do the rest.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every tier maps to a concrete deliverable, allocated within 72 hours and reported back to you with case-level (anonymised) outcomes.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Pick a tier" title="Each gift is earmarked to a specific outcome" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {TIERS.map((t, i) => {
                const active = tier === t.amount;
                return (
                  <motion.button
                    key={t.amount}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    onClick={() => setTier(t.amount)}
                    className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all ${active ? "border-brand-blue bg-brand-blue/5 shadow-[var(--shadow-lift)]" : "border-slate-200/80 bg-white hover:-translate-y-1 hover:border-brand-blue/40"}`}
                  >
                    {t.popular && (
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand-red px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                        <Sparkles className="h-3 w-3" /> Most chosen
                      </span>
                    )}
                    <p className="font-display text-4xl font-bold text-ink">${t.amount}</p>
                    <p className="mt-1 text-sm font-semibold text-brand-blue">{t.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.impact}</p>
                    {active && (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue">
                        <Check className="h-3.5 w-3.5" /> Selected
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-canvas p-6">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} className="mt-1 h-4 w-4 accent-brand-blue" />
                <span>
                  <span className="flex items-center gap-2 font-semibold text-ink"><Repeat className="h-4 w-4 text-brand-blue" /> Make this a monthly gift</span>
                  <span className="mt-1 block text-sm text-muted-foreground">Monthly support lets us plan cohorts and lock-in supply contracts that lower the cost-per-outcome.</span>
                </span>
              </label>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200/80 bg-canvas p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your gift</p>
            <p className="mt-2 font-display text-5xl font-bold text-ink">${tier}<span className="text-base font-medium text-muted-foreground">{recurring ? " / month" : " once"}</span></p>
            <p className="mt-2 text-sm text-muted-foreground">{TIERS.find(t => t.amount === tier)?.impact}</p>

            <div className="mt-6 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                <CreditCard className="h-4 w-4" /> Pay with card
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-canvas">
                <Building2 className="h-4 w-4" /> EFT / bank transfer
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white px-5 py-3.5 text-sm font-semibold text-ink transition hover:bg-canvas">
                <Heart className="h-4 w-4 text-brand-red" /> EcoCash mobile money
              </button>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              All payments are processed by a PCI-DSS compliant gateway. Callas Foundation Trust is a registered PVO; gifts are tax-deductible in Zimbabwe.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="container-x py-16">
          <div className="rounded-3xl bg-ink p-10 text-white md:p-14">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="font-display text-3xl font-bold md:text-4xl">Prefer to give your time?</h3>
                <p className="mt-2 max-w-xl text-white/75">Volunteers run our kitchens, accompany court hearings and mentor youth.</p>
              </div>
              <Link to="/volunteer" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-white/90">Volunteer instead</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
