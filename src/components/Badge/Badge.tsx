import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center gap-1.5',
    'font-semibold tracking-tight',
    'transition-all duration-150',
    'select-none',
  ],
  {
    variants: {
      variant: {
        default: 'bg-white/5 border border-white/10 text-gray-300',
        primary: 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400',
        success: 'bg-green-500/10 border border-green-500/20 text-green-400',
        error: 'bg-red-500/10 border border-red-500/20 text-red-400',
        warning: 'bg-amber-500/10 border border-amber-500/20 text-amber-400',
        info: 'bg-blue-500/10 border border-blue-500/20 text-blue-400',
        glass: 'bg-white/5 border border-white/15 text-white backdrop-blur-md',
      },
      size: {
        sm: 'text-xs px-2 py-0.5 rounded-lg',
        md: 'text-xs px-2.5 py-1 rounded-xl',
        lg: 'text-sm px-3 py-1.5 rounded-xl',
      },
      pulse: {
        true: '',
      },
      dot: {
        true: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const dotColors: Record<string, string> = {
  default: 'bg-gray-400',
  primary: 'bg-cyan-400',
  success: 'bg-green-400',
  error: 'bg-red-400',
  warning: 'bg-amber-400',
  info: 'bg-blue-400',
  glass: 'bg-white',
};

export interface BadgeProps
  extends Omit<HTMLMotionProps<'span'>, 'children'>,
    VariantProps<typeof badgeVariants> {
  children?: React.ReactNode;
  count?: number;
  maxCount?: number;
}

export const Badge = ({
  className,
  variant = 'default',
  size,
  pulse,
  dot,
  children,
  count,
  maxCount = 99,
  ...props
}: BadgeProps) => {
  const dotColor = dotColors[variant || 'default'];

  const displayCount = count !== undefined
    ? count > maxCount ? `${maxCount}+` : count
    : null;

  return (
    <motion.span
      className={cn(badgeVariants({ variant, size, pulse, dot }), className)}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {pulse && (
            <span
              className={cn(
                'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                dotColor
              )}
            />
          )}
          <span className={cn('relative inline-flex rounded-full h-1.5 w-1.5', dotColor)} />
        </span>
      )}
      {displayCount !== null ? displayCount : children}
    </motion.span>
  );
};

Badge.displayName = 'Badge';
export default Badge;