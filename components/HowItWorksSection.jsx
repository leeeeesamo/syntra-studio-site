"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Schedule a quick call",
    body:
      "We’ll talk through what you need, where things feel heavy, and what kind of support will make the biggest impact.",
    label: "Step 1",
  },
  {
    title: "Select your support level",
    body:
      "Choose between ongoing partnership or a focused project — we’ll guide you toward the right fit based on your workflow and goals.",
    label: "Step 2",
  },
  {
    title: "Start with clarity and structure",
    body:
      "We set up simple, reliable systems and begin supporting you from day one — clear communication and steady follow-through included.",
    label: "Step 3",
  },
];

export default function HowItWorksSection() {
  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[var(--syntra-heading)]">
        Getting started
      </h2>
      <p className="mt-2 text-base sm:text-lg text-center text-[var(--syntra-text-muted)]">
        A simple, three-step start.
      </p>
      <p className="text-center text-[var(--syntra-text-muted)] max-w-2xl mx-auto mb-12">
        A clear path from first conversation to working together, so you always know what comes next.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 flex flex-col gap-4 shadow-md"
          >
            <span className="inline-flex items-center justify-center text-xs uppercase tracking-wide px-3 py-1 rounded-full bg-white/5 border border-[var(--syntra-border-soft)] text-[var(--syntra-text-muted)]">
              {step.label}
            </span>
            <h3 className="font-semibold text-lg text-[var(--syntra-heading)]">
              {step.title}
            </h3>
            <p className="text-[var(--syntra-text-muted)] text-sm leading-relaxed">
              {step.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 border-t border-[var(--syntra-border-soft)] max-w-5xl mx-auto" />
    </motion.section>
  );
}
