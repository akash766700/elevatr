import type { Metadata } from "next";
import { montserrat, outfit, mirano, trimod, unifix, veganDays } from "@/utils/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "elevatr.in - Your Career is More Than a PDF",
  description: "Less guesswork. More proof. Build a Career Identity that actually shows what you bring to the table.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${outfit.variable} ${mirano.variable} ${trimod.variable} ${unifix.variable} ${veganDays.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
