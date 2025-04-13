"use client";

import { Briefcase, House, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`flex justify-center items-center border-2 border-primary p-5 gap-4 sticky z-50 rounded-full bg-background transition-all duration-300 ${
        show ? "top-3" : "-top-24"
      }`}
    >
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link
              href="/"
              className={`flex items-center gap-1 hover:text-primary ${
                pathname === "/" && "text-primary"
              }`}
            >
              <House size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`flex items-center gap-1 hover:text-primary ${
                pathname === "/about" && "text-primary"
              }`}
            >
              <User size={20} />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`flex items-center gap-1 hover:text-primary ${
                pathname === "/projects" && "text-primary"
              }`}
            >
              <Briefcase size={20} />
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
