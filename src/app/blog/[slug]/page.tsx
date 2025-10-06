import Header from "@/components/landing/layout/header";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "@/lib/blog";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  return {
    title: post ? `${post.title} — Blog` : "Blog",
    description: post?.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        {/* === Soft gradient background === */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-white to-white dark:from-indigo-900/30 dark:via-slate-900 dark:to-slate-900" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-200/60 to-transparent blur-3xl dark:from-indigo-500/25" />
        </div>

        {/* === Blog Post === */}
        <section
          className="
            container mx-auto 
            px-4 sm:px-6 md:px-8 
            py-12 sm:py-16 md:py-20 lg:py-24
            transition-all duration-300
          "
        >
          <div className="mx-auto max-w-4xl">
            {/* === Cover Image === */}
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                width={1280}
                height={720}
                className="
                  w-full h-auto object-cover 
                  transition-transform duration-500 hover:scale-[1.03]
                "
                priority
              />
            </div>

            {/* === Title + Meta === */}
            <div
              className="
                mt-8 sm:mt-10 md:mt-12 
                text-center md:text-left
                px-2 sm:px-0
              "
            >
              <h1
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                  font-bold tracking-tight leading-tight
                  text-slate-900 dark:text-white
                "
              >
                {post.title}
              </h1>

              {/* === Meta Info === */}
              <div
                className="
                  mt-6 sm:mt-8 
                  flex flex-col sm:flex-row sm:items-center sm:justify-between 
                  gap-5 text-sm sm:text-base
                  text-slate-600 dark:text-slate-300
                "
              >
                {/* Author */}
                <div className="flex items-center gap-3">
                  {post.author.avatar ? (
                    <div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-1 ring-black/5 bg-slate-200 flex-shrink-0">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-200 ring-1 ring-black/5" />
                  )}
                  <div className="leading-tight">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {/* Date + Read Time */}
                <div className="flex flex-wrap items-center justify-start sm:justify-end gap-2 text-xs sm:text-sm">
                  <span>{post.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* === Article Content === */}
            <article
              className="
                prose prose-slate dark:prose-invert 
                prose-headings:font-semibold prose-headings:text-slate-800 dark:prose-headings:text-slate-100
                prose-p:text-[0.95rem] sm:prose-p:text-base 
                prose-p:leading-relaxed 
                prose-img:rounded-xl 
                mt-10 sm:mt-12 md:mt-14 
                text-justify sm:text-left
                max-w-none
              "
            >
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </article>

            {/* === Bottom Padding / Footer Space === */}
            <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 flex flex-col items-center text-center">
              <div className="h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-slate-300/40 to-transparent dark:via-slate-700/50 mb-10" />
              <p className="text-sm text-slate-500 dark:text-slate-400 px-4 sm:px-0">
                © {new Date().getFullYear()} JunziTech Solutions — Built by founders, for founders.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
