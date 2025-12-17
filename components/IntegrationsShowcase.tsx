import React, { useEffect } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';
import { Zap, ShieldCheck, RefreshCw, MousePointerClick } from 'lucide-react';

// Re-using the AI logos as integration icons
import mainLogo from '/logo.png';
import chatgptLogo from '/ChatGPT-Logo-PNG-1.png';
import geminiLogo from '/gemini-color.png';
import claudeLogo from '/claude-color.svg';
import qwenLogo from '/qwen-color.png';
import deepseekLogo from '/deepseek-color.png';
import ollamaLogo from '/ollama.png';

const icons = [
  { src: chatgptLogo, name: 'ChatGPT' },
  { src: geminiLogo, name: 'Gemini' },
  { src: claudeLogo, name: 'Claude' },
  { src: qwenLogo, name: 'Qwen' },
  { src: deepseekLogo, name: 'DeepSeek' },
  { src: ollamaLogo, name: 'Ollama' },
];

const features = [
  { name: 'Instant sync', icon: <RefreshCw size={18} /> },
  { name: 'Enterprise security', icon: <ShieldCheck size={18} /> },
  { name: 'Real-time updates', icon: <Zap size={18} /> },
  { name: 'One-click setup', icon: <MousePointerClick size={18} /> },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const paths = [
  "M 42 20 C 83 20, 125 100, 200 120",
  "M 104 15 C 125 30, 150 90, 200 120",
  "M 200 10 C 200 30, 200 80, 200 120",
  "M 296 15 C 275 30, 250 90, 200 120",
  "M 359 20 C 317 20, 275 100, 200 120",
];

export const IntegrationsShowcase: React.FC = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: '-20%' });

  useEffect(() => {
    if (isInView) {
      const runAnimation = async () => {
        while (true) {
          await animate([
            ["path.integration-line", { pathLength: 0 }, { duration: 0 }],
            ["#dot-0, #dot-1, #dot-2, #dot-3, #dot-4", { offsetDistance: "0%" }, { duration: 0 }],
            [".impact-ring", { scale: 0, opacity: 0 }, { duration: 0 }],
          ]);
          await new Promise(resolve => setTimeout(resolve, 300));
          const animations = paths.map((_, i) =>
            Promise.all([
              animate(`path#path-${i}`, { pathLength: 1 }, { duration: 1, ease: 'easeInOut', delay: i * 0.1 }),
              animate(`#dot-${i}`, { offsetDistance: '100%' }, { duration: 1.2, ease: 'linear', delay: i * 0.1 })
            ])
          );
          await Promise.all(animations);
          await animate(".impact-ring", { scale: [0, 1.2], opacity: [0, 0.8, 0] }, { duration: 0.7, ease: "easeOut" });
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      };
      runAnimation();
    }
  }, [isInView, animate]);

  return (
    <motion.div
      ref={scope}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="relative w-full max-w-full sm:max-w-2xl lg:max-w-4xl flex flex-col items-center justify-center bg-slate-900/50 p-6 md:p-8 rounded-2xl overflow-hidden border border-[#009DFF]/30 bg-grid-pattern animate-bg-pan"
    >
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 text-center">
        Connect Your Entire Tech Stack
      </motion.h2>

      {/* Animation for all screens */}
      <div className="flex relative w-full max-w-xs sm:max-w-md h-48 sm:h-64 items-center justify-center mb-10">
        <motion.div
          variants={itemVariants}
          className="relative z-10 w-28 h-28 bg-[#009DFF]/10 border-2 border-[#009DFF]/50 rounded-full flex items-center justify-center mt-16"
          animate={{ scale: [1, 1.05, 1], boxShadow: ['0 0 10px #009DFF', '0 0 20px #009DFF', '0 0 10px #009DFF'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src={mainLogo} alt="Intergen Logo" className="w-3/4 h-3/4 object-contain" />
          <motion.div className="impact-ring absolute w-full h-full rounded-full border-2 border-[#64E1FF]" />
        </motion.div>

        <svg className="absolute inset-0 w-full h-full z-0" fill="none" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="line-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#64E1FF" stopOpacity="0" />
              <stop offset="100%" stopColor="#64E1FF" stopOpacity="1" />
            </linearGradient>
          </defs>
          {paths.map((path, i) => (
            <React.Fragment key={i}>
              <motion.path id={`path-${i}`} d={path} stroke="url(#line-gradient)" strokeWidth="2" className="integration-line" style={{ pathLength: 0 }} />
              <motion.circle id={`dot-${i}`} r="3" fill="#64E1FF" opacity="0.8" style={{ filter: 'blur(1px)', offsetPath: `path('${path}')` }} />
            </React.Fragment>
          ))}
        </svg>

        <div className="absolute top-0 w-full flex flex-wrap justify-center sm:justify-between gap-2 sm:gap-0 z-10">
          {icons.slice(0, 5).map((icon, i) => (
            <motion.div key={i} variants={itemVariants} className="w-10 h-10 sm:w-14 sm:h-14 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center p-2">
              <img src={icon.src} alt={icon.name} className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </div>
      </div>




      <motion.div variants={itemVariants} className="w-full max-w-4xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-400">
        {features.map((feature, i) => (
          <React.Fragment key={feature.name}>
            <div className="flex items-center gap-2">
              <span className="text-[#64E1FF]">{feature.icon}</span>
              <span className="text-sm">{feature.name}</span>
            </div>
            {i < features.length - 1 && <div className="hidden md:block w-px h-4 bg-slate-700/50" />}
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
};
