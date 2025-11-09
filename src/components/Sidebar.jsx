import React from 'react';
import { Home, Calendar, BookOpen, GraduationCap, ClipboardList, CheckCircle, Wallet, Megaphone, Shield, BarChart3, Settings } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: Home },
  { label: 'Calendar', icon: Calendar },
  { label: 'Courses', icon: BookOpen },
  { label: 'Grades', icon: GraduationCap },
  { label: 'Attendance', icon: CheckCircle },
  { label: 'Assignments', icon: ClipboardList },
  { label: 'Finance', icon: Wallet },
  { label: 'Announcements', icon: Megaphone },
  { label: 'Administration', icon: Shield },
  { label: 'Reports', icon: BarChart3 },
  { label: 'Settings', icon: Settings },
];

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`flex-shrink-0 ${collapsed ? 'w-20' : 'w-72'} transition-all duration-300 bg-white/70 dark:bg-zinc-900/70 backdrop-blur border-r border-zinc-200 dark:border-zinc-800 h-screen sticky top-0`}> 
      <div className="flex items-center justify-between px-4 h-16 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-blue-600" />
          {!collapsed && (
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100 leading-none">Uni AIS</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Academic System</p>
            </div>
          )}
        </div>
        <button onClick={onToggle} aria-label="Toggle Sidebar" className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      </div>
      <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
        {navItems.map(({ label, icon: Icon }) => (
          <button key={label} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-blue-50 dark:hover:bg-zinc-800/80 group`}> 
            <Icon className="h-5 w-5 text-zinc-500 group-hover:text-blue-600" />
            {!collapsed && <span>{label}</span>}
            {!collapsed && label === 'Dashboard' && (
              <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Home</span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
