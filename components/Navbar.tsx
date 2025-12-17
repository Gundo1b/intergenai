import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, MessageSquare, Image, Video, Code, DollarSign, ChevronRight } from 'lucide-react';
import { Theme } from '../types';
import { Link } from 'react-router-dom';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI Chat', href: '/ai-chat', icon: MessageSquare },
    { name: 'AI Image', href: '/ai-image', icon: Image },
    { name: 'AI Video', href: '/ai-video', icon: Video },
    { name: 'AI Coding', href: '/ai-coding', icon: Code },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
  ];

  const lightThemeStyles = {
    boxShadow:
      "0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(0,0,0,0.2), inset -3px -3px 0.5px -3px rgba(0,0,0,0.1), inset 1px 1px 1px -0.5px rgba(0,0,0,0.3), inset -1px -1px 1px -0.5px rgba(0,0,0,0.15), inset 0 0 6px 6px rgba(0,0,0,0.05), inset 0 0 2px 2px rgba(0,0,0,0.02), 0 0 12px rgba(0,0,0,0.1)",
  };

  const darkThemeStyles = {
    boxShadow:
      "0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(255,255,255,0.2), inset -3px -3px 0.5px -3px rgba(255,255,255,0.1), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 6px 6px rgba(255,255,255,0.05), inset 0 0 2px 2px rgba(255,255,255,0.02), 0 0 12px rgba(0,0,0,0.1)",
  };
  
  const menuVariants = {
    hidden: {
      x: '100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };


  return (
    <header className={`sticky top-3 z-50 w-full max-w-7xl mx-auto transition-colors duration-300 ${isScrolled ? 'py-0' : 'py-0'}`}>
      <div className="mx-auto max-w-7xl px-3">
        <div className={`h-14 flex ring-1 rounded-full pr-2.5 pl-2.5 items-center justify-between transition-all duration-300 ${theme === 'light'
          ? 'bg-white/80 backdrop-blur-md ring-black/5 shadow-sm'
          : 'bg-slate-900/90 backdrop-blur-md ring-white/10'
          }`}>
          <div className="flex gap-2 items-center">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="w-[120px] h-auto object-contain py-1" />
            </Link>
          </div>
          <nav className={`hidden md:flex items-center gap-8 text-sm transition-colors duration-300 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`transition font-sans ${theme === 'light' ? 'hover:text-black' : 'hover:text-white'}`}>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 transition-colors ${theme === 'light' ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#64E1FF]/80 to-[#009DFF]/80 text-white shadow-[0_0_8px_-3px_#64E1FF/50] hover:shadow-[0_0_12px_-5px_#64E1FF/60] hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/login'}
            >
              Login
            </button>
            <button
              className={`liquid-glass-button relative inline-flex h-10 cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out text-sm font-medium border rounded-full pr-6 pl-6 shadow-lg backdrop-blur-xl items-center justify-center
                ${theme === 'light'
                  ? 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300'
                  : 'text-white/90 from-white/10 to-white/5 border-white/15 hover:from-white/15 hover:to-white/10'
                }
              `}
              style={theme === 'light' ? lightThemeStyles : darkThemeStyles}
            >
              <div
                className={`absolute inset-0 rounded-full overflow-hidden pointer-events-none
                  ${theme === 'light'
                    ? 'bg-gradient-to-br via-transparent from-black/5 to-black/10'
                    : 'bg-gradient-to-br via-transparent from-white/8 to-white/3'
                  }
                `}
              />
              <span className="relative z-10">Let's get started</span>
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`transition-colors ${theme === 'light' ? 'text-slate-500 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button
              className="group relative inline-flex items-center justify-center rounded-full p-3 transition-all duration-300 hover:bg-white/10 active:scale-95 border border-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] bg-white/5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <div className="relative flex h-4 w-5 flex-col items-center justify-center gap-[5px] overflow-hidden">
                <span className={`h-0.5 w-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF] rounded-full transition-all duration-300`} />
                <span className={`h-0.5 w-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF] rounded-full transition-all duration-300 group-hover:w-3/4`} />
                <span className={`h-0.5 w-full bg-gradient-to-r from-[#009DFF] to-[#64E1FF] rounded-full transition-all duration-300`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-[#090E1A] z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="p-5 flex items-center justify-between border-b border-white/10">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M12 12L22 7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 12V22" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 12L2 7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 17L12 12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 17L12 12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  AI Studio
                </h2>
                <div className='flex items-center gap-2'>
                    <button
                      onClick={toggleTheme}
                      className={`p-2 transition-colors rounded-full ${theme === 'light' ? 'bg-white/10 text-slate-400 hover:text-white' : 'bg-white/10 text-slate-400 hover:text-white'}`}
                      aria-label="Toggle Theme"
                    >
                      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-white transition-colors bg-white/10 rounded-full">
                      <X size={18} />
                    </button>
                </div>
              </div>
              
              <div className="flex-grow p-5 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg text-white/80 hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <div className='flex items-center gap-4'>
                      <link.icon size={20} className="text-slate-400" />
                      <span className="font-medium">{link.name}</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-500 group-hover:translate-x-1 transition-transform"/>
                  </Link>
                ))}
              </div>

              <div className="p-5 border-t border-white/10 flex flex-col gap-4">
                 <button
                  onClick={() => {
                    window.location.href = '/login';
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 rounded-lg text-white/80 hover:bg-white/5 transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg text-white bg-[#1C64F2] hover:bg-[#1C64F2]/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ChevronRight size={16}/>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;