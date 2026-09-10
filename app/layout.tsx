import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--serif", weight: ["400", "500", "600"], display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--sans", weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "AuraLumia | Jennifer Olivia Kindereit", template: "%s | AuraLumia" },
  description: "Vedische Astrologie, Somatic Karma, Körperwissen und intuitive Symbolarbeit mit Jennifer Olivia Kindereit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body className={`${serif.variable} ${sans.variable}`}><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
