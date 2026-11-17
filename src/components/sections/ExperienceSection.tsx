import React from 'react';
import { timeline } from '../../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'education':
        return {
          icon: <GraduationCap className="w-4 h-4 text-sky-400" />,
          label: 'Academic Degree',
          bg: 'bg-sky-950/60 border-sky-800 text-sky-300'
        };
      case 'internship':
        return {
          icon: <Briefcase className="w-4 h-4 text-indigo-400" />,
          label: 'Industry Internship',
          bg: 'bg-indigo-950/60 border-indigo-800 text-indigo-300'
        };
      case 'training':
      default:
        return {
          icon: <BookOpen className="w-4 h-4 text-sap-400" />,
          label: 'Specialized Training',
          bg: 'bg-sap-950/60 border-sap-800 text-sap-300'
        };
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sap-950 border border-sap-800 text-sap-400 font-mono text-xs uppercase tracking-wider">
            <span>05 // Timeline &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education &amp; Professional Journey
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            A chronological timeline detailing my computer science engineering graduation, frontend industry internship, and enterprise SAP ABAP specialization.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {timeline.map((item) => {
            const badge = getTypeBadge(item.type);
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-[#070A12] border-2 border-sap-500 group-hover:border-sap-400 flex items-center justify-center transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-sap-400 group-hover:scale-125 transition-transform" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1322] border border-slate-800 hover:border-slate-700/80 transition-all shadow-xl space-y-4">
                  
                  {/* Top Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border flex items-center gap-1.5 ${badge.bg}`}>
                        {badge.icon}
                        <span>{badge.label}</span>
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-sap-400 mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-xs font-mono uppercase text-slate-400 font-medium">
                      Key Highlights &amp; Accomplishments:
                    </div>
                    <ul className="space-y-1.5">
                      {item.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
