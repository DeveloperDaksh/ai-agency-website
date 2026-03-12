"use client";

import * as React from "react";
import { Brain } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-background relative z-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AI Agency</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming businesses with AI and custom software solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-orange-500 transition-colors">AI Consultation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Automation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AI Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
