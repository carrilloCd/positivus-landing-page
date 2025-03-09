import React, { useState, useEffect, useCallback, ReactNode } from "react";
import "./Carousel.scss";

interface CarouselProps {
  children: ReactNode[];
  showItems?: number;
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  renderFooter?: (arg0: {
    currentIndex: number;
    totalOriginalItems: number;
    goToSlide: (index: number) => void;
    goToPrev: () => void;
    goToNext: () => void;
    infiniteLoop: boolean;
    maxIndex: number;
  }) => React.ReactNode;
  overflowWidth?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  overflowWidth = 200,
  showItems = 3,
  infiniteLoop = true,
  autoPlay = false,
  interval = 3000,
  renderFooter = () => null,
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const originalItems = children;
  const totalOriginalItems = originalItems.length;

  // Generate a circular array that always has at least showItems elements
  const generateItems = () => {
    if (totalOriginalItems === 0) return [];

    // Create a circular array by repeating items as needed
    const items: ReactNode[] = [...originalItems];

    // Keep adding items until we have at least 2x showItems + buffer
    while (items.length < showItems * 3) {
      items.push(...originalItems);
    }

    return items;
  };

  const displayItems = generateItems();

  // Calculate total possible slides
  const maxIndex = infiniteLoop
    ? Math.max(totalOriginalItems - 1, 0)
    : Math.max(0, totalOriginalItems - showItems);

  // Ensure we don't go beyond the valid index range
  const safeIndex = (index: number) => {
    if (infiniteLoop) {
      // For infinite loop, wrap around but respect original items count
      if (index < 0) return totalOriginalItems - 1;
      if (index >= totalOriginalItems) return 0;
      return index;
    } else {
      // For finite carousel, clamp between 0 and max
      if (index < 0) return 0;
      if (index > maxIndex) return maxIndex;
      return index;
    }
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || totalOriginalItems === 0) return;
      setIsTransitioning(true);
      setCurrentIndex(safeIndex(index));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this duration with CSS transition
    },
    [isTransitioning, totalOriginalItems]
  );

  const goToNext = () => goToSlide(currentIndex + 1);
  const goToPrev = () => goToSlide(currentIndex - 1);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlay && !isTransitioning && totalOriginalItems > 1) {
      timer = setTimeout(goToNext, interval);
    }
    return () => clearTimeout(timer);
  }, [
    currentIndex,
    autoPlay,
    interval,
    isTransitioning,
    totalOriginalItems,
    goToNext,
  ]);

  // Calculate the translation percentage based on current index
  // We use modulo to handle infinite scrolling properly
  const translateValue = `-${(currentIndex % totalOriginalItems) * (100 / showItems)
    }%`;

  // If no items, don't render the carousel
  if (totalOriginalItems === 0) {
    return null;
  }

  const getExtraTranslate = () => {
    if (currentIndex === 0) {
      return -overflowWidth;
    } else if (currentIndex === originalItems.length - 1) {
      return overflowWidth;
    }
    return 0;
  };

  return (
    <div className="carousel">
      <div className="carousel__wrapper" style={{
        width: `calc(100% + ${overflowWidth}px * 2)`,
        left: `-${overflowWidth}px`,
      }}>
        <div className="carousel__content">
          <div
            className="carousel__track"
            style={{
              transform: `translateX(calc(${translateValue} - ${getExtraTranslate()}px))`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
              gridTemplateColumns: `repeat(${displayItems.length}, calc(${100 / showItems
                }%))`,
            }}
          >
            {displayItems.map((child, index) => (
              <div
                key={`carousel-item-${index}`}
                className={`carousel__item`}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {renderFooter({
          currentIndex,
          totalOriginalItems,
          goToSlide,
          goToPrev,
          goToNext,
          infiniteLoop,
          maxIndex,
        })}
      </div>
    </div>
  );
};