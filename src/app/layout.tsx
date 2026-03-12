import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI Agency | Custom AI Automation & Software Solutions for Business",
  description: "Bespoke AI solutions, intelligent automation, and custom software development. Transform your business efficiency with our ROI-driven AI agency solutions.",
  keywords: ["AI Automation", "Custom AI Software", "Business Automation", "AI Consulting", "Enterprise AI Solutions", "Intelligent Workflows"],
  authors: [{ name: "AI Agency Team" }],
  openGraph: {
    title: "AI Agency | Custom AI Automation & Software Solutions",
    description: "Bespoke AI solutions and custom software for modern businesses. Transform your efficiency with ROI-driven AI.",
    url: "https://ai-agency-solutions.com",
    siteName: "AI Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agency | Custom AI Automation & Software Solutions",
    description: "Bespoke AI solutions and custom software for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ai-agency-solutions.com",
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
              "name": "AI Agency",
              "url": "https://ai-agency-solutions.com",
              "logo": "https://ai-agency-solutions.com/logo.png",
              "description": "Bespoke AI solutions and custom software for modern businesses.",
              "sameAs": [
                "https://twitter.com/aiagency",
                "https://linkedin.com/company/aiagency"
              ]
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
                "name": "AI Agency"
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
