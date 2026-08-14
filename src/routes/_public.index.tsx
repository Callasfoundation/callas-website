import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Phone, ShieldAlert } from "lucide-react";

import { Reveal, Counter } from "@/components/motion";
import { api } from "@/lib/api";

import { impactMetrics } from "@/data/content";
import { site } from "@/data/site";

import banner from "@/assets/images/home/no-gbv-banner.jpg";
import missionPhoto from "@/assets/images/home/mission-photo.jpg";
export const Route = createFileRoute("/_public/")({
  head: () => ({
    meta: [
      { title: "Callas Foundation — Dignity. Protection. Restoration." },
      { name: "description", content: "Grassroots gender justice, trauma-informed care, legal empowerment and 500+ daily meals on the Cape Flats." },
      { property: "og:title", content: "Callas Foundation — Helping In Our Way" },
      { property: "og:description", content: "We walk with survivors — and rebuild the communities around them." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Impact />
      <Mission />
      <StoryVideo />
      <LatestNews />
      <CrisisStrip />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <img
        src={banner}
        alt="Callas Foundation community wearing No GBV shirts"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl rounded-2xl bg-ink/70 backdrop-blur-sm p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.22em] text-white/90 font-semibold">Callas Foundation · NPO {site.npo}</div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Standing with survivors of <span className="text-brand-red">gender-based violence</span>.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/95 leading-relaxed max-w-xl">
            Rooted in the Cape Flats, Callas Foundation walks alongside survivors, supports families, and works with communities to challenge violence, hunger and inequality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 text-sm font-semibold shadow-lg">
              Support our work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/60 hover:border-white text-white px-6 py-3 text-sm font-semibold">
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="bg-canvas border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <Reveal>
          <img src={missionPhoto} alt="Callas Foundation team on the ground" className="w-full aspect-4/3 object-cover rounded-2xl shadow-lg" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold">Our Mission</div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl text-ink leading-snug">
            To champion gender justice by supporting women, children and men through grassroots outreach, trauma-informed care and legal empowerment.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Rooted in Bridgetown and serving nine surrounding suburbs, Callas Foundation walks with survivors from the first phone call through court, healing and re-entry into a safer daily life.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function StoryVideo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.22em] text-brand-blue font-semibold">Our Story</div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-ink">Watch how the work happens.</h2>
          </div>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl shadow-xl bg-ink">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/7pRgdkQGFdI?rel=0&modestbranding=1&playsinline=1"
              title="Callas Foundation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CrisisStrip() {
  return (
    <section className="bg-brand-red/5 border-y border-brand-red/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-red text-white">
          <ShieldAlert className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="font-display font-bold text-ink">In crisis?</div>
          <div className="text-sm text-muted-foreground">SAPS {site.emergency.saps} · GBV Command Centre {site.emergency.gbv}</div>
        </div>
        <div className="flex gap-2">
          <a href={`tel:${site.emergency.saps}`} className="inline-flex items-center gap-1.5 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 text-sm font-semibold"><Phone className="h-4 w-4" /> Call SAPS</a>
          <Link to="/get-help" className="rounded-full border border-ink/20 hover:border-ink text-ink px-4 py-2 text-sm font-semibold">Get Help</Link>
        </div>
      </div>
    </section>
  );
}

type ApiNewsItem = { id: number; title: string; excerpt: string; category: string; publishedDate: string };

function LatestNews() {
  const [latest, setLatest] = useState<ApiNewsItem[]>([]);
  useEffect(() => {
    api.list<ApiNewsItem>("news")
      .then((rows) => setLatest([...rows].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate)).slice(0, 3)))
      .catch(() => setLatest([]));
  }, []);

  if (latest.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">Latest News</h2>
            </div>
            <Link to="/news" className="group inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-red whitespace-nowrap">
              All news <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {latest.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.08}>
              <Link to="/news/$id" params={{ id: String(n.id) }} className="group block">
                <div className="text-xs text-brand-blue font-semibold">{n.category} · {new Date(n.publishedDate).toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" })}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-brand-red leading-snug">{n.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type ImpactRow = { id?: string; label: string; value: number; suffix?: string; sort?: number };

function Impact() {
  const fallback: ImpactRow[] = impactMetrics.map((m) => ({ label: m.label, value: m.value, suffix: m.suffix }));
  const [items, setItems] = useState<ImpactRow[]>(fallback);
  useEffect(() => {
    let alive = true;
    api.list<ImpactRow>("impact")
      .then((rows) => {
        if (!alive || !rows || rows.length === 0) return;
        const sorted = [...rows].sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
        setItems(sorted.map((r) => ({ ...r, value: Number(r.value) || 0 })));
      })
      .catch(() => { /* keep fallback */ });
    return () => { alive = false; };
  }, []);
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold">Our Impact</div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold">Lives touched by Callas Foundation.</h2>
            <p className="mt-3 text-white/70">Every number below is a person, a family, or a community walking a safer road today.</p>
          </div>
        </Reveal>
        <div className={`mt-10 grid gap-6 sm:grid-cols-2 ${items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {items.map((m, i) => (
            <Reveal key={(m.id ?? m.label) + i} delay={i * 0.06}>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold text-brand-red">
                  <Counter to={m.value} suffix={m.suffix ?? ""} />
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
