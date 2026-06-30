import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow, title, subtitle, children, variant = "blue",
}: { eyebrow: string; title: ReactNode; subtitle?: string; children?: ReactNode; variant?: "blue" | "red" | "ink" }) {
  const bg = variant === "blue" ? "bg-callas-blue" : variant === "red" ? "bg-callas-red" : "bg-callas-ink";
  return (
    <section className={`${bg} relative overflow-hidden text-white`}>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      <div className="container-x relative py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">{eyebrow}</div>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
