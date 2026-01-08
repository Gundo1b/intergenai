import React from 'react';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { TextGenerateEffect } from '../components/TextGenerateEffect';

const UseCasesPage: React.FC = () => {
  const words = "Use Cases";

  const items = [
    {
      title: "Content Creation",
      description: "Generate high-quality articles, blog posts, and other written content with ease.",
      header: <img src="/public/images/creators-designers.png" alt="Content Creation" className="w-full h-full object-cover rounded-xl" />,
    },
    {
      title: "Code Generation",
      description: "Accelerate your development process with AI-powered code generation and autocompletion.",
      header: <img src="/public/images/developers-engineers.png" alt="Code Generation" className="w-full h-full object-cover rounded-xl" />,
    },
    {
      title: "Image & Video Generation",
      description: "Create stunning visuals, from logos to promotional videos, in a fraction of the time.",
      header: <img src="/public/images/enterprise.png" alt="Image & Video Generation" className="w-full h-full object-cover rounded-xl" />,
    },
    {
      title: "Custom Chatbots",
      description: "Build intelligent and engaging chatbots for customer support, lead generation, and more.",
      header: <img src="/public/images/startups-teams.png" alt="Custom Chatbots" className="w-full h-full object-cover rounded-xl" />,
    },
    {
        title: "Students & Learners",
        description: "Get unstuck and learn faster with an AI-powered tutor that can explain concepts and help with assignments.",
        header: <img src="/public/images/students-learners.png" alt="Students & Learners" className="w-full h-full object-cover rounded-xl" />,
      },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-black">
      <TextGenerateEffect words={words} className="text-4xl font-bold text-center text-black dark:text-white" />
      <BentoGrid className="mt-8">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default UseCasesPage;
