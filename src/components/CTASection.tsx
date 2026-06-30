import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, HandHeart, Handshake, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-callas-red text-white">
      <div className="container-x grid gap-8 py-16 md:grid-cols-[1.4fr_1fr] md:items-center md:py-20">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Stand with us</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            Every rand, every hour, every voice — moves a community forward.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link to="/donate" className="group flex items-center justify-between rounded-xl bg-white px-5 py-4 font-bold text-callas-red transition hover:bg-callas-canvas">
            <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4" /> Donate</span>
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link to="/volunteer" className="group flex items-center justify-between rounded-xl bg-callas-ink px-5 py-4 font-bold text-white transition hover:bg-black">
            <span className="inline-flex items-center gap-2"><HandHeart className="h-4 w-4" /> Volunteer</span>
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link to="/corporate-partnership" className="group flex items-center justify-between rounded-xl bg-callas-blue px-5 py-4 font-bold text-white transition hover:bg-callas-blue-dark">
            <span className="inline-flex items-center gap-2"><Handshake className="h-4 w-4" /> Partner</span>
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link to="/get-help" className="group flex items-center justify-between rounded-xl border-2 border-white/40 px-5 py-4 font-bold text-white transition hover:border-white">
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Get Help</span>
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
