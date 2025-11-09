import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import RolePanels from './components/RolePanels.jsx';

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');
  const [role, setRole] = useState('Student');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="flex">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        <main className="flex-1 min-h-screen flex flex-col">
          <Topbar theme={theme} setTheme={setTheme} role={role} setRole={setRole} />

          <div className="p-4 md:p-6 space-y-6">
            <section>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Academic Information System</h1>
              <p className="text-zinc-600 dark:text-zinc-400">Role-based dashboard for Students, Lecturers, Administrators, and Department Heads. Switch roles from the top-right to preview different portals.</p>
            </section>

            <Dashboard role={role} />
            <RolePanels role={role} />

            <footer className="pt-4 text-center text-xs text-zinc-500">
              <p>Multi-language: English • Bahasa Indonesia | Theme: Light/Dark | Responsive Layout</p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
