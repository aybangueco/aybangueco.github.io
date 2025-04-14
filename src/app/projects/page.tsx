import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Plus Ultra",
    description: "A full stack fitness mobile application capstone project.",
    image: "/images/gymops.png",
    github: "https://github.com/bangueco/plus-ultra",
    live: "https://github.com/bangueco/plus-ultra/releases/tag/v1.2.13",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.JS",
      "Express.JS",
      "PostgreSQL/SQLite",
      "Docker",
    ],
  },
  {
    title: "Gym Ops",
    description:
      "A full stack web application for streamlining gym business related operations.",
    image: "/images/gymops.png",
    github: "https://github.com/soapermanwun/gym-ops",
    technologies: [
      "Sveltekit",
      "Tailwind CSS",
      "Shadcn",
      "TypeScript",
      "Golang",
      "Chi",
      "PostgreSQL",
      "SQLC",
      "Docker",
    ],
  },
  {
    title: "OJT Hours Tracker",
    description:
      "A simple full stack web application for tracking rendered hours by students in OJT.",
    image: "/images/student-toolkit.png",
    github: "https://github.com/soapermanwun/ojt-hours-tracker",
    live: "https://ojt-hours-tracker.vercel.app/",
    technologies: ["Next.js", "TailwindCSS", "Shadcn", "Supabase"],
  },
];

export default function Projects() {
  return (
    <section className="h-full px-4 py-10 pt-20">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <p className="text-xs text-muted-foreground">
            $ cat ~/home/ivan/projects.txt
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
          <p className="text-sm text-muted-foreground">
            A collection of things I've built — personal, academic, or just for
            fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-md bg-background border"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="hover:text-primary" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="hover:text-primary" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
