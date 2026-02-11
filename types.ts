
export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  role: string; // Mapped from Designation
  salary: number;
  email: string;
  hireDate: string;
  status: 'Active' | 'Inactive';
  exitDate?: string;
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
