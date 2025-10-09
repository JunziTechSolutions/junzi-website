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
              style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Inter", "Helvetica Neue", sans-serif'}}
            >
              <h1
                className="
                  text-l sm:text-4xl md:text-5xl lg:text-6xl 
                  font-bold font-primary tracking-tight leading-tight
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
                  <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/Artifex_ME_1v_Favicon.png"
                      alt={post.author.name}
                      width={54}
                      height={54}
                      className="object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="font-medium text-slate-900 text-m font-primary dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-s sm:text-sm text-font-light dark:text-slate-400 font-[inherit]">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {/* Date + Read Time */}
                <div className="flex flex-wrap items-center justify-start sm:justify-end gap-2 text-s sm:text-sm text-font-light font-[inherit]">
                  <span>{post.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* === Article Content === */}
            <article
              className="
                prose prose-lg prose-slate dark:prose-invert 
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-base prose-p:leading-relaxed prose-p:mb-5
                prose-ul:my-6 prose-li:my-2
                prose-strong:font-bold prose-strong:text-slate-900 dark:prose-strong:text-white
                prose-img:rounded-xl 
                mt-10 sm:mt-12 md:mt-14 
                text-left
                max-w-none
              "
              style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Inter", "Helvetica Neue", sans-serif'}}
            >
              {post.content.map((para, i) => {
                // Skip empty strings
                if (!para.trim()) return null;
                
                // Handle ## headings
                if (para.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-slate-900 dark:text-white font-bold text-3xl mt-12 mb-6">
                      {para.replace('## ', '')}
                    </h2>
                  );
                }
                
                // Handle ### subheadings
                if (para.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-slate-800 dark:text-slate-100 font-bold text-xl mt-8 mb-4">
                      {para.replace('### ', '')}
                    </h3>
                  );
                }
                
                // Handle bullet lists (single line starting with -)
                if (para.startsWith('- ')) {
                  // Process bold text in list items too
                  const listText = para.replace('- ', '');
                  const boldRegex = /\*\*(.+?)\*\*/g;
                  
                  if (listText.match(boldRegex)) {
                    const parts: (string | JSX.Element)[] = [];
                    let lastIndex = 0;
                    let match;
                    
                    while ((match = boldRegex.exec(listText)) !== null) {
                      if (match.index > lastIndex) {
                        parts.push(listText.substring(lastIndex, match.index));
                      }
                      parts.push(<strong key={match.index} className="font-bold">{match[1]}</strong>);
                      lastIndex = boldRegex.lastIndex;
                    }
                    
                    if (lastIndex < listText.length) {
                      parts.push(listText.substring(lastIndex));
                    }
                    
                    return (
                      <ul key={i} className="my-6 space-y-2 list-disc pl-6">
                        <li>{parts}</li>
                      </ul>
                    );
                  }
                  
                  return (
                    <ul key={i} className="my-6 space-y-2 list-disc pl-6">
                      <li>{listText}</li>
                    </ul>
                  );
                }
                
                // Handle bold text **text**
                const boldRegex = /\*\*(.+?)\*\*/g;
                if (para.match(boldRegex)) {
                  const parts: (string | JSX.Element)[] = [];
                  let lastIndex = 0;
                  let match;
                  
                  // Reset regex before starting
                  boldRegex.lastIndex = 0;
                  
                  while ((match = boldRegex.exec(para)) !== null) {
                    // Add text before the match
                    if (match.index > lastIndex) {
                      parts.push(para.substring(lastIndex, match.index));
                    }
                    // Add the bold text (without the **)
                    parts.push(<strong key={match.index} className="font-bold">{match[1]}</strong>);
                    lastIndex = boldRegex.lastIndex;
                  }
                  
                  // Add remaining text
                  if (lastIndex < para.length) {
                    parts.push(para.substring(lastIndex));
                  }
                  
                  return <p key={i} className="mb-5 leading-relaxed">{parts}</p>;
                }
                
                // Regular paragraph
                return <p key={i} className="mb-5 leading-relaxed">{para}</p>;
              })}
            </article>

            {/* === Bottom Padding / Footer Space === */}
            <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 flex flex-col items-center text-center" style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Inter", "Helvetica Neue", sans-serif'}}>
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
