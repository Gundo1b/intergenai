import React, { useState } from 'react';
import { AnimatedTabs } from '../components/ui/animated-tabs';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Code,
  Image,
  Video,
  Zap,
  Brain,
  Palette,
  Sparkles,
  CheckCircle,
  Star,
  Shield,
  Rocket,
  Users,
  Target,
  PenTool,
  GraduationCap,
  Terminal,
  Building2
} from 'lucide-react';
import { NewsletterCTA } from '../components/NewsletterCTA';

const features = [
  {
    icon: MessageSquare,
    title: "Chat Intelligence",
    description: "Natural dialogue, idea generation, and tutoring with ensemble reasoning for high-quality answers.",
    color: "from-blue-400 to-blue-600",
    features: ["Natural dialogue", "Idea generation", "Tutoring", "Ensemble reasoning"]
  },
  {
    icon: Code,
    title: "Code Intelligence",
    description: "Code creation, refactoring, debugging, and system design with smart logic inference.",
    color: "from-green-400 to-green-600",
    features: ["Code creation & refactoring", "Debugging", "System design help", "Smart logic inference"]
  },
  {
    icon: Image,
    title: "Image & Design Tools",
    description: "High-quality image generation with style control and iterative refinement loops.",
    color: "from-purple-400 to-purple-600",
    features: ["High-quality generation", "Style control", "Iterative refinement", "Visual exploration"]
  },
  {
    icon: Video,
    title: "Video Generation",
    description: "Motion design, storytelling automation, and scene generation with rendering previews.",
    color: "from-red-400 to-red-600",
    features: ["Motion design", "Storytelling automation", "Scene generation", "Rendering previews"]
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Speed",
    description: "No switching between apps",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Target,
    title: "Quality",
    description: "Automatic model selection",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Brain,
    title: "Ease",
    description: "One unified UX",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Cost Efficiency",
    description: "Replace multiple subscriptions",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Scalable",
    description: "Solo creators to enterprise",
    color: "from-cyan-400 to-teal-500"
  },
  {
    icon: CheckCircle,
    title: "Secure",
    description: "Privacy-first architecture",
    color: "from-emerald-400 to-green-500"
  }
];

const audiences = [
  {
    title: 'Creators & Designers',
    description: 'Storyboard campaigns, generate moodboards, and iterate on visuals in a unified workspace.',
    icon: PenTool,
    category: 'Interactions',
    gradient: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    title: 'Students & Learners',
    description: 'Get deep explanations, summarize complex topics, and create multimodal study guides.',
    icon: GraduationCap,
    category: 'Resources',
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    title: 'Developers & Engineers',
    description: 'Generate boilerplate, refactor legacy code, and debug with context-aware AI assistance.',
    icon: Terminal,
    category: 'Docs',
    gradient: "from-green-500 via-emerald-500 to-teal-500"
  },
  {
    title: 'Startups & Teams',
    description: 'Ship products faster with shared workspaces and unified tools for the whole team.',
    icon: Rocket,
    category: 'Interactions',
    gradient: "from-orange-500 via-red-500 to-pink-500"
  },
  {
    title: 'Enterprise',
    description: 'Secure, compliant AI integration with custom workflows and role-based access control.',
    icon: Building2,
    category: 'Docs',
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  }
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Creators", "Students", "Developers", "Startups", "Businesses"];

  const filteredAudiences = audiences.filter(audience => {
    if (activeTab === "All") return true;
    if (activeTab === "Creators") return audience.title.includes("Creators");
    if (activeTab === "Students") return audience.title.includes("Students");
    if (activeTab === "Developers") return audience.title.includes("Developers");
    if (activeTab === "Startups") return audience.title.includes("Startups");
    if (activeTab === "Businesses") return audience.title.includes("Businesses");
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F9FBFF] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#64E1FF]/20 rounded-full blur-[120px] opacity-40 mix-blend-screen dark:opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-[20%] right-0 w-[800px] h-[600px] bg-[#009DFF]/10 rounded-full blur-[100px] opacity-30 mix-blend-screen dark:opacity-10"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md border border-[#64E1FF]/20 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm font-medium mb-8 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-lg shadow-[#64E1FF]/10">
              <Sparkles size={16} className="text-[#009DFF]" />
              <span>Unified Intelligence Platform</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
              Every tool you need.<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64E1FF] to-[#009DFF]">
                One intelligent workspace.
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Stop switching between isolated AI tools. Integen AI unifies chat, coding, image, and video generation into a single, collaborative workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section - Bento Grid Style */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Powerhouse Capabilities
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive suite of generative tools designed to work together perfectly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-blue-300/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-3xl p-8 overflow-hidden hover:border-[#64E1FF]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#64E1FF]/10">
                  <div className={`absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br ${feature.color} opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity`}></div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                        <feature.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                      {feature.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Different Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-100/50 dark:bg-white/[0.02]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Builders Choose Integen
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4`}>
                  <benefit.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Everyone Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Tailored for your workflow
            </h2>
            <div className="flex justify-center">
              <AnimatedTabs
                tabs={tabs}
                activeTab={activeTab}
                onChange={setActiveTab}
                containerClassName="bg-white/50 dark:bg-slate-900/50 p-1.5 rounded-full border border-white/20 shadow-sm"
                activeTabClassName="bg-white dark:bg-slate-800 text-[#009DFF] dark:text-white shadow-md"
                tabClassName="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredAudiences.map((audience) => (
                <motion.div
                  layout
                  key={audience.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="h-full bg-white dark:bg-slate-900 border border-white/50 dark:border-slate-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#64E1FF]/10 dark:hover:shadow-[#64E1FF]/5 transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} p-4 mb-6 text-white shadow-md transform group-hover:scale-105 transition-transform duration-300`}>
                      <audience.icon className="w-full h-full" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-4">
                      {audience.category}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#64E1FF]/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 sm:p-20 border border-white/50 dark:border-white/10 shadow-2xl shadow-[#64E1FF]/20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to create?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              Join the ecosystem of builders who are shipping faster with Integen AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF] text-white font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-[#009DFF]/30">
                Get Started Free
              </button>
              <button className="px-8 py-4 rounded-full text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  );
}
