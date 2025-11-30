"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col justify-center lg:min-h-screen px-6 pt-32 lg:pt-20">
      <Reveal>
        <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] md:leading-[0.8] font-bold tracking-tighter mix-blend-difference text-left">
          RIZKY RAFI <br />
          <span className="text-accent">AZHARA</span>
        </h1>
      </Reveal>
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <Reveal delay={0.4}>
          <p className="text-xl md:text-2xl max-w-xl font-medium leading-relaxed">
            I craft seamless digital solutions, blending <span className="text-accent">front-end elegance</span> with <span className="text-accent">back-end robustness</span>.
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-4 border border-white/20 rounded-full text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            DOWNLOAD RESUME
          </a>
        </Reveal>
      </div>
    </section>
  );
}
