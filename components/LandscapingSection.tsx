"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Trees, ShieldAlert, Sparkles, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function LandscapingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "Commercial Orchard",
    quantity: "1000",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Commercial & Bulk Orders</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950">
            Landscaping & Large Scale Supply
          </h2>
          <p className="mt-3 text-base text-emerald-800/80">
            We specialize in fulfilling bulk plant contracts for infrastructure developers, government avenue forestry, and commercial fruit orchards.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Service Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-1">
                  Highway & Infra Plantation
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800/80 leading-relaxed">
                  Bulk supply of uniform avenue trees (Tabebuia, Mahogany, Neem, Spathodea) for NHAI highways, smart city bypasses, and industrial corridors.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <Trees className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-1">
                  Commercial Farm Orchards
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800/80 leading-relaxed">
                  High-density grafted fruit saplings (Mango, Thai Pink Guava, Citrus, Sapota) delivered with planting layout consultation.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-emerald-950 mb-1">
                  Dedicated Transport Logistics
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800/80 leading-relaxed">
                  Carefully stacked truck loading with root moisture protection guarantees zero damage during interstate transport across India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Bulk Order Quote Form */}
          <div className="lg:col-span-6 glass-card p-8 rounded-3xl border border-emerald-500/30 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-emerald-950 mb-2">
              Request a Bulk Project Quote
            </h3>
            <p className="text-xs text-emerald-800/70 mb-6">
              Fill out your requirement below to receive custom wholesale pricing within 2 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-emerald-950">
                  Quote Request Received!
                </h4>
                <p className="text-xs text-emerald-800/80 max-w-sm mx-auto">
                  Thank you, <strong className="font-semibold">{formData.name}</strong>. Our bulk sales manager will contact you on <strong className="font-semibold">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-emerald-950 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-500/20 text-xs font-medium text-emerald-950 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-emerald-950 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-500/20 text-xs font-medium text-emerald-950 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-emerald-950 mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-500/20 text-xs font-medium text-emerald-950 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Commercial Orchard">Commercial Farm Orchard</option>
                      <option value="Highway Infrastructure">Highway & Avenue Infra</option>
                      <option value="Resort & Villa Landscaping">Resort & Villa Landscaping</option>
                      <option value="Government Forestry">Government Forestry</option>
                      <option value="Reseller / Nursery Owner">Reseller / Nursery Business</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-emerald-950 mb-1">
                      Estimated Sapling Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2,500 Saplings"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-500/20 text-xs font-medium text-emerald-950 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-emerald-950 mb-1">
                    Specific Plant Requirements / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify plant varieties, delivery location state, or preferred transport date..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-emerald-500/20 text-xs font-medium text-emerald-950 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Bulk Quote Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
