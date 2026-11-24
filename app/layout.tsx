import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "AuraLumia® | Jennifer Olivia Kindereit", template: "%s | AuraLumia®" },
  description: "Vedische Astrologie, Somatic Karma®, Körperwissen und intuitive Symbolarbeit mit Jennifer Olivia Kindereit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
