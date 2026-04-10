"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  ShoppingCart, 
  Truck, 
  BarChart3, 
  Globe, 
  Smartphone,
  ShieldCheck,
  Zap,
  Cpu
} from "lucide-react";
import { GlowContainer } from "@/components/ui/glow-container";

const industries = [
  { name: "E-commerce", icon: ShoppingCart, count: "8+ Projects" },
  { name: "Logistics", icon: Truck, count: "5+ Projects" },
  { name: "SaaS", icon: Smartphone, count: "12+ Projects" },
  { name: "Retail", icon: Building2, count: "15+ Projects" },
  { name: "Finance", icon: BarChart3, count: "4+ Projects" },
  { name: "Healthcare", icon: ShieldCheck, count: "2+ Projects" },
];

export const TrustGrid = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight">
              A Global Infrastructure <br /> of <span className="text-orange-500">Trust.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We've deployed AI systems across divergent sectors, each time stitching technical precision with industry-specific nuance.
            </p>
            <div className="flex items-center gap-4 text-sm font-bold text-orange-500 uppercase tracking-widest">
              <span className="w-12 h-px bg-orange-500" />
              Trusted Globally
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlowContainer className="p-8 rounded-[2rem] border border-white/5 bg-background/50 backdrop-blur-md group hover:border-orange-500/20 transition-all flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-500 shadow-xl shadow-orange-500/5">
                    <industry.icon className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{industry.name}</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-[0.2em]">
                    {industry.count}
                  </p>
                </GlowContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
