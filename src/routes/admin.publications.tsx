
import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Callas Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),

  component: () => (
    <ResourceCRUD
      resource="Publications"
      title="Publications"
      fields={[
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
        {
          key: "publishedDate",
          label: "Publication Date",
          type: "date",
        },
        {
          key: "description",
          label: "Description",
          type: "textarea",
        },
        {
          key: "fileUrl",
          label: "Publication Document (PDF/DOC)",
          type: "file",
        },
        {
          key: "coverImageUrl",
          label: "Cover Image",
          type: "image",
        },
      ]}
    />
  ),
});
