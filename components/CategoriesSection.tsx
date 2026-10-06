"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  count: string;
  description: string;
}

export const categoriesData: Category[] = [
  {
    id: "fruit",
    name: "Fruit Plants",
    subtitle: "Mango, Guava, Citrus & Sapota",
    image: "/images/fruit.jpg",
    count: "45+ Varieties",
    description: "High-yield grafted saplings for orchards and commercial farmland.",
  },
  {
    id: "avenue",
    name: "Avenue Trees",
    subtitle: "Roadside & Infra Greenery",
    image: "/images/hero.jpg",
    count: "30+ Varieties",
    description: "Sturdy saplings ideal for government projects, highways, and housing layouts.",
  },
  {
    id: "ornamental",
    name: "Ornamental Greens",
    subtitle: "Exotic Landscaping",
    image: "/images/indoor.jpg",
    count: "60+ Varieties",
    description: "Lush crotons, ficus, and foliage plants for luxury landscape design.",
  },
  {
    id: "indoor",
    name: "Indoor Plants",
    subtitle: "Air-Purifying & Decor",
    image: "/images/indoor.jpg",
    count: "40+ Varieties",
    description: "Monstera, snake plant, and fiddle leaf figs for homes and offices.",
  },
  {
    id: "bamboo",
    name: "Bamboo & Grasses",
    subtitle: "Zen Gardens & Boundaries",
    image: "/images/hero.jpg",
    count: "20+ Varieties",
    description: "Golden bamboo, lawn grass carpet rolls, and boundary hedges.",
  },
  {
    id: "flowers",
    name: "Flowering Plants",
    subtitle: "Vibrant Blooms",
    image: "/images/fruit.jpg",
    count: "50+ Varieties",
    description: "Hibiscus, jasmine, roses, and exotic year-round flowering shrubs.",
  },
  {
    id: "shrubs",
    name: "Hedge Shrubs",
    subtitle: "Boundary Greenery",
    image: "/images/indoor.jpg",
    count: "25+ Varieties",
    description: "Ixora, tecoma, and duranta for pristine garden hedges.",
  },
  {
    id: "hangings",
    name: "Hanging Greens",
    subtitle: "Balcony & Terrace",
    image: "/images/indoor.jpg",
    count: "18+ Varieties",
    description: "Cascading money plants, ferns, and trailing flowering vines.",
  },
  {
    id: "bonsai",
    name: "Bonsai Masterpieces",
    subtitle: "Zen Elegance",
    image: "/images/indoor.jpg",
    count: "15+ Varieties",
    description: "Aged ficus and adenium bonsai cultivated by master artisans.",
  },
  {
    id: "palms",
    name: "Palm Trees",
    subtitle: "Resort & Villa Palms",
    image: "/images/hero.jpg",
    count: "22+ Varieties",
    description: "Royal palm, foxtail palm, and traveler palm for grand entrance avenues.",
  },
  {
    id: "bougainvillea",
    name: "Bougainvillea",
    subtitle: "Vibrant Color Cascades",
    image: "/images/fruit.jpg",
    count: "35+ Shades",
    description: "Multi-colored flowering vines and standard potted bougainvillea.",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Plant Collections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950">
              Explore Our Botanical Categories
            </h2>
          </div>
          <p className="text-base text-emerald-800/80 max-w-md">
            Over 300+ botanical varieties grown in our Kadiyapulanka acres, ready for wholesale delivery across India.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoriesData.map((cat, idx) => (
            <motion.a
              key={cat.id}
              href="#plant-explorer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative h-80 rounded-3xl overflow-hidden glass-card border border-emerald-500/20 flex flex-col justify-end p-6 shadow-md transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Top Count Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                {cat.count}
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  {cat.subtitle}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold group-hover:text-emerald-300 transition-colors">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-white/80 line-clamp-2 mt-2 font-light">
                  {cat.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
