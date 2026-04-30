"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/ujjwal-dodeja-aba2b0261", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ujjwaldodeja@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      <div className="max-w-2xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[var(--accent)] text-sm font-mono tracking-widest uppercase mb-6"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-6xl font-bold text-[var(--text)] tracking-tight mb-3"
        >
          Ujjwal Dodeja
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl font-medium text-[var(--text-muted)] mb-6"
        >
          Software Developer & AI Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[var(--text-muted)] leading-relaxed mb-10 max-w-lg"
        >
          I love building things — from robust backend systems and AI pipelines
          to the occasional interpreted language. Driven by curiosity, mathematics,
          and a desire to solve hard problems in clean, well-structured ways.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-2.5 bg-[var(--accent)] hover:opacity-90 text-white text-sm font-medium rounded-full transition-opacity duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-[var(--border-strong)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--accent)] text-sm font-medium rounded-full transition-colors duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-4"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown className="text-[var(--border-strong)]" size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
