import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import img from "@/assets/boys-program.jpg";

export const Route = createFileRoute("/programmes/bbb-boys")({
  head: () => ({ meta: [{ title: "BBB Boys Programme — Callas Foundation" }, { name: "description", content: "Behavioural mentorship, accountability and conflict-resolution workshops for boys aged 11–17." }] }),
  component: () => (
    <ProgrammeDetail
      icon={Users}
      tag="BBB Boys Programme"
      title="Becoming Better Brothers: the change has to start before it has to be undone."
      lead="A school-based mentorship programme for boys aged 11–17 that builds emotional literacy, accountability and peer conflict-resolution skills."
      image={img}
      imageAlt="Mentor speaking with a circle of boys"
      overview={[
        "Each cohort runs for one academic year in partnership with a host school. Sessions are weekly, 90 minutes long, and led by a male facilitator with a co-facilitator drawn from older alumni boys.",
        "The curriculum is structured around six modules: self-awareness, masculinity & culture, consent & respect, conflict resolution, fatherhood futures, and civic leadership.",
        "Boys who complete the year are eligible to join the alumni council, which co-designs the next year's curriculum and runs peer-led conflict circles inside the school.",
      ]}
      workflow={[
        { title: "School onboarding",     body: "Headmaster MOU, parental consent and baseline conflict-incident audit." },
        { title: "Weekly cohort sessions", body: "90-minute facilitated sessions through the academic year." },
        { title: "Accountability metrics",body: "Termly peer & teacher feedback against a six-domain rubric." },
        { title: "Alumni leadership",     body: "Graduates run peer circles and mentor the next cohort." },
      ]}
      metrics={[
        { value: "14",   label: "Partner schools across Harare" },
        { value: "612",  label: "Boys currently enrolled" },
        { value: "−41%", label: "Playground conflict incidents in pilot schools" },
        { value: "78",   label: "Alumni serving as peer mentors" },
      ]}
      locations={[
        { ward: "Mukai High School",         cadence: "Tuesdays, 14:30–16:00", lead: "Mr. T. Kazembe" },
        { ward: "St. Peter's Mbare",         cadence: "Wednesdays, 15:00–16:30", lead: "Mr. B. Ncube" },
        { ward: "Glen View 1 High",          cadence: "Thursdays, 14:30–16:00", lead: "Mr. R. Mutsvene" },
        { ward: "Kuwadzana Secondary",       cadence: "Fridays, 14:00–15:30", lead: "Mr. S. Mhofu" },
      ]}
      outcomes={[
        "Measurable reduction in school-recorded violent incidents in partner schools.",
        "Boys demonstrate vocabulary and frameworks for naming and de-escalating conflict.",
        "Alumni council provides ongoing peer leadership without facilitator presence.",
        "Parents receive a termly summary of their son's participation and reflections.",
      ]}
      partners={["Ministry of Primary & Secondary Education", "Padare/Enkundleni Men's Forum", "Plan International Zimbabwe"]}
    />
  ),
});
