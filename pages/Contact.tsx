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
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full blur-3xl"></div>
        </div>
        
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

      {/* Contact Information Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50/80 to-sky-50/60 dark:from-slate-800 dark:to-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent dark:via-sky-500/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
              How Can We Help?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
              Multiple ways to reach our team - choose what works best for you
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email Us",
                info: "hello@integen.ai",
                description: "Send us an email anytime",
                color: "from-sky-500 to-cyan-500"
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                description: "Mon-Fri from 8am to 5pm PST",
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "San Francisco, CA",
                description: "123 Innovation Drive, Suite 100",
                color: "from-blue-500 to-sky-500"
              },
              {
                icon: Clock,
                title: "Business Hours",
                info: "Mon-Fri: 8am-5pm PST",
                description: "Weekend support available",
                color: "from-sky-500 to-cyan-500"
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-50/90 to-sky-50/80 dark:from-slate-800/90 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-200/30 dark:border-slate-700/30 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2 transition-all duration-300 h-full text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${contact.color} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <contact.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {contact.title}
                  </h3>
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {contact.info}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {contact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
                    Fill out the form below and we'll get back to you within 24 hours.
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
                    Our Headquarters
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Integen AI Inc.</p>
                      <p className="text-slate-600 dark:text-slate-300">123 Innovation Drive, Suite 100</p>
                      <p className="text-slate-600 dark:text-slate-300">San Francisco, CA 94107</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <p className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <p className="text-slate-600 dark:text-slate-300">hello@integen.ai</p>
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
                    { type: "General Inquiries", time: "Within 24 hours" },
                    { type: "Technical Support", time: "Within 4 hours" },
                    { type: "Sales Questions", time: "Within 2 hours" },
                    { type: "Emergency Issues", time: "Within 1 hour" }
                  ].map((item, index) => (
                    <div key={item.type} className="flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300">{item.type}</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.time}</span>
                      </div>
                    </div>
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
                    { icon: Linkedin, color: "hover:text-blue-600" },
                    { icon: Twitter, color: "hover:text-sky-500" },
                    { icon: Github, color: "hover:text-slate-800 dark:hover:text-white" },
                    { icon: Facebook, color: "hover:text-blue-700" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1 }}
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white to-transparent rounded-full blur-3xl"></div>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-sky-600 font-bold text-lg rounded-2xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar size={24} />
                Schedule a call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/30 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                
                get started now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
