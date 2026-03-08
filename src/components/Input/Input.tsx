import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const inputVariants = cva(
  [
    'w-full bg-white/3 border rounded-xl',
    'text-white placeholder-gray-600',
    'transition-all duration-200',
    'outline-none',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: 'text-sm px-3 py-2 h-8',
        md: 'text-sm px-4 py-2.5 h-10',
        lg: 'text-base px-4 py-3 h-12',
      },
      state: {
        default: 'border-white/8 hover:border-white/15 focus:border-cyan-500/40 focus:bg-white/5 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]',
        error: 'border-red-500/40 focus:border-red-500/60 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.08)]',
        success: 'border-green-500/40 focus:border-green-500/60 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.08)]',
      },
      variant: {
        flat: 'bg-white/3',
        glass: 'bg-white/5 backdrop-blur-md',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
      variant: 'flat',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  floatingLabel?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      variant,
      label,
      hint,
      error,
      success,
      leftIcon,
      rightIcon,
      floatingLabel,
      placeholder,
      value,
      onChange,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const currentValue = value !== undefined ? value : internalValue;
    const hasValue = String(currentValue).length > 0;
    const isFloating = focused || hasValue;

    const state = error ? 'error' : success ? 'success' : 'default';
    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    const paddingLeft = leftIcon ? (size === 'sm' ? 'pl-8' : size === 'lg' ? 'pl-11' : 'pl-10') : '';
    const paddingRight = (rightIcon || type === 'password') ? (size === 'sm' ? 'pr-8' : size === 'lg' ? 'pr-11' : 'pr-10') : '';

    return (
      <div className={cn('flex flex-col gap-1.5 w-full', className)}>
        {label && !floatingLabel && (
          <label className="text-gray-400 text-xs font-medium uppercase tracking-wider">
            {label}
          </label>
        )}

        <div className="relative">
          {/* Floating Label */}
          {floatingLabel && label && (
            <motion.label
              className="absolute left-4 pointer-events-none font-medium z-10"
              animate={{
                top: isFloating ? '6px' : '50%',
                y: isFloating ? '0%' : '-50%',
                fontSize: isFloating ? '10px' : '14px',
                color: isFloating
                  ? error ? '#f87171' : focused ? '#22d3ee' : '#6b7280'
                  : '#4b5563',
              }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {label}
            </motion.label>
          )}

          {/* Left Icon */}
          {leftIcon && (
            <div className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none',
              focused && 'text-cyan-400',
              error && 'text-red-400',
            )}>
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={inputType}
            value={currentValue}
            placeholder={floatingLabel ? '' : placeholder}
            onChange={(e) => {
              setInternalValue(e.target.value);
              onChange?.(e);
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(
              inputVariants({ size, state, variant }),
              paddingLeft,
              paddingRight,
              floatingLabel && hasValue && 'pt-5 pb-1',
            )}
            {...props}
          />

          {/* Right Icon / Password Toggle */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {type === 'password' && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            )}
            {rightIcon && (
              <span className={cn(
                'text-gray-500',
                state === 'error' && 'text-red-400',
                state === 'success' && 'text-green-400',
              )}>
                {rightIcon}
              </span>
            )}
          </div>
        </div>

        {/* Hint / Error / Success */}
        <AnimatePresence mode="wait">
          {(error || success || hint) && (
            <motion.p
              key={error || success || hint}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className={cn(
                'text-xs',
                error && 'text-red-400',
                success && 'text-green-400',
                !error && !success && 'text-gray-500',
              )}
            >
              {error || success || hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;