import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/posts")({
  head: () => ({ meta: [{ title: "Posts — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  // src/routes/admin.posts.tsx

component: () => <ResourceCRUD resource="news" title="News Posts" fields={[
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "author", label: "Author" },
  { key: "publishedDate", label: "Published Date", type: "date" },
  { key: "imageUrl", label: "Image URL", type: "image" },
  { key: "excerpt", label: "Excerpt", type: "textarea" },
  { key: "body", label: "Body", type: "textarea" },
]} />,
});
