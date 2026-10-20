"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactPageData, verifiedContactData } from "@/data/company";
import { submitEnquiry } from "@/lib/formSubmission";

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  message?: string;
  consent?: string;
}

export function ContactClient() {
  const { intro, form, dealerCrossLink } = contactPageData;

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    message: "",
    consent: false,
    botcheck: "", // Honeypot
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

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

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Please share a few more details so we can assist you.";
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to be contacted regarding this enquiry.";
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
      formType: "general_contact",
      fullName: formData.fullName.trim(),
      mobileNumber: formData.mobileNumber.trim(),
      email: formData.email.trim() || undefined,
      message: formData.message.trim(),
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
      {/* 1. Compact Off-White Introductory Section                */}
      {/* ========================================================= */}
      <section className="border-b border-brand-beige/80 py-12 sm:py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-bold text-brand-gold block">
              {intro.eyebrow}
            </span>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-[1.16]">
              {intro.heading}
            </h1>

            <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed pt-1">
              {intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. Main Two-Column Grid: Contact Info + Enquiry Form     */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Info & Dealer Cross-Link */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Methods */}
            <div className="space-y-4">
              <h2 className="font-sans text-xl font-bold text-neutral-900">
                Direct Contact
              </h2>
              <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                Reach us directly by phone or email for immediate product questions.
              </p>

              <div className="space-y-3 pt-2">
                {/* Phone Card */}
                <a
                  href={verifiedContactData.phone.href}
                  className="group block p-5 bg-white border border-brand-beige rounded-xl hover:border-brand-gold transition-all duration-200 shadow-xs hover:shadow-subtle"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] border border-brand-beige flex items-center justify-center text-brand-gold shrink-0 transition-colors group-hover:bg-brand-black group-hover:text-brand-offwhite">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block">
                        {verifiedContactData.phone.label}
                      </span>
                      <span className="font-sans text-base sm:text-lg font-bold text-neutral-900 group-hover:text-brand-gold-dark transition-colors">
                        {verifiedContactData.phone.number}
                      </span>
                    </div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={verifiedContactData.email.href}
                  className="group block p-5 bg-white border border-brand-beige rounded-xl hover:border-brand-gold transition-all duration-200 shadow-xs hover:shadow-subtle"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] border border-brand-beige flex items-center justify-center text-brand-gold shrink-0 transition-colors group-hover:bg-brand-black group-hover:text-brand-offwhite">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block">
                        {verifiedContactData.email.label}
                      </span>
                      <span className="font-sans text-base sm:text-lg font-bold text-neutral-900 group-hover:text-brand-gold-dark transition-colors break-all">
                        {verifiedContactData.email.address}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Dealer Enquiry Cross-Link Card */}
            <div className="p-6 bg-[#F5EFE6] border border-brand-beige rounded-xl space-y-3 shadow-xs">
              <span className="text-xs uppercase tracking-[0.16em] font-sans font-bold text-brand-gold block">
                DEALERSHIP OPPORTUNITIES
              </span>
              <h3 className="font-sans text-lg font-bold text-neutral-900">
                {dealerCrossLink.heading}
              </h3>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                {dealerCrossLink.description}
              </p>
              <div className="pt-2">
                <Link
                  href={dealerCrossLink.linkHref}
                  className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-neutral-900 hover:text-brand-gold transition-colors"
                >
                  <span>{dealerCrossLink.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: General Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-brand-beige rounded-2xl p-6 sm:p-10 shadow-card">
            
            <div className="space-y-2 mb-6 sm:mb-8">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                {form.heading}
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                {form.supportingText}
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
                  Send another message
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

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Spam Honeypot Field (invisible to genuine users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-botcheck">Do not fill this field</label>
                <input
                  id="contact-botcheck"
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                />
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-fullName"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                >
                  Full Name <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                  id="contact-fullName"
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
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-red-600 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Number & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Mobile Number */}
                <div>
                  <label
                    htmlFor="contact-mobileNumber"
                    className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                  >
                    Mobile Number <span className="text-red-600" aria-label="required">*</span>
                  </label>
                  <input
                    id="contact-mobileNumber"
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, mobileNumber: e.target.value });
                      if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: undefined });
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                      errors.mobileNumber
                        ? "border-red-500 focus:border-red-600 bg-red-50/20"
                        : "border-brand-beige focus:border-brand-gold"
                    }`}
                    aria-invalid={errors.mobileNumber ? "true" : "false"}
                    aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
                  />
                  {errors.mobileNumber && (
                    <p id="mobileNumber-error" className="text-xs text-red-600 mt-1">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                {/* Email Address (Optional) */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                  >
                    Email Address <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="contact-email"
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
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-600 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                >
                  Message <span className="text-red-600" aria-label="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Share details regarding your question or project..."
                  className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors resize-y ${
                    errors.message
                      ? "border-red-500 focus:border-red-600 bg-red-50/20"
                      : "border-brand-beige focus:border-brand-gold"
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-600 mt-1">
                    {errors.message}
                  </p>
                )}
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
                    I agree that Antico Paints may contact me regarding this enquiry.{" "}
                    <span className="text-red-600">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-600 mt-1">{errors.consent}</p>
                )}
              </div>

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
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <span>Send Enquiry</span>
                  )}
                </button>
              </div>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
