import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, MapPin, Clock } from "lucide-react";

type EventItem = { id: number; title: string; date: string; time: string; location: string; description: string; imageUrl: string };

export const Route = createFileRoute("/_public/events")({
  head: () => ({ meta: [{ title: "Events — Callas Foundation" }] }),
  component: EventsPage,
});

function EventsPage() {
  const [items, setItems] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("@/lib/api").then(({ api }) =>
      api.list<EventItem>("events")
        .then((rows) => setItems(rows.sort((a, b) => +new Date(a.date) - +new Date(b.date))))
        .finally(() => setLoading(false))
    );
  }, []);

  const now = new Date();
  const upcoming = items.filter((e) => new Date(e.date) >= now);
  const past = items.filter((e) => new Date(e.date) < now);

  return (
    <>
      <PageHeader eyebrow="What's On" title="Upcoming events." crumbs={[{ label: "Events" }]} />
      <section className="bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {loading && <p className="text-muted-foreground">Loading…</p>}

        {!loading && (
          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-6">Upcoming</h2>
            {upcoming.length === 0 && <p className="text-muted-foreground">No upcoming events right now.</p>}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((e) => <EventCard key={e.id} e={e} />)}
            </div>
          </div>
        )}

        {!loading && past.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-ink mb-6">Past events</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 opacity-70">
              {past.map((e) => <EventCard key={e.id} e={e} />)}
            </div>
          </div>
        )}
      </div></section>
    </>
  );
}

function EventCard({ e }: { e: EventItem }) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden">
      {e.imageUrl && <img src={e.imageUrl} alt="" className="w-full h-44 object-cover" />}
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-ink">{e.title}</h3>
        <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {new Date(e.date).toLocaleDateString()}</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {e.time}</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {e.location}</div>
        </div>
        <p className="mt-3 text-sm">{e.description}</p>
      </div>
    </div>
  );
}