import React from 'react';
import { 
  GraduationCap, 
  Terminal, 
  Lightbulb, 
  Workflow, 
  CheckCircle2 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sap-950 border border-sap-800 text-sap-400 font-mono text-xs uppercase tracking-wider">
            <span>01 // About My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Engineering Rigor Meets Enterprise SAP Architecture
          </h2>
          <p className="text-base text-slate-400 max-w-3xl">
            A grounded perspective on how I approach enterprise software, why I chose SAP ABAP, and how my background positions me to deliver immediate value.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Core Story & Mission (8 Cols) */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#0D1322] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sap-400 font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span>PROFESSIONAL BACKGROUND</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                From Computer Science Engineering to High-Impact SAP Systems
              </h3>

              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I graduated with a <strong className="text-white">B.Tech in Computer Science and Engineering</strong> from <strong className="text-white">Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT), Sangli</strong> (CGPA: 7.23, June 2025).
                </p>
                <p>
                  Recognizing that global industry backbones rely on SAP to drive core supply chains, financials, and logistics, I committed myself to intensive specialization in <strong className="text-sap-300">SAP ABAP and SAP S/4HANA</strong>, completing a rigorous 3-month training program at <strong className="text-white">Utkarsh Foundation (Alibag)</strong> and earning the official <strong className="text-amber-300">SAP Certified Associate – Back-End Developer - ABAP Cloud</strong> certification (September 2026).
                </p>
                <p>
                  I approach enterprise applications with an engineer's mindset: designing robust relational schemas in the Data Dictionary (DDIC) via <strong className="text-sap-300">SAP Logon</strong>, crafting clean transactional business logic in Behavior Definitions (BDEF) via <strong className="text-sap-300">Eclipse ADT</strong>, and optimizing runtime execution with the ABAP debugger and in-memory code pushdown.
                </p>
              </div>
            </div>

            {/* Quick Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400">DATA INTEGRITY</div>
                <div className="text-xs text-slate-300">DDIC validation, foreign keys, and atomic transactions.</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400">CLEAN CODE</div>
                <div className="text-xs text-slate-300">Modularization, OO ABAP, and maintainable subroutines.</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400">CLOUD READINESS</div>
                <div className="text-xs text-slate-300">RAP architecture, CDS view entities, and OData APIs.</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Academic & Timeline Milestone (4 Cols) */}
          <div className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0D1322] border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sap-950 border border-sap-800 flex items-center justify-center text-sap-400">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Graduation Milestone</span>
                <h4 className="text-lg font-bold text-white mt-1">B.Tech in Computer Science</h4>
                <p className="text-xs text-sap-400 font-mono mt-0.5">PVPIT, Sangli • Graduated June 2025</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 border border-emerald-700/60 text-emerald-300">
                  CGPA: 7.23 / 10.0
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Core coursework spanning Relational Database Management Systems (RDBMS), SQL query optimization, Object-Oriented Software Design, Operating Systems, and Distributed Computing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Degree Completed &amp; Verified</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: The Bluestock Fintech Advantage (6 Cols) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0D1322] border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                  <Workflow className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  3-Month Remote Internship
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                Frontend Developer Internship at Bluestock Fintech
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Before focusing exclusively on SAP, I completed a 3-month remote frontend internship at Bluestock Fintech. This experience provided an immense competitive advantage for an enterprise backend developer:
              </p>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span><strong>Empathy for the Consumer:</strong> I understand how frontend clients consume OData/REST payloads, pagination, and error payloads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span><strong>Fiori Elements Mastery:</strong> Knowing UI requirements makes authoring CDS UI annotations and field controls intuitive and fast.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span><strong>Agile Team Delivery:</strong> Daily standups, Git workflows, and asynchronous code reviews.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-indigo-300 font-mono">
              Bridges Backend SAP Services ↔ Modern Web Clients
            </div>
          </div>

          {/* Bento Card 4: Technical Problem-Solving Methodology (6 Cols) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0D1322] border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-sap-950 border border-sap-800 flex items-center justify-center text-sap-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  Engineering Principles
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                My Technical Problem-Solving Approach
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-semibold text-sap-300 font-mono block">1. Model the Data Right (DDIC / CDS)</span>
                  <span className="text-xs text-slate-400">A clean data model prevents 90% of runtime bugs. I prioritize key cardinality, search helps, and normalization first.</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-semibold text-sap-300 font-mono block">2. Code Pushdown to the Database</span>
                  <span className="text-xs text-slate-400">Filter, aggregate, and calculate on SAP HANA directly using CDS Views and OpenSQL instead of loops over internal tables.</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-semibold text-sap-300 font-mono block">3. Transactional Safety &amp; Clean Core</span>
                  <span className="text-xs text-slate-400">Strict draft handling, EML concurrency checks, and adhering to S/4HANA standard extension points.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              Committed to building production-grade enterprise software that scales gracefully.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
