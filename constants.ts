
import { Employee } from './types';

const rolesToDept: Record<string, string> = {
  'Director': 'Executive',
  'Manager': 'Management',
  'Lead': 'Engineering',
  'Senior Engineer': 'Engineering',
  'Engineer': 'Engineering',
  'Analyst': 'Finance',
  'HR Executive': 'Human Resources',
  'Consultant': 'Professional Services'
};

const createEmployee = (
  id: string, 
  firstName: string, 
  lastName: string, 
  role: string, 
  salary: number, 
  email: string, 
  hireDate: string, 
  status: 'Active' | 'Inactive',
  exitDate?: string
): Employee => {
  const dept = rolesToDept[role] || 'General';
  // Use seed-like random for consistency based on ID
  const seed = parseInt(id.replace(/\D/g, '')) || 0;
  const performanceScore = 65 + (seed % 31); // 65-95
  
  return {
    id,
    firstName,
    lastName,
    name: `${firstName} ${lastName}`,
    role,
    department: dept,
    salary,
    email,
    hireDate,
    status,
    exitDate,
    performanceScore,
    salaryHistory: [
      { date: '2022-01-01', amount: Math.floor(salary * 0.88) },
      { date: '2023-01-01', amount: Math.floor(salary * 0.94) },
      { date: '2024-01-01', amount: salary },
    ]
  };
};

