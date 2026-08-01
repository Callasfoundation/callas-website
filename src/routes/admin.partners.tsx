import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/partners")({
  head: () => ({ meta: [{ title: "Partners — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: () => <ResourceCRUD resource="partners" title="Partners" fields={[
    { key: "name", label: "Name" },
    { key: "logoUrl", label: "Logo URL", type: "image" },
    { key: "website", label: "Website", type: "url" },
  ]} />,
});