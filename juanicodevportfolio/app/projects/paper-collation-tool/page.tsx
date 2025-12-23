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
                    "A minimal interface to easily navigate to the database or creation of new rosters.",
                imageSrc: "/project-2/main.png",
                },
                {
                title: "All Author Page",
                description:
                    "Centralised local storage database using MySQL and the UI to show client details, job locations, service notes, and constraints (e.g., time windows) to reduce duplicated admin work.",
                imageSrc: "/project-2/all-author.png",
                },
                {
                title: "Specific Author Page",
                description:
                    "Create roster for the week through adding client jobs and letting the system organise and balance total hours for each day.",
                imageSrc: "/project-2/author.png",
                },
                {
                title: "All Group Page - (1/2)",
                description:
                    "Customise the teams and members for the week considering the hours per employee to finish by 5:00 PM.",
                imageSrc: "/project-2/all-group.png",
                },
                {
                title: "All Group Page - (2/2)",
                description:
                    "System will use algorithms and the RouteXL API to cluster the jobs per day separated by area to reduce driving times for each team.",
                imageSrc: "/project-2/all-group-2.png",
                },
                {
                title: "Job Cluster - (2/2)",
                description:
                    "Visualise jobs on a map and generate an ordered stop list with estimated travel times to reduce inefficiency and improve throughput.",
                imageSrc: "/project-1/Cluster-Page-2.png",
                },
                {
                title: "Scheduler Page",
                description:
                    "RouteXL API will generate a route and visually displayed from the Leaflet Map API. Driving time estimates will be calculated and routes are adjustable by click and drag to re-organise easily.",
                imageSrc: "/project-1/Schedule-Page.png",
                },
                {
                title: "Calendar Export (ICS)",
                description:
                    "Generate a calendar-compatible export so schedules can be imported into Google Calendar without retyping addresses, times, or notes.",
                imageSrc: "/project-1/Calendar.png",
                },
            ]}
        />
    );
};