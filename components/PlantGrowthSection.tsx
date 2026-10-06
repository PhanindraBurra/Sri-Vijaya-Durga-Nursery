"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, CloudRain, Cloud, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";

interface Stage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  careTip: string;
}

const stages: Stage[] = [
  {
    id: 1,
    title: "1. Seed in Soil",
    subtitle: "Planting & Dormancy",
    description:
      "A healthy, disease-free seed is carefully selected and planted in nutrient-rich compost and organic soil mix.",
    careTip: "Maintain consistent soil moisture without waterlogging.",
  },
  {
    id: 2,
    title: "2. Germination & Taproot",
    subtitle: "Underground Awakening",
    description:
      "Water triggers enzyme activity inside the seed shell. The primary taproot emerges and penetrates deep into the soil to absorb minerals.",
    careTip: "Keep temperature warm between 22°C to 28°C.",
  },
  {
    id: 3,
    title: "3. Sprout Breakthrough",
    subtitle: "Emerging into Light",
    description:
      "The delicate stem breaks through the soil surface seeking sunlight, unfolding its first embryonic cotyledon leaves.",
    careTip: "Provide bright indirect sunlight for early photosynthesis.",
  },
  {
    id: 4,
    title: "4. Young Seedling",
    subtitle: "First True Leaves",
    description:
      "True leaves develop with distinct veins and stomata. Secondary lateral roots expand underground to anchor the growing seedling.",
    careTip: "Apply balanced organic liquid N-P-K fertilizer.",
  },
  {
    id: 5,
    title: "5. Vegetative Bush",
    subtitle: "Branches & Foliage",
    description:
      "Stem thickens with sturdy vascular bundles. Lush leaves expand to capture solar energy, building natural immunity.",
    careTip: "Prune weak shoots to encourage dense lateral branching.",
  },
  {
    id: 6,
    title: "6. Full Bloom & Fruit",
    subtitle: "Harvest & Maturity",
    description:
      "Vibrant flowers bloom attracting pollinators, leading to juicy fruits or dense ornamental canopy ready for installation.",
    careTip: "Enjoy peak yield and healthy, long-lasting green life!",
  },
];

