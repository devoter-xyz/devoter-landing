"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: number;
  src: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export default function Carousel({
  items,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the main carousel div

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);


  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (items.length <= 1) return; // Disable keyboard nav if only one item

      if (event.key === "ArrowLeft") {
        event.preventDefault(); // Prevent page scroll
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault(); // Prevent page scroll
        goToNext();
      }
    };

    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      currentCarousel.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (currentCarousel) {
        currentCarousel.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [goToPrevious, goToNext, items.length]); // Dependencies for keyboard nav

  const [currentSlideDescription, setCurrentSlideDescription] = useState("");

  useEffect(() => {
    if (items.length > 0 && currentIndex >= 0 && currentIndex < items.length) {
      setCurrentSlideDescription(
        `Item ${currentIndex + 1} of ${items.length}, ${
          items[currentIndex].alt
        }`
      );
    } else {
      setCurrentSlideDescription("");
    }
  }, [currentIndex, items]);

  if (items.length === 0) return null;

  return (
    <div
      ref={carouselRef}
      className={`relative overflow-hidden rounded-xl ${className}`}
      role="group" // More appropriate for a component that contains other components
      aria-label="Image carousel"
      tabIndex={0} // Make the carousel container focusable
    >
      <span className="sr-only" aria-live="polite">
        {currentSlideDescription}
      </span>
      {/* Main carousel container */}
      <div className="relative aspect-[4/2.8]" role="region" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            id={`carousel-item-${currentIndex}`} // Add ID for aria-controls
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
            role="tabpanel" // Each image is a tab panel
            aria-labelledby={`carousel-tab-${currentIndex}`} // Link to the dot indicator (tab)
          >
            <Image
              src={items[currentIndex].src}
              alt={items[currentIndex].alt}
              fill
              className="object-contain border rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      {items.length > 1 && (
        <>
            <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border rounded-full p-2 hover:bg-background/90 transition-colors"
            aria-label="Previous image"
            tabIndex={0} // Ensure buttons are focusable
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border rounded-full p-2 hover:bg-background/90 transition-colors"
            aria-label="Next image"
            tabIndex={0} // Ensure buttons are focusable
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" role="tablist">
          {items.map((_, index) => (
            <button
              key={index}
              id={`carousel-tab-${index}`} // Add ID to link with tabpanel
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
              aria-controls={`carousel-item-${index}`}
              tabIndex={index === currentIndex ? 0 : -1} // Only active tab is focusable via Tab key
            />
          ))}
        </div>
      )}
    </div>
  );
}
