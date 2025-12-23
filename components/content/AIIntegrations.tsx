
import React from 'react';
import { AIIcon } from '../icons/NavIcons';

const AIFeature: React.FC<{ title: string; model: string; children: React.ReactNode; }> = ({ title, model, children }) => (
    <div className="bg-base-200 p-6 rounded-lg shadow-lg relative overflow-hidden">
        <div className="absolute -top-4 -right-4 text-base-300/50">
            <AIIcon />
        </div>
        <h3 className="text-xl font-bold text-brand-secondary mb-2">{title}</h3>
        <p className="font-mono text-xs bg-base-300 text-brand-secondary inline-block px-2 py-1 rounded mb-3">{model}</p>
        <p className="text-text-secondary">{children}</p>
    </div>
);

const AIIntegrations: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-text-primary mb-2">AI Integrations with Gemini</h1>
            <p className="text-lg text-text-secondary mb-8">Aether is built from the ground up as an AI-native application, leveraging the full power of the Google Gemini family of models.</p>

            <div className="grid md:grid-cols-2 gap-6">
                <AIFeature title="Text-to-UI Generation" model="gemini-3-pro-preview">
                    The core of our generative canvas. Users provide a natural language prompt, and we structure a request to Gemini with a system instruction to generate a JSON representation of a layout tree based on our data models. This JSON is then parsed and rendered directly onto the canvas.
                </AIFeature>

                <AIFeature title="AI Design System Guardian" model="gemini-3-pro-preview">
                    We send anonymized style properties (colors, fonts, spacing) of the user's project to Gemini with a prompt to analyze for inconsistencies, suggest harmonic additions, and check for accessibility issues. The model's structured response is used to provide real-time linting and suggestions in the UI.
                </AIFeature>

                <AIFeature title="In-Canvas Image Generation" model="gemini-3-pro-image-preview">
                    When a user wants to add an image, they can simply describe it. We use `ai.models.generateContent` with a text part containing the prompt. The returned image part's base64 data is then rendered directly, providing instant, context-aware placeholder or final assets without leaving the app.
                </AIFeature>

                <AIFeature title="Automated Copywriting" model="gemini-3-flash-preview">
                    For text elements, a user can trigger an "AI Write" action. We send the context (e.g., "button CTA," "hero headline") and brand voice guidelines to Gemini. The fast response from Flash allows us to provide multiple options for headlines, body text, and microcopy instantly.
                </AIFeature>

                <AIFeature title="Intelligent Component Search" model="Vector DB + Gemini Embeddings">
                    We use Gemini's embedding models to create vector representations of user-created components. When a user searches for a component, we embed their query and perform a semantic search against the vector database, allowing them to find components by describing their function, not just their name.
                </AIFeature>
                
                <AIFeature title="Code Export Optimization" model="gemini-3-pro-preview">
                     During the export process, the initially generated code is passed to Gemini with a prompt like "Refactor this React component for readability, performance, and adherence to modern best practices." This ensures the final output is not just functional, but truly production-grade.
                </AIFeature>
            </div>
        </div>
    );
};

export default AIIntegrations;
