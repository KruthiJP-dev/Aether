
import React from 'react';
import { Section } from '../types';
import UXPhilosophy from './content/UXPhilosophy';
import CoreFeatures from './content/CoreFeatures';
import TechnicalArchitecture from './content/TechnicalArchitecture';
import DataModels from './content/DataModels';
import AIIntegrations from './content/AIIntegrations';
import Monetization from './content/Monetization';
import Differentiation from './content/Differentiation';

interface ContentDisplayProps {
  activeSection: Section;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case Section.UXPhilosophy:
        return <UXPhilosophy />;
      case Section.CoreFeatures:
        return <CoreFeatures />;
      case Section.TechnicalArchitecture:
        return <TechnicalArchitecture />;
      case Section.DataModels:
        return <DataModels />;
      case Section.AIIntegrations:
        return <AIIntegrations />;
      case Section.Monetization:
        return <Monetization />;
      case Section.Differentiation:
        return <Differentiation />;
      default:
        return <div>Select a section</div>;
    }
  };

  return <div className="animate-fade-in">{renderContent()}</div>;
};

export default ContentDisplay;
