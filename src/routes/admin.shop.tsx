import { createFileRoute } from "@tanstack/react-router";
import { ResourceCRUD } from "@/components/admin/ResourceCRUD";

export const Route = createFileRoute("/admin/shop")({
  head: () => ({ meta: [{ title: "Shop — Callas Admin" }, { name: "robots", content: "noindex,nofollow" }] }),
  component: () => <ResourceCRUD resource="products" title="Shop Products" fields={[
    { key: "name", label: "Product name" },
    { key: "price", label: "Price (e.g. R150)" },
    { key: "imageUrl", label: "Image URL", type: "url" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "purchaseUrl", label: "Buy link (optional — leave blank to use WhatsApp enquiry)", type: "url" },
  ]} />,
});