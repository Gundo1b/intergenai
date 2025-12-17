import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { OrbitalLoader } from '@/components/ui/orbital-loader';
import {
  Sparkles,
  MessageSquare,
  Code,
  Image,
  Video,
  ArrowRight,
  Play,
  Settings
} from 'lucide-react';

export default function Demo() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlacement, setSelectedPlacement] = useState<'top' | 'bottom' | 'left' | 'right'>('bottom');
  const [customMessage, setCustomMessage] = useState('');

  const placements = [
    { value: 'bottom', label: 'Bottom', icon: '↓' },
    { value: 'top', label: 'Top', icon: '↑' },
    { value: 'left', label: 'Left', icon: '←' },
    { value: 'right', label: 'Right', icon: '→' }
  ] as const;

  const demoFeatures = [
    {
      icon: MessageSquare,
      title: "Chat Intelligence",
      description: "AI-powered conversations and reasoning"
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Intelligent coding assistance"
    },
    {
      icon: Image,
      title: "Visual Creation",
      description: "AI-generated images and designs"
    },
    {
      icon: Video,
      title: "Motion Graphics",
      description: "Video generation and editing"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-start/20 dark:from-brand-start/30 to-brand-end/20 dark:to-brand-end/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 dark:from-purple-500/20 to-pink-500/10 dark:to-pink-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-start/20 to-brand-end/20 border border-brand-start/30 text-brand-start text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
              <Sparkles size={16} />
              <span> this is demo Component Demo</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Orbital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Loader
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A beautiful, animated loading component with customizable message placement and styling.
            </p>
          </motion.div>

          {/* Demo Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Live Demo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Live Demo</h2>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Message Placement this we add stylin
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {placements.map((placement) => (
                      <button
                        key={placement.value}
                        onClick={() => setSelectedPlacement(placement.value)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${selectedPlacement === placement.value
                          ? 'border-brand-start bg-brand-start/10 text-brand-start'
                          : 'border-slate-200 dark:border-slate-700 hover:border-brand-start/50'
                          }`}
                      >
                        <span className="text-lg">{placement.icon}</span>
                        <span className="text-sm font-medium">{placement.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Custom Message
                  </label>
                  <input
                    type="text"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Enter loading message..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-brand-start focus:outline-none focus:ring-2 focus:ring-brand-start/20"
                  />
                </div>

                <button
                  onClick={() => setIsLoading(!isLoading)}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold hover:shadow-lg hover:shadow-brand-start/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play size={18} />
                  {isLoading ? 'Stop Loading' : 'Start Loading'}
                </button>
              </div>

              {/* Orbital Loader Demo */}
              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
                {isLoading ? (
                  <OrbitalLoader
                    message={customMessage || "Loading Integen AI..."}
                    messagePlacement={selectedPlacement}
                  />
                ) : (
                  <div className="text-center">
                    <Settings className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-500 dark:text-slate-400">
                      Click "Start Loading" to see the orbital loader in action
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Features & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Features</h2>

              <div className="space-y-6">
                {demoFeatures.map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-start to-brand-end p-3 flex-shrink-0">
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-brand-start/10 to-brand-end/10 border border-brand-start/20 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Technical Details</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Built with Framer Motion for smooth animations</li>
                  <li>• Customizable message placement (top, bottom, left, right)</li>
                  <li>• Responsive design with Tailwind CSS</li>
                  <li>• TypeScript support with proper type definitions</li>
                  <li>• Uses class-variance-authority for variant management</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  View Source
                </button>
                <button className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-brand-start to-brand-end text-white font-medium hover:shadow-lg hover:shadow-brand-start/25 transition-all duration-300 flex items-center justify-center gap-2">
                  <ArrowRight size={16} />
                  Use in App
                </button>
              </div>
            </motion.div>
          </div>

          {/* Integration Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-6">
                Ready to integrate in your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                  Integen AI application
                </span>
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
                The orbital loader is now available in your components/ui folder and ready to use throughout your application.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <Sparkles size={20} />
                  Add to Project
                </button>
                <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
                  Documentation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}