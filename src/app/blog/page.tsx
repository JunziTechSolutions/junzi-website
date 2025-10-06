import Header from "@/components/landing/layout/header";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-200/40 via-transparent to-transparent" />
          <div className="container mx-auto px-4 pt-14 pb-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Blog</h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Insights from the Bleeding Edge of AI Search with AthenaHQ
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
            {posts.map((p) => (
              <article key={p.slug} className="group rounded-2xl bg-white/70 dark:bg-slate-900/70 shadow-xl ring-1 ring-black/5 overflow-hidden">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">{p.category}</div>
                  <Link href={p.href} className="block">
                    <h3 className="text-base md:text-lg font-semibold leading-snug mb-1 group-hover:underline">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{p.date}</span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white group-hover:bg-indigo-700">→</span>
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

const posts = [
  {
    slug: "ace-launch",
    href: "#",
    image: "/placeholder.svg",
    category: "General",
    title: "Announcing Athena Citation Engine (ACE)",
    excerpt:
      "Athena's September launch introduces the Athena Citation Engine (ACE), a machine learning model trained on millions of AI...",
    date: "September 29, 2025",
  },
  {
    slug: "prompt-volume-geo",
    href: "#",
    image: "/placeholder.svg",
    category: "GEO",
    title: "Estimating AI Prompt Volume Across Platforms",
    excerpt:
      "In the rapidly evolving landscape of artificial intelligence, understanding the volume of prompts across different AI platforms has...",
    date: "June 7, 2025",
  },
  {
    slug: "app-builder-race",
    href: "#",
    image: "/placeholder.svg",
    category: "GEO",
    title: "The AI App Builder Race: Market Share Reality Behind Lovable's Traffic Surge",
    excerpt:
      "In the rapidly evolving AI app development landscape, Lovable has captured headlines with its impressive traffic growth, but the...",
    date: "May 19, 2025",
  },
  {
    slug: "next-gen-rankings",
    href: "#",
    image: "/placeholder.svg",
    category: "General",
    title: "Unlocking Next-Gen Search Rankings with AI SEO Tools",
    excerpt:
      "The way people find information online is changing fast. In 2024, over 60% of users reported turning to AI-powered platforms like...",
    date: "October 4, 2025",
  },
  {
    slug: "brex-vs-ramp",
    href: "#",
    image: "/placeholder.svg",
    category: "General",
    title: "Brex vs Ramp: Differences Between Traffic Data from Similarweb & Reliable Sources",
    excerpt:
      "If you're running a fast-growing business, you've probably heard the Brex vs Ramp debate more times than you've heard 'let's...",
    date: "May 8, 2025",
  },
  {
    slug: "canva-vs-figma",
    href: "#",
    image: "/placeholder.svg",
    category: "General",
    title: "Canva vs. Figma: Who's winning AI Search? (AthenaHQ breakdown)",
    excerpt:
      "In 2025, the competition for digital visibility is more intense than ever. As design giants like Canva and Figma battle for dominance—each...",
    date: "April 19, 2025",
  },
] as const;


