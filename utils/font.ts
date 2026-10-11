import { Montserrat, Outfit } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const mirano = localFont({
  src: "../assets/fonts/MiranoExtendedFreebie-Light.ttf",
  variable: "--font-mirano",
  display: "swap",
});

export const trimod = localFont({
  src: "../assets/fonts/TRIMOD.otf",
  variable: "--font-trimod",
  display: "swap",
});

export const unifix = localFont({
  src: "../assets/fonts/UnifixSPDemo.otf",
  variable: "--font-unifix",
  display: "swap",
});

export const veganDays = localFont({
  src: "../assets/fonts/Vegan Days.ttf",
  variable: "--font-vegan-days",
  display: "swap",
});
