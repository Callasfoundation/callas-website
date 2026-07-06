import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { partners } from "@/data/content";

export const Route = createFileRoute("/_public/partners")({
  head: () => ({ meta: [{ title: "Partners — Callas Foundation" }, { name: "description", content: "Government, justice and civil society partners of Callas Foundation." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Working Alongside" title="Our partners." crumbs={[{ label: "Partners" }]} />
      <section className="bg-white"><div className="mx-auto max-w-5xl px-4 py-16 grid gap-4 sm:grid-cols-2">
        {partners.map((p) => <div key={p} className="rounded-xl border border-slate-200 bg-canvas p-6 font-display font-semibold text-ink">{p}</div>)}
      </div></section>
    </>
  ),
});