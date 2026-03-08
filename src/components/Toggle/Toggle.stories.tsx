import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'TheX/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Toggle

A spring-animated switch with color variants, label and description support, and full keyboard accessibility.

## AI Prompt
\`\`\`
Build a Toggle/Switch component using React, TypeScript, Tailwind CSS and Framer Motion.
Spring animation on the thumb using Framer Motion.
Colors: primary, success, warning, danger with glow effect when on.
Sizes: sm, md, lg.
Support label and description alongside toggle.
Keyboard accessible with Space and Enter keys.
ARIA role="switch" with aria-checked.
Dark theme with cyan primary.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="p-6" style={{ background: '#0a0a0f' }}>
        <Toggle checked={checked} onChange={setChecked} />
      </div>
    );
  },
};

export const AllColors: StoryObj = {
  render: () => {
    const [states, setStates] = useState({
      primary: true,
      success: true,
      warning: true,
      danger: true,
    });
    return (
      <div className="flex flex-col gap-4 p-6" style={{ background: '#0a0a0f' }}>
        {(['primary', 'success', 'warning', 'danger'] as const).map((color) => (
          <Toggle
            key={color}
            color={color}
            checked={states[color]}
            onChange={(v) => setStates((s) => ({ ...s, [color]: v }))}
            label={color.charAt(0).toUpperCase() + color.slice(1)}
          />
        ))}
      </div>
    );
  },
};

export const AllSizes: StoryObj = {
  render: () => {
    const [states, setStates] = useState({ sm: true, md: true, lg: true });
    return (
      <div className="flex items-center gap-6 p-6" style={{ background: '#0a0a0f' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Toggle
            key={size}
            size={size}
            checked={states[size]}
            onChange={(v) => setStates((s) => ({ ...s, [size]: v }))}
          />
        ))}
      </div>
    );
  },
};

export const WithLabels: StoryObj = {
  render: () => {
    const [states, setStates] = useState({
      notifications: true,
      darkMode: true,
      autoSave: false,
      analytics: false,
    });
    return (
      <div className="flex flex-col gap-5 w-72 p-6" style={{ background: '#0a0a0f' }}>
        <Toggle
          checked={states.notifications}
          onChange={(v) => setStates((s) => ({ ...s, notifications: v }))}
          label="Push Notifications"
          description="Receive alerts for price changes"
          color="primary"
        />
        <Toggle
          checked={states.darkMode}
          onChange={(v) => setStates((s) => ({ ...s, darkMode: v }))}
          label="Dark Mode"
          description="Use dark theme across the app"
          color="primary"
        />
        <Toggle
          checked={states.autoSave}
          onChange={(v) => setStates((s) => ({ ...s, autoSave: v }))}
          label="Auto Save"
          description="Automatically save your changes"
          color="success"
        />
        <Toggle
          checked={states.analytics}
          onChange={(v) => setStates((s) => ({ ...s, analytics: v }))}
          label="Analytics"
          description="Share usage data to improve TheX"
          color="warning"
        />
      </div>
    );
  },
};

export const Disabled: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 p-6" style={{ background: '#0a0a0f' }}>
      <Toggle checked={false} disabled label="Disabled Off" />
      <Toggle checked={true} disabled label="Disabled On" color="primary" />
    </div>
  ),
};