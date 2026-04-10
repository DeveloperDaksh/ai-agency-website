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
              <span className="text-xl font-bold">Saraswati Stitch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming businesses with ROI-driven AI and custom software solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services/ai-strategy-consulting" className="hover:text-orange-500 transition-colors">AI Strategy</a></li>
              <li><a href="/services/custom-ai-development" className="hover:text-orange-500 transition-colors">Custom AI Development</a></li>
              <li><a href="/services/workflow-automation" className="hover:text-orange-500 transition-colors">Workflow Automation</a></li>
              <li><a href="/services/rapid-deployment" className="hover:text-orange-500 transition-colors">Rapid Deployment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="/case-studies" className="hover:text-orange-500 transition-colors">Case Studies</a></li>
              <li><a href="/blog" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="/careers" className="hover:text-orange-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="hover:text-orange-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Saraswati Stitch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
