"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ProofSection } from "@/components/sections/ProofSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5 text-sm">
            Case Studies
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
            Real Proof. <br />
            <span className="text-orange-500">Real Results.</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            See how Saraswati Stitch has transformed businesses across various industries with bespoke AI solutions.
          </p>
        </section>
        
        <CaseStudies />
        <ProofSection />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
