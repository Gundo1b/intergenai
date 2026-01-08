import React from 'react';
import { motion } from 'framer-motion';

// Import logos
import chatgptLogo from '/ChatGPT-Logo-PNG-1.png';
import geminiLogo from '/gemini-color.png';
import claudeLogo from '/claude-color.svg';
import qwenLogo from '/qwen-color.png';
import deepseekLogo from '/deepseek-color.png';
import ollamaLogo from '/ollama.png';
import { SiriOrb } from './SiriOrb';

const logos = [
  { src: chatgptLogo, size: 80 },
  { src: geminiLogo, size: 70 },
  { src: claudeLogo, size: 90 },
  { src: qwenLogo, size: 80 },
  { src: deepseekLogo, size: 75 },
  { src: ollamaLogo, size: 70 },
];

const ORBIT_RADIUS_LARGE = 220;
const ORBIT_RADIUS_SMALL = 140;

export const OrbitalLogos: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Siri Orb - placed first to be in the background */}
      <div className="absolute w-64 h-64">
        <SiriOrb className="w-full h-full" />
      </div>

      {/* Orbiting Logos */}
      <motion.div
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {logos.slice(0, 4).map((logo, index) => {
          const angle = (index / 4) * 360;
          return (
            <motion.div
              key={index}
              className="absolute w-24 h-24 -m-12"
              style={{
                transform: `rotate(${angle}deg) translateX(${ORBIT_RADIUS_LARGE}px) rotate(-${angle}deg)`,
              }}
            >
              <motion.img
                src={logo.src}
                alt={`logo ${index}`}
                className="w-full h-full object-contain bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg backdrop-blur-sm"
                style={{ width: logo.size, height: logo.size }}
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {logos.slice(4, 6).map((logo, index) => {
          const angle = (index / 2) * 360;
          return (
            <motion.div
              key={index}
              className="absolute w-20 h-20 -m-10"
              style={{
                transform: `rotate(${angle}deg) translateX(${ORBIT_RADIUS_SMALL}px) rotate(-${angle}deg)`,
              }}
            >
              <motion.img
                src={logo.src}
                alt={`logo ${index + 4}`}
                className="w-full h-full object-contain bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg backdrop-blur-sm"
                style={{ width: logo.size, height: logo.size }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};