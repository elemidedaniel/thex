import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../tokens/cn';

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  hideClose?: boolean;
  closeOnOverlay?: boolean;
  className?: string;
}

const getDrawerStyles = (placement: DrawerPlacement, size: DrawerSize): string => {
  const base = 'fixed z-50 bg-[#0f0f17] flex flex-col shadow-[0_24px_80px_rgba(0,0,0,0.7)]';

  const placementStyles = {
    left: 'top-0 left-0 h-full border-r border-white/8',
    right: 'top-0 right-0 h-full border-l border-white/8',
    top: 'top-0 left-0 w-full border-b border-white/8',
    bottom: 'bottom-0 left-0 w-full border-t border-white/8',
  };

  const sizeStyles = {
    left: { sm: 'w-64', md: 'w-80', lg: 'w-96', full: 'w-full' },
    right: { sm: 'w-64', md: 'w-80', lg: 'w-96', full: 'w-full' },
    top: { sm: 'h-48', md: 'h-64', lg: 'h-96', full: 'h-full' },
    bottom: { sm: 'h-48', md: 'h-64', lg: 'h-96', full: 'h-full' },
  };

  return cn(base, placementStyles[placement], sizeStyles[placement][size]);
};

const getAnimation = (placement: DrawerPlacement) => {
  const animations = {
    left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
    right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
    top: { initial: { y: '-100%' }, animate: { y: 0 }, exit: { y: '-100%' } },
    bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
  };
  return animations[placement];
};

export const Drawer = ({
  open,
  onClose,
  placement = 'right',
  size = 'md',
  title,
  description,
  children,
  footer,
  hideClose,
  closeOnOverlay = true,
  className,
}: DrawerProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const animation = getAnimation(placement);
  const drawerClass = getDrawerStyles(placement, size);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeOnOverlay ? onClose : undefined}
          />

          {/* Drawer Panel */}
          <motion.div
            className={cn(drawerClass, className)}
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Handle for bottom/top */}
            {(placement === 'bottom' || placement === 'top') && (
              <div className="flex justify-center py-3 flex-shrink-0">
                <div className="w-10 h-1 bg-white/15 rounded-full" />
              </div>
            )}

            {/* Header */}
            {(title || !hideClose) && (
              <div className="flex items-start justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
                <div>
                  {title && (
                    <h2 className="text-white font-black text-lg tracking-tight">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className="text-gray-500 text-sm mt-1">{description}</p>
                  )}
                </div>
                {!hideClose && (
                  <button
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-300 transition-colors ml-4 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/5"
                  >
                    ✕
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            {children && (
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {children}
              </div>
            )}

            {/* Footer */}
            {footer && (
              <div className="px-6 pb-6 pt-4 border-t border-white/5 flex-shrink-0">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

Drawer.displayName = 'Drawer';
export default Drawer;