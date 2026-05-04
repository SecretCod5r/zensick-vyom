"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check stored preference or system preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className="relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-secondary/50 border border-primary/20 p-1 transition-colors duration-300 hover:border-primary/40"
        onClick={toggleTheme}
        role="button"
        tabIndex={0}
      >
        <div
          className={cn(
            "absolute h-6 w-6 rounded-full bg-primary shadow-lg transition-transform duration-300 ease-in-out",
            isDark ? "translate-x-0" : "translate-x-8"
          )}
        >
          <div className="flex h-full w-full items-center justify-center">
            {isDark ? (
              <Moon className="h-4 w-4 text-primary-foreground" />
            ) : (
              <Sun className="h-4 w-4 text-primary-foreground" />
            )}
          </div>
        </div>

        <div className="flex w-full justify-between px-1">
          <div className={cn("flex h-5 w-5 items-center justify-center transition-opacity", isDark ? "opacity-0" : "opacity-50")}>
            {isDark ? (
              <Moon className="h-3 w-3 text-muted-foreground" />
            ) : (
              <Moon className="h-3 w-3 text-muted-foreground" />
            )}
          </div>

          <div className={cn("flex h-5 w-5 items-center justify-center transition-opacity", isDark ? "opacity-50" : "opacity-0")}>
            {isDark ? (
              <Sun className="h-3 w-3 text-muted-foreground" />
            ) : (
              <Sun className="h-3 w-3 text-muted-foreground" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
