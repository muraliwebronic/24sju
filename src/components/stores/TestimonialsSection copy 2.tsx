"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

// --- CONFIGURATION ---
const CARD_WIDTH_ACTIVE = 700;   // Width when active
const CARD_WIDTH_INACTIVE = 400; // Width when inactive
const GAP = 24;                  // Gap between cards
const TRANSITION_MS = 700;       // Animation speed

// Mobile Config (Percentages of Screen Width)
const MOBILE_ACTIVE_VW = 85;
const MOBILE_INACTIVE_VW = 75;

const testimonials = [
  {
    id: 1,
    image: "./assets/test.png",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    signature: "Charbel",
    designation: "Franchise Owner",
  },
  {
    id: 2,
    image: "./assets/test.png",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    signature: "Tomas",
    designation: "Store Manager",
  },
  {
    id: 3,
    image: "./assets/test.png",
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    signature: "Cassandra",
    designation: "Partner",
  },
  {
    id: 4,
    image: "./assets/test.png",
    quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    signature: "Sofia",
    designation: "Investor",
  },
];

export default function TestimonialsSlider() {
  // Triple the list for infinite looping buffers
  const extendedList = [...testimonials, ...testimonials, ...testimonials];
  
  // Start in the middle set
  const [activeIndex, setActiveIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- 1. Window Resize Handler ---
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setIsTransitioning(true);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- 2. Center Calculation Logic ---
  const getTranslateX = (index: number) => {
    if (windowWidth === 0) return 0;
    const isMobile = windowWidth < 768;

    const activeW = isMobile ? (windowWidth * MOBILE_ACTIVE_VW) / 100 : CARD_WIDTH_ACTIVE;
    const inactiveW = isMobile ? (windowWidth * MOBILE_INACTIVE_VW) / 100 : CARD_WIDTH_INACTIVE;

    const itemsBefore = index;
    const distanceOfPreviousItems = itemsBefore * (inactiveW + GAP);
    
    const activeItemCenter = distanceOfPreviousItems + (activeW / 2);
    const screenCenter = windowWidth / 2;

    return screenCenter - activeItemCenter;
  };

  // --- 3. Interaction Handlers ---
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  // --- 4. Auto-Play ---
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(handleNext, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [handleNext, isPaused]);

  // --- 5. Infinite Loop Teleportation ---
  useEffect(() => {
    if (!isTransitioning) return;

    const total = testimonials.length;
    
    if (activeIndex >= total * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex - total);
      }, TRANSITION_MS);
    } else if (activeIndex < total) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex + total);
      }, TRANSITION_MS);
    }
  }, [activeIndex, isTransitioning]);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Header with Original Animation and Styles */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl font-serif italic font-bold text-primary">
            Testimonials
          </h2>
          <p className="font-sans text-xl md:text-2xl text-foreground max-w-sm text-right leading-tight">
            Don't take our Word for it!<br />
            Hear it from our partners.
          </p>
        </div>
      </div>

      {/* TRACK WINDOW */}
      <div 
        className="w-full relative h-[550px] flex items-center" 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex items-center gap-6 absolute left-0 will-change-transform"
          style={{
            transform: `translate3d(${getTranslateX(activeIndex)}px, 0, 0)`,
            transition: isTransitioning ? `transform ${TRANSITION_MS}ms cubic-bezier(0.25, 1, 0.5, 1)` : 'none',
          }}
        >
          {extendedList.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <div 
                key={`${item.id}-${i}`}
                onClick={() => handleCardClick(i)}
                className={`
                  relative flex-shrink-0 rounded-[2rem] overflow-hidden cursor-pointer
                  grid grid-cols-1 grid-rows-1
                  transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  
                  /* Dynamic Background & Shadow from original styles */
                  ${isActive 
                    ? `w-[85vw] md:w-[700px] bg-white shadow-xl border border-gray-50 scale-100 z-20` 
                    : `w-[75vw] md:w-[400px] bg-[#FEFBF9] shadow-sm scale-95 opacity-70 hover:opacity-100 z-10`
                  }
                  
                  /* Fixed height to prevent jumps */
                  h-[500px]
                `}
              >
                {/* ----------------------------------
                   VIEW 1: ACTIVE (Expanded Content)
                   ---------------------------------- */}
                <div 
                  className={`
                    col-start-1 row-start-1 w-full h-full flex flex-col md:flex-row p-8 md:p-10 gap-8 items-stretch
                    transition-opacity duration-500
                    ${isActive ? 'opacity-100 delay-300 pointer-events-auto' : 'opacity-0 delay-0 pointer-events-none'}
                  `}
                >
                  {/* Left: Image */}
                  <div className="w-full md:w-[45%] h-[250px] md:h-full relative rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt="Testimonial"
                      fill
                      priority={isActive}
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full md:w-[55%] flex flex-col justify-between py-2">
                    {/* Quote */}
                    <div className="relative">
                       <span className="text-6xl text-primary font-serif font-bold leading-none absolute -top-4 -left-2">“</span>
                       <p className="font-sans text-foreground/80 text-lg leading-relaxed relative z-10 pt-8">
                         {item.quote}
                       </p>
                    </div>

                    {/* Signature */}
                    <div className="flex flex-col items-end mt-8">
                       <div className="relative w-32 h-12 mb-1 flex justify-end">
                         <span className="font-serif italic text-3xl text-foreground/80 font-cursive transform -rotate-2">
                           {item.signature}
                         </span>
                       </div>
                       <span className="font-sans text-xs font-bold uppercase tracking-wider text-foreground/60">
                         {item.designation}
                       </span>
                    </div>
                  </div>
                </div>


                {/* ----------------------------------
                   VIEW 2: INACTIVE (Collapsed Content)
                   ---------------------------------- */}
                <div 
                  className={`
                    col-start-1 row-start-1 w-full h-full flex flex-col justify-between p-8
                    transition-opacity duration-300
                    ${isActive ? 'opacity-0 delay-0 pointer-events-none' : 'opacity-100 delay-100 pointer-events-auto'}
                  `}
                >
                  {/* Top: Quote Preview */}
                  <div>
                    <span className="text-5xl text-primary font-serif font-bold leading-none mb-4 block">“</span>
                    <p className="font-sans text-foreground/80 text-lg leading-relaxed line-clamp-4">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom: User Info (Border top matching original) */}
                  <div className="flex items-center gap-4 mt-8 w-full pt-6 border-t border-black/5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                       <Image 
                         src={item.image} 
                         alt="Avatar" 
                         fill 
                         className="object-cover" 
                       />
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                       <span className="font-serif italic text-xl text-foreground/60 font-cursive">
                         {item.signature}
                       </span>
                       <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                         {item.designation}
                       </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}