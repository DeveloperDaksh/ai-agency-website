import { 
  Brain, 
  Code, 
  Workflow, 
  ShieldCheck, 
  Zap, 
  BarChart3,
  Search,
  Settings,
  Shield,
  Palette,
  Cpu,
  Database
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  color: string;
  process: Array<{ step: string; description: string }>;
  features: string[];
  techStack: string[];
  faq: Array<{ q: string; a: string }>;
  pricingStartingAt: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "ai-strategy-consulting",
    name: "AI Strategy Consulting",
    tagline: "The Roadmap to Intelligent Transformation.",
    description: "Don't just add AI; integrate it where it matters. We work with your leadership to identify high-ROI opportunities and create a technical blueprint for the 'Stitched' era.",
    icon: Brain,
    color: "bg-blue-500",
    process: [
      { step: "Discovery", description: "Audit existing workflows and data infrastructure." },
      { step: "Opportunity Mapping", description: "Identify specific areas where AI can reduce costs or drive revenue." },
      { step: "Feasibility Study", description: "Validate technical requirements and model selection." },
      { step: "Blueprint", description: "Deliver a 12-month AI roadmap with clear ROI targets." }
    ],
    features: [
      "ROI-Focused AI Audits",
      "Model Selection Strategy (LLM/ML)",
      "Data Governance Planning",
      "Custom Implementation Roadmaps"
    ],
    techStack: ["OpenAI API", "Anthropic", "Llama 3", "Groq"],
    pricingStartingAt: "Contact for Quote",
    deliverables: [
      "AI Strategy Document",
      "Technical Feasibility Report",
      "ROI Projections",
      "Integration Blueprint"
    ],
    faq: [
      { q: "How long does a strategy audit take?", a: "Typically 2-4 weeks depending on the complexity of your operation." },
      { q: "Do you help with model selection?", a: "Yes, we analyze costs, latency, and privacy requirements to suggest the best model for your specific needs." }
    ]
  },
  {
    slug: "custom-ai-development",
    name: "Custom AI Development",
    tagline: "Bespoke Intelligence Built for Your Logic.",
    description: "Custom-built AI agents, RAG systems, and generative pipelines that live within your ecosystem—not behind a generic wrapper.",
    icon: Code,
    color: "bg-orange-500",
    process: [
      { step: "Prototyping", description: "Rapid MVP development to test core AI logic." },
      { step: "Integration", description: "Seamlessly stitching the AI into your existing codebase or ERP." },
      { step: "Fine-Tuning", description: "Optimizing models on your specific dataset for maximum accuracy." },
      { step: "Scale", description: "Deploying to production with robust monitoring and auto-scaling." }
    ],
    features: [
      "RAG-Based Knowledge Bases",
      "Internal AI Copilots",
      "Generative Video/Image Pipelines",
      "Custom Fine-Tuning"
    ],
    techStack: ["Next.js", "Python", "LangChain", "Vector DBs (Pinecone/Milvus)"],
    pricingStartingAt: "$5,000 / project",
    deliverables: [
      "Source Code",
      "Model Weight Access",
      "API Documentation",
      "Deployment Scripts"
    ],
    faq: [
      { q: "Who owns the IP?", a: "You do. We build custom solutions exclusively for your business, and all code/IP belongs to you." },
      { q: "Can you integrate with my existing software?", a: "Yes, we specialize in 'stitching' AI into legacy systems, CRMs, and custom ERPs via APIs." }
    ]
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    tagline: "Eliminate the Mundane. Empower the Exceptional.",
    description: "Turn manual bottlenecks into autonomous engines. We automate end-to-end business processes using AI agents that can read, write, and act.",
    icon: Workflow,
    color: "bg-purple-500",
    process: [
      { step: "Audit", description: "Identify repeatable manual tasks." },
      { step: "Automation Design", description: "Map out the AI agent's decision logic." },
      { step: "Stitch", description: "Connect tools (Slack, Salesforce, Email) via AI orchestration." },
      { step: "Monitor", description: "Continuous tracking of autonomous task performance." }
    ],
    features: [
      "Autonomous Support Agents",
      "Sales Lead Enrichment",
      "AI Content Ops",
      "Legal/Medical Document Processing"
    ],
    techStack: ["n8n", "Make.com", "Zapier Central", "Custom Python Agents"],
    pricingStartingAt: "$2,500 / month",
    deliverables: [
      "Automation Architecture",
      "Live Dashboard",
      "Efficiency Report",
      "Error Handling Protocol"
    ],
    faq: [
      { q: "How much time can I save?", a: "Most clients see a 70-90% reduction in manual data entry and repetitive communication tasks." },
      { q: "Is it reliable?", a: "We build with multi-layer error handling and 'human-in-the-loop' checks for critical operations." }
    ]
  }
];
