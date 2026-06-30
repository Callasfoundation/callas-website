import { useEffect, useState } from "react";

export type ImpactStat = { label: string; value: number; suffix?: string };
export type NewsItem = { id: string; title: string; excerpt: string; body: string; date: string; category: string };
export type EventItem = { id: string; title: string; date: string; time: string; location: string; description: string };
export type ResourceItem = { id: string; title: string; type: string; description: string; url: string };

const KEYS = {
  impact: "callas.impact.v1",
  news: "callas.news.v1",
  events: "callas.events.v1",
  resources: "callas.resources.v1",
  admin: "callas.admin.v1",
};

export const SEED = {
  impact: [
    { label: "Hot meals served daily", value: 750, suffix: "+" },
    { label: "Survivors supported annually", value: 1240, suffix: "" },
    { label: "GBV First Responders trained", value: 86, suffix: "" },
    { label: "BBB Boys Programme participants", value: 312, suffix: "" },
    { label: "Cape Flats communities served", value: 14, suffix: "" },
  ] as ImpactStat[],
  news: [
    {
      id: "n1",
      title: "Callas Court Support Team Wins 24 Protection Orders in March",
      excerpt: "Our Access to Justice paralegals stood with 24 women through the Mitchells Plain Magistrates Court, securing every order applied for.",
      body: "Through March 2026 our court support team accompanied 24 women through every stage of the protection order process — from drafting the J88 affidavit, to filing at Mitchells Plain Magistrates Court, to serving notice through SAPS. All 24 orders were granted. Read more about how we walk with survivors through the justice system.",
      date: "2026-04-02",
      category: "Access to Justice",
    },
    {
      id: "n2",
      title: "BBB Boys Graduates Lead Manenberg Anti-Violence March",
      excerpt: "Twelve graduates of our 2025 BBB cohort organised and led a community march of 400 residents against gender-based violence.",
      body: "On 28 March, twelve graduates from our 2025 Building Better Boys cohort — now aged 16 to 18 — organised a 400-person community walk through Manenberg, calling for safer streets and respect for women and girls. This is what generational change looks like.",
      date: "2026-03-29",
      category: "BBB Boys",
    },
    {
      id: "n3",
      title: "Community Kitchen Crosses 250,000 Meals Served in 2025",
      excerpt: "Our Hanover Park kitchen passed a quarter-million meals served this year — a 38% increase on 2024.",
      body: "Thanks to donor partnerships with Pick n Pay, FoodForward SA, and local farmers, our community kitchen passed 250,000 meals served in 2025. Every meal is hot, dignified, and served by neighbours, for neighbours.",
      date: "2026-02-14",
      category: "Community Kitchen",
    },
  ] as NewsItem[],
  events: [
    {
      id: "e1",
      title: "GBV First Responders Open Training Day",
      date: "2026-07-19",
      time: "09:00 – 14:00",
      location: "Callas Community Hall, Mitchells Plain",
      description: "Free open training for community members who want to become certified GBV first responders. Lunch provided. Registration required.",
    },
    {
      id: "e2",
      title: "Men’s Engagement Forum — Fatherhood & Accountability",
      date: "2026-07-26",
      time: "18:00 – 20:00",
      location: "Hanover Park Civic Centre",
      description: "Monthly facilitated dialogue for men on accountability, fatherhood, and breaking generational violence. All men welcome.",
    },
    {
      id: "e3",
      title: "16 Days of Activism Launch Event",
      date: "2026-11-25",
      time: "10:00 – 13:00",
      location: "Athlone Stadium",
      description: "Our annual launch of the 16 Days of Activism Against GBV campaign — speeches, survivor testimonies, and a community march.",
    },
    {
      id: "e4",
      title: "Annual Donor & Partner Breakfast",
      date: "2026-08-15",
      time: "08:00 – 10:30",
      location: "The Westin, Cape Town",
      description: "Join the Callas leadership team for our annual partner breakfast — hear from survivors, see the year’s impact data, and meet our 2026 cohort.",
    },
  ] as EventItem[],
  resources: [
    { id: "r1", title: "Protection Order — Step-by-Step Guide", type: "PDF Guide", description: "Plain-language walkthrough of applying for a protection order in South Africa.", url: "#" },
    { id: "r2", title: "Safety Planning Workbook", type: "PDF Workbook", description: "A confidential workbook to plan your safety if you are in an abusive relationship.", url: "#" },
    { id: "r3", title: "Where to Get Help — Cape Flats Directory", type: "Directory", description: "Trusted shelters, clinics, SAPS GBV desks, and partner NGOs across the Cape Flats.", url: "#" },
    { id: "r4", title: "Callas 2025 Annual Report", type: "PDF Report", description: "Full programme outcomes, financials, and audited statements for 2025.", url: "#" },
  ] as ResourceItem[],
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("callas:store", { detail: { key } }));
}

function useStored<T>(key: string, seed: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(seed);
  useEffect(() => {
    setValue(read(key, seed));
    const onStore = (e: Event) => {
      const ce = e as CustomEvent<{ key: string }>;
      if (ce.detail?.key === key) setValue(read(key, seed));
    };
    window.addEventListener("callas:store", onStore);
    window.addEventListener("storage", () => setValue(read(key, seed)));
    return () => window.removeEventListener("callas:store", onStore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  const update = (v: T) => { write(key, v); setValue(v); };
  return [value, update];
}

export const useImpact = () => useStored<ImpactStat[]>(KEYS.impact, SEED.impact);
export const useNews = () => useStored<NewsItem[]>(KEYS.news, SEED.news);
export const useEvents = () => useStored<EventItem[]>(KEYS.events, SEED.events);
export const useResources = () => useStored<ResourceItem[]>(KEYS.resources, SEED.resources);

