import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  CheckCircle,
  Users,
  Shield,
  Clock,
  Mail,
  Phone,
  Globe,
  Award,
  Target,
  Zap,
  Sparkles,
  ArrowRight,
  Lock,
  Eye
} from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50/80 via-cyan-50/60 to-blue-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-cyan-100/30 to-blue-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-500/20 border border-sky-200/50 text-sky-600 dark:text-sky-400 text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
             
              <span>Terms of Service</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight">
              Terms &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500">
                Conditions
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
              Please read these terms carefully before using our AI-powered platform and services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-sky-50/95 to-cyan-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-sky-200/30 dark:border-slate-700/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-3">
                <Clock className="w-full h-full text-white" />
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white text-lg">Last Updated:</span>
                <span className="text-slate-600 dark:text-slate-300 text-lg ml-2">December 12, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/95 to-sky-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 shadow-lg">
                <FileText className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">Introduction</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              These Terms of Service ("Terms") govern your use of the Integen AI platform and services operated by Integen AI Inc. ("we," "our," or "us").
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the service.
            </p>
          </motion.div>

          {/* Service Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/95 to-cyan-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow-lg">
                <Zap className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">Service Description</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Integen AI provides an integrated platform that allows users to access and utilize various AI models and capabilities including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "AI-powered chat and conversation",
                "Image generation and editing", 
                "Video creation and processing",
                "Code generation and assistance",
                "Content creation and optimization",
                "Data analysis and insights"
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-sky-50/50 to-cyan-50/50 dark:from-slate-700/50 dark:to-slate-800/50 rounded-2xl border border-sky-200/30 dark:border-slate-600/30"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* User Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/95 to-blue-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-blue-500 to-sky-500 p-4 shadow-lg">
                <Users className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">User Accounts</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Account Registration</h3>
                <div className="space-y-4">
                  {[
                    "Provide accurate and complete information",
                    "Maintain confidentiality of credentials", 
                    "Notify us of unauthorized access immediately"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Account Responsibilities</h3>
                <div className="space-y-4">
                  {[
                    "Responsible for all account activity",
                    "Comply with applicable laws and regulations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Acceptable Use */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/95 to-emerald-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-4 shadow-lg">
                <Target className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">Acceptable Use Policy</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service. Prohibited activities include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Generating harmful, offensive, or illegal content",
                "Attempting to reverse engineer our AI models",
                "Using the service to spam or harass others",
                "Violating applicable laws or regulations",
                "Infringing on intellectual property rights",
                "Distributing malware or engaging in cybercrime"
              ].map((prohibition, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50/50 to-orange-50/50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl border border-red-200/30 dark:border-red-800/30"
                >
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{prohibition}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/95 to-purple-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-purple-500 to-cyan-500 p-4 shadow-lg">
                <Award className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">Intellectual Property Rights</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <Lock className="w-6 h-6 text-sky-500" />
                  Our Rights
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  The service and its original content, features, and functionality are and will remain the exclusive property of Integen AI Inc. and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <Eye className="w-6 h-6 text-cyan-500" />
                  Your Content
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  You retain ownership of content you input into our platform. However, by using our service, you grant us a license to use, process, and store your content solely for the purpose of providing and improving our services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/95 to-orange-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-orange-500 to-sky-500 p-4 shadow-lg">
                <Shield className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">Service Availability</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              We strive to provide reliable and continuous service, but we cannot guarantee uninterrupted access. The service may be temporarily unavailable due to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Scheduled maintenance and updates",
                "Technical issues or system failures",
                "Third-party service dependencies", 
                "Force majeure events beyond our control"
              ].map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50/50 to-yellow-50/50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl border border-amber-200/30 dark:border-amber-800/30"
                >
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/95 to-red-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 p-4 shadow-lg">
                <AlertTriangle className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">Limitation of Liability</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              In no event shall Integen AI Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/95 to-indigo-50/90 dark:from-slate-800/95 dark:to-slate-900/90 backdrop-blur-sm rounded-3xl p-10 lg:p-16 shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-500 to-sky-500 p-4 shadow-lg">
                <Mail className="w-full h-full text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white">Contact Information</h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-sky-50/50 to-cyan-50/50 dark:from-slate-700/50 dark:to-slate-800/50 rounded-2xl">
                <Mail className="w-6 h-6 text-sky-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">legal@integen.ai</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-sky-50/50 to-cyan-50/50 dark:from-slate-700/50 dark:to-slate-800/50 rounded-2xl">
                <Phone className="w-6 h-6 text-sky-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-sky-50/50 to-cyan-50/50 dark:from-slate-700/50 dark:to-slate-800/50 rounded-2xl">
                <Globe className="w-6 h-6 text-sky-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-sky-500/20 to-cyan-500/20 border border-sky-200/50 rounded-3xl p-10 lg:p-12 backdrop-blur-sm"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-500 p-4 shadow-lg flex-shrink-0">
                <Sparkles className="w-full h-full text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Important Notice</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  These Terms may be updated from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the service after any such changes constitutes your acceptance of the new Terms.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1 transition-all duration-300"
                >
                  Acknowledge & Continue
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}