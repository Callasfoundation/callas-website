import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/team")({
  head: () => ({ meta: [{ title: "Team — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: () => <ResourceCRUD resource="team" title="Team Members" fields={[
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "email", label: "Email" },
    { key: "imageUrl", label: "Photo URL", type: "image" },
    { key: "bio", label: "Bio", type: "textarea" },
  ]} />,
});