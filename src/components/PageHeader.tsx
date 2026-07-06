import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({ eyebrow, title, description, crumbs = [], image }: { eyebrow?: string; title: string; description?: string; crumbs?: { label: string; to?: string }[]; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />}
      <div className="absolute inset-0 bg-linear-to-br from-brand-blue-dark/95 via-ink/90 to-brand-red/50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {crumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.22em] text-brand-red font-semibold">{eyebrow}</motion.div>}
        <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }} className="mt-3 font-display text-4xl sm:text-6xl font-bold leading-tight text-balance max-w-3xl">
          {title}
        </motion.h1>
        {description && (
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }} className="mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}