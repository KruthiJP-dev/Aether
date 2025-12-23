
import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
  <div className="border-l-4 border-brand-primary bg-base-200 p-6 rounded-r-lg shadow-md">
    <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
    <p className="text-text-secondary">{description}</p>
  </div>
);

const CoreFeatures: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-text-primary mb-2">Core Features</h1>
      <p className="text-lg text-text-secondary mb-8">The building blocks of the next generation of digital creation.</p>
      
      <div className="my-8 p-6 bg-base-200 rounded-lg border border-brand-primary/50 shadow-lg">
        <label htmlFor="ui-prompt" className="block text-lg font-semibold text-text-primary mb-3">
          Describe your UI:
        </label>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            id="ui-prompt"
            type="text"
            placeholder='e.g., "A responsive pricing table with three tiers"'
            className="flex-grow bg-base-300 border border-base-300 text-text-primary rounded-md px-4 py-3 focus:ring-2 focus:ring-brand-primary focus:outline-none transition"
            aria-label="Describe your UI prompt"
          />
          <button className="bg-brand-primary text-white font-bold py-3 px-6 rounded-md hover:bg-brand-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-200 focus:ring-brand-primary">
            Generate
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <FeatureCard title="Generative UI Canvas">
          Describe UI in plain English and watch as Aether generates fully-functional, styled components and layouts. From "a hero section for a SaaS product" to "a responsive pricing table with three tiers," build at the speed of thought.
        </FeatureCard>
        <FeatureCard title="Real-time Collaborative Engine">
          Powered by CRDTs and a global edge network, collaboration is indistinguishable from working locally. Cursors, comments, and design changes sync instantly, whether your team is in the same room or across continents.
        </FeatureCard>
        <FeatureCard title="Component-Based by Default">
          Every element on the canvas is a reusable component. Our AI Design System Guardian ensures consistency, suggests optimizations, and allows you to propagate changes across your entire project instantly.
        </FeatureCard>
        <FeatureCard title="Animation-Native Timeline">
          Build complex, interactive animations directly on the canvas with a familiar timeline interface. No need for third-party tools. Aether exports production-ready CSS animations or Framer Motion code.
        </FeatureCard>
        <FeatureCard title="One-Click Code Export">
          Go from design to live product in seconds. Export pixel-perfect, clean code to multiple targets. Users can choose between functional React components or static HTML/CSS. The generated code includes Tailwind CSS classes where appropriate, ensuring seamless integration with React, Next.js, or Framer.
        </FeatureCard>
        <FeatureCard title="AI Accessibility Auditor">
          Our integrated AI continuously scans your design for WCAG compliance issues. It suggests improvements for color contrast, alt text, ARIA roles, and keyboard navigation, helping you build inclusive products from the start.
        </FeatureCard>
        <FeatureCard title="Monetization-Ready Components">
          Drag-and-drop components pre-integrated with Stripe and Lemon Squeezy. Build paid newsletters, sell digital products, or gate content without writing a single line of backend code.
        </FeatureCard>
      </div>
    </div>
  );
};

export default CoreFeatures;
