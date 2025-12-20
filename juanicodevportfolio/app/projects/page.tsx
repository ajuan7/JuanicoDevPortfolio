import ProjectCard from "../components/projectcard";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[rgb(14,14,14)] text-zinc-100">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-white/5 to-transparent" />

            <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:py-16">
                <header className="mb-10">
                    <p className="text-sm font-medium text-zinc-400">Selected work</p>

                    <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                        My Projects
                    </h1>

                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400">
                        Full-stack builds, research tooling, and real business systems—each
                        documented with architecture decisions and outcomes.
                    </p>

                    <div className="mt-8 h-px w-full bg-white/10" />
                </header>

                <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur transition hover:bg-white/7.5 hover:border-white/15">
                        <ProjectCard
                            title="Advanced Home Services Route Optimiser"
                            description="Full-stack software for optimising contractor job routes with Google Calendar export features."
                            src="/project-1/Main-Page.png"
                            href="/projects/ahs-route-optimiser"
                            ctaText="View case study"
                            badgeText="Full-stack Freelance Job"
                            isPrivate
                            tags={["Next.js", "JavaScript", "MySQL", "Vercel"]}
                        />
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur transition hover:bg-white/7.5 hover:border-white/15">
                        <ProjectCard
                            title="IVE Paper Tracker"
                            description="Research dashboard for publication retrieval using APIs and web scraping with performance optimisations."
                            src="/project-2/update-database.png"
                            href="/projects/paper-collation-tool"
                            ctaText="View case study"
                            badgeText="University project"
                            isPrivate
                            tags={["React", "Node.js", "TypeScript", "PostgreSQL", "Prisma"]}
                        />
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur transition hover:bg-white/7.5 hover:border-white/15">
                        <ProjectCard
                            title="Your Moment Adelaide"
                            description="Full-stack platform for enquiries and booking workflows for a real service business."
                            src="/project-3/main.png"
                            href="/projects/your-moment-adelaide"
                            ctaText="View case study"
                            badgeText="Founder • Full-stack"
                            isPrivate={false}
                            tags={["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel"]}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
