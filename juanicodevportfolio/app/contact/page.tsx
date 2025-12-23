export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-[rgb(14,14,14)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s connect
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
            Reach out for portfolio questions, collaboration, or development
            opportunities. If you’re enquiring about a project, include context
            and what you’d like to review (demo, walkthrough, architecture,
            etc.).
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <section className="space-y-3">
            <InfoCard label="Email">
              <a
                className="text-white hover:underline"
                href="mailto:angelo.juanico@hotmail.com"
              >
                angelo.juanico@hotmail.com
              </a>
            </InfoCard>

            <InfoCard label="GitHub">
              <a
                className="text-white hover:underline"
                href="https://github.com/ajuan7"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ajuan7
              </a>
            </InfoCard>

            <InfoCard label="Availability">
              <span className="text-white/80">
                Open to graduate / junior software roles and internships.
              </span>
            </InfoCard>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="text-lg font-semibold sm:text-xl">Send a message</h2>

            <form
              className="mt-6 space-y-4"
              action="mailto:angelo.juanico@hotmail.com"
              method="post"
              encType="text/plain"
            >
              <Field label="Name">
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[rgb(14,14,14)] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[rgb(14,14,14)] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Subject">
                <input
                  name="subject"
                  className="w-full rounded-xl border border-white/10 bg-[rgb(14,14,14)] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
                  placeholder="What is this about?"
                />
              </Field>

              <Field label="Message">
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[rgb(14,14,14)] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
                  placeholder="Write your message..."
                />
              </Field>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              >
                Send message
              </button>

            </form>
          </section>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Juanico DevSolutions
        </footer>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm text-white/70">{label}</label>
      {children}
    </div>
  );
}

function InfoCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs text-white/50">{label}</p>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}
