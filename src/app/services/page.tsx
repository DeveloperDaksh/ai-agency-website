"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Features } from "@/components/sections/Features";
import { Process } from "@/components/sections/Process";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5 text-sm">
            Our Services
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
            AI Automation & <br />
            <span className="text-orange-500">Custom Development</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            We build and deploy intelligent systems that eliminate busywork, unlock insights, and accelerate your business growth.
          </p>
        </section>
        
        <Features />
        <Process />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
