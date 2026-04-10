import { TrendingUp, Clock, Sparkles } from "lucide-react";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  metric: string;
  description: string;
  icon: any;
  color: string;
  heroImage?: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  results: {
    title: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
  };
  techStackDetail?: string[];
  timeline?: Array<{ phase: string, duration: string, task: string }>;
  architecture?: {
    description: string;
    components: string[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-powered-customer-service",
    title: "AI-Powered Customer Service",
    client: "Global Retail Co.",
    metric: "85% Faster Response Time",
    description: "Deployed a RAG-based AI agent that resolves 70% of inbound queries without human intervention — saving 2,000+ hours monthly.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    techStackDetail: ["GPT-4o", "LangChain", "Pinecone", "Shopify API", "Next.js"],
    timeline: [
      { phase: "Audit", duration: "1 Week", task: "Mapping support bottlenecks and knowledge gap analysis." },
      { phase: "Prototype", duration: "2 Weeks", task: "Building RAG engine and intent mapping." },
      { phase: "Stitch", duration: "3 Weeks", task: "Integration with CRM and Shopify backend." },
      { phase: "Optimization", duration: "Ongoing", task: "Human-in-the-loop fine-tuning." }
    ],
    architecture: {
      description: "A secure, decoupled RAG architecture that allows for sub-second responses while maintaining strict data privacy.",
      components: ["Knowledge Vector Store", "Intent Classifier", "Human Handoff Logic", "Secure Data Proxy"]
    },
    challenge: {
      title: "Inundated with Support Tickets",
      description: "Global Retail Co. faced a massive challenge with their customer support system being overwhelmed by high-volume, low-complexity queries.",
      points: [
        "Average response time of 48+ hours",
        "High churn rate due to customer frustration",
        "Inefficient human intervention for simple password resets and order tracking",
        "Increasing costs scaling the support team manually."
      ],
    },
    solution: {
      title: "RAG-Based Intelligent Agent",
      description: "We implemented a custom Retrieval-Augmented Generation (RAG) system that connects directly to their existing knowledge base and product catalog.",
      points: [
        "Instant responses across 12+ channels (Web, WhatsApp, Email)",
        "Deep integration with Shopify and legacy ERP systems",
        "Advanced intent mapping to route complex issues to human agents with full context",
        "Self-learning capability based on human-in-the-loop feedback."
      ],
    },
    results: {
      title: "A Transformation in Efficiency",
      description: "The AI system became the primary customer contact point, allowing the team to focus on high-value human relationships.",
      metrics: [
        { label: "Response Time Reduction", value: "85%" },
        { label: "Hours Saved Monthly", value: "2,000+" },
        { label: "Auto-Resolution Rate", value: "70%" },
        { label: "Customer Satisfaction", value: "+40%" }
      ],
    },
  },
  {
    slug: "predictive-supply-chain",
    title: "Predictive Supply Chain",
    client: "LogiTech Solutions",
    metric: "30% Cost Reduction",
    description: "Built an ML forecasting model that predicts inventory demand with 94% accuracy across 12 global warehouses.",
    icon: Clock,
    color: "from-orange-500 to-red-500",
    techStackDetail: ["Scikit-learn", "TensorFlow", "FastAPI", "AWS Redshift", "Tableau"],
    timeline: [
      { phase: "Deep Audit", duration: "2 Weeks", task: "Historical data cleanup and feature engineering." },
      { phase: "Model Build", duration: "4 Weeks", task: "Developing custom XGBoost forecasting models." },
      { phase: "Integration", duration: "2 Weeks", task: "Connecting to procurement ERP systems." }
    ],
    architecture: {
      description: "High-throughput predictive engine processing 50+ real-time variables.",
      components: ["Feature Store", "Inference Engine", "Procurement Logic", "Risk Dashboard"]
    },
    challenge: {
      title: "Inventory Blind Spots",
      description: "LogiTech Solutions suffered from severe inventory imbalances—overstock in regional hubs and stockouts in key markets.",
      points: [
        "Millions lost in expiring stock annually",
        "Inefficient shipping routes costing extra time and fuel",
        "Inaccurate manual forecasting based on outdated spreadsheets",
        "No real-time visibility into cross-warehouse demand."
      ],
    },
    solution: {
      title: "Custom Machine Learning Forecaster",
      description: "We developed a proprietary ML engine that processes 50+ variables including seasonality, weather patterns, and global logistics trends.",
      points: [
        "Real-time predictive analytics dashboard",
        "Autonomous restock alerts integrated with procurement",
        "AI-optimized multi-stop shipping routes",
        "Predictive maintenance for warehouse automation hardware."
      ],
    },
    results: {
      title: "Precision at Global Scale",
      description: "LogiTech achieved unprecedented control over their global operations through data-driven foresight.",
      metrics: [
        { label: "Operating Cost Reduction", value: "30%" },
        { label: "Forecasting Accuracy", value: "94%" },
        { label: "Inventory Turnover", value: "x2.5" },
        { label: "Logistics Efficiency", value: "22%" }
      ],
    },
  },
  {
    slug: "automated-content-engine",
    title: "Automated Content Engine",
    client: "MediaFlow Inc.",
    metric: "5× Content Velocity",
    description: "Created a generative AI pipeline that transforms raw video into social posts, blog articles, and email campaigns — autonomously.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    techStackDetail: ["Whisper-v3", "Claude 3.5 Sonnet", "FFmpeg", "Vercel", "Supabase"],
    timeline: [
      { phase: "Vocal Blueprint", duration: "1 Week", task: "Mapping brand voice and persona constraints." },
      { phase: "Pipeline Build", duration: "3 Weeks", task: "Building automated video processing and transcription workflows." },
      { phase: "Distribution Stitch", duration: "2 Weeks", task: "Integrating with Buffer and WordPress APIs." }
    ],
    architecture: {
      description: "A generative multi-modal pipeline that handles everything from audio transcription to image generation.",
      components: ["Media Parser", "Context Extractor", "Format Tailor", "Publisher"]
    },
    challenge: {
      title: "Content Bottlenecks",
      description: "MediaFlow Inc. was rich in video assets but slow to repurpose them for modern multi-channel marketing campaigns.",
      points: [
        "Manual content editing taking weeks per campaign",
        "Inconsistent brand voice across different social platforms",
        "Under-utilized long-form video library",
        "High designer burnout and high external costs."
      ],
    },
    solution: {
      title: "Generative Content Pipeline",
      description: "A comprehensive AI workflow that treats video files as a source of truth for all subsequent marketing materials.",
      points: [
        "Automated video transcription and sentiment analysis",
        "Multi-modal AI that generates tailored posts for X, LinkedIn, and Instagram",
        "Automated SEO-optimized blog drafts with AI-generated images",
        "Direct integration with social publishing platforms."
      ],
    },
    results: {
      title: "Omnipresence through Automation",
      description: "MediaFlow transitioned from a weekly posting schedule to a high-frequency, multi-channel dominant presence.",
      metrics: [
        { label: "Content Production Speed", value: "5x" },
        { label: "Marketing Leads Generated", value: "3x" },
        { label: "Brand Impression Growth", value: "450%" },
        { label: "Manual Effort Reduction", value: "90%" }
      ],
    },
  }
];
