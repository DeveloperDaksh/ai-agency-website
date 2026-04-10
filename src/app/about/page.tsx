"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Brain, Rocket, ShieldCheck, Heart } from "lucide-react";

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="p-8 border-white/5 bg-background/50 backdrop-blur-xl rounded-[2rem] hover:border-orange-500/20 transition-all group">
    <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
      <Icon className="w-7 h-7 text-orange-500 group-hover:text-white" />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </Card>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5 text-sm uppercase tracking-wider">
            Our Mission
          </Badge>
          <h1 className="text-4xl sm:text-7xl font-bold mb-10 tracking-tight leading-[1.1]">
            We Build the <span className="text-orange-500">Future of Work</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Saraswati Stitch is an AI automation agency dedicated to helping businesses scale by automating the mundane and empowering the exceptional.
          </p>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={Brain} 
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
              title="Security & Trust" 
              description="Enterprise-grade security is baked into every line of code. Your data remains yours, private and protected." 
            />
            <ValueCard 
              icon={Heart} 
              title="Client Success" 
              description="We measure our success by your ROI. If you don't grow, we haven't done our job." 
            />
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-10">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded on the principle that AI should be accessible and impactful, Saraswati Stitch (formerly AI Agency) evolved from a custom software consultancy into a specialized AI automation powerhouse.
            </p>
            <p>
              Our name, Saraswati Stitch, reflects our philosophy: "Saraswati" for wisdom and knowledge, and "Stitch" for the seamless integration of AI into the fabric of your existing business processes.
            </p>
            <p>
              Today, we serve global clients across industries—from retail and logistics to media and enterprise technology—helping them reclaim thousands of hours and unlock new revenue streams through the power of intelligent automation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
