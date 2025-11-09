import React from 'react';
import { Bell, Search, Sun, Moon, Globe, User } from 'lucide-react';

export default function Topbar({ theme, setTheme, role, setRole }) {
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="h-16 px-4 flex items-center gap-3">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search students, courses, lecturers..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="px-2 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>

          <button onClick={toggleTheme} className="px-2 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300" aria-label="Theme toggle">
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="appearance-none pl-9 pr-8 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none"
            >
              <option>Student</option>
              <option>Lecturer</option>
              <option>Admin</option>
              <option>Department Head</option>
            </select>
            <Globe className="h-4 w-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <button className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white">
              <User className="h-5 w-5" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Alex Morgan</p>
              <p className="text-xs text-zinc-500">{role}</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
