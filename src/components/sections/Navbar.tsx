"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">AI Agency</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-orange-500 transition-colors">Features</a>
            <a href="#pricing" className="text-sm hover:text-orange-500 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm hover:text-orange-500 transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm hover:text-orange-500 transition-colors">FAQ</a>
            
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

            <a href="#contact">
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
            <a href="#features" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-sm hover:text-orange-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            
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

            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-full">Get Started</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
