import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../tokens/cn';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: TooltipPlacement;
  delay?: number;
  variant?: 'dark' | 'light' | 'primary';
  className?: string;
  maxWidth?: number;
  disabled?: boolean;
}

const variantStyles = {
  dark: 'bg-[#1a1a2e] border border-white/10 text-gray-200',
  light: 'bg-white border border-gray-200 text-gray-800',
  primary: 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300',
};

const placementConfig = {
  top: { x: 0, y: 8 },
  bottom: { x: 0, y: -8 },
  left: { x: 8, y: 0 },
  right: { x: -8, y: 0 },
};

export const Tooltip = ({
  content,
  children,
  placement = 'top',
  delay = 100,
  variant = 'dark',
  className,
  maxWidth = 200,
  disabled,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (disabled) return;
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  useEffect(() => {
    if (!visible || !wrapperRef.current) return;

    const trigger = wrapperRef.current.getBoundingClientRect();
    const tooltip = tooltipRef.current?.getBoundingClientRect();
    const tw = tooltip?.width ?? 0;
    const th = tooltip?.height ?? 0;
    const gap = 8;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = trigger.top - th - gap + window.scrollY;
        left = trigger.left + trigger.width / 2 - tw / 2 + window.scrollX;
        break;
      case 'bottom':
        top = trigger.bottom + gap + window.scrollY;
        left = trigger.left + trigger.width / 2 - tw / 2 + window.scrollX;
        break;
      case 'left':
        top = trigger.top + trigger.height / 2 - th / 2 + window.scrollY;
        left = trigger.left - tw - gap + window.scrollX;
        break;
      case 'right':
        top = trigger.top + trigger.height / 2 - th / 2 + window.scrollY;
        left = trigger.right + gap + window.scrollX;
        break;
    }

    setPosition({ top, left });
  }, [visible, placement]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const { x, y } = placementConfig[placement];

  return (
    <>
      <div
        ref={wrapperRef}
        className="inline-flex"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            ref={tooltipRef}
            role="tooltip"
            className={cn(
              'fixed z-[9999] px-3 py-2 rounded-xl text-xs font-medium',
              'shadow-[0_8px_24px_rgba(0,0,0,0.4)] pointer-events-none',
              variantStyles[variant],
              className,
            )}
            style={{ top: position.top, left: position.left, maxWidth }}
            initial={{ opacity: 0, scale: 0.9, x, y }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, x, y }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
export default Tooltip;