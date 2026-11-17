import React, { useState } from 'react';
import { Project } from '../../types';
import { 
  X, 
  Github, 
  Play, 
  Check, 
  Copy, 
  Workflow, 
  FileCode 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) return null;

  const copyCode = () => {
    if (project.sampleCodeSnippet) {
      navigator.clipboard.writeText(project.sampleCodeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0A0E1A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sap-950 border border-sap-700 text-sap-300">
              {project.badge}
            </span>
            <h2 id="project-modal-title" className="text-base sm:text-lg font-display font-bold text-white truncate max-w-md sm:max-w-xl">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 bg-slate-950/90 border-b border-slate-800 flex items-center gap-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-sap-500 text-sap-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Overview &amp; UI Demo</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'border-sap-500 text-sap-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Architecture &amp; Data Model</span>
          </button>

          {project.sampleCodeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'border-sap-500 text-sap-400 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Sample ABAP / BDEF Code</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          
          {/* TAB 1: OVERVIEW & UI DEMO */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Media Player / Interactive Screenshot Viewer */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl aspect-video max-h-[380px] w-full flex items-center justify-center">
                {isPlayingVideo ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-center p-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-sap-600/20 text-sap-400 flex items-center justify-center animate-pulse">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                    <div className="font-semibold text-white text-base">Video Demonstration Sandbox</div>
                    <p className="text-xs text-slate-400 max-w-md">
                      Interactive video preview for <span className="text-sap-400 font-mono">{project.title}</span>. (Repository video URL configured in <code className="text-slate-300">portfolioData.ts</code>).
                    </p>
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="text-xs text-slate-400 hover:text-white underline mt-2"
                    >
                      Return to high-resolution screenshot
                    </button>
                  </div>
                ) : (
                  <div className="relative w-full h-full group">
                    <img
                      src={project.screenshots[activeImageIdx]?.url || project.videoThumbnail}
                      alt={project.screenshots[activeImageIdx]?.alt || project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play Video Overlay Button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="px-4 py-2.5 rounded-xl bg-sap-600/90 hover:bg-sap-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg backdrop-blur-sm transition-transform hover:scale-105"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Watch Demo Walkthrough</span>
                      </button>
                    </div>

                    {/* Screenshot Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 text-xs text-slate-200">
                      {project.screenshots[activeImageIdx]?.caption}
                    </div>
                  </div>
                )}
              </div>

              {/* Screenshot Switcher Thumbnails */}
              {project.screenshots.length > 1 && (
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 uppercase">Views:</span>
                  {project.screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveImageIdx(idx);
                        setIsPlayingVideo(false);
                      }}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        activeImageIdx === idx && !isPlayingVideo
                          ? 'bg-sap-950 border-sap-500 text-sap-300 font-medium'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {idx === 0 ? 'Primary Interface' : 'Drill-Down / Detail Page'}
                    </button>
                  ))}
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1 ${
                      isPlayingVideo
                        ? 'bg-sap-950 border-sap-500 text-sap-300 font-medium'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Play className="w-3 h-3" />
                    <span>Video Player</span>
                  </button>
                </div>
              )}

              {/* Business Scenario & Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase text-sap-400 font-bold tracking-wider">
                    Business Scenario &amp; Purpose
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.businessScenario}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase text-sap-400 font-bold tracking-wider">
                    Key Features Implemented
                  </h3>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Tag Cloud */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase text-slate-500 mb-2">
                  Technical Stack &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs font-mono bg-slate-900 text-sap-300 rounded-lg border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ARCHITECTURE & DATA MODEL */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-sap-400" />
                  <span>Layered Architecture Overview</span>
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Built adhering strictly to standard SAP best practices, separation of concerns, and clean enterprise layering.
                </p>

                <div className="space-y-3">
                  {project.architectureDetails.map((layer, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                      <div className="w-6 h-6 rounded bg-sap-950 text-sap-400 border border-sap-800 flex items-center justify-center text-xs font-mono shrink-0">
                        0{idx + 1}
                      </div>
                      <div className="text-xs font-mono text-slate-300">
                        {layer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deep Technical Highlights */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase text-sap-400 font-bold tracking-wider">
                  Deep Technical Implementation Highlights
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.technicalHighlights.map((hl, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs text-slate-300 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sap-400 mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SAMPLE CODE */}
          {activeTab === 'code' && project.sampleCodeSnippet && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <FileCode className="w-4 h-4 text-sap-400" />
                  <span>Artifact: <strong className="text-white">{project.sampleCodeSnippet.filename}</strong></span>
                </div>

                <button
                  onClick={copyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 border border-slate-700 transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Snippet'}</span>
                </button>
              </div>

              {/* Code block */}
              <pre className="p-4 rounded-xl bg-[#070A12] border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed shadow-inner">
                <code>{project.sampleCodeSnippet.code}</code>
              </pre>

              <div className="text-xs text-slate-500 font-mono">
                * Complete production source code including table DDL and behavior implementations available in the GitHub repository.
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 hidden sm:block">
            Designed for SAP S/4HANA enterprise environments
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Inspect on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
