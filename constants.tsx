
import React from 'react';
import { Layout, Code, Server, Smartphone, Figma, Layers, Zap, Eye, Target, Infinity } from 'lucide-react';
import { Project, Service, ProcessStep, Skill, InspirationItem } from './types';

export const SERVICES: Service[] = [
  {
    title: 'UI/UX Design',
    description: 'High-fidelity prototypes, user research, and complex user flows.',
    icon: <Figma size={24} />
  },
  {
    title: 'Frontend Development',
    description: 'React, TypeScript, and modern styling libraries.',
    icon: <Code size={24} />
  }
];

export const PRINCIPLES = [
  {
    title: "Precision Engineering",
    desc: "Design is not just how it looks, but how it works at the pixel level. I build systems, not screens.",
    icon: <Target className="text-accent" />
  },
  {
    title: "Emotional Logic",
    desc: "Interfaces should feel intuitive. I use motion and hierarchy to guide users without them even noticing.",
    icon: <Zap className="text-accent" />
  },
  {
    title: "Atomic Scalability",
    desc: "Everything I build is modular. Components are born to grow and adapt to future business needs.",
    icon: <Infinity className="text-accent" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Manufacturing Efficiency - MES Dashboard',
    description: 'A comprehensive Manufacturing Execution System (MES) designed to optimize industrial shop floor operations.',
    category: 'SaaS Dashboard',
    tags: ['React', 'D3.js', 'Figma', 'TypeScript'],
    imageUrl: 'https://images.unsplash.com/photo-1741517669003-94a4cb80f793?auto=format&fit=crop&q=80&w=1200',
    role: 'Lead Product Designer',
    timeline: '4 Months (2023)',
    isInProgress: false,
    isCaseStudy: true,
    
    problemStatement: {
      context: "Factory managers were overwhelmed by raw data streams from thousands of IoT sensors without clear prioritization.",
      users: "Shop floor supervisors and operational leads managing high-output production lines.",
      impact: "Critical equipment failures were often missed in the noise, leading to unplanned downtime costing $50k/hour."
    },
    
    goals: {
      primary: [
        "Reduce Mean Time to Detect (MTTD) anomalies by 30%.",
        "Establish a modular design system for future line expansions.",
        "Simplify the cognitive load for supervisors during 12-hour shifts."
      ],
      successDefinition: "90% accuracy rating of the alert prioritization system during user testing phase.",
      constraints: "Tight 12-week delivery window with legacy SQL database constraints and no mobile-responsive support from the backend team."
    },
    
    researchInsights: {
      summary: "Through on-site ethnography, we identified that users were physically moving between terminals, losing situational awareness.",
      findings: [
        "Visual fatigue from poor contrast ratios in warehouse lighting.",
        "Crucial machinery health data was buried 3 clicks deep.",
        "Shift handover was manual and error-prone."
      ],
      assumptions: "Due to limited direct access to the floor, initial insights were based on supervisor interviews and industry best practices."
    },
    
    designProcess: {
      summary: "I utilized Atomic Design to build a scalable library of status indicators and real-time charts.",
      decisions: [
        "Color System: High-contrast Dark UI for low-light industrial environments.",
        "Navigation: Flat architecture to ensure '3-click' max access to critical metrics.",
        "Components: Large touch targets for gloved users."
      ]
    },
    
    finalOutcome: {
      summary: "A production-ready MES dashboard currently overseeing 3 separate assembly lines.",
      features: ["Real-time anomaly detection", "Predictive maintenance heatmaps", "Automated shift log generation"],
      improvements: "22% reduction in reaction time for mechanical alerts and a 40% increase in supervisor reporting efficiency.",
      liveUrl: "#"
    },
    
    learnings: [
      "Industrial UX requires a different hierarchy than standard SaaS; utility over aesthetics.",
      "Early technical audits of the legacy database saved weeks of rework."
    ],
    nextSteps: [
      "Integration of AI-driven predictive text for shift handover notes.",
      "Tablet-optimized view for mobile supervisors."
    ],
    
    gallery: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551288049-bbda38a5f979?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '101',
    title: 'BioGraphica - Health Data Viz',
    description: 'An AI-powered genomics platform visualizing patient hereditary patterns and disease susceptibility.',
    category: 'HealthTech Platform',
    tags: ['Next.js', 'WebGL', 'Framer Motion', 'UI Design'],
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200',
    role: 'Product Architect',
    timeline: '5 Months (2024)',
    isInProgress: true,
    isCaseStudy: true,
    
    problemStatement: {
      context: "Geneticists struggle with huge genomic datasets that lack visual hierarchy, making it impossible to spot mutations quickly.",
      users: "Clinical Researchers and Laboratory Technicians.",
      impact: "Delayed diagnoses for rare diseases due to 20+ hours of manual data parsing per patient."
    },
    
    goals: {
      primary: [
        "Create an interactive 3D DNA sequence viewer.",
        "Implement a 'Smart Alert' system for mutation clusters.",
        "Enable collaborative research through shared visual state."
      ],
      successDefinition: "Reduction of data parsing time from 20 hours to under 45 minutes.",
      constraints: "Must comply with HIPAA data privacy standards and handle multi-GB dataset streaming over low-bandwidth."
    },
    
    researchInsights: {
      summary: "Interviews with 12 senior geneticists revealed that most errors occurred during manual color-coding of sequences.",
      findings: [
        "Traditional charts fail to show temporal progression of disease.",
        "Users prefer specialized keyboard shortcuts over a mouse-only UI.",
        "Dark UI is essential for long laboratory hours."
      ],
      assumptions: "Research was conducted via remote prototypes as laboratory access was restricted."
    },
    
    designProcess: {
      summary: "The design evolved from 2D spreadsheets to a high-performance WebGL-based visualization engine.",
      decisions: [
        "WebGL Render: Used for fluid interaction with 10k+ data points.",
        "Color Logic: Muted slate tones with high-saturation mutation indicators.",
        "Navigation: Side-bar focus to maximize central data canvas."
      ]
    },
    
    finalOutcome: {
      summary: "Currently in Beta testing with 3 major research universities.",
      features: ["3D Mutation mapping", "Temporal Susceptibility graphs", "AI-assisted variant flagging"],
      improvements: "94% faster mutation detection identified in the first cohort of clinical trials.",
      liveUrl: "#"
    },
    
    learnings: [
      "Scientific tools need high-density data, not whitespace.",
      "Custom WebGL shaders are more performant than SVG for large datasets."
    ],
    nextSteps: [
      "Mobile tablet companion for bed-side consultations.",
      "Integration with public genomic databases for real-time comparison."
    ],
    
    gallery: [
      'https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1631553127988-9d3e8e1694d5?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '2',
    title: 'ekPay App Redesign',
    description: 'Modernizing the digital payment landscape for a national-scale audience.',
    category: 'App Design',
    tags: ['Mobile UX', 'Flutter', 'Figma', 'System Design'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    role: 'UX Architect',
    timeline: '6 Months (2024)',
    isCaseStudy: false,
    problemStatement: {
      context: "National payment app suffering from high bounce rates during final checkout stages.",
      users: "General population with varying degrees of digital literacy.",
      impact: "Significant loss of transaction revenue and user trust in digital banking."
    },
    gallery: [
      'https://images.unsplash.com/photo-1512428559083-a400aee70237?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: '3',
    title: 'PulseTech Innovations',
    description: 'A high-performance e-commerce experience for audiophiles and professional sound engineers.',
    category: 'Boutique E-commerce',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
    role: 'Frontend Developer & Designer',
    timeline: '3 Months (2024)',
    isCaseStudy: false,
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const PROCESS: ProcessStep[] = [
  {
    title: "I'll dive deep into your personal goals and long-term vision",
    description: "Initial consultation, Research, and Define Scope to set the project's objectives and timeline.",
    icon: '01'
  },
  {
    title: "I'll create mockups that bring your brand to life",
    description: "Wireframing, Style Guide creation, and high-fidelity Prototype development for validation.",
    icon: '02'
  },
  {
    title: "Using no-code or high-code tools, I'll construct your site",
    description: "Page construction, Content integration, and Basic SEO Setup for maximum visibility.",
    icon: '03'
  },
  {
    title: "Your site goes live, ready to make an impact",
    description: "Client review, final revisions, and seamless deployment to your production environment.",
    icon: '04'
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    text: "Shahin — I wanted to express my sincere gratitude for your exceptional service. Your professionalism truly impressed me and the results were beyond what we expected.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    text: "Exceptional service from Shahin. Great communication, fast replies, and a truly amazing experience. The design system he built for our startup is flawless.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    text: "He perfectly masters technical delivery. Congratulations Shahin, and see you next order! The speed of development was mind-blowing for such a complex product.",
    rating: 5
  },
  {
    name: "David Miller",
    text: "The technical depth in the React implementation from Shahin exceeded our expectations. A true hybrid of designer and engineer that is hard to find.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    text: "Modern, clean, and highly effective. Our conversion rates spiked after the redesign Shahin implemented. Highly recommended for complex SaaS products.",
    rating: 5
  },
  {
    name: "Ahmed Al-Farsi",
    text: "Shahin's attention to detail is on another level. Every micro-interaction serves a clear purpose. It's rare to find this level of quality in frontend engineering.",
    rating: 5
  },
  {
    name: "Jessica Wu",
    text: "Transformed our legacy dashboard into a high-performance tool. Shahin made the transition seamless, and our supervisors love the new efficiency.",
    rating: 5
  },
  {
    name: "Robert Thompson",
    text: "The architectural review by Shahin was eye-opening. We fixed scalability issues we didn't even know we had. An exceptional partner for any tech venture.",
    rating: 5
  }
];

export const FAQS = [
  { q: "What is your typical project timeline?", a: "Most projects take 3-6 weeks depending on complexity." },
  { q: "Do you offer ongoing maintenance and support?", a: "Yes, I offer monthly maintenance packages." },
  { q: "Can you work with existing brand guidelines?", a: "Absolutely, I specialize in design systems." },
  { q: "How do you handle revisions and feedback?", a: "We typically have 2-3 rounds of structured revisions." }
];

export const INSPIRATION: InspirationItem[] = [
  {
    title: 'Blade Runner 2049',
    category: 'Cinema',
    url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Minimalist Architecture',
    category: 'Structure',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Cyberpunk Aesthetics',
    category: 'Digital Art',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Industrial Design',
    category: 'Tech',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
  }
];
