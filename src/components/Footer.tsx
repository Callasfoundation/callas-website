import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Programmes",
    links: [
      { to: "/programmes/access-to-justice", label: "Access to Justice" },
      { to: "/programmes/psychosocial-support", label: "Psychosocial Support" },
      { to: "/programmes/first-responders", label: "First Responders Training" },
      { to: "/programmes/bbb-boys", label: "BBB Boys Programme" },
      { to: "/programmes/community-kitchen", label: "Community Kitchen" },
      { to: "/programmes/human-rights-clubs", label: "Human Rights Clubs" },
      { to: "/programmes/mens-engagement", label: "Men's Engagement" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { to: "/get-help", label: "Get Help Now" },
      { to: "/volunteer", label: "Become a Volunteer" },
      { to: "/donate", label: "Donate" },
      { to: "/support", label: "Partner With Us" },
      { to: "/about", label: "Our Story" },
    ],
  },
  {
    title: "Governance",
    links: [
      { to: "/about", label: "Board of Trustees" },
      { to: "/about", label: "Annual Reports" },
      { to: "/about", label: "Financial Transparency" },
      { to: "/about", label: "Safeguarding Policy" },
      { to: "/about", label: "Code of Conduct" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-200/60 bg-ink text-white">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-2">
                <Logo showWordmark={false} className="h-10 w-10" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold tracking-wide">Callas Foundation</p>
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">Helping In Our Way</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              A community-rooted organisation restoring dignity for survivors of gender-based violence
              through legal aid, psychosocial care, nutrition and structural advocacy.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <span>Office Block C, 14 Mukoma Road, Mufakose, Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-red" />
                <span>24/7 Crisis Line — +263 78 414 9023</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-red" />
                <span>hello@callasfoundation.org</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-white/85 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Callas Foundation Trust · PVO 23/2019 · All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <ShieldCheck className="h-4 w-4 text-brand-blue" />
            <span>Audited annually · Member of the GBV Prevention Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
