import type { LucideIcon } from "lucide-react";
import { Scale, HeartHandshake, ShieldAlert, Users, UtensilsCrossed, GraduationCap, UserCheck } from "lucide-react";
import accessToJustice from "@/assets/images/programs/access-to-justice.png";
import psychosocialSupport from "@/assets/images/programs/psychosocial-support.jpeg";
import gbvFirstResponders from "@/assets/images/programs/gbv-first-responders.jpeg";
import bbbBoys from "@/assets/images/programs/bbb-boys.jpeg";
import communityKitchen from "@/assets/images/programs/community-kitchen.jpg";
import humanRightsClubs from "@/assets/images/programs/human-rights-clubs.jpeg";
import mensEngagement from "@/assets/images/programs/mens-engagement.jpg";
export type Programme = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  color: "blue" | "red" | "ink";
  image: string;
  intro: string;
  highlights: string[];
  steps: { title: string; body: string }[];
  stats: { label: string; value: string }[];
};


export const programmes: Programme[] = [
  {
    slug: "access-to-justice",
    title: "Access to Justice",
    short: "Court accompaniment, protection orders and legal literacy for survivors.",
    icon: Scale,
    color: "blue",
    image: accessToJustice,
    intro:
      "Navigating the criminal justice system is often the second trauma survivors face. Our advocates walk beside them from the first police statement through to sentencing.",
    highlights: [
      "Court accompaniment for domestic violence and sexual offences matters",
      "Assistance drafting protection orders at Athlone and Wynberg magistrates' courts",
      "Referrals to Legal Aid SA and the National Prosecuting Authority",
      "Plain-language explanations of the Domestic Violence Act and Sexual Offences Bill",
    ],
    steps: [
      { title: "Intake & safety screen", body: "A trained advocate meets the survivor at our Bridgetown office or at a safe neutral location." },
      { title: "Case routing", body: "We coordinate with SAPS, the investigating officer and the assigned prosecutor." },
      { title: "Protection order drafting", body: "Advocates help draft the affidavit and prepare supporting evidence." },
      { title: "Court accompaniment", body: "Physical, emotional and logistical support on every appearance." },
    ],
    stats: [
      { label: "Cases supported", value: "1,240+" },
      { label: "Protection orders drafted", value: "310" },
      { label: "Court dates attended", value: "820" },
    ],
  },
  {
    slug: "psychosocial-support",
    title: "Psychosocial Support",
    short: "Trauma-informed counselling, safety planning and peer healing circles.",
    icon: HeartHandshake,
    color: "red",
    image: psychosocialSupport,
    intro:
      "Healing is not linear. Our trauma-informed practitioners hold space for survivors and their families through structured counselling and peer-led circles.",
    highlights: [
      "One-on-one trauma counselling with qualified practitioners",
      "Weekly women's healing circles at the Bridgetown hub",
      "Individual safety planning and resource mapping",
      "Referrals to shelters, clinics and specialised care",
    ],
    steps: [
      { title: "Assessment", body: "A confidential intake identifies immediate risks and clinical needs." },
      { title: "Safety framework", body: "A written plan covers housing, children, finances and lethality markers." },
      { title: "Ongoing sessions", body: "Weekly or fortnightly sessions, individual or group." },
      { title: "Step-down support", body: "Peer mentorship keeps survivors connected long after formal sessions end." },
    ],
    stats: [
      { label: "Counselling hours / year", value: "2,600" },
      { label: "Active healing circles", value: "6" },
      { label: "Survivors in care", value: "480" },
    ],
  },
  {
    slug: "gbv-first-responders",
    title: "GBV First Responders Training",
    short: "Five-day intensive training for neighbourhood watches and community leaders.",
    icon: ShieldAlert,
    color: "blue",
    image: gbvFirstResponders,
    intro:
      "When something happens on a Cape Flats street corner, the first person on the scene is rarely a professional. We equip community members to respond safely and correctly.",
    highlights: [
      "Five-day accredited curriculum",
      "Legal literacy focused on the Sexual Offences Bill",
      "Trauma-informed first-contact protocols",
      "Safe routing and referral pathways",
    ],
    steps: [
      { title: "Recruit through partners", body: "Nominations come from CPFs, neighbourhood watches and faith groups." },
      { title: "Five-day intensive", body: "Blend of classroom, role-play and shadowing at the Callas office." },
      { title: "Field deployment", body: "Responders are placed in monitoring cells across four suburbs." },
      { title: "Quarterly refreshers", body: "Case reviews and legislative updates every quarter." },
    ],
    stats: [
      { label: "Responders trained", value: "240+" },
      { label: "Suburbs covered", value: "9" },
      { label: "Monitoring cells active", value: "18" },
    ],
  },
  {
    slug: "bbb-boys-programme",
    title: "BBB Boys Programme",
    short: "Building, Bonding, Beyond — mentorship for boys aged 9 to 16.",
    icon: Users,
    color: "ink",
    image: bbbBoys,
    intro:
      "Building, Bonding, Beyond equips boys with the language and skills to resist gang culture, substance abuse and toxic masculinity — long before they harden into adulthood.",
    highlights: [
      "Weekly mentorship sessions in Bridgetown and Manenberg",
      "Non-violent conflict resolution modules",
      "Sport, art and music as accountability anchors",
      "Parent and caregiver check-ins",
    ],
    steps: [
      { title: "School partnerships", body: "We enrol boys through partner primary and high schools." },
      { title: "Weekly circles", body: "Structured curriculum: identity, emotions, relationships, choices." },
      { title: "Community projects", body: "Groups design and lead a local service project each term." },
      { title: "Progression tracking", body: "Attendance, behaviour and academic markers reviewed each quarter." },
    ],
    stats: [
      { label: "Boys enrolled", value: "180" },
      { label: "Partner schools", value: "7" },
      { label: "Retention rate", value: "92%" },
    ],
  },
  {
    slug: "community-kitchen",
    title: "Community Kitchen",
    short: "Over 500 hot, wholesome meals served daily — and a doorway to safety.",
    icon: UtensilsCrossed,
    color: "red",
    image: communityKitchen,
    intro:
      "Hunger and violence share a doorstep. The Callas Community Kitchen serves more than 500 dignified meals every day — and doubles as a soft entry point for survivors and vulnerable families to reach every other Callas service.",
    highlights: [
      "500+ meals served daily, six days a week",
      "Fresh donor-supplied produce prepared on site",
      "Meal support integrated with counselling intake",
      "Volunteer chefs, plated service, no queues",
    ],
    steps: [
      { title: "Morning intake", body: "Donor produce arrives and is sorted by our kitchen team." },
      { title: "Menu planning", body: "A rotating menu balances protein, starch and fresh vegetables." },
      { title: "Service", body: "Meals are plated and served in the community hall from 11:30." },
      { title: "Onward care", body: "Guests can meet with an advocate or counsellor on the same visit." },
    ],
    stats: [
      { label: "Meals / day", value: "500+" },
      { label: "Meals / year", value: "155,000" },
      { label: "Volunteer hours / month", value: "640" },
    ],
  },
  {
    slug: "human-rights-clubs",
    title: "Human Rights Clubs",
    short: "In-school clubs teaching learners to name, claim and defend their rights.",
    icon: GraduationCap,
    color: "blue",
    image: humanRightsClubs,
    intro:
      "Human Rights Clubs are peer-led spaces inside partner schools where learners — especially girls — learn to recognise and challenge bullying, coercion and gender-based discrimination.",
    highlights: [
      "Weekly 45-minute sessions during school time",
      "Peer leadership development",
      "Simple, age-appropriate rights curriculum",
      "Termly community showcase",
    ],
    steps: [
      { title: "School onboarding", body: "We partner with the SGB and identify a staff champion." },
      { title: "Learner recruitment", body: "Open call to Grades 5–11, capped at 25 learners per club." },
      { title: "Curriculum delivery", body: "Six modules covering rights, boundaries and leadership." },
      { title: "Showcase", body: "Clubs present a project to parents and community each term." },
    ],
    stats: [
      { label: "Active clubs", value: "12" },
      { label: "Learners reached", value: "620" },
      { label: "Peer leaders trained", value: "84" },
    ],
  },
  {
    slug: "mens-engagement",
    title: "Men's Engagement Forums",
    short: "Accountability circles that recruit men as allies against violence.",
    icon: UserCheck,
    color: "ink",
    image: mensEngagement,
    intro:
      "Under the leadership of MenEngage South Africa, our men's forums confront patriarchal norms head-on and rebuild what accountable, non-violent manhood looks like on the Cape Flats.",
    highlights: [
      "Fortnightly men's accountability circles",
      "Fatherhood and family-equity modules",
      "Community dialogues with SAPS and local leaders",
      "Alumni network of trained facilitators",
    ],
    steps: [
      { title: "Invitation", body: "Men are invited via workplaces, churches and community networks." },
      { title: "Circle work", body: "Facilitated conversations on identity, power and violence." },
      { title: "Home practice", body: "Weekly commitments tracked with a peer partner." },
      { title: "Facilitator training", body: "Graduates can train to run their own circles." },
    ],
    stats: [
      { label: "Active circles", value: "8" },
      { label: "Men engaged", value: "310" },
      { label: "Trained facilitators", value: "42" },
    ],
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);