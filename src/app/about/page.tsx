"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Rocket, 
  ShieldCheck, 
  Heart, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Quote,
  Lightbulb,
  Workflow
} from "lucide-react";
import Link from "next/link";
import { GlowContainer } from "@/components/ui/glow-container";

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="p-8 border-white/5 bg-background/50 backdrop-blur-xl rounded-[2.5rem] hover:border-orange-500/20 transition-all group overflow-hidden relative">
    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-[50px] -z-10 group-hover:bg-orange-500/10 transition-colors" />
    <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-all duration-500 group-hover:scale-110">
      <Icon className="w-8 h-8 text-orange-500 group-hover:text-white" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
  </Card>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Modern Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-500/5 blur-[120px] -z-10 rounded-full" />
          
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-8 bg-orange-500/10 text-orange-600 border-none px-6 py-2 text-xs uppercase tracking-[0.2em] font-bold">
                The Innovation Lab
              </Badge>
              <h1 className="text-4xl sm:text-8xl font-bold mb-10 tracking-tight leading-[0.95] bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
                Stitching Wisdom <br />into <span className="text-orange-500">Intelligence.</span>
              </h1>
              <p className="text-muted-foreground text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">
                We are more than an agency. We are an AI integration powerhouse dedicated to eliminating "Busywork" through elite craftsmanship and daily innovation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-12 text-foreground/40 font-bold uppercase tracking-widest text-xs">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange-500" />
                  Fast Execution
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  Enterprise Grade
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-orange-500" />
                  Deep Strategy
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder's Vision - THE HUMAN ASPECT */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlowContainer className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-8 border border-orange-500/30">
                    <Sparkles className="w-16 h-16 text-orange-500" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Daksh Tyagi</h4>
                  <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-8">Founder & AI Architect</p>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "AI is not a replacement for human wisdom; it's a multiplier. We don't just 'deploy' models—we stitch them into the very fabric of your business logic."
                  </p>
                </div>
              </GlowContainer>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-8 rounded-3xl shadow-2xl shadow-orange-500/20 max-w-[280px] hidden sm:block">
                <Quote className="text-white w-8 h-8 mb-4 opacity-50" />
                <p className="text-white font-medium leading-tight text-lg">
                  Every project is a craft. Every line of code is an investment in your scale.
                </p>
              </div>
            </motion.div>

            <div className="space-y-10">
              <h2 className="text-3xl sm:text-6xl font-bold tracking-tight leading-tight">
                Our Story: From Code to <span className="text-orange-500">Cognition</span>
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Saraswati Stitch emerged from a simple realization: businesses were getting "AI Fatigue." They had the models, but not the **integration.**
                </p>
                <p>
                  Founded by Daksh Tyagi, our agency was built to be the "Expert Tailors" of the AI era. We took the wisdom of institutional knowledge (Saraswati) and combined it with the technical precision required to integrate (Stitch) it into workflows.
                </p>
                <p>
                  We don't believe in generic wrappers. We believe in high-performance, private, and ROI-focused AI ecosystems that actually move the needle.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/contact">
                  <Button className="bg-orange-500 hover:bg-orange-600 rounded-2xl h-16 px-10 text-lg font-bold">
                    Join Our Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The "Stitch" Philosophy */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-40">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-6xl font-bold mb-6">Our Core Values</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              These principles guide every integration, every model deployment, and every line of code we ship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={Lightbulb} 
              title="Intelligence First" 
              description="We don't just automate; we build systems that think, learn, and adapt to your unique business needs." 
            />
            <ValueCard 
              icon={Rocket} 
              title="Rapid Delivery" 
              description="Value is only realized when it's deployed. We ship enterprise-grade AI solutions in weeks, not months." 
            />
            <ValueCard 
              icon={ShieldCheck} 
              title="Enterprise Trust" 
              description="Security is baked in. Your data remains private, protected, and fully yours. No compromises." 
            />
            <ValueCard 
              icon={Workflow} 
              title="Seamless Stitch" 
              description="We design AI that fits your existing tech stack perfectly, avoiding friction and maximizing adoption." 
            />
          </div>
        </section>

        {/* Global Impact */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <GlowContainer className="rounded-[4rem] p-12 sm:p-24 bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-6xl font-bold mb-8">Global Footprint, <br /><span className="text-orange-500">Local Precision.</span></h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  Headquartered in Faridabad, India, but operating at a global scale. We serve forward-thinking enterprises across North America, Europe, and Asia, stitching AI into the fabric of daily operations.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-1">12+</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-1">5M+</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Queries Handled</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">AI Monitoring</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square flex items-center justify-center">
                 <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
                 <Globe className="w-48 h-48 sm:w-64 sm:h-64 text-orange-500/50 relative z-10 animate-pulse" />
              </div>
            </div>
          </GlowContainer>
        </section>

        <section className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-12 italic text-muted-foreground/50">
            "Wisdom is knowing what to do. Skill is knowing how to do it. Stitching is doing it right."
          </h2>
        </section>
      </main>

      <Footer />
      <FloatingChatbot />
    </div>
  );
}
