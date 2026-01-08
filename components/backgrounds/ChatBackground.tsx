import React from 'react';
import { motion } from 'framer-motion';

interface ChatBackgroundProps {
  className?: string;
}

export const ChatBackground: React.FC<ChatBackgroundProps> = ({ className = '' }) => {
  const chatBubbles = [
    "Hello! How can I help?",
    "That's interesting...",
    "Let me think about that",
    "Here's what I suggest:",
    "I understand completely",
    "Great question!",
    "Let me explain...",
    "That makes sense",
    "How can I assist?",
    "I'm here to help"
  ];

  const messageIcons = ['💬', '🤖', '👤', '💡', '✨', '🔮', '🌟', '💭'];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Animated Chat Bubbles */}
      {chatBubbles.map((message, index) => (
        <motion.div
          key={index}
          className="absolute max-w-xs p-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-sm text-sm text-slate-600 dark:text-slate-300"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.7, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
            <span className="leading-relaxed">{message}</span>
          </div>
        </motion.div>
      ))}

      {/* Floating Message Icons */}
      {messageIcons.map((icon, index) => (
        <motion.div
          key={`icon-${index}`}
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
            rotate: [0, 10, -10, 0],
            scale: [0.5, 1.2, 0.5],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Connection Lines */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`connection-${index}`}
          className="absolute"
          initial={{
            x1: Math.random() * window.innerWidth,
            y1: Math.random() * window.innerHeight,
            x2: Math.random() * window.innerWidth,
            y2: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x1: Math.random() * window.innerWidth,
            y1: Math.random() * window.innerHeight,
            x2: Math.random() * window.innerWidth,
            y2: Math.random() * window.innerHeight,
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          <svg className="w-full h-full">
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-200/30 dark:text-blue-800/30"
            />
          </svg>
        </motion.div>
      ))}

      {/* Typing Indicators */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`typing-${index}`}
          className="absolute flex items-center gap-1"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </motion.div>
      ))}

      {/* Data Flow Particles */}
      {[...Array(15)].map((_, index) => (
        <motion.div
          key={`data-${index}`}
          className="absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-600/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-slate-900/30" />
    </div>
  );
};