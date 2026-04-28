export type LogStatus = "completed" | "pending" | "current";

export type AuditLog = {
  stage: string;
  actor: string;
  timestamp: string;
  status: LogStatus;
  duration?: string;
};

export interface DocumentRecord {
  name: string;
  uploader: string;
  date: string;
  size: string;
  year: string;
  type: "Bank Statement" | "Schedule of Work" | "Audited Account";
}

export type Company = {
  id: string;
  name: string;
  currentStage: number;
  email: string;
  createdAt: string;
  docs: DocumentRecord[];
  auditTrail: AuditLog[];
};

export const MOCK_COMPANIES: Company[] = [
  {
    id: "MOK-772",
    name: "Mokaz Multitrade LTD",
    currentStage: 3,
    email: "info@mokaz.com",
    createdAt: "2025-10-01 09:00",
    docs: [
      {
        name: "Mokaz_BS_2024.pdf",
        uploader: "Eddy",
        date: "12 Oct 2025",
        size: "2.4MB",
        year: "2024",
        type: "Bank Statement",
      },
      {
        name: "Work_Schedule_V1.pdf",
        uploader: "Eddy",
        date: "12 Oct 2025",
        size: "1.1MB",
        year: "2024",
        type: "Schedule of Work",
      },
    ],
    auditTrail: [
      {
        stage: "Application",
        actor: "Eddy",
        timestamp: "2025-10-01 09:00",
        status: "completed",
        duration: "2m",
      },
      {
        stage: "Doc Upload",
        actor: "Eddy",
        timestamp: "2025-10-03 14:20",
        status: "completed",
        duration: "2d",
      },
      {
        stage: "Field Audit",
        actor: "Musty",
        timestamp: "2025-10-05 10:00",
        status: "current",
      },
      {
        stage: "Approval",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      { stage: "Payment", actor: "Pending", timestamp: "-", status: "pending" },
    ],
  },
  {
    id: "MOK-104",
    name: "Apex Solutions Nig.",
    currentStage: 5,
    email: "contact@apex.ng",
    createdAt: "2025-09-15 11:30",
    docs: [
      {
        name: "Apex_Audit_2025.pdf",
        uploader: "Abdul",
        date: "25 Sep 2025",
        size: "1.2MB",
        year: "2025",
        type: "Audited Account",
      },
    ],
    auditTrail: [
      {
        stage: "Application",
        actor: "Abdul",
        timestamp: "2025-09-15 11:30",
        status: "completed",
        duration: "5m",
      },
      {
        stage: "Doc Upload",
        actor: "Abdul",
        timestamp: "2025-09-16 16:45",
        status: "completed",
        duration: "1d",
      },
      {
        stage: "Field Audit",
        actor: "Musty",
        timestamp: "2025-09-20 09:00",
        status: "completed",
        duration: "4d",
      },
      {
        stage: "Approval",
        actor: "Musty",
        timestamp: "2025-09-22 13:10",
        status: "completed",
        duration: "2d",
      },
      {
        stage: "Payment",
        actor: "Abdul",
        timestamp: "2025-09-25 15:00",
        status: "completed",
        duration: "3d",
      },
    ],
  },
  {
    id: "MOK-291",
    name: "Zenth Global Resources",
    currentStage: 2,
    email: "admin@zenth.com",
    createdAt: "2025-10-18 08:00",
    docs: [],
    auditTrail: [
      {
        stage: "Application",
        actor: "Musty",
        timestamp: "2025-10-18 08:00",
        status: "completed",
        duration: "10m",
      },
      {
        stage: "Doc Upload",
        actor: "Musty",
        timestamp: "2025-10-19 10:00",
        status: "current",
      },
      {
        stage: "Field Audit",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      {
        stage: "Approval",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      { stage: "Payment", actor: "Pending", timestamp: "-", status: "pending" },
    ],
  },
  {
    id: "MOK-442",
    name: "Sahara Energy Corp",
    currentStage: 1,
    email: "energy@sahara.ng",
    createdAt: "2025-10-20 14:00",
    docs: [],
    auditTrail: [
      {
        stage: "Application",
        actor: "Eddy",
        timestamp: "2025-10-20 14:00",
        status: "current",
      },
      {
        stage: "Doc Upload",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      {
        stage: "Field Audit",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      {
        stage: "Approval",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      { stage: "Payment", actor: "Pending", timestamp: "-", status: "pending" },
    ],
  },
  {
    id: "MOK-881",
    name: "Ironside Logistics",
    currentStage: 4,
    email: "info@ironside.com",
    createdAt: "2025-09-01 10:00",
    docs: [
      {
        name: "BS_Ironside_23.pdf",
        uploader: "Abdul",
        date: "05 Sep 2025",
        size: "3.1MB",
        year: "2023",
        type: "Bank Statement",
      },
    ],
    auditTrail: [
      {
        stage: "Application",
        actor: "Abdul",
        timestamp: "2025-09-01 10:00",
        status: "completed",
        duration: "15m",
      },
      {
        stage: "Doc Upload",
        actor: "Abdul",
        timestamp: "2025-09-03 09:00",
        status: "completed",
        duration: "2d",
      },
      {
        stage: "Field Audit",
        actor: "Musty",
        timestamp: "2025-09-10 11:00",
        status: "completed",
        duration: "7d",
      },
      {
        stage: "Approval",
        actor: "System Admin",
        timestamp: "2025-09-12 16:00",
        status: "current",
      },
      { stage: "Payment", actor: "Pending", timestamp: "-", status: "pending" },
    ],
  },
  {
    id: "MOK-903",
    name: "Novatech Systems",
    currentStage: 2,
    email: "dev@novatech.io",
    createdAt: "2025-10-22 11:00",
    docs: [],
    auditTrail: [
      {
        stage: "Application",
        actor: "Eddy",
        timestamp: "2025-10-22 11:00",
        status: "completed",
        duration: "8m",
      },
      {
        stage: "Doc Upload",
        actor: "Eddy",
        timestamp: "2025-10-23 09:00",
        status: "current",
      },
      {
        stage: "Field Audit",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      {
        stage: "Approval",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      { stage: "Payment", actor: "Pending", timestamp: "-", status: "pending" },
    ],
  },
  {
    id: "MOK-551",
    name: "Bluechip Partners",
    currentStage: 3,
    email: "tax@bluechip.com",
    createdAt: "2025-10-05 09:00",
    docs: [
      {
        name: "Audit_Bluechip_24.pdf",
        uploader: "Musty",
        date: "07 Oct 2025",
        size: "1.5MB",
        year: "2024",
        type: "Audited Account",
      },
    ],
    auditTrail: [
      {
        stage: "Application",
        actor: "Musty",
        timestamp: "2025-10-05 09:00",
        status: "completed",
        duration: "12m",
      },
      {
        stage: "Doc Upload",
        actor: "Musty",
        timestamp: "2025-10-07 14:00",
        status: "completed",
        duration: "2d",
      },
      {
        stage: "Field Audit",
        actor: "Abdul",
        timestamp: "2025-10-10 10:00",
        status: "current",
      },
      {
        stage: "Approval",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      { stage: "Payment", actor: "Pending", timestamp: "-", status: "pending" },
    ],
  },
  {
    id: "MOK-332",
    name: "Prime Maritime Ltd",
    currentStage: 5,
    email: "shipping@prime.com",
    createdAt: "2025-08-20 10:00",
    docs: [
      {
        name: "BS_Prime_24.pdf",
        uploader: "Eddy",
        date: "22 Aug 2025",
        size: "5.4MB",
        year: "2024",
        type: "Bank Statement",
      },
      {
        name: "Schedule_Prime.pdf",
        uploader: "Eddy",
        date: "22 Aug 2025",
        size: "2.1MB",
        year: "2024",
        type: "Schedule of Work",
      },
    ],
    auditTrail: [
      {
        stage: "Application",
        actor: "Eddy",
        timestamp: "2025-08-20 10:00",
        status: "completed",
        duration: "20m",
      },
      {
        stage: "Doc Upload",
        actor: "Eddy",
        timestamp: "2025-08-22 09:00",
        status: "completed",
        duration: "2d",
      },
      {
        stage: "Field Audit",
        actor: "Musty",
        timestamp: "2025-08-30 11:00",
        status: "completed",
        duration: "8d",
      },
      {
        stage: "Approval",
        actor: "System Admin",
        timestamp: "2025-09-05 14:00",
        status: "completed",
        duration: "6d",
      },
      {
        stage: "Payment",
        actor: "Eddy",
        timestamp: "2025-09-10 10:00",
        status: "completed",
        duration: "5d",
      },
    ],
  },
  {
    id: "MOK-667",
    name: "Goldline Ventures",
    currentStage: 2,
    email: "goldline@ventures.com",
    createdAt: "2025-10-25 15:00",
    docs: [],
    auditTrail: [
      {
        stage: "Application",
        actor: "Abdul",
        timestamp: "2025-10-25 15:00",
        status: "completed",
        duration: "5m",
      },
      {
        stage: "Doc Upload",
        actor: "Abdul",
        timestamp: "2025-10-26 09:00",
        status: "current",
      },
      {
        stage: "Field Audit",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      {
        stage: "Approval",
        actor: "Pending",
        timestamp: "-",
        status: "pending",
      },
      { stage: "Payment", actor: "Pending", timestamp: "-", status: "pending" },
    ],
  },
  {
    id: "MOK-118",
    name: "Civic Construction",
    currentStage: 4,
    email: "build@civic.ng",
    createdAt: "2025-09-10 09:00",
    docs: [
      {
        name: "Civic_Audit_24.pdf",
        uploader: "Musty",
        date: "15 Sep 2025",
        size: "2.8MB",
        year: "2024",
        type: "Audited Account",
      },
    ],
    auditTrail: [
      {
        stage: "Application",
        actor: "Musty",
        timestamp: "2025-09-10 09:00",
        status: "completed",
        duration: "10m",
      },
      {
        stage: "Doc Upload",
        actor: "Musty",
        timestamp: "2025-09-12 11:00",
        status: "completed",
        duration: "2d",
      },
      {
        stage: "Field Audit",
        actor: "Abdul",
        timestamp: "2025-09-20 14:00",
        status: "completed",
        duration: "8d",
      },
      {
        stage: "Approval",
        actor: "System Admin",
        timestamp: "2025-09-22 10:00",
        status: "current",
      },
      { stage: "Payment", actor: "Pending", timestamp: "-", status: "pending" },
    ],
  },
];
