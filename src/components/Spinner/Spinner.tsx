import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const spinnerVariants = cva('relative inline-flex items-center justify-center', {
  variants: {
    size: {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    },
  },
  defaultVariants: { size: 'md' },
});

const colorMap: Record<string, string> = {
  primary: '#22d3ee',
  white: '#ffffff',
  success: '#22c55e',
  error: '#f87171',
  warning: '#f59e0b',
};

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  variant?: 'ring' | 'dots' | 'pulse';
  color?: 'primary' | 'white' | 'success' | 'error' | 'warning';
  label?: string;
  className?: string;
}

const RingSpinner = ({ color }: { color: string }) => (
  <svg className="w-full h-full animate-spin" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12" cy="12" r="10"
      stroke={color}
      strokeOpacity="0.15"
      strokeWidth="3"
    />
    <path
      d="M12 2a10 10 0 0 1 10 10"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const DotsSpinner = ({ color }: { color: string }) => (
  <div className="flex items-center gap-1">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="rounded-full w-2 h-2"
        style={{ background: color }}
        animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.15,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

const PulseSpinner = ({ color }: { color: string }) => (
  <div className="relative flex items-center justify-center w-full h-full">
    <motion.span
      className="absolute inline-flex rounded-full w-full h-full"
      style={{ background: color }}
      animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}
    />
    <span
      className="relative inline-flex rounded-full w-1/2 h-1/2"
      style={{ background: color }}
    />
  </div>
);

export const Spinner = ({
  size,
  variant = 'ring',
  color = 'primary',
  label,
  className,
}: SpinnerProps) => {
  const hex = colorMap[color];

  return (
    <div className={cn('inline-flex flex-col items-center gap-2', className)}>
      <div className={cn(spinnerVariants({ size }))}>
        {variant === 'ring' && <RingSpinner color={hex} />}
        {variant === 'dots' && <DotsSpinner color={hex} />}
        {variant === 'pulse' && <PulseSpinner color={hex} />}
      </div>
      {label && (
        <span className="text-xs text-gray-500 font-medium">{label}</span>
      )}
    </div>
  );
};

Spinner.displayName = 'Spinner';
export default Spinner;