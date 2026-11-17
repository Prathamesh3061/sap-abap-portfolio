import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import { ProjectModal } from '../ui/ProjectModal';
import { 
  Github, 
  Play, 
  Check, 
  ArrowRight 
} from 'lucide-react';

interface ProjectsSectionProps {
  selectedProjectId?: string | null;
  onClearSelectedProject?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  selectedProjectId, 
  onClearSelectedProject 
}) => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // If selectedProjectId passed from external trigger (e.g. Recruiter Quick View)
  React.useEffect(() => {
    if (selectedProjectId) {
      const match = projects.find((p) => p.id === selectedProjectId);
      if (match) setActiveModalProject(match);
    }
  }, [selectedProjectId]);

  const handleCloseModal = () => {
    setActiveModalProject(null);
    if (onClearSelectedProject) onClearSelectedProject();
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sap-950 border border-sap-800 text-sap-400 font-mono text-xs uppercase tracking-wider">
            <span>03 // Enterprise Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Featured Practical SAP Projects
          </h2>
          <p className="text-base text-slate-400 max-w-3xl">
            Real-world enterprise applications built with modern SAP RAP and classical Core ABAP. Designed to showcase transactional integrity, data dictionary modeling, and S/4HANA readiness.
          </p>
        </div>

        {/* Project Showcase List (Large Cards) */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0D1322] border border-slate-800 hover:border-slate-700/90 shadow-2xl overflow-hidden transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Media Area: Screenshot with Video Preview Badge (7 Cols) */}
                <div className="lg:col-span-7 relative bg-slate-950 flex flex-col justify-between overflow-hidden group min-h-[340px] sm:min-h-[400px]">
                  
                  {/* Image Preview */}
                  <img
                    src={project.videoThumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent opacity-80" />

                  {/* Top Badge Strip */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900/90 border border-sap-600/40 text-sap-300 backdrop-blur-md">
                      {project.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 bg-black/60 backdrop-blur-md">
                      0{index + 1} // Enterprise Solution
                    </span>
                  </div>

                  {/* Interactive Play Video Demonstration Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-5 py-3 rounded-2xl bg-black/70 hover:bg-sap-600 text-white font-semibold text-xs flex items-center gap-2.5 backdrop-blur-md border border-white/10 hover:border-sap-500 shadow-2xl transition-all duration-300 group-hover:scale-105"
                      title="Watch Embedded Demonstration"
                    >
                      <div className="w-7 h-7 rounded-full bg-sap-500 flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                      </div>
                      <span>Watch Demo &amp; Architecture</span>
                    </button>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/5">
                    <span className="truncate mr-2 font-mono text-[11px] text-slate-300">
                      {project.tagline}
                    </span>
                    <span className="text-sap-400 font-semibold shrink-0">Click to Explore</span>
                  </div>
                </div>

                {/* Right Details Area (5 Cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-sap-400 font-bold">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
                        Key Engineering Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {project.keyFeatures.slice(0, 4).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Tags */}
                    <div className="pt-2">
                      <div className="text-xs font-mono uppercase text-slate-500 mb-2">
                        Technology Stack:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sap-600 hover:bg-sap-500 text-white font-semibold text-xs transition-colors shadow-md shadow-sap-600/20"
                    >
                      <span>View Full Project &amp; Code</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-700/80 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={handleCloseModal}
      />
    </section>
  );
};
