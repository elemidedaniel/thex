import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../tokens/cn';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpen?: string[];
  variant?: 'flat' | 'glass' | 'separated';
  className?: string;
}

export const Accordion = ({
  items,
  multiple = false,
  defaultOpen = [],
  variant = 'flat',
  className,
}: AccordionProps) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpen));

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!multiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  const wrapperClass = cn(
    variant === 'separated' ? 'flex flex-col gap-2' : 'flex flex-col',
    className
  );

  const itemClass = (isFirst: boolean, isLast: boolean) =>
    cn(
      'overflow-hidden transition-colors duration-200',
      variant === 'flat' && [
        'border-x border-white/8',
        isFirst && 'border-t rounded-t-2xl',
        isLast && 'border-b rounded-b-2xl',
        'border-b border-white/8',
      ],
      variant === 'glass' && [
        'border-x border-white/10 backdrop-blur-md bg-white/3',
        isFirst && 'border-t rounded-t-2xl',
        isLast && 'border-b rounded-b-2xl',
        'border-b border-white/8',
      ],
      variant === 'separated' && [
        'rounded-2xl border border-white/8 bg-[#0f0f17]',
      ],
    );

  return (
    <div className={wrapperClass}>
      {items.map((item, index) => {
        const isOpen = openIds.has(item.id);
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <div key={item.id} className={itemClass(isFirst, isLast)}>
            {/* Trigger */}
            <button
              onClick={() => !item.disabled && toggle(item.id)}
              disabled={item.disabled}
              className={cn(
                'w-full flex items-center justify-between gap-4',
                'px-5 py-4 text-left',
                'transition-colors duration-150',
                'disabled:opacity-40 disabled:cursor-not-allowed',
                isOpen
                  ? 'text-white bg-white/3'
                  : 'text-gray-400 hover:text-white hover:bg-white/2',
              )}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {item.icon && (
                  <span className={cn(
                    'flex-shrink-0 transition-colors',
                    isOpen ? 'text-cyan-400' : 'text-gray-600',
                  )}>
                    {item.icon}
                  </span>
                )}
                <span className="font-semibold text-sm truncate">
                  {item.title}
                </span>
                {item.badge && (
                  <span className="flex-shrink-0">{item.badge}</span>
                )}
              </div>

              {/* Arrow */}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'flex-shrink-0 text-xs transition-colors',
                  isOpen ? 'text-cyan-400' : 'text-gray-600',
                )}
              >
                ▼
              </motion.span>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/5">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = 'Accordion';
export default Accordion;