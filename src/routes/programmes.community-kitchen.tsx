import { createFileRoute } from "@tanstack/react-router";
import { UtensilsCrossed } from "lucide-react";
import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import img from "@/assets/kitchen.jpg";

export const Route = createFileRoute("/programmes/community-kitchen")({
  head: () => ({ meta: [{ title: "Community Kitchen — Callas Foundation" }, { name: "description", content: "Three permanent kitchens converting donor produce into 600 hot, dignified meals daily." }] }),
  component: () => (
    <ProgrammeDetail
      icon={UtensilsCrossed}
      tag="Community Kitchen Operations"
      title="A hot plate of food is the easiest sentence in any safety plan."
      lead="Three permanent kitchens, twelve daily routes, and a supply chain built around dignity — because hunger is the lever that keeps survivors in danger."
      image={img}
      imageAlt="Volunteers preparing meals in the community kitchen"
      overview={[
        "Our kitchens operate six days a week and produce a hot mid-day meal plus an evening take-home portion for high-risk households identified by our caseworkers. No queues, no IDs — meals are delivered to the household by route teams.",
        "Produce arrives from a network of 41 small-holder farms, two wholesale donors and our own Glen View vegetable garden. Meals are nutritionally certified by a registered dietician.",
        "Every meal carries a discreet card with the 24/7 crisis line — a small move that has originated more than 300 intakes in the last two years.",
      ]}
      workflow={[
        { title: "Donor ingestion",       body: "Daily 05:30 produce drop at each hub; weighed, logged, cold-chain checked." },
        { title: "Prep & nutrition QA",   body: "Two registered dieticians sign off menus on a 14-day rotation." },
        { title: "Route assembly",        body: "Twelve delivery routes packed by 10:30; warm boxes, sealed lids." },
        { title: "Dignified delivery",    body: "Door-to-door drop with discreet crisis-line card; no household identifiers." },
      ]}
      metrics={[
        { value: "184,200", label: "Meals served in 2024" },
        { value: "3",       label: "Permanent kitchen hubs" },
        { value: "41",      label: "Partner small-holder farms" },
        { value: "300+",    label: "Intakes originated from delivery cards" },
      ]}
      locations={[
        { ward: "Mufakose Hub",   cadence: "Mon–Sat, 600 meals/day", lead: "Mrs. C. Manyere" },
        { ward: "Glen View Hub",  cadence: "Mon–Sat, 420 meals/day", lead: "Mr. F. Sibanda" },
        { ward: "Kuwadzana Hub",  cadence: "Mon–Sat, 380 meals/day", lead: "Ms. T. Chibanda" },
        { ward: "Mobile route 7", cadence: "Sunday community lunch", lead: "Mr. G. Marowa" },
      ]}
      outcomes={[
        "Nutritional adequacy verified monthly against WHO household-vulnerability benchmarks.",
        "Cold-chain audits passed for 19 consecutive quarters with zero food-safety incidents.",
        "Delivery teams trained in safeguarding and serve as a passive monitoring layer in wards.",
        "Procurement reports published quarterly with farm-level traceability.",
      ]}
      partners={["Foodlovers Wholesale", "Mbare Mushika Mushika Vendors Cooperative", "Nutrition Council of Zimbabwe"]}
    />
  ),
});
