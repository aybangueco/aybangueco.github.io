import Link from "next/link";
import {
  FaCode,
  FaPhoneSquare,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import techStack from "@/lib/tech-stack";
import { projects } from "@/lib/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 lg:px-24 grid lg:grid-cols-2 gap-12">
        {/* Left Side: Profile & Contact */}
        <div className="space-y-9 lg:sticky lg:top-12 self-start">
          <div className="bg-neutral-900 rounded-2xl p-8 border border-[#2A2A2A]">
            <div className="flex items-center space-x-6 mb-6">
              <Image
                className="h-16 w-16 lg:h-20 lg:w-20 rounded-full"
                width={100}
                height={100}
                src={`/images/me.jpg`}
                alt="My pfp"
              />
              <div>
                <h1 className="text-slate-200 text-xl md:text-2xl lg:text-3xl font-bold">
                  Justine Ivan Gueco
                </h1>
                <p className="text-xs md:text-base">Software Developer</p>
              </div>
            </div>
            <p className="mb-6 text-sm md:text-base">
              I specialize in building applications from scratch
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/soapermanwun"
                target="_blank"
                className="hover:bg-[#2A2A2A] p-2 rounded-full transition"
              >
                <FaGithub className=" hover:text-slate-200" size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/justineivangueco"
                target="_blank"
                className="hover:bg-[#2A2A2A] p-2 rounded-full transition"
              >
                <FaLinkedin className=" hover:text-slate-200" size={24} />
              </Link>
              <Link
                href="https://instagram.com/aybancaughtin4k"
                target="_blank"
                className="hover:bg-[#2A2A2A] p-2 rounded-full transition"
              >
                <FaInstagram className=" hover:text-slate-200" size={24} />
              </Link>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-neutral-900 rounded-2xl p-6 border border-[#2A2A2A]">
            <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center text-slate-200">
              <FaMapMarkerAlt className="mr-2 " /> Location
            </h2>
            <p className="text-sm md:text-base">Bataan, Philippines</p>

            <div className="border-t border-[#2A2A2A] my-4"></div>

            <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center text-slate-200">
              <FaEnvelope className="mr-2 " /> Contact
            </h2>
            <p className="text-sm md:text-base">
              Open for opportunities and collaboration. Don&apos;t hesitate to
              reach out to me at my LinkedIn. I don&apos;t provide my email here
              to avoid spam.
            </p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-12">
          {/* About Section */}
          <section
            id="about"
            className="bg-neutral-900 rounded-2xl p-8 border border-[#2A2A2A]"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 flex items-center text-slate-200">
              <FaUser className="mr-3 " /> About Me
            </h2>
            <div className="space-y-4">
              <p className="text-sm md:text-base">
                A self motivated aspiring software engineer and devops based
                from the Philippines, specializing in building web and mobile
                applications from scratch. I continuously refine my skills by
                developing personal projects and self studying during my free
                time.
              </p>
              <p className="text-sm md:text-base">
                With a strong foundation in full-stack and mobile development, I
                adapt to different environments, embrace challenges, and eagerly
                learn new things every day to stay up-to-date with industry
                trends and standards.
              </p>
            </div>
          </section>

          {/* Tech Skills */}
          <section
            id="skills"
            className="bg-neutral-900 rounded-2xl p-8 border border-[#2A2A2A]"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 flex items-center text-slate-200">
              <FaCode className="mr-3 " /> Technical Skills
            </h2>
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
                  <span className="text-xs md:text-sm text-center">
                    {tech.alt}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="bg-neutral-900 rounded-2xl p-8 border border-[#2A2A2A]"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 flex items-center text-slate-200">
              <FaBriefcase className="mr-3 " /> Featured Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#121212] rounded-lg p-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 text-slate-200">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#2A2A2A] text-xs md:text-sm px-2 py-1 rounded "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.repo_url}
                      target="_blank"
                      className="flex items-center text-xs md:text-sm  hover:text-slate-200 transition"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </Link>
                    <Link
                      href={project.live_preview || ""}
                      target="_blank"
                      className="flex items-center text-xs md:text-sm  hover:text-slate-200 transition"
                    >
                      <FaPhoneSquare className="mr-2" /> Live Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-slate-200 py-6 ">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Justine Ivan Gueco. Built with Next.js &
          Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
