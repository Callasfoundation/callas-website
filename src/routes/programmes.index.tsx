import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ProgrammesGrid } from "@/components/ProgrammesGrid";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Programmes — Callas Foundation" },
      { name: "description", content: "Seven frontline programmes — from access to justice and trauma counselling to community feeding, GBV first responder training, and youth mentorship." },
      { property: "og:title", content: "Callas Foundation Programmes" },
      { property: "og:description", content: "Seven frontline programmes serving 14 Cape Flats communities." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Our Programmes"
        title={<>Seven frontline programmes. <span className="text-white/80">One foundation.</span></>}
        subtitle="Each programme below is operated by Callas staff who live in the communities they serve. Click into any to see the activities, outcomes, and people behind it."
        variant="red"
      />
      <ProgrammesGrid />
      <CTASection />
    </SiteLayout>
  ),
});
