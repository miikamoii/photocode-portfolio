// src/app/now/page.tsx
import React from "react";

export const metadata = {
  title: "Now – Miika Moilanen",
  description: "What I'm currently focused on.",
};

export default function NowPage() {
  const updates = [
    {
      date: "October 2025",
      sections: [
        {
          title: "💼 New Project",
          items: [
            "Designing and developing a project management web app for a client.",
            "Building a dynamic year-view calendar with project bars and detailed month grid alignment.",
            "Focusing on clean UI design using Tailwind CSS and subtle visual structure (sticky headers, weekend highlighting, smooth color hierarchy).",
            "Improving component modularity for clarity and reuse.",
          ],
        },
        {
          title: "👨‍💻 Coding Focus",
          items: [
            "Refining React composition patterns with TypeScript.",
            "Exploring flexible layout systems for time-based visualization.",
            "Implementing scalable data-fetching and rendering strategies for multiple projects across a full year view.",
          ],
        },
        {
          title: "📚 Currently Learning",
          items: [
            "Next.js app architecture for modular full-stack projects.",
            "Optimizing UI rendering and improving performance with memoization.",
            "Consistent design systems and modern color theory for functional UIs.",
          ],
        },
        {
          title: "💪 Personal",
          items: [
            "Balancing focused coding with photography and small creative breaks.",
            "Keeping learning momentum by shipping small but complete features every day.",
            "Experimenting with visual calm and consistency, both in code and design.",
          ],
        },
      ],
    },
    {
      date: "August 2025",
      sections: [
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
      ],
    },
  ];

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        What I&#39;m Doing Now
      </h1>

      <section className="mb-8 sm:mb-12">
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
          — a public log of what I&#39;m focused on at the moment. I update it
          every couple of months to track progress and priorities.
        </p>
      </section>

      {updates.map((update) => (
        <section
          key={update.date}
          className="border-t border-purple-300 dark:border-purple-800 my-16 pt-6"
        >
          <h2 className="text-lg sm:text-sm mb-4 italic text-gray-500">
            Update: {update.date}
          </h2>

          {update.sections.map((section) => (
            <div key={section.title} className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {section.title}
              </h3>
              <ul className="text-gray-600 dark:text-gray-400 list-disc list-outside pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}

      <p className="text-gray-500 text-sm italic">
        Updated periodically. Current version: October 2025
      </p>
    </main>
  );
}
