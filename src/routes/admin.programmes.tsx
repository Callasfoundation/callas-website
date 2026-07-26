import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/programmes")({
  head: () => ({ meta: [{ title: "Programmes — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: () => <ResourceCRUD resource="programmes" title="Programmes" fields={[
    { key: "title", label: "Title" },
    { key: "slug", label: "Slug (e.g. youth-mentorship, no spaces)" },
    { key: "short", label: "Short blurb (card description)" },
    { key: "startDate", label: "Start Date", type: "date" },
    { key: "imageUrl", label: "Image URL", type: "url" },
    { key: "videoUrl", label: "Video URL (optional)", type: "url" },
    { key: "description", label: "Full Description", type: "textarea" },
  ]} />,
});