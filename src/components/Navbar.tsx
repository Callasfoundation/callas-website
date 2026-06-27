import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Menu, X, Phone, ChevronDown, Info, Users2, Scale, HeartPulse, ShieldCheck,
  UtensilsCrossed, GraduationCap, Handshake, HandCoins, HeartHandshake, Building2,
} from "lucide-react";
import { Logo } from "./Logo";

type MenuItem = {
  to: string;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

type MenuGroup = {
  key: string;
  label: string;
  blurb: string;
  items: MenuItem[];
};

const MENUS: MenuGroup[] = [
  {
    key: "who",
    label: "Who We Are",
    blurb: "Our story, leadership and the standards we hold ourselves to.",
    items: [
      { to: "/about", label: "About Callas", desc: "Mission, history and the people behind the work.", icon: Info },
      { to: "/about", label: "Leadership & Trustees", desc: "Board, advisors and survivor-led governance.", icon: Users2 },
    ],
  },
  {
    key: "what",
    label: "What We Do",
    blurb: "Seven programmes forming one continuum of care.",
    items: [
      { to: "/programmes/access-to-justice", label: "Access to Justice", desc: "Pro-bono legal teams and court accompaniment.", icon: Scale },
      { to: "/programmes/psychosocial-support", label: "Psychosocial Support", desc: "Trauma-informed counselling and peer circles.", icon: HeartPulse },
      { to: "/programmes/first-responders", label: "First Responders", desc: "Training neighbourhood monitoring cells.", icon: ShieldCheck },
      { to: "/programmes/bbb-boys", label: "BBB Boys Programme", desc: "Behavioural mentorship for boys 11–17.", icon: Users2 },
      { to: "/programmes/community-kitchen", label: "Community Kitchen", desc: "600 hot meals daily across three kitchens.", icon: UtensilsCrossed },
      { to: "/programmes/human-rights-clubs", label: "Human Rights Clubs", desc: "Curriculum on safe boundaries and leadership.", icon: GraduationCap },
      { to: "/programmes/mens-engagement", label: "Men's Engagement", desc: "Forums on accountability and fatherhood.", icon: Handshake },
    ],
  },
  {
    key: "help",
    label: "How To Help",
    blurb: "Three ways to power frontline response this week.",
    items: [
      { to: "/donate", label: "Donate", desc: "Fund safe-housing, legal aid and hot meals — every gift is tracked.", icon: HandCoins },
      { to: "/volunteer", label: "Volunteer", desc: "Give time as a counsellor, paralegal, driver or kitchen lead.", icon: HeartHandshake },
      { to: "/support", label: "Corporate & Partners", desc: "Institutional partnerships, matched giving and CSR pathways.", icon: Building2 },
    ],
  },
];

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 backdrop-blur-md bg-white/80">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
          <Link
            to="/"
            className="relative px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            onMouseEnter={() => setHovered(null)}
          >
            Home
            {pathname === "/" && (
              <motion.span
                layoutId="nav-underline"
                className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-brand-blue"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {MENUS.map((group) => {
            const active = group.items.some((it) =>
              it.to === "/" ? pathname === "/" : pathname.startsWith(it.to),
            );
            const isOpen = hovered === group.key;
            return (
              <div
                key={group.key}
                className="relative"
                onMouseEnter={() => setHovered(group.key)}
              >
                <button
                  className="relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
                  aria-expanded={isOpen}
                >
                  {group.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-brand-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-[440px] -translate-x-1/2 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)]"
                    >
                      <div className="px-3 pb-2 pt-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                          {group.label}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{group.blurb}</p>
                      </div>
                      <div className="mt-1 grid gap-0.5">
                        {group.items.map((item) => (
                          <Link
                            key={item.to + item.label}
                            to={item.to}
                            onClick={() => setHovered(null)}
                            className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-canvas"
                          >
                            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-slate-200/80 bg-canvas text-brand-blue transition-colors group-hover:border-brand-blue/30 group-hover:bg-brand-blue group-hover:text-white">
                              <item.icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold text-ink">{item.label}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{item.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/donate"
            className="hidden sm:inline-flex h-10 items-center rounded-full border border-ink/15 px-4 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Donate
          </Link>
          <Link
            to="/get-help"
            className="pulse-red inline-flex h-10 items-center gap-2 rounded-full bg-brand-red px-4 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 transition-transform hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            <span className="hidden xs:inline sm:inline">Get Immediate Help</span>
            <span className="xs:hidden sm:hidden">Help</span>
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur"
          >
            <div className="container-x flex flex-col gap-4 py-5">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-ink hover:bg-canvas"
              >
                Home
              </Link>
              {MENUS.map((group) => (
                <div key={group.key}>
                  <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                    {group.label}
                  </p>
                  <div className="mt-1 flex flex-col">
                    {group.items.map((item) => (
                      <Link
                        key={item.to + item.label}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-canvas"
                      >
                        <item.icon className="mt-0.5 h-4 w-4 text-brand-blue" />
                        <span>
                          <span className="block text-sm font-semibold text-ink">{item.label}</span>
                          <span className="text-xs text-muted-foreground">{item.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-ink px-3 py-3 text-center text-base font-semibold text-white"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
