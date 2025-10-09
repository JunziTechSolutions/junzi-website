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
              Meet the team building the future of software development at Junzi Tech Solutions
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
<section className="container mx-auto max-w-5xl px-5 sm:px-6 lg:px-5 pb-28">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 items-stretch scale-[0.95] md:scale-100 origin-top mx-auto">
    {teamMembers.map((m) => (
      <div
        key={m.name}
        className="group h-full flex flex-col min-h-[320px] sm:min-h-[360px] md:min-h-[400px]
                   rounded-[20px] bg-white/85 dark:bg-slate-900/70 backdrop-blur
                   shadow-xl ring-1 ring-black/5 dark:ring-white/10
                   transition-all duration-300 active:translate-y-px hover:shadow-2xl"
      >
        {/* Image Section */}
        <div className="p-2 pb-0">
          <div
            className="relative w-full overflow-hidden rounded-[18px]"
            style={{
              backgroundColor: m.photoBg || "#4338CA",
              height: "500px",
            }}
          >
            <Image
              src={m.photo}
              alt={m.name}
              width={400}
              height={500}
              className="object-cover object-top w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />

            {/* Hover Legend Overlay */}
            <div
              className="absolute inset-0 transition-[clip-path,opacity] duration-700 ease-out 
                         [clip-path:circle(0%_at_50%_0%)] group-hover:[clip-path:circle(140%_at_50%_0%)] 
                         opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: m.legendBg || "#E8E4DA" }}
            >
              <Image
                src={m.legend}
                alt={`${m.name} legend`}
                width={400}
                height={500}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col px-3 pt-3 pb-4">
          <div className="mb-3">
            <h3 className="text-[20px] leading-6 font-bold text-slate-900 dark:text-white">
              {m.name}
            </h3>
            <p className="text-xs font-semibold text-indigo-700 mt-1">{m.title}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {m.bio}
            </p>
          </div>

          <div className="mt-auto">
            <a
              href={m.linkedin}
              aria-label={`${m.name} LinkedIn`}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition"
            >
              <Linkedin size={16} />
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
