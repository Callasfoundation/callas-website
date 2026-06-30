import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { useResources } from "@/lib/store";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Callas Foundation" },
      { name: "description", content: "Free downloads, guides, and directories — protection orders, safety planning, Cape Flats help directory, and annual reports." },
      { property: "og:title", content: "Resources — Callas Foundation" },
      { property: "og:description", content: "Free guides, directories, and reports." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [resources] = useResources();
  return (
    <SiteLayout>
      <PageHero eyebrow="Resources" title={<>Tools you can use. <span className="text-white/80">For free.</span></>} subtitle="Plain-language guides, workbooks, and directories — built with and for the communities we serve." variant="blue" />
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="grid gap-4 md:grid-cols-2">
            {resources.map((r) => (
              <a key={r.id} href={r.url} className="group flex items-start gap-5 rounded-2xl border border-callas-line bg-callas-canvas p-6 transition hover:-translate-y-0.5 hover:border-callas-red">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-callas-red/10 text-callas-red transition group-hover:bg-callas-red group-hover:text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-callas-blue">{r.type}</div>
                  <div className="mt-1 font-display text-lg font-bold">{r.title}</div>
                  <p className="mt-1 text-sm text-callas-ink/70">{r.description}</p>
                </div>
                <Download className="mt-1 h-4 w-4 shrink-0 text-callas-ink/40 group-hover:text-callas-red" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
