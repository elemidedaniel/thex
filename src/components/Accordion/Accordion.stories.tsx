import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { Badge } from '../Badge';

const meta: Meta<typeof Accordion> = {
  title: 'TheX/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Accordion

Smooth height-animated accordion with single and multiple open modes, icons, badges, and three variants.

## AI Prompt
\`\`\`
Build an Accordion component using React, TypeScript, Tailwind CSS and Framer Motion.
Support single and multiple open modes.
Smooth height animation using AnimatePresence.
Rotating arrow indicator. Icon and badge support per item.
Variants: flat, glass, separated.
Disabled item support. Dark theme with cyan accent.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const faqItems = [
  {
    id: '1',
    title: 'What is TheX component library?',
    content: 'TheX is a production-grade React component library built with TypeScript, Tailwind CSS, and Framer Motion. It features 20 beautifully designed components with full accessibility support, animations, and Storybook documentation.',
  },
  {
    id: '2',
    title: 'How do I install TheX in my project?',
    content: 'Install via npm: npm install @thex/core. Then import components directly: import { Button } from "@thex/core". All components are tree-shakeable so you only bundle what you use.',
  },
  {
    id: '3',
    title: 'Is TheX accessible?',
    content: 'Yes. Every component is built on Radix UI primitives with full keyboard navigation, ARIA attributes, and WCAG 2.2 compliance. Each Storybook page includes an accessibility score.',
  },
  {
    id: '4',
    title: 'Can I customize the theme?',
    content: 'Absolutely. TheX uses CSS custom properties and a token system. Override any token to match your brand. Both dark and light themes are supported out of the box.',
    badge: <Badge variant="primary" size="sm">New</Badge>,
  },
  {
    id: '5',
    title: 'This item is disabled',
    content: 'You cannot open this item.',
    disabled: true,
  },
];

export const Default: StoryObj = {
  render: () => (
    <div className="max-w-lg mx-auto p-6" style={{ background: '#0a0a0f' }}>
      <Accordion items={faqItems} defaultOpen={['1']} />
    </div>
  ),
};

export const Multiple: StoryObj = {
  render: () => (
    <div className="max-w-lg mx-auto p-6" style={{ background: '#0a0a0f' }}>
      <Accordion items={faqItems} multiple defaultOpen={['1', '2']} />
    </div>
  ),
};

export const Separated: StoryObj = {
  render: () => (
    <div className="max-w-lg mx-auto p-6" style={{ background: '#0a0a0f' }}>
      <Accordion items={faqItems} variant="separated" defaultOpen={['1']} />
    </div>
  ),
};

export const Glass: StoryObj = {
  render: () => (
    <div className="max-w-lg mx-auto p-6" style={{ background: '#0a0a0f' }}>
      <Accordion items={faqItems} variant="glass" defaultOpen={['1']} />
    </div>
  ),
};

export const WithIcons: StoryObj = {
  render: () => (
    <div className="max-w-lg mx-auto p-6" style={{ background: '#0a0a0f' }}>
      <Accordion
        variant="separated"
        defaultOpen={['1']}
        items={[
          { id: '1', icon: <span>🚀</span>, title: 'Getting Started', content: 'Begin your journey with TheX by installing the package and importing your first component.' },
          { id: '2', icon: <span>🎨</span>, title: 'Theming', content: 'Customize every aspect of TheX using our token system and CSS custom properties.' },
          { id: '3', icon: <span>♿</span>, title: 'Accessibility', content: 'Every component meets WCAG 2.2 standards with full keyboard and screen reader support.' },
          { id: '4', icon: <span>⚡</span>, title: 'Performance', content: 'Tree-shakeable exports ensure you only ship what you use. Zero runtime overhead.' },
        ]}
      />
    </div>
  ),
};