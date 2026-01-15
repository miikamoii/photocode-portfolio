// src/app/about/page.tsx
import React from "react";
import { FaTools, FaHandSparkles, FaBullseye } from "react-icons/fa";

export const metadata = {
  title: "About This Site",
  description:
    "Learn about the ideas, design choices, and technology behind this portfolio.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        About This Website
      </h1>

      <section className="mb-6 sm:mb-8">
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          This portfolio is more than just a gallery of my photography — it’s
          also a personal sandbox for exploring modern web development. I
          designed it to be{" "}
          <span className="font-semibold">
            fast, lightweight, and interactive
          </span>
          , while also serving as a place to try out new technologies and design
          patterns.
        </p>
      </section>

      <section className="mb-8 sm:mb-10">
        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          <FaTools className="text-purple-500 shrink-0" />
          Tech Stack
        </h2>
        <ul className="text-gray-600 dark:text-gray-400 list-disc list-outside pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
          <li>
            <span className="font-medium">Next.js App Router</span> – modern
            full-stack React framework
          </li>
          <li>
            <span className="font-medium">TypeScript</span> – type safety and
            maintainability
          </li>
          <li>
            <span className="font-medium">Tailwind CSS</span> – rapid styling
            and responsive design
          </li>
          <li>
            <span className="font-medium">Framer Motion</span> – smooth page
            transitions and animations
          </li>
          <li>
            <span className="font-medium">NextAuth</span> – secure
            authentication with guest accounts
          </li>
          <li>
            <span className="font-medium">Upstash / Redis</span> – lightweight
            user storage and persistence
          </li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-10">
        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          <FaHandSparkles className="text-purple-500 shrink-0" />
          Features
        </h2>
        <ul className="text-gray-600 dark:text-gray-400 list-disc list-outside pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
          <li>Temporary guest login system for private slider tool access</li>
          <li>Gallery component, featuring my work in photography</li>
          <li>Dark/Light mode and responsive design</li>
          <li>Custom animations for a fluid browsing experience</li>
          <li>Hand-built components instead of relying on heavy templates</li>
          <li>Focus on performance and user experience</li>
        </ul>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
          <FaBullseye className="text-purple-500 shrink-0" />
          Purpose
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          The purpose of this site is twofold:{" "}
          <span className="font-semibold">to showcase my photography</span> and{" "}
          <span className="font-semibold">
            to sharpen my development skills
          </span>
          . Instead of using pre-built templates, I built the majority of the
          interface myself. This gives me the freedom to experiment with
          architecture, learn best practices, and create something that feels
          personal and intentional.
        </p>
      </section>
    </main>
  );
}
