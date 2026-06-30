import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { FileText, ShieldCheck, Scale, ArrowUpRight } from "lucide-react";

const BOARD = [
  { name: "Adv. Thandiwe Khoza", role: "Chair" },
  { name: "Rev. Michael Petersen", role: "Deputy Chair" },
  { name: "Nontuthuzelo Mbele", role: "Executive Director (Ex-officio)" },
  { name: "Zubeida Ismail CA(SA)", role: "Treasurer" },
  { name: "Dr. Sive Mngxekeza", role: "Board Member" },
  { name: "Lebo Maseko", role: "Board Member" },
];

const DOCS = [
  { title: "2025 Annual Report (audited)", year: "2025" },
  { title: "2024 Annual Report (audited)", year: "2024" },
  { title: "Constitution of Callas Foundation NPC", year: "2014, amended 2022" },
  { title: "NPO Registration Certificate", year: "2014" },
  { title: "PBO Certificate (Section 18A)", year: "2016" },
  { title: "Safeguarding Policy", year: "2024" },
];

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance & Transparency — Callas Foundation" },
      { name: "description", content: "Board, annual reports, registration documents, safeguarding policy, and audited financials." },
      { property: "og:title", content: "Governance & Transparency — Callas Foundation" },
      { property: "og:description", content: "Board, registration, audited reports, and safeguarding." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Governance & Transparency" title={<>The receipts. <span className="text-white/80">All of them.</span></>} subtitle="We publish our board, our financials, our policies and our outcomes openly — every year, without prompting." variant="blue" />
      <section className="bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-24">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Our Board</div>
            <h2 className="mt-3 font-display text-3xl font-bold">Independent oversight</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {BOARD.map((b) => (
                <div key={b.name} className="rounded-xl bg-callas-canvas p-5">
                  <div className="font-display text-base font-bold">{b.name}</div>
                  <div className="text-xs text-callas-ink/65">{b.role}</div>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl bg-callas-ink p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Registration</div>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-callas-red" /><span><span className="font-bold">NPO 234-891</span> — Department of Social Development</span></li>
                <li className="flex items-start gap-2"><Scale className="mt-0.5 h-4 w-4 shrink-0 text-callas-red" /><span><span className="font-bold">PBO 930071122</span> — Section 18A approved</span></li>
                <li className="flex items-start gap-2"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-callas-red" /><span>Registered as <span className="font-bold">Callas Foundation NPC</span> · 2014/123456/08</span></li>
              </ul>
            </div>
            <div className="rounded-2xl bg-callas-red p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em]">Whistleblowing</div>
              <p className="mt-3 text-sm text-white/85">Suspect financial irregularity, safeguarding failure, or staff misconduct? Email <a href="mailto:whistleblow@callasfoundation.org.za" className="underline">whistleblow@callasfoundation.org.za</a> — independent oversight, full confidentiality.</p>
            </div>
          </aside>
        </div>

        <div className="container-x pb-20">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Documents</div>
          <h2 className="mt-3 font-display text-3xl font-bold">Public records</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {DOCS.map((d) => (
              <a key={d.title} href="#" className="group flex items-center justify-between gap-4 rounded-xl border border-callas-line bg-white p-5 transition hover:border-callas-red">
                <div>
                  <div className="font-display text-base font-bold">{d.title}</div>
                  <div className="text-xs text-callas-ink/60">{d.year}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-callas-blue" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  ),
});
