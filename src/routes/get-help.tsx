import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  AlertTriangle, X, Phone, MessageSquare, ShieldAlert, EyeOff, Send, MapPin, Clock,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/get-help")({
  head: () => ({
    meta: [
      { title: "Get Help — Callas Foundation" },
      { name: "description", content: "Confidential 24/7 crisis support. Call, text, or use this secure intake form. Quick-exit button at top of page." },
    ],
  }),
  component: GetHelp,
});

const CONTACT_MODES = [
  { id: "call",  icon: Phone,         title: "Explicitly safe to call",  desc: "I can take a voice call right now without putting myself at risk.",  badge: "Voice" },
  { id: "text",  icon: MessageSquare, title: "Text only / active risk",  desc: "I cannot speak aloud. Reach me by WhatsApp or SMS only.",            badge: "Text" },
  { id: "wait",  icon: Clock,         title: "Schedule a callback",      desc: "I'll be safe to talk at a specific time. Reach me then.",            badge: "Scheduled" },
];

function GetHelp() {
  const [mode, setMode] = useState<string>("call");
  const [submitted, setSubmitted] = useState(false);

  function quickExit() {
    if (typeof window !== "undefined") {
      window.location.replace("https://www.google.com/search?q=weather+today");
    }
  }

  return (
    <PageShell>
      {/* Safety bar */}
      <div className="sticky top-16 z-40 border-b border-brand-red/30 bg-brand-red text-white md:top-20">
        <div className="container-x flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3 text-sm">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              <strong className="font-semibold">Browser safety:</strong> This page may appear in your history.
              Clear your browser data after leaving, or use private/incognito mode.
            </span>
          </div>
          <button
            onClick={quickExit}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-red shadow sm:self-auto"
          >
            <X className="h-3.5 w-3.5" /> Quick exit
          </button>
        </div>
      </div>

      <section className="border-b border-slate-200/60 bg-canvas">
        <div className="container-x py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Safe assistance terminal</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] text-ink md:text-6xl">
            You are not in this alone. Help is on the line.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Every contact below reaches a trained crisis responder. There is no triage, no waiting tone, no recording.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { icon: Phone, title: "24/7 crisis line", value: "+263 78 414 9023", sub: "Toll-reversed for ZW networks" },
              { icon: MessageSquare, title: "WhatsApp text", value: "+263 78 414 9023", sub: "Discreet, encrypted, response < 5 min" },
              { icon: ShieldAlert, title: "If in immediate danger", value: "Dial 995", sub: "Zimbabwe Republic Police VFU" },
            ].map((c) => (
              <motion.a
                key={c.title} href="#"
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[var(--shadow-lift)]"
              >
                <c.icon className="h-6 w-6 text-brand-red" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.title}</p>
                <p className="mt-1 font-display text-2xl font-bold text-ink">{c.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{c.sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">Secure intake form</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">Tell us only what feels safe to share.</h2>
            <p className="mt-3 text-base text-muted-foreground">Nothing on this form is shared outside the crisis team. You may leave any field blank.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                className="mt-10 rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-8 text-center"
              >
                <p className="font-display text-2xl font-bold text-ink">Received.</p>
                <p className="mt-2 text-sm text-muted-foreground">A crisis responder will reach out within 30 minutes using the method you chose.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-10 space-y-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">Preferred name (optional)</label>
                  <input type="text" placeholder="A name we can call you" className="mt-2 w-full rounded-xl border border-input bg-canvas px-4 py-3 text-base outline-none transition focus:border-brand-blue focus:bg-white" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">How can we reach you?</label>
                  <input type="text" required placeholder="Phone number, WhatsApp or email" className="mt-2 w-full rounded-xl border border-input bg-canvas px-4 py-3 text-base outline-none transition focus:border-brand-blue focus:bg-white" />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">Contact preference</label>
                  <div className="mt-3 grid gap-3">
                    {CONTACT_MODES.map((c) => {
                      const active = mode === c.id;
                      return (
                        <button
                          type="button" key={c.id} onClick={() => setMode(c.id)}
                          className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition-all ${active ? "border-brand-blue bg-brand-blue/5 shadow-card" : "border-slate-200/80 bg-white hover:border-brand-blue/40"}`}
                        >
                          <span className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg ${active ? "bg-brand-blue text-white" : "bg-canvas text-ink/70"}`}>
                            <c.icon className="h-4 w-4" />
                          </span>
                          <span className="flex-1">
                            <span className="flex items-center gap-2">
                              <span className="font-semibold text-ink">{c.title}</span>
                              <span className="rounded-full bg-canvas px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink/60">{c.badge}</span>
                            </span>
                            <span className="mt-1 block text-sm text-muted-foreground">{c.desc}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink/70">Anything you'd like us to know (optional)</label>
                  <textarea rows={4} placeholder="Only what you're comfortable sharing." className="mt-2 w-full rounded-xl border border-input bg-canvas px-4 py-3 text-base outline-none transition focus:border-brand-blue focus:bg-white" />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 transition-transform hover:scale-[1.01] sm:w-auto">
                  <Send className="h-4 w-4" /> Send to crisis team
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200/80 bg-canvas p-6">
              <EyeOff className="h-5 w-5 text-brand-blue" />
              <p className="mt-3 font-semibold text-ink">Visibility controls</p>
              <p className="mt-1 text-sm text-muted-foreground">The Quick Exit button at the top of this page redirects to a neutral weather page and clears the entry from your back-button.</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-canvas p-6">
              <MapPin className="h-5 w-5 text-brand-blue" />
              <p className="mt-3 font-semibold text-ink">Walk-in offices</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Mufakose · 14 Mukoma Rd · 08:00–18:00</li>
                <li>Glen View · Hall 4, Westgate · 09:00–17:00</li>
                <li>Chitungwiza · Unit L, Town Centre · 09:00–17:00</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-red/30 bg-brand-red/5 p-6">
              <ShieldAlert className="h-5 w-5 text-brand-red" />
              <p className="mt-3 font-semibold text-ink">Immediate danger?</p>
              <p className="mt-1 text-sm text-muted-foreground">Call <strong className="text-ink">995</strong> first. Then reach us — we'll meet you wherever you end up.</p>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
