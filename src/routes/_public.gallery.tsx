import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { uploadedPhotos } from "@/data/content";
import { api } from "@/lib/api";

type GalleryItem = { id: string; imageUrl: string; caption: string; category: string; mediaType: "image" | "video" };

export const Route = createFileRoute("/_public/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Callas Foundation" }, { name: "description", content: "Moments from the Callas Foundation on the Cape Flats." }] }),
  component: GalleryPage,
});

function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { api.list<GalleryItem>("gallery").then(setItems).catch(() => {}).finally(() => setLoading(false)); }, []);

  const categories = Array.from(new Set(items.map((i) => i.category || "Uncategorised"))).sort();

  return (
    <>
      <PageHeader eyebrow="In Pictures" title="Moments from the Cape Flats." crumbs={[{ label: "Gallery" }]} image={uploadedPhotos[2]} />
      <section className="bg-canvas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          {loading && <p className="text-muted-foreground">Loading…</p>}
          {!loading && items.length === 0 && <p className="text-muted-foreground">No gallery items yet.</p>}

          {categories.map((cat, ci) => (
            <div key={cat} className="mb-16 last:mb-0">
              <Reveal delay={ci * 0.05}>
                <h2 className="font-display text-2xl font-bold text-ink mb-6">{cat}</h2>
              </Reveal>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
                {items.filter((i) => (i.category || "Uncategorised") === cat).map((item, i) => (
                  <Reveal key={item.id} delay={(i % 6) * 0.04}>
                    <div className="break-inside-avoid overflow-hidden rounded-xl border border-slate-200">
                      {item.mediaType === "video" ? (
                        <video src={item.imageUrl} controls className="w-full h-auto" />
                      ) : (
                        <img src={item.imageUrl} alt={item.caption} loading="lazy" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                      )}
                      {item.caption && <p className="p-2 text-xs text-muted-foreground">{item.caption}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}