import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Scale, HeartHandshake, ShieldCheck, Users, Soup, BookOpen, MessageCircle } from "lucide-react";
import { PROGRAMMES } from "@/lib/site-data";

const ICONS = { Scale, HeartHandshake, ShieldCheck, Users, Soup, BookOpen, MessageCircle } as const;

const accentBg: Record<string, string> = {
  red: "bg-callas-red text-white",
  blue: "bg-callas-blue text-white",
  ink: "bg-callas-ink text-white",
};

export function ProgrammesGrid() {
  return (
    <section className="bg-white">
      <div className="container-x py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Our Programmes</div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              Seven frontline programmes, one foundation.
            </h2>
          </div>
          <Link to="/programmes" className="inline-flex items-center gap-1.5 text-sm font-bold text-callas-blue hover:text-callas-blue-dark">
            All programmes <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(220px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMMES.map((p, i) => {
            const Icon = ICONS[p.icon as keyof typeof ICONS];
            const large = i === 0 || i === 4;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`${large ? "lg:col-span-2 lg:row-span-2" : ""}`}
              >
                <Link
                  to="/programmes/$slug"
                  params={{ slug: p.slug }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-xl ${accentBg[p.accent]} transition-transform duration-500 hover:-translate-y-1`}
                >
                  <div className="absolute inset-0">
                    <img src={p.image} alt="" width={1200} height={900} loading="lazy" className="h-full w-full object-cover opacity-30 transition duration-700 group-hover:opacity-45 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent mix-blend-multiply" />
                  </div>
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <Icon className="h-7 w-7" />
                    <div>
                      <div className="font-display text-xl font-bold leading-tight sm:text-2xl">{p.name}</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">{p.short}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                        Read more <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
