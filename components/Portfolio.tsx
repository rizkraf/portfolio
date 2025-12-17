"use client";

import Link from "next/link";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full max-w-7xl mx-auto py-20 md:py-32 px-6">
      <Reveal>
        <h2 className="text-[12vw] md:text-[10vw] leading-[0.8] font-bold tracking-tighter mb-12 md:mb-20">
          PERSONAL <span className="text-accent">WORK</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.id} width="100%" delay={index * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image?: string;
    url: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useMouseGlow();

  return (
    <Link
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-2xl bg-white/5 transition-all duration-500"
      style={{
        background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
      }}
    >
      {/* Cursor-following border glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "var(--mouse-glow, transparent)",
        }}
      />
      
      {/* Inner card content with background to create border effect */}
      <div className="relative m-[1px] rounded-2xl bg-[#0a0a0a] overflow-hidden">
        {/* Project Image */}
        {project.image ? (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        ) : (
          <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
            <span className="text-6xl font-bold text-accent/30">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <svg
              className="w-5 h-5 text-white/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

function useMouseGlow() {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ref.current.style.setProperty(
      "--mouse-glow",
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(204, 255, 0, 0.6), transparent 40%)`
    );
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--mouse-glow", "transparent");
  };

  // Attach event handlers to the ref
  const callbackRef = (node: HTMLAnchorElement | null) => {
    if (ref.current) {
      ref.current.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
      ref.current.removeEventListener("mouseleave", handleMouseLeave);
    }

    ref.current = node;

    if (node) {
      node.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
      node.addEventListener("mouseleave", handleMouseLeave);
    }
  };

  return callbackRef;
}
