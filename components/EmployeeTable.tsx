
import React from 'react';
import { Employee } from '../types';

interface EmployeeTableProps {
  employees: Employee[];
  onSelectEmployee: (employee: Employee) => void;
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onSelectEmployee }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Designation</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Salary</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Hire Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-200">
          {employees.map((emp) => (
            <tr 
              key={emp.id} 
              className="hover:bg-blue-50/50 cursor-pointer transition-colors group"
              onClick={() => onSelectEmployee(emp)}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 group-hover:underline">{emp.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">{emp.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{emp.role}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-semibold">
                ${emp.salary.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                  emp.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                }`}>
                  {emp.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{emp.hireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
