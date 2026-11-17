export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  location: string;
  status: string;
  statusType: 'available' | 'busy';
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  resumeFileName: string;
  avatarUrl: string;
  graduated: string;
  degree: string;
  institution: string;
  summary: string;
  recruiterTakeaways: string[];
}

export interface SkillItem {
  name: string;
  badge?: string;
  description: string;
  levelBadge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: SkillItem[];
}

export interface ProjectScreenshot {
  url: string;
  caption: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  badge: string;
  category: 'SAP RAP / Cloud' | 'Core ABAP / S/4HANA';
  tagline: string;
  description: string;
  architectureDetails: string[];
  keyFeatures: string[];
  technologies: string[];
  repoUrl: string;
  videoUrl: string;
  videoThumbnail: string;
  screenshots: ProjectScreenshot[];
  businessScenario: string;
  technicalHighlights: string[];
  sampleCodeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuingOrganization: string;
  completionDate: string;
  certificateImage: string;
  pdfUrl?: string;
  verificationStatus: string;
  description: string;
  skillsVerified: string[];
}

export interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'education' | 'internship' | 'training';
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}
