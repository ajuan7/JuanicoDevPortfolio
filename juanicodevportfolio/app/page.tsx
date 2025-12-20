import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-16 bg-[rgb(14,14,14)] p-8 pb-20 font-sans sm:p-16">
      <main className="flex flex-grow flex-col items-center justify-center gap-8">

        <Image
          src="/logos/JUANICO-2.png"
          alt="Juanico DevSolutions Logo"
          width={180}
          height={38}
          priority
        />

        <header className="text-center">
          <h1 className="text-4xl font-bold text-foreground">
            JUANICO <span className="text-blue-600">DevSolutions</span>
          </h1>
          <p className="text-sm text-gray-500">Your Vision, Our Code.</p>
        </header>

        <section className="px-8 text-center text-sm sm:px-40 sm:text-left">
          <h2 className="mb-2 text-xl font-semibold">About Us</h2>
          <p className="text-gray-700">
            Juanico DevSolutions is my personal portfolio where I showcase software
            development work across full-stack web apps, API integrations, and scalable
            systems. My focus is building secure, efficient solutions and continuously
            improving through real projects.
          </p>
        </section>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-blue-600 px-4 text-sm text-white transition-colors hover:bg-blue-700 sm:h-12 sm:px-5 sm:text-base"
            href="/projects"
          >
            Projects
          </a>

          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </main>

      {/* Footer links */}
      <footer className="mt-auto flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://instagram.com/juanicodevsolutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/instagram-icon.svg"
            alt="Instagram icon"
            width={32}
            height={32}
            className="dark:invert"
          />
          Instagram
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/projects"
        >
          <Image
            src="/icons/project-icon.svg"
            alt="Projects icon"
            width={32}
            height={32}
            className="dark:invert"
          />
          View Projects
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <Image
            src="/icons/email-icon.svg"
            alt="Contact icon"
            width={32}
            height={32}
            className="dark:invert"
          />
          Contact →
        </a>
      </footer>
    </div>
  );
}
