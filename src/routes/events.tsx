import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { useEvents } from "@/lib/store";
import { MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events Calendar — Callas Foundation" },
      { name: "description", content: "Upcoming webinars, training, community events and 16 Days of Activism campaign dates at Callas Foundation." },
      { property: "og:title", content: "Events — Callas Foundation" },
      { property: "og:description", content: "Upcoming community events and training." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [events] = useEvents();
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return (
    <SiteLayout>
      <PageHero eyebrow="Events" title={<>Join us. <span className="text-white/80">In person.</span></>} subtitle="Open training, community gatherings, partner events and campaigns across the Cape Flats." variant="ink" />
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="space-y-4">
            {sorted.map((e) => {
              const d = new Date(e.date);
              return (
                <div key={e.id} className="flex flex-col gap-5 rounded-2xl border border-callas-line bg-callas-canvas p-6 sm:flex-row sm:items-center">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-callas-blue text-white">
                    <div className="font-display text-3xl font-bold leading-none">{d.getDate()}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider">{d.toLocaleString("en-ZA", { month: "short" })}</div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold leading-tight">{e.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-callas-ink/70">
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {e.time}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.location}</span>
                    </div>
                    <p className="mt-2 text-sm text-callas-ink/80">{e.description}</p>
                  </div>
                  <button className="rounded-full bg-callas-red px-5 py-2.5 text-sm font-bold text-white hover:bg-callas-red-dark">RSVP</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
