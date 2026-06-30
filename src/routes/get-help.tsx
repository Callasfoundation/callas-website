import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Phone, MessageCircle, Shield, EyeOff } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/get-help")({
  head: () => ({
    meta: [
      { title: "Get Help Now — Callas Foundation" },
      { name: "description", content: "If you or someone you love is facing gender-based violence, Callas Foundation is here. Confidential, free, and trauma-informed." },
      { property: "og:title", content: "Get Help Now — Callas Foundation" },
      { property: "og:description", content: "Confidential, free, trauma-informed GBV support across the Cape Flats." },
    ],
  }),
  component: GetHelpPage,
});

function GetHelpPage() {
  return (
    <SiteLayout>
      {/* Emergency banner */}
      <section className="bg-callas-red text-white">
        <div className="container-x flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0" />
            <div>
              <div className="text-sm font-bold uppercase tracking-wider">In immediate danger?</div>
              <div className="text-sm">Call SAPS <a href="tel:10111" className="underline">10111</a> · GBV Command Centre <a href="tel:0800428428" className="underline">0800 428 428</a></div>
            </div>
          </div>
          <button
            onClick={() => { window.open("https://www.google.co.za", "_blank"); window.location.replace("https://www.google.co.za"); }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-callas-red"
          >
            <EyeOff className="h-4 w-4" /> Quick Safety Exit
          </button>
        </div>
      </section>

      <section className="bg-callas-ink text-white">
        <div className="container-x py-16 lg:py-20">
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl">You are not alone. <span className="text-callas-red">We answer every message.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85">
            What you share with us stays with us. Every Callas advocate is trained, confidential, and trauma-informed. Choose the contact method that is safest for you right now.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-20">
          <div className="space-y-4">
            <div className="rounded-2xl border-2 border-callas-red bg-callas-red/5 p-7">
              <div className="inline-flex items-center gap-2 text-callas-red"><Phone className="h-5 w-5" /><span className="font-display text-xl font-bold">Safe to Call</span></div>
              <p className="mt-3 text-sm leading-relaxed text-callas-ink/80">You can speak freely on your phone. A Callas advocate will answer and stay on the line with you.</p>
              <a href={`tel:${SITE.phoneRaw}`} className="mt-4 inline-flex items-center gap-2 rounded-full bg-callas-red px-5 py-3 text-sm font-bold text-white hover:bg-callas-red-dark">
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            </div>

            <div className="rounded-2xl border-2 border-callas-blue bg-callas-blue/5 p-7">
              <div className="inline-flex items-center gap-2 text-callas-blue"><MessageCircle className="h-5 w-5" /><span className="font-display text-xl font-bold">Text Only / Active Risk</span></div>
              <p className="mt-3 text-sm leading-relaxed text-callas-ink/80">If speaking out loud isn't safe, message us on WhatsApp. We respond personally, never with an autobot, and we won't share your number.</p>
              <a href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white">
                Open WhatsApp Chat
              </a>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you. A Callas advocate will reach out as soon as possible."); }}
              className="rounded-2xl border border-callas-line bg-callas-canvas p-7"
            >
              <div className="inline-flex items-center gap-2 text-callas-ink"><Shield className="h-5 w-5 text-callas-blue" /><span className="font-display text-xl font-bold">Send a confidential message</span></div>
              <p className="mt-2 text-xs text-callas-ink/65">Use any name. Use any contact method. We will only follow up the way you ask us to.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input placeholder="Name (or initials)" className="rounded-md border border-callas-line bg-white px-3 py-2.5 text-sm outline-none focus:border-callas-blue" />
                <input placeholder="How to reach you" className="rounded-md border border-callas-line bg-white px-3 py-2.5 text-sm outline-none focus:border-callas-blue" />
              </div>
              <textarea rows={5} placeholder="What is happening? Take your time." className="mt-3 w-full rounded-md border border-callas-line bg-white px-3 py-2.5 text-sm outline-none focus:border-callas-blue" />
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-callas-ink/70">
                <label className="inline-flex items-center gap-2"><input type="radio" name="contact" defaultChecked /> Safe to call</label>
                <label className="inline-flex items-center gap-2"><input type="radio" name="contact" /> WhatsApp only</label>
                <label className="inline-flex items-center gap-2"><input type="radio" name="contact" /> Email only</label>
                <label className="inline-flex items-center gap-2"><input type="radio" name="contact" /> Do not contact me directly — I will follow up</label>
              </div>
              <button type="submit" className="mt-5 rounded-full bg-callas-ink px-5 py-3 text-sm font-bold text-white hover:bg-black">
                Send confidential message
              </button>
            </form>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-callas-ink p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Browser Safety</div>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li>→ Use the red <span className="font-bold">Safety Exit</span> button to leave this page instantly.</li>
                <li>→ Use private/incognito browsing so this site doesn't appear in your history.</li>
                <li>→ On a shared device, clear your browser history after visiting.</li>
                <li>→ If you think your phone is monitored, use a friend's phone or a library computer.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-callas-line bg-white p-7">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">National Hotlines</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><span className="font-bold">SAPS Emergency</span> · <a href="tel:10111" className="text-callas-blue">10111</a></li>
                <li><span className="font-bold">GBV Command Centre</span> · <a href="tel:0800428428" className="text-callas-blue">0800 428 428</a></li>
                <li><span className="font-bold">Childline SA</span> · <a href="tel:116" className="text-callas-blue">116</a></li>
                <li><span className="font-bold">LifeLine</span> · <a href="tel:0861322322" className="text-callas-blue">0861 322 322</a></li>
              </ul>
            </div>

            <Link to="/resources" className="block rounded-2xl bg-callas-blue p-7 text-white transition hover:bg-callas-blue-dark">
              <div className="text-xs font-bold uppercase tracking-[0.22em]">Resources</div>
              <div className="mt-2 font-display text-xl font-bold">Safety planning workbook, protection-order guides, shelter directory →</div>
            </Link>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
