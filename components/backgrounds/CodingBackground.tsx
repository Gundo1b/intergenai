import React from 'react';
import { motion } from 'framer-motion';

interface CodingBackgroundProps {
  className?: string;
}

export const CodingBackground: React.FC<CodingBackgroundProps> = ({ className = '' }) => {
  const codeSnippets = [
    'function handleSubmit()',
    'const data = await fetch()',
    'if (user.isActive)',
    'return result.map()',
    'class Component {',
    'export default function',
    'useState([])',
    'try { } catch {}',
    'npm install',
    'git commit -m',
    'console.log()',
    'async/await'
  ];

  const brackets = ['{', '}', '(', ')', '[', ']', ';', '='];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Animated Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-blue-200/30 dark:text-blue-800/30 select-none"
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
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Floating Brackets */}
      {brackets.map((bracket, index) => (
        <motion.div
          key={`bracket-${index}`}
          className="absolute text-2xl font-mono text-purple-200/20 dark:text-purple-800/20 select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
            scale: 0.5
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          {bracket}
        </motion.div>
      ))}

      {/* Floating Particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-600/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-100/20 dark:text-blue-900/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-slate-900/50" />
    </div>
  );
};