"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "They didn't just automate our workflows — they reimagined them. We've saved 20+ hours per week and our team finally focuses on high-value work.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Mitchell",
    role: "Founder, DesignCo",
  },
  {
    text: "The integration was seamless. Their team understood our needs from day one and delivered a system that exceeded every expectation we had.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Michael Chen",
    role: "CEO, TechStart",
  },
  {
    text: "Best investment we've made this year. Our AI chatbot handles 70% of support tickets automatically — and customers love it even more than human agents.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Emma Rodriguez",
    role: "Operations Director",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className} style={{ perspective: "1000px" }}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <motion.li 
                key={`${index}-${i}`}
                whileHover={{ 
                  scale: 1.05,
                  y: -12,
                  rotateY: 8,
                  z: 50,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="p-8 rounded-3xl border border-white/5 dark:border-white/5 shadow-lg max-w-xs w-full bg-card/50 backdrop-blur-md cursor-default select-none" 
              >
                <blockquote className="m-0 p-0">
                  <p className="text-muted-foreground leading-relaxed font-normal m-0" style={{ transform: "translateZ(20px)" }}>
                    &ldquo;{text}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3 mt-6" style={{ transform: "translateZ(30px)" }}>
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={`Avatar of ${name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-orange-500/20"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-foreground">
                        {name}
                      </cite>
                      <span className="text-sm leading-5 tracking-tight text-muted-foreground mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))]}
      </motion.ul>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-6 bg-orange-500/10 text-orange-600 border-orange-500/20 px-4 py-1.5">
              Social Proof
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 tracking-tight">
              Trusted by Teams That <span className="text-orange-500">Demand Results</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Join dozens of forward-thinking companies that have transformed their operations with our AI solutions.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">50+</span>
                <span className="text-sm text-muted-foreground text-balance max-w-[120px]">Businesses Transformed</span>
              </div>
              <div className="w-px h-14 bg-border hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold">98%</span>
                <span className="text-sm text-muted-foreground text-balance max-w-[120px]">Client Satisfaction</span>
              </div>
              <div className="w-px h-14 bg-border hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold">4.9★</span>
                <span className="text-sm text-muted-foreground text-balance max-w-[120px]">Average Rating</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6 overflow-hidden h-[600px] relative mt-12 lg:mt-0">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
            
            <TestimonialsColumn testimonials={testimonials} duration={25} />
            <TestimonialsColumn 
              testimonials={[...testimonials].reverse()} 
              className="hidden sm:block" 
              duration={35} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
