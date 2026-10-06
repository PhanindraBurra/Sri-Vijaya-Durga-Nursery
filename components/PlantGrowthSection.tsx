"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout, Sun, TreePine, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Sprout,
    title: "Organic Soil Bed",
    subtitle: "Seed Selection",
    description: "Disease-free seeds planted in nutrient-rich compost and red earth mix.",
  },
  {
    step: "02",
    icon: Sun,
    title: "Shade Net Nursery",
    subtitle: "Acclimatization",
    description: "Carefully nurtured taproot and foliage under solar shade structures.",
  },
  {
    step: "03",
    icon: TreePine,
    title: "Orchard Sapling",
    subtitle: "Ready for Delivery",
    description: "Hardened root-ball plants ready for Pan-India bulk truck dispatch.",
  },
];

export default function PlantGrowthSection() {
  return (
    <section
      id="growth-animation"
      className="py-16 relative overflow-hidden bg-slate-50/70 border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Cultivation Process</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-emerald-950 tracking-tight">
            Our 3-Step Growth Process
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-800/80">
            Scientific shade-net propagation ensures 100% healthy saplings.
          </p>
        </div>

        {/* 3 Step Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-emerald-500/20 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Step {item.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-emerald-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-emerald-800/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Quality Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
