"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  ArrowDown,
  Check,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { dealerPageData, verifiedContactData } from "@/data/company";
import { submitEnquiry } from "@/lib/formSubmission";

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  businessType?: string;
  city?: string;
  pincode?: string;
  consent?: string;
}

export function DealerClient() {
  const { hero, targetAudience, process, form, faqs } = dealerPageData;

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    businessName: "",
    businessType: form.businessTypes[0],
    city: "",
    pincode: "",
    message: "",
    consent: false,
    botcheck: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // FAQ Accordion State (first open by default)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToForm = () => {
    const el = document.getElementById("dealer-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    const phoneDigits = formData.mobileNumber.replace(/\D/g, "");
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your mobile number.";
    } else if (phoneDigits.length < 10) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.businessType) {
      newErrors.businessType = "Please select a business type.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city or town.";
    }

    const pinDigits = formData.pincode.replace(/\D/g, "");
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Please enter your PIN code.";
    } else if (pinDigits.length !== 6) {
      newErrors.pincode = "Please enter a valid 6-digit PIN code.";
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to be contacted regarding this dealership enquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const result = await submitEnquiry({
      formType: "dealer_application",
      fullName: formData.fullName.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      email: formData.email.trim() || undefined,
      businessName: formData.businessName.trim() || undefined,
      businessType: formData.businessType,
      city: formData.city.trim(),
      pincode: formData.pincode.trim(),
      message: formData.message.trim() || undefined,
      consent: formData.consent,
      botcheck: formData.botcheck,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus("success");
      setStatusMessage(result.message);
      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        businessName: "",
        businessType: form.businessTypes[0],
        city: "",
        pincode: "",
        message: "",
        consent: false,
        botcheck: "",
      });
      setErrors({});
    } else {
      setSubmitStatus("error");
      setStatusMessage(result.message);
    }
  };

  return (
    <div className="bg-brand-offwhite min-h-screen">
      
      {/* ========================================================= */}
      {/* Section A — Hero                                          */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 space-y-6">
        
        {/* Header Copy */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-bold text-brand-gold block">
            {hero.eyebrow}
          </span>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.14]">
            {hero.heading}
          </h1>

          <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed pt-1">
            {hero.supportingText}
          </p>
        </div>

        {/* Retail Store Photography */}
        <div className="pt-2">
          <div className="relative w-full aspect-[16/9] sm:aspect-[1.8/1] rounded-2xl overflow-hidden shadow-card border border-brand-beige/80 bg-brand-beige/30">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 1000px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-black text-white hover:bg-brand-gold hover:text-brand-black transition-colors font-sans font-semibold text-sm rounded-lg tracking-wide shadow-xs"
          >
            <span>{hero.primaryCta}</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href={hero.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-brand-beige bg-white text-neutral-900 hover:border-brand-gold hover:text-brand-gold-dark transition-colors font-sans font-semibold text-sm rounded-lg tracking-wide shadow-xs"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            <span>{hero.phoneCta}</span>
          </a>
        </div>

      </section>

      {/* ========================================================= */}
      {/* Section B — Who can get in touch?                         */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F5EFE6] border-y border-brand-beige py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="max-w-2xl space-y-2">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              {targetAudience.heading}
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed">
              {targetAudience.introduction}
            </p>
          </div>

          {/* 4 Clean Checklist Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {targetAudience.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white/80 border border-brand-beige/80 rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span className="font-sans text-sm sm:text-base font-semibold text-neutral-900">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* Section C — How the process works                         */}
      {/* ========================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-8">
        
        <div className="max-w-2xl space-y-2">
          <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-bold text-brand-gold block">
            {process.eyebrow}
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            {process.heading}
          </h2>
        </div>

        {/* 3 Numbered Steps with Dividers */}
        <div className="border-t border-brand-beige/80 divide-y divide-brand-beige/80">
          {process.steps.map((step) => (
            <div
              key={step.step}
              className="py-6 sm:py-7 flex items-start gap-5 sm:gap-7"
            >
              <span className="font-sans text-xl sm:text-2xl font-bold text-brand-gold shrink-0 w-8 sm:w-10 pt-0.5">
                {step.step}
              </span>
              <div className="space-y-1">
                <h3 className="font-sans text-base sm:text-lg font-bold text-neutral-900">
                  {step.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================= */}
      {/* Section D — Dealer Application Form                       */}
      {/* ========================================================= */}
      <section
        id="dealer-form"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 scroll-mt-24"
      >
        <div className="bg-white border border-brand-beige rounded-2xl p-6 sm:p-10 lg:p-12 shadow-card">
          
          <div className="max-w-2xl space-y-2 mb-8">
            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-bold text-brand-gold block">
              DEALERSHIP APPLICATION
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              {form.heading}
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
              {form.description}
            </p>
          </div>

          {/* Success State */}
          {submitStatus === "success" && (
            <div
              role="alert"
              className="p-6 bg-[#F4F9F4] border border-[#BCE3BC] rounded-xl text-neutral-900 space-y-3 mb-6 animate-fadeIn"
            >
              <div className="flex items-center gap-2 text-[#2D7A2D] font-bold text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Enquiry Submitted</span>
              </div>
              <p className="font-sans text-sm leading-relaxed text-neutral-800">
                {statusMessage}
              </p>
              <button
                type="button"
                onClick={() => setSubmitStatus("idle")}
                className="text-xs font-sans font-semibold underline text-neutral-900 hover:text-brand-gold pt-1"
              >
                Submit another enquiry
              </button>
            </div>
          )}

          {/* Error State */}
          {submitStatus === "error" && (
            <div
              role="alert"
              className="p-5 bg-[#FDF4F4] border border-[#F3C4C4] rounded-xl text-neutral-900 space-y-2 mb-6"
            >
              <div className="flex items-center gap-2 text-[#C0392B] font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Submission Notice</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed">
                {statusMessage}
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <a
                  href={verifiedContactData.phone.href}
                  className="text-neutral-900 underline hover:text-brand-gold"
                >
                  Call {verifiedContactData.phone.number}
                </a>
                <a
                  href={verifiedContactData.email.href}
                  className="text-neutral-900 underline hover:text-brand-gold"
                >
                  Email {verifiedContactData.email.address}
                </a>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Honeypot Field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="dealer-botcheck">Do not fill this field</label>
              <input
                id="dealer-botcheck"
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                value={formData.botcheck}
                onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
              />
            </div>

            {/* Row 1: Full Name & Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="dealer-fullName"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                >
                  Full Name <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                  id="dealer-fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-600 bg-red-50/20"
                      : "border-brand-beige focus:border-brand-gold"
                  }`}
                  aria-invalid={errors.fullName ? "true" : "false"}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="dealer-mobileNumber"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                >
                  Mobile Number <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                  id="dealer-mobileNumber"
                  type="tel"
                  required
                  value={formData.mobileNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, mobileNumber: e.target.value });
                    if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
                  }}
                  placeholder="e.g. 8000642900"
                  className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                    errors.mobileNumber
                      ? "border-red-500 focus:border-red-600 bg-red-50/20"
                      : "border-brand-beige focus:border-brand-gold"
                  }`}
                  aria-invalid={errors.mobileNumber ? "true" : "false"}
                />
                {errors.mobileNumber && (
                  <p className="text-xs text-red-600 mt-1">{errors.mobileNumber}</p>
                )}
              </div>
            </div>

            {/* Row 2: Email (Optional) & Business Name (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="dealer-email"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                >
                  Email Address <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="dealer-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 focus:border-red-600"
                      : "border-brand-beige focus:border-brand-gold"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="dealer-businessName"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                >
                  Business / Shop Name <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="dealer-businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Sharma Paint & Hardware"
                  className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-sm text-neutral-900 rounded-lg focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            {/* Row 3: Business Type Dropdown */}
            <div>
              <label
                htmlFor="dealer-businessType"
                className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
              >
                Business Type <span className="text-red-600" aria-label="required">*</span>
              </label>
              <select
                id="dealer-businessType"
                required
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-sm text-neutral-900 rounded-lg focus:outline-none focus:border-brand-gold"
              >
                {form.businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 4: City/Town & PIN Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="dealer-city"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                >
                  City / Town <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                  id="dealer-city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => {
                    setFormData({ ...formData, city: e.target.value });
                    if (errors.city) setErrors({ ...errors, city: undefined });
                  }}
                  placeholder="e.g. Jaipur"
                  className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                    errors.city
                      ? "border-red-500 focus:border-red-600 bg-red-50/20"
                      : "border-brand-beige focus:border-brand-gold"
                  }`}
                />
                {errors.city && (
                  <p className="text-xs text-red-600 mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="dealer-pincode"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                >
                  PIN Code <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                  id="dealer-pincode"
                  type="text"
                  maxLength={6}
                  required
                  value={formData.pincode}
                  onChange={(e) => {
                    setFormData({ ...formData, pincode: e.target.value });
                    if (errors.pincode) setErrors({ ...errors, pincode: undefined });
                  }}
                  placeholder="6-digit PIN code"
                  className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                    errors.pincode
                      ? "border-red-500 focus:border-red-600 bg-red-50/20"
                      : "border-brand-beige focus:border-brand-gold"
                  }`}
                />
                {errors.pincode && (
                  <p className="text-xs text-red-600 mt-1">{errors.pincode}</p>
                )}
              </div>
            </div>

            {/* Row 5: Message or Business Details (Optional) */}
            <div>
              <label
                htmlFor="dealer-message"
                className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
              >
                Message or Business Details <span className="text-neutral-400 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                id="dealer-message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share any additional details about your existing retail setup or plans..."
                className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-sm text-neutral-900 rounded-lg focus:outline-none focus:border-brand-gold resize-y"
              />
            </div>

            {/* Consent Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => {
                    setFormData({ ...formData, consent: e.target.checked });
                    if (errors.consent) setErrors({ ...errors, consent: undefined });
                  }}
                  className="mt-1 h-4 w-4 rounded border-brand-beige text-brand-gold focus:ring-brand-gold cursor-pointer"
                />
                <span className="text-xs text-neutral-700 leading-normal">
                  {form.consentText}{" "}
                  <span className="text-red-600">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-red-600 mt-1">{errors.consent}</p>
              )}
            </div>

            {/* Disclaimer notice */}
            <p className="text-[11px] text-neutral-500 leading-relaxed italic">
              Note: Submitting this form registers your enquiry and expression of interest. All dealership terms, territories, and product allotments must be confirmed directly with Antico Paints.
            </p>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-black text-white hover:bg-brand-gold hover:text-brand-black disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 text-sm font-sans font-semibold rounded-lg tracking-wide shadow-xs"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <span>Submit Dealer Enquiry</span>
                )}
              </button>
            </div>

          </form>

        </div>
      </section>

      {/* ========================================================= */}
      {/* Section E — Frequently Asked Questions (Accordion)        */}
      {/* ========================================================= */}
      <section className="border-t border-brand-beige/80 py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-bold text-brand-gold block">
              QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-brand-beige divide-y divide-brand-beige">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={index} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-none"
                  >
                    <span className="font-sans text-base sm:text-lg font-bold text-neutral-900 group-hover:text-brand-gold transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-brand-offwhite border border-brand-beige flex items-center justify-center text-neutral-700 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-brand-black text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 sm:pt-4 pr-10 text-sm sm:text-base text-neutral-700 leading-relaxed font-sans animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
