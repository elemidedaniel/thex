
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const progressVariants = cva(
  'relative overflow-hidden rounded-full bg-white/5 border border-white/5',
  {
    variants: {
      size: {
        xs: 'h-1',
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
        xl: 'h-6',
      },
    },
    defaultVariants: { size: 'md' },
  }
);

const colorMap = {
  primary: { bar: 'from-cyan-500 to-blue-500', glow: 'rgba(34,211,238,0.4)' },
  success: { bar: 'from-green-500 to-emerald-500', glow: 'rgba(34,197,94,0.4)' },
  error: { bar: 'from-red-500 to-rose-500', glow: 'rgba(248,113,113,0.4)' },
  warning: { bar: 'from-amber-500 to-orange-500', glow: 'rgba(245,158,11,0.4)' },
  info: { bar: 'from-blue-500 to-indigo-500', glow: 'rgba(59,130,246,0.4)' },
};

// Linear Progress
export interface ProgressBarProps extends VariantProps<typeof progressVariants> {
  value: number;
  max?: number;
  color?: keyof typeof colorMap;
  label?: string;
  showValue?: boolean;
  animated?: boolean;
  striped?: boolean;
  className?: string;
}

export const ProgressBar = ({
  value,
  max = 100,
  size,
  color = 'primary',
  label,
  showValue,
  animated = true,
  striped,
  className,
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const { bar, glow } = colorMap[color];

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-xs font-semibold text-gray-400">{label}</span>
          )}
          {showValue && (
            <span className="text-xs font-bold text-gray-300">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div className={cn(progressVariants({ size }))}>
        <motion.div
          className={cn(
            'h-full rounded-full bg-gradient-to-r',
            bar,
            striped && 'bg-stripes',
          )}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: animated ? 0.8 : 0, ease: [0.16, 1, 0.3, 1] }}
          style={{
            boxShadow: `0 0 10px ${glow}`,
          }}
        >
          {/* Shimmer */}
          {animated && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

// Circular Progress
export interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: keyof typeof colorMap;
  label?: string;
  showValue?: boolean;
  className?: string;
}

export const CircularProgress = ({
  value,
  max = 100,
  size = 80,
  strokeWidth = 6,
  color = 'primary',
  label,
  showValue = true,
  className,
}: CircularProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const colorStyles = {
    primary: '#22d3ee',
    success: '#22c55e',
    error: '#f87171',
    warning: '#f59e0b',
    info: '#3b82f6',
  };

  return (
    <div className={cn('inline-flex flex-col items-center gap-2', className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={strokeWidth}
          />
          {/* Progress */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colorStyles[color]}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              filter: `drop-shadow(0 0 6px ${colorStyles[color]}80)`,
            }}
          />
        </svg>

        {/* Center label */}
        {showValue && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white font-black text-sm">
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
      {label && (
        <span className="text-xs text-gray-500 font-medium">{label}</span>
      )}
    </div>
  );
};

// Step Progress
export interface StepProgressProps {
  steps: string[];
  currentStep: number;
  color?: keyof typeof colorMap;
  className?: string;
}

export const StepProgress = ({
  steps,
  currentStep,
  color = 'primary',
  className,
}: StepProgressProps) => {
  const colorStyles = {
    primary: { active: 'bg-cyan-500 border-cyan-500 text-white', done: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400', line: 'bg-cyan-500' },
    success: { active: 'bg-green-500 border-green-500 text-white', done: 'bg-green-500/20 border-green-500/40 text-green-400', line: 'bg-green-500' },
    error: { active: 'bg-red-500 border-red-500 text-white', done: 'bg-red-500/20 border-red-500/40 text-red-400', line: 'bg-red-500' },
    warning: { active: 'bg-amber-500 border-amber-500 text-white', done: 'bg-amber-500/20 border-amber-500/40 text-amber-400', line: 'bg-amber-500' },
    info: { active: 'bg-blue-500 border-blue-500 text-white', done: 'bg-blue-500/20 border-blue-500/40 text-blue-400', line: 'bg-blue-500' },
  };

  const styles = colorStyles[color];

  return (
    <div className={cn('flex items-center w-full', className)}>
      {steps.map((step, index) => {
        const isDone = index < currentStep;
        const isActive = index === currentStep;
        const isUpcoming = index > currentStep;

        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                className={cn(
                  'w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all',
                  isDone && styles.done,
                  isActive && styles.active,
                  isUpcoming && 'bg-transparent border-white/10 text-gray-600',
                )}
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {isDone ? '✓' : index + 1}
              </motion.div>
              <span className={cn(
                'text-xs font-medium whitespace-nowrap',
                isDone && 'text-gray-400',
                isActive && 'text-white',
                isUpcoming && 'text-gray-600',
              )}>
                {step}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 mb-5 bg-white/5 overflow-hidden rounded-full">
                <motion.div
                  className={cn('h-full rounded-full', styles.line)}
                  initial={{ width: 0 }}
                  animate={{ width: isDone ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
CircularProgress.displayName = 'CircularProgress';
StepProgress.displayName = 'StepProgress';