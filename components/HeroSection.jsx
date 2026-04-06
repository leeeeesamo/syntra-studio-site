import Link from 'next/link';

const floatingOrbs = [
  { size: 16, x: '15%', y: '20%', opacity: 0.12, duration: 22 },
  { size: 22, x: '70%', y: '18%', opacity: 0.10, duration: 28 },
  { size: 14, x: '55%', y: '55%', opacity: 0.11, duration: 26 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Hero background image */}
        <div className="absolute inset-0 hero-bg" />

        {/* Enhanced overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-950/60 to-slate-950/70" />

        {/* Floating elements (kept subtle) — pure CSS */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingOrbs.map((orb, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-float"
              style={{
                width: `${orb.size}rem`,
                height: `${orb.size}rem`,
                left: orb.x,
                top: orb.y,
                opacity: orb.opacity,
                animationDuration: `${orb.duration}s`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>

      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-6"
          >
            Reliable by Design
          </span>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
              Systems that support your business - not slow it down.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6 animate-fade-in-up animate-delay-100"
            style={{ opacity: 0 }}
          >
            Syntra Digital partners with service-based businesses to build and maintain dependable websites and operational systems that actually support day-to-day work.
          </p>

          <p
            className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up animate-delay-200"
            style={{ opacity: 0 }}
          >
            From strategy and implementation to ongoing systems support, we focus on building infrastructure you can rely on.
          </p>

          <div
            className="flex items-center justify-center animate-fade-in-up animate-delay-300"
            style={{ opacity: 0 }}
          >
            <Link href="/contact" className="btn-primary">
              Start with a Systems Review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
