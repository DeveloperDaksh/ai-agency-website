"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-4 pt-32 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />
        
        <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5 text-sm uppercase tracking-wider animate-pulse">
          Coming Soon
        </Badge>
        
        <Sparkles className="w-16 h-16 text-orange-500 mb-8" />
        
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
          {title}
        </h1>
        
        <p className="text-muted-foreground text-xl max-w-xl mb-12 leading-relaxed">
          We&apos;re putting the finishing touches on this section. Our team is working hard to bring you comprehensive details about our {title} solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-orange-500/20 transition-all">
              Inquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="rounded-full px-8 h-14 text-lg font-bold">
              View All Services
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
