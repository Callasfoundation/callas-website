import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trash2, RotateCcw, Save } from "lucide-react";
import { useImpact, useResources, SEED } from "@/lib/store";

export const Route = createFileRoute("/admin/settings")({
  component: SettingsAdmin,
});

function SettingsAdmin() {
  const [impact, setImpact] = useImpact();
  const [resources, setResources] = useResources();

  const updImpact = (i: number, patch: Partial<(typeof impact)[number]>) => {
    const next = [...impact];
    next[i] = { ...next[i], ...patch };
    setImpact(next);
  };
  const updRes = (i: number, patch: Partial<(typeof resources)[number]>) => {
    const next = [...resources];
    next[i] = { ...next[i], ...patch };
    setResources(next);
  };

  return (
    <div className="space-y-10">
      <header>
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Configuration</div>
        <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-callas-ink/65">Tune the rolling impact counters and resources library.</p>
      </header>

      <section className="rounded-2xl border border-callas-line bg-white p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-lg font-bold">Rolling impact numbers</h2>
          <div className="flex gap-2">
            <button onClick={() => setImpact(SEED.impact)} className="inline-flex items-center gap-1.5 rounded-full border border-callas-line px-3 py-1.5 text-xs font-bold hover:border-callas-red hover:text-callas-red">
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
            <button onClick={() => setImpact([...impact, { label: "New metric", value: 0, suffix: "" }])} className="inline-flex items-center gap-1.5 rounded-full bg-callas-blue px-3 py-1.5 text-xs font-bold text-white">
              <Plus className="h-3 w-3" /> Add
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {impact.map((s, i) => (
            <div key={i} className="grid gap-2 sm:grid-cols-[2fr_1fr_100px_auto]">
              <input value={s.label} onChange={(e) => updImpact(i, { label: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" />
              <input type="number" value={s.value} onChange={(e) => updImpact(i, { value: parseInt(e.target.value) || 0 })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" />
              <input value={s.suffix ?? ""} placeholder="suffix" onChange={(e) => updImpact(i, { suffix: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" />
              <button onClick={() => setImpact(impact.filter((_, j) => j !== i))} className="grid h-10 w-10 place-items-center rounded-md bg-callas-red text-white">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-callas-line bg-white p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-lg font-bold">Resources library</h2>
          <div className="flex gap-2">
            <button onClick={() => setResources(SEED.resources)} className="inline-flex items-center gap-1.5 rounded-full border border-callas-line px-3 py-1.5 text-xs font-bold hover:border-callas-red hover:text-callas-red">
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
            <button onClick={() => setResources([...resources, { id: "r" + Date.now(), title: "New resource", type: "PDF", description: "", url: "#" }])} className="inline-flex items-center gap-1.5 rounded-full bg-callas-blue px-3 py-1.5 text-xs font-bold text-white">
              <Plus className="h-3 w-3" /> Add
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {resources.map((r, i) => (
            <div key={r.id} className="grid gap-2 rounded-lg border border-callas-line/70 p-3 sm:grid-cols-2">
              <input value={r.title} onChange={(e) => updRes(i, { title: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm sm:col-span-2" placeholder="Title" />
              <input value={r.type} onChange={(e) => updRes(i, { type: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" placeholder="Type" />
              <input value={r.url} onChange={(e) => updRes(i, { url: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm" placeholder="URL" />
              <textarea rows={2} value={r.description} onChange={(e) => updRes(i, { description: e.target.value })} className="rounded-md border border-callas-line bg-white px-3 py-2 text-sm sm:col-span-2" placeholder="Description" />
              <button onClick={() => setResources(resources.filter((_, j) => j !== i))} className="inline-flex items-center gap-1 text-xs font-bold text-callas-red sm:col-span-2">
                <Trash2 className="h-3 w-3" /> Delete
              </button>
            </div>
          ))}
        </div>
      </section>

      <p className="inline-flex items-center gap-1.5 text-xs text-callas-ink/55">
        <Save className="h-3 w-3" /> Changes save instantly to local storage and reflect on the public site.
      </p>
    </div>
  );
}
