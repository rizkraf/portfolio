import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rizkyrafi.dev"), // Replace with actual domain when deployed
  title: "Rizky Rafi | Software Engineer",
  description: "Portfolio of Rizky Rafi, a software engineer specializing in bold and experimental web experiences.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "Portfolio", "Creative Developer"],
  authors: [{ name: "Rizky Rafi" }],
  creator: "Rizky Rafi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Rizky Rafi | Software Engineer",
    description: "Portfolio of Rizky Rafi, a software engineer specializing in bold and experimental web experiences.",
    siteName: "Rizky Rafi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizky Rafi | Software Engineer",
    description: "Portfolio of Rizky Rafi, a software engineer specializing in bold and experimental web experiences.",
    creator: "@rizkyrafi",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navigation />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
