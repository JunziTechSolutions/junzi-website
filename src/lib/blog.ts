// lib/blog.ts
export type BlogPost = {
  title: string;
  image: string;
  category: string;
  date: string;
  excerpt: string;
  author: { name: string; role: string; avatar?: string };
  readTime: string;
  content: string[];
  slug: string;
};

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const rawPosts = [
  // ======== Original 6 Posts ========
  {
    title: "Announcing Athena Citation Engine (ACE)",
    image: "/placeholder.svg",
    category: "General",
    date: "September 29, 2025",
    excerpt:
      "Athena's September launch introduces the Athena Citation Engine (ACE), a machine learning model trained on millions of AI Search results.",
    author: { name: "Andrew Yan", role: "Co-Founder, CEO of AthenaHQ", avatar: "/avatars/andrew.png" },
    readTime: "2 min read",
    content: [
      "The Athena Citation Engine (ACE) represents a groundbreaking leap in how organizations understand and influence their visibility within the era of AI-driven search.",
      "Built on a proprietary machine learning model trained against millions of AI Search results, ACE predicts the likelihood that any given piece of content will be cited by AI models.",
      "This transforms what was once guesswork into measurable, data-backed foresight—empowering businesses to create content that not only resonates but also earns recognition from the world’s most advanced AI engines.",
    ],
  },
  {
    title: "Estimating AI Prompt Volume Across Platforms",
    image: "/placeholder.svg",
    category: "GEO",
    date: "June 7, 2025",
    excerpt:
      "In the rapidly evolving landscape of artificial intelligence, understanding the volume of prompts across different AI platforms has become essential.",
    author: { name: "Athena Research", role: "GEO Team" },
    readTime: "4 min read",
    content: [
      "Prompt volume serves as a universal signal of engagement across AI systems.",
      "Athena’s GEO dataset enables cross-platform analysis of prompt behavior, revealing insights into productivity tools, consumer chat models, and vertical AI assistants.",
      "By quantifying usage patterns, this research helps map the evolving demand landscape of generative AI and guides developers on where innovation is accelerating most rapidly.",
    ],
  },
  {
    title: "The AI App Builder Race: Market Share Reality Behind Lovable's Traffic Surge",
    image: "/placeholder.svg",
    category: "GEO",
    date: "May 19, 2025",
    excerpt:
      "In the rapidly evolving AI app development landscape, Lovable has captured headlines with its impressive traffic growth, but the story runs deeper.",
    author: { name: "Sophia Lee", role: "Data Analyst, AthenaHQ" },
    readTime: "3 min read",
    content: [
      "Lovable’s rise signals a growing demand for AI app builders that merge simplicity with power.",
      "Our analysis shows that while Lovable leads in traffic share, emerging platforms like Replit and Bubble are quickly catching up in feature maturity and user retention.",
      "This new era of low-code AI builders is driving accessibility to automation tools for both developers and business teams.",
    ],
  },
  {
    title: "Unlocking Next-Gen Search Rankings with AI SEO Tools",
    image: "/placeholder.svg",
    category: "General",
    date: "October 4, 2025",
    excerpt:
      "The way people find information online is changing fast. In 2024, over 60% of users reported turning to AI-powered platforms like ChatGPT or Gemini.",
    author: { name: "Derek Nolan", role: "Head of Growth, AthenaHQ" },
    readTime: "5 min read",
    content: [
      "Traditional SEO is giving way to a new discipline—AI-driven search optimization.",
      "Athena’s analysis of over 20 million AI-generated answers reveals how citation frequency, structured data, and model retraining cycles affect visibility within AI Search results.",
      "Next-gen SEO teams can now optimize not just for Google, but for AI assistants that interpret, summarize, and cite web content directly.",
    ],
  },
  {
    title: "Brex vs Ramp: Differences Between Traffic Data from Similarweb & Reliable Sources",
    image: "/placeholder.svg",
    category: "General",
    date: "May 8, 2025",
    excerpt:
      "If you're running a fast-growing business, you've probably heard the Brex vs Ramp debate more times than you've heard 'let's optimize our spend'.",
    author: { name: "Olivia Park", role: "Market Intelligence Analyst" },
    readTime: "3 min read",
    content: [
      "Public traffic estimates can diverge widely across analytics platforms.",
      "Our benchmarking study compares Similarweb, Ahrefs, and Athena’s proprietary signal data to uncover the real growth trajectory of fintech leaders Brex and Ramp.",
      "Results show that Ramp’s product-led growth continues to dominate user engagement metrics, while Brex’s diversification into enterprise segments shifts its long-term visibility curve.",
    ],
  },
  {
    title: "Canva vs. Figma: Who's Winning AI Search? (AthenaHQ Breakdown)",
    image: "/placeholder.svg",
    category: "General",
    date: "April 19, 2025",
    excerpt:
      "In 2025, the competition for digital visibility is more intense than ever. As design giants like Canva and Figma battle for dominance—each has taken a distinct path in AI Search.",
    author: { name: "Maya Tran", role: "AI Search Analyst, AthenaHQ" },
    readTime: "4 min read",
    content: [
      "Athena’s AI Search Index reveals that Canva’s broader content footprint gives it an edge in casual AI prompts, while Figma maintains dominance among technical and design-related queries.",
      "AI Search is redefining discoverability metrics—favoring brands whose content is structured, accessible, and consistently referenced by AI models.",
      "The ongoing Canva vs. Figma rivalry illustrates how product ecosystems evolve as AI platforms become the new discovery engines.",
    ],
  },

  // ======== New Long-Form JunziTech Posts ========
  {
    title: "The $1K vs $10K vs $100K App: What You Actually Get for Your Budget (Tinder Edition)",
    image: "/blog/budget-tinder.jpg",
    category: "Founders",
    date: "October 2025",
    excerpt:
      "Same idea, same features—three budgets: $1K, $10K, and $100K. What each really buys you in 2025 when building a Tinder-style app.",
    author: { name: "JunziTech Team", role: "Builders & Operators" },
    readTime: "8 min read",
    content: [
      "Everyone says they want to build an app. What they don’t say is how wildly different 'building an app' looks at $1K, $10K, and $100K.",
      "The $1K build: a scrappy solo founder with time and grit...",
      "The $10K build: the MVP launcher...",
      "The $100K build: scale-ready startup execution...",
      "Each level teaches one truth: $1K = education, $10K = execution, $100K = ecosystem.",
      "JunziTech focuses on $10K–$100K: milestone transparency, ownership, analytics, and honest scope.",
      "Final word: every budget tells a story—learning, seriousness, or business-building.",
    ],
  },
  {
    title: "How to Build an App in 2025 — No Matter Your Budget (From $0 to $100K)",
    image: "/blog/budget-guide.jpg",
    category: "Playbook",
    date: "October 2025",
    excerpt:
      "Time or money: pick your lane. A practical path from $0 to $100K for Dreamers, Scrappers, Operators, Builder Founders, Funded Founders, and Corporates.",
    author: { name: "JunziTech Team", role: "Product Playbooks" },
    readTime: "10 min read",
    content: [
      "Dreams don’t need funding—they need direction.",
      "The Dreamer ($0): learn by doing with AI copilots and free tools.",
      "The Scrapper ($1K): buy credibility with assets and tiny help.",
      "The Operator ($3–5K): co-build fast with one strong dev.",
      "The Builder Founder ($10–20K): partner with a lean agency like JunziTech.",
      "The Funded Founder ($50–100K): structure and scale efficiently.",
      "The Corporate Innovator ($200K+): ship like a startup.",
      "The lesson: clarity beats cash—choose your lane and execute.",
    ],
  },
  {
    title: "The Real Guide to Low-Code Tools in 2025: What They’re Good For (and What They’ll Never Replace)",
    image: "/blog/lowcode-guide.jpg",
    category: "Guides",
    date: "September 2025",
    excerpt:
      "Low-code is a shortcut, not salvation. Great for validation and internal tools; painful for scale, ownership, and custom logic.",
    author: { name: "JunziTech Team", role: "Engineering Notes" },
    readTime: "9 min read",
    content: [
      "Low-code shines for quick prototypes but breaks under real scale.",
      "It’s great for validation, investor demos, and dashboards.",
      "Pitfalls: vendor lock-in, performance ceilings, limited ownership.",
      "JunziTech uses it strategically: prototype fast, rebuild smart.",
      "Checklist and breakdowns for Replit, Lovable, Bolt, Firebase Studio, Natively, and Emergent/Base44.",
      "Lesson: use low-code to prove the idea, not power it.",
    ],
  },
  {
    title: "The Only Honest Breakdown of Every Way to Build Your App in 2025",
    image: "/blog/build-ways.jpg",
    category: "Founders",
    date: "September 2025",
    excerpt:
      "Freelancers, agencies, low-code, in-house teams, and JunziTech compared — without sugarcoating.",
    author: { name: "JunziTech Team", role: "Founder Playbook" },
    readTime: "11 min read",
    content: [
      "Every option to build your app has trade-offs.",
      "Freelancer = fast but fragile.",
      "Local agency = safe but bloated.",
      "Low-code = fast to start, slow to scale.",
      "In-house = total control, massive overhead.",
      "JunziTech = milestone clarity, senior-only devs, and no bloat.",
      "Final takeaway: you need speed with discipline, not bureaucracy.",
    ],
  },
  {
    title: "Stop Paying $200K for $20K Apps: How We Build Smarter, Faster, and Without the Agency Bloat",
    image: "/blog/anti-bloat.jpg",
    category: "Opinion",
    date: "August 2025",
    excerpt:
      "Most quotes are markup and meetings. JunziTech turns 90% of your budget into actual engineering.",
    author: { name: "JunziTech Team", role: "Opinion & Ops" },
    readTime: "8 min read",
    content: [
      "The industry’s dirty secret: markup masquerading as 'process'.",
      "We remove bloat—no PM layers, just milestone-based execution.",
      "Flat pricing, direct access, automation, and repo ownership.",
      "Comparison: $200K agency vs $20K JunziTech build—real engineering vs overhead.",
      "Our process: prototype, MVP milestones, launch, optional scale.",
      "Efficiency is the new luxury—clarity beats theater.",
    ],
  },
];

export const posts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  slug: slugify(p.title),
}));
