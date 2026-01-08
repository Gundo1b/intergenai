"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyScrollProps {
  content: Array<{
    title: string;
    description: string;
    content: React.ReactNode;
  }>;
}

export function StickyScroll({ content }: StickyScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["100vh", "2000vh"]);

  return (
    <motion.div
      ref={ref}
      style={{ height }}
      className="relative flex w-full flex-col overflow-hidden"
    >
      {content.map((item, i) => (
        <motion.div
          key={i}
          className="flex min-h-screen w-full items-center justify-center"
        >
          <div className="sticky top-0 flex h-screen w-full items-center justify-center">
            <div className="flex h-full w-full max-w-7xl items-center justify-between px-4">
              <div className="flex h-full flex-1 items-center justify-center">
                <div className="flex h-full max-w-md flex-col justify-center">
                  <h2 className="text-3xl font-bold md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="max-w-md text-gray-500 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="aspect-[2/1] w-full max-w-md flex-1">
                {item.content}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
