import techStack from "@/lib/techstack";
import Image from "next/image";

export default function About() {
  return (
    <main className="grid gap-5 justify-center items-center max-w-[80rem] p-5">
      <section>
        <h1 className="text-3xl font-bold mb-4 text-primary">About Me</h1>
        <div>
          <p className="text-justify text-muted-foreground">
            A self motivated Software Developer and aspiring DevOps based from
            the Philippines, specializing in building web and mobile
            applications from scratch. I continuously refine my skills by
            developing personal projects and self studying during my free time.
            With a strong foundation in full-stack and mobile development, I
            adapt to different environments, embrace challenges, and eagerly
            learn new things every day to stay up-to-date with industry trends
            and standards.
          </p>
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-4 text-primary">
          Technical Skills
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-lg p-3 flex flex-col justify-center items-center hover:bg-neutral-800/50 transition cursor-pointer hover:text-slate-200"
            >
              <Image
                width={0}
                height={0}
                src={tech.src}
                alt={tech.alt}
                className="w-8 h-8 mb-2"
              />
              <span className="text-xs md:text-sm text-center text-muted-foreground">
                {tech.alt}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-4 text-primary">Experience</h1>
        <div className="space-y-6">
          <div className="border p-3 md:p-4 rounded-2xl bg-card flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Image
                className="rounded-full w-12 h-12 self-center sm:self-auto"
                width={50}
                height={50}
                src={`/images/work/pgo.jpg`}
                alt="me"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-md font-semibold">
                  The Bunker - Provincial Information Technology Office
                </h2>
                <p className="text-xs text-muted-foreground">
                  Full Stack Developer Intern
                </p>
              </div>
            </div>
            <p className="text-sm text-center sm:text-right mt-2 sm:mt-0">
              Feb 2025 - Present
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-4 text-primary">Education</h1>
        <div className="space-y-6">
          <div className="border p-3 md:p-4 rounded-2xl bg-card flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Image
                className="rounded-full w-12 h-12 self-center sm:self-auto"
                width={50}
                height={50}
                src={`/images/school/eastwoods.jpg`}
                alt="me"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-md font-semibold">
                  Eastwoods Professional College of Science and Technology
                </h2>
                <p className="text-xs text-muted-foreground">
                  Bachelor of Science Information Technology
                </p>
              </div>
            </div>
            <p className="text-sm text-center sm:text-right mt-2 sm:mt-0">
              Sep 2021 - Present
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
