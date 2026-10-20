"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { companyData } from "@/data/company";
import { Mail, Phone, MapPin, Building, Send, CheckCircle, Clock, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ContactClient() {
  const searchParams = useSearchParams();
  const sampleParam = searchParams.get("sample");
  const productParam = searchParams.get("product");
  const projectParam = searchParams.get("project");
  const typeParam = searchParams.get("type");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: typeParam === "sample-kit" ? "Physical Sample Fandeck & Wet Pots" : "Architectural Project Specification",
    projectLocation: "",
    estimatedArea: "10,000 - 50,000 sq.ft (Mid-Scale Commercial)",
    message: sampleParam
      ? `Requesting physical 200ml drawdown sample pot for shade: ${sampleParam}`
      : productParam
      ? `Requesting specification guide & substrate compatibility audit for product: ${productParam}`
      : projectParam
      ? `Enquiring regarding coatings specification similar to project: ${projectParam}`
      : "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sampleParam) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: "Physical Sample Fandeck & Wet Pots",
        message: `Requesting physical 200ml drawdown sample pot for shade: ${sampleParam}`,
      }));
    }
  }, [sampleParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-black text-brand-offwhite py-16 sm:py-24 border-b border-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold">Commercial Specification Desk</Badge>
            <h1 className="font-serif text-3xl sm:text-5xl text-brand-beige-light tracking-tight">
              Contact &amp; Architectural Advisory
            </h1>
            <p className="text-sm sm:text-base text-brand-beige/80 leading-relaxed font-sans">
              Connect directly with our coatings technologists for specification schedules, 
              wet test pots, or custom commercial batch formulations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Form & Contact Information */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block">
                Regional Hubs
              </span>
              <h2 className="font-serif text-3xl text-brand-black">
                Architectural Centers
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Our technical sales desks operate across major metropolitan architectural corridors, 
                offering direct contractor coordination and sample distribution.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4 text-xs font-sans">
              <div className="p-6 bg-brand-offwhite border border-brand-beige shadow-subtle space-y-2">
                <div className="flex items-center gap-2 text-brand-gold-dark font-semibold">
                  <Building className="w-4 h-4" />
                  <span className="uppercase tracking-wider text-[11px]">Corporate &amp; Architectural Showroom</span>
                </div>
                <p className="text-brand-black/90 font-medium">{companyData.contact.officeAddressPlaceholder}</p>
                <p className="text-brand-muted text-[11px]">{companyData.contact.businessHoursPlaceholder}</p>
              </div>

              <div className="p-6 bg-brand-offwhite border border-brand-beige shadow-subtle space-y-2">
                <div className="flex items-center gap-2 text-brand-gold-dark font-semibold">
                  <Building className="w-4 h-4" />
                  <span className="uppercase tracking-wider text-[11px]">Manufacturing Facility &amp; Central Lab</span>
                </div>
                <p className="text-brand-black/90 font-medium">{companyData.contact.plantAddressPlaceholder}</p>
                <p className="text-brand-muted text-[11px]">[Placeholder: Central R&amp;D Testing Lab - Viscosity &amp; Accelerated Weathering]</p>
              </div>

              <div className="p-6 bg-brand-offwhite border border-brand-beige shadow-subtle space-y-2">
                <div className="flex items-center gap-2 text-brand-gold-dark font-semibold">
                  <Mail className="w-4 h-4" />
                  <span className="uppercase tracking-wider text-[11px]">Direct Electronic Specification Inquiries</span>
                </div>
                <p className="font-mono text-brand-black">{companyData.contact.emailPlaceholder}</p>
              </div>

              <div className="p-6 bg-brand-offwhite border border-brand-beige shadow-subtle space-y-2">
                <div className="flex items-center gap-2 text-brand-gold-dark font-semibold">
                  <Phone className="w-4 h-4" />
                  <span className="uppercase tracking-wider text-[11px]">Direct Telephone Desk</span>
                </div>
                <p className="text-brand-black">{companyData.contact.phonePlaceholder}</p>
              </div>
            </div>

            {/* Turnaround Guarantee */}
            <div className="p-4 bg-brand-black text-brand-offwhite border border-brand-charcoal text-xs space-y-1">
              <div className="text-brand-gold uppercase text-[10px] tracking-widest font-semibold">
                Commercial Specification Service
              </div>
              <p className="text-brand-beige/70">
                All inquiries submitted by registered architectural firms and commercial contractors receive priority response within 24 hours.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-brand-offwhite border border-brand-beige p-8 sm:p-10 shadow-card">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-brand-black text-brand-gold mx-auto flex items-center justify-center rounded-full border border-brand-gold">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-black">
                    Enquiry Logged with Technical Desk
                  </h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                    Your request has been received. Our architectural liaison will contact you with 
                    datasheets, substrate advisories, or dispatch tracking for requested sample pots.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 text-xs uppercase tracking-luxury bg-brand-black text-brand-beige hover:bg-brand-gold hover:text-brand-black transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-brand-beige pb-4 mb-2">
                    <h3 className="font-serif text-xl text-brand-black">
                      Specification &amp; Sampling Request Form
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
                        placeholder="e.g. Marcus Reid"
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
                        placeholder="e.g. mreid@studio-spec.com"
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                        Phone Number *
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
                        Company / Studio Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Reid Architecture &amp; Urban Design"
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Enquiry Type & Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="enquiryType" className="text-xs uppercase tracking-wider font-sans font-medium text-brand-black">
                        Purpose of Enquiry
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
                      Substrate Notes, Shade Names, or Tender Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Include details about project location, substrates (plaster, cement, steel, timber), requested shade codes (e.g., AN-WN01), or timeline..."
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
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
