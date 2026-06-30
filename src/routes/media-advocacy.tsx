import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Mic, Radio, FileText, Newspaper } from "lucide-react";

export const Route = createFileRoute("/media-advocacy")({
  head: () => ({
    meta: [
      { title: "Media & Advocacy — Callas Foundation" },
      { name: "description", content: "Radio interviews, webinar recordings, conference presentations, policy submissions and press coverage from Callas Foundation." },
      { property: "og:title", content: "Media & Advocacy — Callas Foundation" },
      { property: "og:description", content: "Radio, webinars, policy submissions, and press coverage." },
    ],
  }),
  component: () => {
    const ITEMS = [
      { icon: Radio, type: "Radio", title: "SAfm — Gender Justice on the Cape Flats", date: "12 March 2026", body: "Executive Director Nontuthuzelo Mbele on the structural roots of GBV in working-class communities." },
      { icon: Mic, type: "Webinar", title: "Protection Orders: A Survivor’s Guide", date: "8 February 2026", body: "90-minute walkthrough recorded with WLC. Watch the full session." },
      { icon: FileText, type: "Policy Submission", title: "Submission to Portfolio Committee on Social Development", date: "21 November 2025", body: "Callas’s submission on the proposed amendments to the Domestic Violence Act." },
      { icon: Newspaper, type: "Press", title: "Daily Maverick — How One Cape Flats NGO Quietly Hit 250,000 Meals", date: "5 February 2026", body: "Featured profile of our community kitchen operation." },
    ];
    return (
      <SiteLayout>
        <PageHero eyebrow="Media & Advocacy" title={<>The work, <span className="text-white/80">in public.</span></>} subtitle="Radio, webinars, op-eds, policy submissions, and press features — keeping GBV in the national conversation." variant="ink" />
        <section className="bg-white">
          <div className="container-x py-16 lg:py-20">
            <div className="space-y-4">
              {ITEMS.map((it) => (
                <article key={it.title} className="flex flex-col gap-4 rounded-2xl border border-callas-line bg-callas-canvas p-7 sm:flex-row">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-callas-red text-white"><it.icon className="h-6 w-6" /></div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-callas-blue">{it.type} · {it.date}</div>
                    <h3 className="mt-1 font-display text-xl font-bold">{it.title}</h3>
                    <p className="mt-2 text-sm text-callas-ink/80">{it.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </SiteLayout>
    );
  },
});
