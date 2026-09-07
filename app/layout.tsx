import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Macdonald Nnadi | Software Engineer",
  description:
    "Computer Engineering student at the University of Waterloo and software engineer building reliable full-stack systems, healthcare platforms, and developer tooling. Incoming SWE Intern at TD.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
