import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationSection } from './components/sections/CertificationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { RecruiterQuickView } from './components/ui/RecruiterQuickView';

export function App() {
  const [isRecruiterViewOpen, setIsRecruiterViewOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleOpenRecruiterView = () => {
    setIsRecruiterViewOpen(true);
  };

  const handleSelectProjectFromRecruiter = (projectId: string) => {
    setSelectedProjectId(projectId);
    // Smooth scroll to projects section
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 font-sans selection:bg-sap-600/30 selection:text-sap-300 antialiased overflow-x-hidden">
      
      {/* Top Fixed Sticky Navigation Bar */}
      <Navbar onOpenRecruiterView={handleOpenRecruiterView} />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenRecruiterView={handleOpenRecruiterView} />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Technical Skills */}
        <SkillsSection />

        {/* 4. Featured Projects */}
        <ProjectsSection 
          selectedProjectId={selectedProjectId}
          onClearSelectedProject={() => setSelectedProjectId(null)}
        />

        {/* 5. Certifications */}
        <CertificationSection />

        {/* 6. Experience and Education */}
        <ExperienceSection />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenRecruiterView={handleOpenRecruiterView} />

      {/* Recruiter 30-Second Snapshot Modal */}
      <RecruiterQuickView
        isOpen={isRecruiterViewOpen}
        onClose={() => setIsRecruiterViewOpen(false)}
        onSelectProject={handleSelectProjectFromRecruiter}
      />

    </div>
  );
}

export default App;
