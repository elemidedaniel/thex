import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'TheX/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Checkbox

An animated checkbox with indeterminate state, color variants, label support, and a group component.

## AI Prompt
\`\`\`
Build a Checkbox component using React, TypeScript, Tailwind CSS and Framer Motion.
Spring scale animation on check/uncheck.
Indeterminate state support.
Colors: primary, success, warning, danger with glow effect.
Sizes: sm, md, lg.
Label and description support. CheckboxGroup for multiple options.
ARIA role="checkbox" with aria-checked="mixed" for indeterminate.
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
        <Checkbox checked={checked} onChange={setChecked} label="Accept terms" />
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
          <Checkbox
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
      <div className="flex flex-col gap-4 p-6" style={{ background: '#0a0a0f' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Checkbox
            key={size}
            size={size}
            checked={states[size]}
            onChange={(v) => setStates((s) => ({ ...s, [size]: v }))}
            label={`Size ${size.toUpperCase()}`}
          />
        ))}
      </div>
    );
  },
};

export const Indeterminate: StoryObj = {
  render: () => {
    const [items, setItems] = useState([
      { label: 'React', checked: true },
      { label: 'TypeScript', checked: false },
      { label: 'Tailwind', checked: true },
    ]);

    const allChecked = items.every((i) => i.checked);
    const someChecked = items.some((i) => i.checked);

    return (
      <div className="flex flex-col gap-3 p-6" style={{ background: '#0a0a0f' }}>
        <Checkbox
          checked={allChecked}
          indeterminate={someChecked && !allChecked}
          onChange={(v) => setItems((prev) => prev.map((i) => ({ ...i, checked: v })))}
          label="Select All"
          size="md"
        />
        <div className="pl-6 flex flex-col gap-3 border-l border-white/8">
          {items.map((item, index) => (
            <Checkbox
              key={item.label}
              checked={item.checked}
              onChange={(v) => setItems((prev) =>
                prev.map((i, idx) => idx === index ? { ...i, checked: v } : i)
              )}
              label={item.label}
            />
          ))}
        </div>
      </div>
    );
  },
};

export const Group: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string[]>(['react', 'typescript']);
    return (
      <div className="p-6" style={{ background: '#0a0a0f' }}>
        <CheckboxGroup
          value={value}
          onChange={setValue}
          options={[
            { value: 'react', label: 'React', description: 'UI component library' },
            { value: 'typescript', label: 'TypeScript', description: 'Typed JavaScript' },
            { value: 'tailwind', label: 'Tailwind CSS', description: 'Utility-first CSS' },
            { value: 'framer', label: 'Framer Motion', description: 'Animation library' },
            { value: 'disabled', label: 'Disabled Option', disabled: true },
          ]}
        />
        <p className="text-gray-600 text-xs mt-4">
          Selected: {value.join(', ') || 'none'}
        </p>
      </div>
    );
  },
};