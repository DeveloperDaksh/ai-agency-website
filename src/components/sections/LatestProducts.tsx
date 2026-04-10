"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Globe, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowContainer } from "@/components/ui/glow-container";
import { products } from "@/data/products";

export const LatestProducts = () => {
  // Get the 3 most recent products
  const latestProducts = [...products]
    .sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
    .slice(0, 3);

  return (
    <section id="latest-products" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-6 border-orange-500/20 text-orange-500 px-4 py-1.5 flex items-center gap-2 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Daily AI Innovation
            </Badge>
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight mb-6">
              Curated AI <span className="text-orange-500">Tools & Power-ups</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Curated AI solutions, seamlessly stitched into your business.
            </p>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="group text-orange-500 hover:text-orange-600 rounded-full h-14 px-8 text-lg font-bold">
              View All Tools 
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {latestProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlowContainer className="rounded-[2.5rem] border border-white/5 bg-card/50 backdrop-blur-xl group hover:border-orange-500/30 transition-all flex flex-col h-full overflow-hidden">
                <div className="p-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-8 shadow-lg shadow-orange-500/10 group-hover:scale-110 transition-transform duration-500`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-none px-3">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(product.launchDate).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg line-clamp-2">
                    {product.tagline}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 mb-8">
                    {product.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2 py-1 rounded bg-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={`/products/${product.slug}`} className="block w-full">
                    <Button className="w-full justify-between items-center h-14 px-8 rounded-2xl bg-white/5 hover:bg-orange-500 text-foreground hover:text-white transition-all border border-white/5 group-internal">
                      Explore Product
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
