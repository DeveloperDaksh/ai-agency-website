"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5 text-sm">
            Scalable Pricing
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
            Plans Built for <br />
            <span className="text-orange-500">Every Business Stage</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan to accelerate your operations with AI. All plans include our 30-day satisfaction guarantee.
          </p>
        </section>
        
        <Pricing />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
