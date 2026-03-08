import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Card> = {
  title: 'TheX/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Card

A versatile card component with image support, hover lift effect, glow variants, and flexible slots.

## AI Prompt
\`\`\`
Build a Card component using React, TypeScript, Tailwind CSS and Framer Motion.
Variants: flat, glass, neu, glow.
Sizes: sm, md, lg.
Support image with zoom on hover, header, body, footer slots.
Badge overlay support. Hover lift animation with glow overlay.
Custom glow color prop. Dark theme.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const AllVariants: StoryObj = {
  render: () => (
    <div
      className="grid grid-cols-2 gap-4 p-6"
      style={{ background: '#0a0a0f' }}
    >
      {(['flat', 'glass', 'neu', 'glow'] as const).map((variant) => (
        <Card
          key={variant}
          variant={variant}
          hoverable
          header={
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold capitalize">{variant}</h3>
              <Badge variant="primary" size="sm">{variant}</Badge>
            </div>
          }
          footer={
            <Button size="sm" variant="ghost" fullWidth>
              Learn more →
            </Button>
          }
        >
          <p className="text-gray-500 text-sm leading-relaxed">
            The {variant} variant of TheX Card component. Hover to see the lift effect.
          </p>
        </Card>
      ))}
    </div>
  ),
};

export const ProfileCard: StoryObj = {
  render: () => (
    <div className="p-6 flex justify-center" style={{ background: '#0a0a0f' }}>
      <Card
        variant="flat"
        hoverable
        className="w-72"
        badge={<Badge variant="success" dot pulse>Online</Badge>}
        footer={
          <div className="flex gap-2">
            <Button size="sm" variant="primary" fullWidth>Follow</Button>
            <Button size="sm" variant="ghost" fullWidth>Message</Button>
          </div>
        }
      >
        <div className="flex flex-col items-center text-center gap-3">
          <Avatar name="Daniel Elemide" size="xl" status="online" />
          <div>
            <h3 className="text-white font-black text-lg">Daniel Elemide</h3>
            <p className="text-gray-500 text-sm">Full Stack Developer</p>
            <p className="text-gray-600 text-xs mt-1">Lagos, Nigeria 🇳🇬</p>
          </div>
          <div className="flex gap-6 pt-2 border-t border-white/5 w-full justify-center">
            <div className="text-center">
              <p className="text-white font-bold">24</p>
              <p className="text-gray-600 text-xs">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">3.2k</p>
              <p className="text-gray-600 text-xs">Stars</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold">180</p>
              <p className="text-gray-600 text-xs">Followers</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  ),
};

export const StatCards: StoryObj = {
  render: () => (
    <div
      className="grid grid-cols-2 gap-4 p-6"
      style={{ background: '#0a0a0f' }}
    >
      {[
        { label: 'Total Revenue', value: '$48,294', change: '+12.5%', color: 'text-green-400', glow: 'rgba(34,197,94,0.06)' },
        { label: 'Active Users', value: '2,841', change: '+8.2%', color: 'text-cyan-400', glow: 'rgba(34,211,238,0.06)' },
        { label: 'Conversion', value: '3.24%', change: '-0.4%', color: 'text-red-400', glow: 'rgba(248,113,113,0.06)' },
        { label: 'Avg. Session', value: '4m 32s', change: '+1.1%', color: 'text-amber-400', glow: 'rgba(245,158,11,0.06)' },
      ].map((stat) => (
        <Card key={stat.label} variant="flat" hoverable glowColor={stat.glow}>
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
            {stat.label}
          </p>
          <p className="text-white text-2xl font-black mt-1">{stat.value}</p>
          <p className={`text-xs font-semibold mt-1 ${stat.color}`}>
            {stat.change} this month
          </p>
        </Card>
      ))}
    </div>
  ),
};

export const WithImage: StoryObj = {
  render: () => (
    <div className="p-6 flex justify-center" style={{ background: '#0a0a0f' }}>
      <Card
        variant="flat"
        hoverable
        className="w-72"
        image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop"
        imageAlt="Crypto"
        badge={<Badge variant="primary" size="sm">Featured</Badge>}
        footer={
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-xs">5 min read</span>
            <Button size="sm" variant="ghost">Read →</Button>
          </div>
        }
      >
        <h3 className="text-white font-bold text-base">
          The Future of DeFi in 2025
        </h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          How decentralized finance is reshaping the global economy.
        </p>
      </Card>
    </div>
  ),
};