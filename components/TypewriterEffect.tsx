import { cn } from "@/lib/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  textClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  textClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        "div",
        {
          width: "fit-content",
        },
        {
          duration: 2,
          ease: "linear",
          delay: 1,
        }
      );
    }
  }, [isInView, animate]);

  return (
    <div className={cn("flex my-2", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className={cn(
            "text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-[1.1] lg:leading-[1.2] tracking-tight whitespace-nowrap break-words",
            textClassName
          )}
        >
          {words.map((word, idx) => {
            return (
              <span
                key={`word-${idx}`}
                className={cn("inline-block", word.className)}
              >
                {word.text}&nbsp;
              </span>
            );
          })}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-8 sm:h-10 lg:h-14 xl:h-16 bg-brand-end",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
