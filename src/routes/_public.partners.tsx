import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { api } from "@/lib/api";

type Partner = { id: number; name: string; logoUrl: string; website: string };

export const Route = createFileRoute("/_public/partners")({
  head: () => ({ meta: [{ title: "Partners — Callas Foundation" }, { name: "description", content: "Government, justice and civil society partners of Callas Foundation." }] }),
  component: PartnersPage,
});

function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.list<Partner>("partners").then(setPartners).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHeader eyebrow="Working Alongside" title="Our partners." crumbs={[{ label: "Partners" }]} />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          {loading && <p className="text-muted-foreground">Loading…</p>}
          {!loading && partners.length === 0 && <p className="text-muted-foreground">No partners listed yet.</p>}
          <div className="grid gap-4 sm:grid-cols-2">
            {partners.map((p) => {
              const card = (
                <div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-canvas p-6 hover:border-brand-red hover:shadow-md transition-all h-full">
                  {p.logoUrl ? (
                    <img src={p.logoUrl} alt={p.name} className="h-12 w-12 object-contain shrink-0" />
                  ) : (
                    <div className="h-12 w-12 shrink-0 rounded-lg bg-brand-blue/10" />
                  )}
                  <div className="min-w-0">
                    <div className="font-display font-semibold text-ink group-hover:text-brand-red truncate">{p.name}</div>
                    {p.website && <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><ExternalLink className="h-3 w-3" /> Visit site</div>}
                  </div>
                </div>
              );
              return p.website ? (
                <a key={p.id} href={p.website} target="_blank" rel="noopener noreferrer">{card}</a>
              ) : (
                <div key={p.id}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}