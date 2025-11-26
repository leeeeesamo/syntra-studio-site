export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[var(--syntra-border-soft)] bg-black/20 backdrop-blur-sm mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-[var(--syntra-text-muted)]">
        <p>© {new Date().getFullYear()} Syntra Digital Solutions</p>
        <p className="mt-2 tracking-wide text-[var(--syntra-text-dark)]">
          Reliable by Design.
        </p>
      </div>
    </footer>
  );
}
