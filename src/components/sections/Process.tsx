"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Code, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const processSteps = [
  {
    title: "Discovery",
    description: "We audit your workflows, tech stack, and pain points to find the highest-ROI automation opportunities.",
    icon: Brain,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Strategy",
    description: "A custom AI roadmap with timelines, tool selection, and clear milestones — approved before we write a line of code.",
    icon: Zap,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Build & Ship",
    description: "Rapid development sprints with weekly demos. You see progress in real-time, not after months of silence.",
    icon: Code,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Scale & Optimize",
    description: "Ongoing monitoring, fine-tuning, and support as your business evolves. Your AI gets smarter every day.",
    icon: Shield,
    color: "bg-green-500/10 text-green-500"
  }
];

export const Process = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5">How It Works</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">From Idea to <span className="text-orange-500">Intelligent System</span> in 4 Steps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">A battle-tested process that eliminates guesswork and delivers measurable results.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -translate-y-1/2 z-0" />
          
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-white/5 dark:border-white/5 shadow-lg hover:shadow-xl transition-all group backdrop-blur-md"
            >
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-8 ring-background`}>
                <step.icon className="w-8 h-8" />
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                STEP 0{idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
