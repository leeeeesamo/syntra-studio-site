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
    <section className="rounded-2xl border border-[var(--syntra-border-soft)] bg-black/25 p-6 sm:p-8 md:p-10 shadow-sm shadow-black/40">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--syntra-heading)] text-center">
        Pick Your Priorities
      </h2>
      <p className="mt-3 text-sm sm:text-base text-[var(--syntra-text-muted)] text-center max-w-2xl mx-auto">
        Choose what matters most right now. We'll shape support around the work that keeps
        your business moving.
      </p>

      <div className="mt-7 flex flex-wrap gap-3.5 md:gap-4 justify-center">
        {priorities.map((priority) => {
          const isSelected = selected.includes(priority);
          return (
            <button
              key={priority}
              type="button"
              onClick={() => togglePriority(priority)}
              className={`px-5 py-2.5 rounded-full border text-sm sm:text-base transition-colors ${
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

      <div className="mt-5 flex justify-center">
        <p className="text-[11px] sm:text-xs text-[var(--syntra-text-muted)] flex items-center gap-2">
          <span>Selected</span>
          <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-black/40 text-[var(--syntra-text-main)] text-xs sm:text-sm font-medium min-w-[2.25rem]">
            {selected.length}
          </span>
          <span>item{selected.length === 1 ? "" : "s"}</span>
        </p>
      </div>
    </section>
  );
}
