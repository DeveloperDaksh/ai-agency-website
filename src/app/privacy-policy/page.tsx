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

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="April 10, 2026">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
        <p>Saraswati Stitch ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Collection</h2>
        <p>We collect information you provide directly to us, such as when you fill out a contact form or book a consultation. This may include your name, email address, and business details.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Information</h2>
        <p>We use your information to provide our services, communicate with you, and improve our website performance. We do not sell your personal data to third parties.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Security</h2>
        <p>We implement enterprise-grade security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
      </section>
    </LegalPage>
  );
}
