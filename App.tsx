
import React, { useState, useCallback } from 'react';
import { Section } from './types';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { LogoIcon } from './components/icons/LogoIcon';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.UXPhilosophy);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSectionChange = useCallback((section: Section) => {
    setActiveSection(section);
    setIsSidebarOpen(false); // Close sidebar on section change on mobile
  }, []);

  return (
    <div className="flex h-screen bg-base-100 font-sans">
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-base-200/80 backdrop-blur-md transition-transform duration-300 ease-in-out md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>

      <main className="flex-1 flex flex-col md:ml-64 overflow-y-auto">
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-base-100/80 backdrop-blur-md border-b border-base-300 md:hidden">
            <div className="flex items-center space-x-2">
              <LogoIcon className="w-8 h-8 text-brand-primary" />
              <h1 className="text-xl font-bold text-text-primary">Aether</h1>
            </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-text-secondary hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        <div className="flex-1 p-6 sm:p-8 lg:p-12">
          <ContentDisplay activeSection={activeSection} />
        </div>
      </main>
    </div>
  );
};

export default App;
