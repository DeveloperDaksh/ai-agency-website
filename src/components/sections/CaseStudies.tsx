"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GlowContainer } from "@/components/ui/glow-container";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/case-studies";

// Case studies are now imported from @/data/case-studies

export const CaseStudies = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-6 border-orange-500/20 text-orange-500 px-4 py-1.5">Success Stories</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Real Results. <span className="text-orange-500">Real Revenue.</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">See how we've helped companies eliminate bottlenecks and unlock growth with bespoke AI systems.</p>
          </div>
          <Button variant="ghost" className="group text-orange-500 hover:text-orange-600 rounded-full">
            View all cases <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlowContainer className="rounded-3xl border border-white/5 dark:border-white/5 bg-card/50 backdrop-blur-md group hover:border-orange-500/50 transition-colors h-full flex flex-col">
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6 shadow-lg shadow-orange-500/10`}>
                    <study.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge className="mb-3 bg-muted text-muted-foreground hover:bg-muted">{study.client}</Badge>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{study.title}</h3>
                  <div className="text-orange-500 font-bold text-sm mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {study.metric}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>
                </div>
                <div className="mt-auto p-8 pt-0">
                  <Link href={`/success-stories/${study.slug}`} className="block w-full">
                    <Button variant="outline" className="w-full justify-between items-center px-6 rounded-2xl hover:bg-orange-500 hover:text-white transition-all border-orange-500/10">
                      Read Case Study
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </GlowContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
