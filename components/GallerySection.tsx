"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Sparkles } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Kadiyapulanka Shade Net Acres", category: "Nursery", image: "/images/hero.jpg" },
  { id: 2, title: "Grafted Mango Saplings Ready for Truck Loading", category: "Fruit Plants", image: "/images/fruit.jpg" },
  { id: 3, title: "Monstera & Indoor Foliage Collection", category: "Indoor", image: "/images/indoor.jpg" },
  { id: 4, title: "Avenue Tree Truck Dispatch across India", category: "Logistics", image: "/images/hero.jpg" },
  { id: 5, title: "High-density Thai Pink Guava Orchards", category: "Fruit Plants", image: "/images/fruit.jpg" },
  { id: 6, title: "Resort Entrance Royal Palms", category: "Palms", image: "/images/hero.jpg" },
];

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-slate-50/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Nursery Photo Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">
            Life at Sri Vijaya Durga Nursery
          </h2>
          <p className="mt-3 text-base text-emerald-800/80 dark:text-emerald-200/80">
            Take a visual tour of our green fields, propagating beds, shade structures, and Pan-India transport dispatches.
          </p>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveItem(item)}
              className="group relative h-72 rounded-3xl overflow-hidden glass-card border border-emerald-500/20 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold leading-tight mt-0.5">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                className="relative max-w-4xl w-full h-[75vh] rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl"
              >
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-emerald-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent text-white">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                    {activeItem.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold">{activeItem.title}</h3>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
