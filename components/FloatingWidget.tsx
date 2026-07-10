"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/data";

export function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`floating-widget-container ${isOpen ? 'is-open' : ''}`}>
      {/* The main toggle button for mobile */}
      <button
        className="floating-widget-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle consultation options"
      >
        <span className="toggle-icon">{isOpen ? '✕' : '💬'}</span>
      </button>

      {/* The actionable buttons */}
      <div className="floating-widget-actions">
        <a
          href="tel:+919595888000"
          className="widget-btn widget-btn-call"
          title="Call Now"
        >
          <span className="widget-btn-icon">📞</span>
          <span className="widget-btn-text">Call Now</span>
        </a>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="widget-btn widget-btn-whatsapp pulse-effect"
          title="WhatsApp"
        >
          <span className="widget-btn-icon" ><img src="/icons/whatsapp-icon.png" alt="WhatsApp" style={{ height: "30px", width: "30px" }} /></span>
          <span className="widget-btn-text">WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="widget-btn widget-btn-book"
          title="Book Free Consultation"
        >
          <span className="widget-btn-icon">📅</span>
          <span className="widget-btn-text">Book Free Consultation</span>
        </Link>
      </div>
    </div>
  );
}
