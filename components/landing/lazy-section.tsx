"use client";

import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { LoadingSection } from "@/components/ui/loading-section";

interface LazySectionProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
  offset?: string;
  type?: "default" | "hero" | "grid" | "list";
}

export function LazySection({ 
  children, 
  height = "400px", 
  className = "",
  offset = "200px",
  type = "default"
}: LazySectionProps) {
  const [hasRendered, setHasRendered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `0px 0px ${offset} 0px`,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setHasRendered(true);
    }
  }, [inView]);

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ minHeight: !hasRendered ? height : "auto" }}
    >
      <AnimatePresence mode="wait">
        {hasRendered ? (
          <m.div
            key="content"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.4 },
              filter: { duration: 0.8 }
            }}
          >
            {children}
          </m.div>
        ) : (
          <m.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LoadingSection height={height} type={type} />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
