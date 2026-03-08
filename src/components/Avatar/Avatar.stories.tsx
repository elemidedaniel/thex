import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'TheX/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Avatar

User avatars with image support, initials fallback with auto-generated gradients, status indicators, and group stacking.

## AI Prompt
\`\`\`
Build an Avatar component using React, TypeScript, Tailwind CSS and Framer Motion.
Support image src with error fallback to initials.
Auto-generate gradient background from name.
Status indicator: online, offline, away, busy.
Sizes: xs, sm, md, lg, xl, 2xl.
AvatarGroup component with overlap and overflow count.
Dark theme.
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: 'select',
      options: ['flat', 'primary', 'glass'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { name: 'Daniel Elemide' },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-end gap-4 p-6" style={{ background: '#0a0a0f' }}>
      <Avatar name="Daniel Elemide" size="xs" />
      <Avatar name="Daniel Elemide" size="sm" />
      <Avatar name="Daniel Elemide" size="md" />
      <Avatar name="Daniel Elemide" size="lg" />
      <Avatar name="Daniel Elemide" size="xl" />
      <Avatar name="Daniel Elemide" size="2xl" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-6" style={{ background: '#0a0a0f' }}>
      <Avatar name="Daniel E" status="online" size="lg" />
      <Avatar name="Sarah K" status="offline" size="lg" />
      <Avatar name="John D" status="away" size="lg" />
      <Avatar name="Jane S" status="busy" size="lg" />
    </div>
  ),
};

export const InitialsGradients: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-6" style={{ background: '#0a0a0f' }}>
      <Avatar name="Daniel Elemide" size="lg" />
      <Avatar name="Sarah Khan" size="lg" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="Emma Wilson" size="lg" />
      <Avatar name="Michael Brown" size="lg" />
      <Avatar name="Olivia Davis" size="lg" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6" style={{ background: '#0a0a0f' }}>
      <AvatarGroup
        size="md"
        avatars={[
          { name: 'Daniel E' },
          { name: 'Sarah K' },
          { name: 'John D' },
          { name: 'Emma W' },
          { name: 'Mike B' },
          { name: 'Olivia D' },
        ]}
        max={4}
      />
      <AvatarGroup
        size="lg"
        avatars={[
          { name: 'Daniel E', status: 'online' },
          { name: 'Sarah K', status: 'away' },
          { name: 'John D', status: 'busy' },
          { name: 'Emma W', status: 'offline' },
        ]}
        max={3}
      />
    </div>
  ),
};