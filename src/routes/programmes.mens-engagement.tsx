import { createFileRoute } from "@tanstack/react-router";
import { Handshake } from "lucide-react";
import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import img from "@/assets/mens-forum.jpg";

export const Route = createFileRoute("/programmes/mens-engagement")({
  head: () => ({ meta: [{ title: "Men's Engagement Forums — Callas Foundation" }, { name: "description", content: "Forums on accountability, fatherhood and equitable household decision-making." }] }),
  component: () => (
    <ProgrammeDetail
      icon={Handshake}
      tag="Men's Engagement Forums"
      title="The men who change households change wards. The wards change generations."
      lead="A network of forty-two community forums where men examine power, fatherhood and shared decision-making — facilitated by men, for men."
      image={img}
      imageAlt="Men sitting in a community forum circle"
      overview={[
        "Forums are hosted in community halls, workplaces and faith centres, meeting fortnightly across forty-two sites. Each forum is led by two trained male facilitators and an invited specialist on rotation.",
        "The conversation curriculum is published openly: power & privilege, household economics, parenting without violence, healthy masculinity, and the law as it concerns men. No session lectures; every session is a structured dialogue.",
        "Forums are paired with quarterly Couples Conversations evenings where partners are invited to attend together and apply tools to their household decision-making.",
      ]}
      workflow={[
        { title: "Site invitation",        body: "Local champion identifies a venue and recruits the initial cohort of 12–20 men." },
        { title: "Facilitator pairing",    body: "Two trained male facilitators are assigned and inducted to the site." },
        { title: "Fortnightly dialogues",  body: "90-minute structured conversation using the published curriculum." },
        { title: "Couples Conversation",   body: "Quarterly joint evenings to translate dialogue into household practice." },
      ]}
      metrics={[
        { value: "42",   label: "Active forums across the metro" },
        { value: "780",  label: "Men participating monthly" },
        { value: "68",   label: "Trained male facilitators" },
        { value: "11",   label: "Couples Conversations in 2024" },
      ]}
      locations={[
        { ward: "Mufakose Community Centre", cadence: "Alt. Wednesdays, 18:30", lead: "Mr. C. Mlauzi" },
        { ward: "Workington Industrial Site", cadence: "Alt. Tuesdays, 17:00",   lead: "Mr. K. Tatenda" },
        { ward: "St. Peter's Mbare Hall",     cadence: "Alt. Fridays, 18:00",    lead: "Mr. R. Sibanda" },
        { ward: "Glen View Ecumenical Centre",cadence: "Alt. Saturdays, 09:00",  lead: "Pastor B. Madzima" },
      ]}
      outcomes={[
        "Men report increased capacity to discuss household decisions without escalation.",
        "Partners attending Couples Conversations report measurable shifts in shared decision-making.",
        "Forums become a peer-accountability network that flags risk early to caseworkers.",
        "Curriculum is translated into Shona and Ndebele and available for partner organisations.",
      ]}
      partners={["Padare/Enkundleni Men's Forum", "Sonke Gender Justice", "MenEngage Africa Alliance"]}
    />
  ),
});
