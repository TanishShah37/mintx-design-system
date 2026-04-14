"use client";

import React, { useState } from "react";
import { useDotButton } from "../../hooks/useCarouselDots";
import { usePrevNextButtons } from "../../hooks/useCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../tokens/cn";

export interface CarouselProps {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  className?: string;
  style?: React.CSSProperties;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  options,
  className,
  style,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options });
  const [hovered, setHovered] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div
      className={cn("relative group w-full", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-xl"
      >
        <div className="flex">
          {React.Children.map(children, (child) => (
            <div className="flex-[0_0_100%] min-w-0 px-2">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
          "bg-neutral-900/80 backdrop-blur-md border border-white/10 text-primary",
          "hover:bg-neutral-800 hover:border-mint-500/50",
          "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
          prevBtnDisabled && "opacity-0 invisible"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
          "bg-neutral-900/80 backdrop-blur-md border border-white/10 text-primary",
          "hover:bg-neutral-800 hover:border-mint-500/50",
          "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
          nextBtnDisabled && "opacity-0 invisible"
        )}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === selectedIndex 
                ? "w-5 bg-mint-500 shadow-brand" 
                : "w-1.5 bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.displayName = "Carousel";
