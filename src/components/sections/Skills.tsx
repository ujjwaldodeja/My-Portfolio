"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C++", "Haskell", "JavaScript", "TypeScript", "SQL", "PHP", "ANTLR", "VHDL"],
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Keras", "NumPy", "Deep Java Learning", "AI Inference Pipelines", "Model Training"],
  },
  {
    category: "Backend",
    skills: ["Quarkus", "Springboot", "Django", "Laravel", "REST APIs", "mTLS", "GraphQL", "FastAPI"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git", "Helm", "CI/CD", "RabbitMQ", "Gradle", "Maven", "ElasticSearch", "Lens", "Jupyter", "Android SDK"],
  },
  {
    category: "CS Foundations",
    skills: ["Algorithms", "Compiler Construction", "Android Dev", "UML", "Network Architecture", "CyberSecurity", "Agile", "DBMS"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-xs tracking-widest uppercase mb-2">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-[var(--text)]">What I Work With</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-2.5 py-1 rounded-md bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-2)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-colors duration-150 cursor-default"
                  >
                    {skill}
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
