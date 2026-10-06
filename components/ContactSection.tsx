"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Plant Enquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Connect With SVDN</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">
            Visit Our Nursery or Contact Us
          </h2>
          <p className="mt-3 text-base text-emerald-800/80 dark:text-emerald-200/80">
            We welcome farm owners, contractors, and nursery buyers to inspect our stock in Kadiyapulanka.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          
          <a
            href="https://maps.app.goo.gl/4Un6KwuxhKnZ2MNQ6?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 flex flex-col items-center text-center group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-emerald-950 dark:text-emerald-100 mb-1">Nursery Address</h3>
            <p className="text-xs text-emerald-800/80 dark:text-emerald-200/80 leading-snug">
              Kadiyapulanka, Rajahmundry,<br />Andhra Pradesh - 533126
            </p>
          </a>

          <a
            href="tel:+919160122226"
            className="glass-card p-6 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 flex flex-col items-center text-center group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-emerald-950 dark:text-emerald-100 mb-1">Phone / Call</h3>
            <p className="text-xs text-emerald-800/80 dark:text-emerald-200/80 font-semibold">
              +91 9160122226
            </p>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Click to Call Now</span>
          </a>

          <a
            href="https://wa.me/919160122226"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 flex flex-col items-center text-center group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-emerald-950 dark:text-emerald-100 mb-1">WhatsApp Chat</h3>
            <p className="text-xs text-emerald-800/80 dark:text-emerald-200/80 font-semibold">
              +91 9160122226
            </p>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Instant Photo & Price Quote</span>
          </a>

          <a
            href="mailto:Svdn.plants@gmail.com"
            className="glass-card p-6 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 flex flex-col items-center text-center group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-emerald-950 dark:text-emerald-100 mb-1">Email Support</h3>
            <p className="text-xs text-emerald-800/80 dark:text-emerald-200/80 font-semibold truncate max-w-[180px]">
              Svdn.plants@gmail.com
            </p>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">Formal Tender Queries</span>
          </a>

        </div>

        {/* Form and Google Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-6 glass-card p-8 rounded-3xl border border-emerald-500/30 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-emerald-950 dark:text-emerald-50 mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-emerald-800/70 dark:text-emerald-300/70 mb-6">
              Have a custom plant requirement or farm query? Drop a message below.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-emerald-950 dark:text-emerald-50">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-800/80 dark:text-emerald-200/80">
                  Thank you for reaching out to Sri Vijaya Durga Nursery. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-emerald-950 dark:text-emerald-100 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-emerald-950/50 border border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-emerald-950 dark:text-emerald-100 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 91601 22226"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-emerald-950/50 border border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-emerald-950 dark:text-emerald-100 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-emerald-950/50 border border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-emerald-950 dark:text-emerald-100 mb-1">
                    Message / Query Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what plants you need, quantities, or visit date..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-emerald-950/50 border border-emerald-500/20 text-xs text-emerald-950 dark:text-emerald-100 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-6 h-full min-h-[420px] rounded-3xl overflow-hidden glass-card border border-emerald-500/30 shadow-xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15263.987748430635!2d81.8217343!3d16.9744485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a2f520b721e7%3A0xc3af7a5dbbfa1bfd!2sKadiyapulanka%2C%20Andhra%20Pradesh%20533126!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
