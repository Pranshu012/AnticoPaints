"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, Mail, Phone, MessageSquare } from "lucide-react";

export function ContactClient() {
  const searchParams = useSearchParams();
  const shadeParam = searchParams.get("shade") || searchParams.get("sample");
  const productParam = searchParams.get("product");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: shadeParam ? "Colour & Shade Inquiry" : productParam ? "Product Details" : "General Inquiry",
    message: shadeParam
      ? `Hello, I would like to inquire about the shade: ${shadeParam}.`
      : productParam
      ? `Hello, I would like more information regarding: ${productParam}.`
      : "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (shadeParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Colour & Shade Inquiry",
        message: `Hello, I would like to inquire about the shade: ${shadeParam}.`,
      }));
    } else if (productParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: "Product Details",
        message: `Hello, I would like more information regarding: ${productParam}.`,
      }));
    }
  }, [shadeParam, productParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-black text-brand-offwhite py-14 sm:py-20 border-b border-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
              GET IN TOUCH
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-brand-beige-light tracking-tight">
              Contact Antico Paints
            </h1>
            <p className="text-sm sm:text-base text-brand-beige/80 leading-relaxed font-sans">
              Have a question about our wall finishes, primers, emulsions, or painting essentials? Send us a message and our team will be glad to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Form & Details */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold block">
                ASSISTANCE &amp; SUPPORT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-black">
                How can we help?
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Whether you need advice on surface preparation, choosing the right texture finish, or ordering accessories for your project, reach out anytime.
              </p>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="p-5 bg-white border border-brand-beige shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-brand-black font-semibold">
                  <Mail className="w-4 h-4 text-brand-gold" />
                  <span className="uppercase tracking-wider text-[11px]">Email Inquiries</span>
                </div>
                <p className="text-brand-black">info@anticopaints.com</p>
                <p className="text-brand-muted text-[11px]">We typically respond within 1 business day.</p>
              </div>

              <div className="p-5 bg-white border border-brand-beige shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-brand-black font-semibold">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span className="uppercase tracking-wider text-[11px]">Customer Support</span>
                </div>
                <p className="text-brand-black">+91 (Contact Desk Available Upon Request)</p>
                <p className="text-brand-muted text-[11px]">Monday to Saturday, 9:00 AM – 6:00 PM IST</p>
              </div>

              <div className="p-5 bg-white border border-brand-beige shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-brand-black font-semibold">
                  <MessageSquare className="w-4 h-4 text-brand-gold" />
                  <span className="uppercase tracking-wider text-[11px]">Dealer Inquiries</span>
                </div>
                <p className="text-brand-muted">
                  Interested in stocking Antico Paints products? Please mention &quot;Dealer Inquiry&quot; in the form.
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-brand-beige p-6 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-brand-gold/15 text-brand-gold rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-brand-black">Message Sent</h3>
                <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Antico Paints. Our team has received your message and will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      inquiryType: "General Inquiry",
                      message: "",
                    });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-black">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Please provide your details below and we will contact you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-brand-black mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-brand-black mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-brand-black mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-brand-black mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Details">Product Details</option>
                      <option value="Colour & Shade Inquiry">Colour &amp; Shade Inquiry</option>
                      <option value="Dealer / Distribution">Dealer / Distribution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-brand-black mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements or question..."
                    className="w-full px-3.5 py-2.5 bg-brand-offwhite border border-brand-beige text-xs text-brand-black focus:border-brand-gold focus:outline-none resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-colors text-xs uppercase tracking-wider font-semibold"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
