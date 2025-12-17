import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  X,
  Zap,
  Users,
  Globe,
  Shield,
  Star,
  ArrowRight,
  Crown,
  Sparkles
} from 'lucide-react';

const comparisonData = [
  {
    feature: "Unified AI Interface",
    integen: true,
    competitors: false,
    description: "Single platform integrating multiple AI models seamlessly"
  },
  {
    feature: "Human-AI Collaboration Focus",
    integen: true,
    competitors: false,
    description: "Designed to enhance human creativity, not replace it"
  },
  {
    feature: "50+ AI Models Supported",
    integen: true,
    competitors: false,
    description: "Access to the most comprehensive collection of AI models"
  },
  {
    feature: "Enterprise-Grade Security",
    integen: true,
    competitors: true,
    description: "Advanced security measures and compliance standards"
  },
  {
    feature: "24/7 Global Availability",
    integen: true,
    competitors: true,
    description: "Round-the-clock access with global infrastructure"
  },
  {
    feature: "Multi-Language Support",
    integen: true,
    competitors: true,
    description: "Support for 20+ languages worldwide"
  },
  {
    feature: "Team Collaboration Tools",
    integen: true,
    competitors: true,
    description: "Built-in tools for team workflows and sharing"
  },
  {
    feature: "Custom Integrations",
    integen: true,
    competitors: false,
    description: "Flexible API and integration capabilities"
  },
  {
    feature: "Real-time Model Updates",
    integen: true,
    competitors: false,
    description: "Continuous updates with latest AI advancements"
  },
  {
    feature: "Privacy-First Approach",
    integen: true,
    competitors: false,
    description: "Your data stays yours - never used for training"
  }
];

const futureFeatures = [
  {
    title: "Advanced Multimodal AI",
    description: "Seamlessly combine text, image, audio, and video AI capabilities in unified workflows.",
    icon: Sparkles,
    timeline: "Q2 2024"
  },
  {
    title: "Neural Architecture Search",
    description: "AI-powered optimization that automatically finds the best model architectures for your specific needs.",
    icon: Zap,
    timeline: "Q3 2024"
  },
  {
    title: "Federated Learning",
    description: "Collaborative AI training across distributed devices while maintaining complete privacy.",
    icon: Shield,
    timeline: "Q4 2024"
  },
  {
    title: "Quantum-Enhanced AI",
    description: "Integration with quantum computing for breakthrough performance in complex problem-solving.",
    icon: Crown,
    timeline: "2025"
  }
];

export default function Comparison() {
  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-start/10 dark:bg-brand-start/20 border border-brand-start/20 text-brand-end dark:text-brand-start text-sm font-semibold uppercase tracking-wider mb-8">
              <Star size={16} />
              <span>Comparison & Future</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Integen
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              See how Integen stacks up against traditional AI platforms and discover
              the future of intelligent assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Feature Comparison
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              See how Integen's comprehensive approach sets us apart from traditional AI platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-slate-50 dark:bg-slate-700/50 border-b border-slate-200 dark:border-slate-600">
              <div className="font-semibold text-slate-900 dark:text-white">Feature</div>
              <div className="text-center">
                <div className="font-semibold text-brand-end mb-1">Integen</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Next-Gen AI</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-slate-600 dark:text-slate-400 mb-1">Traditional</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">AI Platforms</div>
              </div>
              <div className="text-center font-semibold text-slate-600 dark:text-slate-400">Description</div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`grid grid-cols-4 gap-4 p-6 border-b border-slate-200 dark:border-slate-600 last:border-b-0 ${index % 2 === 0 ? 'bg-white/50 dark:bg-slate-800/30' : 'bg-slate-50/50 dark:bg-slate-700/20'
                  }`}
              >
                <div className="font-medium text-slate-900 dark:text-white">{item.feature}</div>
                <div className="flex justify-center">
                  {item.integen ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.competitors ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Future of AI with Integen
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We're not just keeping up with AI innovation—we're shaping its future.
              Here's what's coming next.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-brand-start/10 to-brand-end/10 dark:from-brand-start/20 dark:to-brand-end/20 rounded-2xl p-8 border border-brand-start/20 dark:border-brand-start/30 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon size={32} className="text-brand-end" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <span className="px-3 py-1 bg-brand-end/10 text-brand-end text-sm font-medium rounded-full">
                        {feature.timeline}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-brand-start to-brand-end rounded-3xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of creators, developers, and teams who have chosen Integen
              as their AI platform of choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-brand-end font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200 flex items-center gap-2">
                get started
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
