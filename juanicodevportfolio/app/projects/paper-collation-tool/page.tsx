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
                    "A minimal interface to easily navigate.",
                imageSrc: "/project-2/main.png",
                },
                {
                title: "All Author Page",
                description:
                    "",
                imageSrc: "/project-2/all-author.png",
                },
                {
                title: "Specific Author Page",
                description:
                    "",
                imageSrc: "/project-2/author.png",
                },
                {
                title: "All Group Page - (1/2)",
                description:
                    "",
                imageSrc: "/project-2/all-group.png",
                },
                {
                title: "All Group Page - (2/2)",
                description:
                    "",
                imageSrc: "/project-2/all-group-2.png",
                },
            ]}
        />
    );
};