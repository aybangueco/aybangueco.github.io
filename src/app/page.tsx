import { Button } from "@/components/ui/button";
import { Mail, Coffee } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-3xl space-y-4">
        <p className="text-xs text-muted-foreground">
          $ cat ~/home/ivan/me.txt
        </p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Hello, I&apos;m Ivan 👋🏻
        </h1>
        <p className="text-sm text-muted-foreground">
          A passionate Software Developer based in the{" "}
          <strong>Philippines</strong> — I specialize in building and
          architecting modern web & mobile applications from scratch to
          deployment.
        </p>
      </div>

      <div className="pt-8 flex gap-3 flex-wrap">
        <a href="https://buymeacoffee.com/justineivat" target="_blank">
          <Button className="text-xs md:text-sm flex items-center gap-2">
            <Coffee size={16} />
            ./coffee.sh
          </Button>
        </a>
        <Link href="/contact">
          <Button className="text-xs md:text-sm flex items-center gap-2">
            <Mail size={16} />
            ./contact.sh
          </Button>
        </Link>
      </div>
    </section>
  );
}
