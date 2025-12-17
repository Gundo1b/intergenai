"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  title: string;
  description: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

export const StackedCards = ({
  items,
  className,
}: {
  items: Card[];
  className?: string;
}) => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const moveRight = useCallback(() => {
    setOffset((pv) => pv + 1);
  }, []);

  const moveLeft = useCallback(() => {
    setOffset((pv) => pv - 1);
  }, []);

  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let timeout3: NodeJS.Timeout;

    if (isInView) {
      // Auto-advance one card after a delay to show interaction.
      // This sequence demonstrates a few swipes.
      timeout1 = setTimeout(() => {
        moveRight();
      }, 1000); // Swipe right after 1 second

      timeout2 = setTimeout(() => {
        moveRight();
      }, 2500); // Swipe right again after another 1.5 seconds

      timeout3 = setTimeout(() => {
        moveLeft(); // Swipe left to show reverse
      }, 4000); // Swipe left after another 1.5 seconds
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [isInView, moveRight, moveLeft]); // Dependencies for useEffect

  return (
    <div
      ref={containerRef}
      className={cn("relative flex items-center justify-center w-full h-[25rem] md:h-[30rem] lg:h-[35rem] overflow-hidden", className)}
    // On hover, we can pause auto-play if we implement it.
    // For "Show example", let's use a subtle entrance animation or similar.
    >
      <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4]">
        {items.map((item, index) => {
          return (
            <Card
              key={item.id}
              card={item}
              index={index}
              offset={offset}
              moveRight={moveRight}
              moveLeft={moveLeft}
              total={items.length}
            />
          )
        })}
      </div>

      {/* Navigation Buttons for accessibility/desktop backup */}
      <div className="absolute bottom-4 flex gap-4">
        <button onClick={moveLeft} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-slate-700 dark:text-white">
          ←
        </button>
        <button onClick={moveRight} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-slate-700 dark:text-white">
          →
        </button>
      </div>
    </div>
  )
}

const Card = ({ card, index, offset, moveRight, moveLeft, total }: {
  card: Card;
  index: number;
  offset: number;
  moveRight: () => void;
  moveLeft: () => void;
  total: number;
}) => {
  // Calculate the effective index for infinite loop
  // This determines the card's position in the stack
  const effectiveIndex = (index - offset) % total;
  const visibleIndex = effectiveIndex < 0 ? effectiveIndex + total : effectiveIndex;

  // Determine if this card is the "front" card
  const isFront = visibleIndex === 0;

  // Drag state for the front card
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const onDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) {
      moveRight(); // Swipe Left -> Next card
    } else if (info.offset.x > 100) {
      moveLeft(); // Swipe Right -> Previous card
    }
    // Reset x to 0 after drag ends
    animate(x, 0, { type: "spring", stiffness: 200, damping: 20 });
  };

  return (
    <motion.div
      key={card.id}
      className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl backdrop-blur-md bg-white/40 dark:bg-slate-900/40"
      style={{
        zIndex: total - visibleIndex, // Higher zIndex for cards closer to the front
        scale: 1 - visibleIndex * 0.05, // Scale down cards further back
        y: visibleIndex * 20,           // Stack cards vertically
        x: isFront ? x : 0,             // Only front card is draggable
        rotate: isFront ? rotate : (visibleIndex % 2 === 0 ? 2 : -2) * visibleIndex, // Subtle rotation for stacked cards
        opacity: isFront ? opacity : 1 - visibleIndex * 0.2, // Fade out back cards
        pointerEvents: isFront ? "auto" : "none", // Only front card is interactive
      }}
      initial={false}
      animate={{
        scale: 1 - visibleIndex * 0.05,
        y: visibleIndex * 20,
        x: 0, // Reset x for non-front cards
        rotate: (visibleIndex % 2 === 0 ? 2 : -2) * visibleIndex,
        opacity: 1 - visibleIndex * 0.2,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={isFront ? onDragEnd : undefined}
    >
      {/* Card Content */}
      <div className="relative w-full h-full flex flex-col justify-end p-6 z-20">
        {/* Visual/Image Area - Absolute background for full coverage or fixed top section */}
        <div className="absolute inset-0 z-0">
          {card.content}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            {card.icon}
            <span className="text-xs font-bold uppercase tracking-wider text-brand-end/80 dark:text-brand-start">Use Case {index + 1}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-slate-200 line-clamp-3">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
