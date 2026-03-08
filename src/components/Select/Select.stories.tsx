import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'TheX/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Select

A fully custom select with search, multi-select, grouped options, and animated dropdown.

## AI Prompt
\`\`\`
Build a Select component using React, TypeScript, Tailwind CSS and Framer Motion.
Features: searchable dropdown, multi-select with checkboxes, grouped options,
clearable, animated open/close, custom option icons and descriptions.
Sizes: sm, md, lg. Variants: flat, glass.
Click outside to close. Dark theme with cyan accent.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const frameworks = [
  { value: 'react', label: 'React', icon: <span>⚛️</span>, description: 'A JavaScript library for building UIs' },
  { value: 'vue', label: 'Vue', icon: <span>💚</span>, description: 'The Progressive JavaScript Framework' },
  { value: 'angular', label: 'Angular', icon: <span>🔴</span>, description: 'Platform for building web applications' },
  { value: 'svelte', label: 'Svelte', icon: <span>🧡</span>, description: 'Cybernetically enhanced web apps' },
  { value: 'next', label: 'Next.js', icon: <span>▲</span>, description: 'The React Framework for Production' },
];

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-72 p-6 relative" style={{ background: '#0a0a0f' }}>
        <Select
          label="Framework"
          options={frameworks}
          value={value}
          onChange={(v) => setValue(v as string)}
          placeholder="Select a framework..."
          clearable
        />
      </div>
    );
  },
};

export const Searchable: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-72 p-6 relative" style={{ background: '#0a0a0f' }}>
        <Select
          label="Search Framework"
          options={frameworks}
          value={value}
          onChange={(v) => setValue(v as string)}
          searchable
          clearable
          placeholder="Search frameworks..."
        />
      </div>
    );
  },
};

export const MultiSelect: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div className="w-72 p-6 relative" style={{ background: '#0a0a0f' }}>
        <Select
          label="Frameworks"
          options={frameworks}
          value={value}
          onChange={(v) => setValue(v as string[])}
          multiple
          clearable
          searchable
          placeholder="Select frameworks..."
        />
        {value.length > 0 && (
          <p className="text-gray-500 text-xs mt-2">
            Selected: {value.join(', ')}
          </p>
        )}
      </div>
    );
  },
};

export const Grouped: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-72 p-6 relative" style={{ background: '#0a0a0f' }}>
        <Select
          label="Technology"
          value={value}
          onChange={(v) => setValue(v as string)}
          searchable
          clearable
          placeholder="Select technology..."
          groups={[
            {
              label: 'Frontend',
              options: [
                { value: 'react', label: 'React' },
                { value: 'vue', label: 'Vue' },
                { value: 'svelte', label: 'Svelte' },
              ],
            },
            {
              label: 'Backend',
              options: [
                { value: 'node', label: 'Node.js' },
                { value: 'elixir', label: 'Elixir' },
                { value: 'go', label: 'Go' },
              ],
            },
          ]}
        />
      </div>
    );
  },
};