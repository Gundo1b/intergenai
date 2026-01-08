import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { IntegrationsShowcase } from './IntegrationsShowcase';
import { ParticleBackground } from './ParticleBackground';
import { GradualSpacing } from './ui/gradual-spacing';
import { TextGenerateEffect } from './ui/text-generate-effect';

const models = ['ChatGPT', 'Claude', 'Gemini', 'Ollama', 'DeepSeek', 'Qwen'];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen flex items-center
        pt-24 pb-12 overflow-hidden
      "
    >
      {/* Background */}
      <ParticleBackground className="absolute inset-0 z-0" />

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch min-h-[calc(100vh-6rem)]">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="
              flex flex-col justify-center
              text-center lg:text-left
            "
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                One Platform
                <br />
                <GradualSpacing
                  text={`Endless Creative\nIntelligence.`}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end"
                />
              </h1>

              <div className="max-w-xl mx-auto lg:mx-0">
                <TextGenerateEffect
                  words="Unified Chat, Code, Image and Video generation. Stop juggling multiple subscriptions. Integen routes your prompts to the best models automatically."
                  className="text-base lg:text-lg text-slate-600 dark:text-slate-400"
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-start to-brand-end text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition">
                  Get Started
                </button>

                <button className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                  <Play size={18} />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Powered By */}
            <div className="pt-12 space-y-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Powered by
                </span>
                <span className="h-px w-24 bg-gradient-to-r from-brand-start to-brand-end" />
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {models.map((model) => (
                  <span
                    key={model}
                    className="px-4 py-2 text-sm font-semibold rounded-xl border backdrop-blur-sm bg-gradient-to-r from-[#64E1FF]/20 to-[#009DFF]/40 border-[#009DFF]/30 text-[#009DFF]"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              relative flex items-center justify-center
              h-full w-full
            "
          >
            <IntegrationsShowcase />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
