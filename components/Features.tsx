import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MessageCircle, Image, Video, Code, BrainCircuit, CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Grid } from "@/components/ui/feature-section-with-card-gradient";

const capabilities = [
  {
    id: 0,
    title: 'Advanced Chat & Conversations',
    description: 'Natural language conversations with context retention, multi-turn dialogue, and support for complex reasoning tasks.',
    icon: MessageCircle,
    color: '#3b82f6',
    features: ['Context-aware conversations', 'Multi-language support', 'Complex reasoning']
  },
  {
    id: 1,
    title: 'AI Image Generation',
    description: 'Create stunning visuals from text descriptions with high-resolution outputs and style variations.',
    icon: Image,
    color: '#8b5cf6',
    features: ['High-resolution generation', 'Multiple art styles', 'Fast processing']
  },
  {
    id: 2,
    title: 'Video Creation & Editing',
    description: 'Generate video content, animations, and edit existing footage with AI-powered tools.',
    icon: Video,
    color: '#ef4444',
    features: ['Text-to-video generation', 'Animation creation', 'Video enhancement']
  },
  {
    id: 3,
    title: 'Code Generation & Debugging',
    description: 'Write, debug, and optimize code with intelligent suggestions across programming languages.',
    icon: Code,
    color: '#22c55e',
    features: ['Multi-language support', 'Code debugging', 'Performance optimization']
  }
];

const llmExpertise = [
  {
    model: 'ChatGPT',
    specialty: 'Creative Writing & Research',
    description: 'Master of creative writing, research, and general knowledge. Perfect for content creation and educational content.',
    strengths: ['Creative writing', 'Research', 'Educational content', 'General knowledge'],
    gradient: 'from-[#10A37F] to-[#1A7F64]',
    bgGradient: 'from-[#10A37F] to-[#1A7F64]',
    textColor: 'text-[#10A37F]'
  },
  {
    model: 'Claude',
    specialty: 'Code & Programming',
    description: 'Exceptional at complex coding tasks, debugging, and software architecture. Great for building applications and explaining technical concepts.',
    strengths: ['Advanced coding', 'System design', 'Code review', 'Technical documentation'],
    gradient: 'from-[#CC9B7A] to-[#D4A574]',
    bgGradient: 'from-[#CC9B7A] to-[#D4A574]',
    textColor: 'text-[#CC9B7A]'
  },
  {
    model: 'Gemini',
    specialty: 'Data Analysis & Multimodal',
    description: 'Excellent at processing multiple data types simultaneously, analysis, and complex problem-solving tasks.',
    strengths: ['Data analysis', 'Multimodal processing', 'Complex reasoning', 'Research synthesis'],
    gradient: 'from-[#EA4335] to-[#D93025]',
    bgGradient: 'from-[#EA4335] to-[#D93025]',
    textColor: 'text-[#EA4335]'
  },
  {
    model: 'DeepSeek',
    specialty: 'Complex Reasoning',
    description: 'Specializes in complex logical reasoning, mathematical problems, and detailed analytical tasks.',
    strengths: ['Mathematical reasoning', 'Complex analysis', 'Logical problem solving', 'Research depth'],
    gradient: 'from-[#0FA9E6] to-[#0C87BA]',
    bgGradient: 'from-[#0FA9E6] to-[#0C87BA]',
    textColor: 'text-[#0FA9E6]'
  },
  {
    model: 'Llama',
    specialty: 'Code & Technical Tasks',
    description: 'Strong performance in coding tasks, technical analysis, and computational problems with open-source flexibility.',
    strengths: ['Open-source model', 'Technical analysis', 'Code generation', 'Research applications'],
    gradient: 'from-[#0668E1] to-[#0552B5]',
    bgGradient: 'from-[#0668E1] to-[#0552B5]',
    textColor: 'text-[#0668E1]'
  },
  {
    model: 'Qwen',
    specialty: 'Multilingual & Code',
    description: 'Excellent multilingual capabilities combined with strong coding performance, ideal for international projects.',
    strengths: ['Multilingual support', 'Code generation', 'International projects', 'Cultural understanding'],
    gradient: 'from-[#6C5CE7] to-[#5F4FD1]',
    bgGradient: 'from-[#6C5CE7] to-[#5F4FD1]',
    textColor: 'text-[#6C5CE7]'
  }
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};

