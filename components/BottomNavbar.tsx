import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Search, MessageCircle, Bell, User } from 'lucide-react';
import { Theme } from '../types';

interface BottomNavbarProps {
  theme: Theme;
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export const BottomNavbar: React.FC<BottomNavbarProps> = ({ theme, currentPage = 'home', onNavigate }) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'activity', icon: Bell, label: 'Activity' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  const getIconColor = (id: string) => {
    if (id === currentPage || hoveredIcon === id) {
      return theme === 'light' ? '#009DFF' : '#64E1FF';
    }
    return theme === 'light' ? '#6B7280' : '#9CA3AF';
  };

  const getBgColor = (id: string) => {
    if (id === currentPage) {
      return 'bg-gradient-to-r from-[#64E1FF]/20 to-[#009DFF]/20';
    }
    return 'bg-transparent';
  };

  return (
    <motion.div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md rounded-3xl p-2 backdrop-blur-xl ${
        theme === 'light'
          ? 'bg-white/20 border border-white/30 shadow-2xl shadow-black/10'
          : 'bg-black/20 border border-white/20 shadow-2xl shadow-white/10'
      } z-50 transition-all duration-300`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isSelected = item.id === currentPage;
          const isHovered = hoveredIcon === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              onHoverStart={() => setHoveredIcon(item.id)}
              onHoverEnd={() => setHoveredIcon(null)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-200 ${
                isSelected ? 'rounded-full' : 'rounded-xl'
              } ${getBgColor(item.id)}`}
              style={{
                boxShadow: isSelected || isHovered
                  ? `0 4px 20px rgba(100, 225, 255, 0.3)`
                  : 'none',
              }}
            >
              <motion.div
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                  isSelected ? 'bg-gradient-to-r from-[#64E1FF] to-[#009DFF]' : 'bg-transparent'
                }`}
                animate={{ scale: isSelected ? 1.1 : 1 }}
              >
                <Icon
                  size={24}
                  className={`transition-colors duration-200 ${getIconColor(item.id)}`}
                />
              </motion.div>
              <span
                className={`text-xs font-medium mt-1 ${
                  isSelected ? 'text-[#009DFF]' : theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};
