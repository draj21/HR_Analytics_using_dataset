
import { Employee } from './types';

// Parsing the provided CSV into the application dataset
export const MOCK_EMPLOYEES: Employee[] = [
  { id: 'EMP00001', firstName: 'Meera', lastName: 'Singh', name: 'Meera Singh', role: 'Director', salary: 173846, email: 'meera.singh1@company.com', hireDate: '2015-11-24', status: 'Active' },
  { id: 'EMP00002', firstName: 'Arjun', lastName: 'Sharma', name: 'Arjun Sharma', role: 'Manager', salary: 93745, email: 'arjun.sharma2@company.com', hireDate: '2019-04-25', status: 'Inactive', exitDate: '2022-10-09' },
  { id: 'EMP00003', firstName: 'Arjun', lastName: 'Nair', name: 'Arjun Nair', role: 'Director', salary: 155359, email: 'arjun.nair3@company.com', hireDate: '2022-11-25', status: 'Active' },
  { id: 'EMP00004', firstName: 'Isha', lastName: 'Singh', name: 'Isha Singh', role: 'Senior Engineer', salary: 74645, email: 'isha.singh4@company.com', hireDate: '2024-01-23', status: 'Active' },
  { id: 'EMP00005', firstName: 'Meera', lastName: 'Rao', name: 'Meera Rao', role: 'Senior Engineer', salary: 103737, email: 'meera.rao5@company.com', hireDate: '2021-04-29', status: 'Inactive', exitDate: '2026-01-08' },
  { id: 'EMP00006', firstName: 'Anjali', lastName: 'Mehta', name: 'Anjali Mehta', role: 'Director', salary: 167751, email: 'anjali.mehta6@company.com', hireDate: '2018-11-03', status: 'Inactive', exitDate: '2023-08-02' },
  { id: 'EMP00007', firstName: 'Sneha', lastName: 'Kulkarni', name: 'Sneha Kulkarni', role: 'Engineer', salary: 49536, email: 'sneha.kulkarni7@company.com', hireDate: '2015-06-14', status: 'Inactive', exitDate: '2019-12-01' },
  { id: 'EMP00008', firstName: 'Rohan', lastName: 'Singh', name: 'Rohan Singh', role: 'Lead', salary: 149820, email: 'rohan.singh8@company.com', hireDate: '2014-03-07', status: 'Active' },
  { id: 'EMP00009', firstName: 'Rohan', lastName: 'Mehta', name: 'Rohan Mehta', role: 'Manager', salary: 115137, email: 'rohan.mehta9@company.com', hireDate: '2023-04-11', status: 'Inactive', exitDate: '2023-11-01' },
  { id: 'EMP00010', firstName: 'Rahul', lastName: 'Iyer', name: 'Rahul Iyer', role: 'Consultant', salary: 99950, email: 'rahul.iyer10@company.com', hireDate: '2015-03-31', status: 'Active' },
  { id: 'EMP00011', firstName: 'Deepak', lastName: 'Patel', name: 'Deepak Patel', role: 'Analyst', salary: 49565, email: 'deepak.patel11@company.com', hireDate: '2022-11-11', status: 'Inactive', exitDate: '2025-06-04' },
  { id: 'EMP00012', firstName: 'Vikram', lastName: 'Das', name: 'Vikram Das', role: 'Lead', salary: 142908, email: 'vikram.das12@company.com', hireDate: '2024-11-14', status: 'Active' },
  { id: 'EMP00013', firstName: 'Rahul', lastName: 'Mehta', name: 'Rahul Mehta', role: 'HR Executive', salary: 37479, email: 'rahul.mehta13@company.com', hireDate: '2024-10-12', status: 'Active' },
  { id: 'EMP00014', firstName: 'Karan', lastName: 'Gupta', name: 'Karan Gupta', role: 'Director', salary: 140260, email: 'karan.gupta14@company.com', hireDate: '2024-04-29', status: 'Active' },
  { id: 'EMP00015', firstName: 'Deepak', lastName: 'Joshi', name: 'Deepak Joshi', role: 'Senior Engineer', salary: 83718, email: 'deepak.joshi15@company.com', hireDate: '2023-02-17', status: 'Active' },
  { id: 'EMP00016', firstName: 'Vikram', lastName: 'Das', name: 'Vikram Das', role: 'Senior Engineer', salary: 81146, email: 'vikram.das16@company.com', hireDate: '2015-10-21', status: 'Active' },
  { id: 'EMP00017', firstName: 'Pooja', lastName: 'Rao', name: 'Pooja Rao', role: 'Manager', salary: 136362, email: 'pooja.rao17@company.com', hireDate: '2014-08-11', status: 'Inactive', exitDate: '2017-03-21' },
  { id: 'EMP00018', firstName: 'Meera', lastName: 'Kapoor', name: 'Meera Kapoor', role: 'Analyst', salary: 48442, email: 'meera.kapoor18@company.com', hireDate: '2016-07-16', status: 'Inactive', exitDate: '2018-11-08' },
  { id: 'EMP00019', firstName: 'Karan', lastName: 'Sharma', name: 'Karan Sharma', role: 'Manager', salary: 124443, email: 'karan.sharma19@company.com', hireDate: '2020-05-20', status: 'Active' },
  { id: 'EMP00020', firstName: 'Anjali', lastName: 'Patel', name: 'Anjali Patel', role: 'HR Executive', salary: 50522, email: 'anjali.patel20@company.com', hireDate: '2024-06-22', status: 'Active' },
  { id: 'EMP00021', firstName: 'Neha', lastName: 'Kapoor', name: 'Neha Kapoor', role: 'Consultant', salary: 101365, email: 'neha.kapoor21@company.com', hireDate: '2018-06-24', status: 'Active' },
  { id: 'EMP00022', firstName: 'Rahul', lastName: 'Sharma', name: 'Rahul Sharma', role: 'Consultant', salary: 91255, email: 'rahul.sharma22@company.com', hireDate: '2021-01-04', status: 'Active' },
  { id: 'EMP00023', firstName: 'Isha', lastName: 'Verma', name: 'Isha Verma', role: 'Engineer', salary: 50082, email: 'isha.verma23@company.com', hireDate: '2019-06-24', status: 'Active' },
  { id: 'EMP00024', firstName: 'Pooja', lastName: 'Das', name: 'Pooja Das', role: 'Senior Engineer', salary: 107265, email: 'pooja.das24@company.com', hireDate: '2021-06-19', status: 'Inactive', exitDate: '2022-07-28' },
  { id: 'EMP00025', firstName: 'Isha', lastName: 'Kapoor', name: 'Isha Kapoor', role: 'Analyst', salary: 59875, email: 'isha.kapoor25@company.com', hireDate: '2016-03-04', status: 'Inactive', exitDate: '2019-08-13' },
  { id: 'EMP00026', firstName: 'Amit', lastName: 'Sharma', name: 'Amit Sharma', role: 'HR Executive', salary: 34426, email: 'amit.sharma26@company.com', hireDate: '2014-07-17', status: 'Active' },
  { id: 'EMP00027', firstName: 'Sneha', lastName: 'Singh', name: 'Sneha Singh', role: 'HR Executive', salary: 30212, email: 'sneha.singh27@company.com', hireDate: '2017-02-28', status: 'Active' },
  { id: 'EMP00028', firstName: 'Sneha', lastName: 'Kapoor', name: 'Sneha Kapoor', role: 'Director', salary: 160015, email: 'sneha.kapoor28@company.com', hireDate: '2025-02-11', status: 'Active' },
  { id: 'EMP00029', firstName: 'Isha', lastName: 'Mehta', name: 'Isha Mehta', role: 'Manager', salary: 98749, email: 'isha.mehta29@company.com', hireDate: '2023-07-05', status: 'Inactive', exitDate: '2024-08-05' },
  { id: 'EMP00030', firstName: 'Rahul', lastName: 'Das', name: 'Rahul Das', role: 'Consultant', salary: 119624, email: 'rahul.das30@company.com', hireDate: '2018-11-08', status: 'Active' },
  { id: 'EMP00031', firstName: 'Pooja', lastName: 'Mehta', name: 'Pooja Mehta', role: 'Consultant', salary: 119814, email: 'pooja.mehta31@company.com', hireDate: '2026-03-31', status: 'Active' },
  { id: 'EMP00032', firstName: 'Meera', lastName: 'Iyer', name: 'Meera Iyer', role: 'Director', salary: 147227, email: 'meera.iyer32@company.com', hireDate: '2018-08-13', status: 'Active' },
  { id: 'EMP00033', firstName: 'Vikram', lastName: 'Gupta', name: 'Vikram Gupta', role: 'Senior Engineer', salary: 108439, email: 'vikram.gupta33@company.com', hireDate: '2018-10-10', status: 'Active' },
  { id: 'EMP00034', firstName: 'Rohan', lastName: 'Patel', name: 'Rohan Patel', role: 'HR Executive', salary: 35645, email: 'rohan.patel34@company.com', hireDate: '2015-09-22', status: 'Active' },
  { id: 'EMP00035', firstName: 'Rohan', lastName: 'Patel', name: 'Rohan Patel', role: 'Director', salary: 145501, email: 'rohan.patel35@company.com', hireDate: '2020-08-07', status: 'Inactive', exitDate: '2022-05-27' },
  { id: 'EMP00036', firstName: 'Priya', lastName: 'Kapoor', name: 'Priya Kapoor', role: 'Analyst', salary: 63802, email: 'priya.kapoor36@company.com', hireDate: '2017-03-31', status: 'Active' },
  { id: 'EMP00037', firstName: 'Sneha', lastName: 'Mehta', name: 'Sneha Mehta', role: 'Manager', salary: 93380, email: 'sneha.mehta37@company.com', hireDate: '2015-01-15', status: 'Inactive', exitDate: '2019-03-15' },
  { id: 'EMP00038', firstName: 'Amit', lastName: 'Gupta', name: 'Amit Gupta', role: 'Analyst', salary: 58608, email: 'amit.gupta38@company.com', hireDate: '2015-10-06', status: 'Inactive', exitDate: '2019-06-05' },
  { id: 'EMP00039', firstName: 'Pooja', lastName: 'Khan', name: 'Pooja Khan', role: 'Director', salary: 197579, email: 'pooja.khan39@company.com', hireDate: '2020-03-15', status: 'Active' },
  { id: 'EMP00040', firstName: 'Anjali', lastName: 'Joshi', name: 'Anjali Joshi', role: 'Lead', salary: 126314, email: 'anjali.joshi40@company.com', hireDate: '2022-10-28', status: 'Active' },
];

export const SYSTEM_INSTRUCTION = `You are an HR Analytics Assistant.
Answer ONLY using the provided employee dataset.
Calculations needed:
- Headcount (Total, Active, Inactive)
- Average salary (overall or by Designation)
- Attrition Rate (percentage of Inactive employees)
- Employee lookup (using ID)

Data Schema:
- emp_id (ID)
- First_Name, Last_Name (Name)
- Designation (Role/Title)
- Salary (Annual)
- Email
- status (Active/Inactive)
- hire_date, exit_date

Dataset:
${JSON.stringify(MOCK_EMPLOYEES)}

Format all tables and lists clearly. If data is not found, say "Data not found".
`;
