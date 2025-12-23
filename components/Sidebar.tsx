
import React from 'react';
import { Section } from '../types';
import { LogoIcon } from './icons/LogoIcon';
import { UXIcon, FeaturesIcon, ArchIcon, DataIcon, AIIcon, MoneyIcon, DiffIcon } from './icons/NavIcons';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navItems = [
  { section: Section.UXPhilosophy, icon: <UXIcon /> },
  { section: Section.CoreFeatures, icon: <FeaturesIcon /> },
  { section: Section.TechnicalArchitecture, icon: <ArchIcon /> },
  { section: Section.DataModels, icon: <DataIcon /> },
  { section: Section.AIIntegrations, icon: <AIIcon /> },
  { section: Section.Monetization, icon: <MoneyIcon /> },
  { section: Section.Differentiation, icon: <DiffIcon /> },
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <div className="flex flex-col h-full text-text-secondary p-4">
      <div className="flex items-center space-x-3 p-4 border-b border-base-300 mb-4">
        <LogoIcon className="w-8 h-8 text-brand-primary" />
        <h1 className="text-2xl font-bold text-text-primary">Aether</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.section}>
              <button
                onClick={() => onSectionChange(item.section)}
                className={`w-full flex items-center space-x-3 p-3 my-1 rounded-lg text-left transition-colors duration-200 ${
                  activeSection === item.section
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'hover:bg-base-300 hover:text-text-primary'
                }`}
              >
                <span className="w-6 h-6">{item.icon}</span>
                <span className="font-medium">{item.section}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 text-xs text-center text-text-secondary/50">
        <p>&copy; {new Date().getFullYear()} Aether Inc.</p>
        <p>A YC S24 Concept</p>
      </div>
    </div>
  );
};

export default Sidebar;