export default function PlantGrowthSection() {
  const [activeStage, setActiveStage] = useState<number>(1);

  // Auto cycle optional or scroll driven
  const currentStage = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section
      id="growth-animation"
      className="py-24 relative overflow-hidden bg-slate-50/70 border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Interactive Botanical Lifecycle</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-emerald-950 dark:text-emerald-50 tracking-tight leading-tight">
            How a Sapling Grows at SVDN
          </h2>
          <p className="mt-3 text-base sm:text-lg text-emerald-800/80 dark:text-emerald-200/80">
            From selected seed in rich soil to full-grown fruit and ornamental canopy — explore the 6 stages of our scientific cultivation.
          </p>
        </div>

        {/* Step Indicator Bar (1 to 6) */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-12 overflow-x-auto pb-4 gap-2 scrollbar-none">
          {stages.map((stage) => {
            const isActive = stage.id === activeStage;
            const isCompleted = stage.id < activeStage;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex flex-col items-center flex-1 min-w-[100px] p-2.5 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                    : isCompleted
                    ? "bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-500/30"
                    : "bg-emerald-500/5 text-emerald-900/60 dark:text-emerald-400/60 hover:bg-emerald-500/10"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider">
                  Stage 0{stage.id}
                </span>
                <span className="text-xs font-medium truncate max-w-[90px] mt-0.5">
                  {stage.title.split(". ")[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Growth Canvas & Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto glass-card p-6 sm:p-10 rounded-3xl border border-emerald-500/30">
          
          {/* Left Canvas: SVG Plant Growth */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] bg-gradient-to-b from-sky-400/15 via-emerald-500/5 to-amber-900/40 rounded-2xl overflow-hidden border border-emerald-500/20 flex flex-col justify-between p-6">
            
            {/* Dynamic Sky Environment (Sun rays, Clouds, Rain) */}
            <div className="relative h-28 w-full flex justify-between items-start pointer-events-none">
              {/* Moving Clouds */}
              <motion.div
                animate={{ x: [0, 40, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2 text-white/60 dark:text-emerald-300/40"
              >
                <Cloud className="w-10 h-10" />
                <Cloud className="w-6 h-6 -ml-3 mt-2" />
              </motion.div>

              {/* Sun Rays (brighter as stage increases) */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center text-amber-900 shadow-xl shadow-amber-400/50 transition-all duration-700 ${
                    activeStage >= 3 ? "opacity-100 scale-110" : "opacity-50 scale-90"
                  }`}
                >
                  <Sun className="w-8 h-8 animate-spin-slow" />
                </div>
              </motion.div>

              {/* Raindrops effect when activeStage is 1 or 2 */}
              {(activeStage === 1 || activeStage === 2) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-4 left-1/3 flex gap-3 text-sky-400"
                >
                  <CloudRain className="w-7 h-7" />
                  <div className="text-xs font-semibold animate-bounce">Nourishing Rain</div>
                </motion.div>
              )}
            </div>

            {/* SVG Interactive Plant Path */}
            <div className="relative flex-1 w-full flex items-center justify-center">
              <svg
                viewBox="0 0 300 280"
                className="w-full h-full max-h-[280px] overflow-visible"
              >
                {/* Soil Line */}
                <line
                  x1="20"
                  y1="190"
                  x2="280"
                  y2="190"
                  stroke="#78350f"
                  strokeWidth="4"
                  strokeDasharray="6 4"
                />

                {/* Soil Texture Layer */}
                <rect x="20" y="190" width="260" height="80" fill="#451a03" opacity="0.85" rx="6" />

                {/* Stage 1: Seed in Soil */}
                <motion.ellipse
                  cx="150"
                  cy="215"
                  rx="10"
                  ry="7"
                  fill="#d97706"
                  stroke="#b45309"
                  strokeWidth="2"
                  animate={{ scale: activeStage === 1 ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 1.5, repeat: activeStage === 1 ? Infinity : 0 }}
                />

                {/* Roots Spreading Downward (Stage >= 2) */}
                {activeStage >= 2 && (
                  <g className="stroke-amber-300 dark:stroke-amber-200" strokeWidth="2.5" fill="none" strokeLinecap="round">
                    <motion.path
                      d="M 150 220 Q 145 240 135 255"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.path
                      d="M 150 220 Q 155 245 165 260"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    {activeStage >= 4 && (
                      <motion.path
                        d="M 150 230 Q 130 240 120 250 M 150 235 Q 170 245 180 255"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </g>
                )}

                {/* Sprout Stem Emerging Upward (Stage >= 3) */}
                {activeStage >= 3 && (
                  <motion.path
                    d={
                      activeStage === 3
                        ? "M 150 215 Q 150 180 150 165"
                        : activeStage === 4
                        ? "M 150 215 Q 148 160 150 125"
                        : activeStage === 5
                        ? "M 150 215 Q 146 140 150 90"
                        : "M 150 215 Q 144 130 150 60"
                    }
                    stroke="#22c55e"
                    strokeWidth={activeStage >= 5 ? "6" : "4"}
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                )}

                {/* Leaves Unfolding (Stage >= 3) */}
                {activeStage >= 3 && (
                  <g fill="#22c55e" stroke="#15803d" strokeWidth="1.5">
                    {/* First 2 cotyledon leaves */}
                    <motion.ellipse
                      cx="140"
                      cy="165"
                      rx="12"
                      ry="6"
                      rotate="-30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.ellipse
                      cx="160"
                      cy="165"
                      rx="12"
                      ry="6"
                      rotate="30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </g>
                )}

                {/* Stage >= 4: Seedling Leaves */}
                {activeStage >= 4 && (
                  <g fill="#16a34a" stroke="#166534" strokeWidth="1.5">
                    <motion.ellipse
                      cx="130"
                      cy="130"
                      rx="16"
                      ry="8"
                      rotate="-25"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                    <motion.ellipse
                      cx="170"
                      cy="130"
                      rx="16"
                      ry="8"
                      rotate="25"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  </g>
                )}

                {/* Stage >= 5: Dense Branches */}
                {activeStage >= 5 && (
                  <g fill="#15803d">
                    <motion.path
                      d="M 150 110 Q 120 95 105 85"
                      stroke="#22c55e"
                      strokeWidth="3"
                    />
                    <motion.path
                      d="M 150 110 Q 180 95 195 85"
                      stroke="#22c55e"
                      strokeWidth="3"
                    />
                    <circle cx="105" cy="85" r="14" fill="#22c55e" />
                    <circle cx="195" cy="85" r="14" fill="#22c55e" />
                    <circle cx="150" cy="70" r="18" fill="#16a34a" />
                  </g>
                )}

                {/* Stage 6: Flowers & Fruit Bloom */}
                {activeStage === 6 && (
                  <g>
                    {/* Canopy cloud */}
                    <circle cx="150" cy="50" r="30" fill="#15803d" />
                    <circle cx="125" cy="65" r="24" fill="#22c55e" />
                    <circle cx="175" cy="65" r="24" fill="#22c55e" />

                    {/* Mango/Fruit Orbs */}
                    <motion.circle
                      cx="120"
                      cy="75"
                      r="9"
                      fill="#f59e0b"
                      stroke="#d97706"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="180"
                      cy="70"
                      r="9"
                      fill="#f59e0b"
                      stroke="#d97706"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    />
                    {/* Pink Flowers */}
                    <circle cx="150" cy="35" r="6" fill="#ec4899" />
                    <circle cx="135" cy="45" r="5" fill="#f43f5e" />
                    <circle cx="165" cy="45" r="5" fill="#f43f5e" />
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom Soil Banner */}
            <div className="w-full bg-amber-950/80 backdrop-blur-sm py-2 px-4 rounded-xl flex items-center justify-between text-xs text-amber-200">
              <span>Root Soil Depth: 25 cm</span>
              <span className="font-bold text-amber-400">Nutrient Soil Composition: 100% Organic</span>
            </div>
          </div>

          {/* Right Description & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  {currentStage.subtitle}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 dark:text-emerald-50">
                  {currentStage.title}
                </h3>
                <p className="text-base text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed">
                  {currentStage.description}
                </p>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs leading-relaxed">
                  <strong className="font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                    SVDN Expert Care Tip:
                  </strong>
                  {currentStage.careTip}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next / Previous Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-emerald-500/20">
              <button
                disabled={activeStage === 1}
                onClick={() => setActiveStage((prev) => Math.max(1, prev - 1))}
                className="flex items-center gap-1 px-4 py-2 rounded-full border border-emerald-500/30 text-xs font-bold text-emerald-800 dark:text-emerald-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-500/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Stage</span>
              </button>

              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                {activeStage} of {stages.length}
              </span>

              <button
                disabled={activeStage === stages.length}
                onClick={() => setActiveStage((prev) => Math.min(stages.length, prev + 1))}
                className="flex items-center gap-1 px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-500 transition-colors shadow-md"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
