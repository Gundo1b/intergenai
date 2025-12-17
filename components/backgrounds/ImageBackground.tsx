import React from 'react';
import { motion } from 'framer-motion';

interface ImageBackgroundProps {
  className?: string;
}

export const ImageBackground: React.FC<ImageBackgroundProps> = ({ className = '' }) => {
  const colorPalettes = [
    ['#FF6B6B', '#4ECDC4', '#45B7D1'],
    ['#96CEB4', '#FECA57', '#FF9FF3'],
    ['#54A0FF', '#5F27CD', '#00D2D3'],
    ['#FF9F43', '#6C5CE7', '#A29BFE'],
    ['#FD79A8', '#FDCB6E', '#6C5CE7'],
    ['#E17055', '#00B894', '#0984E3']
  ];

  const brushStrokes = [
    'M 0,0 Q 25,25 50,0 T 100,0',
    'M 0,20 Q 20,0 40,20 T 80,20',
    'M 0,40 Q 30,20 60,40 T 120,40',
    'M 0,10 Q 15,25 30,10 T 60,10'
  ];

  const artTools = ['🎨', '🖌️', '🖼️', '🎭', '🌈', '✨', '🎯', '🎪'];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Animated Color Swatches */}
      {colorPalettes.map((palette, index) => (
        <motion.div
          key={index}
          className="absolute"
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
            rotate: [0, 180, 360],
            scale: [0.5, 1, 0.5],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          <div className="flex gap-1">
            {palette.map((color, colorIndex) => (
              <motion.div
                key={colorIndex}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: colorIndex * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* Floating Art Tools */}
      {artTools.map((tool, index) => (
        <motion.div
          key={`tool-${index}`}
          className="absolute text-2xl select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: 0.5
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: [0, 15, -15, 0],
            scale: [0.5, 1.5, 0.5],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          {tool}
        </motion.div>
      ))}

      {/* SVG Brush Strokes */}
      {brushStrokes.map((path, index) => (
        <motion.svg
          key={`stroke-${index}`}
          className="absolute"
          width="120"
          height="60"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        >
          <path
            d={path}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-purple-200/30 dark:text-purple-800/30"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}

      {/* Paint Splatters */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={`splatter-${index}`}
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
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 18 + Math.random() * 7,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="w-4 h-4 bg-pink-400/30 dark:bg-pink-600/30 rounded-full" />
            {[...Array(3)].map((_, dotIndex) => (
              <motion.div
                key={dotIndex}
                className="absolute w-1.5 h-1.5 bg-pink-400/40 dark:bg-pink-600/40 rounded-full"
                style={{
                  left: `${20 + dotIndex * 8}px`,
                  top: `${Math.random() * 20 - 10}px`
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: dotIndex * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute rounded-full blur-xl"
          style={{
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`,
            background: `linear-gradient(45deg, ${
              colorPalettes[index % colorPalettes.length][0]
            }20, ${colorPalettes[index % colorPalettes.length][1]}20)`
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Canvas Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1 }}>
        <defs>
          <pattern
            id="canvasTexture"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-slate-300 dark:text-slate-600" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#canvasTexture)" />
      </svg>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-slate-900/40" />
    </div>
  );
};