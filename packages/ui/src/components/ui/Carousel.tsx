import React, { useState } from "react";
import { useDotButton } from "../../hooks/useCarouselDots";
import { usePrevNextButtons } from "../../hooks/useCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", ...style }}
    >
      {/* Embla viewport — overflow:hidden is CRITICAL */}
      <div
        ref={emblaRef}
        style={{ overflow: "hidden", borderRadius: 12 }}
      >
        <div style={{ display: "flex" }}>
          {React.Children.map(children, (child) => (
            <div
              style={{
                flex: "0 0 100%",
                minWidth: 0,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Prev button */}
      {!prevBtnDisabled && (
        <button
          onClick={onPrevButtonClick}
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(14,22,20,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(232,239,237,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s",
            color: "#E8EFED",
          }}
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Next button */}
      {!nextBtnDisabled && (
        <button
          onClick={onNextButtonClick}
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(14,22,20,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(232,239,237,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s",
            color: "#E8EFED",
          }}
        >
          <ChevronRight size={18} />
        </button>
      )}

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
        {scrollSnaps.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            style={{
              width: index === selectedIndex ? 20 : 6,
              height: 6,
              borderRadius: 9999,
              background: index === selectedIndex ? "#00B38A" : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.25s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.displayName = "Carousel";
