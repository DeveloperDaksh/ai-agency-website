"use client";
import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import ComingSoon from "@/components/ComingSoon";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <ComingSoon title="Resources & Tools" />
      </main>
      <Footer />
    </div>
  );
}
