import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Heart, HandHeart, Handshake, Phone, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Callas Foundation" },
      { name: "description", content: "Donate, volunteer, partner, or get help. Every path into Callas Foundation." },
      { property: "og:title", content: "Get Involved with Callas Foundation" },
      { property: "og:description", content: "Donate, volunteer, partner, or get help." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Get Involved" title={<>Every path in. <span className="text-white/80">Pick yours.</span></>} subtitle="There is no small contribution. R50, two hours on a Saturday, a single legal referral — every act compounds." variant="red" />
      <section className="bg-white">
        <div className="container-x grid gap-4 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:py-24">
          {[
            { to: "/donate", icon: Heart, title: "Donate", body: "Once-off or monthly. Card or EFT. Section 18A on request.", bg: "bg-callas-red" },
            { to: "/volunteer", icon: HandHeart, title: "Volunteer", body: "Fieldwork, kitchen, skills-based, or remote support.", bg: "bg-callas-blue" },
            { to: "/corporate-partnership", icon: Handshake, title: "Partner", body: "CSI, sponsorship, employee volunteering, skills hours.", bg: "bg-callas-ink" },
            { to: "/get-help", icon: Phone, title: "Get Help", body: "Confidential GBV support — call, WhatsApp, or message form.", bg: "bg-callas-red" },
          ].map((c) => (
            <Link key={c.to} to={c.to} className={`${c.bg} group flex flex-col rounded-2xl p-7 text-white transition hover:-translate-y-1`}>
              <c.icon className="h-7 w-7" />
              <div className="mt-4 font-display text-2xl font-bold">{c.title}</div>
              <p className="mt-2 flex-1 text-sm text-white/85">{c.body}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                Go <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  ),
});
