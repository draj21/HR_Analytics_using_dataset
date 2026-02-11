
import React, { useMemo, useState } from 'react';
import { MOCK_EMPLOYEES } from './constants';
import { StatCard } from './components/StatCard';
import { EmployeeTable } from './components/EmployeeTable';
import { AnalyticsCharts } from './components/AnalyticsCharts';
import { ChatInterface } from './components/ChatInterface';

const App: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(true);

  const filteredEmployees = useMemo(() => {
    if (showAll || (!startDate && !endDate)) {
      return MOCK_EMPLOYEES;
    }

    return MOCK_EMPLOYEES.filter((emp) => {
      const hireDate = new Date(emp.hireDate);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && end) {
        return hireDate >= start && hireDate <= end;
      } else if (start) {
        return hireDate >= start;
      } else if (end) {
        return hireDate <= end;
      }
      return true;
    });
  }, [startDate, endDate, showAll]);

  const stats = useMemo(() => {
    const data = filteredEmployees;
    const total = data.length;
    if (total === 0) {
      return { total: 0, avgSalary: 0, activeCount: 0, attritionRate: 0 };
    }
    const avgSalary = data.reduce((acc, curr) => acc + curr.salary, 0) / total;
    const activeCount = data.filter(e => e.status === 'Active').length;
    const inactiveCount = total - activeCount;

    return {
      total,
      avgSalary,
      activeCount,
      attritionRate: (inactiveCount / total) * 100
    };
  }, [filteredEmployees]);

  const handleToggleShowAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setShowAll(isChecked);
    if (isChecked) {
      setStartDate('');
      setEndDate('');
    }
  };

  const handleDateChange = (type: 'start' | 'end', val: string) => {
    if (type === 'start') setStartDate(val);
    else setEndDate(val);
    setShowAll(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-slate-900">HR Analytics Pro</h1>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              SkyNet HR Dataset Monitoring
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Workforce Insights Dashboard</h2>
            <p className="mt-2 text-slate-500">Live analytics based on filtered employee snapshots.</p>
          </div>
          
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-slate-600">Hire Date Range:</label>
              <div className="flex items-center gap-2">
                <input 
                  type="date" 
                  value={startDate}
                  onChange={(e) => handleDateChange('start', e.target.value)}
                  className="text-sm border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="text-slate-400">to</span>
                <input 
                  type="date" 
                  value={endDate}
                  onChange={(e) => handleDateChange('end', e.target.value)}
                  className="text-sm border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
              <input 
                id="show-all"
                type="checkbox" 
                checked={showAll}
                onChange={handleToggleShowAll}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="show-all" className="text-sm font-medium text-slate-700 cursor-pointer select-none">
                Show All Employees
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            label="Filtered Headcount" 
            value={stats.total} 
            color="bg-slate-800"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0-2 1.5-3 3.5-3h9c2 0 3.5 1 3.5 3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3" /></svg>}
          />
          <StatCard 
            label="Avg. Annual Salary" 
            value={`$${Math.round(stats.avgSalary/1000)}k`} 
            color="bg-blue-600"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatCard 
            label="Attrition (Inactive)" 
            value={`${stats.attritionRate.toFixed(1)}%`} 
            color="bg-rose-600"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          />
          <StatCard 
            label="Active Headcount" 
            value={stats.activeCount} 
            color="bg-emerald-600"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
          />
        </div>

        <AnalyticsCharts employees={filteredEmployees} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Employee Directory (Snapshot)</h3>
            <EmployeeTable employees={filteredEmployees} />
          </div>
          <div className="xl:col-span-1">
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
