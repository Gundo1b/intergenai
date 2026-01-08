import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Globe,
  Users,
  Headphones,
  Calendar,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Sparkles,
  Building
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50/80 via-cyan-50/60 to-blue-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-cyan-100/30 to-blue-100/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <motion.div
            className="absolute inset-0 opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-200/30 text-sky-600 dark:text-sky-400 text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              
              <span>Get in Touch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display text-slate-900 dark:text-white mb-8 leading-tight">
              Let's Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500">
                Something Amazing
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
              Ready to transform your ideas with AI? We're here to help you get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent dark:via-cyan-500/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-slate-50/90 to-sky-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-200/30 dark:border-slate-700/30">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Send us a message
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Fill out the form below and we'll get back to you.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all duration-300">
                      <option>General Inquiry</option>
                      <option>Partnership Opportunities</option>
                      <option>Technical Support</option>
                      <option>Sales Questions</option>
                      <option>Press & Media</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or question..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send size={20} />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Office Location */}
              <div className="bg-gradient-to-br from-slate-50/90 to-sky-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/30 dark:border-slate-700/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 p-3">
                    <Building className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Our Offices
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Integen AI (Head Office)</p>
                      <p className="text-slate-600 dark:text-slate-300">140 West Street</p>
                      <p className="text-slate-600 dark:text-slate-300">Sandton, Johannesburg 2196</p>
                      <p className="text-slate-600 dark:text-slate-300">South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Integen AI</p>
                      <p className="text-slate-600 dark:text-slate-300">28 Geary Street</p>
                      <p className="text-slate-600 dark:text-slate-300">San Francisco, CA 94109, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <p className="text-slate-600 dark:text-slate-300">hello@integenai.com</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-slate-50/90 to-cyan-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/30 dark:border-slate-700/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-3">
                    <Headphones className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Response Times
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    { type: "General Inquiries", time: "Within 48 hours" },
                    { type: "Technical Support", time: "Within 48 hours" },
                    { type: "Sales Questions", time: "Within 48 hours" },
                    { type: "Emergency Issues", time: "Within 24 hours" }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.type} 
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-slate-600 dark:text-slate-300">{item.type}</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-slate-50/90 to-blue-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/30 dark:border-slate-700/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 p-3">
                    <Globe className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Follow Us
                  </h3>
                </div>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
                    { icon: Github, href: "#", color: "hover:text-slate-800 dark:hover:text-white" },
                    { icon: Facebook, href: "#", color: "hover:text-blue-700" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 ${social.color} transition-colors duration-300`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white to-transparent rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white to-transparent rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators and developers who are already using Integen to build the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                
                Get Started Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
