import Header from "@/components/landing/layout/header";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-200/40 via-transparent to-transparent" />
          <div className="container mx-auto px-4 pt-14 pb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">About Us</h1>
            <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">
              Meet the team building the future of brand
              <br />
              management on AI Search
            </p>
          </div>
        </section>

        {/* Experience logos */}
        <section className="container mx-auto px-4 pb-10">
          <p className="text-center text-sm text-slate-500 mb-4">
            Built with <span className="text-indigo-600 font-medium">experience</span> from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
            <span className="text-slate-700">Y&nbsp;Combinator</span>
            <span className="text-slate-700">Google</span>
            <span className="text-slate-700">DeepMind</span>
            <span className="text-slate-700">ServiceNow</span>
          </div>
        </section>

        {/* Team grid */}
        <section className="container mx-auto px-4 pb-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {teamMembers.map((m) => (
              <article key={m.name} className="rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-xl ring-1 ring-black/5 overflow-hidden">
                <div className="p-4">
                  <div className="relative rounded-xl overflow-hidden bg-indigo-600/20 mb-4 h-56">
                    <Image src={m.photo} alt={m.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{m.name}</h3>
                  <p className="text-xs font-semibold text-indigo-700 mt-1 mb-3">{m.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 whitespace-pre-line">{m.bio}</p>
                  <a href={m.linkedin} aria-label={`${m.name} LinkedIn`} className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700">
                    <Linkedin size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="container mx-auto px-4 pb-16 text-center">
          <a href="/form" className="inline-block rounded-full bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700 transition-colors">
            Schedule a Call
          </a>
        </div>
      </main>
    </>
  );
}

const teamMembers = [
  {
    name: "Ganesh Asapu",
    title: "Founding Engineer",
    photo: "/placeholder.svg",
    linkedin: "#",
    bio:
      "Former ML engineer at Cohere, Voiceflow, and Wisedocs. Built SOTA LLMs, shipped AI agents into finance, healthcare, and insurance, and somehow still likes datasets. On leave from the University of Toronto to build AthenaHQ.",
  },
  {
    name: "Grant Harvey",
    title: "Founding GTM",
    photo: "/placeholder.svg",
    linkedin: "#",
    bio:
      "Grant enjoys long walks on the golf course when he is not helping folks crush their GEO goals. Some say he does everything possible to avoid the tech elite of San Francisco, so he lives in Palo Alto. He will always find a way to tell you he played D1 college sport and how much his back hurts. When people ask him where he went to college, he just shrugs his shoulders and says a small school in Boston.",
  },
  {
    name: "Merrick Liu",
    title: "Founding Engineer",
    photo: "/placeholder.svg",
    linkedin: "#",
    bio:
      "Former engineer at Mercury. Worked on credit and debit card processing. Built various AI-powered tools, and did research on biologically plausible deep learning algorithms.\n\nWill graduate from the University of Toronto at some point.",
  },
  {
    name: "James Moreno",
    title: "Founding GTM",
    photo: "/placeholder.svg",
    linkedin: "#",
    bio:
      "",
  },
] as const;


