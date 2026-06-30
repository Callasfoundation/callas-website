import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trash2, RotateCcw } from "lucide-react";
import { useEvents, SEED } from "@/lib/store";

export const Route = createFileRoute("/admin/events")({
  component: EventsAdmin,
});

function EventsAdmin() {
  const [events, setEvents] = useEvents();
  const update = (i: number, patch: Partial<(typeof events)[number]>) => {
    const next = [...events];
    next[i] = { ...next[i], ...patch };
    setEvents(next);
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Calendar</div>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">Events</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setEvents(SEED.events)} className="inline-flex items-center gap-1.5 rounded-full border border-callas-line bg-white px-4 py-2 text-xs font-bold text-callas-ink hover:border-callas-red hover:text-callas-red">
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
          <button onClick={() => setEvents([...events, { id: "e" + Date.now(), title: "New event", date: new Date().toISOString().slice(0, 10), time: "10:00 – 12:00", location: "TBC", description: "" }])} className="inline-flex items-center gap-1.5 rounded-full bg-callas-red px-4 py-2 text-xs font-bold text-white hover:bg-callas-red-dark">
            <Plus className="h-3.5 w-3.5" /> New event
          </button>
        </div>
      </header>

      <div className="space-y-3">
        {events.map((ev, i) => (
          <div key={ev.id} className="grid gap-3 rounded-xl border border-callas-line bg-white p-5 sm:grid-cols-2">
            <input value={ev.title} onChange={(e) => update(i, { title: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm sm:col-span-2" placeholder="Title" />
            <input type="date" value={ev.date} onChange={(e) => update(i, { date: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" />
            <input value={ev.time} onChange={(e) => update(i, { time: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" placeholder="Time" />
            <input value={ev.location} onChange={(e) => update(i, { location: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm sm:col-span-2" placeholder="Location" />
            <textarea rows={2} value={ev.description} onChange={(e) => update(i, { description: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm sm:col-span-2" placeholder="Description" />
            <button onClick={() => setEvents(events.filter((_, j) => j !== i))} className="inline-flex items-center gap-1 text-xs font-bold text-callas-red sm:col-span-2">
              <Trash2 className="h-3 w-3" /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
