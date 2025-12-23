
import React from 'react';

const CodeBlock: React.FC<{ children: string }> = ({ children }) => (
  <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto">
    <code className="text-sm text-brand-secondary font-mono">{children.trim()}</code>
  </pre>
);

const DataModels: React.FC = () => {
  const projectModel = `
interface Project {
  id: string;
  name: string;
  ownerId: string;
  collaboratorIds: string[];
  pages: Page[];
  designSystemId: string;
  createdAt: Date;
  updatedAt: Date;
}`;

  const layerModel = `
interface Layer {
  id: string;
  type: 'frame' | 'text' | 'image' | 'component';
  name: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  rotation: number;
  styles: Style[];
  children?: Layer[];
  content?: string; // For text layers
  imageUrl?: string; // For image layers
  componentId?: string; // For component instances
}`;

  const styleModel = `
interface Style {
  property: 'color' | 'background' | 'fontSize' | 'fontWeight' | 'borderRadius' | 'boxShadow';
  value: string | number;
  breakpoint: 'base' | 'sm' | 'md' | 'lg' | 'xl';
}`;

  const componentModel = `
interface Component {
  id:string;
  name: string;
  mainLayer: Layer; // The master component definition
  props: { [key: string]: 'string' | 'number' | 'boolean' | 'slot' };
  createdAt: Date;
}`;

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-text-primary mb-2">Data Models</h1>
      <p className="text-lg text-text-secondary mb-8">A simplified view of our core data structures, designed for flexibility and performance.</p>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-3">Project & Page</h3>
          <CodeBlock>{projectModel}</CodeBlock>
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-3">Layer (The Canvas Atom)</h3>
          <CodeBlock>{layerModel}</CodeBlock>
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-3">Style (Responsive Properties)</h3>
          <CodeBlock>{styleModel}</CodeBlock>
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-3">Component (Reusable Logic)</h3>
          <CodeBlock>{componentModel}</CodeBlock>
        </div>
      </div>
    </div>
  );
};

export default DataModels;
