
import React, { useMemo, useState } from 'react';
import { MOCK_EMPLOYEES } from './constants';
import { StatCard } from './components/StatCard';
import { EmployeeTable } from './components/EmployeeTable';
import { AnalyticsCharts } from './components/AnalyticsCharts';
import { ChatInterface } from './components/ChatInterface';
import { EmployeeDetail } from './components/EmployeeDetail';
import { Employee } from './types';

const App: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const filteredEmployees = useMemo(() => {
    let result = MOCK_EMPLOYEES;

    // Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(emp => 
        emp.name.toLowerCase().includes(q) || 
        emp.id.toLowerCase().includes(q) ||
        emp.role.toLowerCase().includes(q) ||
        emp.department.toLowerCase().includes(q)
      );
    }

    // Date Range Filter
    if (!showAll && (startDate || endDate)) {
      result = result.filter((emp) => {
        const hireDate = new Date(emp.hireDate);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        if (start && end) return hireDate >= start && hireDate <= end;
        if (start) return hireDate >= start;
        if (end) return hireDate <= end;
        return true;
      });
    }

    return result;
  }, [startDate, endDate, showAll, searchQuery]);

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
              <div className="bg-slate-900 p-2 rounded-lg shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-slate-900">HR Analytics Pro</h1>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-500 bg-slate-100 px-4 py-1 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Live Dataset: Q1-2024 Audit
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Workforce Insights Dashboard</h2>
            <p className="mt-2 text-slate-500">Intelligent analytics based on real-time employee data snapshots.</p>
          </div>
          
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
              <label className="text-xs font-bold text-slate-500 uppercase">Search Directory</label>
              <input 
                type="text"
                placeholder="Name, ID, Dept or Role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Hire Date Filter</label>
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
            
            <div className="flex items-center gap-2 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
              <input 
                id="show-all"
                type="checkbox" 
                checked={showAll}
                onChange={handleToggleShowAll}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="show-all" className="text-sm font-semibold text-slate-700 cursor-pointer select-none">
                Reset Dates
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
            label="Attrition Risk" 
            value={`${stats.attritionRate.toFixed(1)}%`} 
            color="bg-rose-600"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          />
          <StatCard 
            label="Active Staff" 
            value={stats.activeCount} 
            color="bg-emerald-600"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
          />
        </div>

        <AnalyticsCharts employees={filteredEmployees} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">Employee Directory</h3>
              <span className="text-sm font-medium text-slate-400">Showing {filteredEmployees.length} records • Click to view profile</span>
            </div>
            <div className="max-h-[600px] overflow-hidden flex flex-col">
              <EmployeeTable 
                employees={filteredEmployees} 
                onSelectEmployee={(emp) => setSelectedEmployee(emp)} 
              />
            </div>
          </div>
          <div className="xl:col-span-1">
            <ChatInterface />
          </div>
        </div>
      </main>

      {selectedEmployee && (
        <EmployeeDetail 
          employee={selectedEmployee} 
          onClose={() => setSelectedEmployee(null)} 
        />
      )}
    </div>
  );
};

export default App;
