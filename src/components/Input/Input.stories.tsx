import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'TheX/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Input

A fully featured input component with floating labels, icons, validation states, and password toggle.

## AI Prompt
\`\`\`
Build an Input component using React, TypeScript, Tailwind CSS, Framer Motion and CVA.
Support floating label animation, left and right icons.
States: default, error, success with animated hint messages.
Password type with show/hide toggle.
Sizes: sm, md, lg.
Variants: flat, glass.
Dark theme with cyan focus ring.
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['flat', 'glass'],
    },
    label: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    success: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    floatingLabel: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter text...', label: 'Email' },
  decorators: [(Story) => (
    <div className="w-80 p-6" style={{ background: '#0a0a0f' }}>
      <Story />
    </div>
  )],
};

export const AllStates: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4 p-6" style={{ background: '#0a0a0f' }}>
      <Input label="Default" placeholder="Enter text..." hint="This is a hint message" />
      <Input label="Error" placeholder="Enter email..." error="Please enter a valid email address" />
      <Input label="Success" placeholder="Enter username..." success="Username is available!" />
      <Input label="Disabled" placeholder="Disabled input" disabled />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4 p-6" style={{ background: '#0a0a0f' }}>
      <Input label="Search" placeholder="Search anything..." leftIcon={<span>🔍</span>} />
      <Input label="Email" placeholder="you@example.com" leftIcon={<span>✉️</span>} />
      <Input label="Website" placeholder="https://" rightIcon={<span>🔗</span>} />
    </div>
  ),
};

export const FloatingLabel: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4 p-6" style={{ background: '#0a0a0f' }}>
      <Input floatingLabel label="Email Address" type="email" />
      <Input floatingLabel label="Password" type="password" />
      <Input floatingLabel label="Full Name" />
    </div>
  ),
};

export const Password: Story = {
  args: { type: 'password', label: 'Password', placeholder: 'Enter password...' },
  decorators: [(Story) => (
    <div className="w-80 p-6" style={{ background: '#0a0a0f' }}>
      <Story />
    </div>
  )],
};

export const Sizes: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-4 p-6" style={{ background: '#0a0a0f' }}>
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};