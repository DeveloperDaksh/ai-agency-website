"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Code, Shield, Sparkles, Rocket } from "lucide-react";

export const Marquee = () => {
  return (
    <section className="py-16 border-y border-white/5 dark:border-white/5 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
          Powered by the World&apos;s Leading AI Platforms
        </p>
      </div>
      <div className="flex overflow-hidden group">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-nowrap gap-16 items-center py-4 pr-16"
        >
          {[...new Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default" aria-label="OpenAI Partner">
                <Brain className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">OpenAI</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default" aria-label="Anthropic Partner">
                <Zap className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Anthropic</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default" aria-label="Google AI Partner">
                <Code className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Google AI</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default" aria-label="Meta Llama Partner">
                <Shield className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Meta Llama</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default" aria-label="Mistral Partner">
                <Sparkles className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Mistral</span>
              </div>
              <div className="flex items-center gap-2.5 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default" aria-label="Nvidia Partner">
                <Rocket className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold tracking-tighter">Nvidia</span>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
