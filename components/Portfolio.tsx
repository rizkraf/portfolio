"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

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
                <h3 className="text-3xl md:text-6xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-300">
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
  );
}
