"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Code, Zap, Shield, Sparkles, Brain, Rocket, Users, Lightbulb } from "lucide-react";

const content = [
  {
    title: "AI-Powered Collaboration",
    description:
      "Work seamlessly with your team using advanced AI assistants. Integen enables real-time collaborative editing, intelligent suggestions, and automated workflows that adapt to your team's needs. Boost productivity with AI-driven insights and streamlined communication.",
    content: (
      <motion.div
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 text-white rounded-2xl shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <Users className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Team Synergy</h3>
        </div>
      </motion.div>
    ),
  },
  {
    title: "Real-Time AI Updates",
    description:
      "Experience instant AI-generated content and modifications. Watch as Integen transforms your ideas into polished assets in real-time. From code generation to creative designs, see changes materialize before your eyes with our cutting-edge AI technology.",
    content: (
      <motion.div
        className="flex h-full w-full items-center justify-center text-white rounded-2xl overflow-hidden relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/images.jpeg"
          className="h-full w-full object-cover"
          alt="AI generation demo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <Zap className="w-8 h-8 text-yellow-400" />
        </div>
      </motion.div>
    ),
  },
  {
    title: "Intelligent Version Control",
    description:
      "Never lose track of your work again. Integen's AI-powered version control automatically manages changes, suggests improvements, and maintains a complete history of your projects. Focus on creation while our system handles the complexity of version management.",
    content: (
      <motion.div
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white rounded-2xl shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Smart Protection</h3>
        </div>
      </motion.div>
    ),
  },
  {
    title: "Limitless Creative Potential",
    description:
      "Unlock your creativity with Integen's boundless AI capabilities. From generating novel ideas to refining complex concepts, our platform adapts to your creative process. Whether you're a designer, developer, or innovator, discover new possibilities with AI as your creative partner.",
    content: (
      <motion.div
        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 text-white rounded-2xl shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold">Infinite Inspiration</h3>
        </div>
      </motion.div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="w-full py-4 relative overflow-hidden">
      {/* Enhanced particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + particle.delay,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StickyScroll content={content} />
      </motion.div>
    </div>
  );
}
