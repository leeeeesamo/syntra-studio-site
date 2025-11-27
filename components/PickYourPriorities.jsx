"use client";

import { useState } from "react";

export default function PickYourPriorities({ priorities = [] }) {
  const [selected, setSelected] = useState([]);

  const togglePriority = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <section className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/20 p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)] text-center">
        Pick Your Priorities
      </h2>
      <p className="mt-3 text-sm sm:text-base text-[var(--syntra-text-muted)] text-center max-w-2xl mx-auto">
        Choose what matters most right now. We'll shape support around the work that keeps
        your business moving.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {priorities.map((priority) => {
          const isSelected = selected.includes(priority);
          return (
            <button
              key={priority}
              type="button"
              onClick={() => togglePriority(priority)}
              className={`px-4 py-2 rounded-full border text-xs sm:text-sm transition-colors ${
                isSelected
                  ? "bg-indigo-500 text-white border-indigo-400"
                  : "bg-black/40 text-[var(--syntra-text-muted)] border-[var(--syntra-border-soft)] hover:bg-black/60"
              }`}
            >
              {priority}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-xs sm:text-sm text-[var(--syntra-text-muted)] text-center">
        Selected: <span className="text-[var(--syntra-text-main)] font-medium">{selected.length}</span> item
        {selected.length === 1 ? "" : "s"}
      </p>
    </section>
  );
}
