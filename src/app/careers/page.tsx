import Header from "@/components/landing/layout/header";

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-200/40 via-transparent to-transparent" />
          <div className="container mx-auto px-4 pt-14 pb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Join AthenaHQ</h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Revolutionizing brand management in the AI Era of Search
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Open Positions</h2>
          <p className="text-slate-500 text-sm md:text-base mb-6 max-w-2xl">
            Please email careers@athenahq.ai with your resume, a link
            to your strongest work, and one paragraph about anything.
          </p>

          <div className="space-y-8">
            {openRoles.map((role, idx) => (
              <div key={role.title} className="relative">
                {/* subtle glow */}
                <div className="pointer-events-none absolute -inset-x-2 -top-2 h-2 rounded-full bg-indigo-500/30 blur-xl" />
                <article className="relative rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-xl ring-1 ring-black/5 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-1">{role.title}</h3>
                  <p className="text-[11px] md:text-xs text-slate-500 mb-4">{role.meta}</p>
                  <p className="text-sm text-slate-700 mb-6">{role.summary}</p>
                  <a
                    href={role.applyHref}
                    className="inline-block rounded-md bg-indigo-600 text-white text-xs md:text-sm px-4 py-2 font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Apply Now
                  </a>
                </article>
              </div>
            ))}
          </div>

          <div className="py-12 text-center">
            <a href="/form" className="inline-block rounded-full bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

const openRoles = [
  {
    title: "Engineer",
    meta: "Engineering · SF · Full-time",
    summary: "Athena Core GEO platform.",
    applyHref: "/form",
  },
  {
    title: "Account Executive",
    meta: "Go-to-Market · SF, Remote · Full-time",
    summary:
      "Bring AthenaHQ to serve more customers around the world. Understand business challenges, manage the sales process, and build long-term relationships with customers.",
    applyHref: "/form",
  },
  {
    title: "Growth (Technical)",
    meta: "Growth · SF · Full-time",
    summary: "Bring AthenaHQ to serve more customers around the world.",
    applyHref: "/form",
  },
] as const;


