"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
