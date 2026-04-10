"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Zap, Rocket, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GlowContainer } from "@/components/ui/glow-container";

import Link from "next/link";

const features = [
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "Audit your operations and build a high-ROI roadmap for the 'Stitched' era.",
    slug: "ai-strategy-consulting"
  },
  {
    icon: Code,
    title: "Custom AI Development",
    description: "Bespoke AI agents and RAG systems built directly for your business logic.",
    slug: "custom-ai-development"
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Autonomous engines that eliminate manual bottlenecks using AI orchestration.",
    slug: "workflow-automation"
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Production-ready solutions in weeks, using our battle-tested 'Stitch' frameworks.",
    slug: "custom-ai-development"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with private models and end-to-end encryption.",
    slug: "ai-strategy-consulting"
  },
  {
    icon: Sparkles,
    title: "Ongoing Optimization",
    description: "Continuous monitoring and fine-tuning to ensure your AI gets smarter over time.",
    slug: "workflow-automation"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5 font-bold uppercase tracking-widest text-[10px]">
            Our Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
            Everything to <span className="text-orange-500">Win with AI.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            High-performance AI solutions designed for businesses that refuse to settle for average.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group"
            >
              <Link href={`/services/${feature.slug}`}>
                <GlowContainer className="rounded-[2.5rem] h-full transition-all group-hover:border-orange-500/20">
                  <Card className="p-10 transition-all border-white/5 dark:border-white/5 h-full bg-background/50 backdrop-blur-md rounded-[2.5rem] group-hover:bg-white/[0.03]">
                    <motion.div 
                      className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-orange-500 transition-colors duration-500"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <feature.icon className="w-8 h-8 text-orange-500 group-hover:text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4" style={{ transform: "translateZ(10px)" }}>{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg" style={{ transform: "translateZ(5px)" }}>{feature.description}</p>
                    
                    <div className="mt-8 flex items-center text-orange-500 font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Service Brief <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </GlowContainer>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
