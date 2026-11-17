import React, { useState } from 'react';
import { certifications } from '../../data/portfolioData';
import { Certification } from '../../types';
import { CertificateModal } from '../ui/CertificateModal';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  Eye, 
  Calendar, 
  Building 
} from 'lucide-react';

export const CertificationSection: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-[#090D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sap-950 border border-sap-800 text-sap-400 font-mono text-xs uppercase tracking-wider">
            <span>04 // Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            SAP Certifications &amp; Training
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            Formal technical certification backing my development practices. Validated knowledge in classical ABAP, S/4HANA architecture, and RAP modern development.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {certifications.map((cert) => (
            <React.Fragment key={cert.id}>
              
              {/* Left: Certificate Interactive Document Preview Card (7 Cols) */}
              <div className="lg:col-span-7">
                <div 
                  onClick={() => setActiveCert(cert)}
                  className="group relative rounded-2xl bg-[#0D1322] border border-slate-800 hover:border-sap-500/50 shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* Certificate Image Preview */}
                  <img
                    src={cert.certificateImage}
                    alt={cert.title}
                    className="w-full h-auto aspect-[10/7] object-cover"
                  />

                  {/* Hover Backdrop Action */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCert(cert);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-sap-600 text-white font-semibold text-xs flex items-center gap-2 shadow-xl hover:bg-sap-500 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Certificate</span>
                    </button>
                  </div>

                  {/* Bottom Ribbon */}
                  <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{cert.verificationStatus}</span>
                    </div>
                    <span className="text-sap-400 font-mono">Click to expand viewer</span>
                  </div>
                </div>
              </div>

              {/* Right: Technical Details & Verified Skills (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-700/50 text-amber-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Specialized SAP Credential</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono py-1">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-sap-400" />
                      <span>Issuer: <strong className="text-slate-200">{cert.issuingOrganization}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sap-400" />
                      <span>Completed: <strong className="text-slate-200">{cert.completionDate}</strong></span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Verified Skills List */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                  <div className="text-xs font-mono uppercase text-sap-400 font-bold">
                    Curriculum Competencies Verified:
                  </div>
                  <ul className="space-y-1.5">
                    {cert.skillsVerified.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sap-600 hover:bg-sap-500 text-white font-semibold text-xs shadow-md shadow-sap-600/20 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={cert.certificateImage}
                    download="Prathamesh_Sawant_SAP_Certificate.svg"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-700/80 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>

              </div>

            </React.Fragment>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        cert={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
};
