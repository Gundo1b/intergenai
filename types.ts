import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export type Theme = 'light' | 'dark';