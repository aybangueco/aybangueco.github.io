"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-secondary animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "relative w-10 h-10 rounded-full transition-colors duration-500",
        "bg-secondary hover:bg-secondary/80",
        "flex items-center justify-center",
        "group overflow-hidden"
      )}
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          "h-5 w-5 rotate-0 scale-100 transition-all duration-500",
          "text-yellow-500",
          theme === "dark" && "rotate-90 scale-0"
        )}
      />

      <Moon
        className={cn(
          "absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500",
          "text-blue-500",
          theme === "dark" && "rotate-0 scale-100"
        )}
      />

      <span
        className={cn(
          "absolute inset-0 rounded-full",
          "transition-opacity duration-500",
          "bg-gradient-to-br opacity-0",
          theme === "dark"
            ? "from-blue-500/10 to-purple-500/10 group-hover:opacity-100"
            : "from-yellow-500/10 to-orange-500/10 group-hover:opacity-100"
        )}
      />
    </button>
  );
}
