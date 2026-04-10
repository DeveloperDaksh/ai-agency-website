import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Saraswati Stitch | AI Automation & Custom Software Development",
  description: "Saraswati Stitch designs and deploys custom AI systems, workflow automation, and intelligent software solutions that eliminate busywork and accelerate revenue.",
  keywords: ["AI Automation", "Custom AI Software", "Business Automation", "AI Consulting", "Enterprise AI Solutions", "Intelligent Workflows", "Saraswati Stitch"],
  authors: [{ name: "Saraswati Stitch Team" }],
  openGraph: {
    title: "Saraswati Stitch | AI Automation & Custom Software Development",
    description: "Saraswati Stitch designs and deploys custom AI systems, workflow automation, and intelligent software solutions that eliminate busywork and accelerate revenue.",
    url: "https://saraswatistitch.com",
    siteName: "Saraswati Stitch",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://saraswatistitch.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saraswati Stitch | AI Automation & Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saraswati Stitch | AI Automation & Custom Software Development",
    description: "Saraswati Stitch designs and deploys custom AI systems, workflow automation, and intelligent software solutions that eliminate busywork and accelerate revenue.",
    images: ["https://saraswatistitch.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://saraswatistitch.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Saraswati Stitch",
              "url": "https://saraswatistitch.com",
              "logo": "https://saraswatistitch.com/logo.png",
              "description": "AI automation and custom software development agency specializing in intelligent workflow automation, AI chatbots, and enterprise AI solutions.",
              "email": "hello@saraswatistitch.com",
              "foundingDate": "2024",
              "sameAs": [
                "https://linkedin.com/company/saraswatistitch",
                "https://twitter.com/saraswatistitch",
                "https://github.com/saraswatistitch"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              },
              "areaServed": "Worldwide"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "AI Automation & Software Development",
              "provider": {
                "@type": "Organization",
                "name": "Saraswati Stitch"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom AI Chatbots"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Process Automation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Strategy Consulting"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
