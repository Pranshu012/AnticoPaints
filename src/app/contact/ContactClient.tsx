"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Store,
  ExternalLink,
} from "lucide-react";
import { contactPageData, dealerPageData, verifiedContactData } from "@/data/company";
import { submitEnquiry } from "@/lib/formSubmission";

interface GeneralFormErrors {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  message?: string;
  consent?: string;
}

interface DealerFormErrors {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  businessType?: string;
  city?: string;
  pincode?: string;
  consent?: string;
}

export function ContactClient() {
  const { intro } = contactPageData;
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  // Tab State: "general" | "dealer"
  const [activeTab, setActiveTab] = useState<"general" | "dealer">(() => {
    return tabParam === "dealer" ? "dealer" : "general";
  });

  // Sync tab if URL param changes
  useEffect(() => {
    if (tabParam === "dealer") {
      setActiveTab("dealer");
    } else if (tabParam === "general") {
      setActiveTab("general");
    }
  }, [tabParam]);

  const handleTabChange = (tab: "general" | "dealer") => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab);
      window.history.replaceState(null, "", url.toString());
      // Smooth scroll to form card on mobile if desired
      const el = document.getElementById("contact-form-card");
      if (el && window.innerWidth < 1024) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // =========================================================
  // 1. General Enquiry Form State
  // =========================================================
  const [generalFormData, setGeneralFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    message: "",
    consent: false,
    botcheck: "",
  });
  const [generalErrors, setGeneralErrors] = useState<GeneralFormErrors>({});
  const [generalSubmitting, setGeneralSubmitting] = useState(false);
  const [generalStatus, setGeneralStatus] = useState<"idle" | "success" | "error">("idle");
  const [generalMessage, setGeneralMessage] = useState("");
  const [generalMailto, setGeneralMailto] = useState<string | null>(null);

  const validateGeneral = (): boolean => {
    const errs: GeneralFormErrors = {};
    if (!generalFormData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    const phoneDigits = generalFormData.mobileNumber.replace(/\D/g, "");
    if (!generalFormData.mobileNumber.trim()) {
      errs.mobileNumber = "Please enter your mobile number.";
    } else if (phoneDigits.length < 10) {
      errs.mobileNumber = "Please enter a valid 10-digit mobile number.";
    }
    if (
      generalFormData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(generalFormData.email.trim())
    ) {
      errs.email = "Please enter a valid email address.";
    }
    if (!generalFormData.message.trim()) {
      errs.message = "Please enter your message.";
    } else if (generalFormData.message.trim().length < 5) {
      errs.message = "Please share a few more details so we can assist you.";
    }
    if (!generalFormData.consent) {
      errs.consent = "Please agree to be contacted regarding this enquiry.";
    }
    setGeneralErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (generalSubmitting) return;
    if (!validateGeneral()) return;

    setGeneralSubmitting(true);
    setGeneralStatus("idle");

    const result = await submitEnquiry({
      formType: "general_contact",
      fullName: generalFormData.fullName.trim(),
      mobileNumber: generalFormData.mobileNumber.trim(),
      email: generalFormData.email.trim() || undefined,
      message: generalFormData.message.trim(),
      consent: generalFormData.consent,
      botcheck: generalFormData.botcheck,
    });

    setGeneralSubmitting(false);

    if (result.success) {
      setGeneralStatus("success");
      setGeneralMessage(result.message);
      setGeneralMailto(result.mailtoUrl || null);
      setGeneralFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        message: "",
        consent: false,
        botcheck: "",
      });
      setGeneralErrors({});
    } else {
      setGeneralStatus("error");
      setGeneralMessage(result.message);
      setGeneralMailto(result.mailtoUrl || null);
    }
  };

  // =========================================================
  // 2. Dealership Application Form State
  // =========================================================
  const [dealerFormData, setDealerFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    businessName: "",
    businessType: dealerPageData.form.businessTypes[0],
    city: "",
    pincode: "",
    message: "",
    consent: false,
    botcheck: "",
  });
  const [dealerErrors, setDealerErrors] = useState<DealerFormErrors>({});
  const [dealerSubmitting, setDealerSubmitting] = useState(false);
  const [dealerStatus, setDealerStatus] = useState<"idle" | "success" | "error">("idle");
  const [dealerMessage, setDealerMessage] = useState("");
  const [dealerMailto, setDealerMailto] = useState<string | null>(null);

  const validateDealer = (): boolean => {
    const errs: DealerFormErrors = {};
    if (!dealerFormData.fullName.trim()) {
      errs.fullName = "Please enter your full name.";
    }
    const phoneDigits = dealerFormData.mobileNumber.replace(/\D/g, "");
    if (!dealerFormData.mobileNumber.trim()) {
      errs.mobileNumber = "Please enter your mobile number.";
    } else if (phoneDigits.length < 10) {
      errs.mobileNumber = "Please enter a valid 10-digit mobile number.";
    }
    if (
      dealerFormData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dealerFormData.email.trim())
    ) {
      errs.email = "Please enter a valid email address.";
    }
    if (!dealerFormData.businessType) {
      errs.businessType = "Please select your business type.";
    }
    if (!dealerFormData.city.trim()) {
      errs.city = "Please enter your city or town.";
    }
    const pinDigits = dealerFormData.pincode.replace(/\D/g, "");
    if (!dealerFormData.pincode.trim()) {
      errs.pincode = "Please enter your PIN code.";
    } else if (pinDigits.length !== 6) {
      errs.pincode = "Please enter a valid 6-digit Indian PIN code.";
    }
    if (!dealerFormData.consent) {
      errs.consent = "Please agree to be contacted regarding this dealership enquiry.";
    }
    setDealerErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleDealerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dealerSubmitting) return;
    if (!validateDealer()) return;

    setDealerSubmitting(true);
    setDealerStatus("idle");

    const result = await submitEnquiry({
      formType: "dealer_application",
      fullName: dealerFormData.fullName.trim(),
      mobileNumber: dealerFormData.mobileNumber.trim(),
      email: dealerFormData.email.trim() || undefined,
      businessName: dealerFormData.businessName.trim() || undefined,
      businessType: dealerFormData.businessType,
      city: dealerFormData.city.trim(),
      pincode: dealerFormData.pincode.trim(),
      message: dealerFormData.message.trim() || undefined,
      consent: dealerFormData.consent,
      botcheck: dealerFormData.botcheck,
    });

    setDealerSubmitting(false);

    if (result.success) {
      setDealerStatus("success");
      setDealerMessage(result.message);
      setDealerMailto(result.mailtoUrl || null);
      setDealerFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        businessName: "",
        businessType: dealerPageData.form.businessTypes[0],
        city: "",
        pincode: "",
        message: "",
        consent: false,
        botcheck: "",
      });
      setDealerErrors({});
    } else {
      setDealerStatus("error");
      setDealerMessage(result.message);
      setDealerMailto(result.mailtoUrl || null);
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
      {/* 2. Main Two-Column Grid: Contact Info + Dual Forms        */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Contact Info & Cross-Link Card */}
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
                      <span className="font-sans text-base sm:text-lg font-bold text-neutral-900 group-hover:text-brand-gold-dark transition-colors">
                        {verifiedContactData.email.address}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Adaptive Cross-Link Card (toggles with active tab) */}
            {activeTab === "general" ? (
              <div className="p-6 bg-[#F5EFE6] border border-brand-beige rounded-xl space-y-3 shadow-xs">
                <span className="text-xs uppercase tracking-[0.16em] font-sans font-bold text-brand-gold block">
                  DEALERSHIP OPPORTUNITIES
                </span>
                <h3 className="font-sans text-lg font-bold text-neutral-900">
                  Interested in becoming a dealer?
                </h3>
                <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                  Explore a potential retail or distribution dealership partnership with Antico Paints.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => handleTabChange("dealer")}
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-neutral-900 hover:text-brand-gold transition-colors"
                  >
                    <span>Switch to Dealership Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="pt-1 border-t border-brand-beige/80">
                  <Link
                    href="/become-a-dealer/"
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-neutral-600 hover:text-neutral-950 transition-colors pt-2"
                  >
                    <span>View full dealership overview & FAQs</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-[#F5EFE6] border border-brand-beige rounded-xl space-y-3 shadow-xs">
                <span className="text-xs uppercase tracking-[0.16em] font-sans font-bold text-brand-gold block">
                  GENERAL ENQUIRIES
                </span>
                <h3 className="font-sans text-lg font-bold text-neutral-900">
                  Looking for product or colour advice?
                </h3>
                <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                  Have a question about our wall textures, primers, emulsions or application specifications?
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleTabChange("general")}
                    className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-neutral-900 hover:text-brand-gold transition-colors"
                  >
                    <span>Switch to General Enquiry Form</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="pt-1 border-t border-brand-beige/80">
                  <Link
                    href="/become-a-dealer/"
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-neutral-600 hover:text-neutral-950 transition-colors pt-2"
                  >
                    <span>View full dealership overview & FAQs</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Dual Form Card with Segmented Tab Switcher */}
          <div
            id="contact-form-card"
            className="lg:col-span-7 bg-white border border-brand-beige rounded-2xl p-6 sm:p-10 shadow-card scroll-mt-24"
          >
            
            {/* Interactive Segmented Tab Switcher */}
            <div className="flex p-1.5 bg-neutral-100/90 rounded-xl mb-8 border border-neutral-200/80">
              <button
                type="button"
                onClick={() => handleTabChange("general")}
                className={`flex-1 py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-sans font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "general"
                    ? "bg-brand-black text-brand-offwhite shadow-sm"
                    : "text-neutral-600 hover:text-neutral-950 hover:bg-white/60"
                }`}
                aria-pressed={activeTab === "general"}
              >
                <MessageSquare className="w-4 h-4" />
                <span>General Enquiry</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange("dealer")}
                className={`flex-1 py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-sans font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "dealer"
                    ? "bg-brand-black text-brand-offwhite shadow-sm"
                    : "text-neutral-600 hover:text-neutral-950 hover:bg-white/60"
                }`}
                aria-pressed={activeTab === "dealer"}
              >
                <Store className="w-4 h-4" />
                <span>Dealership Application</span>
              </button>
            </div>

            {/* ======================================================= */}
            {/* TAB 1: General Contact Enquiry Form                     */}
            {/* ======================================================= */}
            {activeTab === "general" && (
              <div className="animate-fadeIn">
                <div className="space-y-1.5 mb-6 sm:mb-8">
                  <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                    Send us an enquiry
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Share your question and we&apos;ll have the information needed to respond to you.
                  </p>
                </div>

                {/* Success State */}
                {generalStatus === "success" && (
                  <div
                    role="alert"
                    className="p-6 bg-[#F4F9F4] border border-[#BCE3BC] rounded-xl text-neutral-900 space-y-3 mb-6"
                  >
                    <div className="flex items-center gap-2 text-[#2D7A2D] font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Enquiry Submitted</span>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-neutral-800">
                      {generalMessage}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      {generalMailto && (
                        <a
                          href={generalMailto}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold hover:bg-brand-gold hover:text-black transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email App</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setGeneralStatus("idle")}
                        className="text-xs font-sans font-semibold underline text-neutral-900 hover:text-brand-gold"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {generalStatus === "error" && (
                  <div
                    role="alert"
                    className="p-5 bg-[#FDF4F4] border border-[#F3C4C4] rounded-xl text-neutral-900 space-y-3 mb-6"
                  >
                    <div className="flex items-center gap-2 text-[#C0392B] font-bold text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Submission Notice</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed">
                      {generalMessage}
                    </p>
                    {generalMailto && (
                      <div className="pt-1">
                        <a
                          href={generalMailto}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold hover:bg-brand-gold hover:text-black transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send directly to anticopaints@gmail.com</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                <form onSubmit={handleGeneralSubmit} noValidate className="space-y-5">
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="gen-botcheck">Do not fill</label>
                    <input
                      id="gen-botcheck"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={generalFormData.botcheck}
                      onChange={(e) =>
                        setGeneralFormData({ ...generalFormData, botcheck: e.target.value })
                      }
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="gen-fullName"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                    >
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="gen-fullName"
                      type="text"
                      required
                      value={generalFormData.fullName}
                      onChange={(e) => {
                        setGeneralFormData({ ...generalFormData, fullName: e.target.value });
                        if (generalErrors.fullName)
                          setGeneralErrors({ ...generalErrors, fullName: undefined });
                      }}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                        generalErrors.fullName
                          ? "border-red-500 bg-red-50/20"
                          : "border-brand-beige focus:border-brand-gold"
                      }`}
                    />
                    {generalErrors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{generalErrors.fullName}</p>
                    )}
                  </div>

                  {/* Mobile & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="gen-mobileNumber"
                        className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                      >
                        Mobile Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="gen-mobileNumber"
                        type="tel"
                        required
                        value={generalFormData.mobileNumber}
                        onChange={(e) => {
                          setGeneralFormData({
                            ...generalFormData,
                            mobileNumber: e.target.value,
                          });
                          if (generalErrors.mobileNumber)
                            setGeneralErrors({ ...generalErrors, mobileNumber: undefined });
                        }}
                        placeholder="e.g. 9876543210"
                        className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                          generalErrors.mobileNumber
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-beige focus:border-brand-gold"
                        }`}
                      />
                      {generalErrors.mobileNumber && (
                        <p className="text-xs text-red-600 mt-1">
                          {generalErrors.mobileNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="gen-email"
                        className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                      >
                        Email Address{" "}
                        <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="gen-email"
                        type="email"
                        value={generalFormData.email}
                        onChange={(e) => {
                          setGeneralFormData({ ...generalFormData, email: e.target.value });
                          if (generalErrors.email)
                            setGeneralErrors({ ...generalErrors, email: undefined });
                        }}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                          generalErrors.email
                            ? "border-red-500"
                            : "border-brand-beige focus:border-brand-gold"
                        }`}
                      />
                      {generalErrors.email && (
                        <p className="text-xs text-red-600 mt-1">{generalErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="gen-message"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                    >
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="gen-message"
                      required
                      rows={4}
                      value={generalFormData.message}
                      onChange={(e) => {
                        setGeneralFormData({ ...generalFormData, message: e.target.value });
                        if (generalErrors.message)
                          setGeneralErrors({ ...generalErrors, message: undefined });
                      }}
                      placeholder="Share details regarding your question or project..."
                      className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                        generalErrors.message
                          ? "border-red-500 bg-red-50/20"
                          : "border-brand-beige focus:border-brand-gold"
                      }`}
                    />
                    {generalErrors.message && (
                      <p className="text-xs text-red-600 mt-1">{generalErrors.message}</p>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={generalFormData.consent}
                        onChange={(e) => {
                          setGeneralFormData({
                            ...generalFormData,
                            consent: e.target.checked,
                          });
                          if (generalErrors.consent)
                            setGeneralErrors({ ...generalErrors, consent: undefined });
                        }}
                        className="mt-1 w-4 h-4 text-brand-gold rounded border-brand-beige focus:ring-brand-gold"
                      />
                      <span className="text-xs text-neutral-700 leading-relaxed font-sans">
                        I agree that Antico Paints may contact me regarding this enquiry.{" "}
                        <span className="text-red-600">*</span>
                      </span>
                    </label>
                    {generalErrors.consent && (
                      <p className="text-xs text-red-600 mt-1">{generalErrors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={generalSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black font-sans text-sm font-semibold rounded-lg transition-colors shadow-xs disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {generalSubmitting ? (
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
            )}

            {/* ======================================================= */}
            {/* TAB 2: Dealership Application Form                      */}
            {/* ======================================================= */}
            {activeTab === "dealer" && (
              <div className="animate-fadeIn">
                <div className="space-y-1.5 mb-6 sm:mb-8">
                  <span className="text-xs uppercase tracking-[0.18em] font-sans font-bold text-brand-gold block">
                    DEALERSHIP APPLICATION
                  </span>
                  <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                    Register your interest
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Share a few details about your business so our team can understand your enquiry.
                  </p>
                </div>

                {/* Success State */}
                {dealerStatus === "success" && (
                  <div
                    role="alert"
                    className="p-6 bg-[#F4F9F4] border border-[#BCE3BC] rounded-xl text-neutral-900 space-y-3 mb-6"
                  >
                    <div className="flex items-center gap-2 text-[#2D7A2D] font-bold text-base">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>Dealership Enquiry Submitted</span>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-neutral-800">
                      {dealerMessage}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      {dealerMailto && (
                        <a
                          href={dealerMailto}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold hover:bg-brand-gold hover:text-black transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open in Email App</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setDealerStatus("idle")}
                        className="text-xs font-sans font-semibold underline text-neutral-900 hover:text-brand-gold"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {dealerStatus === "error" && (
                  <div
                    role="alert"
                    className="p-5 bg-[#FDF4F4] border border-[#F3C4C4] rounded-xl text-neutral-900 space-y-3 mb-6"
                  >
                    <div className="flex items-center gap-2 text-[#C0392B] font-bold text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Submission Notice</span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed">
                      {dealerMessage}
                    </p>
                    {dealerMailto && (
                      <div className="pt-1">
                        <a
                          href={dealerMailto}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold hover:bg-brand-gold hover:text-black transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send directly to anticopaints@gmail.com</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}

                <form onSubmit={handleDealerSubmit} noValidate className="space-y-5">
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="dealer-botcheck">Do not fill</label>
                    <input
                      id="dealer-botcheck"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={dealerFormData.botcheck}
                      onChange={(e) =>
                        setDealerFormData({ ...dealerFormData, botcheck: e.target.value })
                      }
                    />
                  </div>

                  {/* Row 1: Full Name & Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="deal-fullName"
                        className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                      >
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="deal-fullName"
                        type="text"
                        required
                        value={dealerFormData.fullName}
                        onChange={(e) => {
                          setDealerFormData({ ...dealerFormData, fullName: e.target.value });
                          if (dealerErrors.fullName)
                            setDealerErrors({ ...dealerErrors, fullName: undefined });
                        }}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                          dealerErrors.fullName
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-beige focus:border-brand-gold"
                        }`}
                      />
                      {dealerErrors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{dealerErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="deal-mobileNumber"
                        className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                      >
                        Mobile Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="deal-mobileNumber"
                        type="tel"
                        required
                        value={dealerFormData.mobileNumber}
                        onChange={(e) => {
                          setDealerFormData({
                            ...dealerFormData,
                            mobileNumber: e.target.value,
                          });
                          if (dealerErrors.mobileNumber)
                            setDealerErrors({ ...dealerErrors, mobileNumber: undefined });
                        }}
                        placeholder="e.g. 8000642900"
                        className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                          dealerErrors.mobileNumber
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-beige focus:border-brand-gold"
                        }`}
                      />
                      {dealerErrors.mobileNumber && (
                        <p className="text-xs text-red-600 mt-1">{dealerErrors.mobileNumber}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="deal-email"
                        className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                      >
                        Email Address{" "}
                        <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="deal-email"
                        type="email"
                        value={dealerFormData.email}
                        onChange={(e) => {
                          setDealerFormData({ ...dealerFormData, email: e.target.value });
                          if (dealerErrors.email)
                            setDealerErrors({ ...dealerErrors, email: undefined });
                        }}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                          dealerErrors.email
                            ? "border-red-500"
                            : "border-brand-beige focus:border-brand-gold"
                        }`}
                      />
                      {dealerErrors.email && (
                        <p className="text-xs text-red-600 mt-1">{dealerErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="deal-businessName"
                        className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                      >
                        Business / Shop Name{" "}
                        <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="deal-businessName"
                        type="text"
                        value={dealerFormData.businessName}
                        onChange={(e) =>
                          setDealerFormData({
                            ...dealerFormData,
                            businessName: e.target.value,
                          })
                        }
                        placeholder="e.g. Sharma Paint & Hardware"
                        className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-sm text-neutral-900 rounded-lg focus:outline-none focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  {/* Row 3: Business Type Dropdown */}
                  <div>
                    <label
                      htmlFor="deal-businessType"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                    >
                      Business Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="deal-businessType"
                      required
                      value={dealerFormData.businessType}
                      onChange={(e) => {
                        setDealerFormData({
                          ...dealerFormData,
                          businessType: e.target.value,
                        });
                        if (dealerErrors.businessType)
                          setDealerErrors({ ...dealerErrors, businessType: undefined });
                      }}
                      className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-sm text-neutral-900 rounded-lg focus:outline-none focus:border-brand-gold"
                    >
                      {dealerPageData.form.businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {dealerErrors.businessType && (
                      <p className="text-xs text-red-600 mt-1">{dealerErrors.businessType}</p>
                    )}
                  </div>

                  {/* Row 4: City & PIN Code Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="deal-city"
                        className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                      >
                        City / Town <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="deal-city"
                        type="text"
                        required
                        value={dealerFormData.city}
                        onChange={(e) => {
                          setDealerFormData({ ...dealerFormData, city: e.target.value });
                          if (dealerErrors.city)
                            setDealerErrors({ ...dealerErrors, city: undefined });
                        }}
                        placeholder="e.g. Jaipur"
                        className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                          dealerErrors.city
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-beige focus:border-brand-gold"
                        }`}
                      />
                      {dealerErrors.city && (
                        <p className="text-xs text-red-600 mt-1">{dealerErrors.city}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="deal-pincode"
                        className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                      >
                        PIN Code <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="deal-pincode"
                        type="text"
                        required
                        maxLength={6}
                        value={dealerFormData.pincode}
                        onChange={(e) => {
                          setDealerFormData({ ...dealerFormData, pincode: e.target.value });
                          if (dealerErrors.pincode)
                            setDealerErrors({ ...dealerErrors, pincode: undefined });
                        }}
                        placeholder="6-digit PIN code"
                        className={`w-full px-4 py-3 bg-brand-offwhite border text-sm text-neutral-900 rounded-lg focus:outline-none transition-colors ${
                          dealerErrors.pincode
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-beige focus:border-brand-gold"
                        }`}
                      />
                      {dealerErrors.pincode && (
                        <p className="text-xs text-red-600 mt-1">{dealerErrors.pincode}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 5: Message / Business Details */}
                  <div>
                    <label
                      htmlFor="deal-message"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-1.5"
                    >
                      Message or Business Details{" "}
                      <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="deal-message"
                      rows={3}
                      value={dealerFormData.message}
                      onChange={(e) =>
                        setDealerFormData({ ...dealerFormData, message: e.target.value })
                      }
                      placeholder="Share any additional details about your existing retail setup or plans..."
                      className="w-full px-4 py-3 bg-brand-offwhite border border-brand-beige text-sm text-neutral-900 rounded-lg focus:outline-none focus:border-brand-gold"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={dealerFormData.consent}
                        onChange={(e) => {
                          setDealerFormData({
                            ...dealerFormData,
                            consent: e.target.checked,
                          });
                          if (dealerErrors.consent)
                            setDealerErrors({ ...dealerErrors, consent: undefined });
                        }}
                        className="mt-1 w-4 h-4 text-brand-gold rounded border-brand-beige focus:ring-brand-gold"
                      />
                      <span className="text-xs text-neutral-700 leading-relaxed font-sans">
                        {dealerPageData.form.consentText}{" "}
                        <span className="text-red-600">*</span>
                      </span>
                    </label>
                    {dealerErrors.consent && (
                      <p className="text-xs text-red-600 mt-1">{dealerErrors.consent}</p>
                    )}
                  </div>

                  {/* Disclaimer */}
                  <p className="text-[11px] text-neutral-500 leading-relaxed italic">
                    Note: Submitting this form registers your enquiry and expression of interest. All dealership terms, territories, and product allotments must be confirmed directly with Antico Paints.
                  </p>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={dealerSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black font-sans text-sm font-semibold rounded-lg transition-colors shadow-xs disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {dealerSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <span>Submit Dealership Enquiry</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
