"use client";

import { m } from "framer-motion";

interface LoadingSectionProps {
  height?: string;
  type?: "default" | "hero" | "grid" | "list";
}

export function LoadingSection({ height = "400px", type = "default" }: LoadingSectionProps) {
  const renderSkeleton = () => {
    switch (type) {
      case "hero":
        return (
          <div className="space-y-6">
            <div className="h-10 w-24 bg-muted/20 rounded-full" />
            <div className="h-16 w-3/4 bg-muted/20 rounded-2xl" />
            <div className="h-16 w-2/3 bg-muted/20 rounded-2xl" />
            <div className="h-6 w-1/2 bg-muted/20 rounded-xl" />
            <div className="flex gap-4 pt-4">
              <div className="h-14 w-40 bg-muted/20 rounded-full" />
              <div className="h-14 w-40 bg-muted/20 rounded-full" />
            </div>
          </div>
        );
      case "grid":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-64 bg-muted/20 rounded-[2rem]" />
                <div className="h-6 w-3/4 bg-muted/20 rounded-lg" />
                <div className="h-4 w-full bg-muted/20 rounded-lg" />
              </div>
            ))}
          </div>
        );
      case "list":
        return (
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-muted/20 flex-shrink-0" />
                <div className="space-y-3 flex-grow pt-2">
                  <div className="h-6 w-1/3 bg-muted/20 rounded-lg" />
                  <div className="h-4 w-2/3 bg-muted/20 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-4 w-32 bg-muted/20 rounded-full" />
              <div className="h-12 w-2/3 bg-muted/20 rounded-2xl" />
              <div className="h-6 w-1/2 bg-muted/20 rounded-xl" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-64 bg-muted/20 rounded-3xl" />
              <div className="h-64 bg-muted/20 rounded-3xl" />
              <div className="h-64 bg-muted/20 rounded-3xl" />
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className="w-full flex items-center justify-center relative overflow-hidden bg-background" 
      style={{ height }}
    >
      <div className="absolute inset-0 bg-muted/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {renderSkeleton()}
      </div>
      
      {/* Premium Shimmer effect */}
      <m.div 
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5, 
          ease: "linear" 
        }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)"
        }}
      />
    </div>
  );
}
