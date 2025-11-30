"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
