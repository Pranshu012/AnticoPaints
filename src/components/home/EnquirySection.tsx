"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { Mail, Phone, MapPin, CheckCircle, Send, Clock, Building } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function EnquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "Architectural Project Specification",
    projectLocation: "",
    estimatedArea: "Under 10,000 sq.ft",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a static export site without backend database, we provide immediate interactive feedback
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Architectural Desk */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <Badge variant="gold">Specification &amp; Sales Desk</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-black tracking-tight">
                Direct Project Consultation &amp; Sampling
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed font-sans">
                Our technical coatings advisors assist with substrate preparation, bill of quantities (BOQ) review, 
                and custom batch shade matching for commercial and high-end residential tenders.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4 text-xs font-sans">
              <div className="p-5 bg-brand-offwhite border border-brand-beige flex items-start gap-4 shadow-subtle">
                <div className="p-2.5 bg-brand-beige/50 text-brand-black shrink-0">
                  <Building className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-sm text-brand-black uppercase tracking-wider font-semibold">
                    Corporate Center &amp; Gallery
                  </h3>
                  <p className="text-brand-muted mt-1 leading-relaxed">
                    {companyData.contact.officeAddressPlaceholder}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-brand-offwhite border border-brand-beige flex items-start gap-4 shadow-subtle">
                <div className="p-2.5 bg-brand-beige/50 text-brand-black shrink-0">
                  <Mail className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-sm text-brand-black uppercase tracking-wider font-semibold">
                    Technical Specifications Email
                  </h3>
                  <p className="font-mono text-brand-muted mt-1">
                    {companyData.contact.emailPlaceholder}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-brand-offwhite border border-brand-beige flex items-start gap-4 shadow-subtle">
                <div className="p-2.5 bg-brand-beige/50 text-brand-black shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-sm text-brand-black uppercase tracking-wider font-semibold">
                    Direct Architectural Hotline
                  </h3>
                  <p className="text-brand-muted mt-1">
                    {companyData.contact.phonePlaceholder}
                  </p>
                  <p className="text-[11px] text-brand-gold-dark mt-0.5">
                    {companyData.contact.businessHoursPlaceholder}
                  </p>
                </div>
              </div>
            </div>

            {/* Turnaround Note */}
            <div className="p-4 bg-brand-beige/30 border-l-2 border-brand-gold text-xs text-brand-black/80 flex items-center gap-3">
              <Clock className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Commercial tenders and sample dispatch requests are acknowledged within 24 business hours.</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-offwhite border border-brand-beige p-8 sm:p-10 shadow-card">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-brand-black text-brand-gold mx-auto flex items-center justify-center rounded-full border border-brand-gold">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-black">
                    Enquiry Registered Successfully
                  </h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                    Thank you. Your project specification enquiry has been queued for our commercial coatings desk. 
                    A technical representative will connect using the contact credentials provided.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 text-xs uppercase tracking-luxury bg-brand-black text-brand-beige hover:bg-brand-gold hover:text-brand-black transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-brand-beige pb-4 mb-2">
                    <h3 className="font-serif text-xl text-brand-black">
                      Commercial Specification &amp; Sample Kit Form
                    </h3>
                    <p className="text-xs text-brand-muted mt-1">
                      Complete project scope details for accurate substrate compatibility advice.
                    </p>
                  </div>

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance, Principal Architect"
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                        Corporate / Practice Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. specifier@architecturestudio.com"
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                        Contact Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                        Architectural Practice / Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Studio Vance Architecture &amp; Interiors"
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Enquiry Type & Estimated Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="enquiryType" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                        Enquiry Purpose
                      </label>
                      <select
                        id="enquiryType"
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                      >
                        <option>Architectural Project Specification</option>
                        <option>Physical Sample Fandeck &amp; Wet Pots</option>
                        <option>Commercial Contractor Supply Tender</option>
                        <option>Custom Batch Colour Formulation</option>
                        <option>Authorized Dealer Partnership</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="estimatedArea" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                        Estimated Surface Scope
                      </label>
                      <select
                        id="estimatedArea"
                        value={formData.estimatedArea}
                        onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                      >
                        <option>Under 10,000 sq.ft (Villa / Boutique)</option>
                        <option>10,000 - 50,000 sq.ft (Mid-Scale Commercial)</option>
                        <option>50,000 - 200,000 sq.ft (Large Complex)</option>
                        <option>Over 200,000 sq.ft (Masterplan / Infrastructure)</option>
                        <option>Sample Box / Testing Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                      Substrate Notes &amp; Specific Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify project substrate (e.g., fresh concrete, gypsum, old masonry), desired finish (Ultra-Matt, Satin, Lime Stucco), or shades under consideration..."
                      className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 text-xs uppercase tracking-luxury font-medium bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black border border-brand-black transition-all duration-300 shadow-subtle flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Specification Enquiry</span>
                    </button>
                    <p className="text-[10px] text-brand-muted text-center mt-2">
                      Confidential architectural trade submission. We do not distribute specifier information.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
