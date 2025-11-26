// components/PageHero.jsx
export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative -mt-20 pt-20 pb-3 sm:pb-4 md:pb-5 border-b border-[var(--syntra-border-soft)] bg-black/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--syntra-heading)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-base sm:text-lg text-[var(--syntra-text-muted)] max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
