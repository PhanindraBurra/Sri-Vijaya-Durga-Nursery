"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MessageSquare, Check, Sparkles, X, Info } from "lucide-react";

interface PlantItem {
  id: string;
  name: string;
  botanicalName: string;
  category: string;
  image: string;
  height: string;
  sunlight: string;
  water: string;
  description: string;
  wholesaleAvailability: string;
}

const plantCatalog: PlantItem[] = [
  {
    id: "p1",
    name: "Alphonso Mango Sapling",
    botanicalName: "Mangifera indica 'Alphonso'",
    category: "fruit",
    image: "/images/fruit.jpg",
    height: "2 - 4 Feet Grafted",
    sunlight: "Full Sun",
    water: "Moderate",
    description: "King of mangoes. Premium sweet pulp, grafted from high-yielding mother plants.",
    wholesaleAvailability: "In Stock (Bulk 500+ Saplings)",
  },
  {
    id: "p2",
    name: "Royal Palm Tree",
    botanicalName: "Roystonea regia",
    category: "palms",
    image: "/images/hero.jpg",
    height: "6 - 12 Feet Trunk",
    sunlight: "Full Sun",
    water: "Regular",
    description: "Sleek, marble-smooth trunk with vibrant green fronds for luxury resort avenues.",
    wholesaleAvailability: "In Stock (Bulk Transport Truck)",
  },
  {
    id: "p3",
    name: "Monstera Deliciosa",
    botanicalName: "Monstera deliciosa",
    category: "indoor",
    image: "/images/indoor.jpg",
    height: "1 - 3 Feet Potted",
    sunlight: "Bright Indirect",
    water: "Low to Moderate",
    description: "Iconic Swiss cheese leaf plant. Air-purifying and perfect for contemporary interiors.",
    wholesaleAvailability: "In Stock",
  },
  {
    id: "p4",
    name: "Tabebuia Rosea (Pink Trumpet)",
    botanicalName: "Tabebuia rosea",
    category: "avenue",
    image: "/images/hero.jpg",
    height: "5 - 8 Feet",
    sunlight: "Full Sun",
    water: "Low",
    description: "Breathtaking spring bloom avenue tree, forming a vibrant pink canopy over roadways.",
    wholesaleAvailability: "In Stock (Highway Projects)",
  },
  {
    id: "p5",
    name: "Ficus Microcarpa Bonsai",
    botanicalName: "Ficus microcarpa",
    category: "bonsai",
    image: "/images/indoor.jpg",
    height: "1.5 - 3 Feet Ceramic",
    sunlight: "Partial Shade",
    water: "Moderate",
    description: "Artfully sculpted root structures and dense green leaves. Symbol of harmony and longevity.",
    wholesaleAvailability: "Limited Master Collection",
  },
  {
    id: "p6",
    name: "Thai Pink Guava Sapling",
    botanicalName: "Psidium guajava",
    category: "fruit",
    image: "/images/fruit.jpg",
    height: "2 - 3 Feet Grafted",
    sunlight: "Full Sun",
    water: "Regular",
    description: "Early fruiting variety yielding crispy pink-fleshed guavas with high market demand.",
    wholesaleAvailability: "In Stock",
  },
  {
    id: "p7",
    name: "Areca Palm (Cluster)",
    botanicalName: "Dypsis lutescens",
    category: "indoor",
    image: "/images/indoor.jpg",
    height: "3 - 6 Feet Clump",
    sunlight: "Filtered Light",
    water: "Moderate",
    description: "Feathery air-purifying palm cluster that thrives indoors and under shade structures.",
    wholesaleAvailability: "In Stock (Bulk Nursery Pots)",
  },
  {
    id: "p8",
    name: "Multi-Color Bougainvillea Bush",
    botanicalName: "Bougainvillea spectabilis",
    category: "bougainvillea",
    image: "/images/fruit.jpg",
    height: "2 - 4 Feet",
    sunlight: "Direct Sun",
    water: "Low",
    description: "Hardy drought-tolerant flowering bush with intense magenta, orange, and white bracts.",
    wholesaleAvailability: "In Stock",
  },
];

