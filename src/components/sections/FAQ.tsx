"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What AI technologies do you work with?",
    answer: "We work across the full AI stack: GPT-4o, Claude 3.5, Gemini, Llama 3, Whisper, Stable Diffusion, and custom fine-tuned models. For automation, we integrate with Make.com, Zapier, n8n, and custom API orchestration layers."
  },
  {
    question: "How fast can you deliver a working solution?",
    answer: "Most projects ship an MVP within 2–4 weeks. Complex enterprise systems with custom model training typically take 6–8 weeks. You'll see weekly demos and have input at every stage."
  },
  {
    question: "Do you train our team to use the AI tools?",
    answer: "Absolutely. Every engagement includes comprehensive onboarding, video documentation, and live training sessions. Our goal is to make your team self-sufficient, not dependent on us."
  },
  {
    question: "Can we change plans or scale up later?",
    answer: "Yes — all plans are flexible. You can upgrade, downgrade, or customize your scope at any time. We prorate charges and ensure a seamless transition."
  },
  {
    question: "What if the AI solution doesn't meet expectations?",
    answer: "We stand behind our work with a 30-day satisfaction guarantee. If the solution doesn't deliver measurable results, we'll refund your investment — no questions asked."
  }
];

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            Got Questions? <span className="text-orange-500">We've Got Answers.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know before partnering with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/5 dark:border-white/5 rounded-2xl overflow-hidden bg-background/50 backdrop-blur-md"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold pr-8">{faq.question}</span>
                <ChevronDown className={cn(
                  "w-5 h-5 text-orange-500 transition-transform duration-300 shrink-0",
                  openFAQ === index && "rotate-180"
                )} />
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-muted-foreground border-t border-border leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