const UnifiedWorkflow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const orbitRadius = isMobile ? 110 : 130;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeCapability = capabilities[activeIndex];
  const Icon = activeCapability.icon;

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto">
      <motion.div className="w-full lg:w-1/2 h-72 lg:h-auto relative flex items-center justify-center mb-4 lg:mb-0">
        <motion.div
          className="absolute w-24 h-24 bg-brand-start/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], transition: { duration: 5, repeat: Infinity } }}
        />
        <motion.div className="w-28 h-28 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg border border-slate-200 dark:border-slate-800">
          <img src="/logo.png" alt="Integen AI Logo" className="w-20 h-20 object-contain" />
        </motion.div>

        {capabilities.map((cap, index) => {
          const angle = (index / capabilities.length) * 2 * Math.PI;
          const x = Math.cos(angle) * orbitRadius;
          const y = Math.sin(angle) * orbitRadius;
          const IsActiveIcon = cap.icon;

          return (
            <motion.div
              key={cap.id}
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0 }}
              animate={{ x, y, scale: 1, transition: { duration: 0.5, delay: 0.2 + index * 0.1 } }}
              onHoverStart={() => setActiveIndex(index)}
            >
              <div className={cn(
                "w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer",
                activeIndex === index
                  ? 'bg-white dark:bg-slate-800 shadow-2xl border-brand-start scale-110'
                  : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-300 dark:border-slate-700'
              )}>
                <IsActiveIcon className={cn("w-8 h-8 transition-colors duration-300", activeIndex === index ? `text-${cap.color}` : 'text-slate-400')} style={{ color: activeIndex === index ? cap.color : undefined }} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="w-full lg:w-1/2 p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center lg:justify-start mb-4 bg-slate-100 dark:bg-slate-800/50 rounded-full py-2 px-4">
              <div className="p-2 rounded-full" style={{ backgroundColor: activeCapability.color + '20' }}>
                <Icon className="w-5 h-5" style={{ color: activeCapability.color }} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white ml-3">{activeCapability.title}</h3>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{activeCapability.description}</p>
            <div className="space-y-3">
              {activeCapability.features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-center lg:justify-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.2 + i * 0.1 } }}
                >
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: activeCapability.color }} />
                  <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};


export const Features = () => {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.1]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section id="features" className="py-4 md:py-6 bg-white dark:bg-bg-dark relative overflow-hidden">

      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{ opacity: backgroundOpacity, scale: backgroundScale }}
      >
        <div className="absolute top-0 h-1/2 inset-x-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 opacity-50 filter blur-3xl"></div>
        <div className="absolute top-1/2 h-1/2 inset-x-0 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-800 dark:to-cyan-900 opacity-50 filter blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Why Settle For One Model When You Can Have Them All?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            One platform. Every AI. Integen combines elite LLMs for chat, code, images, and video so you save time, reduce costs, and never manage multiple subscriptions again.
          </motion.p>
        </motion.div>

        {/* Unified Workflow Animation */}
        <UnifiedWorkflow />

        {/* Section 2: LLM Expertise */}
        <motion.div
          className="text-center mb-6 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Meet Some of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">Leading LLMs</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Each AI model has unique strengths. Integen automatically routes your requests to the perfect specialist for the job.
          </motion.p>
        </motion.div>

        {/* AI Specialists Card Grid */}
        <motion.div
          className="pb-4 lg:pb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {llmExpertise.map((llm, index) => (
              <motion.div
                key={llm.model}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
                className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800"
              >
                <Grid size={30} />
                <div className="relative z-20">
                  <motion.div
                    className="flex items-center justify-center mb-4"
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      {llm.model === 'ChatGPT' ? (
                        <img src="/ChatGPT-Logo-PNG-1.png" alt={`${llm.model} logo`} className="w-10 h-10 object-contain" />
                      ) : llm.model === 'Claude' ? (
                        <img src="/claude-color.svg" alt={`${llm.model} logo`} className="w-10 h-10 object-contain" />
                      ) : llm.model === 'Gemini' ? (
                        <img src="/gemini-color.png" alt={`${llm.model} logo`} className="w-10 h-10 object-contain" />
                      ) : llm.model === 'DeepSeek' ? (
                        <img src="/deepseek-color.png" alt={`${llm.model} logo`} className="w-10 h-10 object-contain" />
                      ) : llm.model === 'Llama' ? (
                        <img src="/ollama.png" alt={`${llm.model} logo`} className="w-10 h-10 object-contain" />
                      ) : llm.model === 'Qwen' ? (
                        <img src="/qwen-color.png" alt={`${llm.model} logo`} className="w-10 h-10 object-contain" />
                      ) : (
                        <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                          {llm.model}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">{llm.model}</h3>
                  <p className={`text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r ${llm.gradient} uppercase tracking-wide mb-3`}>{llm.specialty}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-base font-normal leading-relaxed mb-4">{llm.description}</p>

                  <div className="space-y-2">
                    {llm.strengths.map((strength, idx) => (
                      <div key={idx} className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 bg-gradient-to-r ${llm.gradient}`} />
                        {strength}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};