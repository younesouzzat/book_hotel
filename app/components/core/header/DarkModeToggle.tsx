import { Switch } from "@/components/ui/switch";
import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export const DarkModeToggle = () => {

  
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  };

  return (
    <>
        <div className="flex space-x-1 items-center">
            <Moon className="size-5" />
            <Switch onClick={toggleDarkMode} />
            <Sun className="size-5" />
        </div>
    </>
  );
};
