// app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center text-center py-32 px-6">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[var(--syntra-gradient-start)] to-[var(--syntra-gradient-end)] bg-clip-text text-transparent mb-6">
        Page Not Found
      </h1>

      <p className="text-lg text-[var(--syntra-text-muted)] max-w-lg mb-10">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link href="/" className="btn-primary px-8 py-3">
        Back to Home
      </Link>
    </main>
  );
}
