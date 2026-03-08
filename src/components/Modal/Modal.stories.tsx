import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';
import { Input } from '../Input';

const meta: Meta<typeof Modal> = {
  title: 'TheX/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Modal

A fully accessible modal dialog with spring animations, backdrop blur, keyboard support and scroll lock.

## AI Prompt
\`\`\`
Build a Modal component using React, TypeScript, Framer Motion and CVA.
Features: backdrop blur overlay, spring entrance animation, ESC key close,
scroll lock, close on overlay click.
Sizes: sm, md, lg, xl, full.
Variants: flat, glass.
Header with title and description, scrollable body, sticky footer.
Dark theme.
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
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6" style={{ background: '#0a0a0f' }}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Welcome to TheX"
          description="A next-generation React component library."
          footer={
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
            </div>
          }
        >
          <p className="text-gray-400 text-sm leading-relaxed">
            TheX is a production-grade component library built with React,
            TypeScript, Tailwind CSS, and Framer Motion. Every component is
            fully accessible, animated, and documented.
          </p>
        </Modal>
      </div>
    );
  },
};

export const WithForm: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6" style={{ background: '#0a0a0f' }}>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Create Account"
          description="Fill in your details to get started."
          footer={
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary">Create Account</Button>
            </div>
          }
        >
          <div className="flex flex-col gap-4">
            <Input label="Full Name" placeholder="Daniel Elemide" />
            <Input label="Email" type="email" placeholder="daniel@example.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
          </div>
        </Modal>
      </div>
    );
  },
};

export const Sizes: StoryObj = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;
    return (
      <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
        {sizes.map((size) => (
          <Button key={size} variant="secondary" onClick={() => setOpenSize(size)}>
            {size.toUpperCase()}
          </Button>
        ))}
        {sizes.map((size) => (
          <Modal
            key={size}
            open={openSize === size}
            onClose={() => setOpenSize(null)}
            size={size}
            title={`${size.toUpperCase()} Modal`}
            description="This is a modal size demo."
            footer={
              <div className="flex justify-end">
                <Button onClick={() => setOpenSize(null)}>Close</Button>
              </div>
            }
          >
            <p className="text-gray-400 text-sm">
              This is the {size} size modal. It adapts its width based on the size prop.
            </p>
          </Modal>
        ))}
      </div>
    );
  },
};

export const GlassVariant: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6" style={{ background: '#0a0a0f' }}>
        <Button onClick={() => setOpen(true)}>Glass Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          variant="glass"
          title="Glass Effect Modal"
          description="Frosted glass backdrop blur effect."
          footer={
            <div className="flex justify-end">
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          }
        >
          <p className="text-gray-400 text-sm leading-relaxed">
            This modal uses the glass variant with backdrop blur for a frosted glass effect.
          </p>
        </Modal>
      </div>
    );
  },
};