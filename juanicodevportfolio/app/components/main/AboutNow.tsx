export default function AboutNow() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-5">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left sm:col-span-3 sm:p-8">
        <h2 className="text-lg font-semibold text-white">About</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">
        This portfolio showcases selected software engineering work across
        full-stack applications and practical product builds.
        I focus on writing maintainable, and well-structured code.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-gray-300">
        Each project highlights the problem context, technical approach, and
        implementation details.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left sm:col-span-2 sm:p-8">
        <h2 className="text-lg font-semibold text-white">Now</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-300">
          <li>• Shipping portfolio-grade builds</li>
          <li>• Practicing system design + DSA</li>
          <li>• Applying for graduate roles</li>
        </ul>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Explore Builds →
          </a>
          <a
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-medium text-white/90 transition hover:bg-white/5"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}