"use client";

import * as React from "react";
import { useState, useActionState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle2, FileText, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { GlowContainer } from "@/components/ui/glow-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeToNewsletter, MessageState } from "@/app/actions";

export const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const initialState: MessageState = { success: false };
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  useEffect(() => {
    if (state.success) {
      setIsSubmitted(true);
    }
  }, [state.success]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <GlowContainer className="rounded-[4rem] p-12 sm:p-24 bg-gradient-to-br from-orange-500/20 via-orange-500/5 to-transparent border border-orange-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] -z-10 animate-pulse" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Badge className="mb-6 bg-orange-500/20 text-orange-600 border-none px-4 py-1.5 uppercase font-bold tracking-widest text-[10px]">
                Free Resource
              </Badge>
              <h2 className="text-3xl sm:text-6xl font-bold mb-8 tracking-tight leading-[0.95]">
                Download The <br />
                <span className="text-orange-500">2026 AI Blueprint.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
                The exact framework we use to audit, stitch, and scale AI systems for global enterprises. 25+ pages of actionable strategy.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Risk Assessment Checklist",
                  "Model Selection Matrix (2026 Edition)",
                  "Custom Agent Prompting Frameworks",
                  "ROI Calculation Spreadsheet"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-10 rounded-[3rem] bg-background border border-white/5 shadow-2xl relative z-10"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8">
                      <FileText className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Get the Blueprint</h3>
                    <p className="text-muted-foreground mb-8">Where should we send your copy?</p>
                    
                    <form action={formAction} className="space-y-4">
                      <Input 
                        type="email" 
                        name="email"
                        placeholder="your@email.com" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isPending}
                        className="h-14 rounded-2xl bg-white/5 border-white/10 px-6 font-medium text-lg focus:border-orange-500/50 transition-all disabled:opacity-50"
                      />
                      {state.message && !state.success && (
                        <div className="flex items-center gap-2 text-red-500 text-sm font-medium ml-2">
                          <AlertCircle className="w-4 h-4" />
                          {state.message}
                        </div>
                      )}
                      <Button 
                        type="submit"
                        disabled={isPending}
                        className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 font-bold text-lg group"
                      >
                        {isPending ? "Sending..." : "Send Me The Link"}
                        {!isPending && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />}
                      </Button>
                    </form>
                    <p className="text-[10px] text-center text-muted-foreground mt-6 uppercase font-bold tracking-widest leading-loose">
                      No spam. Just technical AI insights twice a month.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 rounded-[3rem] bg-orange-500 text-white text-center shadow-2xl relative z-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-8 animate-bounce">
                      <Download className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Check Your Inbox!</h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-8">
                      We've sent the **2026 AI Integration Blueprint** to **{email}**.
                    </p>
                    <Button 
                      variant="secondary" 
                      onClick={() => {
                        setIsSubmitted(false);
                        setEmail("");
                      }}
                      className="rounded-xl h-12 px-8 font-bold text-orange-500 hover:bg-white transition-all"
                    >
                      Wait, send to another email instead
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative elements behind the box */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-orange-500/10 rounded-[3rem] -z-10 group-hover:rotate-3 transition-transform duration-700" />
              <Sparkles className="absolute -bottom-10 -left-10 w-24 h-24 text-orange-500/10 group-hover:animate-spin transition-all" />
            </div>
          </div>
        </GlowContainer>
      </div>
    </section>
  );
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${className}`}>
    {children}
  </span>
);
