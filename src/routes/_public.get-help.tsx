import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AlertTriangle, LogOut, Phone, MessageSquare, ShieldAlert, MonitorOff } from "lucide-react";
import { Reveal } from "@/components/motion";
import { site } from "@/data/site";

export const Route = createFileRoute("/_public/get-help")({
  head: () => ({
    meta: [
      { title: "Get Help — Callas Foundation" },
      { name: "description", content: "Reach a Callas Foundation advocate. Confidential intake, quick-exit button, safety-first design." },
      { property: "og:title", content: "Get Help — Callas Foundation" },
      { property: "og:description", content: "Safe, confidential intake for survivors on the Cape Flats." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: GetHelpPage,
});

function quickExit() {
  try { history.replaceState(null, "", "/"); } catch {}
  window.location.replace("https://www.google.com/search?q=weather");
}

function GetHelpPage() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [pref, setPref] = useState<"safe" | "text" | "risk">("safe");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") quickExit(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="bg-canvas min-h-screen">
      <div className="sticky top-20 z-30 bg-brand-red text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <ShieldAlert className="h-4 w-4" /> If you're being watched, press <kbd className="mx-1 rounded bg-white/20 px-1.5 py-0.5 text-xs">ESC</kbd> to leave this page instantly.
          </div>
          <button onClick={quickExit} className="inline-flex items-center gap-1.5 rounded-full bg-white text-brand-red px-3 py-1.5 text-xs font-bold hover:-translate-y-0.5 transition-transform">
            <LogOut className="h-3.5 w-3.5" /> Quick Exit
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold">You are not alone</div>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-ink leading-tight">Reach Callas — safely and on your terms.</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Fill in what you can. Skip what you can't. A trained advocate will respond within one business day — sooner if you mark active risk.</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <aside className="lg:col-span-1 space-y-4">
            <div className="rounded-2xl bg-ink text-white p-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-brand-red font-semibold"><AlertTriangle className="h-4 w-4" /> Immediate danger?</div>
              <div className="mt-4 space-y-3">
                <a href={`tel:${site.emergency.saps}`} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4 text-brand-red" />
                  <div><div className="text-xs uppercase tracking-wider text-white/70">SAPS Emergency</div><div className="font-bold">{site.emergency.saps}</div></div>
                </a>
                <a href={`tel:${site.emergency.gbv.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4 text-brand-red" />
                  <div><div className="text-xs uppercase tracking-wider text-white/70">GBV Command Centre</div><div className="font-bold">{site.emergency.gbv}</div></div>
                </a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 hover:bg-white/20 transition-colors">
                  <MessageSquare className="h-4 w-4 text-brand-red" />
                  <div><div className="text-xs uppercase tracking-wider text-white/70">Callas WhatsApp</div><div className="font-bold">{site.phone}</div></div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm"><MonitorOff className="h-4 w-4" /> Browser safety</div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                An abuser can see the pages you visit. Use private/incognito browsing and clear your history when you leave. Press ESC or the red button to exit this page instantly.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              {sent ? (
                <div className="rounded-2xl bg-white border border-slate-200 p-10 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-blue/10 text-brand-blue"><ShieldAlert className="h-6 w-6" /></div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-ink">We've received your message.</h2>
                  <p className="mt-2 text-muted-foreground">An advocate will contact you using your preferred method. Stay safe.</p>
                  <button onClick={() => navigate({ to: "/" })} className="mt-6 rounded-full bg-brand-blue text-white px-6 py-3 text-sm font-semibold">Return home</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">First name (or a name we can use)</label>
                    <input required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:border-brand-blue" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Contact number</label>
                      <input type="tel" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:border-brand-blue" />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email (optional)</label>
                      <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:border-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">How should we contact you?</label>
                    <div className="mt-2 grid gap-2 sm:grid-cols-3">
                      {[
                        { k: "safe", l: "Safe to call", d: "Anytime" },
                        { k: "text", l: "Text only", d: "No voice" },
                        { k: "risk", l: "Active risk", d: "Urgent" },
                      ].map((o) => (
                        <label key={o.k} className="cursor-pointer">
                          <input type="radio" name="pref" className="peer sr-only" checked={pref === o.k} onChange={() => setPref(o.k as typeof pref)} />
                          <div className={`rounded-xl border-2 px-4 py-3 transition-all ${pref === o.k ? (o.k === "risk" ? "border-brand-red bg-brand-red text-white" : "border-brand-blue bg-brand-blue text-white") : "border-slate-200 bg-white text-ink hover:border-brand-blue/40"}`}>
                            <div className="font-semibold text-sm">{o.l}</div>
                            <div className={`text-xs ${pref === o.k ? "text-white/80" : "text-muted-foreground"}`}>{o.d}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">What's happening? (share only what you're comfortable with)</label>
                    <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:outline-none focus:border-brand-blue" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-red/30">
                    Send safely
                  </button>
                  <p className="text-xs text-muted-foreground text-center">This is a frontend prototype. In production this form will submit securely to the Callas advocate team.</p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}