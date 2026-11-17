import React from 'react';
import { Certification } from '../../types';
import { X, Download, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0A0E1A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h2 id="cert-modal-title" className="text-base sm:text-lg font-display font-bold text-white">
                {cert.title}
              </h2>
              <div className="text-xs text-slate-400">
                Issued by <strong className="text-slate-200">{cert.issuingOrganization}</strong> • {cert.completionDate}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cert.certificateImage}
              download="Prathamesh_Sawant_SAP_Certificate.svg"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sap-600 hover:bg-sap-500 rounded-lg transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download SVG</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          {/* Certificate Vector Document */}
          <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-black flex justify-center">
            <img
              src={cert.certificateImage}
              alt={cert.title}
              className="w-full max-w-3xl h-auto"
            />
          </div>

          {/* Verification Details */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400">CREDENTIAL STATUS</span>
                <div className="font-semibold text-white text-base flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{cert.verificationStatus}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400">ISSUING ORGANIZATION</span>
                <div className="font-semibold text-white text-base mt-0.5">{cert.issuingOrganization}</div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400">COMPLETION YEAR</span>
                <div className="font-semibold text-white text-base mt-0.5">{cert.completionDate}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
              {cert.description}
            </p>

            {/* Verified Modules */}
            <div>
              <div className="text-xs font-mono uppercase text-sap-400 font-bold mb-2">
                Verified Technical Curriculum &amp; Modules:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cert.skillsVerified.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            Candidate: Prathamesh Sawant • B.Tech CSE (2025)
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
