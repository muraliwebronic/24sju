"use client";

import React from 'react';
import Image from 'next/image';

export default function SafetySecuritySection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================
            HEADER SECTION
           ========================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10 animate-[fadeInUp_0.8s_ease-out_forwards]">
          
          {/* Title - Left Side */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              <span className="font-serif font-bold italic text-primary">Trygghet </span>
              <span className="font-sans font-normal text-foreground">& Säkerhet</span>
            </h2>
          </div>

          {/* Description & Link - Right Side */}
          <div className="lg:w-1/2 flex flex-col items-start lg:items-end text-left lg:text-right">
            <p className="font-sans text-foreground/80 text-lg leading-relaxed max-w-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <a href="#" className="group flex items-center gap-3 text-lg font-serif italic font-bold text-foreground hover:text-primary transition-colors">
              More About Us
              <div className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 7h12M9 3l4 4-4 4" />
                </svg>
              </div>
            </a>
          </div>

        </div>

        {/* =========================
            IMAGES GRID SECTION
           ========================= */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-auto md:h-[500px]">
          
          {/* Left Image (Wider - Span 3) */}
          <div className="md:col-span-3 relative h-[400px] md:h-full rounded-[2.5rem] overflow-hidden shadow-lg group animate-[fadeInUp_0.8s_ease-out_forwards] delay-100">
            <Image
              src="/assets/Store Images/Hånger 21-5/P1120964.JPG"
              alt="Store shelves with products"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          </div>

          {/* Right Image (Narrower - Span 2) */}
          <div className="md:col-span-2 relative h-[400px] md:h-full rounded-[2.5rem] overflow-hidden shadow-lg group animate-[fadeInUp_0.8s_ease-out_forwards] delay-200">
            <Image
              src="/assets/Store Images/Högsby/P1130262.JPG"
              alt="Store refrigerators"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          </div>

        </div>

      </div>
    </section>
  );
}