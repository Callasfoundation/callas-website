import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useImpact } from "@/lib/store";

function RollingNumber({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n.toLocaleString()}{suffix ?? ""}</span>;
}

export function ImpactCounter({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [impact] = useImpact();
  const dark = variant === "dark";
  return (
    <section className={dark ? "bg-callas-ink text-white" : "bg-callas-canvas text-callas-ink"}>
      <div className="container-x py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Our Impact, by the numbers</div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              Quiet work. <span className="text-callas-red">Loud</span> outcomes.
            </h2>
          </div>
          <p className={`max-w-md text-sm leading-relaxed ${dark ? "text-white/70" : "text-callas-ink/70"}`}>
            Every number here is a person, a meal, a court order, a boy choosing a different path. Updated continuously by our programme teams.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {impact.map((s, i) => (
            <motion.div
              key={s.label + i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`${dark ? "bg-callas-ink" : "bg-callas-canvas"} flex flex-col gap-2 p-7`}
            >
              <div className="font-display text-5xl font-bold leading-none tracking-tight text-callas-red sm:text-6xl">
                <RollingNumber value={s.value} suffix={s.suffix} />
              </div>
              <div className={`text-sm font-medium ${dark ? "text-white/80" : "text-callas-ink/80"}`}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
