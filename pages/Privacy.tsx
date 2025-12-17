import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  FileText,
  AlertCircle,
  CheckCircle,
  Globe,
  Clock,
  Mail,
  Phone
} from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-cyan-100/30 to-blue-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 text-sky-600 dark:text-sky-400 text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">

              <span>Privacy Policy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6 leading-tight">
              Your Privacy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500">
                Matters
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50/90 to-sky-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/30 dark:border-slate-700/30">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-sky-500" />
              <span className="font-semibold text-slate-900 dark:text-white">Last Updated:</span>
              <span className="text-slate-600 dark:text-slate-300">December 12, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto space-y-12">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50/90 to-sky-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-xl border border-slate-200/30 dark:border-slate-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-3">
                <FileText className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Introduction</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Integen AI Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered platform and services.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              By using our services, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our services.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50/90 to-cyan-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-xl border border-slate-200/30 dark:border-slate-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
                <Database className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Information We Collect</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Personal Information</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Name, email address, and contact information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Account credentials and profile information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Payment and billing information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Usage Data</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Log files, IP addresses, and browser information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>Usage patterns and feature interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>AI prompts and generated content (with your consent)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How We Use Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50/90 to-blue-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-xl border border-slate-200/30 dark:border-slate-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 p-3">
                <UserCheck className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How We Use Your Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Provide and maintain our AI services",
                "Process transactions and send related information",
                "Send technical notices and support messages",
                "Communicate about products, services, and events",
                "Improve our services through analytics and feedback",
                "Ensure security and prevent fraud"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50/90 to-emerald-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-xl border border-slate-200/30 dark:border-slate-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-3">
                <Lock className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Data Security</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-3">
              {[
                "Encryption of data in transit and at rest",
                "Regular security audits and assessments",
                "Access controls and authentication systems",
                "Secure data storage and backup procedures",
                "Employee training on data protection practices"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50/90 to-purple-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-xl border border-slate-200/30 dark:border-slate-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 p-3">
                <Eye className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Your Privacy Rights</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Right to access your personal data",
                "Right to rectify inaccurate information",
                "Right to erase your personal data",
                "Right to restrict processing",
                "Right to data portability",
                "Right to object to processing"
              ].map((right, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50/50 dark:bg-slate-700/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300">{right}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50/90 to-orange-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-xl border border-slate-200/30 dark:border-slate-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-sky-500 p-3">
                <Mail className="w-full h-full text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Us</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">privacy@integen.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">123 Innovation Drive, Suite 100, San Francisco, CA 94107</span>
              </div>
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 rounded-3xl p-8 lg:p-10 xl:p-12 2xl:p-16"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Important Notice</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  This Privacy Policy may be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}