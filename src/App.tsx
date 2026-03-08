import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { Avatar, AvatarGroup } from './components/Avatar';
import { Spinner } from './components/Spinner';
import { Input } from './components/Input';
import { Toggle } from './components/Toggle';
import { Checkbox } from './components/Checkbox';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { Drawer } from './components/Drawer';
import { ToastProvider, useToast } from './components/Toast';
import { Tabs } from './components/Tabs';
import { Accordion } from './components/Accordion';
import { ProgressBar, CircularProgress, StepProgress } from './components/Progress';
import { Tooltip } from './components/Tooltip';
import { Select } from './components/Select';
import { Table } from './components/Table';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section
    className="flex flex-col gap-6"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="flex items-center gap-3">
      <h2 className="text-white font-black text-xl tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-white/5" />
    </div>
    {children}
  </motion.section>
);

const AppContent = () => {
  const { toast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toggleStates, setToggleStates] = useState({
    notifications: true,
    darkMode: true,
    autoSave: false,
  });
  const [checkStates, setCheckStates] = useState({
    react: true,
    typescript: true,
    tailwind: false,
  });
  const [selectValue, setSelectValue] = useState('');
  const [step, setStep] = useState(1);


  const tableData = [
    { id: '1', name: 'Daniel Elemide', role: 'Admin', status: 'online', revenue: 12400 },
    { id: '2', name: 'Sarah Khan', role: 'Developer', status: 'away', revenue: 8200 },
    { id: '3', name: 'John Doe', role: 'Designer', status: 'offline', revenue: 6100 },
    { id: '4', name: 'Emma Wilson', role: 'Developer', status: 'online', revenue: 9800 },
  ] as const;

  return (
    <div
      className="min-h-screen"
      style={{ background: '#0a0a0f', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,211,238,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
>
            <Badge variant="primary" dot pulse size="lg" className="mb-6">
              v1.0.0 — Now Available
            </Badge>
          </motion.div>
          <motion.h1
            className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            The
            <span
              style={{
                background: 'linear-gradient(135deg, #22d3ee 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              X
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-400 text-xl max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A next-generation React component library. 20 components.
            Motion-first. Obsessively documented.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button size="lg" rounded="full" leftIcon={<span>⚡</span>}>
              Get Started
            </Button>
            <Button size="lg" variant="secondary" rounded="full" leftIcon={<span>★</span>}>
              GitHub
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-12 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { value: '20', label: 'Components' },
              { value: '100%', label: 'TypeScript' },
              { value: 'WCAG 2.2', label: 'Accessible' },
              { value: 'Motion', label: 'Animated' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Components */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-20">

        {/* Buttons */}
        <Section title="Button">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="glass">Glass</Button>
            <Button loading>Loading</Button>
            <Button leftIcon={<span>🚀</span>}>With Icon</Button>
            <Button rounded="full" variant="primary">Rounded</Button>
          </div>
        </Section>

        {/* Badges */}
        <Section title="Badge">
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success" dot pulse>Live</Badge>
            <Badge variant="error" count={42} />
            <Badge variant="primary" count={100} maxCount={99} />
          </div>
        </Section>

        {/* Avatars */}
        <Section title="Avatar">
          <div className="flex flex-wrap gap-6 items-end">
            <div className="flex gap-3 items-end">
              {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <Avatar key={size} name="Daniel Elemide" size={size} />
              ))}
            </div>
            <div className="flex gap-3">
              <Avatar name="Daniel E" status="online" size="lg" />
              <Avatar name="Sarah K" status="away" size="lg" />
              <Avatar name="John D" status="busy" size="lg" />
              <Avatar name="Emma W" status="offline" size="lg" />
            </div>
            <AvatarGroup
              size="md"
              avatars={[
                { name: 'Daniel E' },
                { name: 'Sarah K' },
                { name: 'John D' },
                { name: 'Emma W' },
                { name: 'Mike B' },
              ]}
              max={4}
            />
          </div>
        </Section>

        {/* Spinners */}
        <Section title="Spinner">
          <div className="flex flex-wrap gap-8 items-center">
            <Spinner variant="ring" size="lg" label="Ring" />
            <Spinner variant="dots" size="lg" label="Dots" />
            <Spinner variant="pulse" size="lg" label="Pulse" />
            <Spinner variant="ring" color="success" size="lg" label="Success" />
            <Spinner variant="ring" color="error" size="lg" label="Error" />
          </div>
        </Section>

        {/* Inputs */}
        <Section title="Input">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <Input label="Default" placeholder="Enter text..." />
            <Input label="With Icon" placeholder="Search..." leftIcon={<span>🔍</span>} />
            <Input label="Error State" error="This field is required" placeholder="Enter email..." />
            <Input label="Success State" success="Looks good!" placeholder="Username..." />
            <Input label="Password" type="password" placeholder="••••••••" />
            <Input floatingLabel label="Floating Label" />
          </div>
        </Section>

        {/* Select */}
        <Section title="Select">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl relative">
            <Select
              label="Framework"
              options={[
                { value: 'react', label: 'React', icon: <span>⚛️</span> },
                { value: 'vue', label: 'Vue', icon: <span>💚</span> },
                { value: 'svelte', label: 'Svelte', icon: <span>🧡</span> },
                { value: 'next', label: 'Next.js', icon: <span>▲</span> },
              ]}
              value={selectValue}
              onChange={(v) => setSelectValue(v as string)}
              clearable
              searchable
              placeholder="Select framework..."
            />
          </div>
        </Section>

        {/* Toggle & Checkbox */}
        <Section title="Toggle & Checkbox">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider">Toggles</p>
              <Toggle
                checked={toggleStates.notifications}
                onChange={(v) => setToggleStates((s) => ({ ...s, notifications: v }))}
                label="Push Notifications"
                description="Receive price alert emails"
                color="primary"
              />
              <Toggle
                checked={toggleStates.darkMode}
                onChange={(v) => setToggleStates((s) => ({ ...s, darkMode: v }))}
                label="Dark Mode"
                color="primary"
              />
              <Toggle
                checked={toggleStates.autoSave}
                onChange={(v) => setToggleStates((s) => ({ ...s, autoSave: v }))}
                label="Auto Save"
                color="success"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider">Checkboxes</p>
              <Checkbox
                checked={checkStates.react}
                onChange={(v) => setCheckStates((s) => ({ ...s, react: v }))}
                label="React"
                description="UI component library"
              />
              <Checkbox
                checked={checkStates.typescript}
                onChange={(v) => setCheckStates((s) => ({ ...s, typescript: v }))}
                label="TypeScript"
                description="Typed JavaScript"
              />
              <Checkbox
                checked={checkStates.tailwind}
                onChange={(v) => setCheckStates((s) => ({ ...s, tailwind: v }))}
                label="Tailwind CSS"
                description="Utility-first CSS framework"
              />
            </div>
          </div>
        </Section>

        {/* Progress */}
        <Section title="Progress">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 max-w-lg">
              <ProgressBar value={85} color="primary" label="Primary" showValue />
              <ProgressBar value={60} color="success" label="Success" showValue />
              <ProgressBar value={40} color="error" label="Error" showValue />
              <ProgressBar value={70} color="warning" label="Warning" showValue />
            </div>
            <div className="flex flex-wrap gap-6">
              <CircularProgress value={85} color="primary" label="Primary" />
              <CircularProgress value={60} color="success" label="Success" />
              <CircularProgress value={40} color="error" label="Error" />
              <CircularProgress value={70} color="warning" label="Warning" />
            </div>
            <div className="max-w-lg">
              <StepProgress
                steps={['Account', 'Profile', 'Payment', 'Done']}
                currentStep={step}
              />
              <div className="flex gap-3 mt-4">
                <Button size="sm" variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>← Back</Button>
                <Button size="sm" variant="primary" onClick={() => setStep((s) => Math.min(3, s + 1))} disabled={step === 3}>Next →</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Cards */}
        <Section title="Card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Revenue', value: '$48,294', change: '+12.5%', color: 'text-green-400' },
              { label: 'Active Users', value: '2,841', change: '+8.2%', color: 'text-cyan-400' },
              { label: 'Conversion', value: '3.24%', change: '-0.4%', color: 'text-red-400' },
              { label: 'Avg Session', value: '4m 32s', change: '+1.1%', color: 'text-amber-400' },
            ].map((stat) => (
              <Card key={stat.label} variant="flat" hoverable>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                <p className="text-white text-2xl font-black mt-1">{stat.value}</p>
                <p className={`text-xs font-semibold mt-1 ${stat.color}`}>{stat.change} this month</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Tabs */}
        <Section title="Tabs">
          <div className="flex flex-col gap-6 max-w-lg">
            <Tabs
              variant="underline"
              defaultTab="tab1"
              tabs={[
                { id: 'tab1', label: 'Overview', icon: <span>📊</span>, content: <Card variant="flat" className="mt-4"><p className="text-gray-400 text-sm">Overview content with smooth tab transitions.</p></Card> },
                { id: 'tab2', label: 'Analytics', icon: <span>📈</span>, badge: <Badge variant="primary" size="sm">New</Badge>, content: <Card variant="flat" className="mt-4"><p className="text-gray-400 text-sm">Analytics content with charts and data.</p></Card> },
                { id: 'tab3', label: 'Settings', icon: <span>⚙️</span>, content: <Card variant="flat" className="mt-4"><p className="text-gray-400 text-sm">Settings content for configuration.</p></Card> },
              ]}
            />
          </div>
        </Section>

        {/* Accordion */}
        <Section title="Accordion">
          <div className="max-w-lg">
            <Accordion
              variant="separated"
              defaultOpen={['1']}
              items={[
                { id: '1', icon: <span>🚀</span>, title: 'What is TheX?', content: 'TheX is a production-grade React component library built with TypeScript, Tailwind CSS, and Framer Motion. 20 components. Fully animated. Fully documented.' },
                { id: '2', icon: <span>📦</span>, title: 'How do I install it?', content: 'Run npm install @thex/core in your project. Then import any component directly. All exports are tree-shakeable.' },
                { id: '3', icon: <span>♿</span>, title: 'Is it accessible?', content: 'Yes. Every component meets WCAG 2.2 standards with full keyboard navigation and screen reader support.' },
              ]}
            />
          </div>
        </Section>

        {/* Table */}
        <Section title="Table">
          <Table
            data={tableData as unknown as Record<string, unknown>[]}
            keyExtractor={(row) => row.id as string}
            selectable
            columns={[
              {
                key: 'name',
                label: 'User',
                sortable: true,
                render: (_, row) => (
                  <div className="flex items-center gap-3">
                    <Avatar name={row.name as string} size="sm" status={row.status as 'online' | 'offline' | 'away'} />
                    <span className="text-white font-semibold text-sm">{row.name as string}</span>
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
              {
                key: 'revenue',
                label: 'Revenue',
                sortable: true,
                align: 'right',
                render: (val) => (
                  <span className="text-green-400 font-semibold">${(val as number).toLocaleString()}</span>
                ),
              },
            ]}
          />
        </Section>

        {/* Tooltips */}
        <Section title="Tooltip">
          <div className="flex flex-wrap gap-4 py-4">
            <Tooltip content="Default dark tooltip" placement="top">
              <Button variant="secondary">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
              <Button variant="secondary">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" placement="left">
              <Button variant="secondary">Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
              <Button variant="secondary">Right</Button>
            </Tooltip>
            <Tooltip content="Primary style" variant="primary">
              <Button variant="primary">Primary</Button>
            </Tooltip>
          </div>
        </Section>

        {/* Modal & Drawer */}
        <Section title="Modal & Drawer">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>
            <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
              Open Drawer
            </Button>
          </div>

          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Welcome to TheX"
            description="A next-generation React component library."
            footer={
              <div className="flex gap-3 justify-end">
                <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setModalOpen(false)}>Confirm</Button>
              </div>
            }
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              TheX is built with React, TypeScript, Tailwind CSS, and Framer Motion.
              Every component is animated, accessible, and production-ready.
            </p>
          </Modal>

          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            placement="right"
            title="TheX Drawer"
            description="Slides in from any direction."
            footer={
              <div className="flex gap-3">
                <Button variant="ghost" fullWidth onClick={() => setDrawerOpen(false)}>Close</Button>
                <Button variant="primary" fullWidth>Confirm</Button>
              </div>
            }
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              This drawer supports left, right, top, and bottom placements.
              Press ESC or click outside to close.
            </p>
          </Drawer>
        </Section>

        {/* Toast */}
        <Section title="Toast">
          <div className="flex flex-wrap gap-3">
            {([
              { type: 'success', label: 'Success', title: 'Changes saved!', description: 'Your profile has been updated.' },
              { type: 'error', label: 'Error', title: 'Something went wrong', description: 'Please try again.' },
              { type: 'warning', label: 'Warning', title: 'Session expiring', description: 'You will be logged out soon.' },
              { type: 'info', label: 'Info', title: 'Update available', description: 'Version 2.0 is ready.' },
            ] as const).map((t) => (
              <Button
                key={t.type}
                variant={t.type === 'success' ? 'success' : t.type === 'error' ? 'danger' : 'secondary'}
                onClick={() => toast({ type: t.type, title: t.title, description: t.description })}
              >
                {t.label} Toast
              </Button>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <motion.footer
          className="border-t border-white/5 pt-12 pb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-black text-white mb-2">
            The<span style={{ color: '#22d3ee' }}>X</span>
          </p>
          <p className="text-gray-600 text-sm">
            Built by{' '}
            <a
              href="https://daniel-elemide.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Daniel Elemide
            </a>
            {' '}— React · TypeScript · Tailwind · Framer Motion
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/elemidedaniel"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-white transition-colors text-sm"
            >
              GitHub →
            </a>
            <a
              href="https://daniel-elemide.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-white transition-colors text-sm"
            >
              Portfolio →
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

const App = () => (
  <ToastProvider>
    <AppContent />
  </ToastProvider>
);

export default App;