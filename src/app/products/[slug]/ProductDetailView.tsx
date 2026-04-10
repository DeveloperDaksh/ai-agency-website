"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowContainer } from "@/components/ui/glow-container";
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Search, 
  Settings, 
  ShieldCheck, 
  Zap,
  ChevronRight,
  Sparkles,
  Brain,
  Globe,
  HelpCircle,
  MessageSquare,
  BarChart3,
  Link as LinkIcon
} from "lucide-react";
import Link from "next/link";

export function ProductDetailView({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      


      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-orange-500 transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-orange-500/10 text-orange-500 border-none px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">
                {product.category} • Launched {new Date(product.launchDate).toLocaleDateString()}
              </Badge>
              <h1 className="text-4xl sm:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
                {product.name}
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
                {product.tagline}
              </p>
              
              <div className="space-y-4 mb-12">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <span className="text-lg text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-12">
                {product.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold tracking-tight">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-orange-500 hover:bg-orange-600 rounded-2xl h-16 px-10 text-lg font-bold shadow-xl shadow-orange-500/20 group">
                    Get This Integrated
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button variant="outline" className="rounded-2xl h-16 px-10 text-lg font-bold border-white/10 hover:bg-white/5">
                  View Live Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <GlowContainer className="aspect-square sm:aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl flex items-center justify-center p-12">
                <div className={`w-32 h-32 sm:w-48 sm:h-48 rounded-[2.5rem] bg-gradient-to-br ${product.color} flex items-center justify-center shadow-2xl shadow-orange-500/20`}>
                  <product.icon className="w-16 h-16 sm:w-24 sm:h-24 text-white" />
                </div>
              </GlowContainer>
              
              <div className="absolute -top-6 -right-6 bg-background/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Performance</div>
                    <div className="font-bold">ROI Guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modular Content Section */}
        <section id="overview" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-32">
          {/* "What Is" - Optimized for AI & Answer Engines */}
          <div className="mb-24 p-8 sm:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -z-10" />
            <div className="max-w-3xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500 mb-6">Semantic Overview</h2>
              <h3 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight">
                What is <span className="text-orange-500">{product.name}</span>?
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {product.whatIs || product.description}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24">
            <div id="how-it-works">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Search className="w-8 h-8 text-orange-500" />
                The Problem It Solves
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {product.problem}
              </p>

              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-8 h-8 text-orange-500" />
                Operational Workflow
              </h2>
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-white/5 hidden sm:block" />
                {product.process.map((p, i) => (
                  <div key={i} className="relative sm:pl-12">
                    <div className="absolute left-[-2px] top-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,1)] hidden sm:block" />
                    <h4 className="font-bold text-xl mb-2 text-foreground">{p.step}</h4>
                    <p className="text-muted-foreground leading-relaxed">{p.action}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div id="specs">
                <GlowContainer className="bg-white/5 border border-white/5 rounded-[2rem] p-10">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-orange-500" />
                    Market Comparison
                  </h3>
                  <div className="space-y-6">
                    {product.comparisons?.map((comp, i) => (
                      <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">{comp.feature}</div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                            <div className="text-[10px] text-orange-500 uppercase font-bold mb-1">Our Integrated Solution</div>
                            <div className="text-sm font-bold">{comp.sarswatiValue}</div>
                          </div>
                          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                            <div className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Industry Default</div>
                            <div className="text-sm font-medium">{comp.competitorValue}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlowContainer>
              </div>

              <div className="p-10 border border-white/5 rounded-[2rem] bg-orange-500/5">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-orange-500" />
                  Orchestration Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-2">Base Cost</div>
                    <div className="text-lg font-bold text-orange-500">{product.priceStartingAt || "Custom Quote"}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {product.industries.map((industry) => (
                      <div key={industry.name}>
                        <div className="font-bold text-foreground mb-1 text-sm">{industry.name}</div>
                        <div className="text-[10px] text-muted-foreground leading-tight">{industry.useCase}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground">Expert insights on integrating {product.name} into your business.</p>
          </div>
          <div className="grid gap-6">
            {product.faqs?.map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-colors">
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-orange-500 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <GlowContainer className="rounded-[4rem] py-24 px-8 text-center bg-gradient-to-b from-orange-500 to-orange-600 relative overflow-hidden group">
            <Sparkles className="absolute top-10 right-10 w-24 h-24 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
            <Brain className="absolute bottom-[-20%] left-[-5%] w-64 h-64 text-black/5" />
            
            <h2 className="text-3xl sm:text-6xl font-bold mb-8 text-white tracking-tight relative z-10">
              Want This Integrated into Your Business?
            </h2>
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10">
              We can customize {product.name} to fit your exact operational needs and integrate it with your existing tech stack.
            </p>
            <Link href={`/contact?product=${product.slug}`}>
              <Button className="bg-white text-orange-600 hover:bg-slate-100 rounded-2xl h-20 px-12 text-xl font-bold shadow-2xl relative z-10 transition-transform hover:scale-105 active:scale-95">
                Request Custom Quote
              </Button>
            </Link>
          </GlowContainer>
        </section>
      </main>

      <Footer />
      <FloatingChatbot />
    </div>
  );
}
