// Consistent spacing scale
export const spacing = {
  // Vertical rhythm
  section: {
    base: 'py-14',
    md: 'md:py-20',
    lg: 'lg:py-24',
  },
  // Between sections
  gap: {
    base: 'space-y-14',
    md: 'md:space-y-20',
    lg: 'lg:space-y-24',
  },
  // Content containers
  container: {
    base: 'px-4 sm:px-6',
    md: 'md:px-8',
  },
  // Grid gaps
  grid: {
    base: 'gap-4',
    md: 'md:gap-5',
    lg: 'lg:gap-6',
  },
};

// Typography scale
export const typography = {
  h1: 'text-4xl md:text-5xl font-semibold tracking-tight leading-tight',
  h2: 'text-3xl font-semibold tracking-tight leading-tight',
  h3: 'text-2xl font-semibold leading-tight',
  h4: 'text-xl font-semibold leading-tight',
  // Lead paragraph
  lead: 'text-xl text-brand-muted leading-relaxed',
  // Body text
  body: 'text-base text-brand-text leading-relaxed',
  small: 'text-sm text-brand-muted',
  // Labels and overlines
  label: 'text-xs font-semibold tracking-wider uppercase text-brand-emerald-300',
  // Navigation
  nav: 'text-sm font-medium text-brand-muted hover:text-brand-text transition-colors',
};

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Card styles
export const card = {
  base: 'rounded-2xl border border-brand-border bg-white/5 backdrop-blur-sm transition-all duration-300',
  hover: 'hover:border-brand-emerald-400/30 hover:shadow-glow hover:-translate-y-0.5',
  padding: 'p-6 sm:p-8',
  glass: 'bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border-white/5',
};

// Button styles
export const button = {
  base: 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-emerald-400 disabled:opacity-50 disabled:pointer-events-none',
  primary: 'bg-brand-gradient text-white hover:opacity-90 hover:shadow-glow',
  secondary: 'bg-white/5 border border-brand-border text-brand-text hover:bg-white/10 hover:border-white/20',
  size: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  },
};

// Section container with consistent spacing
export function Section({ children, className = '', ...props }) {
  return (
    <section 
      className={`${spacing.section.base} ${spacing.section.md} ${spacing.section.lg} ${spacing.container.base} ${spacing.container.md} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

// Section header with title and optional description
export function SectionHeader({ title, description, className = '' }) {
  return (
    <div className={`max-w-3xl mx-auto text-center mb-12 ${className}`}>
      {title && <h2 className={`${typography.h2} mb-4`}>{title}</h2>}
      {description && <p className={`${typography.lead} text-brand-muted`}>{description}</p>}
    </div>
  );
}
