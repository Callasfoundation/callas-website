import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar, Clock, MapPin } from "lucide-react";
import { api } from "@/lib/api";

type EventItem = { id: number; title: string; date: string; time: string; location: string; programmeSlug: string };

export function ProgrammeEvents({ slug }: { slug: string }) {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.list<EventItem>("events")
      .then((rows) => setEvents(rows.filter((e) => e.programmeSlug === slug && new Date(e.date) >= new Date())))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading || events.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="font-display text-3xl font-bold text-ink">Happening in this programme</h2>
      <div className="mt-6 space-y-4">
        {events.map((e) => (
          <div key={e.id} className="rounded-xl border border-slate-200 p-5">
            <div className="font-display font-bold text-ink">{e.title}</div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(e.date).toLocaleDateString()}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {e.time}</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {e.location}</span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/events" className="mt-4 inline-block text-sm font-semibold text-brand-red hover:underline">See all events →</Link>
    </div>
  );
}