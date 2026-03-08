import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Badge } from '../Badge';
import { Avatar } from '../Avatar';

const meta: Meta = {
  title: 'TheX/Table',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0a0a0f' }],
    },
    docs: {
      description: {
        component: `
# Table

A fully featured data table with sorting, selection, pagination, custom renderers, and skeleton loading.

## AI Prompt
\`\`\`
Build a Table component using React, TypeScript, Tailwind CSS and Framer Motion.
Features: sortable columns, row selection with checkboxes, pagination,
custom cell renderers, skeleton loading state, hover highlight, empty state.
Animated row entrance. Dark theme with cyan accent.
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'online' | 'offline' | 'away';
  joined: string;
  revenue: number;
};

const users: User[] = [
  { id: '1', name: 'Daniel Elemide', email: 'daniel@thex.dev', role: 'Admin', status: 'online', joined: 'Jan 2024', revenue: 12400 },
  { id: '2', name: 'Sarah Khan', email: 'sarah@thex.dev', role: 'Developer', status: 'away', joined: 'Mar 2024', revenue: 8200 },
  { id: '3', name: 'John Doe', email: 'john@thex.dev', role: 'Designer', status: 'offline', joined: 'Feb 2024', revenue: 6100 },
  { id: '4', name: 'Emma Wilson', email: 'emma@thex.dev', role: 'Developer', status: 'online', joined: 'Apr 2024', revenue: 9800 },
  { id: '5', name: 'Mike Brown', email: 'mike@thex.dev', role: 'Manager', status: 'online', joined: 'Jan 2024', revenue: 15200 },
];

export const Default: StoryObj = {
  render: () => (
    <div style={{ background: '#0a0a0f', padding: '24px' }}>
      <Table
        data={users}
        keyExtractor={(row) => row.id}
        columns={[
          {
            key: 'name',
            label: 'User',
            sortable: true,
            render: (_, row) => (
              <div className="flex items-center gap-3">
                <Avatar name={row.name as string} size="sm" status={row.status} />
                <div>
                  <p className="text-white text-sm font-semibold">{row.name as string}</p>
                  <p className="text-gray-600 text-xs">{row.email as string}</p>
                </div>
              </div>
            ),
          },
          { key: 'role', label: 'Role', sortable: true },
          {
            key: 'status',
            label: 'Status',
            render: (val) => (
              <Badge
                variant={val === 'online' ? 'success' : val === 'away' ? 'warning' : 'default'}
                dot
                pulse={val === 'online'}
              >
                {String(val)}
              </Badge>
            ),
          },
          { key: 'joined', label: 'Joined', sortable: true },
          {
            key: 'revenue',
            label: 'Revenue',
            sortable: true,
            align: 'right',
            render: (val) => (
              <span className="text-green-400 font-semibold">
                ${(val as number).toLocaleString()}
              </span>
            ),
          },
        ]}
      />
    </div>
  ),
};

export const WithSelection: StoryObj = {
  render: () => (
    <div style={{ background: '#0a0a0f', padding: '24px' }}>
      <Table
        data={users}
        keyExtractor={(row) => row.id}
        selectable
        onRowClick={(row) => alert(`Clicked: ${row.name}`)}
        columns={[
          { key: 'name', label: 'Name', sortable: true },
          { key: 'role', label: 'Role' },
          { key: 'joined', label: 'Joined' },
        ]}
      />
    </div>
  ),
};

export const WithPagination: StoryObj = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div style={{ background: '#0a0a0f', padding: '24px' }}>
        <Table
          data={users.slice((page - 1) * 2, page * 2)}
          keyExtractor={(row) => row.id}
          columns={[
            { key: 'name', label: 'Name', sortable: true },
            { key: 'role', label: 'Role' },
            { key: 'revenue', label: 'Revenue', sortable: true, align: 'right',
              render: (val) => <span className="text-green-400">${(val as number).toLocaleString()}</span> },
          ]}
          pagination={{
            page,
            pageSize: 2,
            total: users.length,
            onPageChange: setPage,
          }}
        />
      </div>
    );
  },
};

export const Loading: StoryObj = {
  render: () => (
    <div style={{ background: '#0a0a0f', padding: '24px' }}>
      <Table
        data={[]}
        loading
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' },
          { key: 'revenue', label: 'Revenue' },
        ]}
      />
    </div>
  ),
};

export const Empty: StoryObj = {
  render: () => (
    <div style={{ background: '#0a0a0f', padding: '24px' }}>
      <Table
        data={[]}
        emptyMessage="No users found. Try adjusting your filters."
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' },
        ]}
      />
    </div>
  ),
};