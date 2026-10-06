"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Droplets, Thermometer, Scissors, ShieldAlert, Sparkles, ChevronDown } from "lucide-react";

const careGuideItems = [
  {
    id: "care-1",
    icon: Droplets,
    title: "Watering Frequency & Hydration",
    summary: "Deep watering during early morning hours prevents root rot while sustaining deep taproot absorption.",
    detail: "Young saplings require deep soaking 2–3 times a week. Always check the top 2 inches of soil — if dry to the touch, hydrate thoroughly until water drains from root channels.",
  },
  {
    id: "care-2",
    icon: Sun,
    title: "Sunlight & Shade Net Acclimatization",
    summary: "Balance direct solar exposure with gradual shade net transition when moving saplings.",
    detail: "Fruit trees and avenue saplings demand 6–8 hours of full direct sun daily. Indoor varieties thrive under bright, indirect light through windows.",
  },
  {
    id: "care-3",
    icon: Thermometer,
    title: "Soil Composition & Drainage",
    summary: "Enrich soil with red earth, vermicompost, neem cake powder, and coarse sand for aeration.",
    detail: "Avoid heavy clay soil compaction. A balanced 40% red soil + 30% organic manure + 20% coco peat + 10% coarse sand mix fosters rapid root capillary growth.",
  },
  {
    id: "care-4",
    icon: Scissors,
    title: "Pruning & Branch Shaping",
    summary: "Prune dead or crisscrossing shoots before monsoon to stimulate dense lateral blooming.",
    detail: "Remove apical dominance stems on young fruit trees at 3 feet height to encourage multi-branch canopy spread and higher fruit yields.",
  },
  {
    id: "care-5",
    icon: ShieldAlert,
    title: "Organic Pest & Fungus Protection",
    summary: "Apply preventative spray of cold-pressed neem oil once every 15 days.",
    detail: "Mix 5ml neem oil with 2ml liquid soap per liter of water. Spray under leaf surfaces to prevent mealybugs, aphids, and leaf-miner damage naturally.",
  },
];

export default function PlantCareSection() {
  const [openId, setOpenId] = useState<string>("care-1");

  return (
    <section id="care-guide" className="py-24 relative overflow-hidden bg-slate-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Expert Horticultural Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950">
            Plant Care & Maintenance Tips
          </h2>
          <p className="mt-3 text-base text-emerald-800/80">
            Follow these essential care practices from SVDN master botanists to keep your plants thriving.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {careGuideItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl border border-emerald-500/20 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-emerald-500/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-emerald-950">
                        {item.title}
                      </h3>
                      <p className="text-xs text-emerald-800/70 font-light mt-0.5">
                        {item.summary}
                      </p>
                    </div>
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
                      className="px-6 pb-6 pt-2 text-sm text-emerald-900/80 leading-relaxed border-t border-emerald-500/10"
                    >
                      <p>{item.detail}</p>
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
