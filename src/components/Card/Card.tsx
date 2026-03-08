import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const cardVariants = cva(
  [
    'relative flex flex-col overflow-hidden',
    'transition-all duration-300',
  ],
  {
    variants: {
      variant: {
        flat: [
          'bg-[#0f0f17] border border-white/8',
        ],
        glass: [
          'bg-white/3 border border-white/8 backdrop-blur-xl',
        ],
        neu: [
          'bg-[#0d0d14] border border-white/5',
          'shadow-[4px_4px_12px_rgba(0,0,0,0.5),_-2px_-2px_8px_rgba(255,255,255,0.03)]',
        ],
        glow: [
          'bg-[#0f0f17] border border-cyan-500/20',
          'shadow-[0_0_30px_rgba(34,211,238,0.08)]',
        ],
      },
      size: {
        sm: 'rounded-xl',
        md: 'rounded-2xl',
        lg: 'rounded-3xl',
      },
      hoverable: {
        true: 'cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'flat',
      size: 'md',
    },
  }
);

export interface CardProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  imageHeight?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  badge?: React.ReactNode;
  glowColor?: string;
}

export const Card = ({
  className,
  variant,
  size,
  hoverable,
  children,
  image,
  imageAlt,
  imageHeight = '200px',
  header,
  footer,
  badge,
  glowColor,
  onClick,
  ...props
}: CardProps) => {
  const isClickable = hoverable || !!onClick;

  return (
    <motion.div
      className={cn(cardVariants({ variant, size, hoverable: isClickable }), className)}
      onClick={onClick}
      whileHover={isClickable ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={glowColor ? { boxShadow: `0 0 40px ${glowColor}` } : undefined}
      {...props}
    >
      {/* Glow overlay on hover */}
      {isClickable && (
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.04) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Badge */}
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          {badge}
        </div>
      )}

      {/* Image */}
      {image && (
        <div
          className="w-full overflow-hidden flex-shrink-0"
          style={{ height: imageHeight }}
        >
          <motion.img
            src={image}
            alt={imageAlt || ''}
            className="w-full h-full object-cover"
            whileHover={isClickable ? { scale: 1.05 } : undefined}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      )}

      {/* Header */}
      {header && (
        <div className="px-5 pt-5 pb-3 border-b border-white/5 flex-shrink-0">
          {header}
        </div>
      )}

      {/* Body */}
      {children && (
        <div className="flex-1 p-5">
          {children}
        </div>
      )}

      {/* Footer */}
      {footer && (
        <div className="px-5 pb-5 pt-3 border-t border-white/5 flex-shrink-0">
          {footer}
        </div>
      )}
    </motion.div>
  );
};

Card.displayName = 'Card';
export default Card;