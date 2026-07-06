import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Facebook, Instagram, Twitter, Linkedin, MessageCircle, LifeBuoy } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/callas-logo.asset.json";
import { navLinks, site } from "@/data/site";

const socialIcon = { facebook: Facebook, instagram: Instagram, twitter: Twitter, linkedin: Linkedin, whatsapp: MessageCircle } as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur-md bg-white/85 border-b border-slate-200/60 shadow-sm" : "bg-white/60 backdrop-blur"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo.url} alt="Callas Foundation" className="h-12 w-12 object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-ink">Callas Foundation</span>
            <span className="text-[10px] tracking-[0.22em] uppercase text-brand-blue">Helping In Our Way</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link key={l.to} to={l.to} className="relative px-3 py-2 text-sm font-medium text-ink/80 hover:text-brand-blue transition-colors">
                {l.label}
                {active && (
                  <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-brand-red" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 pr-2 border-r border-slate-200">
            {site.socials.map((s) => {
              const Icon = socialIcon[s.icon as keyof typeof socialIcon];
              return (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                   className="grid h-8 w-8 place-items-center rounded-full text-ink/70 hover:text-brand-blue hover:bg-brand-blue/10 transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <Link to="/donate" className="hidden sm:inline-flex items-center rounded-full border border-brand-blue/30 px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
            Donate
          </Link>
          <Link to="/get-help" className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 hover:bg-brand-red-dark animate-pulse-red">
            <LifeBuoy className="h-4 w-4" /> Get Help Now
          </Link>
          <button className="lg:hidden ml-1 grid h-10 w-10 place-items-center rounded-md text-ink hover:bg-slate-100" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} className="lg:hidden overflow-hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-slate-100">
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2 pt-3 border-t border-slate-200">
                {site.socials.map((s) => {
                  const Icon = socialIcon[s.icon as keyof typeof socialIcon];
                  return (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="grid h-9 w-9 place-items-center rounded-full text-ink/70 hover:text-brand-blue hover:bg-brand-blue/10">
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}