export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  url: string;
}

export interface Skill {
  name: string;
  category?: "frontend" | "backend" | "database" | "tools";
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}
