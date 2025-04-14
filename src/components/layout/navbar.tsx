"use client";

import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  submenu?: NavItem[];
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const navItems: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const handleScroll = (): void => {
    const currentScrollY = window.scrollY;

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && visible && currentScrollY > 100) {
      setVisible(false);
    } else if (currentScrollY < lastScrollY && !visible) {
      setVisible(true);
    }

    // Apply blur effect when scrolled
    if (currentScrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, visible]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border border-b-2 flex justify-center",
        isScrolled
          ? "backdrop-blur-md bg-background/70 shadow-md"
          : "bg-transparent",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl w-full">
        {/* Logo */}
        <div className="font-bold text-2xl text-primary">
          <Link href="/">Ivan G.</Link>
        </div>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-muted-foreground hover:text-primary focus:outline-none"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="sr-only">menu</SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <Button
                    variant="link"
                    key={index}
                    className="flex items-center justify-between w-full text-left text-muted-foreground hover:text-primary"
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
