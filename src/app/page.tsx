import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-3xl space-y-4">
        <p className="text-xs text-muted-foreground">
          $ cat ~/home/ivan/me.txt
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hello, I'm Ivan 👋🏻
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          A passionate Software Developer based in the{" "}
          <strong>Philippines</strong> — I specialize in building and
          architecting modern web & mobile applications from scratch to
          deployment.
        </p>
      </div>

      <div className="pt-8 flex gap-3 flex-wrap">
        <a
          href="https://github.com/soapermanwun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="text-xs md:text-sm flex items-center gap-2"
          >
            <Github size={16} />
            ./github.sh
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/justineivangueco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="text-xs md:text-sm flex items-center gap-2"
          >
            <Linkedin size={16} />
            ./linkedin.sh
          </Button>
        </a>
        <a href="/contact">
          <Button className="text-xs md:text-sm flex items-center gap-2">
            <Mail size={16} />
            ./contact.sh
          </Button>
        </a>
      </div>
    </section>
  );
}
