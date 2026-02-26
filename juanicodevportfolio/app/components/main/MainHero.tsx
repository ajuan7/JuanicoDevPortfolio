import Image from "next/image";

export default function MainHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative flex flex-col items-center text-center">
        <Image
          src="/logos/JUANICO-Transparent.png"
          alt="Juanico DevSolutions Logo"
          width={210}
          height={48}
          priority
          className="opacity-95"
        />

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          JUANICO <span className="text-blue-600">DevSolutions</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          I build modern software — from idea → MVP → measurable product.
          <span className="text-white/90"> Angelo Juanico</span>, full-stack engineer
          focused on clean systems, performance, and outcomes.
        </p>

        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10">
            <Image
              src="/headphoto.jpeg"
              alt="Angelo Juanico"
              fill
              className="object-cover"
            />
          </div>

          <span className="text-sm text-gray-300">
            Angelo Juanico • Adelaide • Building in public
          </span>

          <span className="hidden text-gray-500 sm:inline">•</span>

          <span className="text-sm text-gray-300">
            Next.js • TypeScript • PostgreSQL
          </span>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-7 text-sm font-medium text-white transition hover:bg-blue-700 sm:text-base"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-transparent px-7 text-sm font-medium text-white/90 transition hover:bg-white/5 sm:text-base"
          >
            Contact
          </a>

          <a
            href="https://au.linkedin.com/in/angelojuanico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-7 text-sm font-medium text-gray-200 transition hover:bg-white/[0.06] sm:text-base"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}