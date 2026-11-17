import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { ArrowUp, Zap } from 'lucide-react';

interface FooterProps {
  onOpenRecruiterView: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRecruiterView }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sap-600 flex items-center justify-center font-bold text-white shadow-sm shadow-sap-600/20">
              PS
            </div>
            <div>
              <div className="font-bold text-white text-sm">{personalInfo.name}</div>
              <div className="text-[11px] text-slate-400 font-mono">{personalInfo.role}</div>
            </div>
          </div>

          {/* Quick Nav in Footer */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-sap-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-sap-400 transition-colors">Technical Skills</a>
            <a href="#projects" className="hover:text-sap-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-sap-400 transition-colors">Certifications</a>
            <a href="#journey" className="hover:text-sap-400 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-sap-400 transition-colors">Contact</a>
            
            <button
              onClick={onOpenRecruiterView}
              className="text-sap-400 hover:text-sap-300 font-semibold flex items-center gap-1"
            >
              <Zap className="w-3 h-3" />
              <span>30s Recruiter View</span>
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Legal & Trademark Disclosure */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All portfolio content, architecture, and code curated for enterprise recruitment.
          </div>
          <div>
            SAP, SAP S/4HANA, SAP Fiori, and ABAP are trademarks of SAP SE.
          </div>
        </div>

      </div>
    </footer>
  );
};
