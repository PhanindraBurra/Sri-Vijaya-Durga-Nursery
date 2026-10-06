"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip Popup */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white text-emerald-950 text-xs font-semibold shadow-xl border border-emerald-500/30 animate-bounce">
          <span>Need bulk plant quote? Chat on WhatsApp!</span>
          <button
            onClick={() => setTooltipVisible(false)}
            className="p-1 rounded-full text-emerald-600 hover:text-emerald-900"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Action Button */}
      <a
        href="https://wa.me/919160122226?text=Hello%20Sri%20Vijaya%20Durga%20Nursery,%20I%20want%20to%20enquire%20about%20plants."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl pulse-whatsapp transition-transform hover:scale-110"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
