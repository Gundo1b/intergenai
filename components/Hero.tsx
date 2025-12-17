import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { IntegrationsShowcase } from './IntegrationsShowcase';
import { ParticleBackground } from './ParticleBackground';
import { GradualSpacing } from './ui/gradual-spacing';
import { TextGenerateEffect } from './ui/text-generate-effect';

const models = ['ChatGPT', 'ClaudeAI', 'Gemini', 'Llama', 'DeepSeek', 'Qwen'];

export const Hero: React.FC = () => {
  const [activeModel, setActiveModel] = useState('Anthropic');

  return (
    <section className="relative min-h-screen sm:min-h-[calc(100vh-4rem)] flex items-center pt-16 pb-8 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-12 overflow-hidden">
      <ParticleBackground className="absolute inset-0 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

        {/* Left Side: Copy & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 z-10 order-1 lg:order-1"
        >
          <div>


            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white leading-[1.1] lg:leading-[1.2] tracking-tight break-words max-w-full">
              <span className="text-slate-900 dark:text-white">One Platform, </span>
              <br className="hidden sm:block" />
              <GradualSpacing
                text={`Endless Creative
Intelligence.`}
                className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end"
              />
            </div>

            <div className="mt-4 sm:mt-6 max-w-full sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
              <TextGenerateEffect
                words="Unified Chat, Code, Image and Video generation. Stop Juggling Multiple Subscriptions Integen Routes Your Prompts To The Best Models Automatically."
                className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-normal"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none justify-center lg:justify-start mt-6">
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-brand-start/25 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 w-full sm:w-auto touch-manipulation">
              Get Started
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-base sm:text-lg hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-700 transition-all duration-200 flex items-center justify-center gap-2 group w-full sm:w-auto touch-manipulation">
              <Play size={18} className="group-hover:text-brand-end transition-colors" />
              Watch Demo
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6 mt-8">
            <div className="flex items-center gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider"
              >
                Powered by
              </motion.span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1, originX: 0 }}
                className="h-px bg-gradient-to-r from-brand-start to-brand-end w-12 sm:w-32"
              />
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              {models.map((model, index) => (
                <motion.span
                  key={model}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="px-4 sm:px-5 py-2 text-sm font-semibold rounded-xl shadow-lg cursor-pointer transition-all duration-300 backdrop-blur-sm border transform relative overflow-hidden group bg-gradient-to-r from-[#64E1FF]/20 to-[#009DFF]/40 border-[#009DFF]/30 text-[#009DFF] dark:text-[#64E1FF] hover:shadow-[#009DFF]/25"
                >
                  {/* Animated background shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span className="relative z-10">{model}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Integrations Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative h-auto lg:h-full w-full flex items-center justify-center z-10 order-2 lg:order-2"
        >
          <IntegrationsShowcase />
        </motion.div>
      </div>
    </section>
  );
};