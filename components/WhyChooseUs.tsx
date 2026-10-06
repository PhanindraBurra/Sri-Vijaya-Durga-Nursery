"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Sprout, Headphones, Award, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "75+ Years Heritage",
    description: "Pioneering botanical multiplication in Kadiyapulanka since 1948 with time-tested expertise.",
  },
  {
    icon: ShieldCheck,
    title: "Disease-Free Saplings",
    description: "Scientific shade-net cultivation and potting mix formulation ensuring maximum field survival rates.",
  },
  {
    icon: Truck,
    title: "Pan-India Logistics",
    description: "Dedicated transport network delivering thousands of saplings safely across Indian states daily.",
  },
  {
    icon: Sprout,
    title: "Massive Stock Capacity",
    description: "12 Lakh+ saplings grown annually across vast nursery acres ready for immediate bulk supply.",
  },
  {
    icon: Headphones,
    title: "Agronomist Advice",
    description: "Free consultation on soil preparation, spacing, irrigation, and seasonal maintenance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The SVDN Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">
            Why Contractors & Farmers Choose Us
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-emerald-950 dark:text-emerald-50 mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-emerald-800/80 dark:text-emerald-200/80 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
