"use client";

import React from 'react';
import Image from 'next/image';

export default function FranchiseFormSection() {
  return (
    <section className="py-20 bg-background overflow-hidden" id="franchise-form">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* =========================
              LEFT COLUMN: Form
             ========================= */}
          <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
            
            {/* Header (Matching the reference image style) */}
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-sans  ">
                Trygghet & <span className="font-sans not-italic text-primary font-normal text-foreground">Säkerhet</span>
              </h2>
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-5">
              
              {/* Row 1: Namn & Företag */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-sm font-medium text-foreground/70">Namn*</label>
                  <input type="text" id="name" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="font-sans text-sm font-medium text-foreground/70">Företag/Förening</label>
                  <input type="text" id="company" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all" />
                </div>
              </div>

              {/* Row 2: Telefon & E-post */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sans text-sm font-medium text-foreground/70">Telefonnr*</label>
                  <input type="tel" id="phone" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-sm font-medium text-foreground/70">E-post*</label>
                  <input type="email" id="email" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all" />
                </div>
              </div>

              {/* Row 3: Textarea */}
              <div className="flex flex-col gap-2">
                <label htmlFor="about" className="font-sans text-sm font-medium text-foreground/70">
                  Berätta lite om dig själv, vad jobbar du med, varför vill du starta franchise?*
                </label>
                <textarea id="about" rows={3} className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"></textarea>
              </div>

              {/* Row 4: Location & Count */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="font-sans text-sm font-medium text-foreground/70">Vart vill du öppna?*</label>
                  <input type="text" id="location" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all" />
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="count" className="font-sans text-sm font-medium text-foreground/70">Antal butiker*</label>
                  <div className="relative">
                    <select id="count" defaultValue="" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground appearance-none focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer">
                      <option value="" disabled></option>
                      <option value="1">1</option>
                      <option value="2-3">2-3</option>
                      <option value="4+">4+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                       <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: Time & Capital */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="time" className="font-sans text-sm font-medium text-foreground/70">När vill du öppna?*</label>
                  <div className="relative">
                    <select id="time" defaultValue="" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground appearance-none focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer">
                      <option value="" disabled></option>
                      <option value="asap">Snarast</option>
                      <option value="3m">Inom 3 månader</option>
                      <option value="6m">Inom 6 månader</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                       <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="capital" className="font-sans text-sm font-medium text-foreground/70">Hur mycket kapital har du?*</label>
                  <div className="relative">
                    <select id="capital" defaultValue="" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground appearance-none focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer">
                      <option value="" disabled></option>
                      <option value="low">100k - 500k</option>
                      <option value="med">500k - 1M</option>
                      <option value="high">1M+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                       <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 6: Source */}
              <div className="flex flex-col gap-2 relative">
                  <label htmlFor="source" className="font-sans text-sm font-medium text-foreground/70">Hur hörde du talas om oss?*</label>
                  <div className="relative">
                    <select id="source" defaultValue="" className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground appearance-none focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer">
                      <option value="" disabled></option>
                      <option value="social">Social Media</option>
                      <option value="search">Search Engine</option>
                      <option value="friend">Friend/Family</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                       <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l6 6 6-6"/></svg>
                    </div>
                  </div>
              </div>

              {/* GDPR Checkbox */}
              <div className="flex items-start  gap-3 mt-2">
                <input type="checkbox" id="gdpr" className=" w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                <label htmlFor="gdpr" className="font-sans text-sm text-foreground/70 leading-tight">
                  Godkänner du att vi sparar dina uppgifter i enlighet med GDPR?
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button type="submit" className="group bg-[#438931] hover:bg-[#356f26] text-white rounded-full pl-8 pr-2 py-2 flex items-center gap-6 transition-all duration-300 shadow-md">
                  <span className="font-serif italic font-bold text-xl pt-1">
                    Skicka
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 7h16M11 1l6 6-6 6" />
                    </svg>
                  </div>
                </button>
              </div>

            </form>
          </div>

          {/* =========================
              RIGHT COLUMN: Image Overlay
             ========================= */}
          <div className="relative w-full h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] overflow-hidden shadow-2xl group animate-[fadeInUp_1s_ease-out_forwards]">
            <Image
              src="/assets/Store Images/Saxnäs 21-8/IMG_1161.JPG" // Using previous store image
              alt="24SJU Store"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <h3 className="text-white text-3xl md:text-4xl font-sans font-bold leading-tight mb-2">
                Love to hear from you,
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-white text-3xl md:text-4xl font-sans font-bold">
                  Get in Touch
                </span>
                <span className="text-3xl md:text-4xl animate-bounce">👋</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}