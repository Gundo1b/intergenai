import React from 'react';
import { TextGenerateEffect } from '../components/TextGenerateEffect';

const UseCasesPage: React.FC = () => {
  const words = "Use Cases";
  return (
    <div className="container mx-auto px-4 py-8">
      <TextGenerateEffect words={words} className="text-4xl font-bold text-center" />
      <p className="mt-4">This is the use cases page.</p>
    </div>
  );
};

export default UseCasesPage;
