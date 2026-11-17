import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import { 
  Server, 
  Cpu, 
  Wrench, 
  Database 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Server':
        return <Server className="w-5 h-5 text-sap-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-indigo-400" />;
    }
  };

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#090D18]">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sap-950 border border-sap-800 text-sap-400 font-mono text-xs uppercase tracking-wider">
              <span>02 // Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Enterprise Technical Skills Matrix
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">
              Transparent, verified competencies across classical SAP ABAP and the modern S/4HANA cloud programming model. No fake percentages — just real engineering skills.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-sap-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.items.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-sap-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.title} ({cat.items.length})
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div 
              key={category.id} 
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1322] border border-slate-800/80 shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-slate-500">
                  <span>{category.items.length} verified competencies</span>
                </div>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {category.items.map((skill) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-sap-950/80 border-sap-500 shadow-md shadow-sap-600/10'
                          : 'bg-slate-900/50 border-slate-800/70 hover:bg-slate-900 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-slate-200 text-sm tracking-tight">
                          {skill.name}
                        </span>
                        {skill.badge ? (
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-sap-950 border border-sap-800 text-sap-400 shrink-0">
                            {skill.badge}
                          </span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-sap-400 mt-1.5 shrink-0" />
                        )}
                      </div>

                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Competency Architectural Summary Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#0A1224] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-sap-600/20 border border-sap-500/30 flex items-center justify-center text-sap-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">
                Dual-Track Readiness: Classical ABAP &amp; Modern S/4HANA RAP
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Capable of maintaining legacy ECC 6.0 codebases (SE38, Smart Forms, ALV) while building cloud-native S/4HANA apps with CDS and RAP.
              </div>
            </div>
          </div>

          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-sap-300 border border-slate-700 whitespace-nowrap transition-colors"
          >
            Inspect Project Implementations →
          </a>
        </div>

      </div>
    </section>
  );
};
