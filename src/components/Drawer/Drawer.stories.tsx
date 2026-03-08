import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from '../Button';
import { Input } from '../Input';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';

const meta: Meta<typeof Drawer> = {
  title: 'TheX/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Drawer

A slide-in panel from any direction with smooth spring animations, backdrop blur, and keyboard support.

## AI Prompt
\`\`\`
Build a Drawer component using React, TypeScript, Framer Motion and CVA.
Placements: left, right, top, bottom with matching slide animations.
Sizes: sm, md, lg, full.
Features: backdrop blur, ESC close, scroll lock, drag handle for top/bottom.
Header, scrollable body, sticky footer slots.
Dark theme.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const AllPlacements: StoryObj = {
  render: () => {
    const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom' | null>(null);
    return (
      <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
        {(['left', 'right', 'top', 'bottom'] as const).map((p) => (
          <Button key={p} variant="secondary" onClick={() => setPlacement(p)}>
            Open {p}
          </Button>
        ))}
        {(['left', 'right', 'top', 'bottom'] as const).map((p) => (
          <Drawer
            key={p}
            open={placement === p}
            onClose={() => setPlacement(null)}
            placement={p}
            title={`${p.charAt(0).toUpperCase() + p.slice(1)} Drawer`}
            description="Slides in from the side."
            footer={
              <div className="flex gap-3 justify-end">
                <Button variant="ghost" onClick={() => setPlacement(null)}>Cancel</Button>
                <Button variant="primary" onClick={() => setPlacement(null)}>Confirm</Button>
              </div>
            }
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              This drawer slides in from the {p}. Press ESC or click outside to close.
            </p>
          </Drawer>
        ))}
      </div>
    );
  },
};

export const NavigationDrawer: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    const navItems = [
      { icon: '📊', label: 'Dashboard' },
      { icon: '📈', label: 'Analytics' },
      { icon: '💼', label: 'Portfolio' },
      { icon: '🔔', label: 'Alerts', badge: '3' },
      { icon: '⚙️', label: 'Settings' },
    ];
    return (
      <div className="p-6" style={{ background: '#0a0a0f' }}>
        <Button onClick={() => setOpen(true)} leftIcon={<span>☰</span>}>
          Open Nav
        </Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          placement="left"
          hideClose
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
              <Avatar name="Daniel Elemide" size="md" status="online" />
              <div>
                <p className="text-white font-bold text-sm">Daniel Elemide</p>
                <p className="text-gray-500 text-xs">Full Stack Developer</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    {item.label}
                  </div>
                  {item.badge && (
                    <Badge variant="error" size="sm">{item.badge}</Badge>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </Drawer>
      </div>
    );
  },
};

export const FormDrawer: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6" style={{ background: '#0a0a0f' }}>
        <Button onClick={() => setOpen(true)}>Add New User</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          placement="right"
          title="Add New User"
          description="Fill in the details below."
          footer={
            <div className="flex gap-3">
              <Button variant="ghost" fullWidth onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" fullWidth>Create User</Button>
            </div>
          }
        >
          <div className="flex flex-col gap-4">
            <Input label="Full Name" placeholder="Daniel Elemide" />
            <Input label="Email" type="email" placeholder="daniel@thex.dev" />
            <Input label="Role" placeholder="Developer" />
            <Input label="Password" type="password" placeholder="••••••••" />
          </div>
        </Drawer>
      </div>
    );
  },
};