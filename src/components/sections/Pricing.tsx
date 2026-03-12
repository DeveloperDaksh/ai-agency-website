"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import NumberFlow from "@number-flow/react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "STARTER",
    price: "499",
    yearlyPrice: "399",
    period: "per month",
    features: [
      "2 hours AI consulting / month",
      "1 workflow automation",
      "Email support (48h response)",
      "1 tool integration",
      "Monthly performance reports"
    ],
    description: "Perfect for solopreneurs testing the waters with AI",
    buttonText: "Start Free Trial",
    href: "#contact",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "1299",
    yearlyPrice: "1039",
    period: "per month",
    features: [
      "8 hours AI consulting / month",
      "Unlimited automations",
      "Priority support (24h SLA)",
      "Up to 5 integrations",
      "Custom AI model training",
      "Weekly strategy calls",
      "Performance analytics dashboard"
    ],
    description: "The growth engine for scaling businesses and agencies",
    buttonText: "Get Started Now",
    href: "#contact",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "2999",
    yearlyPrice: "2399",
    period: "per month",
    features: [
      "Unlimited AI consulting",
      "Full-stack development team",
      "Dedicated account manager",
      "Unlimited integrations",
      "Custom AI solutions & APIs",
      "24/7 priority support",
      "White-label options",
      "SLA guarantee (99.9% uptime)"
    ],
    description: "For organizations with complex, mission-critical needs",
    buttonText: "Contact Sales",
    href: "#contact",
    isPopular: false,
  },
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#ea580c", "#fb923c", "#fdba74", "#fed7aa"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
      });
    }
  };

  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            Invest in Growth. <span className="text-orange-500">See Returns Fast.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
            Transparent pricing with no hidden fees. Every plan includes dedicated support and measurable outcomes.
          </p>

          <div className="flex justify-center items-center gap-4 mb-12">
            <span className={cn("text-sm font-medium transition-colors", isMonthly && "text-foreground")}>
              Monthly
            </span>
            <Label>
              <Switch
                ref={switchRef as any}
                checked={!isMonthly}
                onCheckedChange={handleToggle}
              />
            </Label>
            <span className={cn("text-sm font-medium transition-colors", !isMonthly && "text-foreground")}>
              Annual <span className="text-orange-500 font-bold">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{ perspective: "1500px" }}>
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: plan.isPopular ? 0 : 3,
                z: 50,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              style={{ transformStyle: "preserve-3d" }}
              className={cn(
                "relative",
                plan.isPopular && "md:-mt-4"
              )}
            >
              <Card className={cn(
                "p-8 relative overflow-hidden h-full rounded-3xl backdrop-blur-md",
                plan.isPopular 
                  ? "border-orange-500 border-2 shadow-2xl shadow-orange-500/10 bg-background" 
                  : "border-white/5 dark:border-white/5 bg-background/50"
              )}>
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1.5 text-xs font-bold rounded-bl-2xl">
                    <Star className="w-3 h-3 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-sm font-bold tracking-widest text-muted-foreground mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">
                      <NumberFlow
                        value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                        format={{
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        transformTiming={{
                          duration: 500,
                          easing: "ease-out",
                        }}
                      />
                    </span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                    {isMonthly ? "billed monthly" : "billed annually"}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{plan.description}</p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={plan.href}>
                  <Button 
                    className={cn(
                      "w-full rounded-full h-12 font-bold transition-all",
                      plan.isPopular 
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20" 
                        : "bg-muted hover:bg-muted/80"
                    )}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
