import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { 
  FileText, 
  ArrowRight, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  Award,
  Zap, 
  ShieldCheck
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRecruiterView: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRecruiterView }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Subtle Background Glows and Enterprise Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sap-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Professional Positioning (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Availability & Official SAP Certification Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-300">
                  {personalInfo.status}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-600/50 text-amber-300 text-xs font-semibold shadow-inner">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>SAP Certified Associate (ABAP Cloud)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sap-400 via-sap-300 to-sky-200">{personalInfo.name}</span>
              </h1>
              <div className="text-lg sm:text-xl font-display font-semibold text-slate-300 flex flex-wrap items-center gap-2">
                <span>{personalInfo.role}</span>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              SAP Certified Back-End Developer with hands-on enterprise project experience in{' '}
              <span className="text-sap-300 font-medium">Eclipse ADT</span> (SAP RAP, CDS View Entities, OData V4, Fiori Elements) and{' '}
              <span className="text-sap-300 font-medium">SAP Logon (SAP GUI)</span> (DDIC custom tables, Open SQL, interactive ALV reports with double-click drill-downs, and debugging). B.Tech Computer Science graduate from PVPIT College (CGPA: 7.23).
            </p>

            {/* Quick Micro-Highlight Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 max-w-lg py-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase">Degree</div>
                <div className="font-semibold text-white text-sm">B.Tech CSE '25</div>
                <div className="text-[11px] text-emerald-400 font-mono">CGPA: 7.23 • PVPIT</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase">ABAP Specialization</div>
                <div className="font-semibold text-sap-400 text-sm">Eclipse ADT &amp; RAP</div>
                <div className="text-[11px] text-slate-400">SAP Logon &amp; DDIC/ALV</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase">Experience</div>
                <div className="font-semibold text-white text-sm">Utkarsh &amp; Bluestock</div>
                <div className="text-[11px] text-slate-400">ABAP Trainee + Frontend</div>
              </div>
            </div>

            {/* CTAs and Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary: Download Resume */}
              <a
                href={`/${personalInfo.resumeFileName}`}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sap-600 hover:bg-sap-500 text-white font-semibold text-sm shadow-lg shadow-sap-600/25 hover:shadow-sap-500/35 hover:-translate-y-0.5 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Secondary: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-slate-600 hover:-translate-y-0.5 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-sap-400" />
              </a>

              {/* Recruiter 30s Snapshot Pill */}
              <button
                onClick={onOpenRecruiterView}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-sap-950/70 hover:bg-sap-900/80 text-sap-300 font-medium text-sm border border-sap-700/60 transition-all hover:border-sap-500"
              >
                <Zap className="w-4 h-4 text-sap-400 animate-pulse" />
                <span>Recruiter 30s View</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase text-slate-500">Direct:</span>
              
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium font-mono"
                title="Direct Phone"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-sap-300 border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="Direct Email"
              >
                <Mail className="w-4 h-4 text-sap-400" />
                <span className="hidden sm:inline">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-sap-400 border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <div className="hidden xl:flex items-center gap-1 text-xs text-slate-500 ml-auto">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Interactive Enterprise Tech Anchor (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sap-600 via-sky-500 to-indigo-600 rounded-3xl opacity-20 blur-xl"></div>
              
              {/* Main Portrait Card */}
              <div className="relative rounded-2xl bg-[#0B0F19] border border-slate-700/60 shadow-2xl overflow-hidden p-2">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-auto aspect-square object-cover rounded-xl"
                  loading="eager"
                />

                {/* Card Sub-banner */}
                <div className="p-4 bg-slate-900/90 border-t border-slate-800 mt-2 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-slate-400">VERIFIED PROFILE</div>
                    <div className="font-semibold text-white text-sm">Prathamesh Sawant</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-sap-400 font-mono bg-sap-950 px-2.5 py-1 rounded-md border border-sap-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-sap-400" />
                    <span>SAP ABAP Ready</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
