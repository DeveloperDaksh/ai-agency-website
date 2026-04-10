"use client";
import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import ComingSoon from "@/components/ComingSoon";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <ComingSoon title="Saraswati Stitch Blog" />
      </main>
      <Footer />
    </div>
  );
}
