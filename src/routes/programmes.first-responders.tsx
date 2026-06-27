import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import img from "@/assets/training.jpg";

export const Route = createFileRoute("/programmes/first-responders")({
  head: () => ({ meta: [{ title: "GBV First Responders Training — Callas Foundation" }, { name: "description", content: "Equipping neighbourhood monitoring cells, safe routing protocols and early trauma detection." }] }),
  component: () => (
    <ProgrammeDetail
      icon={ShieldCheck}
      tag="First Responders Training"
      title="The first hour saves the next ten years. We train the hands that hold it."
      lead="A 40-hour certified curriculum that prepares neighbourhood monitors, teachers, healthcare workers and faith leaders to respond to disclosures safely and route survivors to care."
      image={img}
      imageAlt="First responders training session in progress"
      overview={[
        "Designed in partnership with the Victim Friendly Unit of the Zimbabwe Republic Police, the curriculum covers psychological first aid, evidence preservation, safe-routing protocols and the legal duty-of-care framework.",
        "Cohorts of 25 participants meet over five Saturdays at neighbourhood community halls. Certification is jointly endorsed by Callas Foundation and the Ministry of Women Affairs.",
        "Every certified responder joins a regional WhatsApp safety net and receives quarterly refresher modules and a printed field handbook.",
      ]}
      workflow={[
        { title: "Cohort recruitment",   body: "Nominations sourced from councillors, school heads and faith leaders." },
        { title: "5-Saturday curriculum",body: "40 hours across psychological first aid, law, evidence and self-care." },
        { title: "Practical assessment", body: "Live role-play and case-study evaluation by trauma clinicians." },
        { title: "Field deployment",     body: "Joins ward monitoring cell with quarterly refreshers and supervision." },
      ]}
      metrics={[
        { value: "1,360", label: "Responders certified to date" },
        { value: "47",    label: "Active neighbourhood monitoring cells" },
        { value: "94%",   label: "Pass rate on practical assessment" },
        { value: "9",     label: "Wards covered across Harare Metro" },
      ]}
      locations={[
        { ward: "Mufakose Community Hall",   cadence: "Spring & autumn cohorts",   lead: "Insp. (Rtd) M. Chari" },
        { ward: "Glen Norah Polyclinic",     cadence: "Healthcare-worker stream",  lead: "Sr. P. Mlambo" },
        { ward: "Highfields Schools Cluster",cadence: "Teachers' cohort, August", lead: "Mr. F. Kapfunde" },
        { ward: "Ecumenical Faith Network",  cadence: "Faith leaders, quarterly",  lead: "Rev. T. Madziva" },
      ]}
      outcomes={[
        "Survivors disclose to a trained ear and reach competent care within four hours of disclosure.",
        "Evidence is preserved correctly, increasing successful prosecution rates.",
        "Responders themselves are supported through monthly debriefing to prevent burnout.",
        "Ward-level data on incidents and routing times is shared quarterly with the Ministry.",
      ]}
      partners={["Victim Friendly Unit — ZRP", "Ministry of Women Affairs", "UN Women Zimbabwe", "Padare/Enkundleni"]}
    />
  ),
});
