"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { ParticleField } from "@/components/ui/ParticleField";

export const Hero = () => {
  return (
    <section className="pt-36 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ perspective: "1000px" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(249 115 22)"
      />
      {/* Floating Particles */}
      <ParticleField />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, z: -50 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ transform: "translateZ(30px)" }}
            >
              <Badge className="mb-8 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5">
                <Sparkles className="w-3 h-3 mr-1.5" />
                AI-Powered Growth Engine
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              style={{ transform: "translateZ(50px)" }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-orange-500 to-foreground bg-clip-text text-transparent leading-[1.1] tracking-tight"
            >
              {"Build Smarter. Scale Faster. Automate Everything.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + (i * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, z: -20 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transform: "translateZ(40px)" }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg"
            >
              We design and deploy custom AI systems that eliminate busywork, unlock insights, and accelerate revenue — so you can focus on what matters.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, z: -10 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ transform: "translateZ(35px)" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-orange-500/30">
                  View Pricing
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Interactive Robot */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              rotateY: 0,
              y: [0, -20, 0]
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.3 },
              x: { duration: 0.8, delay: 0.3 },
              rotateY: { duration: 0.8, delay: 0.3 },
              y: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-transparent rounded-full blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            
            <div className="relative w-full h-full" style={{ 
              filter: "sepia(0.5) hue-rotate(-15deg) saturate(1.5) brightness(1.1) drop-shadow(0 0 30px rgba(249, 115, 22, 0.2))",
              transition: "filter 0.5s ease-in-out"
            }}>
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
