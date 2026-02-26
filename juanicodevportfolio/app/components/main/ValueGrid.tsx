type ValueCardProps = {
  label: string;
  text: string;
};

function ValueCard({ label, text }: ValueCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
      <p className="text-xs font-medium text-gray-400">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-gray-200">{text}</p>
    </div>
  );
}

export default function ValueGrid() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <ValueCard
        label="What I build"
        text="SaaS products, dashboards, API-driven apps, automation tools."
      />
      <ValueCard
        label="How I build"
        text="Clean architecture, strong typing, instrumentation, and iteration loops."
      />
      <ValueCard
        label="What I care about"
        text="Speed to ship, reliability, security, and measurable impact."
      />
    </section>
  );
}