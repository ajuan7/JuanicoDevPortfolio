import ProjectPage from "@/app/components/projectpage";

export default function YourMomentAdelaidePage() {
    return (
        <ProjectPage
            title="Your Moment Adelaide"
            summary="A full-stack web platform built to support a real-world room styling and hospitality decoration service. The site showcases service packages, supports customer enquiries, and includes a private admin workflow for managing bookings and operational updates, designed with a premium, brand-led UI."
            tags={["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel",]}
            repoNote="Public Repository"
            sections={[
                {
                    title: "Landing Page",
                    description:
                        "A brand-first hero experience designed to convert visitors into enquiries, with clear calls-to-action and a premium visual style aligned to the service offering.",
                    imageSrc: "/project-3/main.png",
                },
                {
                    title: "Packages Overview",
                    description:
                        "A packages catalogue presenting service tiers with pricing, clear positioning, and quick navigation into package detail pages for purchase intent.",
                    imageSrc: "/project-3/packages.png",
                },
                {
                    title: "Package Detail Page",
                    description:
                        "A dedicated package page outlining inclusions and visual examples, built to reduce customer uncertainty and improve conversion through transparent deliverables.",
                    imageSrc: "/project-3/package-romance.png",
                },
                {
                    title: "Enquiry Page",
                    description:
                        "A custom form enquiry page for clients to provide necessary information to book in a service.",
                    imageSrc: "/project-3/enquiry.png",
                },
                {
                    title: "Admin Login",
                    description:
                        "A restricted access login screen supporting administrative workflows such as managing enquiries, internal updates, and service configuration.",
                    imageSrc: "/project-3/login.png",
                },
                {
                    title: "Admin Database",
                    description:
                        "Accessed through the secure login page, displays all enquiries made with relevant details to commence the service and bookings.",
                    imageSrc: "/project-3/database.png",
                },
            ]}
        />
    );
}
