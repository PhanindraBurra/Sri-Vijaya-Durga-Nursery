"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Truck, ShieldCheck, TreePine, Users, Sprout } from "lucide-react";

const stats = [
  { icon: Award, number: "75+", label: "Years of Heritage", desc: "Serving since 1948" },
  { icon: Sprout, number: "12L+", label: "Saplings / Year", desc: "High germination rate" },
  { icon: TreePine, number: "45,000+", label: "Projects Completed", desc: "Pan-India reach" },
  { icon: Users, number: "1,700+", label: "Farmer Partners", desc: "Collaborative growth" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Trusted Legacy Since 1948</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 leading-tight mb-6">
              Rooted in Excellence, Growing India&apos;s Green Future
            </h2>

            <p className="text-base sm:text-lg text-emerald-900/80 dark:text-emerald-200/80 leading-relaxed mb-6">
              Nestled in the world-renowned nursery capital of <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">Kadiyapulanka, Andhra Pradesh</strong>, Sri Vijaya Durga Nursery has spent over seven decades mastering plant propagation, shade-net acclimatization, and large-scale botanical supply.
            </p>

            <p className="text-base text-emerald-800/70 dark:text-emerald-300/70 leading-relaxed mb-8">
              Whether supplying commercial fruit saplings for multi-acre farm orchards, dense avenue trees for highway infrastructure, or luxury ornamental palms for resort landscapes, our commitment to soil health and disease-free genetics ensures maximum survival rates across India.
            </p>

            {/* Key Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl glass-card flex flex-col items-center text-center">
                <Truck className="w-7 h-7 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h3 className="font-bold text-sm text-emerald-950 dark:text-emerald-100">Pan-India Transport</h3>
                <p className="text-xs text-emerald-700/70 dark:text-emerald-300/70">Safe logistics network</p>
              </div>

              <div className="p-4 rounded-2xl glass-card flex flex-col items-center text-center">
                <ShieldCheck className="w-7 h-7 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h3 className="font-bold text-sm text-emerald-950 dark:text-emerald-100">Disease-Free</h3>
                <p className="text-xs text-emerald-700/70 dark:text-emerald-300/70">Scientifically treated</p>
              </div>

              <div className="p-4 rounded-2xl glass-card flex flex-col items-center text-center">
                <TreePine className="w-7 h-7 text-emerald-600 dark:text-emerald-400 mb-2" />
                <h3 className="font-bold text-sm text-emerald-950 dark:text-emerald-100">Massive Stock</h3>
                <p className="text-xs text-emerald-700/70 dark:text-emerald-300/70">Ready for bulk supply</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase with Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20 bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero.jpg"
                className="w-full h-full object-cover"
              >
                <source src="https://srivijayadurganursery.in/images/DJI_0590.MP4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                Aerial Drone Footage • Kadiyapulanka
              </div>
            </div>

            {/* Overlaid Badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:left-6 glass-card p-5 rounded-2xl shadow-xl border border-emerald-500/30 max-w-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 mb-1">
                Kadiyapulanka Hub
              </p>
              <p className="text-sm font-semibold text-emerald-950 dark:text-emerald-100">
                Supplying quality plants to over 20+ Indian states with guaranteed transport.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center group hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-emerald-900 dark:text-emerald-100 mb-1">
                  {stat.number}
                </h3>
                <p className="font-semibold text-sm text-emerald-950 dark:text-emerald-200">
                  {stat.label}
                </p>
                <p className="text-xs text-emerald-700/70 dark:text-emerald-300/70 mt-0.5">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
