import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Check } from "lucide-react";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Callas Foundation" },
      { name: "description", content: "Whether you can give two hours or two days, we have a place for you at Callas Foundation." },
      { property: "og:title", content: "Volunteer with Callas Foundation" },
      { property: "og:description", content: "Fieldwork, kitchen logistics, professional advocacy and more." },
    ],
  }),
  component: VolunteerPage,
});

const STEPS = ["Your details", "Skills & interest", "Schedule", "Confirm"];

const TRACKS = [
  { id: "field", label: "Fieldwork", desc: "Community outreach, BBB workshops, school clubs, event support." },
  { id: "kitchen", label: "Kitchen Logistics", desc: "Food prep, packing, delivery, donor pickups." },
  { id: "pro", label: "Professional Advocacy", desc: "Legal, counselling, finance, marketing, IT — pro-bono hours." },
  { id: "remote", label: "Remote / Behind-the-scenes", desc: "Data entry, content writing, social media, fundraising admin." },
];

function VolunteerPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "", track: "field", days: [] as string[], note: "" });

  if (done) {
    return (
      <SiteLayout>
        <PageHero eyebrow="Welcome to the team" title={<>Thank you, {data.name || "friend"}. <span className="text-white/80">We’ll be in touch.</span></>} subtitle="A volunteer coordinator will reach out within 3 working days to confirm your onboarding session." variant="blue" />
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <PageHero eyebrow="Volunteer" title={<>Your hands. <span className="text-white/80">Our communities.</span></>} subtitle="Onboarding takes 4 short steps. Skip nothing — every answer helps us match you to work that matters." variant="ink" />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <ol className="flex items-center justify-between">
              {STEPS.map((s, i) => (
                <li key={s} className="flex flex-1 items-center">
                  <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-bold text-sm ${i <= step ? "bg-callas-red text-white" : "bg-callas-canvas text-callas-ink/40"}`}>
                    {i < step ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                  <div className="ml-3 hidden text-xs font-bold uppercase tracking-wider sm:block">{s}</div>
                  {i < STEPS.length - 1 && <div className={`mx-3 h-0.5 flex-1 ${i < step ? "bg-callas-red" : "bg-callas-line"}`} />}
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-callas-line bg-callas-canvas p-7 sm:p-10">
              {step === 0 && (
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-bold">Tell us who you are</h2>
                  <input placeholder="Full name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue" />
                  <input placeholder="Email address" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue" />
                  <input placeholder="Mobile (WhatsApp preferred)" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className="w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue" />
                </div>
              )}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-bold">What kind of work calls you?</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {TRACKS.map((t) => (
                      <button key={t.id} onClick={() => setData({ ...data, track: t.id })} className={`rounded-xl border-2 p-5 text-left transition ${data.track === t.id ? "border-callas-red bg-white" : "border-callas-line bg-white hover:border-callas-red/50"}`}>
                        <div className="font-display text-lg font-bold">{t.label}</div>
                        <div className="mt-1 text-xs text-callas-ink/70">{t.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-bold">When are you available?</h2>
                  <p className="mt-1 text-sm text-callas-ink/65">Select any days you can give time.</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => {
                      const selected = data.days.includes(d);
                      return (
                        <button key={d} onClick={() => setData({ ...data, days: selected ? data.days.filter((x) => x !== d) : [...data.days, d] })} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${selected ? "bg-callas-blue text-white" : "border border-callas-line bg-white text-callas-ink"}`}>
                          {d}
                        </button>
                      );
                    })}
                  </div>
                  <textarea rows={4} placeholder="Anything we should know? (children, transport, accessibility, etc.)" value={data.note} onChange={(e) => setData({ ...data, note: e.target.value })} className="mt-5 w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue" />
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="font-display text-2xl font-bold">Confirm</h2>
                  <dl className="grid gap-3 text-sm">
                    <div className="flex justify-between border-b border-callas-line pb-2"><dt className="text-callas-ink/60">Name</dt><dd className="font-semibold">{data.name || "—"}</dd></div>
                    <div className="flex justify-between border-b border-callas-line pb-2"><dt className="text-callas-ink/60">Email</dt><dd className="font-semibold">{data.email || "—"}</dd></div>
                    <div className="flex justify-between border-b border-callas-line pb-2"><dt className="text-callas-ink/60">Phone</dt><dd className="font-semibold">{data.phone || "—"}</dd></div>
                    <div className="flex justify-between border-b border-callas-line pb-2"><dt className="text-callas-ink/60">Track</dt><dd className="font-semibold">{TRACKS.find((t) => t.id === data.track)?.label}</dd></div>
                    <div className="flex justify-between border-b border-callas-line pb-2"><dt className="text-callas-ink/60">Days</dt><dd className="font-semibold">{data.days.join(", ") || "Flexible"}</dd></div>
                  </dl>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="rounded-full px-5 py-2.5 text-sm font-bold text-callas-ink/70 disabled:opacity-30">Back</button>
                {step < STEPS.length - 1 ? (
                  <button onClick={() => setStep(step + 1)} className="rounded-full bg-callas-red px-6 py-2.5 text-sm font-bold text-white hover:bg-callas-red-dark">Continue</button>
                ) : (
                  <button onClick={() => setDone(true)} className="rounded-full bg-callas-blue px-6 py-2.5 text-sm font-bold text-white hover:bg-callas-blue-dark">Submit application</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
