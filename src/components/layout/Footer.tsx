import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/callas-logo.asset.json";
import { site } from "@/data/site";

const iconMap = { facebook: Facebook, instagram: Instagram, twitter: Twitter, linkedin: Linkedin, whatsapp: MessageCircle } as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Callas Foundation" className="h-14 w-14 object-contain bg-white rounded-full p-1" />
            <div>
              <div className="font-display text-lg font-bold">Callas Foundation</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand-red">Helping In Our Way</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">
            Championing gender justice on the Cape Flats through grassroots outreach, trauma-informed care and legal empowerment.
          </p>
          <div className="mt-5 flex gap-2">
            {site.socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                   className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-red transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {year} Callas Foundation. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            <span className="opacity-40">·</span>
            <span>Site inspired by the strength of every survivor we walk beside.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}