import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'TheX/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Button

The foundation of every interaction in TheX. Six variants, five sizes, loading states, icon support, and spring animations baked in.

## AI Prompt
\`\`\`
Build a Button component using React, TypeScript, Tailwind CSS, Framer Motion and CVA.
Variants: primary, secondary, ghost, danger, success, glass.
Sizes: xs, sm, md, lg, xl.
Include loading state with spinner, leftIcon, rightIcon props.
Add whileTap scale and whileHover y animation.
Dark theme with cyan accent color.
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'success', 'glass'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: 'Click me' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="glass">Glass</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Button leftIcon={<span>🚀</span>}>Launch</Button>
      <Button rightIcon={<span>→</span>}>Continue</Button>
      <Button leftIcon={<span>✓</span>} variant="success">Confirmed</Button>
      <Button leftIcon={<span>✕</span>} variant="danger">Delete</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { children: 'Loading...', loading: true },
};

export const Rounded: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Button rounded="sm">Rounded SM</Button>
      <Button rounded="default">Rounded Default</Button>
      <Button rounded="full">Rounded Full</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 p-6" style={{ background: '#0a0a0f' }}>
      <Button fullWidth>Full Width Button</Button>
    </div>
  ),
};