export interface ProjectsProps {
  url: string;
  title: string;
  description: string;
  technologies: string[];
  repo_url: string;
  live_preview?: string;
}

export const projects: Array<ProjectsProps> = [
  {
    url: "/images/projects/plus-ultra.jpg",
    title: "Plus Ultra: Workout Tracker and Equipment Scanner",
    description:
      "A capstone project for our beneficiary Muscle Mechanic Fitness Gym. A mobile application that identifies workout equipments, helps users to track their progress, and get a personalized workout plan from trainers. ",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "Zustand",
      "Node JS",
      "Express JS",
      "PostgreSQL",
      "SQLite",
      "Prisma",
      "Drizzle",
      "Vitest",
      "Docker",
    ],
    repo_url: "https://www.github.com/bangueco/plus-ultra",
    live_preview: "https://github.com/bangueco/plus-ultra/releases/tag/v1.2.11",
  },
];
