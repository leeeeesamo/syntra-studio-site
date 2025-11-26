// components/Button.jsx
export default function Button({ children, href, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all";

  const styles = {
    primary: `${base} text-white bg-gradient-to-r from-[var(--syntra-gradient-start)] to-[var(--syntra-gradient-end)] shadow-lg hover:opacity-90`,
    outline: `${base} border border-[var(--syntra-border-soft)] text-[var(--syntra-text-main)] hover:bg-white/10`,
  };

  return (
    <a href={href} className={styles[variant]}>
      {children}
    </a>
  );
}
