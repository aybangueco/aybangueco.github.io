import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <main className="p-5 grid gap-5 justify-center items-center max-w-[80rem]">
      <section>
        <h1 className="text-3xl font-bold mb-4 text-primary">Projects</h1>
        <div>
          <p className="text-justify text-muted-foreground">
            A collection of projects I&apos;ve worked on throughout my academic
            journey and personal development. These include web applications,
            backend services, mobile apps, and tools built using technologies
            such as TypeScript, Node.js, React, React Native, Svelte, Go and
            Laravel/PHP. Each project showcases my growth as a developer and my
            passion for building practical and meaningful solutions.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 h-48 overflow-hidden">
                  <img
                    src={project.url}
                    alt={project.title}
                    className="w-full h-full object-cover p-3"
                  />
                </div>
                <div className="flex-1 p-6">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 py-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-0 pt-2 pb-0 flex justify-start gap-2">
                    <Button variant="outline" asChild>
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.url && (
                      <Button variant="outline" asChild>
                        <a
                          href={project.live_preview}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
