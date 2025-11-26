import Link from "next/link";

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-[var(--syntra-text-muted)] mb-6">
      <ol className="flex flex-wrap gap-1 sm:gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && <span>/</span>}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-[var(--syntra-text-main)]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--syntra-text-main)]">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
