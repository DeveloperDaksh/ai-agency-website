import { Brain, Rocket, Shield, Zap, Sparkles, Code, TrendingUp, Mail } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  fullContent?: string;
  whatIs?: string;
  category: "AI Agents" | "Automation Tools" | "Analytics" | "Integrations" | "Custom Solutions";
  launchDate: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  techStack: string[];
  problem: string;
  process: { step: string; action: string }[];
  industries: { name: string; useCase: string }[];
  faqs?: { q: string; a: string }[];
  comparisons?: { feature: string; sarswatiValue: string; competitorValue: string }[];
  priceStartingAt?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "AI Sales Assistant",
    slug: "ai-sales-assistant",
    tagline: "Qualify leads 24/7 with a human-like AI agent that speaks your brand.",
    description: "Our AI Sales Assistant engages visitors, answers complex product questions, and qualifies leads directly into your CRM. It's not a chatbot; it's a digital salesperson.",
    category: "AI Agents",
    launchDate: "2026-04-10",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Natural language lead qualification",
      "Direct CRM integration (Salesforce/HubSpot)",
      "Multi-lingual support (50+ languages)",
      "Instant meeting scheduling"
    ],
    techStack: ["GPT-4o", "LangChain", "Pinecone", "Next.js"],
    whatIs: "The AI Sales Assistant is a sophisticated digital agent designed to qualify, nurture, and convert website traffic into meeting-ready leads autonomously. Unlike traditional chatbots, it utilizes advanced RAG (Retrieval-Augmented Generation) to maintain brand voice while resolving complex user inquiries and syncing them directly to your CRM.",
    problem: "Sales teams waste 40% of their time on unverified leads and following up with visitors who aren't ready to buy.",
    priceStartingAt: "$499/mo",
    faqs: [
      { q: "How long does it take to integrate?", a: "Most businesses can go live within 72 hours using our standard onboarding process." },
      { q: "Does it work with my existing CRM?", a: "Yes, we support native integrations with HubSpot, Salesforce, and Pipedrive out of the box." },
      { q: "Can the AI handle multiple languages?", a: "Absolutely. Our agent supports 50+ languages with nuance and dialect-awareness." }
    ],
    comparisons: [
      { feature: "Memory", sarswatiValue: "Persistent & Evolving", competitorValue: "Session-based Only" },
      { feature: "Latency", sarswatiValue: "< 300ms", competitorValue: "1-2 Seconds" },
      { feature: "Branding", sarswatiValue: "Custom Voice Cloning", competitorValue: "Generic Templates" }
    ],
    process: [
      { step: "Discovery", action: "The AI engages the visitor based on their browsing behavior." },
      { step: "Qualification", action: "It asks strategic questions to determine BANT (Budget, Authority, Need, Timeline)." },
      { step: "Conversion", action: "High-intent leads are prompted to book a meeting instantly." },
      { step: "Sync", action: "All conversation data is synced to your sales team's dashboard." }
    ],
    industries: [
      { name: "SaaS", useCase: "Automating product demo scheduling." },
      { name: "Real Estate", useCase: "Initial property inquiry handling." },
      { name: "E-commerce", useCase: "High-ticket product consultations." }
    ]
  },
  {
    id: "2",
    name: "DocuSense Analyzer",
    slug: "docusense-analyzer",
    tagline: "Turn thousands of PDF contracts into actionable data maps instantly.",
    description: "DocuSense uses advanced RAG (Retrieval-Augmented Generation) to scan legal and financial documents, highlighting risks and extract key terms without manual review.",
    category: "Automation Tools",
    launchDate: "2026-04-11",
    icon: Shield,
    color: "from-orange-500 to-red-500",
    features: [
      "Bulk PDF processing",
      "Risk detection algorithms",
      "Automated summary generation",
      "Exact-source citations"
    ],
    techStack: ["Claude 3.5 Sonnet", "LlamaIndex", "AWS Textract", "Python"],
    whatIs: "DocuSense Analyzer is a deep-learning document intelligence platform that automates the extraction and risk-assessment of complex data from PDF libraries. It specialized in multi-document cross-referencing for legal, financial, and insurance audits.",
    problem: "Legal and compliance teams spend hours manually cross-referencing documents, leading to high error rates and slow processing.",
    priceStartingAt: "$899/mo",
    faqs: [
      { q: "Is my data secure?", a: "Yes, we use SOC2 Type II compliant infrastructure and can deploy DocuSense in your own VPC." },
      { q: "What file types are supported?", a: "We support PDF, DOCX, XLSX, and scanned image formats like TIFF and JPG." }
    ],
    process: [
      { step: "Upload", action: "Drop your entire document library into the secure vault." },
      { step: "Analyze", action: "DocuSense builds a semantic map of all clauses and variables." },
      { step: "Extract", action: "The AI pulls specific data points into a structured format." },
      { step: "Review", action: "Compliance officers verify findings with built-in source links." }
    ],
    industries: [
      { name: "Legal", useCase: "Contract risk assessment." },
      { name: "Finance", useCase: "Auditing large transaction records." },
      { name: "Insurance", useCase: "Policy comparison and validation." }
    ]
  },
  {
    id: "3",
    name: "AutoContent Engine",
    slug: "automated-content-engine",
    tagline: "Scale your organic traffic with an AI that writes like your best editor.",
    description: "The AutoContent Engine researches keywords, analyzes competitor content, and generates SEO-optimized articles that match your brand's unique voice perfectly.",
    category: "Automation Tools",
    launchDate: "2026-04-12",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    features: [
      "Voice cloning for written content",
      "Automated internal linking",
      "Real-time SEO score optimization",
      "Multi-platform distribution"
    ],
    techStack: ["GPT-4o", "Perplexity API", "WordPress API", "Tailwind CSS"],
    whatIs: "The Automated Content Engine is a high-speed editorial platform that leverages multiple LLMs to produce SEO-ready content that mirrors your brand voice, handles competitive research, and automates distribution.",
    problem: "Consistency is the biggest hurdle in SEO. Maintaining a daily posting schedule with high-quality content is too expensive for most businesses.",
    priceStartingAt: "$299/mo",
    faqs: [
      { q: "Will Google penalize AI content?", a: "No, Google rewards high-quality content that provides value. Our engine focuses on depth, accuracy, and unique insights." },
      { q: "Can I review content before it goes live?", a: "Yes, there is a built-in approval workflow for your editorial team." }
    ],
    process: [
      { step: "Strategy", action: "Input your target keywords and audience profile." },
      { step: "Research", action: "The engine crawls the web for the latest facts and trends." },
      { step: "Generation", action: "AI drafts 1,500+ word articles with proper SEO structure." },
      { step: "Posting", action: "Content is scheduled and posted to your CMS automatically." }
    ],
    industries: [
      { name: "Marketing Agencies", useCase: "Scaling client content volume." },
      { name: "E-learning", useCase: "Generating course summaries and blog posts." },
      { name: "Tech Blogs", useCase: "Daily industry news reporting." }
    ]
  }
];
