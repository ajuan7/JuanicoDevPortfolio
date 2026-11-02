import ProjectPage, { ProjectSection } from "@/app/components/projectpage";

export default function DevCognaProjectPage() {
  const sections: ProjectSection[] = [
    {
      title: "What I Learned",
      description:
        "I started DevCogna to help with interview prep, and it showed me how much I didn't know about everything around the main idea: logging in, protected pages, sending people to the right place, and keeping one user's data away from another's. I got partway through authentication and could see I needed to learn it properly, so I started Vervue and finished the whole flow there. The biggest thing I took from it is that access has to be checked on the server, not just hidden on the page.\n\nIt also changed how I use AI. I now let it do the repetitive work, like layouts and forms, and then I read through it and fix what's wrong. That left me more time for the parts I had to understand myself, like auth and the database rules.\n\nBuilding the pages also showed me how much time reusable components save. Once I had a button, a card and a form set up, new pages were quick and looked consistent. That's why I'm sticking with React. DevCogna is paused, and I'm taking all of this into Vervue.",
      imageAlt: "What I learned",
      variant: "imageTop",
    },
    {
      title: "Overview",
      description:
        "DevCogna is a prototype interview training platform aimed at graduate and junior developers. Instead of just showing questions, it is designed to measure performance (accuracy and response time) and map results back to patterns, so users can train their weaknesses on purpose.",
      imageSrc: "/project-4/devcogna-cover.png",
      imageAlt: "DevCogna overview",
      variant: "imageTop",
    },
    {
      title: "Problem",
      description:
        "Most interview prep tools focus on volume, not improvement. Users grind questions without a clear feedback loop. DevCogna's goal is to make progress measurable by tracking attempts and linking weaknesses to pattern-based practice.",
      imageSrc: "/project-4/devcogna-problem.png",
      imageAlt: "Problem statement",
      variant: "twoCol",
    },
    {
      title: "Intended Core Loop",
      description:
        "The design is a loop: a user attempts a question, the app records correctness and response time, and a weakness profile is updated for each pattern. Flashcards and recommended drills would then be generated from that data. This loop is the part of the design that is not finished yet.",
      imageSrc: "/project-4/devcogna-method.png",
      imageAlt: "Core loop diagram",
      variant: "imageTop",
    },
    {
      title: "Status and Next Steps",
      description:
        "Paused while I focus on Vervue. Remaining work: finish authentication, track attempts end to end, build the pattern dashboards, and build the reinforcement engine (flashcards and weak-pattern drills). After that, test the feedback loop with early users.",
      imageSrc: "/project-4/devcogna-roadmap.png",
      imageAlt: "Next steps",
      variant: "imageTop",
    },
  ];

  return (
    <ProjectPage
      title="DevCogna"
      subtitle="Prototype • Case Study"
      summary="A prototype interview training platform for coding interviews, designed to measure accuracy and response time and map mistakes to patterns."
      tags={["Next.js", "TypeScript", "Prototype"]}
      repoNote="Public Repository • Paused"
      sections={sections}
    />
  );
}