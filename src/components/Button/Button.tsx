import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2',
    'font-semibold tracking-tight rounded-xl',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50',
    'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
    'select-none overflow-hidden',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-cyan-500/15 hover:bg-cyan-500/25',
          'border border-cyan-500/25 hover:border-cyan-500/40',
          'text-cyan-400',
          'shadow-[0_0_20px_rgba(34,211,238,0.08)] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
        ],
        secondary: [
          'bg-white/3 hover:bg-white/6',
          'border border-white/8 hover:border-white/15',
          'text-white',
        ],
        ghost: [
          'bg-transparent hover:bg-white/5',
          'border border-transparent',
          'text-gray-400 hover:text-white',
        ],
        danger: [
          'bg-red-500/10 hover:bg-red-500/20',
          'border border-red-500/20 hover:border-red-500/30',
          'text-red-400',
        ],
        success: [
          'bg-green-500/10 hover:bg-green-500/20',
          'border border-green-500/20 hover:border-green-500/30',
          'text-green-400',
        ],
        glass: [
          'bg-white/5 hover:bg-white/8',
          'border border-white/10 hover:border-white/20',
          'text-white backdrop-blur-md',
        ],
      },
      size: {
        xs: 'text-xs px-2.5 py-1.5 h-7',
        sm: 'text-sm px-3.5 py-2 h-8',
        md: 'text-sm px-4 py-2.5 h-10',
        lg: 'text-base px-6 py-3 h-12',
        xl: 'text-lg px-8 py-4 h-14',
      },
      fullWidth: {
        true: 'w-full',
      },
      rounded: {
        default: 'rounded-xl',
        full: 'rounded-full',
        sm: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'default',
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12" cy="12" r="10"
      stroke="currentColor" strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      rounded,
      loading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, rounded }), className)}
        disabled={disabled || loading}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {/* Ripple overlay */}
        <motion.span
          className="absolute inset-0 rounded-xl"
          initial={{ opacity: 0 }}
          whileTap={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
        />

        {loading ? <Spinner /> : leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children && <span>{children}</span>}
        {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;