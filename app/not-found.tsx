import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 text-on-surface">
      <section className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#1B6D24]">
          <span className="material-symbols-outlined text-[34px]">travel_explore</span>
        </div>
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#1B6D24]">404</p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-on-surface">
          This page does not exist.
        </h1>
        <p className="mb-8 text-sm leading-6 text-on-surface-variant">
          The link may be broken, or the page may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-[#1B6D24] px-6 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#005312] focus:outline-none focus:ring-2 focus:ring-[#1B6D24]/30"
        >
          Go Back to Home
        </Link>
      </section>
    </main>
  );
}
