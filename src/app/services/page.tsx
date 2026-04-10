"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlowContainer } from "@/components/ui/glow-container";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-none px-4 py-1.5 text-sm uppercase tracking-widest font-bold">
            Elite AI Integrations
          </Badge>
          <h1 className="text-4xl sm:text-8xl font-bold mb-8 tracking-tight leading-[0.95]">
            Our <span className="text-orange-500">Service</span> Ecosystem.
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            We don't just "consult." We build, deploy, and scale intelligent systems tailored to your unique operational logic.
          </p>
        </section>
        
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <GlowContainer className="p-10 border-white/5 bg-white/[0.02] rounded-[3rem] h-full transition-all hover:border-orange-500/20 group-hover:bg-white/[0.04] flex flex-col">
                   <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">{service.description}</p>
                  
                  <div className="flex items-center text-orange-500 font-bold gap-2 text-sm group-hover:translate-x-2 transition-transform">
                    Explore Strategy <ArrowRight className="w-4 h-4" />
                  </div>
                </GlowContainer>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="rounded-[4rem] py-24 px-8 text-center bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <Sparkles className="absolute top-10 right-10 w-24 h-24 text-orange-500/10 group-hover:rotate-12 transition-transform duration-700" />
            <h2 className="text-3xl sm:text-6xl font-bold mb-8 tracking-tight">
              Ready to <span className="text-orange-500">Stitch</span> AI into <br /> Your Business?
            </h2>
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-2xl h-16 px-10 text-lg font-bold">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
