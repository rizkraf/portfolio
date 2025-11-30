"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col justify-center min-h-screen px-6 pt-20">
      <Reveal>
        <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter mix-blend-difference text-center md:text-left">
          SOFTWARE <br />
          <span className="text-accent">ENGINEER</span>
        </h1>
      </Reveal>
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <Reveal delay={0.4}>
          <p className="text-xl md:text-2xl max-w-xl font-medium leading-relaxed">
            I build digital experiences that merge <span className="text-accent">technical precision</span> with <span className="text-accent">artistic expression</span>.
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <Link
            href="#portfolio"
            className="group flex items-center gap-4 text-lg font-bold tracking-tight hover:text-accent transition-colors"
          >
            VIEW PROJECTS
            <span className="block w-12 h-[2px] bg-current group-hover:w-20 transition-all duration-300" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
