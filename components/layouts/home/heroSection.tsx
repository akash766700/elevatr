"use client";

import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Lenis from "lenis";
import { HOME_SLIDES } from "@/assets/generic-data";
import CurtainSlide from "@/components/widgets/curtainSlide";

export interface HeroSectionProps {
  onSlideChange?: (activeIndex: number) => void;
}

export default function HeroSection({ onSlideChange }: HeroSectionProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentActiveIdx = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Initialize Lenis for smooth inertia (1:1 scroll feel)
    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    } catch (e) {
      console.warn("Lenis init:", e);
    }

    // 2. High-performance direct DOM update on scroll
    const updateSlideHeights = () => {
      const h = window.innerHeight;
      if (h <= 0) return;

      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const progress = scrollY / h;

      // Update each rising slide from bottom up
      for (let i = 1; i < HOME_SLIDES.length; i++) {
        const el = slideRefs.current[i];
        if (el) {
          const slideProgress = Math.min(1, Math.max(0, progress - (i - 1)));
          el.style.height = `${slideProgress * 100}%`;
          el.style.display = slideProgress <= 0 ? "none" : "block";
          el.style.boxShadow = "none";
        }
      }

      // Notify Navbar when crossing slide threshold
      const activeIdx = Math.min(
        HOME_SLIDES.length - 1,
        Math.max(0, Math.floor(progress + 0.4))
      );
      if (activeIdx !== currentActiveIdx.current) {
        currentActiveIdx.current = activeIdx;
        onSlideChange?.(activeIdx);
      }
    };

    window.addEventListener("scroll", updateSlideHeights, { passive: true });
    if (lenis) {
      lenis.on("scroll", updateSlideHeights);
    }

    // Run once on mount to align initial position
    updateSlideHeights();

    // 3. Arrow Up / Down keys for easy navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const h = window.innerHeight;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        const current = Math.floor(scrollY / h);
        const next = Math.min(HOME_SLIDES.length - 1, current + 1);
        if (lenis) {
          lenis.scrollTo(next * h, { duration: 1.0 });
        } else {
          window.scrollTo({ top: next * h, behavior: "smooth" });
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
        const current = Math.ceil(scrollY / h);
        const prev = Math.max(0, current - 1);
        if (lenis) {
          lenis.scrollTo(prev * h, { duration: 1.0 });
        } else {
          window.scrollTo({ top: prev * h, behavior: "smooth" });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", updateSlideHeights);
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [onSlideChange]);

  const handleScrollToNext = () => {
    if (typeof window === "undefined") return;
    const targetY = window.innerHeight;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetY, { duration: 1.1 });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: `${HOME_SLIDES.length * 100}vh`,
        position: "relative",
        bgcolor: "#000000",
      }}
    >
      {/* Fixed Fullscreen Viewport Layer */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {HOME_SLIDES.map((slide, idx) => (
          <CurtainSlide
            key={slide.id}
            ref={(el) => {
              slideRefs.current[idx] = el;
            }}
            slide={slide}
            index={idx}
            onScrollNext={handleScrollToNext}
          />
        ))}
      </Box>
    </Box>
  );
}
