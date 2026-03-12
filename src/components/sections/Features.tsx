"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Zap, Rocket, Shield, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { GlowContainer } from "@/components/ui/glow-container";

const features = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "We map your operations, identify automation opportunities, and build a custom AI roadmap aligned to your revenue goals."
  },
  {
    icon: Code,
    title: "Custom AI Development",
    description: "From intelligent chatbots to predictive analytics engines — bespoke software built on GPT-4, Claude, and open-source models."
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Eliminate manual data entry, scheduling, and reporting. We connect your tools and let AI handle the repetitive work."
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Production-ready in weeks, not months. Our battle-tested frameworks get you from concept to live system fast."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption. Your data stays yours — always."
  },
  {
    icon: Sparkles,
    title: "Ongoing Optimization",
    description: "AI systems get smarter with time. We continuously monitor, fine-tune, and scale your solutions as your business grows."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5">
            What We Do
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            Everything You Need to <span className="text-orange-500">Win with AI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            End-to-end AI solutions designed for businesses that refuse to settle for average.
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
            >
              <GlowContainer className="rounded-3xl h-full">
                <Card className="p-8 hover:shadow-2xl transition-all border-white/5 dark:border-white/5 h-full bg-background/50 backdrop-blur-md rounded-3xl">
                  <motion.div 
                    className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <feature.icon className="w-7 h-7 text-orange-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3" style={{ transform: "translateZ(10px)" }}>{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed" style={{ transform: "translateZ(5px)" }}>{feature.description}</p>
                </Card>
              </GlowContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
