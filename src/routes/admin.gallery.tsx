import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  // src/routes/admin.gallery.tsx
component: () => <ResourceCRUD resource="gallery" title="Gallery Images" fields={[
  { key: "imageUrl", label: "Image URL", type: "url" },
  { key: "caption", label: "Caption" },
]} />,
});