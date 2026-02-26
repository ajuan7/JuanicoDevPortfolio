import ProjectPage, { ProjectSection } from "@/app/components/projectpage";

export default function DevCognaProjectPage() {
  const sections: ProjectSection[] = [
    {
      title: "Overview",
      description:
        "DevCogna is a interview training platform targeted primarily towards graduate/junior developers. Instead of just showing questions, it measures performance (accuracy + response time) and maps results back to patterns so users can train weaknesses intentionally.",
      imageSrc: "/project-4/devcogna-cover.png",
      imageAlt: "DevCogna overview",
      variant: "imageTop",
    },
    {
      title: "Problem",
      description:
        "Most interview prep tools optimise for volume, not improvement. Users grind questions without a clear feedback loop. DevCogna’s goal is to make progress measurable by tracking attempts and linking weaknesses to pattern-based reinforcement.",
      imageSrc: "/project-4/devcogna-problem.png",
      imageAlt: "Problem statement",
      variant: "twoCol",
    },
    {
      title: "Core Loop (Telemetry → Reinforcement)",
      description:
        "Users attempt questions, DevCogna records correctness and response time, then updates a weakness profile for each pattern. Flashcards and recommended drills are generated from this data — creating a closed loop for improvement.",
      imageSrc: "/project-4/devcogna-method.png",
      imageAlt: "Core loop diagram",
      variant: "imageTop",
    },
    {
      title: "Next Steps",
      description:
        "Complete authentication, implement attempt tracking end-to-end, generate pattern dashboards, and build the reinforcement engine (flashcards + weak-pattern drills). Then validate the feedback loop with early users.",
      imageSrc: "/project-4/devcogna-roadmap.png",
      imageAlt: "Next steps",
      variant: "imageTop",
    },
  ];

  return (
    <ProjectPage
      title="DevCogna"
      subtitle="Founder Micro-SaaS • Case Study"
      summary="An Interview training platform that measures accuracy and response time, maps performance to patterns, and generates targeted reinforcement."
      tags={[
        "Next.js",
        "TypeScript",
        "Schema v1",
        "SaaS",
      ]}
      repoNote="Public Repository • In progress"
      sections={sections}
    />
  );
}