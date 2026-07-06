import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { galleryImages, uploadedPhotos } from "@/data/content";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export const Route = createFileRoute("/_public/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Callas Foundation" }, { name: "description", content: "Moments from the Callas Foundation on the Cape Flats." }] }),
  component: () => {
    const [uploads, setUploads] = useState<{ id: string; url: string; caption?: string }[]>([]);
    useEffect(() => { api.list<{ id: string; url: string; caption?: string }>("gallery").then(setUploads).catch(() => {}); }, []);
    const images = [...uploads.map((u) => u.url), ...galleryImages];
    return (
      <>
        <PageHeader eyebrow="In Pictures" title="Moments from the Cape Flats." crumbs={[{ label: "Gallery" }]} image={uploadedPhotos[2]} />
        <section className="bg-canvas"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {images.map((src, i) => (
            <Reveal key={i} delay={(i % 6) * 0.04}>
              <div className="break-inside-avoid overflow-hidden rounded-xl border border-slate-200"><img src={src} alt="" loading="lazy" className="w-full h-auto hover:scale-105 transition-transform duration-700" /></div>
            </Reveal>
          ))}
        </div></section>
      </>
    );
  },
});