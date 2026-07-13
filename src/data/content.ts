import gallery1 from "@/assets/images/gallery/gallery-1.jpeg";
import gallery2 from "@/assets/images/gallery/gallery-2.jpeg";
import gallery3 from "@/assets/images/gallery/gallery-3.jpeg";
import gallery4 from "@/assets/images/gallery/gallery-4.jpeg";
import gallery5 from "@/assets/images/gallery/gallery-5.jpg";
import gallery6 from "@/assets/images/gallery/gallery-6.jpg";

export const uploadedPhotos = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

export type NewsItem = {
  slug: string; title: string; excerpt: string; body: string;
  category: string; date: string; author: string; image: string;
};

const img = (q: string) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1600&q=80`;

export const news: NewsItem[] = [
  { slug: "240-responders-milestone", title: "Callas Trains 240th GBV First Responder", excerpt: "A five-day intensive in Bridgetown pushed our trained responder network past the 240 mark, extending reach into Manenberg and Hanover Park.", body: "This month our five-day First Responder curriculum welcomed its 240th graduate — a milestone that means every one of our nine partner suburbs now has trained community members ready to answer a call at any hour. Graduates receive legal literacy modules on the Sexual Offences Bill alongside trauma-informed first-contact drills.", category: "Training", date: "2026-06-18", author: "Callas Team", image: img("photo-1521737604893-d14cc237f11d") },
  { slug: "kitchen-500-daily", title: "Community Kitchen Crosses 500 Meals a Day", excerpt: "A new donor pipeline has helped the Bridgetown kitchen serve consistently above the 500-meal mark six days a week.", body: "Our Community Kitchen crossed the 500 meals a day milestone this quarter, up from 380 last year. The growth is powered by a new fresh-produce partnership and by an expanded volunteer roster of 42 regulars.", category: "Community Kitchen", date: "2026-05-30", author: "Kitchen Coordinator", image: img("photo-1547573854-74d2a71d0826") },
  { slug: "bbb-graduation", title: "BBB Boys Programme Celebrates 60 Graduates", excerpt: "Sixty young men from four Cape Flats schools completed the year-long Building, Bonding, Beyond curriculum.", body: "Sixty boys aged 9 to 16 walked onto our stage this weekend to receive their Building, Bonding, Beyond certificates. Parents, teachers and mentors packed the community hall for a celebration that felt like a family reunion.", category: "BBB Programme", date: "2026-04-22", author: "Programme Lead", image: img("photo-1503676260728-1c00da094a0b") },
  { slug: "menengage-dialogue", title: "MenEngage Dialogue with SAPS Athlone", excerpt: "Callas hosted a joint community dialogue with SAPS to unpack response gaps in domestic violence cases.", body: "Callas hosted a joint community dialogue with SAPS Athlone this week. Officers, survivors and community leaders sat together to unpack response gaps in domestic violence cases — with commitments made on both sides.", category: "Advocacy", date: "2026-03-14", author: "Caroline Peters", image: img("photo-1552664730-d307ca884978") },
  { slug: "human-rights-club-launch", title: "Two New Human Rights Clubs Launch in Athlone", excerpt: "Partner primary schools in Athlone welcomed the eleventh and twelfth Human Rights Clubs in the Callas network.", body: "The Callas Human Rights Clubs network now stands at twelve active clubs, with the newest two launching at partner primary schools in Athlone.", category: "Youth", date: "2026-02-02", author: "Callas Team", image: img("photo-1509062522246-3755977927d7") },
  { slug: "annual-report-2025", title: "Callas Foundation 2025 Annual Report", excerpt: "Read our full 2025 report: 1,240 cases supported, 155,000 meals served, and 240 responders trained.", body: "Our 2025 report is out. Highlights: 1,240 cases supported end-to-end, 155,000 meals served through the kitchen, and 240 community responders trained through our five-day intensives.", category: "Governance", date: "2026-01-16", author: "Board of Callas", image: img("photo-1450101499163-c8848c66ca85") },
];

export type EventItem = {
  slug: string; title: string; date: string; time: string; location: string;
  category: string; image: string; excerpt: string; body: string; past?: boolean;
};

export const events: EventItem[] = [
  { slug: "responder-training-july", title: "First Responder Training — July Intake", date: "2026-07-14", time: "08:30 – 16:30", location: "Callas Hub, 32 Kiewiet Road, Bridgetown", category: "Training", image: img("photo-1552664730-d307ca884978"), excerpt: "Five-day intensive for community members ready to be first on the scene.", body: "Our next five-day First Responder intensive runs 14 to 18 July. Nominations open through partner CPFs and neighbourhood watches. Places are limited to 25 participants." },
  { slug: "womens-healing-retreat", title: "Women's Healing Retreat", date: "2026-08-02", time: "09:00 – 15:00", location: "Kirstenbosch Botanical Gardens", category: "Healing", image: img("photo-1490645935967-10de6ba17061"), excerpt: "A one-day trauma-informed retreat for survivors currently in our care.", body: "A gentle day of movement, journaling and shared meals for women currently walking through our psychosocial support programme. Transport is provided from the Callas Hub." },
  { slug: "fathers-forum-quarterly", title: "Fathers' Forum — Quarterly Gathering", date: "2026-08-16", time: "10:00 – 13:00", location: "Bridgetown Community Hall", category: "Men's Engagement", image: img("photo-1511949860663-92c5c57d48a7"), excerpt: "An open forum for fathers on the Cape Flats to gather and speak honestly.", body: "The Fathers' Forum meets each quarter — a facilitated space for men to speak honestly about the pressures and choices of fatherhood." },
  { slug: "human-rights-showcase-2026", title: "Human Rights Clubs Term Showcase", date: "2026-06-04", time: "14:00 – 17:00", location: "Athlone Civic Centre", category: "Youth", image: img("photo-1509062522246-3755977927d7"), excerpt: "Learners from twelve schools present their term projects.", body: "Term-end showcase — learners from all twelve partner clubs presented their projects to parents and community leaders.", past: true },
  { slug: "annual-fundraising-dinner-2025", title: "Annual Fundraising Dinner 2025", date: "2025-11-22", time: "18:30", location: "The River Club, Observatory", category: "Fundraising", image: img("photo-1519671482749-fd09be7ccebf"), excerpt: "Our flagship annual dinner in support of the Community Kitchen.", body: "A wonderful evening of storytelling, food and community — thank you to every guest who filled our tables and helped keep the Kitchen running.", past: true },
];

export const team = [
  { name: "Caroline Peters", role: "Founder & Executive Director", bio: "African feminist and social justice advocate with three decades on the frontlines of the GBV response.", image: img("photo-1580489944761-15a19d654956") },
  { name: "Nadia Petersen", role: "Head of Programmes", bio: "Oversees the seven core programme pillars and community partnerships.", image: img("photo-1544005313-94ddf0286df2") },
  { name: "Thabo Mokoena", role: "Justice & Court Support Lead", bio: "Leads the court accompaniment team across Athlone and Wynberg magistrates' courts.", image: img("photo-1507003211169-0a1dd7228f2d") },
  { name: "Aisha Adams", role: "Kitchen Coordinator", bio: "Runs the daily rhythm of the 500+ meal Community Kitchen.", image: img("photo-1573497019940-1c28c88b4f3e") },
  { name: "Sipho Khumalo", role: "Men's Engagement Facilitator", bio: "Facilitates men's accountability circles and the Fathers' Forum.", image: img("photo-1552374196-1ab2a1c593e8") },
  { name: "Zanele Dlamini", role: "Youth & BBB Lead", bio: "Guides the Building, Bonding, Beyond programme for boys 9–16.", image: img("photo-1487412720507-e7ab37603c6f") },
];

export const partners = [
  "Department of Social Development",
  "Department of Health",
  "National Prosecuting Authority",
  "Legal Aid South Africa",
  "South African Police Service",
  "MenEngage South Africa",
  "Community Policing Forum — Athlone",
  "Bridgetown Neighbourhood Watch",
];

export const galleryImages = [...uploadedPhotos];

export const resources = [
  { title: "Safety Planning Worksheet", type: "PDF", description: "A step-by-step workbook to build a personal safety plan.", href: "#" },
  { title: "Your Rights Under the Domestic Violence Act", type: "PDF", description: "Plain-language summary of the DVA and how to apply for a protection order.", href: "#" },
  { title: "Cape Flats Referral Directory", type: "PDF", description: "Shelters, clinics, legal aid and crisis lines mapped by suburb.", href: "#" },
  { title: "Callas 2025 Annual Report", type: "PDF", description: "Full financials, outcomes and stories from 2025.", href: "#" },
  { title: "First Responder Curriculum Overview", type: "PDF", description: "What is covered across the five-day training week.", href: "#" },
  { title: "Parenting Non-Violent Boys — Guide", type: "PDF", description: "A short guide for caregivers of boys aged 9 to 16.", href: "#" },
];

export const impactMetrics = [
  { label: "Meals served daily", value: 500, suffix: "+" },
  { label: "First responders trained", value: 240, suffix: "+" },
  { label: "Cases supported", value: 1240, suffix: "" },
  { label: "Years of service", value: 30, suffix: "+" },
];