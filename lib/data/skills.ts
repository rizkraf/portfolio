import { Skill } from "@/lib/types";

export const skills: Skill[] = [
  { name: "Typescript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Nuxt", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Nest.js", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Supabase", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
];

// Helper to get skills by category
export const getSkillsByCategory = (category: Skill["category"]) =>
  skills.filter((skill) => skill.category === category);

// Get all skill names as simple array (for backward compatibility)
export const skillNames = skills.map((skill) => skill.name);
