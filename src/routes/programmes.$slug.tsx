import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTASection } from "@/components/CTASection";
import { PROGRAMMES } from "@/lib/site-data";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";

const DETAILS: Record<string, { purpose: string; activities: string[]; outcomes: string[]; testimonial: { quote: string; attr: string } }> = {
  "access-to-justice": {
    purpose: "To remove the procedural, language, and transport barriers that keep survivors of GBV from securing court protection in South Africa.",
    activities: [
      "Drafting protection order applications and J88 affidavits",
      "Accompanying survivors to Mitchells Plain, Athlone, and Wynberg Magistrates Courts",
      "Liaising with SAPS GBV desks and the DPP",
      "Free legal clinic every Tuesday and Thursday at our Hanover Park office",
      "Court-readiness coaching and trauma-informed advocacy",
    ],
    outcomes: [
      "412 protection orders secured in 2025",
      "94% court appearance rate among accompanied clients",
      "Average 9 days from intake to served order",
    ],
    testimonial: { quote: "They sat next to me in court. I would never have walked through those doors alone.", attr: "Callas client, Mitchells Plain" },
  },
  "psychosocial-support": {
    purpose: "To make trauma-informed counselling and peer support accessible — for free, in isiXhosa, Afrikaans and English — to anyone affected by GBV on the Cape Flats.",
    activities: [
      "One-on-one trauma counselling with registered counsellors",
      "Survivor-led peer support circles weekly",
      "Children's play therapy for child witnesses",
      "Safety planning and risk assessment",
      "Referrals into shelter and long-term care",
    ],
    outcomes: [
      "1,940 counselling sessions delivered in 2025",
      "11 active peer-support circles across the Cape Flats",
      "Zero waitlist for first appointments",
    ],
    testimonial: { quote: "For the first time, someone listened without trying to fix me.", attr: "Peer-circle participant, Manenberg" },
  },
  "gbv-first-responders": {
    purpose: "To train ordinary neighbours, taxi drivers, shopkeepers and street committee members as certified first responders so survivors don't have to wait for the state to arrive.",
    activities: [
      "12-week certified GBV first responder curriculum",
      "Neighbourhood watch cell formation and supervision",
      "24/7 community escalation hotline staffed by graduates",
      "Quarterly refresher and trauma debrief sessions",
    ],
    outcomes: [
      "86 active certified first responders in 2026",
      "1,200+ community escalations safely routed in 2025",
      "Average 14-minute response time across active cells",
    ],
    testimonial: { quote: "I am a taxi driver. Now I am also the person three streets call first.", attr: "Cohort 4 graduate, Khayelitsha" },
  },
  "bbb-boys": {
    purpose: "To interrupt the generational cycle of violence by walking with boys aged 10–18 through accountability, emotional literacy, and conflict resolution.",
    activities: [
      "Weekly Saturday mentorship circles, age-banded",
      "Three annual residential leadership camps",
      "Father-figure pairing and check-in calls",
      "Restorative justice workshops with schools",
      "Graduation pathway into Men's Engagement forum",
    ],
    outcomes: [
      "312 active participants across 5 communities",
      "78% reduction in reported school violence among 2024 cohort",
      "24 graduates now active community facilitators",
    ],
    testimonial: { quote: "BBB taught me my anger is not who I am. It's information.", attr: "BBB graduate, age 17, Hanover Park" },
  },
  "community-kitchen": {
    purpose: "To make sure no child or grandmother on our streets goes to bed hungry — every single day, no questions asked, no paperwork required.",
    activities: [
      "750+ hot meals prepared and served daily",
      "Donor-ingredient intake (Pick n Pay, FoodForward SA, local farmers)",
      "Weekly cooked-meal delivery routes to bedridden elderly",
      "Holiday programme: breakfast for 200 children daily",
      "Volunteer kitchen training and food-handler certification",
    ],
    outcomes: [
      "275,000+ meals served in 2025",
      "Zero food cost passed to beneficiaries",
      "38% year-on-year volume growth",
    ],
    testimonial: { quote: "My grandchildren eat here. So do I. That's the truth.", attr: "Aunty Maggie, daily visitor, Hanover Park" },
  },
  "human-rights-clubs": {
    purpose: "To plant the language of human dignity, consent, and safe boundaries in the everyday vocabulary of Cape Flats children — early, often, and joyfully.",
    activities: [
      "Weekly in-school Human Rights Club sessions",
      "Termly youth leadership intensives",
      "Annual Children's Charter Assembly",
      "Teacher training on trauma-aware classrooms",
    ],
    outcomes: [
      "27 partner schools across 14 communities",
      "4,800+ learners reached weekly",
      "Curriculum endorsed by Western Cape DSD",
    ],
    testimonial: { quote: "Our learners speak about their rights with words they didn't have a year ago.", attr: "Grade 7 educator, Manenberg Primary" },
  },
  "mens-engagement": {
    purpose: "To create the rooms where men can be held accountable by other men — without shame, without performance, and without exit from the conversation.",
    activities: [
      "Monthly facilitated men's dialogue forums",
      "Fatherhood and accountability workshop series",
      "Workplace facilitation in partner companies",
      "Direct referral pathway from court-mandated programmes",
    ],
    outcomes: [
      "640+ men engaged through monthly forums in 2025",
      "12 active workplace partners",
      "Zero re-offence rate among Year-2 cohort participants",
    ],
    testimonial: { quote: "This is the first room I've ever been in where men talk and don't perform.", attr: "Forum participant, age 42, Athlone" },
  },
};