const categoryTabs = [
  { id: "all", label: "All Plants" },
  { id: "fruit", label: "Fruit Plants" },
  { id: "avenue", label: "Avenue Trees" },
  { id: "indoor", label: "Indoor Greens" },
  { id: "bonsai", label: "Bonsai" },
  { id: "palms", label: "Palms" },
];

export default function PlantExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalPlant, setActiveModalPlant] = useState<PlantItem | null>(null);

  const filteredPlants = plantCatalog.filter((plant) => {
    const matchesCategory =
      selectedCategory === "all" || plant.category === selectedCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="plant-explorer" className="py-24 relative overflow-hidden bg-slate-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Featured Catalog</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">
            Explore & Enquire Premium Saplings
          </h2>
          <p className="mt-3 text-base text-emerald-800/80 dark:text-emerald-200/80">
            Filter our ready-to-ship stock and request instant bulk quotes directly on WhatsApp.
          </p>
        </div>

        {/* Filter Controls: Search & Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 glass-card p-4 rounded-2xl border border-emerald-500/20">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "text-emerald-900/70 dark:text-emerald-200/70 hover:bg-emerald-500/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-600 dark:text-emerald-400" />
            <input
              type="text"
              placeholder="Search plant name or species..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/50 dark:bg-emerald-950/50 border border-emerald-500/20 text-emerald-950 dark:text-emerald-100 text-xs font-medium placeholder:text-emerald-700/50 dark:placeholder:text-emerald-400/50 focus:outline-none focus:border-emerald-500"
            />
          </div>

        </div>

        {/* Plant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPlants.map((plant) => (
              <motion.div
                key={plant.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden border border-emerald-500/20 flex flex-col justify-between group hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
              >
                {/* Plant Thumbnail */}
                <div className="relative h-52 w-full bg-emerald-950/10 overflow-hidden">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-950/70 backdrop-blur-md text-amber-300 text-[10px] font-bold">
                    {plant.height}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                      {plant.botanicalName}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-50 mb-2">
                      {plant.name}
                    </h3>
                    <p className="text-xs text-emerald-800/80 dark:text-emerald-200/80 line-clamp-2 mb-4 font-light">
                      {plant.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-emerald-500/15 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalPlant(plant)}
                      className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <a
                      href={`https://wa.me/919160122226?text=Hello%20SVDN,%20I%20am%20interested%20in%20a%20bulk%20quote%20for:${encodeURIComponent(
                        plant.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Plant Details */}
        <AnimatePresence>
          {activeModalPlant && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card max-w-lg w-full rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl relative p-6 bg-white dark:bg-emerald-950"
              >
                <button
                  onClick={() => setActiveModalPlant(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-emerald-500/10 text-emerald-900 dark:text-emerald-100 hover:bg-emerald-500/20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={activeModalPlant.image}
                    alt={activeModalPlant.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 italic">
                  {activeModalPlant.botanicalName}
                </span>
                <h3 className="font-serif text-2xl font-bold text-emerald-950 dark:text-emerald-50 mb-2">
                  {activeModalPlant.name}
                </h3>
                <p className="text-sm text-emerald-800/80 dark:text-emerald-200/80 mb-4">
                  {activeModalPlant.description}
                </p>

                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-emerald-500/10 text-xs mb-6">
                  <div>
                    <span className="font-bold block text-emerald-950 dark:text-emerald-100">Height / Spec:</span>
                    <span className="text-emerald-700 dark:text-emerald-300">{activeModalPlant.height}</span>
                  </div>
                  <div>
                    <span className="font-bold block text-emerald-950 dark:text-emerald-100">Sunlight:</span>
                    <span className="text-emerald-700 dark:text-emerald-300">{activeModalPlant.sunlight}</span>
                  </div>
                  <div>
                    <span className="font-bold block text-emerald-950 dark:text-emerald-100">Water Need:</span>
                    <span className="text-emerald-700 dark:text-emerald-300">{activeModalPlant.water}</span>
                  </div>
                  <div>
                    <span className="font-bold block text-emerald-950 dark:text-emerald-100">Availability:</span>
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">{activeModalPlant.wholesaleAvailability}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919160122226?text=Hello%20SVDN,%20I%20want%20to%20place%20an%20order%20for:${encodeURIComponent(
                    activeModalPlant.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp Now</span>
                </a>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
