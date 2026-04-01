"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, X, Send, ArrowLeft, Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi there! 👋 I'm your AI guide. How can I help you today?",
      timestamp: new Date(),
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const chatHistory = [...messages, userMessage].slice(-10); // Keep last 10 messages for context

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatHistory }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: data.content,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
            <Card className="w-80 p-0 overflow-hidden shadow-2xl border-orange-500/20 bg-background/90 backdrop-blur-2xl flex flex-col h-[450px]">
              {/* Header */}
              <div className="bg-orange-600 p-4 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  {showChat && (
                    <button 
                      onClick={() => setShowChat(false)}
                      className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  )}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shadow-inner">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-tight">AI Assistant</div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[10px] opacity-80 font-medium">Online</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="hover:rotate-90 transition-transform p-1 hover:bg-white/20 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col relative overflow-hidden bg-dot-pattern">
                <AnimatePresence mode="wait">
                  {!showChat ? (
                    /* Initial Welcome View */
                    <motion.div
                      key="welcome"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 animate-pulse rounded-full" />
                        <Sparkles className="w-12 h-12 text-orange-500 relative" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">How can we help?</h3>
                        <p className="text-sm text-balance text-muted-foreground leading-relaxed">
                          "Hi there! 👋 I'm your AI guide. Want to see how we can transform your business with intelligent automation?"
                        </p>
                      </div>
                      <Button 
                        onClick={() => setShowChat(true)}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-6 font-semibold shadow-lg shadow-orange-500/20 transform hover:scale-[1.02] active:scale-95 transition-all"
                      >
                        Ask me anything
                      </Button>
                    </motion.div>
                  ) : (
                    /* Chat Interface View */
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col h-full overflow-hidden"
                    >
                      {/* Messages Area */}
                      <div 
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth scrollbar-none"
                      >
                        {messages.map((msg, index) => (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className={cn(
                              "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                              msg.role === "user" 
                                ? "bg-orange-600 text-white self-end rounded-tr-none ml-auto" 
                                : "bg-muted text-foreground self-start rounded-tl-none mr-auto border border-border/50"
                            )}
                          >
                            {msg.role === "assistant" ? (
                              <ReactMarkdown
                                components={{
                                  p: ({ children }: { children?: React.ReactNode }) => <p className="mb-2 last:mb-0">{children}</p>,
                                  ul: ({ children }: { children?: React.ReactNode }) => <ul className="list-disc ml-4 space-y-1 mb-2">{children}</ul>,
                                  ol: ({ children }: { children?: React.ReactNode }) => <ol className="list-decimal ml-4 space-y-1 mb-2">{children}</ol>,
                                  li: ({ children }: { children?: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
                                  strong: ({ children }: { children?: React.ReactNode }) => <strong className="text-orange-500 font-bold">{children}</strong>,
                                }}
                              >
                                {msg.content}
                              </ReactMarkdown>
                            ) : (
                              msg.content
                            )}
                          </motion.div>
                        ))}
                        {isTyping && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-muted text-foreground p-3 rounded-2xl rounded-tl-none w-fit border border-border/50 shadow-sm"
                          >
                            <div className="flex gap-1.5 h-4 items-center">
                              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full animate-bounce" />
                              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                              <span className="w-1.5 h-1.5 bg-orange-500/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {/* Input Footer */}
                      <div className="p-4 bg-background/50 border-t border-orange-500/10 backdrop-blur-md">
                        <div className="relative group">
                          <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type your message..."
                            className="pr-12 rounded-xl bg-muted/50 border-orange-500/10 focus-visible:ring-orange-500/20 py-6"
                          />
                          <Button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || isTyping}
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-lg bg-orange-600 hover:bg-orange-700 text-white shadow-md disabled:opacity-50 transition-all"
                          >
                            {isTyping ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Send className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-2xl p-0 relative group transition-transform hover:scale-110 active:scale-95",
          isOpen && "rotate-0"
        )}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="brain"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Brain className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-background shadow-lg" />
        )}
      </Button>
    </div>
  );
};
