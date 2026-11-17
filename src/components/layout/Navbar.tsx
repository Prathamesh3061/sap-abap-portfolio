import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { 
  FileText, 
  Menu, 
  X, 
  Zap, 
  Linkedin, 
  Github 
} from 'lucide-react';

interface NavbarProps {
  onOpenRecruiterView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Technical Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070A12]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sap-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sap-600 to-sap-800 flex items-center justify-center font-bold text-white shadow-md shadow-sap-600/20 group-hover:scale-105 transition-transform">
              PS
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-sap-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-slate-400">
                SAP ABAP Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Recruiter & Resume CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* 30-Second Recruiter Snapshot */}
            <button
              onClick={onOpenRecruiterView}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sap-300 bg-sap-950/60 border border-sap-700/50 hover:bg-sap-900/60 hover:border-sap-500 rounded-lg transition-all shadow-sm"
              title="Quick executive summary for hiring managers"
            >
              <Zap className="w-3.5 h-3.5 text-sap-400 animate-pulse" />
              <span>Recruiter 30s View</span>
            </button>

            {/* Resume Button */}
            <a
              href={`/${personalInfo.resumeFileName}`}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-sap-600 hover:bg-sap-500 rounded-lg transition-all shadow-sm shadow-sap-600/20 hover:shadow-sap-500/30"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenRecruiterView}
              className="p-2 text-xs font-semibold text-sap-400 bg-sap-950/80 border border-sap-800 rounded-lg sm:hidden flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5 text-sap-400" />
              <span>30s View</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-sap-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterView();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-sap-300 bg-sap-950 border border-sap-700/60 rounded-lg"
            >
              <Zap className="w-4 h-4 text-sap-400" />
              <span>Recruiter 30-Second Snapshot</span>
            </button>

            <a
              href={`/${personalInfo.resumeFileName}`}
              download
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-sap-600 hover:bg-sap-500 rounded-lg shadow-md shadow-sap-600/20"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 text-slate-400">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 hover:text-sap-400 transition-colors flex items-center gap-1.5 text-xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 hover:text-sap-400 transition-colors flex items-center gap-1.5 text-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
