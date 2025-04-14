import { Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="flex justify-center items-center px-4 py-10 h-full pt-20">
      <div className="max-w-xl w-full space-y-6 text-center">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            $ open ~/home/ivan/contact.txt
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's Connect
          </h1>
          <p className="text-sm text-muted-foreground">
            Interested in collaborating or working together? Feel free to reach
            out through any of my socials below. I&apos;ve chosen not to display
            my email publicly to avoid spam. Thank you for understanding.
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/soapermanwun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm"
            >
              <Github size={16} />
              GitHub
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/justineivangueco/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
