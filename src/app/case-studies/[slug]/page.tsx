import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowContainer } from "@/components/ui/glow-container";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Clock,
  Zap,
  Cpu,
  BarChart3,
  TrendingUp,
  Layout,
  Workflow,
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study | Saraswati Stitch`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/case-studies" className="hover:text-orange-500 transition-colors">Case Studies</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{study.client}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-orange-500/10 text-orange-500 border-none px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">
                  Client Success Story
                </Badge>
                <Badge variant="outline" className="border-white/10 text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  {study.metric}
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-7xl font-bold mb-8 tracking-tight leading-[1.05]">
                {study.title}
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
                {study.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {study.techStackDetail?.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold tracking-tight">
                    {tech}
                  </span>
                ))}
              </div>

              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-2xl h-16 px-10 text-lg font-bold shadow-xl shadow-orange-500/20">
                  Request Case Study Brief
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <GlowContainer className="aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-12 relative group">
               <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
               <study.icon className="w-24 h-24 sm:w-32 sm:h-32 text-white relative z-10" />
            </GlowContainer>
          </div>
        </section>

        {/* Deep Dive Sections */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid lg:grid-cols-3 gap-24">
            <div className="lg:col-span-2 space-y-24">
              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                  {study.challenge.title}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {study.challenge.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {study.challenge.points.map((point) => (
                    <div key={point} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Solution & Architecture */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Cpu className="w-8 h-8 text-orange-500" />
                  The "Stitched" Solution
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  {study.solution.description}
                </p>
                
                {study.architecture && (
                  <div className="mb-12 p-8 rounded-[2.5rem] bg-orange-500/5 border border-orange-500/20">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                       <Layout className="w-5 h-5 text-orange-500" />
                       Architecture Overview
                    </h3>
                    <p className="text-muted-foreground mb-8">{study.architecture.description}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {study.architecture.components.map((comp) => (
                        <div key={comp} className="p-3 rounded-xl bg-background border border-white/10 text-center text-xs font-bold uppercase tracking-widest">
                          {comp}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {study.solution.points.map((point) => (
                    <div key={point} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI & Results */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                  Tangible ROI & Metrics
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                  {study.results.description}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                   {study.results.metrics.map((m) => (
                     <div key={m.label} className="text-center p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                        <div className="text-3xl font-bold text-orange-500 mb-2">{m.value}</div>
                        <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground leading-tight">
                          {m.label}
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <aside className="space-y-12">
              {/* Timeline */}
              <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  Project Timeline
                </h3>
                <div className="space-y-8 relative">
                  <div className="absolute left-4 top-2 bottom-2 w-px bg-white/5" />
                  {study.timeline?.map((t, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-orange-500" />
                      <div className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">{t.phase} ({t.duration})</div>
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed">{t.task}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Sidebar */}
              <div className="p-10 rounded-[3rem] bg-orange-500 text-white text-center group overflow-hidden relative">
                <Zap className="absolute top-0 right-0 w-32 h-32 text-black/5 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-2xl font-bold mb-4 relative z-10">Want these results?</h3>
                <p className="text-white/80 mb-8 relative z-10">We can 'Stitch' a similar ROI-focused AI solution into your enterprise logic.</p>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full h-14 rounded-2xl font-bold text-orange-500 hover:bg-white relative z-10">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChatbot />
    </div>
  );
}
