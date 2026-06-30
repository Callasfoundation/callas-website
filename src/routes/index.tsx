import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Heart, Calendar, Newspaper, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ImpactCounter } from "@/components/ImpactCounter";
import { ProgrammesGrid } from "@/components/ProgrammesGrid";
import { CTASection } from "@/components/CTASection";
import { DONATION_TIERS } from "@/lib/site-data";
import { useEvents, useNews } from "@/lib/store";
import heroBanner from "@/assets/callas-banner.webp";
import volunteerImg from "@/assets/volunteer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Callas Foundation — Standing With Survivors. Building Safer Communities." },
      { name: "description", content: "Frontline gender-based violence response, access to justice, daily community feeding and youth mentorship across the Cape Flats." },
      { property: "og:title", content: "Callas Foundation — Helping In Our Way" },
      { property: "og:description", content: "Frontline GBV response, access to justice, community feeding and youth mentorship across the Cape Flats." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [news] = useNews();
  const [events] = useEvents();
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);

  return (
    <SiteLayout>
      {/* HERO — full-bleed banner with NoGBV community photo clearly visible behind text */}
      <section className="relative isolate overflow-hidden bg-callas-ink text-white">
        <img
          src={heroBanner}
          alt="Callas community members standing together in NoGBV t-shirts"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        {/* Soft tint so people are clearly visible but text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-callas-ink/85 via-callas-ink/55 to-callas-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-callas-ink/70 via-transparent to-callas-ink/30" />

        <div className="container-x relative grid min-h-[82vh] items-center gap-10 py-20 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial="hidden" animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="max-w-2xl [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } } }} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-callas-red/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Cape Flats · Helping In Our Way
            </motion.div>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } } }} className="mt-5 font-display text-6xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Dignity.<br /> Protection.<br /> <span className="text-callas-red drop-shadow-[0_2px_14px_rgba(217,26,26,0.45)]">Restoration.</span>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } } }} className="mt-6 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
              Every day, women, children and families across the Cape Flats face the realities of gender-based violence, trauma, poverty and food insecurity. Callas Foundation walks with survivors — and rebuilds the communities around them.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16,1,0.3,1] } } }} className="mt-8 flex flex-wrap gap-3">
              <Link to="/get-help" className="ring-pulse inline-flex items-center gap-2 rounded-full bg-callas-red px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/40 transition hover:bg-callas-red-dark">
                <Phone className="h-4 w-4" /> Get Help Now
              </Link>
              <Link to="/programmes" className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-callas-ink">
                Our Programmes <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16,1,0.3,1] }}
            className="hidden self-end justify-self-end lg:block"
          >
            <div className="w-80 rounded-xl border border-callas-red/60 bg-callas-ink/85 p-5 backdrop-blur shadow-2xl shadow-black/40">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-callas-red">In Crisis Right Now?</div>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Call SAPS <span className="font-bold text-white">10111</span> or the GBV Command Centre on <span className="font-bold text-white">0800 428 428</span>. Then reach Callas — we walk the rest of the way with you.
              </p>
              <Link to="/get-help" className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-callas-red">
                Get Help <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ImpactCounter variant="dark" />

      {/* Mission band */}
      <section className="bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.3fr] lg:py-28">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Our Mission</div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">Standing with survivors. <span className="text-callas-blue">Building safer communities.</span></h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-callas-ink/85 sm:text-lg">
            <p>Callas Foundation provides frontline support through gender-based violence response services, access to justice, psychosocial support, community feeding programmes, and violence prevention initiatives that strengthen individuals, families and communities.</p>
            <p>We work alongside survivors to access safety, healing and justice — while empowering communities to prevent violence before it occurs. Through advocacy, counselling, court support, community training, youth programmes and daily feeding initiatives, we are building safer, more resilient communities where everyone can live with dignity and hope.</p>
            <p className="font-display text-xl font-bold text-callas-ink">Together, we can break cycles of violence, address inequality, and create lasting change.</p>
          </div>
        </div>
      </section>

      <ProgrammesGrid />

      {/* Donation impact tiers */}
      <section className="bg-callas-canvas">
        <div className="container-x py-20 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Your donation, in action</div>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">Every rand has a name and a face.</h2>
            </div>
            <Link to="/donate" className="inline-flex items-center gap-1.5 rounded-full bg-callas-red px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-callas-red/30 hover:bg-callas-red-dark">
              Donate Now <Heart className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {DONATION_TIERS.map((t, i) => (
              <motion.div
                key={t.amount}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16,1,0.3,1] }}
                className="group relative overflow-hidden rounded-xl border border-callas-line bg-white p-7 transition hover:-translate-y-1 hover:border-callas-red hover:shadow-xl"
              >
                <div className="absolute -right-6 -top-6 grid h-24 w-24 place-items-center rounded-full bg-callas-red/10 text-callas-red transition group-hover:bg-callas-red group-hover:text-white">
                  <span className="font-display text-2xl font-bold">{i + 1}</span>
                </div>
                <div className="font-display text-4xl font-bold text-callas-blue">{t.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-callas-ink/80">{t.impact}</p>
                <Link to="/donate" className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-callas-red">
                  Give {t.label} <ArrowUpRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer split */}
      <section className="bg-white">
        <div className="container-x py-20 lg:py-28">
          <div className="grid gap-0 overflow-hidden rounded-2xl border border-callas-line bg-callas-ink text-white md:grid-cols-2">
            <div className="relative min-h-[320px]">
              <img src={volunteerImg} alt="" width={1400} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="p-8 sm:p-12">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Volunteer</div>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] sm:text-4xl">Your hands. Your week. Our communities.</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Whether you can give two hours or two days, we have a place for you — in the kitchen, the courtroom queue, the BBB workshop, or behind a laptop.
              </p>
              <Link to="/volunteer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-callas-blue px-5 py-2.5 text-sm font-bold text-white hover:bg-callas-blue-dark">
                Become a volunteer <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News + events */}
      <section className="bg-callas-canvas">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-28">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Latest News</div>
                <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] sm:text-4xl">From the field.</h2>
              </div>
              <Link to="/news" className="inline-flex items-center gap-1 text-sm font-bold text-callas-blue"><Newspaper className="h-4 w-4" /> All news</Link>
            </div>
            <div className="mt-8 space-y-4">
              {news.slice(0, 3).map((n) => (
                <Link key={n.id} to="/news/$slug" params={{ slug: n.id }} className="group flex flex-col gap-2 rounded-xl border border-callas-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-callas-red">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-callas-red/10 px-2.5 py-1 font-bold uppercase tracking-wider text-callas-red">{n.category}</span>
                    <span className="text-callas-ink/60">{new Date(n.date).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>
                  <div className="font-display text-xl font-bold leading-tight">{n.title}</div>
                  <p className="text-sm leading-relaxed text-callas-ink/70">{n.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Upcoming Events</div>
                <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] sm:text-4xl">Join us.</h2>
              </div>
              <Link to="/events" className="inline-flex items-center gap-1 text-sm font-bold text-callas-blue"><Calendar className="h-4 w-4" /> All events</Link>
            </div>
            <div className="mt-8 space-y-3">
              {upcoming.map((e) => {
                const d = new Date(e.date);
                return (
                  <div key={e.id} className="flex gap-4 rounded-xl border border-callas-line bg-white p-5">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-callas-blue text-white">
                      <div className="font-display text-2xl font-bold leading-none">{d.getDate()}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider">{d.toLocaleString("en-ZA", { month: "short" })}</div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-base font-bold leading-tight">{e.title}</div>
                      <div className="mt-1 text-xs text-callas-ink/70">{e.time} · {e.location}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="border-y border-callas-line bg-white">
        <div className="container-x py-10">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-bold uppercase tracking-[0.22em] text-callas-ink/50">
            <span className="inline-flex items-center gap-2 text-callas-ink"><ShieldCheck className="h-4 w-4 text-callas-blue" /> Trusted Partners</span>
            {["Western Cape DSD", "FoodForward SA", "Pick n Pay", "City of Cape Town", "Mosaic", "Sonke Gender Justice"].map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
