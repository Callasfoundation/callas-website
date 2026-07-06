import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { FileText, Download } from "lucide-react";
import { resources } from "@/data/content";

export const Route = createFileRoute("/_public/resources")({
  head: () => ({ meta: [{ title: "Resources — Callas Foundation" }, { name: "description", content: "Safety planning, legal rights, referral directory and more." }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Toolkit" title="Resources & downloads." description="Practical tools you can share with a survivor, a school or a colleague." crumbs={[{ label: "Resources" }]} />
      <section className="bg-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 grid gap-4 md:grid-cols-2">
        {resources.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.04}>
            <a href={r.href} className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-red group-hover:text-white transition-colors"><FileText className="h-5 w-5" /></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2"><h3 className="font-display text-lg font-bold text-ink">{r.title}</h3><span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-muted-foreground">{r.type}</span></div>
                <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
              </div>
              <Download className="h-5 w-5 text-muted-foreground group-hover:text-brand-red" />
            </a>
          </Reveal>
        ))}
      </div></section>
    </>
  ),
});