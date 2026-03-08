import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../tokens/cn';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: 'underline' | 'pill' | 'card';
  orientation?: 'horizontal' | 'vertical';
  onChange?: (id: string) => void;
  className?: string;
}

export const Tabs = ({
  tabs,
  defaultTab,
  variant = 'underline',
  orientation = 'horizontal',
  onChange,
  className,
}: TabsProps) => {
  const [activeId, setActiveId] = useState(defaultTab || tabs[0]?.id);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, top: 0, height: 0 });
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const isVertical = orientation === 'vertical';

  useEffect(() => {
    const el = tabRefs.current[activeId];
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: elRect.left - parentRect.left,
      width: elRect.width,
      top: elRect.top - parentRect.top,
      height: elRect.height,
    });
  }, [activeId, variant]);

  const handleChange = (id: string) => {
    setActiveId(id);
    onChange?.(id);
  };

  const activeTab = tabs.find((t) => t.id === activeId);

  return (
    <div className={cn(
      isVertical ? 'flex gap-4' : 'flex flex-col',
      className
    )}>
      {/* Tab List */}
      <div className={cn(
        'relative',
        isVertical ? 'flex flex-col flex-shrink-0 w-48' : 'flex',
        variant === 'underline' && !isVertical && 'border-b border-white/8',
        variant === 'card' && 'bg-white/3 border border-white/8 rounded-2xl p-1',
        variant === 'pill' && 'bg-white/3 border border-white/8 rounded-full p-1',
      )}>
        {/* Animated indicator */}
        {(variant === 'pill' || variant === 'card') && (
          <motion.div
            className={cn(
              'absolute pointer-events-none z-0',
              variant === 'pill' && 'bg-white/10 border border-white/10 rounded-full',
              variant === 'card' && 'bg-white/8 border border-white/8 rounded-xl',
            )}
            animate={{
              left: indicatorStyle.left,
              top: indicatorStyle.top,
              width: indicatorStyle.width,
              height: indicatorStyle.height,
            }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        )}

        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[tab.id] = el; }}
              onClick={() => !tab.disabled && handleChange(tab.id)}
              disabled={tab.disabled}
              className={cn(
                'relative z-10 flex items-center gap-2 font-semibold text-sm',
                'transition-colors duration-150 select-none',
                'disabled:opacity-40 disabled:cursor-not-allowed',
                isVertical ? 'px-4 py-2.5 rounded-xl text-left w-full' : 'px-4 py-2.5',
                variant === 'underline' && [
                  'text-gray-500 hover:text-white',
                  isActive && 'text-white',
                ],
                variant === 'pill' && [
                  'text-gray-500 hover:text-white rounded-full',
                  isActive && 'text-white',
                ],
                variant === 'card' && [
                  'text-gray-500 hover:text-white rounded-xl',
                  isActive && 'text-white',
                ],
              )}
            >
              {tab.icon && (
                <span className={cn(
                  'transition-colors',
                  isActive ? 'text-cyan-400' : 'text-gray-600',
                )}>
                  {tab.icon}
                </span>
              )}
              {tab.label}
              {tab.badge && <span className="ml-1">{tab.badge}</span>}

              {/* Underline indicator */}
              {variant === 'underline' && isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';
export default Tabs;