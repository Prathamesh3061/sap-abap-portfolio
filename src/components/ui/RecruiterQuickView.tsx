import React, { useState } from 'react';
import { personalInfo, projects, contactDetails } from '../../data/portfolioData';
import { 
  X, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Download, 
  Code, 
  Layers, 
  Mail,
  Phone,
  Award,
  Zap
} from 'lucide-react';

interface RecruiterQuickViewProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export const RecruiterQuickView: React.FC<RecruiterQuickViewProps> = ({ 
  isOpen, 
  onClose,
  onSelectProject 
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(contactDetails.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B0F19] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recruiter-modal-title"
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sap-600/20 border border-sap-500/30 flex items-center justify-center text-sap-400">
              <Zap className="w-4 h-4 fill-sap-400" />
            </div>
            <div>
              <h2 id="recruiter-modal-title" className="text-base sm:text-lg font-display font-bold text-white flex items-center gap-2">
                Recruiter &amp; Hiring Manager Snapshot
                <span className="text-xs px-2 py-0.5 rounded-full bg-sap-950 border border-sap-700 text-sap-300 font-mono font-normal">
                  30s Executive Summary
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Key facts, enterprise readiness, and verification in one view
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          {/* Quick Profile Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <div className="text-xs font-mono uppercase text-slate-500 mb-1">Candidate</div>
              <div className="font-bold text-white text-base">{personalInfo.name}</div>
              <div className="text-xs text-sap-400 font-medium">{personalInfo.role}</div>
              <div className="inline-flex items-center gap-1 mt-1 text-[11px] text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/40">
                <Award className="w-3 h-3 text-amber-400" />
                <span>SAP Certified Associate</span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-slate-500 mb-1">Education &amp; Degree</div>
              <div className="font-semibold text-slate-200">{personalInfo.degree}</div>
              <div className="text-xs text-slate-400">{personalInfo.institution} • Graduated {personalInfo.graduated}</div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-slate-500 mb-1">Contact &amp; Availability</div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Immediate / Open to Relocation</span>
              </div>
              <div className="text-xs text-slate-300 mt-1 font-mono flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>+91 {contactDetails.phone}</span>
              </div>
            </div>
          </div>

          {/* Core Competencies Quick Matrix */}
          <div>
            <h3 className="text-xs font-mono uppercase text-sap-400 tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
              <Code className="w-3.5 h-3.5" />
              <span>Core Technical Stack (Zero Exaggeration)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-200 block mb-1.5 text-sap-300">
                  Core ABAP Backend
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['ABAP Fundamentals', 'DDIC Tables', 'ALV Reports', 'Internal Tables', 'Modularization', 'OO ABAP', 'OData Services', 'Smart Forms', 'Adobe Forms'].map((skill) => (
                    <span key={skill} className="px-2 py-0.5 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700/60 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-200 block mb-1.5 text-sap-300">
                  Modern SAP &amp; S/4HANA
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['SAP RAP', 'CDS Views', 'Behavior Definitions', 'EML', 'Business Object Modeling', 'SAP HANA', 'SAP S/4HANA', 'Fiori Elements'].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs bg-sap-950/80 text-sap-300 rounded border border-sap-800/80 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Practical Projects Showcase */}
          <div>
            <h3 className="text-xs font-mono uppercase text-sap-400 tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Verified Practical Projects</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((proj) => (
                <div 
                  key={proj.id} 
                  className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-sap-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-medium text-sap-400">{proj.badge}</span>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">Production Scenario</span>
                    </div>
                    <div className="font-semibold text-white text-sm mb-1">{proj.title}</div>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-3">{proj.description}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProject(proj.id);
                      }}
                      className="text-sap-400 hover:text-sap-300 font-medium inline-flex items-center gap-1"
                    >
                      <span>Inspect Architecture</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Recruiter Takeaways */}
          <div>
            <h3 className="text-xs font-mono uppercase text-sap-400 tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Why Prathamesh Stands Out</span>
            </h3>
            <ul className="space-y-1.5 bg-slate-900/30 p-3.5 rounded-lg border border-slate-800/80">
              {personalInfo.recruiterTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sap-400 mt-1.5 shrink-0"></span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Quick Actions */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Email Copied!' : contactDetails.email}</span>
            </button>

            <button
              onClick={copyPhone}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 font-mono"
            >
              {copiedPhone ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Phone className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{copiedPhone ? 'Phone Copied!' : `+91 ${contactDetails.phone}`}</span>
            </button>

            <a
              href={`mailto:${contactDetails.email}?subject=Job%20Opportunity%20-%20SAP%20ABAP%20Developer`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              <Mail className="w-3.5 h-3.5 text-sap-400" />
              <span>Send Email</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={`/${personalInfo.resumeFileName}`}
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sap-600 hover:bg-sap-500 rounded-lg shadow-md shadow-sap-600/20 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
