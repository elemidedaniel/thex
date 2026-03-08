import { useState } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const avatarVariants = cva(
  [
    'relative inline-flex items-center justify-center',
    'font-semibold select-none flex-shrink-0',
    'overflow-hidden',
  ],
  {
    variants: {
      size: {
        xs: 'w-6 h-6 text-xs rounded-lg',
        sm: 'w-8 h-8 text-sm rounded-xl',
        md: 'w-10 h-10 text-sm rounded-xl',
        lg: 'w-12 h-12 text-base rounded-2xl',
        xl: 'w-16 h-16 text-lg rounded-2xl',
        '2xl': 'w-20 h-20 text-xl rounded-3xl',
      },
      variant: {
        flat: 'bg-white/5 border border-white/10 text-white',
        primary: 'bg-cyan-500/15 border border-cyan-500/20 text-cyan-400',
        glass: 'bg-white/8 border border-white/15 text-white backdrop-blur-md',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'flat',
    },
  }
);

const statusColors = {
  online: 'bg-green-400',
  offline: 'bg-gray-500',
  away: 'bg-amber-400',
  busy: 'bg-red-400',
};

const statusSizes = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  xl: 'w-3.5 h-3.5',
  '2xl': 'w-4 h-4',
};

export interface AvatarProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  name?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
  showStatus?: boolean;
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const getColorFromName = (name: string) => {
  const colors = [
    'from-cyan-500 to-blue-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-blue-500 to-indigo-500',
    'from-pink-500 to-rose-500',
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export const Avatar = ({
  className,
  size = 'md',
  variant,
  src,
  alt,
  name,
  status,
  showStatus = true,
  ...props
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false);
  const gradientColor = name ? getColorFromName(name) : 'from-cyan-500 to-blue-500';

  return (
    <motion.div
      className={cn('relative inline-flex', className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      <div className={cn(avatarVariants({ size, variant }))}>
        {src && !imgError ? (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : name ? (
          <div className={cn('w-full h-full flex items-center justify-center bg-gradient-to-br', gradientColor)}>
            <span className="text-white font-bold">{getInitials(name)}</span>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/5">
            <svg className="w-1/2 h-1/2 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        )}
      </div>

      {status && showStatus && (
        <motion.span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-[#0a0a0f]',
            statusColors[status],
            statusSizes[size || 'md']
          )}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        />
      )}
    </motion.div>
  );
};

// Avatar Group
export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  size?: AvatarProps['size'];
  className?: string;
}

export const AvatarGroup = ({ avatars, max = 4, size = 'md', className }: AvatarGroupProps) => {
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  const overlapSizes = {
    xs: '-ml-2',
    sm: '-ml-2.5',
    md: '-ml-3',
    lg: '-ml-4',
    xl: '-ml-5',
    '2xl': '-ml-6',
  };

  return (
    <div className={cn('flex items-center', className)}>
      {visible.map((avatar, index) => (
        <motion.div
          key={index}
          className={cn(overlapSizes[size || 'md'], 'first:ml-0')}
          style={{ zIndex: visible.length - index }}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.05, duration: 0.2 }}
        >
          <Avatar
            {...avatar}
            size={size}
            className="ring-2 ring-[#0a0a0f]"
          />
        </motion.div>
      ))}
      {remaining > 0 && (
        <motion.div
          className={cn(overlapSizes[size || 'md'], 'first:ml-0')}
          style={{ zIndex: 0 }}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: visible.length * 0.05 }}
        >
          <div className={cn(
            avatarVariants({ size }),
            'bg-white/5 border border-white/10 text-gray-400 ring-2 ring-[#0a0a0f]'
          )}>
            +{remaining}
          </div>
        </motion.div>
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
export default Avatar;