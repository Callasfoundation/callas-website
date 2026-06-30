import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Briefcase, Award, Users, Handshake } from "lucide-react";

export const Route = createFileRoute("/corporate-partnership")({
  head: () => ({
    meta: [
      { title: "Corporate Partnership — Callas Foundation" },
      { name: "description", content: "CSI, employee volunteer programmes, skills-based volunteering, sponsorship and Section 18A partnership with Callas Foundation." },
      { property: "og:title", content: "Corporate Partnership — Callas Foundation" },
      { property: "og:description", content: "Partner with Callas on measurable, audited social impact in the Cape Flats." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Corporate Partnership" title={<>Measurable impact. <span className="text-white/80">Audited outcomes.</span></>} subtitle="Callas is a registered NPO and PBO. We issue Section 18A tax certificates and report against your CSI scorecard quarterly." variant="ink" />
      <section className="bg-white">
        <div className="container-x py-20 lg:py-24">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: Briefcase, title: "Corporate Social Investment", body: "Multi-year, programme-aligned funding with audited outcomes reporting and a named programme officer for your company." },
              { icon: Users, title: "Employee Volunteering", body: "Half-day, full-day, and ongoing team volunteering across our kitchen, BBB workshops, school clubs, and back-office work." },
              { icon: Award, title: "Sponsorship", body: "Sponsor a cohort, a kitchen, an event, or the 16 Days of Activism campaign. Co-branded reporting and visibility." },
              { icon: Handshake, title: "Skills-Based Volunteering", body: "Pro-bono legal, counselling, financial, HR, IT, and marketing engagements scoped to your team's capacity." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-callas-line bg-callas-canvas p-7">
                <c.icon className="h-7 w-7 text-callas-red" />
                <div className="mt-3 font-display text-xl font-bold">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-callas-ink/75">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-callas-blue p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Registration</div>
              <div className="mt-3 font-display text-2xl font-bold">NPO 234-891</div>
              <div className="text-xs text-white/70">Department of Social Development</div>
            </div>
            <div className="rounded-2xl bg-callas-red p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Tax Status</div>
              <div className="mt-3 font-display text-2xl font-bold">PBO 930071122</div>
              <div className="text-xs text-white/85">Section 18A certificates issued</div>
            </div>
            <div className="rounded-2xl bg-callas-ink p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">BEE</div>
              <div className="mt-3 font-display text-2xl font-bold">Level 1 Beneficiary</div>
              <div className="text-xs text-white/70">100% Black beneficiary</div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-callas-ink p-10 text-center text-white">
            <h2 className="font-display text-3xl font-bold">Let’s build a partnership.</h2>
            <p className="mt-3 text-sm text-white/80">Email <a href="mailto:partnerships@callasfoundation.org.za" className="underline">partnerships@callasfoundation.org.za</a> or reach our Partnerships Lead directly.</p>
            <Link to="/contact" className="mt-6 inline-flex rounded-full bg-callas-red px-6 py-3 text-sm font-bold text-white hover:bg-callas-red-dark">Start a conversation</Link>
          </div>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  ),
});
