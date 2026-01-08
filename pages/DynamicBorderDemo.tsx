import React from 'react';
import DynamicBorderAnimationsCard from '@/components/ui/dynamic-border-animations-card';
import { motion } from 'framer-motion';

const DynamicBorderDemo: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-800 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-24 pb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Dynamic Border <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Animation Card</span>
        </h1>
        <p className="text-gray-400 dark:text-slate-300 text-lg max-w-2xl mx-auto px-4">
          A React component featuring animated border elements that continuously move around the perimeter, 
          creating a dynamic visual effect.
        </p>
      </motion.div>

      {/* Main Card */}
      <div className="flex items-center justify-center px-4 pb-24">
        <DynamicBorderAnimationsCard />
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 pb-24"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Smooth Animations",
              description: "Continuous border animations using requestAnimationFrame for optimal performance.",
              icon: "⚡"
            },
            {
              title: "TypeScript Ready",
              description: "Fully typed React component with proper TypeScript definitions.",
              icon: "🔧"
            },
            {
              title: "Dark Mode Support",
              description: "Seamlessly adapts to both light and dark themes with proper color schemes.",
              icon: "🌙"
            },
            {
              title: "Responsive Design",
              description: "Built with Tailwind CSS for perfect responsive behavior across all devices.",
              icon: "📱"
            },
            {
              title: "Customizable",
              description: "Easy to modify colors, animation speed, and styling to match your brand.",
              icon: "🎨"
            },
            {
              title: "Performance Optimized",
              description: "Efficient animations that don't impact overall page performance.",
              icon: "🚀"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 dark:border-slate-600 hover:border-orange-500/30 transition-all"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 dark:text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DynamicBorderDemo;