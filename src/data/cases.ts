export interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  heroImage: string
  heroImageWidth: number
  heroImageHeight: number
  client: string
  timeline: string
  industry: string
  role: string
  challenge: string
  solution: string
  results: {
    title: string
    value: string
  }[]
  testimonial: {
    quote: string
    author: string
    position: string
    avatar: string
  }
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
}

export const casesData: CaseStudy[] = [
  {
    id: "worthefy",
    slug: "worthefy",
    title: "Worthefy – Net Worth Tracking App/Device",
    description: "Developed a full-stack platform for tracking and visualizing personal net worth, featuring a dynamic 'Net-Worth Clock' that updates in real time.",
    category: "FinTech / Personal Finance",
    tags: ["FinTech", "B2C", "Real-Time Data", "Dashboard"],
    heroImage: "/cases/worthefy/worthefy11.png",
    heroImageWidth: 1000,
    heroImageHeight: 900,
    client: "Private Client – Worthefy",
    timeline: "8 Weeks",
    industry: "FinTech / Personal Finance",
    role: "Full-Stack Development, UX/UI Design, Data Integration",
    challenge: "The client wanted to transform a static wealth-tracking tool into an engaging, real-time experience that would increase user retention and encourage frequent check-ins.",
    solution: "We designed and built a responsive dashboard from the ground up. This included integrating real-time financial data streams, implementing a live-updating net worth counter with smooth animations, and adding expandable analytics for deeper insights. The system was backed by secure APIs for fetching user portfolio data and a scalable architecture to handle live updates without performance drops.",
    results: [
      {
        title: "Increase in Daily Active Sessions",
        value: "55%"
      },
      {
        title: "Longer Session Duration",
        value: "30%"
      },
      {
        title: "Positive User Feedback",
        value: "90%"
      }
    ],
    testimonial: {
      quote: "Integrating the mobile app with the physical counter was challenging, but the team adapted to my vision and delivered a solution that exceeded expectations.",
      author: "Nikita Clark",
      position: "CEO, Worthefy",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/worthefy/worthefy11.png",
        alt: "Worthefy Dashboard with Real-Time Net Worth Display",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/worthefy/worthefy1.png",
        alt: "Live Net-Worth Clock UI",
        width: 600,
        height: 450
      },
      {
        src: "/cases/worthefy/worthefy2.png",
        alt: "Detailed Wealth Breakdown",
        width: 600,
        height: 450
      }
    ]
  },
  {
    id: "publefy",
    slug: "publefy",
    title: "Publefy AI Meme Generator",
    description: "Prototyped a UI converting raw video into AI-generated memes in seconds.",
    category: "MarTech / Social Media Automation",
    tags: ["AI", "Content Automation", "UX/UI Design"],
    heroImage: "/cases/publefy/publefyban.png",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "Publefy",
    timeline: "4 Weeks",
    industry: "MarTech / Social Media Automation",
    role: "UX/UI Design, Workflow Prototyping, AI Integration Planning",
    challenge: "Creating high-quality, relevant memes typically requires manual editing, timing, and creative brainstorming—an often slow, inconsistent process. Publefy needed a user-friendly interface that would let users upload raw videos and instantly receive polished, context-aware memes without technical hurdles.",
    solution: "We integrated Tesseract OCR for text extraction, OpenAI for context analysis and caption generation, designed a drag-and-drop meme overlay UI, and built export/scheduling functionality with modular architecture for future scalability.",
    results: [
      {
        title: "Reduction in Meme Production Time",
        value: "50%"
      },
      {
        title: "Increase in Social Engagement",
        value: "40%"
      },
      {
        title: "User Satisfaction Rate",
        value: "85%"
      }
    ],
    testimonial: {
      quote: "Publefy turned hours of meme-making into minutes—our social metrics have never looked better!",
      author: "Nikita Clark",
      position: "Founder, Publefy",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/publefy/publefyBackground.png",
        alt: "Publefy Meme Creation Interface",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/publefy/publefy1.png",
        alt: "AI Text Extraction Module",
        width: 600,
        height: 450
      },
      {
        src: "/cases/publefy/publefy2.png",
        alt: "Meme Overlay UI",
        width: 600,
        height: 450
      }
    ]
  },
  {
    id: "taxbot",
    slug: "taxbot",
    title: "TaxBot Voice Assistant",
    description: "Built an AI-powered voice agent that guides users through tax filings hands-free and with ease.",
    category: "FinTech / Tax Technology",
    tags: ["Voice AI", "Automation", "Conversational UX"],
    heroImage: "/cases/taxbot/TaxBotBan.svg",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "TaxBot",
    timeline: "6 Weeks",
    industry: "FinTech / Tax Technology",
    role: "Voice UX Design, Conversational Flow Design, Interactive Prototyping",
    challenge: "Traditional tax-filing solutions rely on static forms and complex jargon, leading to user frustration and errors. The challenge was to design a voice-driven experience that could handle dynamic tax scenarios while staying intuitive and error-free.",
    solution: "We created a natural, voice-first interface powered by AI. It allows users to speak naturally while the assistant handles calculations, requests necessary documents, provides real-time clarifications, and proactively prevents mistakes. The solution included a hybrid fallback chat UI for edge cases and accessibility.",
    results: [
      {
        title: "Reduction in User Errors",
        value: "70%"
      },
      {
        title: "Faster Completion Time",
        value: "45%"
      },
      {
        title: "Positive User Feedback",
        value: "95%"
      }
    ],
    testimonial: {
      quote: "TaxBot's voice interface turned tax filing into a seamless conversation—users describe it as stress-free and even enjoyable.",
      author: "Maxim Gagarin",
      position: "Co-Founder, TaxBot",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/taxbot/taxbotBackground.png",
        alt: "TaxBot Voice Assistant Experience",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/taxbot/taxbot1.png",
        alt: "Voice Interaction Flow",
        width: 600,
        height: 450
      },
      {
        src: "/cases/taxbot/taxbot2.png",
        alt: "Real-time Tax Guidance",
        width: 600,
        height: 450
      }
    ]
  },
  {
    id: "eingie-energy",
    slug: "eingie-energy",
    title: "Eingie Energy Monitoring",
    description: "Built a 360° dashboard for real-time energy usage and predictive maintenance insights.",
    category: "IoT / Industrial Analytics",
    tags: ["IoT", "Analytics", "Dashboard Design"],
    heroImage: "/cases/eingie/EiengieBan.svg",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "Eingie",
    timeline: "12 Weeks",
    industry: "IoT / Industrial Analytics",
    role: "UX/UI Design, Data Visualization, Dashboard Architecture",
    challenge: "Industrial energy monitoring systems typically provide raw data without actionable insights. The challenge was to design an intuitive dashboard that transforms complex IoT sensor data into clear, actionable insights for facility managers, enabling predictive maintenance and energy optimization.",
    solution: "We developed a comprehensive 360° dashboard with real-time energy consumption visualization, predictive maintenance alerts, historical trend analysis, and mobile-responsive design for on-the-go monitoring.",
    results: [
      {
        title: "Energy Cost Reduction",
        value: "25%"
      },
      {
        title: "Maintenance Efficiency",
        value: "60%"
      },
      {
        title: "System Uptime Improvement",
        value: "35%"
      }
    ],
    testimonial: {
      quote: "The Eingie dashboard transformed how we monitor our facilities—we can now predict issues before they become problems!",
      author: "Michael Rodriguez",
      position: "Operations Director, Eingie",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/eingie/eingieBackground.png",
        alt: "Eingie Energy Dashboard",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/eingie/eingie1.png",
        alt: "Real-time Energy Monitoring",
        width: 600,
        height: 450
      },
      {
        src: "/cases/eingie/eingie2.png",
        alt: "Predictive Maintenance Alerts",
        width: 600,
        height: 450
      }
    ]
  },
  {
    id: "wizze-ai",
    slug: "wizze-ai",
    title: "Wizze.ai – AI Video Translation Platform",
    description: "Developed a platform where users can upload any video and instantly translate it into any language using ElevenLabs API for high-quality voice synthesis.",
    category: "AI / Video Translation",
    tags: ["AI", "Video Translation", "Speech Synthesis", "B2C"],
    heroImage: "/cases/wizze-ai/wizban.svg",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "Wizze.ai",
    timeline: "10 Weeks",
    industry: "AI / Video Localization",
    role: "Full-Stack Development, API Integration, UX/UI Design",
    challenge: "Existing solutions for video translation were either expensive, slow, or lacked natural-sounding voiceovers. The challenge was to build a user-friendly platform that could process videos quickly, translate speech accurately, and generate lifelike multilingual audio.",
    solution: "We built a web-based platform allowing users to upload videos, select target languages, and receive translated versions with natural voiceovers powered by ElevenLabs' speech synthesis API. The system included background processing for large files, a clean dashboard for managing translations, and optimized pipelines for fast rendering.",
    results: [
      {
        title: "Processing Speed Improvement",
        value: "60% faster"
      },
      {
        title: "Languages Supported",
        value: "50+"
      },
      {
        title: "User Satisfaction",
        value: "97%"
      }
    ],
    testimonial: {
      quote: "Wizze.ai has made multilingual content creation effortless—our users can now translate videos in minutes with studio-quality voiceovers.",
      author: "Boris Kuznetsov",
      position: "CEO, Wizze.ai",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/wizze-ai/wiz3.png",
        alt: "Wizze.ai Video Translation Dashboard",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/wizze-ai/wiz2.png",
        alt: "Upload and Language Selection Interface",
        width: 600,
        height: 450
      },
      {
        src: "/cases/wizze-ai/wiz1.png",
        alt: "Translated Video Playback with AI Voiceover",
        width: 600,
        height: 450
      }
    ]
  }
  ,
  {
    id: "irp-app",
    slug: "irp-app",
    title: "IRP – AI-Enhanced Music Streaming for Artists",
    description: "Built a Spotify-like streaming app with a proprietary AI tracking algorithm that gives artists deep insights into listener behavior and performance metrics.",
    category: "Music / Artist Analytics",
    tags: ["Music Streaming", "AI Tracking", "Artist Insights", "Mobile App"],
    heroImage: "/cases/irp-app/irp.svg",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "IRP Solutions",
    timeline: "14 Weeks",
    industry: "Music / Entertainment Technology",
    role: "Full-Stack Development, AI Integration, Mobile UX/UI Design",
    challenge: "Artists on traditional streaming platforms often lack real-time visibility into how their music performs and how listeners engage with their tracks. The challenge was to create a music streaming app that not only delivers a great user experience for listeners but also equips artists with actionable analytics.",
    solution: "We developed a mobile streaming platform with features like curated playlists, seamless playback, and offline listening. The standout feature was an AI-powered tracking algorithm that monitors listening patterns, audience demographics, and engagement metrics, providing artists with real-time dashboards to optimize their releases and fan engagement strategies.",
    results: [
      {
        title: "Artist Insight Depth",
        value: "3x metrics"
      },
      {
        title: "Listener Engagement",
        value: "+35%"
      },
      {
        title: "Artist Satisfaction",
        value: "96%"
      }
    ],
    testimonial: {
      quote: "IRP gives artists the power to truly understand their audience—it's like having Spotify, but with analytics we can actually use.",
      author: "Mike Chen",
      position: "Operations Manager, IRP Solutions",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/irp-app/image 201.png",
        alt: "IRP Music Streaming Dashboard",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/irp-app/image 202.png",
        alt: "Listener Insights for Artists",
        width: 600,
        height: 450
      },
      {
        src: "/cases/irp-app/image 203.png",
        alt: "Real-time AI Tracking Metrics",
        width: 600,
        height: 450
      }
    ]
  }
  
  ,
  {
    id: "astro-ai",
    slug: "astro-ai",
    title: "AstroAI Predictive Analytics Platform",
    description: "Created an advanced AI-powered analytics platform delivering predictive insights and business intelligence tailored specifically for astronomy researchers and organizations.",
    category: "AI / Data Analytics",
    tags: ["AI", "Predictive Analytics", "Machine Learning", "Astronomy"],
    heroImage: "/cases/astro-ai/astro.svg",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "AstroAI",
    timeline: "16 Weeks",
    industry: "AI / Astronomy Research",
    role: "AI/ML Development, Data Engineering, Dashboard Design",
    challenge: "Astronomy organizations required a sophisticated analytics platform to analyze massive astronomical datasets, predict celestial events, and provide actionable insights for research and operational decisions.",
    solution: "We developed a comprehensive AI analytics platform with advanced machine learning models tailored to astronomical data, real-time data processing pipelines, interactive visualizations of celestial predictions, and automated reporting optimized for research workflows.",
    results: [
      {
        title: "Prediction Accuracy",
        value: "94%"
      },
      {
        title: "Decision Speed",
        value: "3x faster"
      },
      {
        title: "Research ROI Improvement",
        value: "35%"
      }
    ],
    testimonial: {
      quote: "AstroAI gives us predictive power unlike anything we've had before—enabling data-driven discoveries and confident decision-making in astronomy.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Data Officer, AstroAI",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/astro-ai/ast3.png",
        alt: "AstroAI Astronomy Analytics Dashboard",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/astro-ai/ast2.png",
        alt: "Astronomy Predictive Analytics Interface",
        width: 600,
        height: 450
      },
      {
        src: "/cases/astro-ai/ast1.png",
        alt: "Machine Learning Models for Astronomy",
        width: 600,
        height: 450
      }
    ]
  }
  ,
  {
    id: "artifex",
    slug: "artifex",
    title: "Artifex Creative Design Platform",
    description: "Built a comprehensive design platform that empowers creatives with AI-powered tools and collaborative features.",
    category: "Creative / Design Technology",
    tags: ["Design Tools", "AI", "Collaboration", "Creative Platform"],
    heroImage: "/cases/artifex/art1.png",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "Artifex",
    timeline: "12 Weeks",
    industry: "Creative / Design Technology",
    role: "Frontend Development, AI Integration, Design System",
    challenge: "Creative professionals needed a modern design platform that could combine traditional design tools with AI capabilities while enabling seamless collaboration. The challenge was to create an intuitive interface that could handle complex design workflows while incorporating AI assistance without overwhelming users.",
    solution: "We created a comprehensive design platform featuring AI-powered design suggestions, real-time collaboration tools, advanced vector editing capabilities, cloud-based asset management, and seamless integration with popular design tools.",
    results: [
      {
        title: "Design Creation Speed",
        value: "50% faster"
      },
      {
        title: "Collaboration Efficiency",
        value: "70% improvement"
      },
      {
        title: "User Satisfaction",
        value: "88%"
      }
    ],
    testimonial: {
      quote: "Artifex has transformed how our team collaborates—the AI suggestions and real-time features are game-changers!",
      author: "Alex Thompson",
      position: "Creative Director, Artifex",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/artifex/art1.png",
        alt: "Artifex Design Platform",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/artifex/art2.png",
        alt: "AI Design Assistant",
        width: 600,
        height: 450
      },
      {
        src: "/cases/artifex/art3.png",
        alt: "Collaborative Workspace",
        width: 600,
        height: 450
      }
    ]
  },
  {
    id: "shout",
    slug: "shout",
    title: "Shout Social Media Management",
    description: "Developed a comprehensive social media management platform with AI-powered content optimization and scheduling.",
    category: "MarTech / Social Media",
    tags: ["Social Media", "Content Management", "AI", "Analytics"],
    heroImage: "/cases/shout/shout.svg",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "Shout",
    timeline: "10 Weeks",
    industry: "MarTech / Social Media",
    role: "Full-Stack Development, AI Integration, Analytics Dashboard",
    challenge: "Brands and marketers needed a unified platform to manage multiple social media accounts with intelligent content optimization and scheduling. The challenge was to create a system that could analyze audience behavior, optimize content timing, and provide actionable insights while maintaining ease of use.",
    solution: "We built a comprehensive social media management platform with AI-powered content optimization, multi-platform scheduling, advanced analytics, audience insights, and automated posting capabilities.",
    results: [
      {
        title: "Engagement Rate",
        value: "45% increase"
      },
      {
        title: "Content Efficiency",
        value: "60% improvement"
      },
      {
        title: "Time Savings",
        value: "8 hours/week"
      }
    ],
    testimonial: {
      quote: "Shout has revolutionized our social media strategy—the AI insights and scheduling features are incredible!",
      author: "Lisa Park",
      position: "Marketing Director, Shout",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/shout/sho1.png",
        alt: "Shout Social Media Dashboard",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/shout/sho2.png",
        alt: "Content Calendar Interface",
        width: 600,
        height: 450
      },
      {
        src: "/cases/shout/sho3.png",
        alt: "Analytics Dashboard",
        width: 600,
        height: 450
      }
    ]
  },
  {
    id: "pattons-adventure",
    slug: "pattons-adventure",
    title: "Patton's Adventure Educational Game",
    description: "Created an immersive educational game that combines adventure storytelling with interactive learning experiences.",
    category: "EdTech / Gaming",
    tags: ["Educational Gaming", "Interactive Learning", "Storytelling", "EdTech"],
    heroImage: "/cases/pattons-adventure/pat.svg",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "Patton's Adventure",
    timeline: "8 Weeks",
    industry: "EdTech / Gaming",
    role: "Game Development, Educational Content Design, UX/UI Design",
    challenge: "Educational content needed to be more engaging and interactive to capture students' attention. The challenge was to create an adventure game that could teach complex subjects while maintaining entertainment value and educational effectiveness.",
    solution: "We developed an immersive educational game with branching storylines, interactive problem-solving scenarios, adaptive difficulty levels, progress tracking, and comprehensive learning analytics.",
    results: [
      {
        title: "Student Engagement",
        value: "85%"
      },
      {
        title: "Learning Retention",
        value: "40%"
      },
      {
        title: "Teacher Adoption",
        value: "92%"
      }
    ],
    testimonial: {
      quote: "Patton's Adventure has made learning fun again—our students are more engaged than ever!",
      author: "Dr.Guffanti",
      position: "Founder, Patton's Adventure",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/pattons-adventure/Pat.png",
        alt: "Patton's Adventure Game Interface",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/pattons-adventure/pat1.png",
        alt: "Interactive Learning Scenarios",
        width: 600,
        height: 450
      },
      {
        src: "/cases/pattons-adventure/pat2.png",
        alt: "Progress Tracking Dashboard",
        width: 600,
        height: 450
      }
    ]
  },
  {
    id: "fitness-crm",
    slug: "fitness-crm",
    title: "Fitness CRM Management System",
    description: "Built a comprehensive CRM system specifically designed for fitness businesses with membership tracking and workout planning.",
    category: "SaaS / Fitness Technology",
    tags: ["CRM", "Fitness", "Membership Management", "SaaS"],
    heroImage: "/cases/fitness-crm/Frame2.png",
    heroImageWidth: 1200,
    heroImageHeight: 900,
    client: "Fitness CRM",
    timeline: "12 Weeks",
    industry: "SaaS / Fitness Technology",
    role: "Full-Stack Development, Database Design, API Development",
    challenge: "Fitness businesses needed a specialized CRM that could handle membership management, workout tracking, and client communication while being easy to use for both staff and clients. The challenge was to create a system that could scale from small gyms to large fitness chains.",
    solution: "We developed a comprehensive fitness CRM with membership management, workout planning tools, client communication features, payment processing, progress tracking, and mobile app integration.",
    results: [
      {
        title: "Client Retention",
        value: "35% increase"
      },
      {
        title: "Administrative Efficiency",
        value: "50% improvement"
      },
      {
        title: "Revenue Growth",
        value: "25%"
      }
    ],
    testimonial: {
      quote: "The Fitness CRM has streamlined our entire operation—we can focus on what we do best: helping people get fit!",
      author: "Coach Maria Santos",
      position: "Owner, Fitness CRM",
      avatar: "https://github.com/shadcn.png"
    },
    images: [
      {
        src: "/cases/fitness-crm/Frame1.png",
        alt: "Fitness CRM Dashboard",
        width: 1200,
        height: 600
      },
      {
        src: "/cases/fitness-crm/Frame2.png",
        alt: "Membership Management Interface",
        width: 600,
        height: 450
      },
      {
        src: "/cases/fitness-crm/image3.png",
        alt: "Workout Planning Tools",
        width: 600,
        height: 450
      }
    ]
  },
] 