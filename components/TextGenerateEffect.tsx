import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className = "",
  delay = 0,
}: {
  words: string;
  className?: string;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-20%" });
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
        },
        {
          duration: 0.8,
          delay: stagger(0.12, { startDelay: delay }),
          ease: [0.2, 0.65, 0.3, 0.9],
        }
      );
    }
  }, [isInView, animate, delay]);

  return (
    <motion.span ref={scope} className={`inline-block ${className}`}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="inline-block opacity-0"
            style={{
              filter: "blur(10px)",
              y: 10,
              marginRight: idx === wordsArray.length - 1 ? 0 : "0.25em"
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
