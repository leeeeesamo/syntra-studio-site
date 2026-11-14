// components/MiniHero.jsx
const VARIANTS = {
  "neon-waves": {
    src: "/brand-assets/neon-waves-mini-hero.webp",
    overlay: "std",
  },
  "neon-middle": {
    src: "/brand-assets/neon-wave-middle-mini-hero.webp",
    overlay: "std",
  },
  "neon-top-bottom": {
    src: "/brand-assets/neon-wave-top-bottom-mini-hero.webp",
    overlay: "std",
  },
  "neon-node": {
    src: "/brand-assets/neon-node-mini-hero.webp",
    overlay: "std",
  },
  "neon-nodes": {
    src: "/brand-assets/neon-nodes-hero.webp",
    overlay: "strong",
  },
  "blue-waves": {
    src: "/brand-assets/blue-waves-mini-hero.webp",
    overlay: "std",
  },
};

const OVERLAYS = {
  std: "from-slate-900/50 via-slate-950/60 to-slate-950/75",
  strong: "from-slate-950/70 via-slate-950/65 to-slate-950/80",
};

export default function MiniHero({
  title,
  titleAccent,
  subtitle,
  badge,
  variant = "neon-waves",
  compact = false,
  position = "center 62%",
  children,
}) {
  const art = VARIANTS[variant] || VARIANTS["neon-waves"];

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        compact
          ? "min-h-[180px] sm:min-h-[210px]"
          : "min-h-[240px] sm:min-h-[280px] md:min-h-[310px]"
      }`}
    >
      {/* Wave artwork */}
      <div
        className="absolute inset-0 -z-10 bg-slate-950 bg-cover"
        style={{
          backgroundImage: `url('${art.src}')`,
          backgroundPosition: position,
        }}
      />

      {/* Readability overlay — same diagonal treatment as the homepage hero,
          per-variant strength, deepened in compact mode for a quieter look */}
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${
          compact
            ? "from-slate-950/80 via-slate-950/65 to-slate-950/80"
            : OVERLAYS[art.overlay]
        }`}
      />

      <div className="container relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        {badge && (
          <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6">
            {badge}
          </span>
        )}
        <h1
          className={`font-bold tracking-tight leading-tight ${
            compact
              ? "text-2xl sm:text-4xl"
              : "text-4xl sm:text-5xl md:text-6xl"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
            {title}
          </span>
          {titleAccent && (
            <span className="block mt-4 text-blue-400">{titleAccent}</span>
          )}
        </h1>
        {subtitle && (
          <p
            className={`mt-4 text-slate-300 leading-relaxed ${
              compact ? "text-base sm:text-lg" : "text-base sm:text-lg md:text-xl"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
