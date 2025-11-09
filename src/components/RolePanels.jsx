import React from 'react';

export default function RolePanels({ role }) {
  if (role === 'Student') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Panel title="My Courses">
          <Table headers={["Course", "SKS", "Lecturer", "Status"]} rows={[
            ["Algorithms", "3", "Dr. Nadia", "Enrolled"],
            ["DB Systems", "3", "Prof. Amir", "Enrolled"],
            ["AI Basics", "2", "Dr. Hartono", "Waitlist"],
          ]} />
        </Panel>
        <Panel title="Assignments">
          <Table headers={["Course", "Title", "Due", "Status"]} rows={[
            ["Algorithms", "Homework 3", "Oct 18", "Submitted"],
            ["DB Systems", "Project ERD", "Oct 21", "Pending"],
            ["AI Basics", "Quiz 1", "Oct 25", "Scheduled"],
          ]} />
        </Panel>
      </div>
    );
  }

  if (role === 'Lecturer') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Panel title="Teaching Schedule">
          <Table headers={["Time", "Course", "Room", "Class"]} rows={[
            ["08:00", "Data Structures", "B-203", "A"],
            ["10:00", "Operating Systems", "A-105", "B"],
            ["14:00", "Advising", "Online", "—"],
          ]} />
        </Panel>
        <Panel title="Grading Queue">
          <Table headers={["Course", "Task", "Submissions", "Pending"]} rows={[
            ["Data Structures", "Quiz 2", "64", "12"],
            ["Operating Systems", "Assignment 1", "58", "7"],
          ]} />
        </Panel>
      </div>
    );
  }

  if (role === 'Admin') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Panel title="Approval Center">
          <Table headers={["Type", "Owner", "Date", "Action"]} rows={[
            ["KRS", "Rika P.", "Oct 12", "Review"],
            ["Grade Change", "Dr. Jain", "Oct 13", "Approve"],
          ]} />
        </Panel>
        <Panel title="Accounts Summary">
          <Table headers={["Role", "Active", "Pending", "Disabled"]} rows={[
            ["Students", "3,245", "42", "15"],
            ["Lecturers", "210", "3", "2"],
          ]} />
        </Panel>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Panel title="Department Overview">
        <Table headers={["Program", "Students", "Avg GPA", "Attendance"]} rows={[
          ["Informatics", "720", "3.31", "95%"],
          ["Information Systems", "260", "3.42", "93%"],
        ]} />
      </Panel>
      <Panel title="Pending Approvals">
        <Table headers={["Type", "Requester", "Date", "Status"]} rows={[
          ["Grade Change", "Dr. Maya", "Oct 10", "Waiting"],
          ["Late Registration", "Adam Z.", "Oct 11", "Waiting"],
        ]} />
      </Panel>
    </div>
  );
}

function Panel({ title, children }) {
  return (
    <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
        <button className="text-sm text-blue-600 hover:underline">View more</button>
      </div>
      {children}
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-zinc-500">
          <tr>
            {headers.map((h) => (
              <th key={h} className="py-2 pr-4 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-200">
          {rows.map((r, i) => (
            <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
              {r.map((c, j) => (
                <td key={j} className="py-2 pr-4 whitespace-nowrap">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
