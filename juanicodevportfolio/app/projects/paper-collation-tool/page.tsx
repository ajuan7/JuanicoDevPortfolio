import ProjectCard from "@/app/components/projectpage";

export default function PaperCollationToolPage() {
    return(
        <ProjectCard
            title="Paper Collation Tool"
            subtitle="Case Study"
            summary="Uni Project"
            tags={["React", "Node.js", "Prisma", "PostgreSQL", "Serp API", "Elsevier API", "Orcid API" ]}
            repoNote="Private repo (confidentiality)"
            sections={[
                {
                title: "Web App Interface",
                description:
                    "A clean dashboard-style interface providing a high-level overview of research outputs, navigation between entities, and access to core analytics features.",
                imageSrc: "/project-2/main.png",
                },
                {
                title: "All Author Page",
                description:
                    "A consolidated view of all researchers, displaying publication counts, collaboration scores, and source-specific output metrics to support quick comparison and filtering.",
                imageSrc: "/project-2/all-author.png",
                },
                {
                title: "Specific Author Page",
                description:
                    "",
                imageSrc: "/project-2/author.png",
                },
                {
                title: "All Group Page - Overview",
                description:
                    "An aggregated view of research groups, summarising total outputs, recent activity, and relative contribution across different publication sources.",
                imageSrc: "/project-2/all-group.png",
                },
                {
                title: "All Group Page - Analytics",
                description:
                    "Extended group-level analytics including comparative charts and visualisations to identify research output distribution and collaboration trends.",
                imageSrc: "/project-2/all-group-2.png",
                },
                {
                title: "Specific Group - Summary",
                description:
                    "A focused breakdown of a single research group, highlighting key contributors, output totals, and recent publications within the group.",
                imageSrc: "/project-2/group.png",
                },
                {
                title: "Specific Group - Relationships",
                description:
                    "Graph-based visualisations illustrating inter-group and intra-group collaborations, enabling exploration of research connections and shared outputs.",
                imageSrc: "/project-2/group-2.png",
                },
                {
                title: "Outputs",
                description:
                    "A tabular view of individual research outputs with filtering by source, publication date, authors, and affiliated research groups.",
                imageSrc: "/project-2/outputs.png",
                },
                {
                title: "Update Database",
                description:
                    "An administrative interface allowing controlled ingestion of new publication data via CSV upload, with configurable source and date parameters.",
                imageSrc: "/project-2/update-database.png",
                },
                {
                title: "Login",
                description:
                    "A secure authentication screen restricting access to authorised users and administrative functionality within the system.",
                imageSrc: "/project-2/login.png",
                },
            ]}
        />
    );
};