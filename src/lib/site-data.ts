import justiceImg from "@/assets/programme-justice.jpg";
import counsellingImg from "@/assets/programme-counselling.jpg";
import respondersImg from "@/assets/programme-responders.jpg";
import bbbImg from "@/assets/programme-bbb.jpg";
import kitchenImg from "@/assets/programme-kitchen.jpg";
import rightsImg from "@/assets/programme-rights.jpg";
import menImg from "@/assets/programme-men.jpg";

export const SITE = {
  name: "Callas Foundation",
  tagline: "Helping In Our Way",
  phone: "+27 72 539 5113",
  phoneRaw: "+27725395113",
  whatsapp: "+27725395113",
  email: "info@callasfoundation.org.za",
  address: "Cape Flats, Cape Town, Western Cape, South Africa",
  npo: "NPO 234-891",
  pbo: "PBO 930071122",
  socials: {
    facebook: "https://facebook.com/callasfoundation",
    instagram: "https://instagram.com/callasfoundation",
    linkedin: "https://linkedin.com/company/callasfoundation",
    youtube: "https://youtube.com/@callasfoundation",
  },
};

export const PROGRAMMES = [
  {
    slug: "access-to-justice",
    name: "Access to Justice",
    short: "Protection orders, court accompaniment, and legal navigation for survivors of GBV.",
    image: justiceImg,
    accent: "red" as const,
    icon: "Scale",
  },
  {
    slug: "psychosocial-support",
    name: "Psychosocial Support",
    short: "Trauma counselling, safety planning, and peer-led healing spaces.",
    image: counsellingImg,
    accent: "blue" as const,
    icon: "HeartHandshake",
  },
  {
    slug: "gbv-first-responders",
    name: "GBV First Responders Training",
    short: "Neighbourhood watch cells trained in safe routing and early trauma response.",
    image: respondersImg,
    accent: "ink" as const,
    icon: "ShieldCheck",
  },
  {
    slug: "bbb-boys",
    name: "BBB Boys Programme",
    short: "Mentorship, accountability, and conflict-resolution for boys aged 10–18.",
    image: bbbImg,
    accent: "red" as const,
    icon: "Users",
  },
  {
    slug: "community-kitchen",
    name: "Community Kitchen",
    short: "750 hot meals daily from donor ingredients to families across the Cape Flats.",
    image: kitchenImg,
    accent: "blue" as const,
    icon: "Soup",
  },
  {
    slug: "human-rights-clubs",
    name: "Human Rights Clubs",
    short: "School-based curriculum building safe boundaries and youth leadership.",
    image: rightsImg,
    accent: "ink" as const,
    icon: "BookOpen",
  },
  {
    slug: "mens-engagement",
    name: "Men’s Engagement Forums",
    short: "Generational dialogues holding men accountable in family and community life.",
    image: menImg,
    accent: "red" as const,
    icon: "MessageCircle",
  },
];

export const DONATION_TIERS = [
  { amount: 100, label: "R100", impact: "Provides 10 hot meals for a family in crisis." },
  { amount: 500, label: "R500", impact: "Funds a counselling session for a survivor of GBV." },
  { amount: 1000, label: "R1,000", impact: "Trains one community GBV first responder for a week." },
  { amount: 5000, label: "R5,000", impact: "Sponsors a full month of BBB Boys mentorship workshops." },
];

export const FAQ = [
  {
    q: "I need help right now. What do I do?",
    a: "If you are in immediate danger, call SAPS 10111 or the GBV Command Centre 0800 428 428. Then visit our Get Help page or message us on WhatsApp — a Callas advocate will respond personally.",
  },
  {
    q: "How can I get a protection order?",
    a: "Our Access to Justice team helps you draft, file, and serve a protection order, and accompanies you to court. Visit our Get Help page or chat to us on WhatsApp to start.",
  },
  {
    q: "Where do you operate?",
    a: "Callas Foundation serves communities across the Cape Flats, with active programmes in Mitchells Plain, Manenberg, Hanover Park, Khayelitsha, and surrounding areas.",
  },
  {
    q: "How can I donate?",
    a: "You can donate online via our Donate page, do an EFT (banking details on the Support Our Work page), or sponsor a specific programme. All donations qualify for Section 18A tax certificates.",
  },
  {
    q: "How can I volunteer?",
    a: "Visit our Volunteer page — we onboard fieldwork volunteers, kitchen logistics support, and skills-based professionals (legal, counselling, finance).",
  },
  {
    q: "Are you a registered non-profit?",
    a: "Yes. Callas Foundation is a registered NPO and PBO. Registration numbers and annual reports are published on our Governance page.",
  },
];
