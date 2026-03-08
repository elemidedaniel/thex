import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../tokens/cn';

export interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  selectable?: boolean;
  onRowClick?: (row: T) => void;
  keyExtractor?: (row: T) => string;
  emptyMessage?: string;
  className?: string;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    onPageChange: (page: number) => void;
  };
}

type SortDirection = 'asc' | 'desc' | null;

const SkeletonRow = ({ columns }: { columns: number }) => (
  <tr className="border-b border-white/3">
    {Array.from({ length: columns }).map((_, i) => (
      <td key={i} className="px-4 py-3">
        <div className="h-4 bg-white/5 rounded animate-pulse" style={{ width: `${60 + Math.random() * 40}%` }} />
      </td>
    ))}
  </tr>
);

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  loading,
  selectable,
  onRowClick,
  keyExtractor,
  emptyMessage = 'No data available',
  className,
  pagination,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const getKey = (row: T, index: number) =>
    keyExtractor ? keyExtractor(row) : String(index);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : sortDir === 'desc' ? null : 'asc');
      if (sortDir === 'desc') setSortKey(null);
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey || !sortDir) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    if (aVal === undefined || bVal === undefined) return 0;
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
    }
    return sortDir === 'asc'
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  const toggleSelect = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const toggleAll = () => {
    if (selected.size === data.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(data.map((row, i) => getKey(row, i))));
    }
  };

  const totalPages = pagination
    ? Math.ceil(pagination.total / pagination.pageSize)
    : 1;

  return (
    <div className={cn('flex flex-col gap-0 w-full', className)}>
      <div className="overflow-x-auto rounded-2xl border border-white/8">
        <table className="w-full border-collapse">
          {/* Head */}
          <thead>
            <tr className="border-b border-white/8 bg-white/2">
              {selectable && (
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selected.size === data.length && data.length > 0}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded accent-cyan-400 cursor-pointer"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={cn(
                    'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500',
                    col.sortable && 'cursor-pointer select-none hover:text-white transition-colors',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right',
                  )}
                  style={{ width: col.width }}
                  onClick={() => col.sortable && handleSort(String(col.key))}
                >
                  <div className={cn(
                    'flex items-center gap-1',
                    col.align === 'center' && 'justify-center',
                    col.align === 'right' && 'justify-end',
                  )}>
                    {col.label}
                    {col.sortable && (
                      <span className={cn(
                        'text-xs transition-colors',
                        sortKey === String(col.key) ? 'text-cyan-400' : 'text-gray-700',
                      )}>
                        {sortKey === String(col.key)
                          ? sortDir === 'asc' ? '▲' : '▼'
                          : '▼'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <SkeletonRow key={i} columns={columns.length + (selectable ? 1 : 0)} />
              ))
            ) : sortedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="px-4 py-12 text-center text-gray-600 text-sm"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              <AnimatePresence>
                {sortedData.map((row, index) => {
                  const key = getKey(row, index);
                  const isSelected = selected.has(key);
                  const isHovered = hoveredRow === key;

                  return (
                    <motion.tr
                      key={key}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                      className={cn(
                        'border-b border-white/3 transition-colors duration-150',
                        onRowClick && 'cursor-pointer',
                        isSelected && 'bg-cyan-500/5',
                        isHovered && !isSelected && 'bg-white/3',
                      )}
                      onMouseEnter={() => setHoveredRow(key)}
                      onMouseLeave={() => setHoveredRow(null)}
                      onClick={() => onRowClick?.(row)}
                    >
                      {selectable && (
                        <td className="w-10 px-4 py-3" onClick={(e) => { e.stopPropagation(); toggleSelect(key); }}>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleSelect(key)}
                            className="w-4 h-4 rounded accent-cyan-400 cursor-pointer"
                          />
                        </td>
                      )}
                      {columns.map((col) => (
                        <td
                          key={String(col.key)}
                          className={cn(
                            'px-4 py-3 text-sm text-gray-300',
                            col.align === 'center' && 'text-center',
                            col.align === 'right' && 'text-right',
                          )}
                        >
                          {col.render
                            ? col.render(row[col.key as keyof T], row, index)
                            : String(row[col.key as keyof T] ?? '')}
                        </td>
                      ))}
                    </motion.tr>
                  );
                })}
              </AnimatePresence>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
          <p className="text-gray-600 text-xs">
            Showing {((pagination.page - 1) * pagination.pageSize) + 1} to{' '}
            {Math.min(pagination.page * pagination.pageSize, pagination.total)} of{' '}
            {pagination.total} results
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => pagination.onPageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-white/3 hover:bg-white/8 border border-white/8 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => (
              <button
                key={i}
                onClick={() => pagination.onPageChange(i + 1)}
                className={cn(
                  'w-7 h-7 text-xs rounded-lg transition-all',
                  pagination.page === i + 1
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/20'
                    : 'text-gray-500 hover:text-white hover:bg-white/5',
                )}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => pagination.onPageChange(pagination.page + 1)}
              disabled={pagination.page === totalPages}
              className="px-3 py-1.5 text-xs text-gray-400 hover:text-white bg-white/3 hover:bg-white/8 border border-white/8 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Table.displayName = 'Table';
export default Table;