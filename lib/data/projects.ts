import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Next.js SaaS Starter Kit",
    description: "Next.js SaaS Starter Kit with Bun, shadcn/ui, Better Auth, Prisma, and Midtrans",
    image: "/project-nextjs-saas-starter-kit.png",
    url: "https://github.com/rizkraf/nextjs-saas-starter-kit",
  },
  {
    id: 2,
    title: "TodoRealm",
    description:
      "Task management app with gamification features built with React Router v7 and Supabase",
    image: "/project-todorealm.png",
    url: "https://www.todorealm.app",
  },
  {
    id: 3,
    title: "Aksarify",
    description:
      "Indonesian reading comprehension web app using Next.js, Prisma, and PostgreSQL",
    image: "/project-aksarify.png",
    url: "https://www.aksarify.xyz",
  },
  {
    id: 4,
    title: "Invoisy",
    description: "Client-side invoicing app built with Nuxt and Nuxt UI",
    image: "/project-invoisy.png",
    url: "https://invoisy.netlify.app",
  },
  {
    id: 5,
    title: "Quran App",
    description: "Quran reading web app using Vue.js and Tailwind CSS",
    url: "https://github.com/rizkraf/quran-web",
    image: "/project-quran.png",
  },
];