export const Route = createFileRoute("/programmes/$slug")({
  loader: ({ params }) => {
    const programme = PROGRAMMES.find((p) => p.slug === params.slug);
    if (!programme) throw notFound();
    return { programme, detail: DETAILS[params.slug] };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.programme.name} — Callas Foundation` },
      { name: "description", content: loaderData?.programme.short ?? "" },
      { property: "og:title", content: `${loaderData?.programme.name} — Callas Foundation` },
      { property: "og:description", content: loaderData?.programme.short ?? "" },
    ],
  }),
  component: ProgrammeDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Programme not found</h1>
        <Link to="/programmes" className="mt-4 inline-block text-callas-blue">Back to programmes</Link>
      </div>
    </SiteLayout>
  ),
});

function ProgrammeDetail() {
  const { programme, detail } = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-callas-ink text-white">
        <img src={programme.image} alt="" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-callas-ink via-callas-ink/80 to-transparent" />
        <div className="container-x relative py-20 lg:py-32">
          <Link to="/programmes" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white">
            <ArrowLeft className="h-3 w-3" /> All programmes
          </Link>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">{programme.name}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{detail.purpose}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x grid gap-16 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-28">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">What we do</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Activities</h2>
            <ul className="mt-8 space-y-4">
              {detail.activities.map((a: string) => (
                <li key={a} className="flex gap-3 rounded-xl border border-callas-line bg-callas-canvas p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-callas-red" />
                  <span className="text-sm leading-relaxed text-callas-ink/85">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl bg-callas-blue p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Programme Outcomes</div>
              <ul className="mt-5 space-y-3 text-sm">
                {detail.outcomes.map((o: string) => (
                  <li key={o} className="flex gap-2"><span className="text-white/70">→</span><span>{o}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-l-4 border-callas-red bg-white p-7 shadow-sm">
              <p className="font-display text-lg italic leading-snug">“{detail.testimonial.quote}”</p>
              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-callas-ink/60">— {detail.testimonial.attr}</div>
            </div>
            <div className="rounded-2xl bg-callas-ink p-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Need this programme?</div>
              <p className="mt-3 text-sm leading-relaxed text-white/80">Reach our team directly — we’ll match you to the right person.</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-callas-red px-4 py-2 text-xs font-bold text-white hover:bg-callas-red-dark">
                <Phone className="h-3.5 w-3.5" /> Contact this team
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
