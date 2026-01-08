
import React from 'react';
import { motion } from 'framer-motion';

const MacMiniBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.img
        src="/mac-mini.png"
        alt="Mac Mini"
        className="absolute w-64 h-auto"
        style={{
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          translateY: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default MacMiniBackground;
