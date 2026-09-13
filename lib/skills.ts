export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "C", "C++", "C#", "TypeScript", "JavaScript", "SQL", "VHDL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "NestJS", "Django", "Flask", "GraphQL", "Prisma", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Git", "Linux", "CI/CD", "Supabase"],
  },
  {
    category: "Testing & Tools",
    items: ["Playwright", "Postman", "Jira"],
  },
  {
    category: "AI & Data",
    items: ["TensorFlow", "Pandas", "NumPy"],
  },
];
