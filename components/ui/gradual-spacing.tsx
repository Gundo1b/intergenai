"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const lines = text.split("\n");

  return (
    <div className="flex flex-col items-center lg:items-start">
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex flex-wrap justify-center lg:justify-start"
        >
          {line.split(" ").map((word, wordIndex, wordArray) => {
            let charIndex = 0;
            return (
              <div key={wordIndex} className="flex">
                {word.split("").map((char, charInWordIndex) => {
                  charIndex++;
                  return (
                    <motion.span
                      key={charInWordIndex}
                      initial="hidden"
                      animate="visible"
                      variants={framerProps}
                      transition={{
                        duration,
                        delay:
                          (line.slice(0, wordIndex).replace(/ /g, "").length +
                            charIndex) *
                          delayMultiple,
                      }}
                      className={cn(className)}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {wordIndex < wordArray.length - 1 ? (
                  <motion.span
                    initial="hidden"
                    animate="visible"
                    variants={framerProps}
                    transition={{
                      duration,
                      delay:
                        (line.slice(0, wordIndex).replace(/ /g, "").length +
                          charIndex) *
                        delayMultiple,
                    }}
                    className={cn(className)}
                  >
                    &nbsp;
                  </motion.span>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
