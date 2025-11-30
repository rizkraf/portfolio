"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useState, useActionState } from "react";
import { sendEmail } from "./actions";

const projects = [
  {
    id: 1,
    title: "E-COMMERCE PLATFORM",
    category: "Development",
    year: "2024",
    description: "A headless Shopify solution built with Next.js 14.",
    image: "/project-ecommerce.png",
  },
  {
    id: 2,
    title: "FINTECH DASHBOARD",
    category: "Design & Dev",
    year: "2023",
    description: "Real-time financial data visualization for a fintech startup.",
    image: "/project-fintech.png",
  },
  {
    id: 3,
    title: "ART GALLERY",
    category: "Creative Coding",
    year: "2023",
    description: "Immersive 3D gallery experience using Three.js.",
    image: "/project-art-gallery.png",
  },
  {
    id: 4,
    title: "AI WRITING ASSISTANT",
    category: "AI Integration",
    year: "2022",
    description: "GPT-4 powered writing tool for content creators.",
    image: "/project-ai-writing.png",
  },
];

export default function Home() {
  const [state, action, isPending] = useActionState(sendEmail, null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
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

      {/* About Section */}
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
                I am a software engineer with a passion for building digital products that are not only functional but also visually compelling. I believe that code is a medium for art.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Reveal delay={0.3}>
                  <h3 className="text-xl font-bold mb-6 text-accent">EXPERIENCE</h3>
                  <ul className="space-y-8">
                    <li>
                      <h4 className="text-2xl font-bold">SENIOR ENGINEER</h4>
                      <p className="text-white/60">Tech Corp / 2022 - Present</p>
                      <p className="mt-2 text-white/80">Leading frontend architecture and design system development.</p>
                    </li>
                    <li>
                      <h4 className="text-2xl font-bold">WEB DEVELOPER</h4>
                      <p className="text-white/60">Creative Agency / 2020 - 2022</p>
                      <p className="mt-2 text-white/80">Built award-winning websites for global brands.</p>
                    </li>
                  </ul>
                </Reveal>
              </div>

              <div>
                <Reveal delay={0.4}>
                  <h3 className="text-xl font-bold mb-6 text-accent">EDUCATION</h3>
                  <ul className="space-y-8">
                    <li>
                      <h4 className="text-2xl font-bold">BS COMPUTER SCIENCE</h4>
                      <p className="text-white/60">University of Technology / 2016 - 2020</p>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-12">
             <Reveal delay={0.5}>
               <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <span className="block text-6xl font-bold text-accent mb-2">05+</span>
                  <span className="text-lg font-medium">YEARS OF EXPERIENCE</span>
               </div>
             </Reveal>
             <Reveal delay={0.6}>
               <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <span className="block text-6xl font-bold text-accent mb-2">50+</span>
                  <span className="text-lg font-medium">PROJECTS DELIVERED</span>
               </div>
             </Reveal>
             <Reveal delay={0.7}>
               <div>
                  <h3 className="text-xl font-bold mb-6 text-accent">SKILLS</h3>
                  <div className="flex flex-wrap gap-3">
                    {["React", "Next.js", "TypeScript", "Node.js", "WebGL", "Three.js", "TailwindCSS", "PostgreSQL"].map((skill) => (
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

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full max-w-7xl mx-auto py-32 px-6">
        <Reveal>
          <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter mb-20">
            SELECTED <span className="text-accent">WORK</span>
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <Reveal key={project.id} width="100%" delay={index * 0.1}>
              <div
                className="group relative border-t border-white/20 py-12 flex flex-col md:flex-row justify-between items-start md:items-center overflow-hidden transition-all duration-500 hover:py-24"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-2 pointer-events-none">
                  <span className="text-sm font-mono text-accent">{project.category} — {project.year}</span>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="relative z-10 mt-4 md:mt-0 max-w-md text-white/60 group-hover:text-white transition-colors pointer-events-none">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/20" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-7xl mx-auto py-32 px-6">
        <Reveal>
          <h2 className="text-[10vw] leading-[0.8] font-bold tracking-tighter mb-20">
            LET'S <span className="text-accent">TALK</span>
          </h2>
        </Reveal>

        <form action={action} className="flex flex-col gap-12 max-w-4xl">
          <Reveal delay={0.2}>
            <div className="group relative">
              <label htmlFor="name" className="block text-sm font-mono text-white/60 mb-2">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="YOUR NAME"
                className="w-full bg-transparent border-b border-white/20 py-4 text-4xl md:text-6xl font-bold tracking-tighter placeholder:text-white/10 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="group relative">
              <label htmlFor="email" className="block text-sm font-mono text-white/60 mb-2">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="YOUR@EMAIL.COM"
                className="w-full bg-transparent border-b border-white/20 py-4 text-4xl md:text-6xl font-bold tracking-tighter placeholder:text-white/10 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="group relative">
              <label htmlFor="message" className="block text-sm font-mono text-white/60 mb-2">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="TELL ME ABOUT YOUR PROJECT..."
                className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-medium placeholder:text-white/10 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={isPending}
                className="self-start mt-8 px-12 py-6 bg-white text-black text-xl font-bold tracking-tight hover:bg-accent hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "SENDING..." : "SEND MESSAGE"}
              </button>
              {state?.error && (
                <p className="text-red-500 font-mono text-sm">{state.error}</p>
              )}
              {state?.success && (
                <p className="text-green-500 font-mono text-sm">MESSAGE SENT SUCCESSFULLY!</p>
              )}
            </div>
          </Reveal>
        </form>
      </section>
    </main>
  );
}
