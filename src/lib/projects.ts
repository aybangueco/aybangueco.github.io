type ProjectsType = {
  title: string;
  description: string;
  tech: Array<string>;
  image: string;
  github: string;
  live?: string;
};

const projects: Array<ProjectsType> = [
  {
    title: "Plus Ultra",
    description:
      "Developed a full stack fitness mobile application, that aims to help new gym goers on their fitness journey.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Express",
      "Node JS",
      "PostgreSQL",
      "SQLite",
    ],
    image: "/images/projects/plus-ultra.jpg",
    github: "https://www.github.com/bangueco/plus-ultra",
    live: "https://github.com/bangueco/plus-ultra/releases/tag/v1.2.13",
  },
  {
    title: "OJT Hours Tracker",
    description:
      "Developed a simple web application to help my fellow students/classmates on tracking their rendered hours on our OJT.",
    tech: ["Next.JS", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/images/projects/ojt-hours-tracker.png",
    github: "https://github.com/soapermanwun/ojt-hours-tracker",
    live: "https://ojt-hours-tracker.vercel.app/",
  },
  {
    title: "Gym Ops",
    description:
      "A personal project that aims to streamline the management of gym related operations.",
    tech: [
      "Sveltekit",
      "TypeScript",
      "Tailwind CSS",
      "Golang",
      "Chi",
      "PostgreSQL",
      "Docker",
    ],
    image: "/images/projects/ojt-hours-tracker.png",
    github: "https://www.github.com/bangueco/plus-ultra",
  },
];

export default projects;
