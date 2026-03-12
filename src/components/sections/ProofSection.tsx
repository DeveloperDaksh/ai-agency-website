"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Zap } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SplitHoverCardProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftBg?: string;
  rightBg?: string;
}

const SplitHoverCard: React.FC<SplitHoverCardProps> = ({ 
  leftContent, 
  rightContent,
  leftBg = "from-orange-500/20 to-orange-600/10",
  rightBg = "from-orange-600/20 to-orange-500/10"
}) => {
  const [splitPosition, setSplitPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSplitPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseLeave = () => {
    setSplitPosition(50);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full overflow-hidden rounded-3xl cursor-pointer"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-gradient-to-br",
          leftBg
        )}
        style={{
          clipPath: `polygon(0 0, ${splitPosition}% 0, ${splitPosition}% 100%, 0 100%)`,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: (splitPosition - 50) / 5,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div style={{ transform: "translateZ(30px)" }}>{leftContent}</div>
      </motion.div>

      <motion.div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-gradient-to-br",
          rightBg
        )}
        style={{
          clipPath: `polygon(${splitPosition}% 0, 100% 0, 100% 100%, ${splitPosition}% 100%)`,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: (splitPosition - 50) / 5,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div style={{ transform: "translateZ(30px)" }}>{rightContent}</div>
      </motion.div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-orange-500 shadow-lg shadow-orange-500/50 z-10"
        style={{
          left: `${splitPosition}%`,
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
};

const StatItem = ({ value, suffix, label, delay = 0, prefix = "" }: { value: number, suffix: string, label: string, delay?: number, prefix?: string }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setCurrentValue(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.1, z: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="text-3xl sm:text-4xl font-bold text-orange-500 flex items-baseline justify-center">
        {prefix && <span>{prefix}</span>}
        <NumberFlow
          value={currentValue}
          format={{ useGrouping: false }}
          transformTiming={{ duration: 1000, easing: "ease-out" }}
        />
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </motion.div>
  );
};

export const ProofSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5">
            The AI Advantage
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Human Intelligence <span className="text-orange-500">×</span> Machine Scale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Drag the slider to see how AI augments your team&apos;s capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="h-[400px]">
            <SplitHoverCard
              leftContent={
                <div className="text-center p-6" style={{ transformStyle: "preserve-3d" }}>
                  <Brain className="w-16 h-16 text-orange-500 mx-auto mb-4" style={{ transform: "translateZ(20px)" }} />
                  <h3 className="text-2xl font-bold mb-2">Human Intuition</h3>
                  <p className="text-sm opacity-80">Deep strategy & creative thinking</p>
                </div>
              }
              rightContent={
                <div className="text-center p-6" style={{ transformStyle: "preserve-3d" }}>
                  <Zap className="w-16 h-16 text-orange-400 mx-auto mb-4" style={{ transform: "translateZ(20px)" }} />
                  <h3 className="text-2xl font-bold mb-2">AI Precision</h3>
                  <p className="text-sm opacity-80">Infinite scale & data processing</p>
                </div>
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-10 text-center bg-muted/30 p-12 rounded-3xl border border-white/5 dark:border-white/5 backdrop-blur-md">
            <StatItem value={150} suffix="+" label="Projects Shipped" delay={0.1} />
            <StatItem value={20} suffix="+" label="Industries Served" delay={0.2} />
            <StatItem value={98} suffix="%" label="Client Satisfaction" delay={0.3} />
            <StatItem value={500} suffix="+" label="AI Models Deployed" delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
};
