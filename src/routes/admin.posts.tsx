import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/posts")({
  head: () => ({ meta: [{ title: "Posts — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: () => <ResourceCRUD resource="posts" title="News Posts" fields={[
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date", type: "date" },
    { key: "excerpt", label: "Excerpt", type: "textarea" },
    { key: "body", label: "Body", type: "textarea" },
    { key: "image", label: "Image URL", type: "url" },
    { key: "author", label: "Author" },
  ]} />,
});
