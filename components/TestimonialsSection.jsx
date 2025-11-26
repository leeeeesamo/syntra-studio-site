const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Collective",
    quote:
      "Syntra completely transformed how I manage my day-to-day. What used to take me hours now gets handled seamlessly. I finally have time to focus on growing my business.",
    initials: "SM",
  },
  {
    name: "David Chen",
    role: "CEO, NorthPoint Consulting",
    quote:
      "The level of professionalism and attention to detail is exceptional. Syntra feels like an extension of my own team — reliable, proactive, and always a step ahead.",
    initials: "DC",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Velvet Studios",
    quote:
      "From inbox management to campaign coordination, Syntra handles it all with care. Their communication is clear, and nothing ever falls through the cracks.",
    initials: "ER",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4 text-[var(--syntra-heading)]">
        Client Feedback
      </h2>
      <p className="text-center text-[var(--syntra-text-muted)] max-w-2xl mx-auto mb-12">
        Here's what our clients have to say about working with Syntra.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="flex flex-col gap-5"
          >
            {/* Quote */}
            <blockquote className="text-[var(--syntra-text-muted)] text-sm leading-relaxed italic">
              "{testimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[var(--syntra-border-soft)]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--syntra-gradient-start)] to-[var(--syntra-gradient-end)] flex items-center justify-center text-white text-sm font-semibold">
                {testimonial.initials}
              </div>
              <div>
                <p className="font-medium text-[var(--syntra-heading)] text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[var(--syntra-text-muted)]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 border-t border-[var(--syntra-border-soft)] max-w-5xl mx-auto" />
    </section>
  );
}