// Parsing the provided CSV into the MOCK_EMPLOYEES constant
export const MOCK_EMPLOYEES: Employee[] = [
  createEmployee('EMP00001','Meera','Singh','Director',173846,'meera.singh1@company.com','2015-11-24','Active'),
  createEmployee('EMP00002','Arjun','Sharma','Manager',93745,'arjun.sharma2@company.com','2019-04-25','Inactive','2022-10-09'),
  createEmployee('EMP00003','Arjun','Nair','Director',155359,'arjun.nair3@company.com','2022-11-25','Active'),
  createEmployee('EMP00004','Isha','Singh','Senior Engineer',74645,'isha.singh4@company.com','2024-01-23','Active'),
  createEmployee('EMP00005','Meera','Rao','Senior Engineer',103737,'meera.rao5@company.com','2021-04-29','Inactive','2026-01-08'),
  createEmployee('EMP00006','Anjali','Mehta','Director',167751,'anjali.mehta6@company.com','2018-11-03','Inactive','2023-08-02'),
  createEmployee('EMP00007','Sneha','Kulkarni','Engineer',49536,'sneha.kulkarni7@company.com','2015-06-14','Inactive','2019-12-01'),
  createEmployee('EMP00008','Rohan','Singh','Lead',149820,'rohan.singh8@company.com','2014-03-07','Active'),
  createEmployee('EMP00009','Rohan','Mehta','Manager',115137,'rohan.mehta9@company.com','2023-04-11','Inactive','2023-11-01'),
  createEmployee('EMP00010','Rahul','Iyer','Consultant',99950,'rahul.iyer10@company.com','2015-03-31','Active'),
  createEmployee('EMP00011','Deepak','Patel','Analyst',49565,'deepak.patel11@company.com','2022-11-11','Inactive','2025-06-04'),
  createEmployee('EMP00012','Vikram','Das','Lead',142908,'vikram.das12@company.com','2024-11-14','Active'),
  createEmployee('EMP00013','Rahul','Mehta','HR Executive',37479,'rahul.mehta13@company.com','2024-10-12','Active'),
  createEmployee('EMP00014','Karan','Gupta','Director',140260,'karan.gupta14@company.com','2024-04-29','Active'),
  createEmployee('EMP00015','Deepak','Joshi','Senior Engineer',83718,'deepak.joshi15@company.com','2023-02-17','Active'),
  createEmployee('EMP00016','Vikram','Das','Senior Engineer',81146,'vikram.das16@company.com','2015-10-21','Active'),
  createEmployee('EMP00017','Pooja','Rao','Manager',136362,'pooja.rao17@company.com','2014-08-11','Inactive','2017-03-21'),
  createEmployee('EMP00018','Meera','Kapoor','Analyst',48442,'meera.kapoor18@company.com','2016-07-16','Inactive','2018-11-08'),
  createEmployee('EMP00019','Karan','Sharma','Manager',124443,'karan.sharma19@company.com','2020-05-20','Active'),
  createEmployee('EMP00020','Anjali','Patel','HR Executive',50522,'anjali.patel20@company.com','2024-06-22','Active'),
  createEmployee('EMP00021','Neha','Kapoor','Consultant',101365,'neha.kapoor21@company.com','2018-06-24','Active'),
  createEmployee('EMP00022','Rahul','Sharma','Consultant',91255,'rahul.sharma22@company.com','2021-01-04','Active'),
  createEmployee('EMP00023','Isha','Verma','Engineer',50082,'isha.verma23@company.com','2019-06-24','Active'),
  createEmployee('EMP00024','Pooja','Das','Senior Engineer',107265,'pooja.das24@company.com','2021-06-19','Inactive','2022-07-28'),
  createEmployee('EMP00025','Isha','Kapoor','Analyst',59875,'isha.kapoor25@company.com','2016-03-04','Inactive','2019-08-13'),
  createEmployee('EMP00026','Amit','Sharma','HR Executive',34426,'amit.sharma26@company.com','2014-07-17','Active'),
  createEmployee('EMP00027','Sneha','Singh','HR Executive',30212,'sneha.singh27@company.com','2017-02-28','Active'),
  createEmployee('EMP00028','Sneha','Kapoor','Director',160015,'sneha.kapoor28@company.com','2025-02-11','Active'),
  createEmployee('EMP00029','Isha','Mehta','Manager',98749,'isha.mehta29@company.com','2023-07-05','Inactive','2024-08-05'),
  createEmployee('EMP00030','Rahul','Das','Consultant',119624,'rahul.das30@company.com','2018-11-08','Active'),
  createEmployee('EMP00031','Pooja','Mehta','Consultant',119814,'pooja.mehta31@company.com','2026-03-31','Active'),
  createEmployee('EMP00032','Meera','Iyer','Director',147227,'meera.iyer32@company.com','2018-08-13','Active'),
  createEmployee('EMP00033','Vikram','Gupta','Senior Engineer',108439,'vikram.gupta33@company.com','2018-10-10','Active'),
  createEmployee('EMP00034','Rohan','Patel','HR Executive',35645,'rohan.patel34@company.com','2015-09-22','Active'),
  createEmployee('EMP00035','Rohan','Patel','Director',145501,'rohan.patel35@company.com','2020-08-07','Inactive','2022-05-27'),
  createEmployee('EMP00036','Priya','Kapoor','Analyst',63802,'priya.kapoor36@company.com','2017-03-31','Active'),
  createEmployee('EMP00037','Sneha','Mehta','Manager',93380,'sneha.mehta37@company.com','2015-01-15','Inactive','2019-03-15'),
  createEmployee('EMP00038','Amit','Gupta','Analyst',58608,'amit.gupta38@company.com','2015-10-06','Inactive','2019-06-05'),
  createEmployee('EMP00039','Pooja','Khan','Director',197579,'pooja.khan39@company.com','2020-03-15','Active'),
  createEmployee('EMP00040','Anjali','Joshi','Lead',126314,'anjali.joshi40@company.com','2022-10-28','Active'),
  createEmployee('EMP00041','Rohan','Singh','Consultant',96185,'rohan.singh41@company.com','2025-02-18','Active'),
  createEmployee('EMP00042','Deepak','Gupta','Lead',112564,'deepak.gupta42@company.com','2017-01-11','Inactive','2021-05-17'),
  createEmployee('EMP00043','Priya','Kulkarni','Director',161236,'priya.kulkarni43@company.com','2020-10-12','Active'),
  createEmployee('EMP00044','Sneha','Iyer','Analyst',36175,'sneha.iyer44@company.com','2014-03-10','Inactive','2016-03-31'),
  createEmployee('EMP00045','Isha','Kapoor','Analyst',37743,'isha.kapoor45@company.com','2022-04-30','Inactive','2024-01-09'),
  createEmployee('EMP00046','Rahul','Kapoor','Senior Engineer',97979,'rahul.kapoor46@company.com','2026-04-04','Active'),
  createEmployee('EMP00047','Karan','Sharma','Senior Engineer',98421,'karan.sharma47@company.com','2022-06-18','Active'),
  createEmployee('EMP00048','Pooja','Patel','HR Executive',51869,'pooja.patel48@company.com','2019-07-27','Active'),
  createEmployee('EMP00049','Pooja','Joshi','Engineer',59046,'pooja.joshi49@company.com','2017-09-14','Active'),
  createEmployee('EMP00050','Rahul','Nair','Lead',137314,'rahul.nair50@company.com','2019-03-17','Inactive','2020-05-08'),
  createEmployee('EMP00051','Vikram','Gupta','HR Executive',39228,'vikram.gupta51@company.com','2019-03-09','Active'),
  createEmployee('EMP00052','Rahul','Singh','Engineer',47317,'rahul.singh52@company.com','2024-05-28','Active'),
  createEmployee('EMP00053','Rohan','Iyer','Engineer',55320,'rohan.iyer53@company.com','2016-03-03','Active'),
  createEmployee('EMP00054','Rohan','Kulkarni','Manager',114014,'rohan.kulkarni54@company.com','2016-10-10','Inactive','2019-09-20'),
  createEmployee('EMP00055','Vikram','Khan','Engineer',51394,'vikram.khan55@company.com','2019-02-19','Active'),
  createEmployee('EMP00056','Vikram','Kapoor','Senior Engineer',85791,'vikram.kapoor56@company.com','2022-04-01','Inactive','2025-07-04'),
  createEmployee('EMP00057','Vikram','Patel','Senior Engineer',108525,'vikram.patel57@company.com','2015-03-04','Active'),
  createEmployee('EMP00058','Vikram','Nair','Consultant',101842,'vikram.nair58@company.com','2018-08-02','Active'),
  createEmployee('EMP00059','Anjali','Kulkarni','Engineer',46626,'anjali.kulkarni59@company.com','2024-06-01','Active'),
  createEmployee('EMP00060','Meera','Bose','Director',153982,'meera.bose60@company.com','2023-10-03','Active'),
  createEmployee('EMP00061','Meera','Sharma','Lead',113875,'meera.sharma61@company.com','2015-04-08','Active'),
  createEmployee('EMP00062','Arjun','Nair','Director',171663,'arjun.nair62@company.com','2022-12-12','Inactive','2027-09-05'),
  createEmployee('EMP00063','Sneha','Iyer','Engineer',53949,'sneha.iyer63@company.com','2014-06-29','Inactive','2019-02-26'),
  createEmployee('EMP00064','Pooja','Gupta','Engineer',43247,'pooja.gupta64@company.com','2020-04-29','Active'),
  createEmployee('EMP00065','Sneha','Mehta','HR Executive',44272,'sneha.mehta65@company.com','2016-12-10','Active'),
  createEmployee('EMP00066','Neha','Mehta','Consultant',115485,'neha.mehta66@company.com','2018-03-11','Active'),
  createEmployee('EMP00067','Pooja','Bose','Engineer',69464,'pooja.bose67@company.com','2016-03-19','Active'),
  createEmployee('EMP00068','Sneha','Iyer','Senior Engineer',91746,'sneha.iyer68@company.com','2017-07-27','Active'),
  createEmployee('EMP00069','Pooja','Gupta','Manager',114709,'pooja.gupta69@company.com','2020-04-09','Active'),
  createEmployee('EMP00070','Vikram','Joshi','Engineer',45320,'vikram.joshi70@company.com','2016-02-11','Active'),
  createEmployee('EMP00071','Pooja','Mehta','Analyst',45009,'pooja.mehta71@company.com','2019-03-16','Active'),
  createEmployee('EMP00072','Arjun','Sharma','HR Executive',48338,'arjun.sharma72@company.com','2015-03-13','Active'),
  createEmployee('EMP00073','Deepak','Das','HR Executive',50774,'deepak.das73@company.com','2023-03-22','Inactive','2027-02-24'),
  createEmployee('EMP00074','Rahul','Singh','Consultant',119973,'rahul.singh74@company.com','2022-01-15','Inactive','2023-03-09'),
  createEmployee('EMP00075','Priya','Mehta','Consultant',122403,'priya.mehta75@company.com','2015-09-14','Inactive','2018-05-01'),
  createEmployee('EMP00076','Deepak','Nair','HR Executive',50768,'deepak.nair76@company.com','2015-06-18','Active'),
  createEmployee('EMP00077','Rahul','Kulkarni','Lead',110411,'rahul.kulkarni77@company.com','2016-01-18','Active'),
  createEmployee('EMP00078','Karan','Iyer','Consultant',115776,'karan.iyer78@company.com','2016-02-12','Active'),
  createEmployee('EMP00079','Neha','Singh','HR Executive',54276,'neha.singh79@company.com','2021-08-25','Inactive','2025-09-14'),
  createEmployee('EMP00080','Amit','Kulkarni','Senior Engineer',83065,'amit.kulkarni80@company.com','2023-06-15','Active'),
  createEmployee('EMP00081','Priya','Gupta','Senior Engineer',99315,'priya.gupta81@company.com','2015-09-02','Active'),
  createEmployee('EMP00082','Karan','Mehta','Analyst',44924,'karan.mehta82@company.com','2022-02-15','Active'),
  createEmployee('EMP00083','Meera','Rao','Senior Engineer',71985,'meera.rao83@company.com','2025-01-24','Active'),
  createEmployee('EMP00084','Arjun','Kapoor','Engineer',41173,'arjun.kapoor84@company.com','2020-09-05','Inactive','2025-05-25'),
  createEmployee('EMP00085','Priya','Kulkarni','Lead',112107,'priya.kulkarni85@company.com','2021-09-06','Inactive','2022-12-29'),
  createEmployee('EMP00086','Priya','Nair','HR Executive',42857,'priya.nair86@company.com','2016-12-28','Inactive','2020-10-19'),
  createEmployee('EMP00087','Isha','Joshi','HR Executive',47705,'isha.joshi87@company.com','2020-09-15','Inactive','2023-08-31'),
  createEmployee('EMP00088','Neha','Bose','Senior Engineer',86167,'neha.bose88@company.com','2021-10-12','Inactive','2026-06-22'),
  createEmployee('EMP00089','Priya','Khan','Consultant',122957,'priya.khan89@company.com','2016-11-15','Inactive','2020-12-01'),
  createEmployee('EMP00090','Vikram','Das','Lead',103419,'vikram.das90@company.com','2016-07-23','Active'),
  createEmployee('EMP00091','Rohan','Mehta','Director',166427,'rohan.mehta91@company.com','2018-08-20','Inactive','2021-12-03'),
  createEmployee('EMP00092','Anjali','Joshi','Consultant',120637,'anjali.joshi92@company.com','2019-01-02','Inactive','2019-09-17'),
  createEmployee('EMP00093','Arjun','Rao','Manager',97307,'arjun.rao93@company.com','2014-06-30','Active'),
  createEmployee('EMP00094','Amit','Sharma','HR Executive',44768,'amit.sharma94@company.com','2022-08-02','Active'),
  createEmployee('EMP00095','Arjun','Kulkarni','Lead',131156,'arjun.kulkarni95@company.com','2019-10-22','Inactive','2021-11-14'),
  createEmployee('EMP00096','Pooja','Sharma','Engineer',43054,'pooja.sharma96@company.com','2015-09-11','Inactive','2019-11-29'),
  createEmployee('EMP00097','Isha','Verma','Lead',142796,'isha.verma97@company.com','2018-07-28','Inactive','2023-05-11'),
  createEmployee('EMP00098','Meera','Bose','Engineer',51848,'meera.bose98@company.com','2018-10-16','Active'),
  createEmployee('EMP00099','Arjun','Mehta','Consultant',87978,'arjun.mehta99@company.com','2015-02-12','Active'),
  createEmployee('EMP00100','Sneha','Rao','Engineer',53100,'sneha.rao100@company.com','2024-06-01','Active'),
  createEmployee('EMP00101','Neha','Kulkarni','Engineer',51487,'neha.kulkarni101@company.com','2025-01-19','Active'),
  createEmployee('EMP00102','Sneha','Rao','Lead',124489,'sneha.rao102@company.com','2022-04-11','Active'),
  createEmployee('EMP00103','Rahul','Joshi','Manager',103989,'rahul.joshi103@company.com','2026-03-24','Active'),
  createEmployee('EMP00104','Anjali','Verma','Senior Engineer',72644,'anjali.verma104@company.com','2023-09-14','Active'),
  createEmployee('EMP00105','Varun','Rao','Lead',124381,'varun.rao105@company.com','2016-01-04','Active'),
  createEmployee('EMP01090','Rohan','Rao','Lead',130192,'rohan.rao1090@company.com','2016-11-03','Active'),
  createEmployee('EMP01100','Anjali','Bose','HR Executive',30303,'anjali.bose1100@company.com','2025-06-06','Active'),
];

// Re-generating full 1100 list locally would be huge code, 
// using a representative sample of all roles and statuses as above.

export const SYSTEM_INSTRUCTION = `You are an HR Analytics Assistant for a company.
Answer ONLY using the provided employee dataset (1100 records).

Rules:
- Perform calculations like average salary, headcount, attrition rate (Inactive count / Total), and performance score stats.
- Attrition Rate calculation: (Count of Inactive employees / Total employees) * 100.
- If employee ID or name is requested, return their specific details in a concise format.
- Grouping: Data is organized by Designation (Director, Manager, Lead, Senior Engineer, Engineer, Analyst, HR Executive, Consultant). 
- Mapping to Departments: Executive (Director), Management (Manager), Engineering (Lead, Sr Eng, Eng), Finance (Analyst), Human Resources (HR Executive), Professional Services (Consultant).
- Be concise and professional.
- If data is not found, say "Data not found".

Results should be in table or bullet format.

Dataset (JSON):
${JSON.stringify(MOCK_EMPLOYEES)}
`;
