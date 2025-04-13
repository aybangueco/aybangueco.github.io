"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import experience from "@/lib/experience";
import projects from "@/lib/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import techStack from "@/lib/techstack";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <main className="p-3">
      <section className="flex justify-center items-center min-h-screen">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="terminal-window max-w-3xl mx-auto"
        >
          <div className="terminal-header">
            <div className="terminal-button bg-red-500"></div>
            <div className="terminal-button bg-yellow-500"></div>
            <div className="terminal-button bg-green-500"></div>
          </div>
          <div className="p-6">
            <motion.div
              className="command-line mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              whoami
            </motion.div>
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Justine_Ivan_Gueco
              <span className="text-primary animate-blink">_</span>
            </motion.h1>
            <motion.div
              className="command-line mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              cat description.txt
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Software Developer | Aspiring DevOps
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              <Button
                variant="default"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="https://github.com" target="_blank">
                  ./linkedin.sh
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="https://github.com" target="_blank">
                  ./github.sh
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="command-line text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          cat ~/home/bangueco/experience.log
        </motion.div>
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="max-w-3xl mx-auto terminal-window"
          >
            <div className="terminal-header">
              <div className="terminal-button bg-red-500"></div>
              <div className="terminal-button bg-yellow-500"></div>
              <div className="terminal-button bg-green-500"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h3 className="text-md font-semibold">{job.company}</h3>
                <span className="text-primary text-sm">{job.period}</span>
              </div>
              <p className="text-muted-foreground mb-4 text-xs">
                {job.position}
              </p>
              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">→</span>
                    <span className="text-xs">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="command-line text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ls -la ~/home/bangueco/projects/
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="terminal-window"
            >
              <div className="terminal-header">
                <div className="terminal-button bg-red-500"></div>
                <div className="terminal-button bg-yellow-500"></div>
                <div className="terminal-button bg-green-500"></div>
                <span className="ml-2 text-md opacity-75">
                  {project.title}.sh
                </span>
              </div>
              <div>
                <div className="flex flex-col justify-center items-center mb-4">
                  <Image
                    width={1000}
                    height={1000}
                    src={project.image}
                    alt="plus ultra"
                    className="h-full w-full aspect-video object-cover"
                  />
                  <p className="text-xs text-justify p-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap p-3">
                  {project.tech.map((t, index) => (
                    <Badge
                      variant="secondary"
                      className="text-[0.6rem]"
                      key={index}
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="command-line text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ls -la ~/home/bangueco/technical-skills/
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(techStack).map(([category, { skills }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="terminal-window"
            >
              <div className="terminal-header">
                <div className="terminal-button bg-red-500"></div>
                <div className="terminal-button bg-yellow-500"></div>
                <div className="terminal-button bg-green-500"></div>
                <span className="ml-2 text-sm opacity-75">
                  {category}.config
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div
          className="command-line text-center mt-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          exit 0
        </motion.div>
      </section>
    </main>
  );
}
