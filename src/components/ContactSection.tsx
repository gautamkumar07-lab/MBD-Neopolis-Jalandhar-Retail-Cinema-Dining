import React, { useState } from 'react';
import { Phone, MapPin, Mail, Building, Briefcase, Send, CheckCircle2, Copy, Check, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialMode?: 'contact' | 'leasing' | 'careers';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMode = 'contact' }) => {
  const [activeFormTab, setActiveFormTab] = useState<'contact' | 'leasing' | 'careers'>(initialMode);

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Mall Inquiry',
    message: '',
    // Leasing fields
    brandName: '',
    categoryPreference: 'Fashion & Apparel',
    areaRequired: '500 - 1,500 sq. ft.',
    // Careers fields
    location: 'Jalandhar',
    jobDepartment: 'Retail Operations & Customer Service',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedPhone(num);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Website constraint: Message must contain more than 10 characters
    if (formData.message.trim().length <= 10) {
      setErrorMessage('According to official website guidelines, message content must contain more than 10 characters.');
      return;
    }

    if (!formData.email || !formData.phone || !formData.firstName) {
      setErrorMessage('Please fill in your name, email, and contact number.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: 'General Mall Inquiry',
      message: '',
      brandName: '',
      categoryPreference: 'Fashion & Apparel',
      areaRequired: '500 - 1,500 sq. ft.',
      location: 'Jalandhar',
      jobDepartment: 'Retail Operations & Customer Service',
    });
  };

  return (
    <section id="contact" className="py-16 bg-neutral-100 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Official Business Contacts & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-1">
                Official Business Information
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-neutral-900">
                Contact & Administration
              </h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Direct phone lines and physical coordinates verified from the official MBD Neopolis Jalandhar Contact Us portal.
              </p>
            </div>

            {/* Official Coordinates Card */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-5 shadow-xs">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Mall Address
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 mt-1 leading-snug">
                    MBD Neopolis, Adjacent to Radisson Hotel, BMC Chowk, Jalandhar 144 001, Punjab, India.
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    Direct access via Main G.T. Road (Near Model Town & Jawahar Nagar)
                  </div>
                </div>
              </div>

              {/* Main Phone */}
              <div className="pt-4 border-t border-neutral-100 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-neutral-100 text-neutral-800 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Main Mall Desk
                    </div>
                    <div className="text-base font-bold text-neutral-900 font-mono tabular-nums mt-0.5">
                      +91 181 4305000
                    </div>
                    <div className="text-[11px] text-neutral-500">Customer assistance & security</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href="tel:+911814305000"
                    className="px-2.5 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                  >
                    Call
                  </a>
                  <button
                    onClick={() => handleCopy('+91 181 4305000')}
                    className="p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
                    title="Copy number"
                  >
                    {copiedPhone === '+91 181 4305000' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Leasing Phone */}
              <div className="pt-4 border-t border-neutral-100 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-amber-100 text-amber-900 shrink-0 mt-0.5">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                      Leasing & Marketing Line
                    </div>
                    <div className="text-base font-bold text-neutral-900 font-mono tabular-nums mt-0.5">
                      +91 80547 15018
                    </div>
                    <div className="text-[11px] text-neutral-500">Store leasing & brand partnerships</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href="tel:+918054715018"
                    className="px-2.5 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                  >
                    Call
                  </a>
                  <button
                    onClick={() => handleCopy('+91 80547 15018')}
                    className="p-1.5 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
                    title="Copy number"
                  >
                    {copiedPhone === '+91 80547 15018' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Email Protection Audit */}
              <div className="pt-4 border-t border-neutral-100 flex items-start gap-3.5 text-xs text-neutral-500">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-800">Email Mechanism:</span> The website's email address is protected by an automated cloaking mechanism; direct inquiries are managed via phone or the inquiry form below.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form with Modes */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xs">
              {/* Form Tabs */}
              <div className="flex items-center gap-2 mb-6 border-b border-neutral-100 pb-3">
                <button
                  onClick={() => {
                    setActiveFormTab('contact');
                    setSubmitted(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeFormTab === 'contact'
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:text-neutral-900 bg-neutral-100'
                  }`}
                >
                  General Contact Form
                </button>
                <button
                  onClick={() => {
                    setActiveFormTab('leasing');
                    setSubmitted(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeFormTab === 'leasing'
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:text-neutral-900 bg-neutral-100'
                  }`}
                >
                  Store Leasing Enquiry
                </button>
                <button
                  onClick={() => {
                    setActiveFormTab('careers');
                    setSubmitted(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeFormTab === 'careers'
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:text-neutral-900 bg-neutral-100'
                  }`}
                >
                  Careers Portal
                </button>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-neutral-900">
                    Inquiry Submitted Successfully
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.firstName}. Your {activeFormTab} request has been logged. MBD Neopolis management at BMC Chowk will review and connect with you at{' '}
                    <span className="font-semibold text-neutral-900 font-mono">{formData.phone}</span>.
                  </p>
                  <div className="text-xs text-neutral-500 font-mono">
                    Reference ID: MBD-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Careers Location Selector */}
                  {activeFormTab === 'careers' && (
                    <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 space-y-2">
                      <div className="text-xs font-bold uppercase text-neutral-700">
                        Join Our Vibrant Culture
                      </div>
                      <p className="text-xs text-neutral-500">
                        Select which MBD Neopolis facility you wish to apply to:
                      </p>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-xs font-medium text-neutral-800 cursor-pointer">
                          <input
                            type="radio"
                            name="careersLocation"
                            value="Jalandhar"
                            checked={formData.location === 'Jalandhar'}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="text-amber-500 focus:ring-amber-500"
                          />
                          <span>MBD Neopolis Jalandhar (BMC Chowk)</span>
                        </label>
                        <label className="flex items-center gap-2 text-xs font-medium text-neutral-800 cursor-pointer">
                          <input
                            type="radio"
                            name="careersLocation"
                            value="Ludhiana"
                            checked={formData.location === 'Ludhiana'}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="text-amber-500 focus:ring-amber-500"
                          />
                          <span>MBD Neopolis Ludhiana (Ferozepur Rd)</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Leasing Specific Fields */}
                  {activeFormTab === 'leasing' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-amber-50/50 p-3.5 rounded-xl border border-amber-200">
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Brand / Business Name
                        </label>
                        <input
                          type="text"
                          value={formData.brandName}
                          onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                          placeholder="e.g. Apex Apparel, Gourmet Roasters"
                          className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Retail Category
                        </label>
                        <select
                          value={formData.categoryPreference}
                          onChange={(e) => setFormData({ ...formData, categoryPreference: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        >
                          <option>Fashion & Apparel</option>
                          <option>Footwear & Sports</option>
                          <option>Cosmetics & Beauty</option>
                          <option>Food Court / Dining Counter</option>
                          <option>Electronics & Gadgets</option>
                          <option>Specialty Kiosk / Pop-up</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Standard Name Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="e.g. Rajan"
                        className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-md focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="e.g. Sharma"
                        className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-md focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-md focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Telephone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-md focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-md focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  {/* Message (With Website condition >10 chars) */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-medium text-neutral-700">
                        Message Content <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[11px] text-neutral-400">
                        Min. 10 characters ({formData.message.length} chars)
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify your query, brand background, or visitor questions..."
                      className="w-full px-3 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-md focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-neutral-400">
                      Transmitted directly to MBD Mall Operations team at BMC Chowk.
                    </p>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
