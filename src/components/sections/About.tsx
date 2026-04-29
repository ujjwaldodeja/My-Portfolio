"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const education = [
  {
    degree: "B.Sc. Technical Computer Science",
    school: "Universiteit Twente",
    period: "2020 – Feb 2024",
  },
  {
    degree: "High School Diploma",
    school: "The Jain International School",
    period: "2017 – 2019",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 bg-[var(--bg-subtle)]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-xs tracking-widest uppercase mb-2">
            About
          </p>
          <h2 className="text-3xl font-bold text-[var(--text)]">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-10">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-1 flex justify-center md:justify-start"
          >
            <div className="relative w-40 h-40 md:w-full md:h-52 rounded-2xl overflow-hidden border border-[var(--border)] shrink-0">
              <Image
                src="/avatar.jpeg"
                alt="Ujjwal Dodeja"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-[var(--text-2)] leading-relaxed">
              I&apos;m a software engineer with a deep interest in mathematics
              and logical reasoning, driven by a constant desire to push my
              limits and solve complex problems in clean, well-structured ways.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Currently working as a{" "}
              <span className="text-[var(--text-2)]">Medior Software Developer & AI Engineer</span>{" "}
              at <span className="text-[var(--accent)]">eData</span>, I focus
              on backend development and AI systems — building robust
              Java/Quarkus services, maintaining and retraining ML models, and
              migrating inference pipelines for improved performance. My
              strongest languages are{" "}
              <span className="text-[var(--text-2)]">Java</span>,{" "}
              <span className="text-[var(--text-2)]">Python</span>, and{" "}
              <span className="text-[var(--text-2)]">Haskell</span>.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              I take a structured, team-oriented approach to development with a
              clear focus on{" "}
              <span className="text-[var(--text-2)]">building solutions that drive business value</span>{" "}
              — prioritising team goals, clear communication, and outcomes that
              matter to stakeholders.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Outside of tech, I&apos;m an athlete and sports enthusiast. Team
              sports have sharpened my communication and leadership, while
              individual sports have built my discipline and self-confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Education
            </p>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.school} className="border-l-2 border-[var(--border)] pl-4">
                  <p className="text-sm font-medium text-[var(--text)]">{e.degree}</p>
                  <p className="text-sm text-[var(--accent)] mt-0.5">{e.school}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{e.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
