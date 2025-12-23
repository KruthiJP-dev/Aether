
import React from 'react';

const ArchBlock: React.FC<{ title: string; tech: string; children: React.ReactNode; className?: string }> = ({ title, tech, children, className = '' }) => (
    <div className={`bg-base-200 p-4 rounded-lg border border-base-300 ${className}`}>
        <h3 className="font-bold text-brand-secondary">{title}</h3>
        <p className="text-xs text-text-secondary/70 mb-2">{tech}</p>
        <div className="text-sm text-text-secondary">{children}</div>
    </div>
);

const Connector: React.FC<{ orientation: 'vertical' | 'horizontal', className?: string }> = ({ orientation, className='' }) => (
  <div className={`flex justify-center items-center ${className}`}>
    <div className={`${orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full'} bg-base-300`}></div>
  </div>
);


const TechnicalArchitecture: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-text-primary mb-2">Technical Architecture</h1>
            <p className="text-lg text-text-secondary mb-8">Engineered for speed, scalability, and real-time performance.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Frontend */}
                <ArchBlock title="Frontend" tech="React, TypeScript, WebAssembly">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Rendering:</strong> React 18 with Vite for a blazing fast dev experience.</li>
                        <li><strong>Canvas:</strong> A custom WebGL/WASM renderer for 60fps performance, even with complex designs.</li>
                        <li><strong>State:</strong> Zustand for simple, scalable global state management.</li>
                    </ul>
                </ArchBlock>

                <Connector orientation="vertical" className="hidden md:flex" />

                {/* Backend */}
                <ArchBlock title="Backend Services" tech="Microservices: Go, Rust, Node.js">
                     <ul className="list-disc list-inside space-y-1">
                        <li><strong>Real-time API:</strong> Go services with WebSockets & CRDTs for collaborative editing.</li>
                        <li><strong>AI Orchestration:</strong> Node.js service to manage calls to Gemini and other models.</li>
                        <li><strong>Code Generation:</strong> Rust-based service for high-performance, accurate code transpilation.</li>
                    </ul>
                </ArchBlock>
            </div>
            
            <Connector orientation="vertical" className="h-6 mx-auto md:w-1/3" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                 {/* Middle Section */}
                <div className="col-span-1 md:col-start-2">
                    <ArchBlock title="Global Infrastructure" tech="Cloudflare Workers, Vercel Edge">
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>API Gateway:</strong> Cloudflare Workers for routing, auth, and caching at the edge.</li>
                            <li><strong>Asset Delivery:</strong> Global CDN for instant loading of projects and components.</li>
                            <li><strong>Serverless Functions:</strong> For scalable, on-demand compute needs like exports.</li>
                        </ul>
                    </ArchBlock>
                </div>
            </div>

            <Connector orientation="vertical" className="h-6 mx-auto md:w-1/3" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Data & AI */}
                <ArchBlock title="Data Layer" tech="PostgreSQL, Redis, Vector DB">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Primary DB:</strong> PostgreSQL with Supabase for robust relational data and auth.</li>
                        <li><strong>Caching:</strong> Redis for session data and real-time cursors.</li>
                        <li><strong>Vector DB:</strong> For semantic search of components and AI-powered design suggestions.</li>
                    </ul>
                </ArchBlock>
                <Connector orientation="vertical" className="hidden md:flex" />
                 <ArchBlock title="AI Integration" tech="Google Gemini API">
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Generative UI:</strong> `gemini-3-pro-preview` for complex text-to-UI tasks.</li>
                        <li><strong>Image Generation:</strong> `gemini-3-pro-image-preview` for in-canvas asset creation.</li>
                        <li><strong>Code & Copy:</strong> `gemini-3-flash-preview` for fast code generation and copywriting.</li>
                    </ul>
                </ArchBlock>
            </div>
        </div>
    );
};

export default TechnicalArchitecture;
