import Header from "@/components/landing/layout/header";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        {/* Background: soft wash + radial/linear gradient orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* page wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/50 via-white to-white dark:from-indigo-900/30 dark:via-slate-900 dark:to-slate-900" />
          {/* top halo */}
          <div className="absolute -top-36 left-1/2 h-[520px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-300/50 to-transparent blur-3xl dark:from-indigo-500/25" />
          {/* large radial behind list */}
          <div className="absolute top-[360px] left-1/2 -translate-x-1/2 h-[700px] w-[1200px] rounded-[999px] blur-3xl opacity-80
            bg-[radial-gradient(80%_60%_at_50%_40%,theme(colors.violet.400/.35),transparent_60%)]" />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* subtle top gradient line */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-200/40 via-transparent to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-40 pb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
              Join Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
              Building innovative technology solutions for the future
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Open Positions
          </h2>
          <p className="text-slate-500 text-base sm:text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            Please email <a className="underline decoration-indigo-500/50 underline-offset-4" href="mailto:nclark@junzitechsolutions.com">nclark@junzitechsolutions.com</a> with your resume, a link
            to your strongest work, and one paragraph about anything.
          </p>

          <div className="relative">
            {/* long horizontal “gradient linear circle” glow under the list */}
            <div className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 -top-4 h-8 w-[92%] sm:w-[95%] rounded-full blur-2xl
              bg-gradient-to-r from-violet-500/45 via-indigo-500/40 to-transparent" />

            <div className="space-y-10">
              {openRoles.map((role) => (
                <div key={role.title} className="relative">
                  {/* individual card glow */}
                  <div className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 -top-2 h-3 w-[85%] rounded-full blur-xl
                    bg-gradient-to-r from-violet-500/35 via-indigo-500/30 to-transparent" />
                  <article className="relative rounded-xl bg-white/80 dark:bg-slate-900/70 backdrop-blur
                      shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{role.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-500 mb-3">{role.meta}</p>
                    <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{role.summary}</p>
                    <a
                      href={role.applyHref}
                      className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white text-xs px-4 py-3 font-semibold
                        hover:bg-indigo-700 active:translate-y-px transition min-w-[80px] h-[45px] justify-center"
                    >
                      Apply Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA with responsive spacing */}
          <div className="pt-16 sm:pt-18 md:pt-20 lg:pt-24 text-center">
            <a
              href="/form"
              className="inline-flex items-center rounded-lg bg-indigo-600 text-white px-8 py-3 font-semibold
                hover:bg-indigo-700 active:translate-y-px transition min-w-[120px] h-[45px] justify-center"
            >
              Contact Us
            </a>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              Don't see a fit? Reach out anyway — we love meeting builders.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

const openRoles = [
  {
    title: "Engineer",
    meta: "Engineering · Remote · Full-time",
    summary: "Build cutting-edge technology solutions with our engineering team.",
    applyHref: "/form",
  },
  {
    title: "Account Executive",
    meta: "Go-to-Market · Remote · Full-time",
    summary:
      "Bring Junzi Tech Solutions to serve more customers around the world. Understand business challenges, manage the sales process, and build long-term relationships with customers.",
    applyHref: "/form",
  },
  {
    title: "Growth (Technical)",
    meta: "Growth · Remote · Full-time",
    summary: "Bring Junzi Tech Solutions to serve more customers around the world.",
    applyHref: "/form",
  },
] as const;
