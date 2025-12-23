
import React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode; icon: string }> = ({ title, children, icon }) => (
  <div className="bg-base-200 p-6 rounded-lg shadow-lg">
    <div className="flex items-center space-x-4 mb-3">
      <span className="text-3xl">{icon}</span>
      <h3 className="text-xl font-bold text-brand-secondary">{title}</h3>
    </div>
    <p className="text-text-secondary">{children}</p>
  </div>
);

const UXPhilosophy: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-text-primary mb-2">UX Philosophy</h1>
      <p className="text-lg text-text-secondary mb-8">From idea to pixel-perfect reality, instantly.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="AI as a Creative Partner, Not a Tool" icon="🤝">
          Our core belief is that AI should augment, not replace, human creativity. Aether treats AI as a co-pilot, handling tedious tasks like component generation, layout adaptation, and code conversion, freeing designers and developers to focus on high-level strategy and innovation.
        </Card>
        <Card title="Speed as a Feature" icon="⚡️">
          The modern web moves at lightspeed, and so should your tools. Aether is architected from the ground up for instantaneous feedback. From a WebAssembly-powered canvas to real-time collaboration that feels local, every interaction is optimized for zero latency.
        </Card>
        <Card title="Simplicity Through Intelligence" icon="🧠">
          We eliminate complexity by making the tool smarter. Instead of overwhelming users with panels and options, Aether's UI is contextual and predictive. It anticipates your next move, suggests relevant components, and automates design system consistency, creating a seamless, intuitive workflow.
        </Card>
        <Card title="Mobile-First, Natively" icon="📱">
          The majority of web traffic is mobile, yet design tools still default to desktop. Aether inverts this. You design for the smallest screen first, and our AI-powered layout engine intelligently expands your design to larger viewports, ensuring perfect responsiveness without the guesswork.
        {/* FIX: Corrected closing tag from _Card to Card */}
        </Card>
        <Card title="Seamless Handoff is No Handoff" icon="🔄">
          The traditional wall between design and development is a primary source of friction. Aether dissolves it. Since designs are built on a component-based, code-aware foundation, the "handoff" is an export. What you design is what gets rendered, with clean, production-ready code.
        </Card>
        <Card title="Flow, Not Friction" icon="💧">
          Aether is designed to keep you in a state of creative flow. With features like a universal command palette, natural language inputs for generating designs, and an animation-native canvas, we remove the friction that pulls you out of your work and disrupts your focus.
        </Card>
      </div>
    </div>
  );
};

export default UXPhilosophy;