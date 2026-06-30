import { createFileRoute } from "@tanstack/react-router";
import { Upload } from "lucide-react";
import community from "@/assets/community-wide.jpg";
import volunteer from "@/assets/volunteer.jpg";
import kitchen from "@/assets/programme-kitchen.jpg";
import bbb from "@/assets/programme-bbb.jpg";
import justice from "@/assets/programme-justice.jpg";
import responders from "@/assets/programme-responders.jpg";
import counselling from "@/assets/programme-counselling.jpg";
import rights from "@/assets/programme-rights.jpg";

export const Route = createFileRoute("/admin/gallery")({
  component: GalleryAdmin,
});

const IMAGES = [
  { src: community, caption: "Community walk, Mitchells Plain" },
  { src: volunteer, caption: "Volunteers prepping the kitchen" },
  { src: kitchen, caption: "Daily meal service, Hanover Park" },
  { src: bbb, caption: "BBB Boys workshop" },
  { src: justice, caption: "Court support team" },
  { src: responders, caption: "First Responders training day" },
  { src: counselling, caption: "Trauma counselling room" },
  { src: rights, caption: "Human Rights Club session" },
];

function GalleryAdmin() {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-callas-red">Media</div>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-tight">Gallery</h1>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-callas-red px-4 py-2 text-xs font-bold text-white hover:bg-callas-red-dark">
          <Upload className="h-3.5 w-3.5" /> Upload images
        </button>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {IMAGES.map((img, i) => (
          <figure key={i} className="overflow-hidden rounded-xl border border-callas-line bg-white">
            <img src={img.src} alt={img.caption} className="aspect-square w-full object-cover" />
            <figcaption className="px-3 py-2 text-xs text-callas-ink/75">{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      <p className="text-xs text-callas-ink/50">
        Preview only. Wire <code className="rounded bg-callas-canvas px-1.5 py-0.5">GET /api/gallery</code> to load uploaded media.
      </p>
    </div>
  );
}
