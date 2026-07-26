import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { ExternalLink, Landmark, Heart } from "lucide-react";
import { site } from "@/data/site";
import { uploadedPhotos } from "@/data/content";
import qr from "@/assets/images/qr/donation-qr.png";

export const Route = createFileRoute("/_public/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Callas Foundation" },
      { name: "description", content: "Fund 500 meals a day, court accompaniment for survivors, and community responder training. Section 18A receipts available." },
      { property: "og:title", content: "Donate to Callas Foundation" },
      { property: "og:description", content: "Every rand becomes something specific and immediate on the Cape Flats." },
    ],
  }),
  component: DonatePage,
});

const donationLinks = [
  {
    name: "PayFast",
    tagline: "Card, EFT & Instant EFT — via PayFast (South Africa)",
    url: "https://payment.payfast.io/eng/process/payment/09ef58da-eff0-4d23-b53a-e2f21caf35c7",
  },
  {
    name: "GivenGain",
    tagline: "Building Safer Communities Together campaign",
    url: "https://www.givengain.com/campaign/building-safer-communities-together-33402",
  },
  {
    name: "BackaBuddy",
    tagline: "Standing with Survivors of Gender-Based Violence",
    url: "https://www.backabuddy.co.za/campaign/standing-with-survivors-of-gender-based-violence",
  },
];

function DonatePage() {
  return (
    <>
      <PageHeader eyebrow="Give with Impact" title="Your donation changes lives." description="Every rand supports meals, court accompaniment and survivor care on the Cape Flats." crumbs={[{ label: "Donate" }]} image={uploadedPhotos[4]} />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink flex items-center gap-2"><Heart className="h-5 w-5 text-brand-red" /> Ways to donate</h2>
            <p className="mt-2 text-muted-foreground">Choose the platform you prefer — every option supports Callas Foundation directly.</p>
          </Reveal>

          <div className="mt-8 grid gap-4">
            {donationLinks.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.05}>
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-red hover:shadow-md transition-all">
                  <div>
                    <div className="font-display text-lg font-bold text-ink group-hover:text-brand-red">{d.name}</div>
                    <div className="text-sm text-muted-foreground">{d.tagline}</div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-brand-red shrink-0" />
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] items-center rounded-xl border border-slate-200 bg-canvas p-6">
              <div>
                <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm"><Landmark className="h-4 w-4" /> Or scan to donate directly</div>
                <p className="mt-2 text-sm text-muted-foreground">Scan the QR code with your phone camera to open our secure donation link.</p>
                <p className="mt-3 text-xs text-muted-foreground">NPO {site.npo} · Section 18A tax certificate on request via <a href={`mailto:${site.emailGeneral}`} className="text-brand-blue hover:underline">{site.emailGeneral}</a>.</p>
              </div>
              <img src={qr} alt="Donation QR code" className="h-40 w-40 rounded-lg border border-slate-200 bg-white p-2 mx-auto" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}