import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'TheX/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Spinner

Three loading styles — ring, dots, and pulse — with color variants and optional labels.

## AI Prompt
\`\`\`
Build a Spinner component with React, TypeScript, Tailwind CSS and Framer Motion.
Three variants: ring (SVG animated), dots (bouncing dots), pulse (radiating circle).
Colors: primary, white, success, error, warning.
Sizes: xs, sm, md, lg, xl.
Optional label below spinner.
Dark theme with cyan primary color.
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['ring', 'dots', 'pulse'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'white', 'success', 'error', 'warning'],
    },
    label: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { variant: 'ring', size: 'md', color: 'primary' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8 p-6" style={{ background: '#0a0a0f' }}>
      <Spinner variant="ring" size="lg" label="Ring" />
      <Spinner variant="dots" size="lg" label="Dots" />
      <Spinner variant="pulse" size="lg" label="Pulse" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-6 p-6" style={{ background: '#0a0a0f' }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6 p-6" style={{ background: '#0a0a0f' }}>
      <Spinner color="primary" size="lg" label="Primary" />
      <Spinner color="white" size="lg" label="White" />
      <Spinner color="success" size="lg" label="Success" />
      <Spinner color="error" size="lg" label="Error" />
      <Spinner color="warning" size="lg" label="Warning" />
    </div>
  ),
};

export const WithLabel: Story = {
  args: {
    variant: 'ring',
    size: 'lg',
    color: 'primary',
    label: 'Loading data...',
  },
};