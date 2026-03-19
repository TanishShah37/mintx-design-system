import React from "react";
import { useDotButton } from "../../hooks/useCarouselDots"; // We'll need this hook
import {
  usePrevNextButtons,
} from "../../hooks/useCarouselButtons"; // We'll need these hooks
import useEmblaCarousel, {
  type EmblaOptionsType,
} from "embla-carousel-react";
import { cn } from "../../tokens/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselProps {
  children: React.ReactNode;
  options?: EmblaOptionsType;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  options,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child) => (
            <div className="flex-[0_0_100%] min-w-0 pl-4">{child}</div>
          ))}
        </div>
      </div>

      <button
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-background z-10",
          prevBtnDisabled ? "hidden" : ""
        )}
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-background z-10",
          nextBtnDisabled ? "hidden" : ""
        )}
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              index === selectedIndex ? "w-6 bg-primary" : "w-1.5 bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.displayName = "Carousel";
