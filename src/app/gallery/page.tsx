// app/gallery/page.tsx
import { getGalleryImages } from "@/lib/getGalleryImages";
import Gallery from "@/components/Gallery";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import TipButton from "@/components/TipButton";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const images = await getGalleryImages();
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 max-w-5xl mx-auto">
      <section>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-center dark:text-white">
          My Gallery
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
          Welcome to my gallery. I&#39;m a developer and photographer passionate
          about creating beautiful, fast, and functional web experiences.
        </p>

        <div className="mb-6 sm:mb-8">
          <TipButton />
        </div>

        <Gallery images={images} />
      </section>

      <div className="border-t border-purple-300 dark:border-purple-800 my-16 sm:my-20" />

      <section className="px-2 sm:px-4 py-8 sm:py-12 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 sm:mb-4 text-center dark:text-white">
            Before/After Edits
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            I also specialize in post-processing and photo editing. Here&#39;s a
            look at some before-and-after comparisons to showcase my editing.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <BeforeAfterSlider
            id="ba1"
            beforeSrc="/optimized/compare/before1.webp"
            afterSrc="/optimized/compare/after1.webp"
            session={session}
            locked
          />
          <BeforeAfterSlider
            id="ba2"
            beforeSrc="/optimized/compare/before2.webp"
            afterSrc="/optimized/compare/after2.webp"
            session={session}
            locked
          />
          <BeforeAfterSlider
            id="ba3"
            beforeSrc="/optimized/compare/before3.webp"
            afterSrc="/optimized/compare/after3.webp"
            session={session}
            locked
          />
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  );
}
