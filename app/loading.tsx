import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="relative">
        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-brand-start/20 blur-xl animate-pulse" />
        
        {/* Main Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-full w-full rounded-full border-4 border-muted/30" />
          <div className="absolute h-full w-full rounded-full border-t-4 border-brand-end animate-spin" style={{ 
            borderImageSource: 'linear-gradient(to right, #59f6e3, #185cf8)',
            borderImageSlice: 1
          }} />
          
          {/* Inner Logo or Dot */}
          <div className="h-2 w-2 rounded-full bg-brand-end animate-pulse shadow-[0_0_10px_#185cf8]" />
        </div>
        
        {/* Text */}
        <div className="mt-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
            Menyiapkan BisnisRapi
          </span>
        </div>
      </div>
    </div>
  );
}
