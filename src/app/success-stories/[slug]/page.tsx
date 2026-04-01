import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowContainer } from "@/components/ui/glow-container";
import { caseStudies } from "@/data/case-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-orange-500">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-6 border-orange-500/20 text-orange-500 px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">
              Case Study: {study.client}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              {study.title}
            </h1>
            <div className="flex flex-wrap gap-8 items-center border-t border-white/10 pt-10">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Impact</span>
                <span className="text-2xl font-bold text-orange-500">{study.metric}</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Client</span>
                <span className="text-2xl font-bold">{study.client}</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Industry</span>
                <span className="text-2xl font-bold">Enterprise AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-orange-500 mb-2">
                <Target className="w-6 h-6" />
                <h2 className="text-2xl font-bold uppercase tracking-tight">The Challenge</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {study.challenge.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {study.challenge.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground/80 leading-relaxed items-start">
                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-emerald-500 mb-2">
                <Zap className="w-6 h-6" />
                <h2 className="text-2xl font-bold uppercase tracking-tight">The Solution</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {study.solution.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {study.solution.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground/80 leading-relaxed items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar / Results */}
          <aside className="lg:col-span-4 sticky top-32">
            <GlowContainer className="rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-8 border-orange-500/20 shadow-2xl">
              <div className="flex items-center gap-3 text-orange-500 mb-8">
                <TrendingUp className="w-6 h-6" />
                <h2 className="text-xl font-bold uppercase tracking-tight">Key Results</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {study.results.metrics.map((m, i) => (
                  <div key={i} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <div className="text-4xl font-bold text-white mb-1">{m.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium opacity-70">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/5">
                <p className="text-xs text-muted-foreground italic leading-relaxed mb-6">
                  "{study.results.description}"
                </p>
                <Link href="/#contact">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-6 font-bold shadow-lg shadow-orange-500/20 group">
                    Scale Your Business
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </GlowContainer>
          </aside>
        </section>

        {/* Closing CTA Section */}
        <section className="container mx-auto px-6 mt-32">
          <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden border border-white/10 group shadow-2xl">
            {/* Background Image with Parallax-like effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("/images/cta-background.png")' }}
            />
            
            {/* Glassmorphism & Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            {/* Dynamic Spotlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center text-center p-8 z-10">
              <Badge variant="outline" className="mb-6 border-orange-500/30 text-orange-400 bg-orange-500/5 px-6 py-2 backdrop-blur-md uppercase tracking-[0.2em] text-[10px] font-bold">
                Next Steps
              </Badge>
              <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-3xl leading-[1.1]">
                Automated Transformation. <br />
                <span className="text-orange-500">Ready for yours?</span>
              </h3>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                Let's discuss how we can build your next success story with bespoke AI automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/#contact">
                  <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white rounded-2xl px-10 py-8 text-lg font-bold shadow-2xl shadow-orange-500/20 transform hover:scale-[1.05] active:scale-95 transition-all group/btn">
                    Book Discovery Call
                    <Zap className="w-5 h-5 ml-3 fill-white" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-2xl px-10 py-8 text-lg font-bold backdrop-blur-md transition-all">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer minimal */}
      <footer className="border-t border-white/5 py-12 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest">
        &copy; {new Date().getFullYear()} AI AGENCY. All Rights Reserved.
      </footer>
    </div>
  );
}
