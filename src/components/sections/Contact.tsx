"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bg-subtle)]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] font-mono text-xs tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-[var(--text)]">Get In Touch</h2>
          <p className="text-[var(--text-muted)] mt-3 max-w-md">
            Always open to new opportunities and collaborations. Feel free to
            reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <Mail size={15} className="text-[var(--accent)] shrink-0" />
              <a
                href="mailto:ujjwaldodeja@gmail.com"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                ujjwaldodeja@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={15} className="text-[var(--accent)] shrink-0" />
              <p className="text-sm text-[var(--text-muted)]">Enschede, Netherlands</p>
            </div>

            <div className="flex gap-3 pt-1">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ujjwal-dodeja-aba2b0261"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-2 py-8">
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <Send size={16} />
                  <span className="font-medium">Message sent!</span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-3 py-2.5 text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-3 py-2.5 text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-3 py-2.5 text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)]/60 transition-colors resize-none"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] hover:opacity-90 text-white text-sm font-medium rounded-full transition-opacity duration-200"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
