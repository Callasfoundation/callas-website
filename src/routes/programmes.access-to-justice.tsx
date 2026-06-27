import { createFileRoute } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { ProgrammeDetail } from "@/components/ProgrammeDetail";
import img from "@/assets/justice.jpg";

export const Route = createFileRoute("/programmes/access-to-justice")({
  head: () => ({ meta: [{ title: "Access to Justice — Callas Foundation" }, { name: "description", content: "Free legal aid, protection-order drafting and court accompaniment for survivors of GBV." }] }),
  component: () => (
    <ProgrammeDetail
      icon={Scale}
      tag="Access to Justice"
      title="From the police desk to the magistrate's bench, you don't walk alone."
      lead="Our legal team takes survivors through every door of the justice system — drafting protection orders, accompanying complainants, and tracking matters through to judgment."
      image={img}
      imageAlt="Pro-bono lawyer consulting with a client"
      overview={[
        "Every intake begins with a confidential 45-minute consultation with a trained paralegal. Within 24 hours, urgent cases are assigned a pro-bono attorney from our roster of 38 advocates registered with the Law Society of Zimbabwe.",
        "We specialise in protection orders, maintenance, custody disputes and criminal complaints related to GBV. Where matters fall outside our scope we co-refer to vetted partners and stay in the case file until resolution.",
        "Court accompaniment is provided by trained witnesses who have completed our trauma-informed advocacy curriculum — survivors are never asked to face a courtroom alone.",
      ]}
      workflow={[
        { title: "Confidential intake",        body: "45-minute paralegal session at any of our four district offices or via the encrypted hotline." },
        { title: "Case routing",                body: "Triage within 24 hours: emergency protection order, criminal complaint, civil maintenance or referral." },
        { title: "Pro-bono assignment",         body: "Matched to an attorney by specialism, language and survivor preference within 48 hours." },
        { title: "Accompaniment & follow-up",   body: "Court companions attend every appearance; case status reviewed at 30, 90 and 180 days." },
      ]}
      metrics={[
        { value: "1,420", label: "Cases opened in 2024" },
        { value: "87%",   label: "Protection orders granted on first hearing" },
        { value: "38",    label: "Pro-bono advocates on the roster" },
        { value: "11 days", label: "Median time from intake to first hearing" },
      ]}
      locations={[
        { ward: "Mufakose Magistrates' Court",  cadence: "Daily duty desk, 08:00–16:00", lead: "Adv. T. Moyo" },
        { ward: "Harare Civil Court",           cadence: "Tue & Thu accompaniment",       lead: "Ms. C. Hove" },
        { ward: "Chitungwiza District",         cadence: "Mon, Wed, Fri intake",          lead: "Mr. K. Banda" },
        { ward: "Mbare Police VFU desk",        cadence: "24/7 on-call rota",             lead: "Ms. P. Dube" },
      ]}
      outcomes={[
        "Every survivor leaves the first consultation with a written case plan and a named contact.",
        "Protection-order applications drafted, lodged and tracked through to service on the respondent.",
        "Active follow-up at 30 / 90 / 180 days to detect retaliation or non-compliance with court orders.",
        "Quarterly published statistics on conviction rates, withdrawal patterns and case timelines.",
      ]}
      partners={["Law Society of Zimbabwe", "Zimbabwe Women Lawyers Association", "Legal Resources Foundation", "Victim Friendly Unit — ZRP"]}
    />
  ),
});
