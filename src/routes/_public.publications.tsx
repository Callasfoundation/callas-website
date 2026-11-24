
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { FileText, Download, CalendarDays } from "lucide-react";
import { api } from "@/lib/api";

type Publication = {
  id: number;
  title: string;
  description: string | null;
  category: string;
  publishedDate: string;
  fileUrl: string;
  coverImageUrl: string | null;
};

export const Route = createFileRoute("/_public/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Callas Foundation" },
      {
        name: "description",
        content: "Reports, research and publications from Callas Foundation."
      }
    ]
  }),
  component: PublicationsPage,
});

function PublicationsPage() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.list<Publication>("Publications")
      .then(setPublications)
      .catch(() => setError("Unable to load publications. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Knowledge & Research"
        title="Our Publications."
        description="Explore reports, research and resources published by Callas Foundation."
        crumbs={[{ label: "Publications" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

          {loading && (
            <p className="text-muted-foreground">Loading publications...</p>
          )}

          {error && (
            <p className="text-red-600">{error}</p>
          )}

          {!loading && !error && publications.length === 0 && (
            <p className="text-muted-foreground">
              No publications available yet.
            </p>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {publications.map((publication, index) => (
              <Reveal key={publication.id} delay={index * 0.04}>
                <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">

                  {publication.coverImageUrl && (
                    <img
                      src={publication.coverImageUrl}
                      alt={publication.title}
                      className="h-48 w-full object-cover"
                    />
                  )}

                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                      {publication.category}
                    </span>

                    <h2 className="mt-2 font-display text-xl font-bold text-ink">
                      {publication.title}
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground">
                      {publication.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(publication.publishedDate).toLocaleDateString()}
                    </div>

                    <a
                      href={publication.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue/90 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      Read Publication
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
