
// Add React import to use React.ReactNode in a .ts file
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  figmaLink?: string;
  githubLink?: string;
  isInProgress?: boolean;
  isCaseStudy?: boolean; // New flag to differentiate between simple projects and detailed case studies
  role?: string;
  timeline?: string;
  
  // Section 2: Problem Statement
  problemStatement?: {
    context: string;
    users: string;
    impact: string;
  };

  // Section 3: Goals & Success
  goals?: {
    primary: string[];
    successDefinition: string;
    constraints?: string; // Specific constraints field as requested
  };

  // Section 4: Research & Insights
  researchInsights?: {
    summary: string;
    findings: string[];
    assumptions?: string;
  };

  // Section 5: Design Process
  designProcess?: {
    summary: string;
    decisions: string[];
    evolutionImages?: string[]; // Specifically for wireframe -> UI evolution
  };

  // Section 6: Outcome
  finalOutcome?: {
    summary: string;
    features: string[];
    improvements: string;
    liveUrl?: string;
  };
  
  // Section 7: Learnings
  learnings?: string[];
  nextSteps?: string[];

  gallery?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Design' | 'Frontend' | 'Tools';
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface InspirationItem {
  title: string;
  category: string;
  url: string;
}
