"use client";

import { Reveal } from "@/components/Reveal";
import { skillNames } from "@/lib/data/skills";
import { experiences, education } from "@/lib/data/experience";

export default function About() {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;

  return (
    <section id="about" className="w-full max-w-7xl mx-auto py-20 md:py-32 px-6">
      <Reveal>
        <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter mb-12 md:mb-20">
          ABOUT <span className="text-accent">ME</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-8">
          <Reveal delay={0.2}>
            <p className="text-2xl md:text-4xl font-medium leading-tight mb-12">
              I am a full stack developer with passion for creating web applications that are not only functional but also provide an exceptional user experience. I specialize in building responsive, high-performance applications using modern technologies.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mb-12">
              <a
                href={resumeUrl}
                target="_blank"
                className="inline-block px-8 py-4 border border-white/20 rounded-full text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Reveal delay={0.3}>
                <h3 className="text-xl font-bold mb-6 text-accent">EXPERIENCE</h3>
                <ul className="space-y-8">
                  {experiences.map((exp) => (
                    <li key={exp.company}>
                      <h4 className="text-2xl font-bold">{exp.title}</h4>
                      <p className="text-white/60">{exp.company} / {exp.period}</p>
                      <p className="mt-2 text-white/80">{exp.description}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.4}>
                <h3 className="text-xl font-bold mb-6 text-accent">EDUCATION</h3>
                <ul className="space-y-8">
                  {education.map((edu) => (
                    <li key={edu.institution}>
                      <h4 className="text-2xl font-bold">{edu.degree}</h4>
                      <p className="text-white/60">{edu.institution} / {edu.period}</p>
                    </li>
                  ))}
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
                  {skillNames.map((skill) => (
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
