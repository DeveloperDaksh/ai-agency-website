"use client";

import * as React from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";

const LegalPage = ({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5 text-sm uppercase tracking-wider">
          Legal
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">{title}</h1>
        <p className="text-muted-foreground mb-12">Last Updated: {lastUpdated}</p>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="April 10, 2026">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
        <p>By accessing or using the services provided by Saraswati Stitch, you agree to be bound by these Terms of Service.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
        <p>Saraswati Stitch provides AI automation, consulting, and custom software development services. Scope of work is defined in individual service agreements.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
        <p>All content, designs, and proprietary code provided on this website are the property of Saraswati Stitch unless otherwise specified.</p>
      </section>
    </LegalPage>
  );
}
