import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Image, Video, Code, Brain, Palette, Film, Sparkles } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Grid, GridPattern } from "@/components/ui/feature-section-with-card-gradient";

const capabilities = [
  {
    title: 'Advanced Chat & Conversations',
    description: 'Natural language conversations with context retention, multi-turn dialogue, and support for complex reasoning tasks.',
    icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
    features: ['Context-aware conversations', 'Multi-language support', 'Complex reasoning', 'Creative writing assistance']
  },
  {
    title: 'AI Image Generation',
    description: 'Create stunning visuals from text descriptions with high-resolution outputs and style variations.',
    icon: <Image className="w-8 h-8 text-purple-500" />,
    features: ['High-resolution generation', 'Multiple art styles', 'Fast processing', 'Commercial usage rights']
  },
  {
    title: 'Video Creation & Editing',
    description: 'Generate video content, animations, and edit existing footage with AI-powered tools.',
    icon: <Video className="w-8 h-8 text-red-500" />,
    features: ['Text-to-video generation', 'Animation creation', 'Video enhancement', 'Multiple formats']
  },
  {
    title: 'Code Generation & Debugging',
    description: 'Write, debug, and optimize code with intelligent suggestions across programming languages.',
    icon: <Code className="w-8 h-8 text-green-500" />,
    features: ['Multi-language support', 'Code debugging', 'Performance optimization', 'Best practices guidance', 'Command Line Interface (CLI)', 'User Interface (UI)']
  }
];

