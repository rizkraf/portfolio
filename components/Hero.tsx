"use client";

import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col justify-center lg:min-h-screen px-6 pt-32 lg:pt-0">
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
          <Link
            href="#portfolio"
            className="group flex items-center gap-4 text-lg font-bold tracking-tight hover:text-accent transition-colors"
          >
            VIEW WORKS
            <span className="block w-12 h-[2px] bg-current group-hover:w-20 transition-all duration-300" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
