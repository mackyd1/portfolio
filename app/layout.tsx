import type { Metadata } from "next";
import { Syne, Lora, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Macdonald Nnadi | Software Engineer",
  description:
    "Computer Engineering student at the University of Waterloo and software engineer building reliable full-stack systems, healthcare platforms, and developer tooling. Currently a SWE Intern at TD.",
  keywords: [
    "Macdonald Nnadi",
    "software engineer",
    "full stack developer",
    "University of Waterloo",
    "computer engineering",
    "portfolio",
  ],
  authors: [{ name: "Macdonald Nnadi" }],
  openGraph: {
    title: "Macdonald Nnadi | Software Engineer",
    description:
      "Computer Engineering student at Waterloo building reliable full-stack systems, healthcare platforms, and developer tooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${lora.variable} ${dmMono.variable} font-serif`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
