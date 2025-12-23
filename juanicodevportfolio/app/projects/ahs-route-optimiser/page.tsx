import ProjectPage from "@/app/components/projectpage";

export default function AHSRouteOptimiserPage() {
  return (
    <ProjectPage
      title="AHS Route Optimiser"
      summary="A full-stack scheduling and route optimisation tool that centralises client and job data, balances weekly rosters, clusters jobs geographically, and integrates third-party routing and mapping APIs to generate optimised daily routes and calendar exports."
      tags={["Next.js", "TypeScript", "PostgreSQL", "Prisma", "RouteXL API", "Leaflet Map API"]}
      repoNote="Private repo (confidentiality)"
      sections={[
        {
          title: "Web App Interface",
          description:
            "A minimal interface to easily navigate to the database or creation of new rosters.",
          imageSrc: "/project-1/Main-Page.png",
        },
        {
          title: "Client Data Management",
          description:
            "Centralised local storage database using MySQL and the UI to show client details, job locations, service notes, and constraints (e.g., time windows) to reduce duplicated admin work.",
          imageSrc: "/project-1/Database-Page.png",
        },
        {
          title: "Roster Setup - (1/2)",
          description:
            "Create roster for the week through adding client jobs and letting the system organise and balance total hours for each day.",
          imageSrc: "/project-1/Roster-Page.png",
        },
        {
          title: "Roster Setup - (2/2)",
          description:
            "Customise the teams and members for the week considering the hours per employee to finish by 5:00 PM.",
          imageSrc: "/project-1/Roster-Page-2.png",
        },
        {
          title: "Job Cluster - (1/2)",
          description:
            "System will use algorithms and the RouteXL API to cluster the jobs per day separated by area to reduce driving times for each team.",
          imageSrc: "/project-1/Cluster-Page.png",
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
}
