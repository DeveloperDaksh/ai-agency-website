import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductDetailView } from "./ProductDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return { title: "Product Not Found" };

  const title = `${product.name} | AI Solution Integrated by Saraswati Stitch`;
  const description = `${product.tagline} Curated and integrated by Saraswati Stitch using ${product.techStack.join(", ")}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://saraswatistitch.com/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://saraswatistitch.com/products/${product.slug}`,
      siteName: "Saraswati Stitch",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "applicationCategory": "BusinessApplication",
    "description": product.description,
    "datePublished": product.launchDate,
    "author": {
      "@type": "Organization",
      "name": "Saraswati Stitch",
      "url": "https://saraswatistitch.com"
    },
    "offers": {
      "@type": "Offer",
      "price": product.priceStartingAt?.replace(/[^0-9.]/g, '') || "0.00",
      "priceCurrency": "USD",
      "description": "Contact for custom enterprise pricing"
    },
    "mainEntity": product.faqs ? {
      "@type": "FAQPage",
      "mainEntity": product.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    } : undefined
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailView slug={slug} />
    </>
  );
}
