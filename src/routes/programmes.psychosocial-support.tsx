import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse } from "lucide-react";
import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import img from "@/assets/counseling.jpg";

export const Route = createFileRoute("/programmes/psychosocial-support")({
  head: () => ({ meta: [{ title: "Psychosocial Support — Callas Foundation" }, { name: "description", content: "Trauma counselling, peer-led processing circles and clinical safety frameworks." }] }),
  component: () => (
    <ProgrammeDetail
      icon={HeartPulse}
      tag="Psychosocial Support"
      title="Safety begins inside. The room we hold is the first place that proves it."
      lead="A clinically supervised counselling pathway combined with survivor-led peer circles, available free of charge for twelve weeks and renewable on assessment."
      image={img}
      imageAlt="Counsellor and survivor in conversation"
      overview={[
        "Our psychosocial pathway is anchored by three registered clinical psychologists and a team of 22 trauma-trained counsellors. Each survivor is paired with a primary counsellor for the duration of their care.",
        "Sessions are delivered in-person at our community wellness rooms or by encrypted video for survivors who cannot safely travel. Children receive age-adapted play-therapy from specialist staff.",
        "Peer-led processing circles meet weekly in safe community venues. They are facilitated by graduate survivors of the programme who hold a 60-hour facilitation certificate.",
      ]}
      workflow={[
        { title: "Clinical screening",     body: "Initial PTSD, depression and risk screening using validated instruments within 48 hours of referral." },
        { title: "Counsellor matching",    body: "Paired by language, gender preference and clinical complexity." },
        { title: "12-week pathway",        body: "Weekly 50-minute sessions plus optional peer circle attendance." },
        { title: "Step-down & alumni",     body: "Quarterly check-ins for 12 months and lifetime access to alumni circles." },
      ]}
      metrics={[
        { value: "3,180", label: "Counselling hours delivered in 2024" },
        { value: "82%",   label: "Symptom-score reduction across pathway" },
        { value: "22",    label: "Trauma-trained counsellors" },
        { value: "11",    label: "Weekly peer circles across Harare" },
      ]}
      locations={[
        { ward: "Mufakose Wellness Room",       cadence: "Mon–Sat, 09:00–18:00", lead: "Dr. N. Chigwedere" },
        { ward: "Glen View Community Hall",     cadence: "Tue & Thu evenings",    lead: "Ms. R. Mhlanga" },
        { ward: "Kuwadzana Children's Space",   cadence: "Wed & Fri afternoons",  lead: "Ms. T. Nyathi" },
        { ward: "Encrypted Tele-Counselling",   cadence: "On-demand booking",     lead: "Mr. S. Gumbo" },
      ]}
      outcomes={[
        "Every survivor exits the pathway with a personal safety plan and crisis contact list.",
        "Children receive a separate developmental assessment and continuity-of-school plan.",
        "Clinical supervision held weekly to safeguard counsellors against secondary trauma.",
        "Outcomes reviewed at intake, week 6 and week 12 against standardised instruments.",
      ]}
      partners={["Zimbabwe Psychological Association", "Friendship Bench", "UNICEF Child Protection Cluster"]}
    />
  ),
});
