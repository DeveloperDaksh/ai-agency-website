"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4"
          >
            <Card className="w-80 p-0 overflow-hidden shadow-2xl border-orange-500/20 bg-background/80 backdrop-blur-xl">
              <div className="bg-orange-600 p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">AI Assistant</div>
                    <div className="text-[10px] opacity-80">Online & Ready to Help</div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 bg-background/50 h-64 flex flex-col justify-center text-center">
                <Sparkles className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <p className="text-sm text-balance text-muted-foreground leading-relaxed">
                  "Hi there! 👋 I'm your AI guide. Want to see how we can transform your business with intelligent automation?"
                </p>
                <Button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                  Ask me anything
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-2xl p-0 relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Brain className="w-6 h-6" />}
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-background" />
      </Button>
    </div>
  );
};
