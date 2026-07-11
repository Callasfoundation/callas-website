import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/impact")({
  head: () => ({ meta: [{ title: "Impact — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: () => <ResourceCRUD resource="impact" title="Impact Metrics" fields={[
    { key: "label", label: "Label" },
    { key: "value", label: "Value (number)" },
    { key: "suffix", label: "Suffix (e.g. +)" },
    { key: "sort", label: "Sort order" },
  ]} />,
});