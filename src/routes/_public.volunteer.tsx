import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/_public/volunteer")({
  head: () => ({ meta: [{ title: "Volunteer — Callas Foundation" }, { name: "description", content: "Volunteer with Callas Foundation on the Cape Flats — kitchen, fieldwork or professional advocacy." }, { property: "og:title", content: "Volunteer — Callas Foundation" }, { property: "og:description", content: "Give your Saturday. Change a week." }] }),
  component: VolunteerPage,
});

function VolunteerPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const steps = ["Your profile", "Skills & interests", "Availability", "Confirm"];

  if (done) return (
    <>
      <PageHeader eyebrow="Volunteer" title="Welcome to the Callas team." description="We'll be in touch within a week to match you to a placement." crumbs={[{ label: "Volunteer" }]} />
      <div className="mx-auto max-w-2xl py-20 text-center px-4">
        <CheckCircle2 className="mx-auto h-16 w-16 text-brand-blue" />
        <p className="mt-4 text-muted-foreground">Your form has been submitted.</p>
      </div>
    </>
  );

  return (
    <>
      <PageHeader eyebrow="Volunteer" title="Give your Saturday. Change a week." description="Kitchen logistics, fieldwork or professional advocacy — we have a placement for you." crumbs={[{ label: "Volunteer" }]} />
      <section className="bg-canvas">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal>
            <div className="flex items-center justify-between mb-8">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${i <= step ? "bg-brand-red text-white" : "bg-slate-200 text-muted-foreground"}`}>{i + 1}</div>
                  {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-brand-red" : "bg-slate-200"}`} />}
                </div>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); step === steps.length - 1 ? setDone(true) : setStep(step + 1); }} className="rounded-2xl bg-white border border-slate-200 p-8 space-y-4">
              <div className="text-xs uppercase tracking-[0.22em] text-brand-blue font-semibold">Step {step + 1} of {steps.length}</div>
              <h2 className="font-display text-2xl font-bold text-ink">{steps[step]}</h2>
              {step === 0 && (<>
                <input required placeholder="Full name" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
                <input required type="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
                <input required type="tel" placeholder="Phone / WhatsApp" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
                <input placeholder="Suburb" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
              </>)}
              {step === 1 && (<div className="grid gap-3 sm:grid-cols-2">
                {["Kitchen logistics", "Fieldwork rounds", "Legal advocacy", "Counselling", "Admin & data", "Fundraising", "Events", "Youth mentorship"].map((s) => (
                  <label key={s} className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-3 cursor-pointer hover:border-brand-blue"><input type="checkbox" /> {s}</label>
                ))}
              </div>)}
              {step === 2 && (<>
                <select className="w-full rounded-lg border border-slate-300 px-4 py-3"><option>Weekday mornings</option><option>Weekday afternoons</option><option>Weekends</option><option>Evenings</option></select>
                <textarea rows={4} placeholder="Any specific dates or constraints?" className="w-full rounded-lg border border-slate-300 px-4 py-3" />
              </>)}
              {step === 3 && (<p className="text-muted-foreground">Confirm your details and submit. A programme coordinator will reach out within 5 working days.</p>)}
              <div className="flex justify-between pt-4">
                <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink hover:bg-slate-100 disabled:opacity-40">Back</button>
                <button type="submit" className="rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-2.5 text-sm font-semibold">{step === steps.length - 1 ? "Submit" : "Continue"}</button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}