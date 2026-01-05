"use client";

import React from 'react';
import Image from 'next/image';

export default function StoreLocationsSection() {
  return (
    <section className="py-20 bg-background overflow-hidden" id="locations">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="text-center mb-10 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl">
            <span className="font-serif italic font-bold text-primary">Store </span>
            <span className="font-sans font-normal text-foreground">Locations</span>
          </h2>
        </div>

        {/* --- Map Container --- */}
        <div className="relative w-full h-150 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group animate-[fadeInUp_1s_ease-out_forwards]">
          
          {/* 1. MAP BACKGROUND IMAGE */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/Rectangle 97.png" 
              alt="Map Background"
              fill
              className="object-cover"
            />
          </div>

          {/* 2. MAP OVERLAY ITEMS (Tags & Pins) */}
          <div className="absolute inset-0 w-full h-full p-6 md:p-10 pointer-events-none">
            
            {/* Top Left Tags */}
            <div className="flex flex-col md:flex-row gap-3 items-start pointer-events-auto">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <span className="font-sans text-xs font-bold uppercase tracking-wide text-foreground">24 SJU Snabbköp</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="font-sans text-xs font-bold uppercase tracking-wide text-foreground">Kommande 24Sju butik</span>
              </div>
              <div className="bg-cyan-100/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2 border border-cyan-200">
                <div className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-white text-[8px]">📍</div>
                <span className="font-sans text-xs font-bold uppercase tracking-wide text-foreground">Din 24 sju butik</span>
              </div>
            </div>

            {/* Simulated Map Pins (Positioned absolutely for visual effect) */}
            {/* Pin 1 */}
            <div className="absolute top-[40%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
               <div className="w-12 h-12 bg-black rounded-full border-2 border-white shadow-lg flex items-center justify-center overflow-hidden">
                 {/* Logo mockup inside pin */}
                 <span className="text-[10px] font-bold text-white leading-none text-center">
                   <span className="text-[#FF0000]">24</span><br/>
                   <span className="text-[#438931]">SJU</span>
                 </span>
               </div>
               <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
            </div>
            {/* Pin 2 */}
            <div className="absolute top-[55%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
               <div className="w-12 h-12 bg-black rounded-full border-2 border-white shadow-lg flex items-center justify-center overflow-hidden">
                 <span className="text-[10px] font-bold text-white leading-none text-center">
                   <span className="text-[#FF0000]">24</span><br/>
                   <span className="text-[#438931]">SJU</span>
                 </span>
               </div>
               <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
            </div>
            {/* Pin 3 */}
            <div className="absolute top-[65%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
               <div className="w-12 h-12 bg-black rounded-full border-2 border-white shadow-lg flex items-center justify-center overflow-hidden">
                 <span className="text-[10px] font-bold text-white leading-none text-center">
                   <span className="text-[#FF0000]">24</span><br/>
                   <span className="text-[#438931]">SJU</span>
                 </span>
               </div>
               <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
            </div>

          </div>

          {/* 3. STORE DETAILS CARD (Floating Right) */}
          {/* Responsive: Stacked at bottom on mobile, Floating Right on Desktop */}
          <div className="absolute bottom-0 md:bottom-auto md:top-10 md:right-10 w-full md:w-[400px] p-4 md:p-0 pointer-events-auto">
            <div className="bg-white rounded-[2rem] p-6 shadow-2xl h-full">
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-sans text-xs font-bold text-[#438931] uppercase tracking-wider block mb-1">
                    24 SJU Snabbköp
                  </span>
                  <h3 className="font-serif italic font-bold text-3xl text-foreground">
                    Arentorp
                  </h3>
                </div>
                {/* Social Icons */}
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer hover:opacity-80">
                     <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white cursor-pointer hover:opacity-80">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                </div>
              </div>

              {/* Store Image */}
              <div className="relative w-full h-[200px] rounded-2xl overflow-hidden mb-6 group/img">
                <Image
                  src="/assets/Store Images/Stora Herrestad 22-5/P1130126.JPG"
                  alt="Arentorp Store"
                  fill
                  className="object-cover"
                />
                {/* Carousel Dots Mockup */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
                  <div className="w-2 h-2 rounded-full bg-white/50 shadow-sm"></div>
                  <div className="w-2 h-2 rounded-full bg-white/50 shadow-sm"></div>
                </div>
              </div>

              {/* Info List */}
              <div className="flex flex-col gap-4 mb-6">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-5 flex justify-center text-primary mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <p className="font-sans text-sm text-foreground/80">
                    Stommen 3, 534 94 Vara,<br/>Sweden
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-5 flex justify-center text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p className="font-sans text-sm text-foreground/80">
                    +46 73 321 72 55
                  </p>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3">
                   <div className="w-5 flex justify-center text-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <p className="font-sans text-sm text-foreground/80">
                    Open 24 hours
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <button className="w-full border border-[#438931] text-[#438931] hover:bg-[#438931] hover:text-white rounded-xl py-3 font-serif italic font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transform group-hover/btn:rotate-45 transition-transform">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                </svg>
                Get Direction
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}