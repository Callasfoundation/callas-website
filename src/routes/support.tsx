import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Building2, Heart, Truck, Sparkles, FileText, ArrowRight, Mail } from "lucide-react";
import { PageShell, SectionHeading } from "@/components/PageShell";
import textureImg from "@/assets/texture.jpg";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Our Work — Callas Foundation" },
      { name: "description", content: "Corporate partnerships, in-kind giving, foundation grants and legacy support." },
    ],
  }),
  component: Support,
});

const WAYS = [
  { icon: Building2, title: "Corporate Partnership", body: "Annual MoUs with quarterly impact reporting, branded volunteer days and employee-payroll giving rails.", tag: "From $5,000 / yr" },
  { icon: Truck,     title: "In-Kind Giving",        body: "Produce, kitchen consumables, office equipment, transport and legal expertise. We publish what we need quarterly.", tag: "Wishlist updated" },
  { icon: FileText,  title: "Foundation Grants",     body: "We respond to RFPs and write multi-year proposals. Full M&E framework, audited financials, OECD-DAC indicators.", tag: "Multi-year" },
  { icon: Heart,     title: "Legacy & Major Gifts",  body: "Endowment-style gifts, bequests and named cohorts. Our Chair meets every major donor personally.", tag: "Stewardship" },
];

const TRUST_BADGES = [
  "PVO 23/2019",
  "Audited by Deloitte ZW",
  "GBV Prevention Network",
  "SADC CSO Reference Group",
  "Member, GiveWell-style published metrics",
];

function Support() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0">
          <img src={textureImg} alt="" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-canvas" />
        </div>
        <div className="container-x relative py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">Support our work</p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] text-ink md:text-7xl">
            The partners behind the people behind the work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From a quarter-tonne of tomatoes to a multi-year grant, every kind of support has a place — and a measurable outcome.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/60 bg-white">
        <div className="container-x py-20">
          <SectionHeading eyebrow="Pathways" title="Four ways to walk with us" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {WAYS.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-canvas p-8 transition-all hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-blue shadow-card transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{w.tag}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  Speak to partnerships <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/60 bg-canvas">
        <div className="container-x py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Trust & governance</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {TRUST_BADGES.map((b) => (
              <span key={b} className="rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-ink/80">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Get in touch</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">Let's design a partnership that fits your strategy.</h2>
            <p className="mt-4 text-base text-muted-foreground">Our partnerships team responds within two business days with a tailored brief.</p>
            <div className="mt-8 space-y-4 text-sm">
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-blue" /> partnerships@callasfoundation.org</p>
              <p className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-brand-blue" /> Partnerships Lead — Ms. Rumbidzai Chivasa</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-slate-200/80 bg-canvas p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Your name" className="rounded-xl border border-input bg-white px-4 py-3 outline-none focus:border-brand-blue" />
              <input placeholder="Organisation" className="rounded-xl border border-input bg-white px-4 py-3 outline-none focus:border-brand-blue" />
              <input type="email" placeholder="Work email" className="rounded-xl border border-input bg-white px-4 py-3 outline-none focus:border-brand-blue sm:col-span-2" />
              <select className="rounded-xl border border-input bg-white px-4 py-3 outline-none focus:border-brand-blue sm:col-span-2">
                <option>Type of partnership</option>
                <option>Corporate partnership</option>
                <option>In-kind giving</option>
                <option>Foundation grant</option>
                <option>Legacy / major gift</option>
              </select>
              <textarea rows={4} placeholder="Tell us a little about what you have in mind..." className="rounded-xl border border-input bg-white px-4 py-3 outline-none focus:border-brand-blue sm:col-span-2" />
            </div>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90">
              Send enquiry <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">Or <Link to="/donate" className="font-semibold text-brand-blue">donate directly</Link>.</p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
