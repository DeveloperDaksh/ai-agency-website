"use client";

import * as React from "react";
import { useState, useActionState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";
import { submitContact, ContactState } from "@/app/actions";

export const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const initialState: ContactState = { success: false };
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  useEffect(() => {
    if (state.success) {
      setIsSuccess(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f97316", "#ffffff"]
      });
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.success]);

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <Badge className="mb-8 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5 text-sm">
              Let&apos;s Talk
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">
              Ready to <span className="text-orange-500">10× Your Operations?</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-14 leading-relaxed">
              Book a free strategy call. We&apos;ll audit your workflows, identify the biggest automation wins, and show you exactly what&apos;s possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-5 rounded-3xl hover:bg-muted/50 transition-colors group">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <Mail className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Email</p>
                  <p className="text-xl font-semibold">hello@saraswatistitch.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-5 rounded-3xl hover:bg-muted/50 transition-colors group">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <Phone className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Phone</p>
                  <p className="text-xl font-semibold">Available via Email/Form</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-5 rounded-3xl hover:bg-muted/50 transition-colors group">
                <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  <MapPin className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Location</p>
                  <p className="text-xl font-semibold">Remote - Global Delivery</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 sm:p-10 shadow-2xl border-white/5 dark:border-white/5 bg-background/50 backdrop-blur-xl relative overflow-hidden rounded-[2.5rem]">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">You&apos;re on the List!</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We&apos;ll reach out within 24 hours to schedule your free strategy session.
                  </p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-full px-8">
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form action={formAction} className="space-y-6">
                  {state.message && !state.success && (
                    <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-4 rounded-xl text-sm font-medium">
                      <AlertCircle className="w-4 h-4" />
                      {state.message}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2 relative">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required className={`bg-muted/50 border-none h-12 rounded-xl focus-visible:ring-orange-500 ${state.errors?.firstName ? 'ring-2 ring-destructive bg-destructive/5' : ''}`} />
                      {state.errors?.firstName && <span className="text-xs text-destructive absolute -bottom-5 left-0">{state.errors.firstName[0]}</span>}
                    </div>
                    <div className="space-y-2 relative">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required className={`bg-muted/50 border-none h-12 rounded-xl focus-visible:ring-orange-500 ${state.errors?.lastName ? 'ring-2 ring-destructive bg-destructive/5' : ''}`} />
                      {state.errors?.lastName && <span className="text-xs text-destructive absolute -bottom-5 left-0">{state.errors.lastName[0]}</span>}
                    </div>
                  </div>
                  <div className="space-y-2 relative pt-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required className={`bg-muted/50 border-none h-12 rounded-xl focus-visible:ring-orange-500 ${state.errors?.email ? 'ring-2 ring-destructive bg-destructive/5' : ''}`} />
                    {state.errors?.email && <span className="text-xs text-destructive absolute -bottom-5 left-0">{state.errors.email[0]}</span>}
                  </div>
                  <div className="space-y-2 relative pt-2">
                    <Label htmlFor="message">What challenge can we help you solve?</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your biggest operational bottleneck..." required className={`bg-muted/50 border-none min-h-[150px] rounded-2xl focus-visible:ring-orange-500 resize-none ${state.errors?.message ? 'ring-2 ring-destructive bg-destructive/5' : ''}`} />
                    {state.errors?.message && <span className="text-xs text-destructive absolute -bottom-5 left-0">{state.errors.message[0]}</span>}
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 bg-orange-500/5 rounded-2xl border border-orange-500/10 mt-6">
                    <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-xs text-muted-foreground font-medium">256-bit encrypted. Your data is private and never shared with third parties.</span>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white h-14 rounded-full text-lg font-bold transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98]"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Book Your Free Call
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

