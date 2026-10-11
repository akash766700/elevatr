import type { Metadata } from "next";
import ProductLayout from "@/components/layouts/product";

export const metadata: Metadata = {
  title: "Product - elevatr.in",
  description: "Discover Elevatr product features and innovations.",
};

export default function ProductPage() {
  return <ProductLayout />;
}
