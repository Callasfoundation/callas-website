import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { DONATION_TIERS } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/support-our-work")({
  head: () => ({
    meta: [
      { title: "Support Our Work — Callas Foundation" },
      { name: "description", content: "Funding priorities, community needs, and every way you can stand with Callas Foundation." },
      { property: "og:title", content: "Support Our Work — Callas Foundation" },
      { property: "og:description", content: "Funding priorities and ways to give to the Callas Foundation." },
    ],
  }),
  component: SupportPage,
});

const PRIORITIES = [
  { title: "Community Kitchen — R 35,000 / month", desc: "Closes the gap between donor food and the 750 daily meals we serve. Fuel, transport, food handlers." },
  { title: "GBV First Responders Cohort 5 — R 220,000", desc: "Funds a full 12-week training cohort for 30 new community responders." },
  { title: "Trauma counselling expansion — R 84,000 / quarter", desc: "Adds a second qualified counsellor to clear our waitlist for child play therapy." },
  { title: "BBB Boys camp 2026 — R 145,000", desc: "Three-day residential camp for 80 boys — venue, food, transport, facilitators." },
];

function SupportPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Support Our Work" title={<>Where your money goes. <span className="text-white/80">In detail.</span></>} subtitle="We publish exactly what we need and exactly how it's spent. No vague appeals." variant="blue" />

      <section className="bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Current community needs</div>
            <h2 className="mt-3 font-display text-4xl font-bold">2026 funding priorities</h2>
            <div className="mt-8 space-y-4">
              {PRIORITIES.map((p) => (
                <div key={p.title} className="rounded-xl border-l-4 border-callas-blue bg-callas-canvas p-6">
                  <div className="font-display text-lg font-bold">{p.title}</div>
                  <p className="mt-2 text-sm text-callas-ink/75">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-callas-ink p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Donation impact</div>
              <ul className="mt-5 divide-y divide-white/10">
                {DONATION_TIERS.map((t) => (
                  <li key={t.amount} className="flex items-start justify-between gap-4 py-3">
                    <span className="font-display text-xl font-bold text-white">{t.label}</span>
                    <span className="text-sm text-white/80">{t.impact}</span>
                  </li>
                ))}
              </ul>
              <Link to="/donate" className="mt-5 inline-flex items-center gap-1 rounded-full bg-callas-red px-5 py-2.5 text-sm font-bold text-white">
                Donate now <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl bg-callas-blue p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Banking details</div>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between"><dt>Bank</dt><dd className="font-semibold">Standard Bank</dd></div>
                <div className="flex justify-between"><dt>Account</dt><dd className="font-semibold">Callas Foundation NPC</dd></div>
                <div className="flex justify-between"><dt>Number</dt><dd className="font-semibold">072 891 234</dd></div>
                <div className="flex justify-between"><dt>Branch</dt><dd className="font-semibold">051001</dd></div>
                <div className="flex justify-between"><dt>Swift</dt><dd className="font-semibold">SBZAZAJJ</dd></div>
              </dl>
            </div>

            <Link to="/corporate-partnership" className="block rounded-2xl bg-callas-red p-7 text-white transition hover:bg-callas-red-dark">
              <div className="text-xs font-bold uppercase tracking-[0.22em]">For Corporates</div>
              <div className="mt-2 font-display text-xl font-bold">CSI, employee volunteering, sponsorship & Section 18A →</div>
            </Link>
          </aside>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
