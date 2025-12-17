import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Cpu, CheckCircle2 } from 'lucide-react';
import { Theme } from '../types';

interface AICodingProps {
  theme: Theme;
}





export const AICoding: React.FC<AICodingProps> = ({ theme }) => {



  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };



  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };





  // Features Tab Content

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-bg-dark dark:to-slate-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-brand-start to-brand-end text-transparent bg-clip-text mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Why InterGen AI Code Generator?
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Accelerate your development workflow with AI-powered code generation across multiple programming languages and frameworks.
          </motion.p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Feature 1 */}
          <motion.div 
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="h-14 w-14 bg-brand-start/10 rounded-xl flex items-center justify-center mb-6 text-brand-start"
              variants={iconVariants}
              whileHover="hover"
            >
              <Layers size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Multi-Language Support</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Generate code in JavaScript, Python, Java, C++, TypeScript, HTML, CSS, SQL, and more. Our platform supports all major programming languages and frameworks to fit your development needs.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="h-14 w-14 bg-brand-end/10 rounded-xl flex items-center justify-center mb-6 text-brand-end"
              variants={iconVariants}
              whileHover="hover"
            >
              <Zap size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Intelligent Code Suggestions</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Get context-aware code suggestions that understand your project structure, coding style, and requirements. Our AI models provide relevant, high-quality code snippets that integrate seamlessly.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="h-14 w-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500"
              variants={iconVariants}
              whileHover="hover"
            >
              <Shield size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Code Security & Quality</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              All generated code follows best practices and security guidelines. Our platform includes built-in code analysis to ensure your AI-generated code is secure, efficient, and maintainable.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="h-14 w-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500"
              variants={iconVariants}
              whileHover="hover"
            >
              <Cpu size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Advanced Development Tools</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Access code optimization, debugging assistance, documentation generation, and testing framework integration. Transform your development process with comprehensive AI-powered tools.
            </p>
          </motion.div>
        </motion.div>

        {/* Benefits List */}
        <motion.div 
          className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            The InterGen Code Advantage
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              'Real-time Code Completion',
              'Error Detection & Fixing',
              'Documentation Generation',
              'Unit Test Creation',
              'Code Refactoring',
              'Framework Integration'
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3"
                variants={listItemVariants}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={24} />
                </motion.div>
                <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};