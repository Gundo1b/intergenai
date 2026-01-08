import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  MessageSquare,
  Image,
  Video,
  Code,
  DollarSign,
  ChevronRight,
  Home,
} from 'lucide-react';
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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'AI Chat', href: '/ai-chat', icon: MessageSquare },
    { name: 'AI Image', href: '/ai-image', icon: Image },
    { name: 'AI Video', href: '/ai-video', icon: Video },
    { name: 'AI Coding', href: '/ai-coding', icon: Code },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
        <div className="mx-auto max-w-7xl px-3 pointer-events-auto">
          <div
            className={`
              h-14 flex items-center justify-between rounded-full px-4
              backdrop-blur-xl border transition-all duration-300
              ${theme === 'light'
                ? 'bg-white/80 border-black/5 shadow-sm'
                : 'bg-slate-900/85 border-white/10'
              }
              ${isScrolled ? 'scale-[0.98]' : ''}
            `}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[120px] h-auto object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <nav
              className={`hidden md:flex items-center gap-8 text-sm ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition hover:opacity-80 ${
                    theme === 'light' ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition ${
                  theme === 'light'
                    ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <Link
                to="/login"
                className="px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF] text-white shadow hover:scale-105 transition"
              >
                Login
              </Link>

              <Link
                to="/pricing"
                className={`px-4 py-1.5 text-sm font-medium rounded-full border transition ${
                  theme === 'light'
                    ? 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                    : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
                }`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden p-2 rounded-full transition ${
                theme === 'light'
                  ? 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
              }`}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className={`fixed top-0 right-0 h-full w-full max-w-xs z-50 p-5 ${
                theme === 'light' ? 'bg-white text-slate-800' : 'bg-slate-950 text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <img src="/logo.png" className="w-24" />
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition ${
                      theme === 'light'
                        ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                  </button>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2 rounded-full transition ${
                      theme === 'light'
                        ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-lg transition ${
                      theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <link.icon size={18} />
                      {link.name}
                    </span>
                    <ChevronRight size={16} />
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to="/login"
                  className="w-full text-center px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-[#64E1FF] to-[#009DFF] text-white shadow hover:scale-105 transition"
                >
                  Login
                </Link>

                <Link
                  to="/pricing"
                  className={`w-full text-center px-4 py-2 text-sm font-medium rounded-full border transition ${
                    theme === 'light'
                      ? 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                      : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
