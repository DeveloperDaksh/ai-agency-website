"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { GlowContainer } from "@/components/ui/glow-container";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-none px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">
            Intelligence Hub
          </Badge>
          <h1 className="text-4xl sm:text-8xl font-bold mb-8 tracking-tight leading-[0.95]">
            Stitched <span className="text-orange-500">Insights.</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Technical guides, strategic audits, and industry trends from the AI Innovation Lab.
          </p>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <GlowContainer className="rounded-[2.5rem] h-full transition-all group-hover:border-orange-500/20">
                  <Card className="p-8 border-white/5 bg-white/[0.02] rounded-[2.5rem] h-full flex flex-col group-hover:bg-white/[0.03] transition-all">
                    <div className="flex items-center justify-between mb-8">
                      <Badge variant="outline" className="border-orange-500/20 text-orange-500/80 text-[10px] uppercase font-bold tracking-widest">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{post.date}</span>
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                        <ArrowRight className="w-5 h-5 text-orange-500 group-hover:text-white" />
                      </div>
                    </div>
                  </Card>
                </GlowContainer>
              </Link>
            ))}
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="container mx-auto px-4">
          <GlowContainer className="rounded-[4rem] p-12 sm:p-24 bg-gradient-to-br from-orange-500/10 to-transparent border border-white/5 text-center relative overflow-hidden group">
            <Sparkles className="absolute top-0 right-0 w-32 h-32 text-orange-500/5 -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-3xl sm:text-6xl font-bold mb-8 tracking-tight">Stay Ahead of the <br /><span className="text-orange-500">AI Curve.</span></h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              Join 2,500+ leaders getting our weekly "Daily Stitch" breakdown on AI automation and strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 h-16 outline-none focus:border-orange-500 transition-colors flex-grow"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-16 rounded-2xl px-8 transition-all">
                Join Lab
              </button>
            </div>
          </GlowContainer>
        </section>
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
