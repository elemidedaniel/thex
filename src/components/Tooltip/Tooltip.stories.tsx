import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { Badge } from '../Badge';

const meta: Meta<typeof Tooltip> = {
  title: 'TheX/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Tooltip

Smart-positioned tooltips with spring animations, three variants, four placements, and rich content support.

## AI Prompt
\`\`\`
Build a Tooltip component using React, TypeScript, Tailwind CSS and Framer Motion.
Placements: top, bottom, left, right with dynamic positioning.
Variants: dark, light, primary.
Show/hide delay support. Keyboard accessible (focus/blur).
Spring scale animation. Arrow indicator per placement.
Rich content support. Dark theme.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const AllPlacements: StoryObj = {
  render: () => (
    <div
      className="grid grid-cols-2 gap-8 p-16"
      style={{ background: '#0a0a0f' }}
    >
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <div key={placement} className="flex justify-center">
          <Tooltip
            content={`Tooltip on ${placement}`}
            placement={placement}
          >
            <Button variant="secondary" size="sm">
              {placement}
            </Button>
          </Tooltip>
        </div>
      ))}
    </div>
  ),
};

export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex gap-6 p-12" style={{ background: '#0a0a0f' }}>
      <Tooltip content="Dark tooltip" variant="dark">
        <Button variant="secondary">Dark</Button>
      </Tooltip>
      <Tooltip content="Light tooltip" variant="light">
        <Button variant="secondary">Light</Button>
      </Tooltip>
      <Tooltip content="Primary tooltip" variant="primary">
        <Button variant="primary">Primary</Button>
      </Tooltip>
    </div>
  ),
};

export const RichContent: StoryObj = {
  render: () => (
    <div className="flex gap-6 p-12" style={{ background: '#0a0a0f' }}>
      <Tooltip
        content={
          <div className="flex flex-col gap-1">
            <p className="font-bold text-white">Daniel Elemide</p>
            <p className="text-gray-400 text-xs">Full Stack Developer</p>
            <Badge variant="success" dot pulse size="sm">Online</Badge>
          </div>
        }
        maxWidth={180}
      >
        <Button variant="secondary">Hover for profile</Button>
      </Tooltip>

      <Tooltip
        content={
          <div className="flex flex-col gap-1">
            <p className="font-bold text-white">Keyboard shortcut</p>
            <div className="flex gap-1 mt-1">
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">⌘</kbd>
              <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">K</kbd>
            </div>
          </div>
        }
        maxWidth={160}
      >
        <Button variant="primary">Rich tooltip</Button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <div className="flex gap-6 p-12" style={{ background: '#0a0a0f' }}>
      <Tooltip content="This works!" disabled={false}>
        <Button variant="primary">Enabled</Button>
      </Tooltip>
      <Tooltip content="This is disabled" disabled>
        <Button variant="ghost">Disabled tooltip</Button>
      </Tooltip>
    </div>
  ),
};