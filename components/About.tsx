"use client";

import { Reveal } from "@/components/Reveal";

export default function About() {

  const skills = [
    "Typescript",
    "React",
    "Vue.js",
    "Nuxt",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Nest.js",
    "MySQL",
    "PostgreSQL",
    "Supabase",
    "Redis",
    "Git",
    "Docker",
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto py-32 px-6">
      <Reveal>
        <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter mb-20">
          ABOUT <span className="text-accent">ME</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-8">
          <Reveal delay={0.2}>
            <p className="text-2xl md:text-4xl font-medium leading-tight mb-12">
              I am a software engineer with a passion for crafting robust and scalable web applications. I thrive on building end-to-end solutions that are both functional and performant.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Reveal delay={0.3}>
                <h3 className="text-xl font-bold mb-6 text-accent">EXPERIENCE</h3>
                <ul className="space-y-8">
                  <li>
                    <h4 className="text-2xl font-bold">FRONTEND ENGINEER</h4>
                    <p className="text-white/60">Roketin / Sep 2022 - Sep 2025</p>
                    <p className="mt-2 text-white/80">Building and maintaining frontend applications using React, Vue.js, and Nuxt.js.</p>
                  </li>
                </ul>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.4}>
                <h3 className="text-xl font-bold mb-6 text-accent">EDUCATION</h3>
                <ul className="space-y-8">
                  <li>
                    <h4 className="text-2xl font-bold">SOFTWARE ENGINEERING</h4>
                    <p className="text-white/60">SMK Pusdikhubad / 2018 - 2021</p>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-12">
           <Reveal delay={0.5}>
             <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <span className="block text-6xl font-bold text-accent mb-2">3+</span>
                <span className="text-lg font-medium">YEARS OF EXPERIENCE</span>
             </div>
           </Reveal>
           <Reveal delay={0.7}>
             <div>
                <h3 className="text-xl font-bold mb-6 text-accent">SKILLS</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
             </div>
           </Reveal>
        </div>
      </div>
    </section>
  );
}
