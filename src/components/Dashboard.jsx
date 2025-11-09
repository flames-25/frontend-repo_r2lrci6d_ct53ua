import React, { useMemo } from 'react';
import { BookOpen, GraduationCap, Users, Calendar, TrendingUp, CheckCircle, Wallet, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

function StatCard({ title, value, icon: Icon, color = 'from-blue-500 to-blue-600', sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200 dark:border-zinc-800"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500">{title}</p>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
        </div>
        <div className={`h-12 w-12 rounded-lg grid place-items-center text-white bg-gradient-to-br ${color}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
      {sub && <p className="mt-2 text-xs text-zinc-500">{sub}</p>}
    </motion.div>
  );
}

function SectionCard({ title, actionLabel, children }) {
  return (
    <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
        {actionLabel && (
          <button className="text-sm text-blue-600 hover:underline">{actionLabel}</button>
        )}
      </div>
      {children}
    </div>
  );
}

export default function Dashboard({ role }) {
  const stats = useMemo(() => {
    switch (role) {
      case 'Student':
        return [
          { title: 'Enrolled Credits', value: '20 SKS', icon: BookOpen },
          { title: 'Current GPA', value: '3.72', icon: TrendingUp, color: 'from-emerald-500 to-emerald-600', sub: '+0.12 vs last term' },
          { title: 'Attendance', value: '96%', icon: CheckCircle, color: 'from-indigo-500 to-indigo-600' },
          { title: 'Outstanding Fees', value: '$120', icon: Wallet, color: 'from-rose-500 to-rose-600' },
        ];
      case 'Lecturer':
        return [
          { title: 'Active Courses', value: '4', icon: BookOpen },
          { title: 'Students This Term', value: '128', icon: Users, color: 'from-violet-500 to-violet-600' },
          { title: 'Pending Grading', value: '36', icon: GraduationCap, color: 'from-amber-500 to-amber-600' },
          { title: 'New Messages', value: '5', icon: Megaphone, color: 'from-sky-500 to-sky-600' },
        ];
      case 'Admin':
        return [
          { title: 'Active Students', value: '3,245', icon: Users },
          { title: 'Enrollment Requests', value: '42', icon: BookOpen, color: 'from-fuchsia-500 to-fuchsia-600' },
          { title: 'Pending Approvals', value: '18', icon: CheckCircle, color: 'from-cyan-500 to-cyan-600' },
          { title: 'Announcements', value: '3', icon: Megaphone, color: 'from-rose-500 to-rose-600' },
        ];
      default:
        return [
          { title: 'Dept Students', value: '1,120', icon: Users },
          { title: 'Avg GPA', value: '3.35', icon: TrendingUp, color: 'from-emerald-500 to-emerald-600' },
          { title: 'Attendance Rate', value: '94%', icon: CheckCircle, color: 'from-indigo-500 to-indigo-600' },
          { title: 'Open Issues', value: '7', icon: Megaphone, color: 'from-amber-500 to-amber-600' },
        ];
    }
  }, [role]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SectionCard title="Academic Calendar" actionLabel="View all">
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between py-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
              <span className="text-zinc-700 dark:text-zinc-300">Midterm Exams</span>
              <span className="text-zinc-500">Oct 20 - Oct 26</span>
            </li>
            <li className="flex items-center justify-between py-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
              <span className="text-zinc-700 dark:text-zinc-300">Project Submission</span>
              <span className="text-zinc-500">Nov 10</span>
            </li>
            <li className="flex items-center justify-between py-2">
              <span className="text-zinc-700 dark:text-zinc-300">Final Exams</span>
              <span className="text-zinc-500">Dec 12 - Dec 20</span>
            </li>
          </ul>
        </SectionCard>

        <SectionCard title="GPA Trend" actionLabel="Open analytics">
          <div className="h-48 w-full">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              <defs>
                <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,90 C60,70 120,110 180,80 C220,60 260,40 300,50 L300,120 L0,120 Z" fill="url(#grad)" />
              <path d="M0,90 C60,70 120,110 180,80 C220,60 260,40 300,50" stroke="#3b82f6" strokeWidth="2" fill="none" />
            </svg>
            <div className="flex justify-between text-xs text-zinc-500">
              <span>Sem 1</span><span>Sem 2</span><span>Sem 3</span><span>Sem 4</span><span>Sem 5</span>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Announcements" actionLabel="Create">
          <div className="space-y-3">
            {[1,2,3].map((i) => (
              <div key={i} className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">System Maintenance - Sunday 2 AM</p>
                <p className="text-xs text-zinc-500">Please save your work. Portal access will be limited.</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SectionCard title="Quick Actions">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Register Courses', icon: BookOpen },
              { label: 'View Transcript', icon: GraduationCap },
              { label: 'Record Attendance', icon: CheckCircle },
              { label: 'Upload Materials', icon: BookOpen },
              { label: 'Approve KRS', icon: CheckCircle },
              { label: 'Export Reports', icon: Megaphone },
            ].map(({ label, icon: Icon }) => (
              <button key={label} className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-400 hover:shadow-sm text-sm flex items-center gap-2">
                <Icon className="h-5 w-5 text-blue-600" />
                <span className="text-zinc-700 dark:text-zinc-200">{label}</span>
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Schedule Today">
          <ul className="space-y-2">
            {[{time:'08:00', title:'Data Structures', room:'B-203'}, {time:'10:00', title:'Operating Systems', room:'A-105'}, {time:'14:00', title:'Advising - John D.', room:'Online'}].map((s) => (
              <li key={s.title} className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{s.title}</p>
                    <p className="text-xs text-zinc-500">{s.room}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">{s.time}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
