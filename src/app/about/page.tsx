import Header from "@/components/landing/layout/header";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { teamMembers } from "@/lib/team";  

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/50 via-white to-white dark:from-indigo-900/30 dark:via-slate-900 dark:to-slate-900" />
          <div className="absolute -top-36 left-1/2 h-[520px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-300/50 to-transparent blur-3xl dark:from-indigo-500/25" />
          <div className="absolute top-[360px] left-1/2 -translate-x-1/2 h-[700px] w-[1200px] rounded-[999px] blur-3xl opacity-80 bg-[radial-gradient(80%_60%_at_50%_40%,theme(colors.violet.400/.35),transparent_60%)]" />
        </div>

        {/* Hero Section */}
        <section className="relative text-center">
          <div className="container mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 pt-40 pb-15 sm:pb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
              About Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Meet the team building the future of brand management on AI Search
            </p>
          </div>
        </section>

        {/* Experience Logos */}
        <section className="relative pt-16 sm:pt-15 pb-40">
          <div className="container mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
            <p className="text-center text-sm sm:text-base text-slate-500 mb-6">
              Built with{" "}
              <span className="text-indigo-600 font-medium underline underline-offset-4 decoration-indigo-400/60">
                experience
              </span>{" "}
              from
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-16 sm:gap-x-20 gap-y-8">
              <Image src="/worked-at-logos/yc-logo.svg" alt="Y Combinator" width={120} height={30} className="h-7 sm:h-8 w-auto opacity-90" priority />
              <Image src="/worked-at-logos/google-logo.svg" alt="Google" width={110} height={28} className="h-6 sm:h-7 w-auto opacity-90" />
              <Image src="/worked-at-logos/deepmind-logo.svg" alt="DeepMind" width={110} height={28} className="h-6 sm:h-7 w-auto opacity-90" />
              <Image src="/worked-at-logos/servicenow-logo.svg" alt="ServiceNow" width={130} height={28} className="h-6 sm:h-7 w-auto opacity-90" />
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="container mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 pb-28">
          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2  gap-x-10 gap-y-14 items-stretch">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="group h-full flex flex-col min-h-[600px] rounded-[20px] bg-white/85 dark:bg-slate-900/70 backdrop-blur shadow-xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-500 hover:-translate-y-[3px] hover:shadow-2xl"
              >
                <div className="p-6 pb-0">
                  <div
                    className="relative w-full overflow-hidden rounded-[18px]"
                    style={{ backgroundColor: m.photoBg || "#4338CA", aspectRatio: "16 / 9" }}
                  >
                    <Image src={m.photo} alt={m.name} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]" sizes="(min-width: 1024px) 560px, 100vw" />

                    <div
                      className="absolute inset-0 transition-[clip-path,opacity] duration-700 ease-out [clip-path:circle(0%_at_50%_0%)] group-hover:[clip-path:circle(140%_at_50%_0%)] opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: m.legendBg || "#E8E4DA" }}
                    >
                      <Image src={m.legend} alt={`${m.name} legend`} fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col px-7 pt-6 pb-8">
                  <div className="mb-6">
                    <h3 className="text-[28px] leading-8 font-extrabold text-slate-900 dark:text-white">{m.name}</h3>
                    <p className="text-xs font-semibold text-indigo-700 mt-2">{m.title}</p>
                    <p className="mt-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{m.bio}</p>
                  </div>

                  <div className="mt-auto">
                    <a href={m.linkedin} aria-label={`${m.name} LinkedIn`} className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="container mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 pb-28 text-center">
          <a href="/form" className="inline-flex items-center rounded-full bg-indigo-600 text-white px-6 py-3 sm:px-7 sm:py-3.5 font-semibold hover:bg-indigo-700 active:translate-y-px transition">
            Schedule a Call
          </a>
        </section>
      </main>
    </>
  );
}
