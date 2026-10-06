"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh K.",
    role: "Infrastructure Contractor",
    location: "Maharashtra Project",
    rating: 5,
    content:
      "We ordered 5,000 avenue trees for our 4-lane highway project. Sri Vijaya Durga Nursery handled root wrapping and transport logistics flawlessly all the way to Maharashtra. 100% plant health upon arrival!",
  },
  {
    id: 2,
    name: "Surya Prakash",
    role: "Commercial Farm Owner",
    location: "Telangana",
    rating: 5,
    content:
      "Hands down the best wholesale fruit plant suppliers in Andhra Pradesh. The grafted Alphonso mango and Thai pink guava saplings we received grew robust with early yields.",
  },
  {
    id: 3,
    name: "GreenScape Architects",
    role: "Landscape Designers",
    location: "Bengaluru, Karnataka",
    rating: 5,
    content:
      "A trusted nursery partner in Kadiyapulanka. We rely on SVDN for all exotic ornamental palms and ficus bonsai required for our luxury villa gated community projects.",
  },
];

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Real Client Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">
            Trusted Nationwide Across Projects
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative glass-card p-8 sm:p-12 rounded-3xl border border-emerald-500/30 shadow-xl">
          <Quote className="w-16 h-16 text-emerald-500/15 absolute top-6 left-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center relative z-10"
            >
              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-6">
                {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="font-serif text-lg sm:text-2xl text-emerald-950 dark:text-emerald-50 leading-relaxed italic mb-8">
                &ldquo;{testimonials[activeIdx].content}&rdquo;
              </p>

              {/* Client Info */}
              <h3 className="font-bold text-base text-emerald-900 dark:text-emerald-100">
                {testimonials[activeIdx].name}
              </h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                {testimonials[activeIdx].role} • <span className="font-semibold text-amber-500">{testimonials[activeIdx].location}</span>
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-emerald-500/15">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIdx === i ? "bg-emerald-500 w-8" : "bg-emerald-500/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
