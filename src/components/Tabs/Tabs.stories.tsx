import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Badge } from '../Badge';
import { Card } from '../Card';

const meta: Meta<typeof Tabs> = {
  title: 'TheX/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Tabs

Animated tabs with underline, pill, and card variants. Supports icons, badges, vertical orientation, and smooth content transitions.

## AI Prompt
\`\`\`
Build a Tabs component using React, TypeScript, Tailwind CSS and Framer Motion.
Variants: underline (animated indicator), pill (sliding background), card (box background).
Horizontal and vertical orientation.
Icon and badge support per tab. Disabled tab support.
AnimatePresence for content transitions.
Dark theme with cyan accent.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const tabContent = (label: string) => (
  <div className="pt-4">
    <Card variant="flat">
      <p className="text-gray-400 text-sm leading-relaxed">
        This is the <span className="text-cyan-400 font-semibold">{label}</span> tab content.
        Each tab animates in smoothly when selected.
      </p>
    </Card>
  </div>
);

const defaultTabs = [
  { id: 'overview', label: 'Overview', icon: <span>📊</span>, content: tabContent('Overview') },
  { id: 'analytics', label: 'Analytics', icon: <span>📈</span>, content: tabContent('Analytics'), badge: <Badge variant="primary" size="sm">New</Badge> },
  { id: 'settings', label: 'Settings', icon: <span>⚙️</span>, content: tabContent('Settings') },
  { id: 'billing', label: 'Billing', icon: <span>💳</span>, content: tabContent('Billing'), disabled: true },
];

export const Underline: StoryObj = {
  render: () => (
    <div className="max-w-lg p-6" style={{ background: '#0a0a0f' }}>
      <Tabs tabs={defaultTabs} variant="underline" defaultTab="overview" />
    </div>
  ),
};

export const Pill: StoryObj = {
  render: () => (
    <div className="max-w-lg p-6" style={{ background: '#0a0a0f' }}>
      <Tabs tabs={defaultTabs} variant="pill" defaultTab="overview" />
    </div>
  ),
};

export const CardVariant: StoryObj = {
  render: () => (
    <div className="max-w-lg p-6" style={{ background: '#0a0a0f' }}>
      <Tabs tabs={defaultTabs} variant="card" defaultTab="overview" />
    </div>
  ),
};

export const Vertical: StoryObj = {
  render: () => (
    <div className="max-w-2xl p-6" style={{ background: '#0a0a0f' }}>
      <Tabs
        tabs={defaultTabs}
        variant="card"
        orientation="vertical"
        defaultTab="overview"
      />
    </div>
  ),
};

export const WithoutIcons: StoryObj = {
  render: () => (
    <div className="max-w-lg p-6" style={{ background: '#0a0a0f' }}>
      <Tabs
        variant="underline"
        defaultTab="tab1"
        tabs={[
          { id: 'tab1', label: 'All', content: tabContent('All') },
          { id: 'tab2', label: 'Active', content: tabContent('Active'), badge: <Badge variant="success" size="sm">12</Badge> },
          { id: 'tab3', label: 'Pending', content: tabContent('Pending'), badge: <Badge variant="warning" size="sm">3</Badge> },
          { id: 'tab4', label: 'Archived', content: tabContent('Archived') },
        ]}
      />
    </div>
  ),
};