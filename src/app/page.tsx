"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";

// Dynamically import below-the-fold sections
const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features));
const Process = dynamic(() => import("@/components/sections/Process").then(mod => mod.Process));
const ProofSection = dynamic(() => import("@/components/sections/ProofSection").then(mod => mod.ProofSection));
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies").then(mod => mod.CaseStudies));
const LatestProducts = dynamic(() => import("@/components/sections/LatestProducts").then(mod => mod.LatestProducts));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => mod.Pricing));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

export default function AIAgencyWebsite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Process />
        <ProofSection />
        <CaseStudies />
        <LatestProducts />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
