"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
