import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimate } from 'framer-motion';

// Import logos
import mainLogo from '/logo.png';
import chatgptLogo from '/ChatGPT-Logo-PNG-1.png';
import geminiLogo from '/gemini-color.png';
import claudeLogo from '/claude-color.svg';
import qwenLogo from '/qwen-color.png';
import deepseekLogo from '/deepseek-color.png';
import ollamaLogo from '/ollama.png';

const aiLogos = [
  { src: chatgptLogo, name: 'ChatGPT' },
  { src: geminiLogo, name: 'Gemini' },
  { src: claudeLogo, name: 'Claude' },
  { src: qwenLogo, name: 'Qwen' },
  { src: deepseekLogo, name: 'DeepSeek' },
  { src: ollamaLogo, name: 'Ollama' },
];

export const LogoShooter: React.FC = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const runAnimation = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));

      while (scope.current) {
        // Reset all targets to be visible and at their original position
        await animate('.ai-logo', { opacity: 1, scale: 1, x: 0, y: 0 }, { duration: 0 });

        for (let i = 0; i < aiLogos.length; i++) {
          const mainLogoEl = document.querySelector('.main-logo');
          const targetEl = document.querySelector(`.ai-logo-${i}`);
          const projectileEl = document.querySelector('.projectile');
          const lineEl = document.querySelector('.line');

          if (!mainLogoEl || !targetEl || !projectileEl || !lineEl) continue;

          const mainRect = mainLogoEl.getBoundingClientRect();
          const targetRect = targetEl.getBoundingClientRect();
          const scopeRect = scope.current.getBoundingClientRect();
          
          const startX = mainRect.left + mainRect.width / 2 - scopeRect.left;
          const startY = mainRect.top + mainRect.height / 2 - scopeRect.top;
          const endX = targetRect.left + targetRect.width / 2 - scopeRect.left;
          const endY = targetRect.top + targetRect.height / 2 - scopeRect.top;

          const dx = endX - startX;
          const dy = endY - startY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          
          // --- Animation Sequence ---

          // 1. Reset and position elements
          animate(projectileEl, { left: startX, top: startY, opacity: 1, scale: 0.5 }, { duration: 0 });
          animate(lineEl, {
              transform: `rotate(${angle}deg)`,
              width: 0,
              left: startX,
              top: startY,
              opacity: 1,
            }, { duration: 0 });

          // 2. Shoot projectile and draw line simultaneously
          const shootingDuration = 0.2;
          animate(projectileEl, { left: endX, top: endY, scale: 1 }, { duration: shootingDuration, ease: 'easeIn' });
          await animate(lineEl, { width: distance }, { duration: shootingDuration, ease: 'linear' });

          // 3. Hide projectile/line and animate target
          animate(projectileEl, { opacity: 0 }, { duration: 0.1 });
          animate(lineEl, { opacity: 0 }, { duration: 0.1 });
          await animate(targetEl, {
            x: [0, -5, 5, -5, 5, 0], // Vibrate horizontally
            y: [0, -5, 5, -5, 5, 0], // Vibrate vertically
            scale: [1, 1.05, 1], // Slight pulse
          }, { duration: 0.3, ease: 'easeInOut' });

          await new Promise(resolve => setTimeout(resolve, 200));
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    };

    runAnimation();
  }, [animate, scope]);

  return (
    <div ref={scope} className="relative w-full h-full flex flex-col-reverse items-center justify-around">
      {/* Main Logo (Shooter) at the bottom */}
      <div className="main-logo p-2">
        <img src={mainLogo} alt="Intergen Logo" className="w-20 h-20" />
      </div>

      {/* Trajectory Line */}
      <motion.div
        className="line absolute h-[2px] bg-gradient-to-r from-brand-start/50 to-brand-end origin-left shadow-lg"
        style={{ opacity: 0 }}
      />
      
      {/* Projectile */}
      <motion.div
        className="projectile absolute w-6 h-6 rounded-full bg-gradient-to-r from-brand-start to-brand-end shadow-lg"
        style={{ opacity: 0 }}
      />
      
      {/* AI Logos (Targets) */}
      <div className="flex justify-center gap-4 p-4 overflow-x-auto whitespace-nowrap">
        {aiLogos.map((logo, index) => (
          <motion.div
            key={logo.name}
            className={`ai-logo ai-logo-${index} p-3 bg-white/10 dark:bg-slate-800/50 rounded-full shadow-md backdrop-blur-sm`}
          >
            <img src={logo.src} alt={logo.name} className="w-12 h-12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};