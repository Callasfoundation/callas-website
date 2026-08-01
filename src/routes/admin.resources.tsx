import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/resources")({
  head: () => ({ meta: [{ title: "Resources — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: () => <ResourceCRUD resource="resources" title="Resources" fields={[
    { key: "title", label: "Title" },
    { key: "type", label: "Type (e.g. PDF)" },
    { key: "url", label: "Download URL", type: "image" },
    { key: "description", label: "Description", type: "textarea" },
  ]} />,
});