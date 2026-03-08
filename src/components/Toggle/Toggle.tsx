import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const toggleVariants = cva(
  [
    'relative inline-flex items-center flex-shrink-0',
    'rounded-full border-2 cursor-pointer',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: 'w-8 h-5',
        md: 'w-11 h-6',
        lg: 'w-14 h-7',
      },
      checked: {
        true: 'border-transparent',
        false: 'border-transparent bg-white/10',
      },
      color: {
        primary: '',
        success: '',
        warning: '',
        danger: '',
      },
    },
    defaultVariants: {
      size: 'md',
      checked: false,
      color: 'primary',
    },
  }
);

const thumbSizes = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

const thumbTranslate = {
  sm: { off: 2, on: 14 },
  md: { off: 2, on: 22 },
  lg: { off: 2, on: 30 },
};

const colorStyles = {
  primary: { on: 'bg-cyan-500', glow: 'rgba(34,211,238,0.3)' },
  success: { on: 'bg-green-500', glow: 'rgba(34,197,94,0.3)' },
  warning: { on: 'bg-amber-500', glow: 'rgba(245,158,11,0.3)' },
  danger: { on: 'bg-red-500', glow: 'rgba(248,113,113,0.3)' },
};

export interface ToggleProps extends Omit<VariantProps<typeof toggleVariants>, 'checked'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Toggle = ({
  checked = false,
  onChange,
  label,
  description,
  disabled,
  className,
  color = 'primary',
  size = 'md',
}: ToggleProps) => {
  const { on, glow } = colorStyles[color];
  const translate = thumbTranslate[size];
  const thumbSize = thumbSizes[size];

  const handleClick = () => {
    if (!disabled) onChange?.(!checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  const toggle = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        toggleVariants({ size, checked, color }),
        checked ? on : 'bg-white/10',
        className,
      )}
      style={checked ? { boxShadow: `0 0 12px ${glow}` } : undefined}
    >
      <motion.span
        className={cn(
          'block rounded-full bg-white shadow-sm flex-shrink-0',
          thumbSize,
        )}
        animate={{ x: checked ? translate.on : translate.off }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />
    </button>
  );

  if (!label) return toggle;

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {toggle}
      <div className="flex flex-col">
        <span className={cn(
          'text-sm font-semibold transition-colors',
          checked ? 'text-white' : 'text-gray-400',
          disabled && 'opacity-40',
        )}>
          {label}
        </span>
        {description && (
          <span className="text-xs text-gray-600">{description}</span>
        )}
      </div>
    </div>
  );
};

Toggle.displayName = 'Toggle';
export default Toggle;