import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../tokens/cn';

const modalVariants = cva(
  [
    'relative w-full bg-[#0f0f17]',
    'border border-white/8',
    'shadow-[0_24px_80px_rgba(0,0,0,0.7)]',
    'flex flex-col',
    'max-h-[90vh]',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-sm rounded-2xl',
        md: 'max-w-md rounded-2xl',
        lg: 'max-w-lg rounded-2xl',
        xl: 'max-w-xl rounded-2xl',
        full: 'max-w-4xl rounded-2xl',
      },
      variant: {
        flat: 'bg-[#0f0f17]',
        glass: 'bg-white/5 backdrop-blur-xl',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'flat',
    },
  }
);

export interface ModalProps extends VariantProps<typeof modalVariants> {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  hideClose?: boolean;
  closeOnOverlay?: boolean;
  className?: string;
}

export const Modal = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  hideClose,
  closeOnOverlay = true,
  size,
  variant,
  className,
}: ModalProps) => {
  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeOnOverlay ? onClose : undefined}
          />

          {/* Modal */}
          <motion.div
            className={cn(modalVariants({ size, variant }), className)}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            {(title || !hideClose) && (
              <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-white/5">
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
              <div className="px-6 pb-6 pt-4 border-t border-white/5">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

Modal.displayName = 'Modal';
export default Modal;