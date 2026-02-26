import Hero from "@/app/components/main/MainHero";
import ValueGrid from "@/app/components/main/ValueGrid";
import AboutNow from "@/app/components/main/AboutNow";

export default function Home() {
  return (
    <div className="min-h-screen bg-[rgb(14,14,14)] px-6 py-10 font-sans sm:px-12 sm:py-16">
      <p className="hidden">
        Angelo Juanico is an Australian Software Engineer based in Adelaide,
        specialising in full-stack development and SaaS systems.
      </p>
      
      <main className="mx-auto w-full max-w-5xl">
        <Hero />
        <ValueGrid />
        <AboutNow />

        <footer className="mt-10 pb-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Angelo Juanico • Juanico DevSolutions
        </footer>
      </main>
    </div>
  );
}