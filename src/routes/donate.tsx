import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { DONATION_TIERS } from "@/lib/site-data";
import { Heart, Building2, CreditCard } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Callas Foundation" },
      { name: "description", content: "Every rand is a meal, a court order, a counselling session, a boy choosing a different path. Donate to Callas Foundation today." },
      { property: "og:title", content: "Donate to Callas Foundation" },
      { property: "og:description", content: "Section 18A tax certificates issued. Every donation is publicly accountable." },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [amount, setAmount] = useState(500);
  const [freq, setFreq] = useState<"once" | "monthly">("monthly");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Donate"
        title={<>Your gift, <span className="text-white/80">someone’s tomorrow.</span></>}
        subtitle="Callas Foundation is a registered NPO and PBO. Every donation issues a Section 18A tax certificate on request."
        variant="red"
      />

      <section className="bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.3fr_1fr] lg:py-24">
          <div className="rounded-2xl border border-callas-line bg-callas-canvas p-7 sm:p-10">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Give online</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Choose your impact</h2>

            <div className="mt-6 inline-flex rounded-full border border-callas-line bg-white p-1">
              {(["monthly", "once"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFreq(f)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${freq === f ? "bg-callas-ink text-white" : "text-callas-ink/70"}`}
                >
                  {f === "monthly" ? "Monthly" : "Once-off"}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {DONATION_TIERS.map((t) => (
                <button
                  key={t.amount}
                  onClick={() => setAmount(t.amount)}
                  className={`rounded-xl border-2 p-4 text-left transition ${amount === t.amount ? "border-callas-red bg-white shadow-lg" : "border-callas-line bg-white hover:border-callas-red/50"}`}
                >
                  <div className="font-display text-2xl font-bold text-callas-blue">{t.label}</div>
                  <div className="mt-1 text-xs leading-snug text-callas-ink/70">{t.impact}</div>
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wider text-callas-ink/70">Or choose your own (ZAR)</label>
              <input
                type="number"
                min={50}
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                className="mt-2 w-full rounded-md border border-callas-line bg-white px-4 py-3 font-display text-2xl font-bold outline-none focus:border-callas-blue"
              />
            </div>

            <button
              onClick={() => alert(`Thank you! Redirecting to secure payment for R${amount} ${freq}. (Payment integration pending.)`)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-callas-red px-6 py-4 text-base font-bold text-white shadow-xl shadow-callas-red/30 transition hover:bg-callas-red-dark"
            >
              <Heart className="h-5 w-5" /> Donate R{amount.toLocaleString()} {freq === "monthly" && "/ month"}
            </button>
            <p className="mt-3 text-center text-xs text-callas-ink/60">Secure card payments · Section 18A certificate emailed</p>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-callas-blue p-7 text-white">
              <div className="inline-flex items-center gap-2"><Building2 className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[0.22em]">EFT / Banking</span></div>
              <dl className="mt-5 space-y-3 text-sm">
                <div><dt className="text-xs uppercase text-white/60">Bank</dt><dd className="font-semibold">Standard Bank</dd></div>
                <div><dt className="text-xs uppercase text-white/60">Account name</dt><dd className="font-semibold">Callas Foundation NPC</dd></div>
                <div><dt className="text-xs uppercase text-white/60">Account number</dt><dd className="font-semibold">072 891 234</dd></div>
                <div><dt className="text-xs uppercase text-white/60">Branch code</dt><dd className="font-semibold">051001</dd></div>
                <div><dt className="text-xs uppercase text-white/60">Reference</dt><dd className="font-semibold">Your name + DONATION</dd></div>
              </dl>
            </div>
            <div className="rounded-2xl bg-callas-ink p-7 text-white">
              <div className="inline-flex items-center gap-2"><CreditCard className="h-5 w-5 text-callas-red" /><span className="text-xs font-bold uppercase tracking-[0.22em]">Other ways to give</span></div>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                <li>→ Payroll giving via your employer</li>
                <li>→ Recurring debit order (contact us to set up)</li>
                <li>→ Bequest in your will</li>
                <li>→ In-kind donations (food, hygiene, school supplies)</li>
              </ul>
              <Link to="/support-our-work" className="mt-5 inline-block text-xs font-bold uppercase tracking-wider text-callas-red">Full support options →</Link>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
