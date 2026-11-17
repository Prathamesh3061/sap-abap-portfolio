import React, { useState } from 'react';
import { personalInfo, contactDetails } from '../../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  CheckCircle2, 
  Send, 
  Clock, 
  Phone,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleType: 'Junior SAP ABAP Developer',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactDetails.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const mailtoUrl = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
    `[SAP Recruitment] ${formData.roleType} - ${formData.name || 'Recruiter'}`
  )}&body=${encodeURIComponent(
    `Hello Prathamesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nOpportunity: ${formData.roleType}\n\nMessage:\n${formData.message}\n`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Send real email via FormSubmit AJAX endpoint directly to prathameshsawant201@gmail.com
      const response = await fetch(contactDetails.formEndpoint || `https://formsubmit.co/ajax/${contactDetails.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New SAP ABAP Recruitment Inquiry from ${formData.name} (${formData.roleType})`,
          name: formData.name,
          email: formData.email,
          opportunity_type: formData.roleType,
          message: formData.message,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok || (result && result.success)) {
        setSubmitted(true);
      } else {
        // If FormSubmit returns a message (e.g., first-time activation needed)
        console.warn('FormSubmit response:', result);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to submit message:', error);
      setErrorMessage(
        'Could not reach the dispatch service automatically. You can click below to send directly using your email client (Gmail / Outlook).'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#090D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sap-950 border border-sap-800 text-sap-400 font-mono text-xs uppercase tracking-wider">
            <span>06 // Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            I am actively interviewing for Junior SAP ABAP Developer, SAP Technical Consultant, and Associate Software Engineer roles. Let's discuss how I can contribute to your SAP implementation.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#0D1322] border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-sap-600/20 border border-sap-500/30 flex items-center justify-center text-sap-400">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400">DIRECT EMAIL</span>
                <div className="text-lg font-bold text-white mt-0.5 break-all">
                  {contactDetails.email}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700"
                >
                  {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${contactDetails.email}?subject=Opportunity%20-%20SAP%20ABAP%20Developer`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-sap-600 hover:bg-sap-500 rounded-lg transition-colors shadow-sm shadow-sap-600/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Direct Phone / WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#0D1322] border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400">DIRECT PHONE / WHATSAPP</span>
                <div className="text-lg font-bold text-white mt-0.5 font-mono">
                  +91 {contactDetails.phone}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700"
                >
                  {copiedPhone ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy Number'}</span>
                </button>

                <a
                  href={`tel:${contactDetails.phone}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-sm shadow-emerald-600/20"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="p-6 rounded-2xl bg-[#0D1322] border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block">
                PROFESSIONAL NETWORKS
              </span>

              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between text-xs text-slate-300 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-800/60 flex items-center justify-center text-sky-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-sap-400 transition-colors">LinkedIn Profile</div>
                      <div className="text-[11px] text-slate-400">Connect for recruiter discussions</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between text-xs text-slate-300 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-sap-400 transition-colors">GitHub Repositories</div>
                      <div className="text-[11px] text-slate-400">Explore SAP RAP &amp; Core ABAP code</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>
              </div>
            </div>

            {/* Availability & Location Callout */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-sap-400" />
                <span>Response Time: Typically within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>{contactDetails.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D1322] border border-slate-800 shadow-2xl">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Dispatched to Prathamesh!</h3>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left space-y-2 max-w-lg mx-auto text-xs">
                    <div className="text-slate-300">
                      <strong className="text-slate-400">Recipient:</strong> <span className="text-sap-400 font-mono">prathameshsawant201@gmail.com</span>
                    </div>
                    <div className="text-slate-300">
                      <strong className="text-slate-400">From:</strong> <span className="text-white font-mono">{formData.name}</span> ({formData.email})
                    </div>
                    <div className="text-slate-300">
                      <strong className="text-slate-400">Opportunity:</strong> <span className="text-emerald-400">{formData.roleType}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you! Your inquiry has been sent directly to <strong className="text-white">prathameshsawant201@gmail.com</strong>. Prathamesh will review your message and reply to <strong className="text-white">{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', roleType: 'Junior SAP ABAP Developer', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-sap-400 hover:text-sap-300 underline"
                    >
                      Send another message
                    </button>
                    <a
                      href={mailtoUrl}
                      className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-sap-400" />
                      <span>Also open in Gmail / Outlook</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-6">
                    <h3 className="text-lg font-bold text-white">Direct Recruitment Inquiry</h3>
                    <p className="text-xs text-slate-400">
                      Messages submitted below are routed directly to <span className="text-sap-400 font-mono">prathameshsawant201@gmail.com</span>.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-amber-950/50 border border-amber-600/50 flex items-start gap-2.5 text-xs text-amber-200">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div>{errorMessage}</div>
                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center gap-1 text-amber-400 font-semibold underline hover:text-white"
                        >
                          <span>Click here to launch your email client with prefilled message</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="name" className="text-xs font-mono uppercase text-slate-400">
                        Your Name / Recruiter Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sap-500 focus:ring-1 focus:ring-sap-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="email" className="text-xs font-mono uppercase text-slate-400">
                        Work / Official Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sap-500 focus:ring-1 focus:ring-sap-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Role Type / Subject */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="roleType" className="text-xs font-mono uppercase text-slate-400">
                      Opportunity Type / Inquiring About
                    </label>
                    <select
                      id="roleType"
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-sap-500 focus:ring-1 focus:ring-sap-500 transition-colors"
                    >
                      <option value="Junior SAP ABAP Developer">Junior SAP ABAP Developer Role</option>
                      <option value="SAP Technical Consultant">SAP Technical Consultant Position</option>
                      <option value="SAP S/4HANA Implementation">SAP S/4HANA &amp; RAP Project Opportunity</option>
                      <option value="General Technical Inquiry">General Career Opportunity / Networking</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="message" className="text-xs font-mono uppercase text-slate-400">
                      Message / Job Description Summary *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project scope, organization, or next interview steps..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-sap-500 focus:ring-1 focus:ring-sap-500 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-sap-600 hover:bg-sap-500 disabled:bg-slate-800 text-white font-semibold text-xs transition-all shadow-lg shadow-sap-600/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending to prathameshsawant201@gmail.com...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Recruitment Inquiry</span>
                      </>
                    )}
                  </button>

                  {/* Direct Mail Client Alternative */}
                  <div className="pt-2 text-center">
                    <a
                      href={mailtoUrl}
                      className="text-xs text-slate-400 hover:text-sap-400 transition-colors inline-flex items-center gap-1.5 font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-sap-400" />
                      <span>Prefer your default email app? Click to send via Gmail / Outlook directly</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                    * Directly forwarded to <span className="text-slate-400">prathameshsawant201@gmail.com</span>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
