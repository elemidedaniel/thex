import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../tokens/cn';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: { box: 'w-4 h-4 rounded-md', text: 'text-xs', icon: 'text-[10px]' },
  md: { box: 'w-5 h-5 rounded-lg', text: 'text-sm', icon: 'text-xs' },
  lg: { box: 'w-6 h-6 rounded-xl', text: 'text-base', icon: 'text-sm' },
};

const colorStyles = {
  primary: { checked: 'bg-cyan-500 border-cyan-500', glow: '0 0 12px rgba(34,211,238,0.3)' },
  success: { checked: 'bg-green-500 border-green-500', glow: '0 0 12px rgba(34,197,94,0.3)' },
  warning: { checked: 'bg-amber-500 border-amber-500', glow: '0 0 12px rgba(245,158,11,0.3)' },
  danger: { checked: 'bg-red-500 border-red-500', glow: '0 0 12px rgba(248,113,113,0.3)' },
};

export const Checkbox = ({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  description,
  disabled,
  color = 'primary',
  size = 'md',
  className,
}: CheckboxProps) => {
  const { box, text, icon } = sizeStyles[size];
  const { checked: checkedStyle, glow } = colorStyles[color];
  const isActive = checked || indeterminate;

  const handleClick = () => {
    if (!disabled) onChange?.(!checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  const checkBox = (
    <motion.button
      type="button"
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        'relative flex-shrink-0 flex items-center justify-center',
        'border-2 transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]',
        'disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer',
        box,
        isActive ? checkedStyle : 'bg-transparent border-white/20 hover:border-white/40',
      )}
      style={isActive ? { boxShadow: glow } : undefined}
      whileTap={!disabled ? { scale: 0.9 } : undefined}
      transition={{ duration: 0.1 }}
    >
      <AnimatePresence mode="wait">
        {indeterminate ? (
          <motion.span
            key="indeterminate"
            className={cn('text-white font-black leading-none', icon)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
          >
            —
          </motion.span>
        ) : checked ? (
          <motion.span
            key="check"
            className={cn('text-white font-black leading-none', icon)}
            initial={{ scale: 0, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
          >
            ✓
          </motion.span>
        ) : null}
      </AnimatePresence>
    </motion.button>
  );

  if (!label) return checkBox;

  return (
    <div
      className={cn(
        'flex items-start gap-3',
        !disabled && 'cursor-pointer',
        className,
      )}
      onClick={!disabled ? handleClick : undefined}
    >
      <div className="mt-0.5">{checkBox}</div>
      <div className="flex flex-col">
        <span className={cn(
          'font-semibold transition-colors select-none',
          text,
          isActive ? 'text-white' : 'text-gray-400',
          disabled && 'opacity-40',
        )}>
          {label}
        </span>
        {description && (
          <span className={cn('text-gray-600 select-none', size === 'lg' ? 'text-sm' : 'text-xs')}>
            {description}
          </span>
        )}
      </div>
    </div>
  );
};

// Checkbox Group
export interface CheckboxGroupProps {
  options: { value: string; label: string; description?: string; disabled?: boolean }[];
  value?: string[];
  onChange?: (values: string[]) => void;
  color?: CheckboxProps['color'];
  size?: CheckboxProps['size'];
  className?: string;
}

export const CheckboxGroup = ({
  options,
  value = [],
  onChange,
  color = 'primary',
  size = 'md',
  className,
}: CheckboxGroupProps) => {
  const toggle = (optValue: string) => {
    const next = value.includes(optValue)
      ? value.filter((v) => v !== optValue)
      : [...value, optValue];
    onChange?.(next);
  };

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
          checked={value.includes(opt.value)}
          onChange={() => toggle(opt.value)}
          label={opt.label}
          description={opt.description}
          disabled={opt.disabled}
          color={color}
          size={size}
        />
      ))}
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
CheckboxGroup.displayName = 'CheckboxGroup';
export default Checkbox;