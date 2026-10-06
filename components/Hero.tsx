"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageSquare, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-950"
    >
      {/* Background Video / Compressed Fallback Poster */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero.jpg"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75"
        >
          <source src="https://srivijayadurganursery.in/images/DJI_0590.MP4" type="video/mp4" />
        </video>
        {/* Dark Gradient Overlay for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/70" />
      </div>

      {/* Floating Animated SVG Leaves */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 25, 0],
            x: [-10, 15, -10],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 text-emerald-400/30"
        >
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 59,16.17 3.82,21.34L5.23,22.75C10.4,17.58 17.5,15 20,15C20,11 19,9 17,8Z" />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            y: [30, -30, 30],
            rotate: [15, -20, 15],
            x: [20, -20, 20],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-12 text-sky-400/25"
        >
          <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z" />
          </svg>
        </motion.div>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-28 pb-16">
        
        {/* Logo Branding Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/90 shadow-xl border border-white/40 backdrop-blur-md mb-6"
        >
          <img
            src="/images/logo.png"
            alt="SVDN Logo"
            className="h-7 w-auto object-contain"
          />
          <span className="text-xs sm:text-sm font-bold tracking-wide text-emerald-950 uppercase">
            Sri Vijaya Durga Nursery • Est. 1948
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6 drop-shadow-md"
        >
          Grow Green. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">Live Better.</span>
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-emerald-100/95 max-w-3xl mx-auto font-light leading-relaxed mb-10 drop-shadow-sm"
        >
          India&apos;s premier wholesale nursery hub in Kadiyapulanka. We cultivate 12 Lakh+ saplings annually, powering commercial orchards, highway plantations, and urban landscapes nationwide.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#categories"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-900/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore Plant Catalog</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href="https://wa.me/919160122226?text=Hello!%20I%20am%20interested%20in%20ordering%20plants%20from%20Sri%20Vijaya%20Durga%20Nursery."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/40 backdrop-blur-md text-white font-bold text-base hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 flex flex-col items-center gap-1 cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-emerald-400" />
      </motion.div>
    </section>
  );
}
