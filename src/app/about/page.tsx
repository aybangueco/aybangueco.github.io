export default function About() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-10 px-4 pt-20">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <p className="text-xs text-muted-foreground pb-1">
            $ cat ~/home/ivan/about.txt
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Justine Ivan Gueco
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-2">
            Web & Mobile Developer • BSIT Student • Intern
          </p>
        </div>

        <div className="bg-muted/50 rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">👋 About Me</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            I'm a passionate developer currently completing my Bachelor of
            Science in Information Technology. I specialize in building
            responsive and user-friendly web and mobile applications. I’m
            currently an intern gaining real-world experience while continuing
            to build personal projects and improve my skills through hands-on
            development.
          </p>
        </div>

        <div className="bg-muted/50 rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">🛠 Technical Skills</h2>
          <ul className="text-sm md:text-base text-muted-foreground list-disc list-inside space-y-1">
            <li>
              Programming Languages: Golang, TypeScript/JavaScript, Java, C#
            </li>
            <li>
              Frontend: Sveltekit, React, Next.JS, Tailwind CSS, Shadcn,
              Bootstrap
            </li>
            <li>
              Backend: Node.JS, Express.JS, Chi, Gin, PostgreSQL/SQLite, MongoDB
            </li>
            <li>Tools & DevOps: Postman, Docker, Linux, Bash, Git, CI/CD</li>
          </ul>
        </div>

        <div className="bg-muted/50 rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">💼 Work Experience</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            <strong>
              Full Stack Developer Intern – The Bunker (Provincial Information
              Technology Office)
            </strong>
            <br />
            <em>Feb 2025 - Present</em>
            <br />
            <br />
            Participating in the development of internal government backend
            api&apos;s and client-facing applications. Responsible for adding
            and refactoring some features while collaborating with other
            developers.
          </p>
        </div>

        <div className="bg-muted/50 rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">🎓 Education</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            <span className="font-bold">
              Eastwoods Professional College of Science and Technology
            </span>
            <br />
            Bachelor of Science in Information Technology
            <br />
            <span className="text-xs">Expected Graduation: 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
}
