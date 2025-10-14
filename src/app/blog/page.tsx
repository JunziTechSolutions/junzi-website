import Header from "@/components/landing/layout/header";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        {/* Background: soft linear gradient + decorative orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-white dark:from-indigo-900/30 dark:via-slate-900 dark:to-slate-900" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-200/60 to-transparent blur-3xl dark:from-indigo-500/25" />
          <div className="absolute top-24 -left-24 size-64 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-500/20" />
          <div className="absolute -bottom-16 -right-20 size-72 rounded-full bg-fuchsia-200/25 blur-3xl dark:bg-fuchsia-500/20" />
        </div>

        {/* Hero */}
        <section className="relative">
          <div className="container mx-auto px-4 pt-40 pb-15">
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Inter", "Helvetica Neue", sans-serif',
              }}
            >
              Blog
            </h1>
            <p
              className="mt-3 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Inter", "Helvetica Neue", sans-serif',
              }}
            >
              Insights and updates from Junzi Tech Solutions
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="container mx-auto px-4 pt-16 pb-24 md:pb-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-3xl text-grey font-medium font-primary shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-slate-900/60 dark:ring-white/10 transition hover:shadow-2xl"
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="relative block aspect-[16/9] overflow-hidden touch-manipulation select-none"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="
                      object-cover object-center w-full h-full
                      [transform:translateZ(0)]
                      md:transition md:duration-500 md:ease-out
                      md:group-hover:scale-105 md:group-hover:grayscale
                    "
                    // Match your grid: ~33% at lg, 50% at md, full width below
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    priority
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
                </Link>

                {/* content */}
                <div
                  className="flex flex-col flex-1 p-5 md:p-6"
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Inter", "Helvetica Neue", sans-serif',
                  }}
                >
                  <div className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                    {p.category}
                  </div>

                  <Link href={`/blog/${p.slug}`} className="block">
                    <h3 className="text-ml md:text-ml font-bold font-primary leading-snug text-slate-900 dark:text-white transition md:group-hover:underline">
                      {p.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-base text-slate-600 dark:text-slate-300 line-clamp-3">
                    {p.excerpt}
                  </p>

                  <div className="mt-auto pt-4 flex items-center justify-between text-base text-grey dark:text-slate-400">
                    <span>{p.date}</span>
                    <Link
                      href={`/blog/${p.slug}`}
                      aria-label={`Open post: ${p.title}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 md:group-hover:translate-x-0.5 md:group-hover:scale-105 shadow-md"
                      style={{
                        background:
                          "linear-gradient(97.94deg, #4461B1 -2.89%, #4FABFF 91.06%)",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m-7-7l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
