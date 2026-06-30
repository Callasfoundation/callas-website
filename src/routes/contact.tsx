import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site-data";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Callas Foundation" },
      { name: "description", content: "Reach the Callas Foundation team — main office, programme leads, media enquiries, and partnerships." },
      { property: "og:title", content: "Contact Callas Foundation" },
      { property: "og:description", content: "Reach the Callas Foundation team." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Contact" title={<>Reach us. <span className="text-white/80">Directly.</span></>} subtitle="No call centres. No auto-replies. Real people, on the Cape Flats, answer every message." variant="ink" />
      <section className="bg-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:py-24">
          <div className="space-y-5">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-4 rounded-2xl border border-callas-line bg-callas-canvas p-6 transition hover:border-callas-red">
              <Phone className="mt-1 h-5 w-5 text-callas-red" />
              <div><div className="text-xs font-bold uppercase tracking-wider text-callas-ink/60">Phone & WhatsApp</div><div className="mt-1 font-display text-xl font-bold">{SITE.phone}</div></div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 rounded-2xl border border-callas-line bg-callas-canvas p-6 transition hover:border-callas-red">
              <Mail className="mt-1 h-5 w-5 text-callas-blue" />
              <div><div className="text-xs font-bold uppercase tracking-wider text-callas-ink/60">Email</div><div className="mt-1 font-display text-xl font-bold">{SITE.email}</div></div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-callas-line bg-callas-canvas p-6">
              <MapPin className="mt-1 h-5 w-5 text-callas-ink" />
              <div><div className="text-xs font-bold uppercase tracking-wider text-callas-ink/60">Office</div><div className="mt-1 font-display text-xl font-bold">{SITE.address}</div></div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href={SITE.socials.facebook} className="grid h-10 w-10 place-items-center rounded-full bg-callas-ink text-white"><Facebook className="h-4 w-4" /></a>
              <a href={SITE.socials.instagram} className="grid h-10 w-10 place-items-center rounded-full bg-callas-ink text-white"><Instagram className="h-4 w-4" /></a>
              <a href={SITE.socials.linkedin} className="grid h-10 w-10 place-items-center rounded-full bg-callas-ink text-white"><Linkedin className="h-4 w-4" /></a>
              <a href={SITE.socials.youtube} className="grid h-10 w-10 place-items-center rounded-full bg-callas-ink text-white"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you. We will be in touch soon."); }}
            className="rounded-2xl bg-callas-canvas p-7 sm:p-10"
          >
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <input required placeholder="Full name" className="rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue" />
              <input required placeholder="Email" type="email" className="rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue" />
            </div>
            <input placeholder="Subject" className="mt-3 w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue" />
            <select className="mt-3 w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue">
              <option>General enquiry</option>
              <option>Partnership / CSI</option>
              <option>Volunteer onboarding</option>
              <option>Media enquiry</option>
              <option>Programme referral</option>
            </select>
            <textarea required rows={6} placeholder="Your message" className="mt-3 w-full rounded-md border border-callas-line bg-white px-4 py-3 text-sm outline-none focus:border-callas-blue" />
            <button type="submit" className="mt-5 rounded-full bg-callas-red px-6 py-3 text-sm font-bold text-white hover:bg-callas-red-dark">Send message</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  ),
});
