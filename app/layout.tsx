import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuraLumia | Somatic Karma by Jennifer Kindereit",
  description: "Vedische Astrologie, Archetypen und Körperweisheit: Entdecke den Somatic Karma Archetype Navigator, das Transit Orakel und das Somatic Karma Tarot.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
