import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/events")({
  head: () => ({ meta: [{ title: "Events — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  // src/routes/admin.events.tsx
component: () => <ResourceCRUD resource="events" title="Events" fields={[
  { key: "title", label: "Title" },
  { key: "date", label: "Date", type: "date" },
  { key: "time", label: "Time" },
  { key: "location", label: "Location" },
  { key: "imageUrl", label: "Image URL", type: "url" },
  { key: "description", label: "Description", type: "textarea" },
]} />,
});