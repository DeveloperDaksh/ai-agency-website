"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Sun, Moon, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative w-10 h-10 bg-black border border-white/10 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110 group-active:scale-95">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
                
                {/* Animated Logo Icon */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Brain className="w-6 h-6 text-orange-500" />
                </motion.div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-orange-500/50 bg-clip-text text-transparent group-hover:text-orange-500 transition-colors">
                Saraswati Stitch
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/60 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                AI Orchestration
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm hover:text-orange-500 transition-colors">Services</a>
            <a href="/pricing" className="text-sm hover:text-orange-500 transition-colors">Pricing</a>
            <a href="/products" className="text-sm hover:text-orange-500 transition-colors">Products</a>
            <a href="/case-studies" className="text-sm hover:text-orange-500 transition-colors">Case Studies</a>
            <a href="/faq" className="text-sm hover:text-orange-500 transition-colors">FAQ</a>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full w-9 h-9"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-orange-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </Button>

            <a href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-full px-6 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="/services" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/pricing" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="/products" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="/case-studies" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
            <a href="/faq" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            
            <div className="flex items-center justify-between py-2 border-t border-border mt-2">
              <span className="text-sm font-medium">Dark Mode</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full w-9 h-9"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-orange-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
              </Button>
            </div>

            <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-full">Get Started</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
