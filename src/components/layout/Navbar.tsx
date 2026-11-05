import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, LifeBuoy, Heart, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/images/logo/callas-logo.png";
import { navLinks as baseNavLinks, type NavItem } from "@/data/site";
import { programmes } from "@/data/programmes";

// Programmes gets a dropdown listing every programme, built from the programmes data
// so new programmes appear in the menu automatically.
const navLinks: readonly NavItem[] = baseNavLinks.map((l) =>
  l.label === "Programmes"
    ? {
        ...l,
        children: [
          { to: "/programmes", label: "All Programmes" },
          ...programmes.map((p) => ({ to: `/programmes/${p.slug}`, label: p.title })),
        ],
      }
    : l,
);

function isActive(pathname: string, item: NavItem) {
  const targets = [item.to, ...(item.children?.map((c) => c.to) ?? [])];
  return targets.some((t) => (t === "/" ? pathname === "/" : pathname === t || pathname.startsWith(t + "/")));
}

function DesktopItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = isActive(pathname, item);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const base = "relative inline-flex items-center gap-1 whitespace-nowrap px-3 py-2 text-[15px] font-medium text-ink/80 hover:text-brand-blue transition-colors";
  const underline = active && (
    <motion.span layoutId="nav-underline" className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-brand-red" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
  );

  if (!item.children) {
    return (
      <Link to={item.to} className={base}>
        {item.label}
        {underline}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hide(); }}
      onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
    >
      <button type="button" className={base} aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        {underline}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 pt-2"
          >
            <div className="min-w-[240px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
              {item.children.map((c) => (
                <Link key={c.to} to={c.to} role="menuitem" className="block rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors">
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <Link to={item.to} className="rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-slate-100">
        {item.label}
      </Link>
    );
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-slate-100"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-3 mb-1 flex flex-col border-l border-slate-200 pl-2">
          {item.children.map((c) => (
            <Link key={c.to} to={c.to} className="rounded-md px-3 py-2 text-sm text-ink/80 hover:bg-slate-100">
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

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
      <div className="mx-auto flex h-24 sm:h-28 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Callas Foundation" className="h-[72px] w-[72px] sm:h-24 sm:w-24 object-contain" />
          <div className="hidden sm:flex lg:hidden xl:flex flex-col leading-tight">
            <span className="font-display text-2xl font-bold text-ink">Callas Foundation</span>
            <span className="text-[11px] tracking-[0.22em] uppercase text-brand-blue">Helping In Our Way</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {navLinks.map((l) => (
            <DesktopItem key={l.label} item={l} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-base font-bold text-white shadow-lg shadow-brand-blue/30 hover:bg-brand-blue/90 transition-colors sm:px-7 sm:py-3.5 sm:text-lg">
            <Heart className="h-5 w-5" /> Donate
          </Link>
          <Link to="/get-help" aria-label="Get Help Now" className="inline-flex items-center gap-2 rounded-full bg-brand-red p-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 hover:bg-brand-red-dark animate-pulse-red min-[1340px]:px-4 min-[1340px]:py-2.5">
            <LifeBuoy className="h-4 w-4" /> <span className="hidden min-[1340px]:inline">Get Help Now</span>
          </Link>
          <button className="lg:hidden ml-1 grid h-10 w-10 place-items-center rounded-md text-ink hover:bg-slate-100" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} className="lg:hidden overflow-hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <MobileItem key={l.label} item={l} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
