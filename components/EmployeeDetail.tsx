
import React from 'react';
import { Employee } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface EmployeeDetailProps {
  employee: Employee;
  onClose: () => void;
}

export const EmployeeDetail: React.FC<EmployeeDetailProps> = ({ employee, onClose }) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-rose-600';
  };

  const getPerformanceBg = (score: number) => {
    if (score >= 90) return 'bg-emerald-100';
    if (score >= 75) return 'bg-blue-100';
    if (score >= 60) return 'bg-amber-100';
    return 'bg-rose-100';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex items-end">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
            </svg>
          </button>
          
          <div className="flex items-center gap-6 translate-y-8">
            <div className="w-24 h-24 rounded-2xl bg-white shadow-lg border-4 border-white flex items-center justify-center text-3xl font-bold text-blue-600">
              {getInitials(employee.name)}
            </div>
            <div className="mb-2">
              <h2 className="text-3xl font-extrabold text-white drop-shadow-sm">{employee.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-blue-100 font-medium">{employee.role}</span>
                <span className="text-white/40">•</span>
                <span className="text-blue-100">{employee.department}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Core Details */}
            <div className="lg:col-span-1 space-y-6">
              <section>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Employee ID</p>
                      <p className="text-sm font-semibold text-slate-900">{employee.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Email Address</p>
                      <p className="text-sm font-semibold text-slate-900">{employee.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Hire Date</p>
                      <p className="text-sm font-semibold text-slate-900">{employee.hireDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${employee.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Employment Status</p>
                      <p className="text-sm font-semibold text-slate-900">{employee.status}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={`p-4 rounded-xl border-2 border-dashed ${getPerformanceBg(employee.performanceScore)} border-opacity-50`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Performance</h4>
                  <span className={`text-lg font-black ${getPerformanceColor(employee.performanceScore)}`}>{employee.performanceScore}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full ${getPerformanceColor(employee.performanceScore).replace('text', 'bg')} transition-all duration-1000`} 
                    style={{ width: `${employee.performanceScore}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 italic">Based on latest quarterly review data.</p>
              </section>
            </div>

            {/* Middle/Right Column: Charts and History */}
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Salary Trajectory</h4>
                    <p className="text-2xl font-bold text-slate-900">${employee.salary.toLocaleString()}<span className="text-sm text-slate-400 font-normal ml-2">Current Base</span></p>
                  </div>
                </div>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={employee.salaryHistory}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="date" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false} 
                        tick={{fill: '#94a3b8'}}
                        tickFormatter={(val) => new Date(val).getFullYear().toString()}
                      />
                      <YAxis 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false} 
                        tick={{fill: '#94a3b8'}}
                        tickFormatter={(val) => `$${val/1000}k`}
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Salary']}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="amount" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} 
                        activeDot={{ r: 6 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Communication', 'Leadership', 'Problem Solving', 'Adaptability'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Recent Activity</h4>
                  <ul className="text-xs space-y-2 text-slate-600">
                    <li className="flex gap-2">
                      <span className="text-blue-500">•</span> 
                      Completed Annual Security Audit
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500">•</span> 
                      Promoted from Senior to Lead (2023)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-8 flex justify-end gap-3">
          <button 
            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            onClick={onClose}
          >
            Close Profile
          </button>
          <button className="px-6 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            Edit Employee
          </button>
        </div>
      </div>
    </div>
  );
};
