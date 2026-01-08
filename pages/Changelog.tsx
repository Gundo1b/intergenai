import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  MessageSquare,
  Code,
  Image,
  Video,
  Users,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  Star,
  Lock,
  Cpu,
  RefreshCw,
  Globe,
  Settings,
  Rocket,
  Target,
  CheckCircle,
  Calendar,
  GitBranch,
  Layers,
  Smartphone
} from 'lucide-react';

const versions = [
  {
    version: "v1.0",
    title: "Foundation Release",
    focus: "Chat, Code, Image",
    status: "completed",
    gradient: "from-blue-400 to-cyan-400",
    icon: MessageSquare,
    description: "Launch of the core Integen AI experience.",
    date: "2024 Q1",
    details: [
      "Unified workspace for chat intelligence, code assistance, and image generation",
      "Contact Us instead of multiple tools and subscriptions",
      "Ensemble reasoning for high-quality responses",
      "Memory system for context awareness"
    ],
    highlights: ["Core AI", "Unified Interface", "Smart Routing"]
  },
  {
    version: "v2.0",
    title: "Visual & Multimodal Expansion",
    focus: "Video & Multimodal Orchestration",
    status: "completed",
    gradient: "from-purple-400 to-pink-400",
    icon: Video,
    description: "Add video generation for motion design and storytelling.",
    date: "2024 Q2",
    details: [
      "Advanced video generation for motion design and storytelling",
      "Smarter orchestration between chat, code, image, and video modes",
      "Enhanced visual workflows with seamless mode switching",
      "Improved response quality with multimodal reasoning"
    ],
    highlights: ["Video Generation", "Multimodal AI", "Workflow Orchestration"]
  },
  {
    version: "v3.0",
    title: "Teams & Builders",
    focus: "Collaboration & SDK",
    status: "completed",
    gradient: "from-emerald-400 to-teal-400",
    icon: Users,
    description: "Real-time collaboration for teams and studios.",
    date: "2024 Q3",
    details: [
      "Developer SDK to build on top of Integen AI",
      "Real-time collaboration for teams and studios",
      "Shared workspaces and better project organization",
      "Advanced team management and permissions"
    ],
    highlights: ["Team Collaboration", "Developer SDK", "Shared Workspaces"]
  },
  {
    version: "v4.0",
    title: "Enterprise-Grade Intelligence",
    focus: "Enterprise Customization & Private AI",
    status: "current",
    gradient: "from-orange-400 to-red-400",
    icon: Shield,
    description: "Private AI deployments and enterprise controls.",
    date: "2024 Q4",
    details: [
      "Private AI deployments and enterprise controls",
      "Advanced security, governance, and integrations",
      "Custom configurations for organizations and education",
      "Multi-region deployment with compliance certifications"
    ],
    highlights: ["Private AI", "Enterprise Security", "Custom Configurations"]
  }
];

const features = [
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Works seamlessly across web, mobile, and desktop"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance"
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Enterprise-grade security and privacy"
  }
];

export default function Changelog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Modern Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-8 shadow-lg">
                <GitBranch size={16} />
                <span>Release Timeline</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
                Evolution of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
                  Intelligence
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Track our journey from simple chat to enterprise-grade AI platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Version Cards Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {versions.map((version, index) => (
                <motion.div
                  key={version.version}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className={`relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${version.status === 'current'
                    ? 'border-2 border-blue-500/50 ring-2 ring-blue-500/20 shadow-blue-500/20'
                    : 'border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300/70 dark:hover:border-slate-600/70'
                    }`}>

                    {/* Status Badge */}
                    {version.status === 'current' && (
                      <div className="absolute -top-3 -right-3">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <Star size={12} />
                          <span>Current</span>
                        </div>
                      </div>
                    )}

                    {/* Version Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${version.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <version.icon className="w-full h-full text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                            {version.version}
                          </h3>
                          <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                            {version.date}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          {version.title}
                        </h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {version.focus}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {version.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      {version.details.slice(0, 3).map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {version.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/50 dark:border-slate-600/50"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Built for the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  Future
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Every release brings us closer to the perfect AI platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">

              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Join thousands of creators, developers, and teams already building with Integen AI
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Rocket size={20} />
                  Start Building Today
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <ArrowRight size={20} />
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
