import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../tokens/cn';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';

export interface Toast {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
  action?: { label: string; onClick: () => void };
}

interface ToastContextValue {
  toasts: Toast[];
  toast: (toast: Omit<Toast, 'id'>) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const toastStyles: Record<ToastType, { icon: string; bar: string; border: string; title: string }> = {
  success: {
    icon: '✓',
    bar: 'bg-green-400',
    border: 'border-green-500/20',
    title: 'text-green-400',
  },
  error: {
    icon: '✕',
    bar: 'bg-red-400',
    border: 'border-red-500/20',
    title: 'text-red-400',
  },
  warning: {
    icon: '⚠',
    bar: 'bg-amber-400',
    border: 'border-amber-500/20',
    title: 'text-amber-400',
  },
  info: {
    icon: 'ℹ',
    bar: 'bg-blue-400',
    border: 'border-blue-500/20',
    title: 'text-blue-400',
  },
  default: {
    icon: '●',
    bar: 'bg-cyan-400',
    border: 'border-white/10',
    title: 'text-white',
  },
};

const ToastItem = ({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: (id: string) => void;
}) => {
  const type = toast.type || 'default';
  const styles = toastStyles[type];
  const duration = toast.duration || 4000;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative flex items-start gap-3 w-full max-w-sm',
        'bg-[#0f0f17] border rounded-2xl p-4',
        'shadow-[0_8px_32px_rgba(0,0,0,0.5)]',
        'overflow-hidden',
        styles.border,
      )}
    >
      {/* Progress bar */}
      <motion.div
        className={cn('absolute bottom-0 left-0 h-0.5 rounded-full', styles.bar)}
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: duration / 1000, ease: 'linear' }}
        onAnimationComplete={() => onDismiss(toast.id)}
      />

      {/* Icon */}
      <div className={cn(
        'flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold',
        type === 'success' && 'bg-green-500/15 text-green-400',
        type === 'error' && 'bg-red-500/15 text-red-400',
        type === 'warning' && 'bg-amber-500/15 text-amber-400',
        type === 'info' && 'bg-blue-500/15 text-blue-400',
        type === 'default' && 'bg-cyan-500/15 text-cyan-400',
      )}>
        {styles.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={cn('text-sm font-semibold', styles.title)}>
          {toast.title}
        </p>
        {toast.description && (
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
            {toast.description}
          </p>
        )}
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold mt-2 transition-colors"
          >
            {toast.action.label} →
          </button>
        )}
      </div>

      {/* Dismiss */}
      <button
        onClick={() => onDismiss(toast.id)}
        className="flex-shrink-0 text-gray-600 hover:text-gray-300 transition-colors text-sm"
      >
        ✕
      </button>
    </motion.div>
  );
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((newToast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...newToast, id }]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 items-end">
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export default ToastProvider;