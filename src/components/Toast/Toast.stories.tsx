import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast';
import { Button } from '../Button';

const meta: Meta = {
  title: 'TheX/Toast',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Toast

Animated notification toasts with auto-dismiss progress bar, stacking, and action support.

## AI Prompt
\`\`\`
Build a Toast notification system using React, TypeScript, Framer Motion and Context API.
Types: success, error, warning, info, default.
Auto-dismiss with animated progress bar.
Stack multiple toasts.
Support title, description, and action button.
Spring entrance and exit animations.
useToast hook for triggering toasts anywhere.
Dark theme.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-3 p-6" style={{ background: '#0a0a0f' }}>
      <Button
        variant="success"
        onClick={() => toast({
          type: 'success',
          title: 'Changes saved!',
          description: 'Your profile has been updated successfully.',
        })}
      >
        Success Toast
      </Button>
      <Button
        variant="danger"
        onClick={() => toast({
          type: 'error',
          title: 'Something went wrong',
          description: 'Please try again or contact support.',
        })}
      >
        Error Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast({
          type: 'warning',
          title: 'Heads up!',
          description: 'Your session will expire in 5 minutes.',
        })}
      >
        Warning Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast({
          type: 'info',
          title: 'New update available',
          description: 'Version 2.0 is ready to install.',
          action: { label: 'Update now', onClick: () => alert('Updating!') },
        })}
      >
        Info with Action
      </Button>
      <Button
        variant="primary"
        onClick={() => toast({
          type: 'default',
          title: 'Cryptex alert triggered',
          description: 'BTC just crossed $75,000.',
        })}
      >
        Default Toast
      </Button>
    </div>
  );
};

export const AllToasts: StoryObj = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};