const llmExpertise = [
  {
    model: 'ChatGPT',
    specialty: 'Creative Writing & Research',
    description: 'Master of creative writing, research, and general knowledge. Perfect for content creation and educational content.',
    strengths: ['Creative writing', 'Research', 'Educational content', 'General knowledge'],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-[#74AA9C] to-[#74AA9C]'
  },
  {
    model: 'Claude',
    specialty: 'Code & Programming',
    description: 'Exceptional at complex coding tasks, debugging, and software architecture. Great for building applications and explaining technical concepts.',
    strengths: ['Advanced coding', 'System design', 'Code review', 'Technical documentation'],
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-[#FF6F3C] to-[#FF6F3C]'
  },
  {
    model: 'Gemini',
    specialty: 'Data Analysis & Multimodal',
    description: 'Excellent at processing multiple data types simultaneously, analysis, and complex problem-solving tasks.',
    strengths: ['Data analysis', 'Multimodal processing', 'Complex reasoning', 'Research synthesis'],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-[#4285F4] to-[#185ABC]'
  },
  {
    model: 'DeepSeek',
    specialty: 'Complex Reasoning',
    description: 'Specializes in complex logical reasoning, mathematical problems, and detailed analytical tasks.',
    strengths: ['Mathematical reasoning', 'Complex analysis', 'Logical problem solving', 'Research depth'],
    gradient: 'from-red-500 to-pink-500',
    bgGradient: 'from-[#0A0F2C] to-[#0A0F2C]'
  },
  {
    model: 'Llama',
    specialty: 'Code & Technical Tasks',
    description: 'Strong performance in coding tasks, technical analysis, and computational problems with open-source flexibility.',
    strengths: ['Open-source model', 'Technical analysis', 'Code generation', 'Research applications'],
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-[#0064E0] to-[#0064E0]'
  },
  {
    model: 'Qwen',
    specialty: 'Multilingual & Code',
    description: 'Excellent multilingual capabilities combined with strong coding performance, ideal for international projects.',
    strengths: ['Multilingual support', 'Code generation', 'International projects', 'Cultural understanding'],
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-[#1677FF] to-[#1677FF]'
  }
];

export const Features: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.1]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section id="features" className="py-8 md:py-12 bg-white dark:bg-bg-dark relative overflow-hidden">

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{ opacity: backgroundOpacity, scale: backgroundScale }}
      >
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section 1: Platform Capabilities */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
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
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
    One platform. Every AI. Integen combines elite LLMs for chat, code, images, and video so you save time, reduce costs, and never manage multiple subscriptions again
         </motion.p>
          </motion.div>
        </motion.div>

        {/* Enhanced Grid with Hover Effects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pb-10 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <CapabilityFeature {...capability} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Section 2: LLM Expertise - Card Gradient Design */}
        <motion.div
          className="text-center mb-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">AI Specialists</span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Each AI model has unique strengths. Integen automatically routes your requests to the perfect specialist for the job.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* AI Specialists Card Grid */}
        <motion.div
          className="pb-8 lg:pb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
            {llmExpertise.map((llm, index) => (
              <motion.div
                key={llm.model}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
              >
                <Grid size={20} />
                <div className="relative z-20">
                  <motion.div
                    className="flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${llm.bgGradient} dark:from-slate-800 dark:to-slate-900 flex items-center justify-center shadow-lg border border-slate-200 dark:border-slate-700`}>
                      {llm.model === 'ChatGPT' ? (
                        <img src="/ChatGPT-Logo-PNG-1.png" alt={`${llm.model} logo`} className="w-8 h-8 object-contain" />
                      ) : llm.model === 'Claude' ? (
                        <img src="/claude-color.svg" alt={`${llm.model} logo`} className="w-8 h-8 object-contain" />
                      ) : llm.model === 'Gemini' ? (
                        <img src="/gemini-color.png" alt={`${llm.model} logo`} className="w-8 h-8 object-contain" />
                      ) : llm.model === 'DeepSeek' ? (
                        <img src="/deepseek-color.png" alt={`${llm.model} logo`} className="w-8 h-8 object-contain" />
                      ) : llm.model === 'Llama' ? (
                        <img src="/ollama.png" alt={`${llm.model} logo`} className="w-8 h-8 object-contain" />
                      ) : llm.model === 'Qwen' ? (
                        <img src="/qwen-color.png" alt={`${llm.model} logo`} className="w-8 h-8 object-contain" />
                      ) : (
                        <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                          {llm.model}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-neutral-800 dark:text-white mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    {llm.model}
                  </motion.h3>

                  <motion.p
                    className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${llm.bgGradient} uppercase tracking-wide mb-3`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {llm.specialty}
                  </motion.p>

                  <motion.p
                    className="text-neutral-600 dark:text-neutral-400 text-lg font-normal leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    {llm.description}
                  </motion.p>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    {llm.strengths.map((strength, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-base text-neutral-500 dark:text-neutral-400"
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6 + idx * 0.1, duration: 0.3 }}
                      >
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 bg-gradient-to-r ${llm.bgGradient}`}
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        {strength}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section >
  );
};

// Enhanced Capability Feature Component with Hover Effects
const CapabilityFeature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/capability dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
      whileHover="hover"
    >
      {index < 4 && (
        <motion.div
          className="opacity-0 group-hover/capability:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-brand-start/10 to-transparent pointer-events-none"
          variants={{
            hover: { opacity: 1 }
          }}
        />
      )}
      {index >= 4 && (
        <motion.div
          className="opacity-0 group-hover/capability:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-brand-start/10 to-transparent pointer-events-none"
          variants={{
            hover: { opacity: 1 }
          }}
        />
      )}
      <motion.div
        className="mb-6 relative z-10 px-6 text-neutral-600 dark:text-neutral-400"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="text-xl font-bold mb-3 relative z-10 px-6"
        variants={{
          hover: { x: 10 }
        }}
      >
        <motion.div
          className="absolute left-0 inset-y-0 h-6 group-hover/capability:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/capability:bg-brand-start transition-all duration-200 origin-center"
          variants={{
            hover: { height: "2rem" }
          }}
        />
        <span className="group-hover/capability:translate-x-2 transition duration-200 inline-block text-slate-900 dark:text-white">
          {title}
        </span>
      </motion.div>
      <motion.p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-6 mb-6"
        variants={{
          hover: { opacity: 0.8 }
        }}
      >
        {description}
      </motion.p>
      <motion.div
        className="grid grid-cols-1 gap-2 relative z-10 px-6"
        variants={{
          hover: { opacity: 1 }
        }}
      >
        {capabilities[index].features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-center text-xs text-neutral-500 dark:text-neutral-400"
            variants={{
              hover: { x: 5 }
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-brand-start mr-2 flex-shrink-0"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.2 }}
            />
            <span className="text-sm">{feature}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};