import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/images/logo/callas-logo.png";
import { site } from "@/data/site";

// Official "X" logo (lucide only ships the old Twitter bird).
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap = { facebook: Facebook, instagram: Instagram, twitter: XIcon, linkedin: Linkedin, whatsapp: MessageCircle } as const;

// Each network lights up in its own brand colour on hover (full class names so Tailwind picks them up).
const hoverBrand: Record<string, string> = {
  facebook: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  instagram: "hover:bg-[linear-gradient(45deg,#f09433,#dc2743,#bc1888)] hover:border-[#dc2743]",
  twitter: "hover:bg-black hover:border-white",
  linkedin: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
  whatsapp: "hover:bg-[#25D366] hover:border-[#25D366]",
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Callas Foundation" className="h-14 w-14 object-contain bg-white rounded-full p-1" />
            <div>
              <div className="font-display text-lg font-bold">Callas Foundation</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand-red">Helping In Our Way</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Championing gender justice on the Cape Flats through grassroots outreach, trauma-informed care and legal empowerment.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">Direct Paths</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/founder", "Our Founder"],
              ["/programmes", "Programmes"],
              ["/get-help", "Get Help Now"],
              ["/donate", "Donate"],
              ["/volunteer", "Volunteer"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/80 hover:text-brand-red transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/news", "News"],
              ["/events", "Events"],
              ["/gallery", "Gallery"],
              ["/resources", "Resources"],
              ["/partners", "Partners"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/80 hover:text-brand-red transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" /> <span>{site.address}</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" /> <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" /> <a href={`mailto:${site.emailGeneral}`}>{site.emailGeneral}</a></li>
            <li className="flex gap-3"><MessageCircle className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" /> <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
          </ul>
          <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-white/70">
            <div className="font-semibold text-white">NPO Registration</div>
            <div>{site.npo} · Registered with the Department of Social Development</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {year} Callas Foundation. All rights reserved.</p>
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Follow us</span>
            <div className="flex items-center gap-3" aria-label="Follow us on social media">
              {site.socials.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}
                     className={`grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-white text-ink shadow-lg transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:text-white ${hoverBrand[s.icon]}`}>
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            <span className="opacity-40">·</span>
            <span>Site inspired by the strength of every survivor we walk beside.</span>
          </p>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center text-[11px] tracking-wide text-white/35">
            Crafted with care by Erykah Wanga &amp; Njabulo Hope Makana
          </div>
        </div>
      </div>
    </footer>
  );
}