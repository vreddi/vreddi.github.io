"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/_shadcn/ui/input";
import { Button } from "@/components/_shadcn/ui/button";

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav id="header" className="sticky w-full z-10 top-0">
      <div className="w-full h-14 md:h-20 backdrop-blur-2xl backdrop-saturate-200 justify-center border-b rounded-b-lg transition-colors duration-300">
        <div className="h-full w-full md:max-w-3xl mx-auto px-4">
          <div className="flex h-full flex-row items-center justify-between font-sans">
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit" variant="outline">
                Subscribe
              </Button>
            </div>
            <div className="flex flex-row ml-4 items-center space-x-3 md:space-x-8 font-semibold text-apple-text-light dark:text-apple-text-dark transition-colors duration-300">
              {/* <Link
                href="/#projects"
                className="no-underline hover:underline transition-colors duration-300"
              >
                projects
              </Link>
              <Link
                href="/posts"
                className="no-underline hover:underline transition-colors duration-300"
              >
                posts
              </Link> */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-apple-hover-light dark:hover:bg-apple-hover-dark transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
