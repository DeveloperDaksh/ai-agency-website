export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "implementing-rag-for-customer-support",
    title: "How to Implement RAG for 24/7 Customer Support",
    excerpt: "Learn how Retrieval-Augmented Generation can transform your knowledge base into an intelligent, sub-second support agent.",
    category: "Technical Guide",
    readTime: "8 min read",
    date: "April 10, 2026"
  },
  {
    slug: "ai-automation-roi-for-ecommerce",
    title: "5 AI Automation Wins for E-commerce Brands in 2026",
    excerpt: "From dynamic catalog tagging to predictive restock alerts — how top brands are using AI to reclaim 20% of their margins.",
    category: "Strategic Insight",
    readTime: "6 min read",
    date: "April 08, 2026"
  },
  {
    slug: "building-the-innovation-lab",
    title: "From Code to Cognition: Why We Ship AI Solutions Daily",
    excerpt: "A deep dive into the 'Stitch' philosophy and how rapid prototyping is the only way to stay ahead in the AI era.",
    category: "Culture",
    readTime: "5 min read",
    date: "April 05, 2026"
  }
];
