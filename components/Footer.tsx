"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-8 border-t border-emerald-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-800/40">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-14 bg-white/95 p-1 rounded-xl shadow-md border border-emerald-400/30">
                <Image
                  src="/images/logo.png"
                  alt="SVDN Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-tight text-white block">
                  Sri Vijaya Durga Nursery
                </span>
                <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider">
                  SVDN • Established 1948 • Kadiyapulanka
                </span>
              </div>
            </Link>

            <p className="text-xs text-emerald-200/80 leading-relaxed max-w-sm font-light">
              Sri Vijaya Durga Nursery is India&apos;s leading wholesale plant supplier based in Kadiyapulanka. Cultivating 12 Lakh+ saplings annually and delivering across all 28 Indian states.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/17AH3dvBPn/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-200 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/sri_vijaya_durga_nursery?igsh=MWVkM3dwanJqOTY4dw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-200 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@srivijayadurganursery1948"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-200 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About SVDN Legacy</a></li>
              <li><a href="#growth-animation" className="hover:text-emerald-400 transition-colors">Plant Growth Cycle</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Botanical Categories</a></li>
              <li><a href="#plant-explorer" className="hover:text-emerald-400 transition-colors">Explore Plant Stock</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Landscaping Services</a></li>
              <li><a href="#care-guide" className="hover:text-emerald-400 transition-colors">Horticultural Guide</a></li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Plant Varieties
            </h3>
            <ul className="space-y-2 text-xs text-emerald-200/80">
              <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Fruit Plants Wholesale</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Avenue Trees Supplier</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Ornamental Greens</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Indoor Air Purifiers</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Resort Palm Trees</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition-colors">Bonsai Masterpieces</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Contact Details
            </h3>
            <ul className="space-y-2.5 text-xs text-emerald-200/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Kadiyapulanka, Rajahmundry, Andhra Pradesh - 533126</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 9160122226</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">Svdn.plants@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/80 gap-4">
          <p>© 2026 Sri Vijaya Durga Nursery. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Wholesale Supply</span>
            <span>Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
