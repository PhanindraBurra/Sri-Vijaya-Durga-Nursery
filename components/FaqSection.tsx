"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "Where is Sri Vijaya Durga Nursery located?",
    answer: "We are situated in Kadiyapulanka, near Rajahmundry, East Godavari District, Andhra Pradesh (PIN: 533126). Kadiyapulanka is Asia's largest nursery hub, and our facilities extend across expansive acres.",
  },
  {
    question: "Do you supply plants in bulk across India?",
    answer: "Yes! We specialize in Pan-India wholesale delivery. We arrange full truck loads and half truck loads with specialized root ball moisture packing to ensure plants arrive fresh across any Indian state.",
  },
  {
    question: "What is the minimum order quantity for wholesale orders?",
    answer: "For retail local visits, there is no minimum. For outstation truck dispatch, our minimum wholesale order starts at 500 saplings or a minimum order value of ₹25,000.",
  },
  {
    question: "How do you ensure plant survival during multi-day transport?",
    answer: "Our saplings undergo root pruning and shade-net hardening prior to dispatch. Roots are wrapped in moisture-retaining organic coir peat and stacked systematically in ventilated transport trucks.",
  },
  {
    question: "Can I inspect the plants in person before purchasing?",
    answer: "Absolutely! We warmly welcome farm owners, landscape architects, and contractors to visit our Kadiyapulanka nursery, inspect sapling health, and select mother plants directly.",
  },
  {
    question: "Do you provide plant replacement or survival warranty?",
    answer: "We guarantee 100% disease-free saplings at the time of loading. Our technical team also provides guidance on soil preparation and planting technique to maximize survival rate.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950">
            Got Questions? We Have Answers.
          </h2>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="glass-card rounded-2xl border border-emerald-500/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-emerald-500/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <h3 className="font-serif text-base sm:text-lg font-bold text-emerald-950">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-2 rounded-full bg-emerald-500/10 text-emerald-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-1 text-sm text-emerald-900/80 leading-relaxed border-t border-emerald-500/10"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
