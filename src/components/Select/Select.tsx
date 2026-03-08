import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../tokens/cn';

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps {
  options?: SelectOption[];
  groups?: SelectGroup[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  clearable?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'flat' | 'glass';
  className?: string;
}

export const Select = ({
  options = [],
  groups = [],
  value,
  onChange,
  placeholder = 'Select an option...',
  label,
  hint,
  error,
  disabled,
  searchable,
  multiple,
  clearable,
  size = 'md',
  variant = 'flat',
  className,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedValues = multiple
    ? (Array.isArray(value) ? value : [])
    : (value ? [value as string] : []);

  const allOptions = groups.length > 0
    ? groups.flatMap((g) => g.options)
    : options;

  const filteredOptions = allOptions.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  const filteredGroups = groups.map((g) => ({
    ...g,
    options: g.options.filter((o) =>
      o.label.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((g) => g.options.length > 0);

  const getLabel = (val: string) =>
    allOptions.find((o) => o.value === val)?.label ?? val;

  const displayValue = () => {
    if (selectedValues.length === 0) return null;
    if (multiple) {
      if (selectedValues.length === 1) return getLabel(selectedValues[0]);
      return `${selectedValues.length} selected`;
    }
    return getLabel(selectedValues[0]);
  };

  const handleSelect = (optValue: string) => {
    if (multiple) {
      const current = Array.isArray(value) ? value : [];
      const next = current.includes(optValue)
        ? current.filter((v) => v !== optValue)
        : [...current, optValue];
      onChange?.(next);
    } else {
      onChange?.(optValue);
      setOpen(false);
      setSearch('');
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(multiple ? [] : '');
  };

  useEffect(() => {
    if (open && searchable) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
    if (!open) setSearch('');
  }, [open, searchable]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sizeStyles = {
    sm: 'text-xs px-3 py-2 h-8 rounded-lg',
    md: 'text-sm px-4 py-2.5 h-10 rounded-xl',
    lg: 'text-base px-4 py-3 h-12 rounded-xl',
  };

  const variantStyles = {
    flat: 'bg-white/3 border-white/8 hover:border-white/15',
    glass: 'bg-white/5 border-white/10 backdrop-blur-md hover:border-white/20',
  };

  const renderOptions = (opts: SelectOption[]) =>
    opts.map((opt) => {
      const isSelected = selectedValues.includes(opt.value);
      return (
        <motion.button
          key={opt.value}
          type="button"
          disabled={opt.disabled}
          onClick={() => handleSelect(opt.value)}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left',
            'text-sm transition-colors duration-100',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            isSelected
              ? 'bg-cyan-500/10 text-cyan-400'
              : 'text-gray-300 hover:bg-white/5 hover:text-white',
          )}
          whileTap={{ scale: 0.98 }}
        >
          {multiple && (
            <div className={cn(
              'w-4 h-4 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors',
              isSelected ? 'bg-cyan-500 border-cyan-500' : 'border-white/20',
            )}>
              {isSelected && <span className="text-white text-xs">✓</span>}
            </div>
          )}
          {opt.icon && <span className="flex-shrink-0">{opt.icon}</span>}
          <div className="flex-1 min-w-0">
            <p className="truncate font-medium">{opt.label}</p>
            {opt.description && (
              <p className="text-xs text-gray-600 truncate">{opt.description}</p>
            )}
          </div>
          {!multiple && isSelected && (
            <span className="text-cyan-400 text-xs flex-shrink-0">✓</span>
          )}
        </motion.button>
      );
    });

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)} ref={containerRef}>
      {label && (
        <label className="text-gray-400 text-xs font-medium uppercase tracking-wider">
          {label}
        </label>
      )}

      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={cn(
          'relative w-full flex items-center gap-2 border transition-all duration-200',
          'outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          open && 'border-cyan-500/40 shadow-[0_0_0_3px_rgba(34,211,238,0.08)]',
          error && 'border-red-500/40',
          sizeStyles[size],
          variantStyles[variant],
          !open && !error && variantStyles[variant],
        )}
      >
        <span className={cn(
          'flex-1 text-left truncate',
          displayValue() ? 'text-white' : 'text-gray-600',
        )}>
          {displayValue() || placeholder}
        </span>

        <div className="flex items-center gap-1 flex-shrink-0">
          {clearable && selectedValues.length > 0 && (
            <span
              onClick={handleClear}
              className="text-gray-600 hover:text-gray-300 transition-colors text-xs px-1"
            >
              ✕
            </span>
          )}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'text-xs transition-colors',
              open ? 'text-cyan-400' : 'text-gray-600',
            )}
          >
            ▼
          </motion.span>
        </div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={cn(
              'absolute z-50 w-full mt-1 py-2 px-2',
              'bg-[#0f0f17] border border-white/10 rounded-2xl',
              'shadow-[0_16px_48px_rgba(0,0,0,0.5)]',
              'max-h-60 overflow-y-auto',
            )}
            style={{ top: '100%', left: 0, right: 0, position: 'absolute' }}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Search */}
            {searchable && (
              <div className="px-1 pb-2">
                <input
                  ref={searchRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-cyan-500/40"
                />
              </div>
            )}

            {/* Options */}
            {groups.length > 0 ? (
              filteredGroups.map((group) => (
                <div key={group.label}>
                  <p className="px-3 py-1.5 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {group.label}
                  </p>
                  {renderOptions(group.options)}
                </div>
              ))
            ) : (
              renderOptions(filteredOptions)
            )}

            {filteredOptions.length === 0 && filteredGroups.length === 0 && (
              <p className="text-center text-gray-600 text-sm py-4">
                No results found
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint / Error */}
      <AnimatePresence mode="wait">
        {(error || hint) && (
          <motion.p
            key={error || hint}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className={cn('text-xs', error ? 'text-red-400' : 'text-gray-500')}
          >
            {error || hint}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

Select.displayName = 'Select';
export default Select;