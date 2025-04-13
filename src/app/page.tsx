import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="mt-28">
      <section className="flex flex-col items-center">
        <Image
          className="rounded-full"
          width={150}
          height={100}
          src={`/images/me.jpg`}
          alt="me"
        />
        <h1 className="text-4xl font-bold text-primary mt-5">
          Justine Ivan Gueco
        </h1>
        <p className="text-sm">Software Developer | Aspiring DevOps</p>
      </section>
      <section className="mt-10 flex flex-row gap-3 items-center justify-center">
        <a
          className="hover:text-primary"
          href="https://github.com/soapermanwun"
          target="_blank"
        >
          <FaGithub size={23} />
        </a>
        <a
          className="hover:text-primary"
          href="https://www.instagram.com/aybancaughtin4k"
          target="_blank"
        >
          <FaInstagram size={23} />
        </a>
        <a
          className="hover:text-primary"
          href="https://www.linkedin.com/in/justineivangueco/"
          target="_blank"
        >
          <FaLinkedin size={23} />
        </a>
      </section>
    </main>
  );
}
