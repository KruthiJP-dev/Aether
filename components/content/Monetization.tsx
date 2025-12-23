
import React from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const PricingTier: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}> = ({ name, price, description, features, isFeatured = false }) => (
  <div className={`border rounded-lg p-6 flex flex-col ${isFeatured ? 'border-brand-primary bg-base-200' : 'border-base-300 bg-base-200/50'}`}>
    <h3 className="text-2xl font-bold text-text-primary">{name}</h3>
    <p className="mt-2 text-text-secondary">{description}</p>
    <div className="mt-4 mb-6">
      <span className="text-5xl font-extrabold text-text-primary">{price}</span>
      <span className="text-text-secondary">/ month</span>
    </div>
    <ul className="space-y-3 flex-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <CheckIcon />
          <span className="text-text-secondary">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition-transform duration-200 hover:scale-105 ${isFeatured ? 'bg-brand-primary text-white' : 'bg-base-300 text-text-primary hover:bg-brand-primary/80'}`}>
      {isFeatured ? 'Start Free Trial' : 'Get Started'}
    </button>
  </div>
);

const Monetization: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-text-primary mb-2">Monetization Strategy</h1>
      <p className="text-lg text-text-secondary mb-8">Freemium model to drive adoption, with value-based tiers for professionals and teams.</p>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <PricingTier
          name="Hobby"
          price="$0"
          description="For personal projects and learning."
          features={[
            '3 Active Projects',
            '2 Collaborators per Project',
            'Limited AI generations',
            'Standard Component Library',
            'HTML/CSS Export',
          ]}
        />
        <PricingTier
          name="Pro"
          price="$24"
          description="For freelancers and professionals."
          features={[
            'Unlimited Projects',
            '10 Collaborators per Project',
            'Unlimited AI generations',
            'Custom Component Libraries',
            'React & Next.js Export',
            'AI Accessibility Auditor',
          ]}
          isFeatured={true}
        />
        <PricingTier
          name="Team"
          price="$45"
          description="For agencies and organizations."
          features={[
            'All Pro features, plus:',
            'Unlimited Collaborators',
            'Team-wide Design Systems',
            'Advanced Roles & Permissions',
            'Priority Support & Onboarding',
            'Private AI Model Fine-tuning (Add-on)',
          ]}
        />
      </div>
       <div className="mt-12 text-center bg-base-200 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Marketplace & Enterprise</h3>
        <p className="text-text-secondary max-w-3xl mx-auto">
        Beyond subscriptions, we'll launch a marketplace for designers to sell component kits and templates (30% platform fee). An Enterprise plan will offer SSO, on-premise deployment options, and dedicated support for large organizations.
        </p>
      </div>
    </div>
  );
};

export default Monetization;
