"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Medior Software Developer",
    company: "eData",
    period: "Dec 2025 — Present",
    location: "Hengelo, Netherlands",
    description: [
      "Developing and maintaining a comprehensive SaaS solution for managing the entire disclosure lifecycle, enhancing document processing efficiency.",
      "Leading the maintenance and optimization of AI models, ensuring high performance and reliability.",
      "Redesigned scalable AI inference pipelines, significantly improving system performance and architectural integrations.",
    ],
    tech: ["Java", "Quarkus", "AI/ML", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    role: "Software Developer",
    company: "eData",
    period: "Sep 2024 — Dec 2025",
    location: "Hengelo, Netherlands",
    description: [
      "Built and maintained backend services for a SaaS platform focused on document lifecycle management.",
      "Contributed to AI pipeline development and system integration using Java and Quarkus.",
      "Worked on model retraining workflows to adapt AI systems to evolving requirements.",
    ],
    tech: ["Java", "Quarkus", "Python", "PyTorch", "REST APIs", "mTLS"],
  },
  {
    role: "Secretary",
    company: "B.S.V Stoottroepen",
    period: "Oct 2022 — Mar 2025",
    location: "Enschede, Netherlands",
    description: [
      "Managed member intake and day-to-day operations for a sports association at the University of Twente.",
      "Organised an 8-ball pool tournament in 2022, handling marketing, fixtures, and participation.",
    ],
    tech: ["Leadership", "Event Management"],
  },
  {
    role: "Assistant Sales Manager",
    company: "S.L. Communication Sales",
    period: "Sep 2019 — Jul 2020",
    location: "Lucknow, India",
    description: [
      "Helped the firm build rapport with potential clients and maintained an end-to-end sales database.",
      "Handled IT operations for sales and accounts, collaborating with local partners and sales teams.",
    ],
    tech: ["Sales", "Client Relations", "IT Operations"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-xs tracking-widest uppercase mb-2">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-[var(--text)]">Work Experience</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-6 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-[var(--border)]" />
              {/* Dot */}
              <div className="absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-semibold text-[var(--text)]">{exp.role}</h3>
                <span className="text-xs text-[var(--text-muted)] shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-[var(--accent)] mb-3">
                {exp.company} · {exp.location}
              </p>

              <ul className="space-y-1.5 mb-4">
                {exp.description.map((point, j) => (
                  <li key={j} className="text-sm text-[var(--text-muted)] leading-relaxed flex gap-2">
                    <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-[var(--border-strong)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
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
