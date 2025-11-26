export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-8 pt-24">
      <h1 className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-[var(--syntra-gradient-start)] to-[var(--syntra-gradient-end)] bg-clip-text text-transparent mb-4">
        404
      </h1>

      <p className="text-lg sm:text-xl text-[var(--syntra-text-muted)] max-w-lg mb-10">
        The page you’re looking for doesn’t exist — but your workload still
        does. Let’s get you back to where the useful stuff lives.
      </p>

      <a href="/" className="btn-primary">
        Back to Home
      </a>
    </section>
  );
}
