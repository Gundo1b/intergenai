import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, PenTool, BrainCircuit, Rocket, Shield } from "lucide-react";
import { Theme } from '../types';

const useCases = [
  {
    id: "creative",
    number: "01",
    icon: PenTool,
    label: "Creative",
    title: "Creators & Designers",
    description: "Storyboard campaigns, generate moodboards, and iterate on visuals in a unified workspace.",
    longDescription: "Integen empowers designers to translate creativity into tangible assets at unprecedented speed. The AI-powered canvas understands your intent, offering real-time suggestions for layouts, color palettes, and typography. Generate dozens of variations from a single concept, create stunning moodboards from a simple text prompt, and maintain a consistent design system across all your projects effortlessly.",
    gradient: "bg-gradient-to-br from-[#64E1FF] to-[#009DFF]",
    accent: "text-[#64E1FF]",
  },
  {
    id: "education",
    number: "02",
    icon: BrainCircuit,
    label: "Education",
    title: "Students & Learners",
    description: "Get deep explanations, summarize complex topics, and create multimodal study guides.",
    longDescription: "Navigate the world of academic research with an intelligent assistant. Integen can ingest and summarize dense papers, highlighting key findings and methodologies. Ask complex questions and receive detailed, source-backed explanations. Create multimodal study guides that combine text, diagrams, and code snippets to deepen your understanding of any topic.",
    gradient: "bg-gradient-to-br from-[#64E1FF] to-[#009DFF]",
    accent: "text-[#64E1FF]",
  },
  {
    id: "engineering",
    number: "03",
    icon: Code,
    label: "Engineering",
    title: "Developers & Engineers",
    description: "Generate boilerplate, refactor legacy code, and debug with context-aware AI assistance.",
    longDescription: "Stop wrestling with boilerplate and repetitive tasks. Integen acts as your AI pair programmer, generating clean, efficient code in any language. It helps you debug complex issues by providing contextual analysis, refactors legacy codebases into modern standards, and writes comprehensive unit tests, freeing you up to solve the bigger problems.",
    gradient: "bg-gradient-to-br from-[#64E1FF] to-[#009DFF]",
    accent: "text-[#64E1FF]",
  },
  {
    id: "business",
    number: "04",
    icon: Rocket,
    label: "Business",
    title: "Startups & Teams",
    description: "Ship products faster with shared workspaces and unified tools for the whole team.",
    longDescription: "In a startup, speed is everything. Integen provides a unified workspace where design, development, and product teams can collaborate in real-time. From initial brainstorming with AI to generating marketing copy and building prototypes, the entire product lifecycle is accelerated, helping you get to market faster than ever.",
    gradient: "bg-gradient-to-br from-[#64E1FF] to-[#009DFF]",
    accent: "text-[#64E1FF]",
  },
  {
    id: "enterprise",
    number: "05",
    icon: Shield,
    label: "Enterprise",
    title: "Enterprise",
    description: "Secure, compliant AI integration with custom workflows and role-based access control.",
    longDescription: "Integrate the power of AI into your enterprise workflow with confidence. Integen offers robust security, data privacy, and compliance features. Build custom AI workflows tailored to your specific needs, manage access with granular role-based controls, and deploy a powerful, reliable AI partner across your entire organization to drive innovation at scale.",
    gradient: "bg-gradient-to-br from-[#64E1FF] to-[#009DFF]",
    accent: "text-[#64E1FF]",
  },
];

export const UseCases = ({ theme }: { theme: Theme }) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section className={`py-12 md:py-16 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent mb-6 leading-tight ${theme === 'light' ? 'bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800' : 'bg-gradient-to-r from-white via-gray-200 to-white'}`}>
            Built for every workflow
          </h1>
          <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto`}>
            Whether you're writing code, designing assets, or learning a new skill, Integen adapts to your workflow.
          </p>
        </div>

        <StyledWrapper theme={theme}>
          <div className="container">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              const rotations = [-15, 5, 25, -10, 15];
              const rotation = rotations[index % rotations.length];
              
              return (
                <motion.div
                  key={useCase.id}
                  data-text={useCase.label}
                  style={{ '--r': rotation } as React.CSSProperties}
                  className="glass"
                  onClick={() => setExpandedCard(expandedCard === useCase.id ? null : useCase.id)}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 40,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="glass-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.8 }}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                      <IconComponent className="w-20 h-20 mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-base text-center px-2">{useCase.description}</p>
                    
                    {expandedCard === useCase.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="mt-4 text-xs px-2"
                      >
                        {useCase.longDescription}
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </StyledWrapper>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div<{ theme: Theme }>`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px 10px;
  }

  .container .glass {
    position: relative;
    width: 280px;
    height: 320px;
    background: ${props => props.theme === 'light' ? 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.7))' : 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))'};
    border: 1px solid ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.2)'};
    box-shadow: ${props => props.theme === 'light' ? '0 8px 32px rgba(0, 0, 0, 0.1)' : '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 16px;
    margin: 0 -50px;
    backdrop-filter: blur(10px) saturate(150%);
    transform: rotate(calc(var(--r) * 1deg));
    cursor: pointer;
    overflow: hidden;
    color: ${props => props.theme === 'light' ? '#000' : '#fff'};

    .glass-content h3 {
      color: ${props => props.theme === 'light' ? '#000' : '#fff'};
    }

    .glass-content p {
      color: ${props => props.theme === 'light' ? '#333' : 'rgba(255, 255, 255, 0.8)'};
    }

    .glass-content .text-xs {
        color: ${props => props.theme === 'light' ? '#666' : 'rgba(255, 255, 255, 0.7)'};
    }
  }

  .container:hover .glass {
    transform: rotate(0deg) scale(1.02);
    margin: 0 12px;
    box-shadow: ${props => props.theme === 'light' ? '0 12px 40px rgba(0, 0, 0, 0.15)' : '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset, 0 0 60px rgba(100, 225, 255, 0.2)'};
  }

  .container .glass:hover {
    transform: rotate(0deg) scale(1.05) !important;
    box-shadow: ${props => props.theme === 'light' ? '0 16px 48px rgba(0, 0, 0, 0.2)' : '0 16px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.3) inset, 0 0 80px rgba(100, 225, 255, 0.3)'};
    border-color: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)'};
  }

  .container .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme === 'light' ? '#4c4f69' : '#fff'};
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .container .glass .glass-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    height: calc(100% - 50px);
    text-align: center;
    transition: all 0.8s ease;
  }

  @media (max-width: 768px) {
    .container {
      gap: 10px;
      padding: 15px 5px;
    }

    .container .glass {
      width: 220px;
      height: 260px;
      margin: 0 -35px;
    }

    .container:hover .glass {
      margin: 0 8px;
      transform: rotate(0deg) scale(1.02);
    }
  }
`;