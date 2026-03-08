import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'TheX/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Badge

Status indicators, count badges, and dot indicators with pulse animations.

## AI Prompt
\`\`\`
Build a Badge component using React, TypeScript, Tailwind CSS, Framer Motion and CVA.
Variants: default, primary, success, error, warning, info, glass.
Sizes: sm, md, lg.
Include dot prop with optional pulse animation.
Include count prop with maxCount overflow (99+).
Spring entrance animation.
Dark theme.
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'error', 'warning', 'info', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    pulse: { control: 'boolean' },
    dot: { control: 'boolean' },
    children: { control: 'text' },
    count: { control: 'number' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'Badge' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="glass">Glass</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="error" dot>Offline</Badge>
      <Badge variant="warning" dot>Away</Badge>
      <Badge variant="primary" dot pulse>Live</Badge>
    </div>
  ),
};

export const WithCount: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Badge variant="primary" count={5} />
      <Badge variant="error" count={23} />
      <Badge variant="warning" count={100} maxCount={99} />
      <Badge variant="success" count={0} />
    </div>
  ),
};

export const PulsingLive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Badge variant="success" dot pulse>Live</Badge>
      <Badge variant="primary" dot pulse>Streaming</Badge>
      <Badge variant="error" dot pulse>Recording</Badge>
    </div>
  ),
};