"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Plant Growth", href: "#growth-animation" },
  { name: "Categories", href: "#categories" },
  { name: "Explore Plants", href: "#plant-explorer" },
  { name: "Services", href: "#services" },
  { name: "Care Tips", href: "#care-guide" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-100 text-gray-900"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Real Logo Image & Brand Title */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <img
            src="/images/logo.png"
            alt="Sri Vijaya Durga Nursery Logo"
            className="h-9 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col justify-center">
            <span
              className={`font-serif font-bold text-xs sm:text-base lg:text-lg tracking-tight block leading-tight transition-colors ${
                scrolled ? "text-gray-900 group-hover:text-emerald-600" : "text-white group-hover:text-emerald-300"
              }`}
            >
              Sri Vijaya Durga Nursery
            </span>
            <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-emerald-600 uppercase">
              Kadiyapulanka • Est. 1948
            </span>
          </div>
        </Link>

        {/* Desktop Clean Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors py-1 relative group font-medium ${
                scrolled ? "text-gray-800 hover:text-emerald-600" : "text-white/90 hover:text-emerald-300"
              }`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:+919160122226"
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full border transition-all ${
              scrolled
                ? "border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                : "border-white/40 text-white hover:bg-white/15"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Call Us</span>
          </a>

          <a
            href="https://wa.me/919160122226?text=Hello%20SVDN,%20I%20would%20like%20to%20enquire%20about%20plants."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 hover:scale-105 transition-all duration-300"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Bulk Quote</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2.5 rounded-xl transition-colors ${
              scrolled ? "bg-gray-100 text-gray-800" : "bg-white/20 text-white"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white text-gray-900 border-t border-gray-100 px-6 py-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-3 font-medium text-base">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 text-gray-800 hover:text-emerald-600 transition-colors border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+919160122226"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-emerald-600 text-emerald-700 font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call +91 9160122226</span>
                </a>
                <a
                  href="https://wa.me/919160122226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
