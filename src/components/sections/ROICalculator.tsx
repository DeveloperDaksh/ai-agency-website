"use client";

import * as React from "react";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GlowContainer } from "@/components/ui/glow-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";

export const ROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [avgSalary, setAvgSalary] = useState(60000);
  const [manualHoursPercent, setManualHoursPercent] = useState(30);
  const [automationRate, setAutomationRate] = useState(70);

  const results = useMemo(() => {
    const totalCompanyHoursYear = employees * 2080; // Standard work year
    const manualHoursYear = totalCompanyHoursYear * (manualHoursPercent / 100);
    const hoursSavedYear = manualHoursYear * (automationRate / 100);
    
    const hourlyRate = avgSalary / 2080;
    const dollarSavingsYear = hoursSavedYear * hourlyRate;
    
    return {
      hoursSaved: Math.round(hoursSavedYear),
      dollarSavings: Math.round(dollarSavingsYear),
      efficiencyGain: Math.round((hoursSavedYear / totalCompanyHoursYear) * 100)
    };
  }, [employees, avgSalary, manualHoursPercent, automationRate]);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-none px-4 py-1.5 uppercase font-bold tracking-widest text-[10px]">
              The Yield Factor
            </Badge>
            <h2 className="text-3xl sm:text-7xl font-bold mb-8 tracking-tight leading-[0.95]">
              Calculate Your <br />
              <span className="text-orange-500">AI ROI</span> in Seconds.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Stop guessing. See the exact impact of 'Stitched' automation on your bottom line.
            </p>
            
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">Number of Employees</span>
                  <span className="text-orange-500 font-bold">{employees}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="500" 
                  value={employees} 
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">Average Annual Salary ($)</span>
                  <span className="text-orange-500 font-bold">${avgSalary.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="30000" 
                  max="200000" 
                  step="5000"
                  value={avgSalary} 
                  onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">% of Time Spent on Manual Tasks</span>
                  <span className="text-orange-500 font-bold">{manualHoursPercent}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="80" 
                  value={manualHoursPercent} 
                  onChange={(e) => setManualHoursPercent(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <GlowContainer className="rounded-[4rem] p-8 sm:p-16 border border-white/5 bg-white/[0.02] flex flex-col justify-center gap-12 text-center overflow-hidden relative">
               <Calculator className="absolute top-0 right-0 w-64 h-64 text-orange-500/5 -translate-y-1/3 translate-x-1/3" />
               
               <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Est. Annual Savings</p>
                  <div className="text-5xl sm:text-8xl font-bold tracking-tighter text-orange-500">
                    ${results.dollarSavings.toLocaleString()}
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <div className="flex justify-center gap-2 text-muted-foreground mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Hours Reclaimed</span>
                    </div>
                    <div className="text-3xl font-bold">{results.hoursSaved.toLocaleString()}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-center gap-2 text-muted-foreground mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Efficiency GAIN</span>
                    </div>
                    <div className="text-3xl font-bold">{results.efficiencyGain}%</div>
                  </div>
               </div>

               <div className="pt-8 relative z-10">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-2xl h-16 text-xl font-bold shadow-2xl shadow-orange-500/30 group">
                    Unlock This Growth
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
                  </Button>
                  <p className="text-[10px] text-muted-foreground mt-4 uppercase font-bold tracking-widest leading-loose">
                    *Based on industry standards for AI automation yield rates. <br /> Results may vary by 'Stitch' complexity.
                  </p>
               </div>
            </GlowContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
