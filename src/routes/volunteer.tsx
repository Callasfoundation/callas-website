import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, User, Wrench, CalendarClock, Send, UtensilsCrossed, Scale, ShieldCheck, Users } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import volunteerImg from "@/assets/volunteer.jpg";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Callas Foundation" },
      { name: "description", content: "Join the team. Fieldwork, kitchen logistics, professional advocacy and more." },
    ],
  }),
  component: Volunteer,
});

const STEPS = [
  { id: 1, icon: User,          title: "About you" },
  { id: 2, icon: Wrench,        title: "Skills & alignment" },
  { id: 3, icon: CalendarClock, title: "Schedule" },
];

const TRACKS = [
  { id: "field",   icon: ShieldCheck,     title: "Fieldwork & Monitoring",  hours: "8–16 hrs / month" },
  { id: "kitchen", icon: UtensilsCrossed, title: "Kitchen Logistics",       hours: "4–12 hrs / week" },
  { id: "legal",   icon: Scale,           title: "Professional Advocacy",   hours: "Pro-bono case load" },
  { id: "youth",   icon: Users,           title: "Youth Mentorship",        hours: "Weekly cohort" },
];

function Volunteer() {
  const [step, setStep] = useState(1);
  const [tracks, setTracks] = useState<string[]>(["field"]);
  const [done, setDone] = useState(false);

  function toggleTrack(id: string) {
    setTracks((prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]);
  }

  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0">
          <img src={volunteerImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/30" />
        </div>
        <div className="container-x relative py-20 text-white md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Volunteer onboarding</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Your hands, this work, every Saturday.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We onboard new volunteers in cohorts of fifteen, every six weeks. Fill in the form below and our coordinator will be in touch.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            {/* Stepper */}
            <ol className="grid grid-cols-3 gap-4 border-b border-slate-200/80 pb-8">
              {STEPS.map((s) => {
                const state = step > s.id ? "done" : step === s.id ? "active" : "idle";
                return (
                  <li key={s.id} className="flex items-center gap-3">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors
                      ${state === "done" ? "bg-brand-blue text-white" : state === "active" ? "border border-brand-blue text-brand-blue" : "border border-slate-200 text-muted-foreground"}`}>
                      {state === "done" ? <Check className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Step {s.id}</p>
                      <p className={`truncate text-sm font-semibold ${state === "idle" ? "text-muted-foreground" : "text-ink"}`}>{s.title}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="mt-12 rounded-3xl border border-brand-blue/30 bg-brand-blue/5 p-10 text-center"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-blue text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-bold text-ink">Thank you for stepping forward.</h2>
                  <p className="mt-3 text-muted-foreground">Our volunteer coordinator will reach out within five working days with cohort dates and pre-reading.</p>
                </motion.div>
              ) : (
                <motion.form
                  key={step}
                  initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={(e) => { e.preventDefault(); step < 3 ? setStep(step + 1) : setDone(true); }}
                  className="mt-10 space-y-6"
                >
                  {step === 1 && (
                    <>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Full name" required placeholder="e.g. Tendai Moyo" />
                        <Field label="Preferred pronoun" placeholder="e.g. she / her" />
                        <Field label="Email" required type="email" placeholder="you@email.com" />
                        <Field label="Phone / WhatsApp" required placeholder="+263 ..." />
                      </div>
                      <Field label="Suburb / ward" placeholder="Where do you live?" />
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink/70">Operational alignment — pick one or more</p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          {TRACKS.map((t) => {
                            const active = tracks.includes(t.id);
                            return (
                              <button
                                type="button" key={t.id} onClick={() => toggleTrack(t.id)}
                                className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all
                                  ${active ? "border-brand-blue bg-brand-blue/5 shadow-card" : "border-slate-200/80 bg-white hover:border-brand-blue/40"}`}
                              >
                                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${active ? "bg-brand-blue text-white" : "bg-canvas text-ink/70"}`}>
                                  <t.icon className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block font-semibold text-ink">{t.title}</span>
                                  <span className="block text-xs text-muted-foreground">{t.hours}</span>
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">Relevant skills or qualifications</label>
                        <textarea rows={3} placeholder="Legal training, food handling, mentoring experience..." className="mt-2 w-full rounded-xl border border-input bg-canvas px-4 py-3 outline-none focus:border-brand-blue focus:bg-white" />
                      </div>
                    </>
                  )}

                  {step === 3 && (
                    <>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink/70">When are you typically available?</p>
                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {["Weekday AM","Weekday PM","Weekday eve","Sat AM","Sat PM","Sun AM","On-call","Remote only"].map((s) => (
                            <label key={s} className="cursor-pointer rounded-xl border border-slate-200/80 bg-white p-3 text-center text-sm has-[:checked]:border-brand-blue has-[:checked]:bg-brand-blue/10">
                              <input type="checkbox" className="sr-only" />
                              {s}
                            </label>
                          ))}
                        </div>
                      </div>
                      <Field label="Earliest start date" type="date" />
                      <Field label="Anything else we should know?" textarea placeholder="Constraints, accommodations, languages spoken..." />
                    </>
                  )}

                  <div className="flex items-center justify-between border-t border-slate-200/80 pt-6">
                    <button type="button" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink/70 transition-colors hover:bg-canvas disabled:opacity-40">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:opacity-95">
                      {step === 3 ? <>Submit application <Send className="h-4 w-4" /></> : <>Next step <ArrowRight className="h-4 w-4" /></>}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label, required, type = "text", placeholder, textarea,
}: { label: string; required?: boolean; type?: string; placeholder?: string; textarea?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">
        {label}{required && <span className="text-brand-red"> *</span>}
      </label>
      {textarea ? (
        <textarea rows={3} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-input bg-canvas px-4 py-3 outline-none focus:border-brand-blue focus:bg-white" />
      ) : (
        <input type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-input bg-canvas px-4 py-3 outline-none focus:border-brand-blue focus:bg-white" />
      )}
    </div>
  );
}
