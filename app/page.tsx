import type { Metadata } from "next";
import HomeLayout from "@/components/layouts/home";

export const metadata: Metadata = {
  title: "elevatr.in - Your Career is More Than a PDF",
  description:
    "Less guesswork. More proof. Build a Career Identity that actually shows what you bring to the table.",
};

export default function HomePage() {
  return <HomeLayout />;
}
