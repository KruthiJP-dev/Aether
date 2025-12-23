
import React from 'react';

const Differentiation: React.FC = () => {
    const data = [
        {
            feature: 'Core Workflow',
            aether: 'AI-First (Text-to-UI)',
            figma: 'Vector-Based Design',
            framer: 'Visual Web Development',
        },
        {
            feature: 'Primary User',
            aether: 'Designer & Developer Pairs',
            figma: 'Designers',
            framer: 'Designers who code',
        },
        {
            feature: 'Collaboration',
            aether: 'Instant (CRDTs at Edge)',
            figma: 'Real-time (Solid)',
            framer: 'Real-time (Good)',
        },
        {
            feature: 'Responsiveness',
            aether: 'AI-assisted, Mobile-First',
            figma: 'Manual (Auto Layout)',
            framer: 'Manual (Stacks, CSS)',
        },
        {
            feature: 'Code Output',
            aether: 'Production-Grade React/Next.js',
            figma: 'Inspect Panel (CSS snippets)',
            framer: 'Production-Grade React',
        },
        {
            feature: 'Animation',
            aether: 'Native Timeline',
            figma: 'Prototyping (Limited)',
            framer: 'Advanced (Framer Motion)',
        },
        {
            feature: 'Speed & Performance',
            aether: 'WASM Canvas, Edge-first',
            figma: 'Good, can lag on large files',
            framer: 'Good, site performance varies',
        },
    ];

    return (
        <div>
            <h1 className="text-4xl font-extrabold text-text-primary mb-2">Differentiation</h1>
            <p className="text-lg text-text-secondary mb-8">How Aether carves a new category against established leaders.</p>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-base-200 rounded-lg shadow-lg">
                    <thead>
                        <tr className="border-b border-base-300">
                            <th className="p-4 text-left text-sm font-semibold text-text-primary uppercase tracking-wider">Feature</th>
                            <th className="p-4 text-left text-sm font-semibold text-brand-primary uppercase tracking-wider border-l-2 border-brand-primary bg-brand-primary/10">Aether</th>
                            <th className="p-4 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">Figma</th>
                            <th className="p-4 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">Framer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-b border-base-300 last:border-b-0">
                                <td className="p-4 font-medium text-text-primary">{row.feature}</td>
                                <td className="p-4 text-brand-secondary font-semibold border-l-2 border-brand-primary bg-brand-primary/10">{row.aether}</td>
                                <td className="p-4 text-text-secondary">{row.figma}</td>
                                <td className="p-4 text-text-secondary">{row.framer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold text-text-primary mb-4">The Unfair Advantage: A New Paradigm</h2>
                <p className="text-text-secondary">
                    Figma perfected collaborative design. Framer bridged design and code. <strong className="text-text-primary">Aether leaps over both by changing the input mechanism.</strong> 
                    <br/><br/>
                    Instead of manually drawing rectangles and applying styles, you <strong className="text-brand-secondary">declare intent</strong>. This fundamental shift from manual manipulation to AI-driven generation makes Aether exponentially faster for common web structures. We're not just a better tool; we're a new way to build.
                </p>
            </div>
        </div>
    );
};

export default Differentiation;
