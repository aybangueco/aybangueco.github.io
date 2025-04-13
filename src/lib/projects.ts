export type ProjectsProps = {
  url: string;
  title: string;
  description: string;
  technologies: string[];
  repo_url: string;
  live_preview?: string;
};

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
    live_preview: "https://github.com/bangueco/plus-ultra/releases/tag/v1.2.13",
  },
  {
    url: "/images/projects/ojt-hours-tracker.png",
    title: "OJT Hours Tracker",
    description:
      "A simple web application that i developed during my internship to help my fellow classmates/students on tracking their own rendered hours in OJT.",
    technologies: ["Next.JS", "Tailwind CSS", "Supabase"],
    repo_url: "https://github.com/soapermanwun/ojt-hours-tracker",
    live_preview: "https://ojt-hours-tracker.vercel.app/",
  },
];
