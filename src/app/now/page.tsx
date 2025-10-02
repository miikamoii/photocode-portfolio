// src/app/now/page.tsx
import React from "react";

export const metadata = {
  title: "Now – Miika Moilanen",
  description: "What I'm currently focused on.",
};

export default function NowPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        What I&#39;m Doing Now
      </h1>

      <section className="mb-6 sm:mb-8">
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          This page is inspired by{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black dark:hover:text-white"
          >
            nownownow.com
          </a>{" "}
          — a public declaration of what I&#39;m focused on at this moment.
        </p>
      </section>

      <section className="space-y-4 sm:space-y-6 leading-relaxed mb-8 sm:mb-10">
        {[
          {
            title: "👨‍💻 Coding Focus",
            items: [
              "Building out portfolio features (auth, tagging, lightbox, etc.)",
              "Practicing TypeScript and React component architecture",
              "Learning backend logic with Next.js server actions & APIs",
            ],
          },
          {
            title: "📚 Currently Learning",
            items: [
              "Next.js 14 full-stack features",
              "Design patterns & testing best practices",
              "Authentication and secure API design",
            ],
          },
          {
            title: "📸 Photography",
            items: [
              "Going through the pictures of my last trip to Japan",
              "Exploring auto-tagging + AI sorting tools",
            ],
          },
          {
            title: "💪 Personal Goals",
            items: [
              "Polishing this portfolio for developer job applications",
              "Staying consistent with daily focused learning",
              "Finding inspiration through building, not just consuming",
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {section.title}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 list-disc list-outside pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <p className="text-gray-500 text-sm">Last updated: August 2025</p>
    </main>
  );
}
