"use client";

import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDarkMode(isDark);
  };

  return (
    <div className="flex space-x-1 items-center">
      <Sun className="size-5 text-white" />
      <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
      <Moon className="size-5 text-white" />
    </div>
  );
};
