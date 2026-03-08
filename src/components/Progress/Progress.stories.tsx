import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar, CircularProgress, StepProgress } from './Progress';
import { Button } from '../Button';

const meta: Meta = {
  title: 'TheX/Progress',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Progress

Three progress components — linear bar with shimmer, circular SVG, and step indicator — all animated.

## AI Prompt
\`\`\`
Build Progress components using React, TypeScript, Tailwind CSS and Framer Motion.
ProgressBar: animated fill with shimmer, gradient colors, sizes, showValue.
CircularProgress: SVG circle with animated stroke, glow effect, center label.
StepProgress: step indicator with animated connector lines, done/active/upcoming states.
Colors: primary, success, error, warning, info. Dark theme.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const LinearBars: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-5 max-w-md p-6" style={{ background: '#0a0a0f' }}>
      <ProgressBar value={75} color="primary" label="Primary" showValue />
      <ProgressBar value={60} color="success" label="Success" showValue />
      <ProgressBar value={45} color="error" label="Error" showValue />
      <ProgressBar value={85} color="warning" label="Warning" showValue />
      <ProgressBar value={30} color="info" label="Info" showValue />
    </div>
  ),
};

export const AllSizes: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md p-6" style={{ background: '#0a0a0f' }}>
      <ProgressBar value={70} size="xs" label="XS" showValue />
      <ProgressBar value={70} size="sm" label="SM" showValue />
      <ProgressBar value={70} size="md" label="MD" showValue />
      <ProgressBar value={70} size="lg" label="LG" showValue />
      <ProgressBar value={70} size="xl" label="XL" showValue />
    </div>
  ),
};

export const Circular: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-6" style={{ background: '#0a0a0f' }}>
      <CircularProgress value={75} color="primary" label="Primary" />
      <CircularProgress value={60} color="success" label="Success" />
      <CircularProgress value={45} color="error" label="Error" />
      <CircularProgress value={85} color="warning" label="Warning" />
      <CircularProgress value={30} color="info" label="Info" size={100} strokeWidth={8} />
    </div>
  ),
};

export const Steps: StoryObj = {
  render: () => {
    const [step, setStep] = useState(1);
    const steps = ['Account', 'Profile', 'Payment', 'Confirm'];
    return (
      <div className="flex flex-col gap-6 max-w-lg p-6" style={{ background: '#0a0a0f' }}>
        <StepProgress steps={steps} currentStep={step} />
        <div className="flex gap-3 justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            ← Back
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
            disabled={step === steps.length - 1}
          >
            Next →
          </Button>
        </div>
      </div>
    );
  },
};

export const Animated: StoryObj = {
  render: () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setValue((v) => (v >= 100 ? 0 : v + 1));
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex flex-col gap-6 items-center p-6" style={{ background: '#0a0a0f' }}>
        <CircularProgress value={value} color="primary" size={120} strokeWidth={8} />
        <div className="w-full max-w-sm">
          <ProgressBar value={value} color="primary" label="Loading..." showValue />
        </div>
      </div>
    );
  },
};