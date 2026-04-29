"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "eData Portal",
    association: "eData · Sep 2024 – Present",
    bullets: [
      "Developed and maintained core backend components for case management features.",
      "Led maintenance, retraining, and optimization of AI models ensuring high performance.",
      "Improved event-driven architecture for scalable processing and built inference pipelines into the platform.",
      "Contributed to design and implementation of enterprise search functionality.",
      "Enhanced document analysis and PDF processing workflows, improving efficiency by 20%.",
    ],
    tech: ["Java", "Quarkus", "Python", "Docker", "RabbitMQ", "Kubernetes"],
    live: "",
  },
  {
    title: "AI Inference Pipeline Migration",
    association: "eData · Feb 2025 – Present",
    bullets: [
      "Migrated a Python-based inference pipeline to a scalable, high-performance Java-based pipeline.",
      "Designed and implemented a reusable model inference framework, standardizing workflows.",
      "Redesigned preprocessing & post-processing pipelines, improving prediction quality and visual clarity.",
      "Introduced configurable parameters and modular design for flexibility across the global platform architecture.",
      "Reduced inference latency by 25%, increased throughput by 20%, and eliminated memory/maintenance issues by 50%.",
    ],
    tech: ["Java", "Quarkus", "Python", "RabbitMQ", "Kubernetes"],
    live: "",
  },
  {
    title: "Case Management Integration Service",
    association: "eData · Aug – Oct 2025",
    bullets: [
      "Built a high-performance microservice bridging an internal portal with an external case management system.",
      "Implemented mTLS and token-based authentication for secure, reliable communication.",
      "Designed end-to-end document workflow — fetch, import, and export with PostgreSQL traceability.",
      "Async, event-driven export pipeline significantly improved throughput and scalability.",
    ],
    tech: ["Java", "Quarkus", "REST APIs", "mTLS", "PostgreSQL", "Docker"],
    live: "",
  },
  {
    title: "BaatCheet",
    association: "Nov 2023 – Jun 2024",
    bullets: [
      "Designed a Client-Server based E2EE protocol with DHKeyExchange and Session Perfect Forward Secrecy.",
      "Optimised LSB substitution algorithm to implement enhanced image steganography.",
    ],
    tech: ["Android", "Java", "DHKeyExchange", "E2EE", "Steganography"],
    live: "",
  },
  {
    title: "Posturify",
    association: "Sep 2022 – Apr 2023",
    bullets: [
      "Trained a model to identify incorrect desk posture with 85% accuracy.",
      "Optimised feature extraction on PostureRecognition API, improving predictions by 10% across all camera calibrations.",
      "Built an Android app leveraging the built-in camera for continuous frame capture and local model inference.",
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "Android", "PostureRecognition API"],
    live: "",
  },
  {
    title: "MyLang",
    association: "",
    bullets: [
      "Built a custom interpreted programming language from scratch.",
      "Hand-written lexer, recursive-descent parser, and tree-walking interpreter.",
    ],
    tech: ["Haskell", "Compiler Design", "Parsing"],
    live: "",
  },
  {
    title: "Execel Automate",
    association: "",
    bullets: [
      "Automation tool that transforms Excel spreadsheets using custom rule definitions.",
      "Eliminated hours of repetitive manual data-entry workflows.",
    ],
    tech: ["Python", "Pandas", "openpyxl", "Tkinter"],
    live: "",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--bg-subtle)]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-xs tracking-widest uppercase mb-2">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-[var(--text)]">Things I&apos;ve Built</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)]/40 transition-colors duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.association && (
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{project.association}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <ul className="mt-3 mb-4 flex-1 space-y-1.5">
                {project.bullets.map((point, j) => (
                  <li key={j} className="flex gap-2 text-sm text-[var(--text-muted)] leading-relaxed">
                    <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-[var(--accent)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
