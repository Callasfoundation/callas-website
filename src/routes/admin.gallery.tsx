import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: () => <ResourceCRUD resource="gallery" title="Gallery Images" fields={[
    { key: "url", label: "Image URL", type: "url" },
    { key: "caption", label: "Caption" },
  ]} />,
});