import React from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  Code, 
  Zap, 
  Shield, 
  Play, 
  FileText, 
  Download, 
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Search,
  Star
} from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

export default function Documentation() {
  const gettingStarted = [
    {
      title: "Quick Start Guide",
      description: "Get up and running with integen AI in minutes",
      icon: <Zap className="w-6 h-6" />,
      steps: ["Sign up", "Choose your plan", "Start generating", "Scale your workflow"]
    },
    {
      title: "API Authentication",
      description: "Learn how to authenticate your requests securely",
      icon: <Shield className="w-6 h-6" />,
      steps: ["Get API key", "Set up headers", "Test connection", "Handle errors"]
    },
    {
      title: "SDK Installation",
      description: "Install and configure our SDKs for your preferred language",
      icon: <Download className="w-6 h-6" />,
      steps: ["Choose SDK", "Install package", "Import library", "Initialize client"]
    }
  ];

  const guides = [
    {
      title: "GEN AI Chat Integration",
      description: "Complete guide to integrating conversational AI",
      category: "Chat",
      difficulty: "Beginner",
      readTime: "5 min"
    },
    {
      title: "Image Generation Best Practices",
      description: "Tips and tricks for high-quality image generation",
      category: "Image",
      difficulty: "Intermediate",
      readTime: "8 min"
    },
    {
      title: "Video Generation Workflow",
      description: "Creating professional videos with AI",
      category: "Video",
      difficulty: "Advanced",
      readTime: "12 min"
    },
    {
      title: "Code Generation Patterns",
      description: "Efficient code generation strategies",
      category: "Code",
      difficulty: "Intermediate",
      readTime: "10 min"
    }
  ];

  const apiReference = [
    {
      title: "Chat API",
      description: "Endpoints and parameters for conversational AI",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Image API",
      description: "Generate stunning images with various parameters",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Video API",
      description: "Create videos from text prompts",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Code API",
      description: "Generate code in multiple programming languages",
      icon: <FileText className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50/80 via-cyan-50/60 to-blue-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground variant="coding" intensity="medium" />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 text-sky-600 dark:text-sky-400 text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg">
              <Book size={16} />
              <span>Documentation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
              Build with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500">
                integen AI
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed mb-8">
              Everything you need to integrate our powerful AI capabilities into your applications. From quick start guides to comprehensive API documentation.
            </p>

            {/* Quick Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Getting Started */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Getting Started
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gettingStarted.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/30 dark:border-slate-700/30 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-3 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="space-y-3">
                    {item.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-100 dark:bg-slate-700 flex items-center justify-center text-sky-600 dark:text-sky-400 text-sm font-medium">
                          {stepIndex + 1}
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guides Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Implementation Guides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white group-hover:scale-110 transition-transform duration-300">
                        <Play size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{guide.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-xs font-medium">
                      {guide.category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                      {guide.difficulty}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{guide.readTime}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* API Reference Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                API Reference
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Comprehensive API documentation with examples and live demos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiReference.map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {api.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{api.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{api.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="w-6 h-6 text-sky-500" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Need Help?</h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our community and support team are here to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Code size={20} />
                  View Examples
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white font-semibold rounded-2xl border border-slate-200/30 dark:border-slate-700/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  Contact Support
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}