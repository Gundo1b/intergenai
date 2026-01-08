
"use client";
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, PanInfo } from 'framer-motion';
import { Link } from 'react-router-dom';

export type Card = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

export const StackedCards = ({ items, offset: initialOffset = 0, scaleFactor: initialScaleFactor = 0.05 }: { items: Card[], offset?: number, scaleFactor?: number }) => {
    const [active, setActive] = useState(initialOffset);
    const scaleFactor = initialScaleFactor;

    const moveRight = () => {
        setActive((prev) => (prev + 1) % items.length);
    };

    const moveLeft = () => {
        setActive((prev) => (prev - 1 + items.length) % items.length);
    };
    
    const CardComponent = ({ card, index }: { card: Card; index: number; }) => {
        const x = useMotionValue(0);
        const rotate = useMotionValue(0);
        const springConfig = { stiffness: 400, damping: 40 };
        const xSpring = useSpring(x, springConfig);
        const rotateSpring = useSpring(rotate, springConfig);

        const onDragEnd = (e: any, info: PanInfo) => {
            if (info.offset.x > 150) {
                moveLeft();
            } else if (info.offset.x < -150) {
                moveRight();
            }
            x.set(0);
            rotate.set(0);
        };

        const onDrag = (e: any, info: PanInfo) => {
            rotate.set(info.offset.x / 10);
        }

        const effectiveIndex = (index - active) % items.length;
        const visibleIndex = effectiveIndex < 0 ? effectiveIndex + items.length : effectiveIndex;
        const isFront = visibleIndex === 0;

        return (
            <motion.div
                key={card.id}
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl backdrop-blur-lg bg-white/20 dark:bg-slate-900/30 p-6 flex flex-col justify-between"
                style={{
                    zIndex: items.length - visibleIndex,
                    scale: 1 - visibleIndex * scaleFactor,
                    y: visibleIndex * 20,
                    x: isFront ? xSpring : 0,
                    rotate: isFront ? rotateSpring : (visibleIndex % 2 === 0 ? -2 : 2) * visibleIndex,
                    pointerEvents: isFront ? "auto" : "none",
                }}
                initial={false}
                animate={{
                    scale: 1 - visibleIndex * scaleFactor,
                    y: visibleIndex * 20,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                drag={isFront ? "x" : false}
                onDragEnd={onDragEnd}
                onDrag={onDrag}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            >
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        {card.icon}
                        <h3 className="text-xl font-bold bg-gradient-to-r from-[#64E1FF] to-[#009DFF] bg-clip-text text-transparent">
                            {card.title}
                        </h3>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                        {card.description}
                    </p>
                </div>
                 <Link to={card.href} className="mt-4 text-sm font-medium text-sky-500 hover:text-sky-400 transition-colors">
                    Learn More →
                </Link>
            </motion.div>
        );
    }

    return (
        <div className="relative w-full max-w-lg h-[400px]">
            {items.map((card, index) => (
                <CardComponent
                    key={card.id}
                    card={card}
                    index={index}
                />
            ))}
            <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-4">
                <button onClick={moveLeft} className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-slate-700 dark:text-white font-semibold">
                    ← Prev
                </button>
                <button onClick={moveRight} className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-slate-700 dark:text-white font-semibold">
                    Next →
                </button>
            </div>
        </div>
    )
}
