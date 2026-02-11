
export interface SalaryRecord {
  date: string;
  amount: number;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  role: string; // Designation
  department: string;
  salary: number;
  email: string;
  hireDate: string;
  status: 'Active' | 'Inactive';
  exitDate?: string;
  performanceScore: number; // 0-100
  salaryHistory: SalaryRecord[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface DashboardStats {
  totalEmployees: number;
  averageSalary: number;
  attritionRate: number;
  activeCount: number;
}
