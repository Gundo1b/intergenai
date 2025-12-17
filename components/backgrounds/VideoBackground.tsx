import React from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  className?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ className = '' }) => {
  const videoIcons = ['▶️', '🎬', '🎥', '📹', '🎞️', '📽️', '🎭', '🎪'];
  
  const filmStrips = [
    '████████████',
    '█████████',
    '███████████',
    '███████',
    '█████████████'
  ];

  const timelineElements = [
    '●───────────',
    '──●──────────',
    '────●─────────',
    '──────●───────',
    '─────────●───',
    '───────────●'
  ];

  const playbackControls = ['⏸️', '⏹️', '⏯️', '🔊', '🔇', '⏪', '⏩'];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Floating Video Icons */}
      {videoIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: 0.5,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: [0, 360],
            scale: [0.5, 1.2, 0.5],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Animated Film Strips */}
      {filmStrips.map((strip, index) => (
        <motion.div
          key={`strip-${index}`}
          className="absolute font-mono text-xs text-orange-200/40 dark:text-orange-800/40 whitespace-nowrap select-none"
          initial={{
            x: -100,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: window.innerWidth + 100,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {strip}
        </motion.div>
      ))}

      {/* Timeline Elements */}
      {timelineElements.map((element, index) => (
        <motion.div
          key={`timeline-${index}`}
          className="absolute text-sm font-mono text-red-200/30 dark:text-red-800/30 select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        >
          {element}
        </motion.div>
      ))}

      {/* Playback Controls */}
      {playbackControls.map((control, index) => (
        <motion.div
          key={`control-${index}`}
          className="absolute text-xl select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0.5,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0.5, 1.5, 0.5],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          {control}
        </motion.div>
      ))}

      {/* Video Frame Borders */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`frame-${index}`}
          className="absolute border-2 border-dashed border-yellow-200/20 dark:border-yellow-800/20"
          style={{
            width: `${100 + Math.random() * 150}px`,
            height: `${60 + Math.random() * 100}px`
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: [0, 5, -5, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
        >
          <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-400/30 dark:bg-yellow-600/30 rounded-full" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400/30 dark:bg-yellow-600/30 rounded-full" />
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-yellow-400/30 dark:bg-yellow-600/30 rounded-full" />
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-400/30 dark:bg-yellow-600/30 rounded-full" />
        </motion.div>
      ))}

      {/* Scanning Lines */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`scan-${index}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent"
          initial={{
            y: -10,
            opacity: 0
          }}
          animate={{
            y: window.innerHeight + 10,
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear"
          }}
        />
      ))}

      {/* Video Quality Indicators */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`quality-${index}`}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, barIndex) => (
              <motion.div
                key={barIndex}
                className="w-1 bg-red-400/30 dark:bg-red-600/30"
                style={{ height: `${Math.random() * 16 + 4}px` }}
                animate={{
                  height: `${Math.random() * 16 + 4}px`,
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: barIndex * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* Cinematic Light Rays */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`ray-${index}`}
          className="absolute origin-bottom-left"
          style={{
            width: '2px',
            height: '200px',
            background: `linear-gradient(to top, transparent, ${
              ['#FF6B6B', '#4ECDC4', '#45B7D1'][index]
            }20, transparent)`
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            rotate: -30 + Math.random() * 60,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            rotate: -30 + Math.random() * 60,
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-slate-900/50" />
    </div>
  );
};