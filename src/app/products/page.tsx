"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingChatbot } from "@/components/sections/FloatingChatbot";
import { products, Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowContainer } from "@/components/ui/glow-container";
import { Search, Filter, ArrowRight, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

const categories = ["All", "AI Agents", "Automation Tools", "Analytics", "Integrations", "Custom Solutions"];

export default function ProductsHub() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6 border-orange-500/20 text-orange-500 px-4 py-1.5 uppercase tracking-widest text-xs">
              Product Catalog
            </Badge>
            <h1 className="text-4xl sm:text-7xl font-bold mb-6 tracking-tight">
              AI Tools Curated <span className="text-orange-500">& Integrated</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Elite AI tools, expertly stitched into your business workflow.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-orange-500/50 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category 
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                      : "bg-white/5 text-muted-foreground hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/products/${product.slug}`}>
                    <GlowContainer className="rounded-[2.5rem] border border-white/5 bg-card/50 backdrop-blur-xl group hover:border-orange-500/30 transition-all flex flex-col h-full overflow-hidden cursor-pointer active:scale-[0.98]">
                      <div className="p-10 flex flex-col h-full">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-8 shadow-lg shadow-orange-500/10 group-hover:scale-110 transition-transform duration-500`}>
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-none px-3">
                            {product.category}
                          </Badge>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
                            <Clock className="w-3.5 h-3.5" />
                            {new Date(product.launchDate).toLocaleDateString()}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                          {product.name}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed mb-8 text-lg line-clamp-2">
                          {product.tagline}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2 mb-4">
                          {product.techStack.map((tech) => (
                            <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2 py-1 rounded bg-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-orange-500 font-bold text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </GlowContainer>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Sparkles className="w-16 h-16 text-orange-500/20 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-muted-foreground">No tools found matching your search.</h3>
              <p className="text-muted-foreground mt-2">Try a different category or search term.</p>
              <Button 
                variant="link" 
                className="text-orange-500 mt-4"
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingChatbot />
    </div>
  );
}
