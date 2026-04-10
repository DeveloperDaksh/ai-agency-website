import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowContainer } from "@/components/ui/glow-container";
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  Zap,
  ChevronRight,
  HelpCircle,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | Saraswati Stitch`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  // JSON-LD Schema for AEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Saraswati Stitch",
      "url": "https://saraswatistitch.com"
    },
    "offers": {
      "@type": "Offer",
      "price": service.pricingStartingAt.replace(/[^0-9.]/g, '') || "0.00",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32 pb-24">
        {/* Service Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-orange-500/10 text-orange-500 border-none px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">
                Core Service Offering
              </Badge>
              <h1 className="text-4xl sm:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
                {service.name}
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
                {service.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-orange-500 hover:bg-orange-600 rounded-2xl h-16 px-10 text-lg font-bold shadow-xl shadow-orange-500/20">
                    Book Strategy Session
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <GlowContainer className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-12">
              <div className={`w-32 h-32 sm:w-48 sm:h-48 rounded-[2.5rem] ${service.color} flex items-center justify-center shadow-2xl shadow-orange-500/20`}>
                <service.icon className="w-16 h-16 sm:w-24 sm:h-24 text-white" />
              </div>
            </GlowContainer>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Deep Integration Strategy</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                {service.description}
              </p>

              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Settings className="w-6 h-6 text-orange-500" />
                Our Stitched Process
              </h3>
              <div className="space-y-8 mb-16">
                {service.process.map((p, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center font-bold text-orange-500 text-sm">
                        {i + 1}
                      </div>
                      {i !== service.process.length - 1 && <div className="w-px h-full bg-white/5 mt-2" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{p.step}</h4>
                      <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-orange-500" />
                Key Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.deliverables.map((item) => (
                  <div key={item} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <GlowContainer className="bg-white/5 border border-white/5 rounded-[2rem] p-8">
                <h3 className="text-xl font-bold mb-6">Service Features</h3>
                <div className="space-y-4">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </GlowContainer>

              <div className="p-8 border border-white/5 rounded-[2rem] bg-orange-500/5">
                <h3 className="text-xl font-bold mb-6">Tech Mastery</h3>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-tight">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Service FAQ</h2>
            <p className="text-muted-foreground">Everything you need to know about our {service.name} process.</p>
          </div>
          <div className="grid gap-6">
            {service.faq.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-orange-500 shrink-0" />
                  {item.q}
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-9">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChatbot />
    </div>
  );
}
