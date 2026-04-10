"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Code, Shield, Sparkles, Rocket } from "lucide-react";

export const Marquee = () => {
  return (
    <section className="py-16 border-y border-white/5 dark:border-white/5 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
          Trusted by Industry Leaders & Powered by Elite AI
        </p>
      </div>
      <div className="flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-nowrap gap-16 items-center py-4"
        >
          {[...new Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="OpenAI Partner">
                <Brain className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">OpenAI</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Microsoft AI Partner">
                <Shield className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Microsoft AI</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Anthropic Partner">
                <Zap className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Anthropic</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Google AI Partner">
                <Code className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Google AI</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Groq Partner">
                <Rocket className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Groq</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Meta Llama Partner">
                <Shield className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Meta Llama</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Perplexity Partner">
                <Sparkles className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Perplexity</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Mistral Partner">
                <Sparkles className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Mistral</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Nvidia Partner">
                <Rocket className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Nvidia</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="DeepSeek Partner">
                <Brain className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">DeepSeek</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Hugging Face Partner">
                <Sparkles className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Hugging Face</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default whitespace-nowrap shrink-0" aria-label="Cohere Partner">
                <Code className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Cohere</span>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
