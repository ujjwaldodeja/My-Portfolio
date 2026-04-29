import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-6 text-center border-t border-[var(--border)]">
        <p className="text-xs text-[var(--text-muted)] font-mono">
          Designed &amp; Built by{" "}
          <span className="text-[var(--accent)]">Ujjwal Dodeja</span>
        </p>
      </footer>
    </main>
  );
}
