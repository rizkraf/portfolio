"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "TodoRealm",
    year: "2025",
    description: "Task management app with gamification features built with React Router v7 and Supabase",
    image: "/project-todorealm.png",
    url: "https://www.todorealm.app",
  },
  {
    id: 2,
    title: "Aksarify",
    year: "2025",
    description: "Indonesian reading comprehension web app using Next.js, Prisma, and PostgreSQL",
    image: "/project-aksarify.png",
    url: "https://www.aksarify.xyz",
  },
  {
    id: 3,
    title: "Invoisy",
    year: "2025",
    description: "Client-side invoicing app built with Nuxt and Nuxt UI",
    image: "/project-invoisy.png",
    url: "https://invoisy.netlify.app",
  },
  {
    id: 4,
    title: "Zafitr",
    year: "2024",
    description: "Zakat fitrah management app with Next.js, tRPC, Prisma, and NextAuth",
    url: "https://github.com/rizkraf/zafitr",
  },
  {
    id: 5,
    title: "Quran App",
    year: "2022",
    description: "Quran reading web app using Vue.js and Tailwind CSS",
    url: "https://github.com/rizkraf/quran-web"
  }
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="w-full max-w-7xl mx-auto py-20 md:py-32 px-6">
      <Reveal>
        <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter mb-12 md:mb-20">
          PERSONAL <span className="text-accent">WORK</span>
        </h2>
      </Reveal>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <Reveal key={project.id} width="100%" delay={index * 0.1}>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative border-t border-white/20 py-12 flex flex-col md:flex-row justify-between items-start md:items-center overflow-hidden transition-all duration-500 hover:py-24 block"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
              >
                {
                  project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover object-top opacity-40"
                    />
                  )
                }
                <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2 pointer-events-none">
                <span className="text-sm font-mono text-accent">{project.year}</span>
                <h3 className="text-3xl md:text-6xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>
              <p className="relative z-10 mt-4 md:mt-0 max-w-md text-white/60 group-hover:text-white transition-colors pointer-events-none">
                {project.description}
              </p>
            </Link>
          </Reveal>
        ))}
        <div className="border-t border-white/20" />
      </div>
    </section>
  );
}

