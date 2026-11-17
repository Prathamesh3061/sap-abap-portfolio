# Prathamesh Sawant — Premium SAP ABAP Developer Portfolio

A modern, high-performance personal portfolio website engineered specifically for **Prathamesh Sawant**, Junior SAP ABAP Developer & SAP Technical Consultant. Built to communicate technical depth, enterprise architecture competence, and production readiness to recruiters, HR professionals, SAP consultants, and technical hiring managers within 30 seconds.

---

## 🎯 Key Highlights

- **Aesthetic**: Deep enterprise dark navy/charcoal (`#070A12`, `#0D1322`) with authentic SAP Fiori Blue (`#0070F2`) accents, clean typography (Inter, Plus Jakarta Sans, JetBrains Mono), and subtle glassmorphism.
- **30-Second Recruiter Snapshot**: An executive modal giving technical hiring managers an instant overview of education, verified stack, practical project architecture, and contact channels.
- **Project Showcase**:
  - **Flight Booking Management System**: SAP RAP (Managed), CDS View Entities, Behavior Definitions (BDEF), EML, OData V4, and Fiori Elements.
  - **Sales Order Management System**: Core ABAP, DDIC relational tables, optimized OpenSQL with `FOR ALL ENTRIES IN`, and interactive ALV line-item drill-down.
- **Interactive Deep Dive**: Full modals with UI screenshots, embedded video walkthrough players, architecture layer breakdowns, and copyable ABAP/BDEF code snippets.
- **Verified Certification Section**: Dedicated card and full-screen certificate inspection modal for the SAP ABAP Development certification.
- **Authentic Journey Timeline**: Chronological presentation of B.Tech CSE (PVPIT College, June 2025), 3-month Frontend Internship at Bluestock Fintech, and SAP ABAP intensive training.
- **Zero Fake Fluff**: No fake progress bar percentages, no fake testimonials, and no invented credentials.
- **Centralized Configuration**: All personal info, links, project details, and media URLs live in `src/data/portfolioData.ts` for effortless customization.

---

## 📁 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── prathamesh_portrait.svg       # Professional enterprise avatar
│   │   ├── project_rap_preview.svg       # Fiori Elements List Report UI
│   │   ├── project_rap_object_page.svg   # Fiori Elements Object Page UI
│   │   ├── project_sales_preview.svg     # SAP GUI / ALV Grid Header UI
│   │   ├── project_sales_drilldown.svg   # Secondary ALV Items Drilldown UI
│   │   └── sap_certificate_preview.svg   # Verified SAP Certificate document
│   └── Prathamesh_Sawant_SAP_ABAP_Resume.pdf  # Downloadable PDF Resume
├── src/
│   ├── data/
│   │   └── portfolioData.ts              # Single source of truth for all data & links
│   ├── types/
│   │   └── index.ts                      # Strict TypeScript interfaces
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                # Sticky blurred header + mobile drawer
│   │   │   └── Footer.tsx                # Enterprise footer + trademark notices
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx           # Hero with portrait, badges, CTAs
│   │   │   ├── AboutSection.tsx          # Bento grid: background & engineering mindset
│   │   │   ├── SkillsSection.tsx         # Core ABAP vs SAP RAP vs Tools
│   │   │   ├── ProjectsSection.tsx       # Large cards with video & architecture triggers
│   │   │   ├── CertificationSection.tsx  # Certification card with viewer modal
│   │   │   ├── ExperienceSection.tsx     # Chronological timeline
│   │   │   └── ContactSection.tsx        # Direct channels & validated inquiry form
│   │   └── ui/
│   │       ├── RecruiterQuickView.tsx    # 30-second executive summary modal
│   │       ├── ProjectModal.tsx          # Deep-dive video, architecture & code modal
│   │       └── CertificateModal.tsx      # High-resolution certificate modal
│   ├── styles/
│   │   └── index.css                     # Custom scrollbar & Tailwind directives
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Updating Content & Links

To update personal contact details, GitHub URLs, LinkedIn link, resume, or add new projects, simply open:
👉 `src/data/portfolioData.ts`

All UI sections automatically sync with this centralized file.
