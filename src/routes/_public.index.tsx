import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldAlert } from "lucide-react";
import { Reveal } from "@/components/motion";
import { news } from "@/data/content";
import { site } from "@/data/site";
import banner from "@/assets/photos/no-gbv-banner.asset.json";
import missionPhoto from "@/assets/photos/unnamed-2.asset.json";

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
        src={banner.url}
        alt="Callas Foundation community wearing No GBV shirts"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-white/70 font-semibold">Callas Foundation · NPO {site.npo}</div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Standing with survivors of <span className="text-brand-red">gender-based violence</span>.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
            A community-driven NPO on the Cape Flats — walking with survivors, feeding families, and rebuilding safety, one household at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 text-sm font-semibold">
              Make a Donation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/30 hover:border-white text-white px-6 py-3 text-sm font-semibold">
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
          <img src={missionPhoto.url} alt="Callas Foundation team on the ground" className="w-full aspect-4/3 object-cover rounded-2xl shadow-lg" />
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

function LatestNews() {
  const latest = news.slice(0, 3);
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
            <Reveal key={n.slug} delay={i * 0.08}>
              <Link to="/news/$slug" params={{ slug: n.slug }} className="group block">
                <div className="text-xs text-brand-blue font-semibold">{n.category} · {new Date(n.date).toLocaleDateString("en-ZA", { day: "numeric", month: "short", year: "numeric" })}</div>
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