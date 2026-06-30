import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  AlertTriangle, Facebook, Instagram, Linkedin, Youtube, Phone, Search, Menu, X,
  Heart, ArrowUpRight, Mail, MapPin,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logo from "@/assets/callas-logo.png";
import { SITE } from "@/lib/site-data";
import { Chatbot } from "./Chatbot";

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Programmes" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/news", label: "News" },
  { to: "/events", label: "Events" },
  { to: "/resources", label: "Resources" },
  { to: "/shop", label: "Shop" },
  { to: "/contact", label: "Contact" },
] as const;

function SafetyExit() {
  const exit = () => {
    try {
      window.open("https://www.google.co.za/search?q=weather+cape+town", "_blank");
      window.location.replace("https://www.google.co.za");
    } catch {
      window.location.href = "https://www.google.co.za";
    }
  };
  return (
    <button
      onClick={exit}
      className="inline-flex items-center gap-1.5 rounded-sm bg-callas-red px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-callas-red-dark"
      aria-label="Quick exit to a neutral page"
    >
      <AlertTriangle className="h-3.5 w-3.5" />
      Safety Exit
    </button>
  );
}

function UtilityBar() {
  return (
    <div className="bg-callas-ink text-white">
      <div className="container-x flex h-10 items-center justify-between gap-3 text-xs">
        <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-1.5 text-white/85 transition hover:text-white">
          <Phone className="h-3.5 w-3.5" /> {SITE.phone}
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden text-white/60 sm:inline">In danger? Press the red button.</span>
          <SafetyExit />
        </div>
      </div>
    </div>
  );
}

function SocialPills({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-7 w-7" : "h-9 w-9";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const cls = `grid ${dim} place-items-center rounded-full bg-callas-ink/80 text-white shadow-sm transition hover:bg-callas-red`;
  return (
    <div className="flex items-center gap-1.5">
      <a href={SITE.socials.instagram} aria-label="Instagram" className={cls}><Instagram className={icon} /></a>
      <a href={SITE.socials.youtube} aria-label="YouTube" className={cls}><Youtube className={icon} /></a>
      <a href={SITE.socials.facebook} aria-label="Facebook" className={cls}><Facebook className={icon} /></a>
      <a href={SITE.socials.linkedin} aria-label="LinkedIn" className={cls}><Linkedin className={icon} /></a>
    </div>
  );
}

function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all ${
        scrolled ? "border-callas-line bg-white/85 backdrop-blur-md" : "border-transparent bg-white"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="" width={48} height={48} className="h-12 w-12 shrink-0" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight text-callas-ink">CALLAS FOUNDATION</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-callas-red">Helping In Our Way</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to || pathname.startsWith(l.to + "/");
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-2 text-sm font-semibold transition ${
                  active ? "text-callas-ink" : "text-callas-ink/70 hover:text-callas-ink"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-callas-red"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block"><SocialPills size="sm" /></div>
          <span className="hidden h-6 w-px bg-callas-line md:block" />
          <button aria-label="Search" className="hidden h-10 w-10 items-center justify-center rounded-full text-callas-ink/70 transition hover:bg-callas-canvas hover:text-callas-ink sm:inline-flex">
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/get-help"
            className="ring-pulse hidden items-center gap-1.5 rounded-full bg-callas-red px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-callas-red/30 transition hover:bg-callas-red-dark sm:inline-flex"
          >
            <Heart className="h-4 w-4" />
            Get Help Now
          </Link>
          <Link
            to="/donate"
            className="hidden items-center gap-1.5 rounded-full bg-callas-blue px-4 py-2.5 text-sm font-bold text-white transition hover:bg-callas-blue-dark md:inline-flex"
          >
            Donate
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-callas-ink lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-callas-line bg-white lg:hidden">
          <div className="container-x flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="border-b border-callas-line/50 py-3 text-sm font-semibold text-callas-ink">
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between">
              <SocialPills size="sm" />
            </div>
            <div className="mt-4 flex gap-2">
              <Link to="/get-help" className="flex-1 rounded-full bg-callas-red px-4 py-2.5 text-center text-sm font-bold text-white">Get Help Now</Link>
              <Link to="/donate" className="flex-1 rounded-full bg-callas-blue px-4 py-2.5 text-center text-sm font-bold text-white">Donate</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-callas-ink text-white/85">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={44} height={44} className="h-11 w-11" />
            <div className="leading-tight">
              <div className="font-display text-base font-bold text-white">CALLAS FOUNDATION</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-callas-red">Helping In Our Way</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Standing with survivors. Building safer communities. Callas Foundation responds to
            gender-based violence across the Cape Flats through justice, healing, training, youth
            mentorship, and daily nutrition.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.socials.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-callas-red hover:bg-callas-red"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.socials.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-callas-red hover:bg-callas-red"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.socials.linkedin} aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-callas-red hover:bg-callas-red"><Linkedin className="h-4 w-4" /></a>
            <a href={SITE.socials.youtube} aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 transition hover:border-callas-red hover:bg-callas-red"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-callas-red">Navigate</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/programmes" className="hover:text-white">Programmes</Link></li>
            <li><Link to="/news" className="hover:text-white">News</Link></li>
            <li><Link to="/events" className="hover:text-white">Events</Link></li>
            <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
            <li><Link to="/governance" className="hover:text-white">Governance</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-callas-red">Act</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/get-help" className="hover:text-white">Get Help Now</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
            <li><Link to="/volunteer" className="hover:text-white">Volunteer</Link></li>
            <li><Link to="/support-our-work" className="hover:text-white">Support Our Work</Link></li>
            <li><Link to="/corporate-partnership" className="hover:text-white">Corporate Partnership</Link></li>
            <li><Link to="/media-advocacy" className="hover:text-white">Media & Advocacy</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-callas-red">Reach Us</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-callas-blue" /><a href={`tel:${SITE.phoneRaw}`} className="hover:text-white">{SITE.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-callas-blue" /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-callas-blue" /><span>{SITE.address}</span></li>
          </ul>
          <div className="mt-5 rounded-md border border-white/15 p-3 text-xs leading-relaxed text-white/65">
            Registered <span className="font-semibold text-white">{SITE.npo}</span> · <span className="font-semibold text-white">{SITE.pbo}</span>
            <br />Section 18A tax certificates issued on request.
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <div>© {new Date().getFullYear()} Callas Foundation. All rights reserved.</div>
          <div>Built with dignity in Cape Town.</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppPill() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp.replace(/[^\d]/g, "")}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607z"/></svg>
      WhatsApp Us
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <UtilityBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppPill />
      <Chatbot />
    </div>
  );
}
