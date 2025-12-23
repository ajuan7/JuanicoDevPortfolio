import Image from "next/image";

export type ProjectSection = {
  title: string;
  description: string;
  imageSrc?: string; 
  imageAlt?: string;
  variant?: "imageTop" | "twoCol"; 
};

export type ProjectPageProps = {
  title: string;
  subtitle?: string;
  summary: string;
  tags?: string[];
  repoNote?: string; 
  sections: ProjectSection[];
};

export default function ProjectPage({
  title,
  subtitle = "Case Study",
  summary,
  tags = [],
  repoNote,
  sections,
}: ProjectPageProps) {
  return (
    <div className="min-h-screen bg-[rgb(14,14,14)] text-white">
      <main className="mx-auto max-w-6xl px-6 py-14">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-widest text-white/50">
            {subtitle}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{title}</h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            {summary}
          </p>

          {(tags.length > 0 || repoNote) && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}

              {repoNote && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {repoNote}
                </span>
              )}
            </div>
          )}
        </header>

        <div className="grid gap-6">
          {sections.map((s, idx) => (
            <ProjectSectionCard key={`${s.title}-${idx}`} section={s} />
          ))}
        </div>

        <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-white/50">
          © {new Date().getFullYear()} Juanico DevSolutions
        </footer>
      </main>
    </div>
  );
}

function ProjectSectionCard({ section }: { section: ProjectSection }) {
  const { title, description, imageSrc, imageAlt, variant = "imageTop" } =
    section;

  if (variant === "twoCol") {
    return (
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="relative h-[240px] w-full bg-black/20 sm:h-[320px]">
          {imageSrc ? (
            <div className="relative h-56 sm:h-full sm:min-h-[280px]">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="hidden sm:block" />
          )}

          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {imageSrc && (
        <div className="relative h-[240px] w-full bg-black/20 sm:h-[320px]">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 1024px"
          />
        </div>
      )}

      <div className="p-6 sm:p-8">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
      </div>
    </section>
  );
}
