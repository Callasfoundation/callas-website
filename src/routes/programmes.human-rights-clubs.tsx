import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import img from "@/assets/youth-club.jpg";

export const Route = createFileRoute("/programmes/human-rights-clubs")({
  head: () => ({ meta: [{ title: "Human Rights Clubs — Callas Foundation" }, { name: "description", content: "Classroom curriculum on safe boundaries, leadership and child rights." }] }),
  component: () => (
    <ProgrammeDetail
      icon={GraduationCap}
      tag="Human Rights Clubs"
      title="Children who know their rights become adults who can protect them."
      lead="An after-school club operating in 26 schools, teaching learners aged 10–18 a working knowledge of their rights, safe boundaries and youth-led civic leadership."
      image={img}
      imageAlt="Students raising hands in human rights club discussion"
      overview={[
        "Each club meets once a week for 75 minutes and is run by two trained peer facilitators supervised by a teacher patron. The annual curriculum is co-designed with members at the start of each school year.",
        "Modules cover bodily autonomy, consent, digital safety, freedom of expression, and the basics of the Zimbabwean Constitution and the African Charter on the Rights and Welfare of the Child.",
        "Clubs end each term with a public showcase — a debate, theatre piece or community campaign — performed for parents and the local councillor.",
      ]}
      workflow={[
        { title: "School onboarding",         body: "Headmaster MOU, teacher patron training and parental briefing." },
        { title: "Peer facilitator selection",body: "Two Grade 10–11 learners per school complete a 24-hour training." },
        { title: "Weekly meetings",            body: "75-minute facilitated sessions across the academic year." },
        { title: "Termly civic showcase",     body: "Public-facing debate, drama or campaign at school close." },
      ]}
      metrics={[
        { value: "26",    label: "Active clubs across Harare Metro" },
        { value: "1,840", label: "Learners enrolled in 2024" },
        { value: "52",    label: "Trained peer facilitators" },
        { value: "78",    label: "Public showcases in the past two years" },
      ]}
      locations={[
        { ward: "Mufakose 2 Primary",        cadence: "Wednesdays, 14:30",  lead: "Mrs. R. Mavhura" },
        { ward: "Glen Norah High",            cadence: "Thursdays, 15:00",   lead: "Mr. T. Kunaka" },
        { ward: "St. Mary's Chitungwiza",     cadence: "Fridays, 14:00",     lead: "Ms. L. Mhembere" },
        { ward: "Highfields 1 Primary",       cadence: "Tuesdays, 14:30",    lead: "Mrs. P. Chinoda" },
      ]}
      outcomes={[
        "Learners can articulate their rights and demonstrate basic conflict-resolution skills.",
        "Teachers report increased participation by girls in class discussions and leadership.",
        "Termly public showcases shift community conversation toward youth voice and rights.",
        "Club alumni are over-represented in school prefect and Junior Council roles.",
      ]}
      partners={["Ministry of Primary & Secondary Education", "Save the Children Zimbabwe", "Junior Parliament of Zimbabwe"]}
    />
  ),
});
