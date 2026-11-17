import { PersonalInfo, SkillCategory, Project, Certification, TimelineItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Prathamesh Sawant',
  role: 'SAP Certified ABAP Developer | RAP | S/4HANA | CDS | OData',
  headline: 'SAP Certified Associate specializing in ABAP Cloud, SAP RAP on Eclipse ADT, and Core ABAP on SAP Logon (SAP GUI).',
  location: 'Maharashtra, India',
  status: 'Open to Full-Time SAP ABAP Developer & SAP Technical Consultant Roles',
  statusType: 'available',
  email: 'prathameshsawant201@gmail.com',
  phone: '8856008281',
  github: 'https://github.com/Prathamesh3061',
  linkedin: 'https://linkedin.com/in/prathamesh-sawant211',
  resumeFileName: 'Prathamesh_Sawant_SAP_ABAP_Resume.pdf',
  avatarUrl: '/images/prathamesh_portrait.svg',
  graduated: 'June 2025',
  degree: 'B.Tech – Computer Science and Engineering (CGPA: 7.23)',
  institution: 'Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT), Sangli',
  summary: `Aspiring SAP ABAP Developer with SAP ABAP Cloud certification, seeking a role in a progressive organization that provides opportunities to learn and grow. I want to apply my skills in ABAP, RAP, and CDS effectively on real S/4HANA projects and contribute to the organization's success while building a strong career. Equipped with practical enterprise project experience in Eclipse ADT (RAP Employee Leave Request System) and SAP Logon (DDIC & ALV Sales Order Management), combined with a 3-month remote Frontend Developer internship at Bluestock Fintech.`,
  recruiterTakeaways: [
    'SAP Certified Associate – Back-End Developer - ABAP Cloud (Official SAP Certification, September 2026).',
    'Designed & built an end-to-end Employee Leave Request Management application in Eclipse ADT using SAP RAP, CDS View Entities, and Behavior Definitions with draft enablement.',
    'Developed an interactive Sales Order Management report in SAP Logon (SAP GUI) with custom DDIC tables, Date/Plant selection screen, and double-click ALV drilldown.',
    'Completed intensive SAP ABAP S/4HANA Trainee program at Utkarsh Foundation (Alibag) covering Core ABAP, DDIC, Open SQL, BAPIs, BADIs, and Enhancements.',
    'Former Frontend Developer Intern at Bluestock Fintech (3 months remote), understanding how client applications consume OData/REST services.',
    'B.Tech in Computer Science and Engineering from PVPIT College, Sangli (Graduated June 2025, CGPA: 7.23).',
    'Immediately available for full-time onboarding in India or remote enterprise consulting.'
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'modern-sap',
    title: 'S/4HANA & Modern ABAP (Eclipse ADT)',
    subtitle: 'ABAP RESTful Application Programming Model (RAP), CDS View Entities, and Cloud Extensibility',
    iconName: 'Cpu',
    items: [
      {
        name: 'ABAP RESTful Application Programming Model (RAP)',
        badge: 'Modern Architecture',
        description: 'Building transactional applications on SAP S/4HANA & BTP using managed scenarios, draft handling, and custom actions.'
      },
      {
        name: 'ABAP Development Tools (ADT in Eclipse)',
        badge: 'Primary IDE',
        description: 'Creating and managing CDS views, Behavior Definitions, Service Bindings, ABAP classes, and metadata extensions.'
      },
      {
        name: 'Core Data Services (CDS)',
        badge: 'Data Modeling',
        description: 'CDS View Entities, parent-child compositions, associations, projections, and UI annotations for Fiori Elements.'
      },
      {
        name: 'ABAP Objects (OO ABAP)',
        badge: 'Object-Oriented',
        description: 'Global ABAP classes, interfaces, encapsulation, inheritance, polymorphism, and behavior implementation classes.'
      },
      {
        name: 'OData Services (V2 & V4)',
        badge: 'Integration',
        description: 'Publishing and binding OData services via Service Definitions for SAP Fiori Elements consumption.'
      },
      {
        name: 'SAP Fiori Elements',
        badge: 'Enterprise UI',
        description: 'List Report and Object Page generation driven by CDS UI annotations and metadata extensions.'
      },
      {
        name: 'SAP HANA',
        badge: 'In-Memory',
        description: 'In-memory database architecture, code pushdown paradigm, and performance-optimized Open SQL.'
      },
      {
        name: 'Behavior Definitions & EML',
        badge: 'Transactional Runtime',
        description: 'Defining CRUD operations, custom approve/reject actions, determinations, validations, and EML statements.'
      }
    ]
  },
  {
    id: 'core-abap',
    title: 'Core ABAP (SAP Logon / SAP GUI)',
    subtitle: 'Data Dictionary (DDIC), interactive ALV reporting, and classical procedural programming',
    iconName: 'Server',
    items: [
      {
        name: 'ABAP Dictionary (DDIC)',
        description: 'Designing custom transparent database tables, primary/foreign keys, structures, data elements, domains, and search helps.'
      },
      {
        name: 'ALV Reports',
        description: 'Interactive ALV reporting using REUSE_ALV_GRID_DISPLAY and CL_SALV_TABLE with user command double-click drill-downs.'
      },
      {
        name: 'Open SQL',
        description: 'High-performance database queries with FOR ALL ENTRIES IN, WHERE conditions, joins, and aggregates.'
      },
      {
        name: 'Internal Tables',
        description: 'Standard, sorted, and hashed tables, work areas, field symbols, table expressions, and performance operations.'
      },
      {
        name: 'Classical Reports',
        description: 'Selection screens using PARAMETERS and SELECT-OPTIONS, AT SELECTION-SCREEN validations, and list output.'
      },
      {
        name: 'Modularization Techniques',
        description: 'Subroutines (PERFORM / FORM), Function Modules, Function Groups, RFCs, and Include programs.'
      },
      {
        name: 'ABAP Debugger & Analysis',
        description: 'Using standard SAP GUI debugger (/h), setting breakpoints, watchpoints, and step-by-step execution.'
      },
      {
        name: 'Smart Forms & Adobe Forms',
        description: 'Designing business layout forms, windows, tables, context mappings, and driver program integration.'
      }
    ]
  },
  {
    id: 'sap-development',
    title: 'SAP Development & Enhancements',
    subtitle: 'Standard SAP interfaces, integration modules, and enhancement techniques',
    iconName: 'Wrench',
    items: [
      {
        name: 'Function Modules & RFCs',
        badge: 'Modular Code',
        description: 'Creating reusable standard and remote-enabled function modules with structured importing/exporting parameters.'
      },
      {
        name: 'BAPIs',
        badge: 'Business Interface',
        description: 'Working with Business Application Programming Interfaces for standard SAP business object manipulation.'
      },
      {
        name: 'BADIs (Business Add-Ins)',
        badge: 'OO Enhancements',
        description: 'Implementing classic and new kernel-based Business Add-Ins for custom customer business logic.'
      },
      {
        name: 'Enhancement Framework',
        badge: 'Extensibility',
        description: 'Explicit and implicit enhancement points, user exits, and clean core extension principles.'
      }
    ]
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools & Ecosystem',
    subtitle: 'IDEs, API testing, version control, and client development',
    iconName: 'Wrench',
    items: [
      {
        name: 'SAP GUI / SAP Logon',
        badge: 'Workbench',
        description: 'SAP GUI 7.70 / 8.0 transactions: SE38, SE80, SE11, SE24, SE37, SE16N, and the ABAP Debugger.'
      },
      {
        name: 'Eclipse IDE (ADT)',
        badge: 'Primary RAP IDE',
        description: 'ABAP Development Tools in Eclipse for modern CDS entities, BDEF, and S/4HANA cloud development.'
      },
      {
        name: 'Git & GitHub',
        badge: 'Version Control',
        description: 'Branching, commits, pull requests, collaborative version control, and repository management.'
      },
      {
        name: 'Postman',
        badge: 'API Testing',
        description: 'Testing OData V2/V4 service endpoints, inspecting XML/JSON payloads, CSRF tokens, and HTTP status codes.'
      },
      {
        name: 'VS Code & Frontend Dev',
        badge: 'Prior Experience',
        description: 'Modern code editor and frontend development experience from Bluestock Fintech internship.'
      }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'employee-leave-request-rap',
    title: 'Employee Leave Request Management System',
    badge: 'SAP RAP • ABAP Cloud • Eclipse ADT',
    category: 'SAP RAP / Cloud',
    tagline: 'End-to-End Transactional Leave Management Built on Eclipse ADT with SAP RAP & Fiori Elements',
    description: 'Designed and built an end-to-end transactional Leave Management application using the SAP ABAP RESTful Application Programming Model (RAP) on SAP BTP / S/4HANA in Eclipse ADT. Developed CDS View Entities with parent-child compositions linking employee master data to transactional leave requests. Defined transactional behaviors (BDEF) with draft enablement, custom actions for leave approval and rejection, automatic leave duration determinations, and remaining balance validations. Published OData V4 services via Service Definitions and Service Bindings, generating a functional SAP Fiori Elements List Report and Object Page.',
    businessScenario: 'Enterprises require a centralized, atomic system where employees can submit leave requests with instant date validations and duration calculation, while managers can review, approve, or reject requests with full audit history and draft capabilities preventing data loss.',
    technologies: [
      'SAP RAP (Managed Scenario)',
      'ABAP Cloud',
      'Eclipse ADT',
      'CDS View Entities',
      'Behavior Definitions (BDEF)',
      'Determinations & Validations',
      'EML (Entity Manipulation Language)',
      'OData V4',
      'SAP Fiori Elements'
    ],
    technicalHighlights: [
      'Engineered in Eclipse ADT (ABAP Development Tools) using modern ABAP Cloud syntax and clean core practices.',
      'Developed CDS View Entities with parent-child composition: Root entity `ZI_EmployeeLeave_M` linked to employee master data and audit trail.',
      'Authored Behavior Definition (`BDEF ZI_EmployeeLeave_M`) with managed runtime, draft enablement, and full CRUD capabilities.',
      'Engineered custom instance-bound actions: `approveLeave` and `rejectLeave` with dynamic feature control.',
      'Implemented Determinations to automatically calculate total working leave days upon start and end date entry.',
      'Implemented on-save Validations verifying date sequence (EndDate >= StartDate) and checking sufficient remaining leave balances.',
      'Published OData V4 UI service via Service Definition (`ZUI_LEAVE_O4`) and Service Binding, generating a responsive SAP Fiori Elements List Report and Object Page.'
    ],
    keyFeatures: [
      'Built in Eclipse ADT: Full ABAP Cloud project lifecycle in Eclipse',
      'Managed Transactional Runtime with Draft Enablement',
      'Parent-Child CDS Composition linking employee master to leave requests',
      'Custom Instance Actions: "Approve Leave" and "Reject Leave" with dynamic button states',
      'Automated Leave Duration Determination based on calendar working days',
      'Rigorous Input Validations for date sequences and remaining leave balances',
      'SAP Fiori Elements List Report & Object Page with status badges and filters'
    ],
    architectureDetails: [
      'Data Modeling Layer: Custom transparent tables `ZEMP_LEAVE_REQ` and `ZEMP_MASTER` exposed via CDS View Entities in Eclipse ADT',
      'Business Object Layer: Root entity `ZI_EmployeeLeave_M` with `composition [0..*] of ZI_EmployeeLeaveHistory`',
      'Behavior Layer: `BDEF ZI_EmployeeLeave_M` specifying lock masters, draft table `ZEMP_LEAVE_D`, determinations, and validations',
      'Service Layer: `ZUI_LEAVE_O4` Service Definition projected to OData V4 UI Service Binding consumed by SAP Fiori Elements'
    ],
    repoUrl: 'https://github.com/Prathamesh3061',
    videoUrl: 'https://www.youtube.com/embed/placeholder-employee-leave-demo',
    videoThumbnail: '/images/project_leave_eclipse_adt.svg',
    screenshots: [
      {
        url: '/images/project_leave_eclipse_adt.svg',
        caption: 'Eclipse ADT (ABAP Development Tools): CDS View Entity Editor, BDEF, and Project Explorer',
        alt: 'Eclipse ADT Employee Leave Request Project'
      },
      {
        url: '/images/project_leave_fiori_preview.svg',
        caption: 'SAP Fiori Elements: Employee Leave Request List Report with Approve / Reject Instance Actions',
        alt: 'SAP Fiori Elements Employee Leave Request UI'
      }
    ],
    sampleCodeSnippet: {
      language: 'abap',
      filename: 'ZI_EmployeeLeave_M.bdef',
      code: `managed implementation in class zbp_i_employeeleave_m unique;
strict ( 2 );
with draft;

define behavior for ZI_EmployeeLeave_M alias LeaveRequest
persistent table zemp_leave_req
draft table zemp_leave_d
lock master total etag LastChangedAt
authorization master ( instance )
etag master LocalLastChangedAt
{
  create;
  update;
  delete;

  // Custom Business Actions for Leave Approval/Rejection
  action ( features : instance ) approveLeave result [1] $self;
  action ( features : instance ) rejectLeave result [1] $self;

  // Determinations
  determination calculateDuration on modify { field StartDate, EndDate; }

  // Validations
  validation validateDates on save { field StartDate, EndDate; create; update; }
  validation checkLeaveBalance on save { field LeaveType, TotalDays; create; }

  draft action Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare;

  mapping for zemp_leave_req
  {
    LeaveUUID = leave_uuid;
    EmployeeID = employee_id;
    LeaveType = leave_type;
    StartDate = start_date;
    EndDate = end_date;
    TotalDays = total_days;
    ApprovalStatus = approval_status;
    Reason = reason;
  }
}`
    }
  },
  {
    id: 'sales-order-sap-logon',
    title: 'Sales Order Management System',
    badge: 'Core ABAP • SAP Logon (SAP GUI)',
    category: 'Core ABAP / S/4HANA',
    tagline: 'Custom Sales Order Ledger with Custom DDIC Tables, Date/Plant Filters, and Interactive ALV',
    description: 'Developed in SAP Logon (SAP GUI), an ALV-based sales order reporting application that manages sales order header and item information stored in custom database tables. Created two custom DDIC tables for sales order header and item data, with appropriate fields and keys. Built an interactive selection screen using SELECT-OPTIONS to filter sales orders by date range and plant. Implemented double-click functionality to display item details for the selected sales order in a secondary ALV. Added input validation and error messages for invalid selection-screen inputs and no-data scenarios, and thoroughly tested the report with different input conditions using the ABAP debugger to identify and fix errors.',
    businessScenario: 'Sales and operations managers require real-time visibility into sales orders across manufacturing plants, with flexible date filters, input validation preventing invalid queries, and instant drill-down from header orders to itemized line materials.',
    technologies: [
      'SAP Logon (SAP GUI 7.70 / 8.0)',
      'Core ABAP',
      'Data Dictionary (DDIC)',
      'Open SQL (Optimized SELECTs)',
      'ALV Grid (REUSE_ALV_GRID_DISPLAY)',
      'SELECT-OPTIONS & Selection Screens',
      'Interactive Double-Click (&IC1)',
      'ABAP Debugger'
    ],
    technicalHighlights: [
      'Developed within SAP Logon / SAP GUI utilizing standard ABAP Workbench transactions (SE38, SE11).',
      'Created two normalized custom DDIC database tables: `ZSO_HEADER` (Header with VBELN) and `ZSO_ITEM` (Item with POSNR) with domain checks and foreign key references.',
      'Engineered an interactive selection screen featuring `SELECT-OPTIONS: s_erdat FOR zso_header-erdat` (Date Range) and `s_werks FOR zso_header-werks` (Plant).',
      'Added strict input validation under `AT SELECTION-SCREEN` to check validity of dates and plant codes with descriptive error messages.',
      'Implemented high-performance Open SQL queries utilizing `FOR ALL ENTRIES IN` to fetch corresponding item lines without nested database hits.',
      'Engineered interactive double-click functionality (USER_COMMAND subroutine handling sy-ucomm = &IC1) to display line-item material breakdown in a secondary ALV.',
      'Rigorously tested the report across diverse edge-case input conditions using the ABAP Debugger (`/h` mode) to inspect internal tables and fix runtime anomalies.'
    ],
    keyFeatures: [
      'Built in SAP Logon: Native SAP GUI 7.70/8.0 development in SE38 & SE11',
      'Two Custom Relational DDIC Tables for sales headers and items',
      'Interactive Selection Screen with SELECT-OPTIONS for Date Range and Plant',
      'Input Validation with clear error messages for invalid selections and empty datasets',
      'High-Performance Open SQL queries minimizing memory overhead',
      'Interactive ALV Double-Click Navigation to itemized material records',
      'Thoroughly verified and debugged using the ABAP Debugger (/h)'
    ],
    architectureDetails: [
      'DDIC Architecture: Transparent tables `ZSO_HEADER` (Primary Key: VBELN) and `ZSO_ITEM` (Primary Keys: VBELN, POSNR)',
      'Selection Screen: Frame with `SELECT-OPTIONS` for `s_erdat` (Order Date) and `s_werks` (Plant Code)',
      'Data Retrieval: Modularized `FORM fetch_data` executing Open SQL queries into internal tables `gt_header` and `gt_item`',
      'Presentation & Events: Primary ALV grid (`REUSE_ALV_GRID_DISPLAY`) with event handling subroutine `user_command` capturing double-clicks'
    ],
    repoUrl: 'https://github.com/Prathamesh3061',
    videoUrl: 'https://www.youtube.com/embed/placeholder-sap-logon-sales-demo',
    videoThumbnail: '/images/project_sap_logon_sales_report.svg',
    screenshots: [
      {
        url: '/images/project_sap_logon_sales_report.svg',
        caption: 'SAP Logon (SAP GUI): Selection Screen with Date & Plant Filter and ALV Header Grid Output',
        alt: 'SAP Logon Sales Order Selection and ALV Report'
      },
      {
        url: '/images/project_sap_logon_alv_drilldown.svg',
        caption: 'SAP GUI ALV Secondary Item Drilldown on Double-Click with Active ABAP Debugger Watchlist',
        alt: 'SAP GUI ALV Item Drilldown and ABAP Debugger'
      }
    ],
    sampleCodeSnippet: {
      language: 'abap',
      filename: 'ZSALES_ORDER_ALV.abap',
      code: `*&---------------------------------------------------------------------*
*& Report ZSALES_ORDER_ALV
*& Developer: Prathamesh Sawant (SAP Certified ABAP Developer)
*& Environment: SAP Logon / SAP GUI 7.70
*& Description: Sales Order Management with Date & Plant Filter, ALV & Drilldown
*&---------------------------------------------------------------------*
REPORT zsales_order_alv.

TABLES: zso_header, zso_item.

* Selection Screen with Date and Plant Filters
SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE TEXT-001.
  SELECT-OPTIONS: s_erdat FOR zso_header-erdat,
                  s_werks FOR zso_header-werks.
SELECTION-SCREEN END OF BLOCK b1.

TYPES: BEGIN OF ty_header,
         vbeln TYPE zso_header-vbeln,
         erdat TYPE zso_header-erdat,
         werks TYPE zso_header-werks,
         kunnr TYPE zso_header-kunnr,
         netwr TYPE zso_header-netwr,
         waerk TYPE zso_header-waerk,
         status TYPE zso_header-status,
       END OF ty_header.

DATA: gt_header TYPE STANDARD TABLE OF ty_header,
      gs_header TYPE ty_header,
      gt_item   TYPE STANDARD TABLE OF zso_item,
      gt_fieldcat TYPE slis_t_fieldcat_alv.

* Input Validation on Selection Screen
AT SELECTION-SCREEN.
  IF s_erdat IS INITIAL.
    MESSAGE 'Please specify a valid Order Date range' TYPE 'E'.
  ENDIF.

START-OF-SELECTION.
  PERFORM fetch_sales_data.
  PERFORM build_field_catalog.
  PERFORM display_alv_report.

*&---------------------------------------------------------------------*
*& Form fetch_sales_data
*&---------------------------------------------------------------------*
FORM fetch_sales_data.
  SELECT vbeln, erdat, werks, kunnr, netwr, waerk, status
    FROM zso_header
    INTO TABLE @gt_header
    WHERE erdat IN @s_erdat
      AND werks IN @s_werks.

  IF sy-subrc <> 0.
    MESSAGE 'No sales orders found for the specified criteria' TYPE 'S' DISPLAY LIKE 'E'.
    LEAVE LIST-PROCESSING.
  ENDIF.
ENDFORM.

*&---------------------------------------------------------------------*
*& Form user_command (Interactive Double-Click Event)
*&---------------------------------------------------------------------*
FORM user_command USING r_ucomm LIKE sy-ucomm
                        rs_selfield TYPE slis_selfield.
  CASE r_ucomm.
    WHEN '&IC1'. " Standard SAP Double-Click Code
      IF rs_selfield-fieldname = 'VBELN' AND rs_selfield-value IS NOT INITIAL.
        SELECT * FROM zso_item
          INTO TABLE @gt_item
          WHERE vbeln = @rs_selfield-value.
        IF sy-subrc = 0.
          PERFORM display_item_alv.
        ELSE.
          MESSAGE 'No line items exist for selected sales order' TYPE 'I'.
        ENDIF.
      ENDIF.
  ENDCASE.
ENDFORM.`
    }
  }
];

export const certifications: Certification[] = [
  {
    id: 'sap-abap-cloud-certification',
    title: 'SAP Certified Associate – Back-End Developer - ABAP Cloud',
    issuingOrganization: 'SAP',
    completionDate: 'September 2026',
    certificateImage: '/images/sap_certificate_preview.svg',
    pdfUrl: '#',
    verificationStatus: 'Officially Certified by SAP',
    description: 'Official SAP Associate-level certification validating verified technical expertise in ABAP Cloud development, the ABAP RESTful Application Programming Model (RAP), Core Data Services (CDS Views), and clean core architecture on SAP S/4HANA and SAP BTP.',
    skillsVerified: [
      'ABAP RESTful Application Programming Model (RAP)',
      'Core Data Services (CDS View Entities & Annotations)',
      'ABAP Development Tools (ADT in Eclipse)',
      'Behavior Definitions (BDEF), Determinations, and Validations',
      'Entity Manipulation Language (EML) for Business Objects',
      'SAP S/4HANA Clean Core Extensibility Principles',
      'OData V4 Services & SAP Fiori Elements Integration'
    ]
  }
];

export const timeline: TimelineItem[] = [
  {
    id: 'timeline-utkarsh',
    role: 'SAP ABAP S4/Hana Trainee',
    organization: 'Utkarsh Foundation',
    location: 'Alibag, Maharashtra',
    period: 'July 2026 – September 2026',
    type: 'training',
    description: 'Completed a 3-month intensive SAP ABAP training program covering core ABAP development and SAP S/4HANA concepts.',
    highlights: [
      'Completed a 3-month intensive SAP ABAP training program covering core ABAP development and SAP S/4HANA concepts.',
      'Gained hands-on experience with ABAP Dictionary (DDIC), Open SQL, Internal Tables, Modularization, Debugging and ALV Reports.',
      'Built practical experience with ABAP Objects, CDS Views, RAP and OData services.',
      'Studied BAPI, BADI and enhancement concepts in enterprise SAP environments.'
    ],
    skills: ['Core ABAP', 'SAP S/4HANA', 'DDIC', 'Open SQL', 'ALV Reports', 'CDS Views', 'SAP RAP', 'BAPIs & BADIs']
  },
  {
    id: 'timeline-bluestock',
    role: 'Frontend Developer Intern',
    organization: 'Bluestock Fintech',
    location: 'Remote',
    period: 'October 2025 – December 2025',
    type: 'internship',
    description: 'Collaborated in a remote software engineering environment developing responsive web applications and fintech dashboard components.',
    highlights: [
      'Implemented frontend features and resolved UI-related issues in collaboration with the development team.',
      'Performed functional testing and debugging, used Git for version control in a remote environment.',
      'Developed deep understanding of client-side JSON/REST consumption, enhancing my design of backend SAP OData V4 services.'
    ],
    skills: ['Frontend Development', 'UI Debugging', 'Functional Testing', 'Git / GitHub', 'RESTful APIs']
  },
  {
    id: 'timeline-btech',
    role: 'B.Tech – Computer Science and Engineering',
    organization: 'Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT)',
    location: 'Sangli, Maharashtra',
    period: 'August 2021 – June 2025',
    type: 'education',
    description: 'Graduated in June 2025 with CGPA: 7.23. Core curriculum in Relational Database Management Systems (RDBMS), SQL query optimization, Object-Oriented Software Design, Operating Systems, and Distributed Computing.',
    highlights: [
      'Graduated June 2025 with CGPA: 7.23, demonstrating strong mathematical and algorithmic rigor.',
      'Hands-on coursework in database normalization, relational algebra, SQL indexing, and modular software engineering.',
      'Completed senior technical projects focusing on database transactions and client-server architectures.'
    ],
    skills: ['Computer Science', 'RDBMS & SQL', 'Object-Oriented Design', 'Data Structures', 'CGPA: 7.23']
  },
  {
    id: 'timeline-12th',
    role: 'Higher Education - 12th',
    organization: 'Laxmanrao Kirloskar Vidyamandir and Junior College',
    location: 'Palus, Maharashtra',
    period: 'June 2020 – May 2021',
    type: 'education',
    description: 'Completed higher secondary education in science and mathematics, achieving an outstanding academic score.',
    highlights: [
      'Achieved academic excellence with 88% overall score.',
      'Strong analytical foundation in higher mathematics and physics.'
    ],
    skills: ['Science & Mathematics', 'Analytical Skills', 'Percentage: 88%']
  },
  {
    id: 'timeline-10th',
    role: 'Secondary Education - 10th',
    organization: 'Babasaheb Patil Vidyamandir',
    location: 'Yelavi, Maharashtra',
    period: 'June 2018 – May 2019',
    type: 'education',
    description: 'Completed secondary school certificate with distinction.',
    highlights: [
      'Achieved high academic standing with 84.60% score.',
      'Excellence in science and foundational computer education.'
    ],
    skills: ['Secondary Education', 'Percentage: 84.60%']
  }
];

export const contactDetails = {
  email: 'prathameshsawant201@gmail.com',
  formEndpoint: 'https://formsubmit.co/ajax/prathameshsawant201@gmail.com',
  phone: '8856008281',
  linkedin: 'https://linkedin.com/in/prathamesh-sawant211',
  github: 'https://github.com/Prathamesh3061',
  location: 'Maharashtra, India (Open to Relocation)',
  availability: 'Immediate availability for SAP ABAP Developer / SAP Technical Consultant roles'
};
