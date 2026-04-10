"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Play, Quote, Star, Sparkles } from "lucide-react";
import { GlowContainer } from "@/components/ui/glow-container";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";

const testimonials = [
  {
    name: "James Chen",
    role: "COO, Nexus Retail",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote: "The AI agent Saraswati Stitch built isn't just a bot—it's our top performing support rep.",
    stats: "85% Auto-resolution"
  },
  {
    name: "Sarah Miller",
    role: "Founder, GreenFlow",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    quote: "Stitching AI into our supply chain saved us $200k in the first quarter alone.",
    stats: "30% Cost Reduction"
  },
  {
    name: "Marcus Thorne",
    role: "CTO, MediaFlow Inc.",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    quote: "Rapid deployment that actually works. We went from concept to live in 3 weeks.",
    stats: "5x Content Velocity"
  }
];

export const VideoTestimonials = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-orange-500/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-none px-4 py-1.5 uppercase font-bold tracking-widest text-[10px]">
            The Wall of Love
          </Badge>
          <h2 className="text-3xl sm:text-7xl font-bold mb-6 tracking-tight leading-[0.95]">
            Stories of <span className="text-orange-500">Stitched</span> Success.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Real founders. Real results. See how we've fundamentally changed the operations of our global partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <GlowContainer className="rounded-[2.5rem] p-0 overflow-hidden border border-white/5 bg-background/50 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden group">
                  <Image 
                    src={t.thumbnail} 
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/40 group-hover:scale-125 transition-transform duration-500">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                      {t.stats}
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow relative">
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-orange-500/10" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl font-medium leading-relaxed mb-8 text-foreground italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-auto pt-8 border-t border-white/5">
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </GlowContainer>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 text-sm font-bold text-orange-500">
             <Sparkles className="w-4 h-4" />
             JOIN 25+ COMPANIES WINNING WITH AI
           </div>
        </div>
      </div>
    </section>
  );
};
