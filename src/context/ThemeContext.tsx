"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const initialTheme = storedTheme || (prefersDark.matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.add(initialTheme);

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.classList.remove(e.matches ? "light" : "dark");
      document.documentElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
    };

    prefersDark.addEventListener("change", handleChange);

    return () => prefersDark.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // This effect ensures the class on document.documentElement is always in sync with the theme state
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
