"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
