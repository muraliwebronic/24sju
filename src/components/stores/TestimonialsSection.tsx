"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

// --- CONFIGURATION ---
const CARD_WIDTH_ACTIVE = 800;   
const CARD_WIDTH_INACTIVE = 380; 
const GAP = 32;                  
const TRANSITION_MS = 700;       

// Mobile Config (Percentages of Screen Width)
const MOBILE_ACTIVE_VW = 90;
const MOBILE_INACTIVE_VW = 80;

const testimonials = [
  {
    id: 1,
    image: "/assets/test.png", 
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    signature: "Charbel",
    designation: "Franchise Owner",
  },
  {
    id: 2,
    image: "/assets/test.png",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    signature: "Tomas",
    designation: "Store Manager",
  },
  {
    id: 3,
    image: "/assets/test.png",
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    signature: "Cassandra",
    designation: "Partner",
  },
  {
    id: 4,
    image: "/assets/test.png",
    quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    signature: "Sofia",
    designation: "Investor",
  },
];

export default function TestimonialsSlider() {
  const extendedList = [...testimonials, ...testimonials, ...testimonials];
  
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
    timerRef.current = setInterval(handleNext, 4000);
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="text-5xl md:text-6xl font-serif italic font-bold text-[#2E5C35]">
            Testimonials
          </h2>
          <p className="font-sans text-xl text-gray-800 max-w-sm text-right leading-tight">
            Don't take our Word for it!<br />
            Hear it from our partners.
          </p>
        </div>
      </div>

      {/* TRACK WINDOW - Responsive Height: Taller on Mobile, 450px on Desktop */}
      <div 
        className="w-full relative h-[600px] md:h-[450px] flex items-center" 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex items-center gap-8 absolute left-0 will-change-transform"
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
                  relative flex-shrink-0 rounded-[1.5rem] overflow-hidden cursor-pointer
                  grid grid-cols-1 grid-rows-1
                  transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  
                  ${isActive 
                    ? `w-[90vw] md:w-[800px] bg-white shadow-xl scale-100 z-20` 
                    : `w-[80vw] md:w-[380px] bg-[#FFFCF8] shadow-sm scale-100 z-10`
                  }
                  
                  /* RESPONSIVE HEIGHT: 550px mobile, 400px desktop */
                  h-[550px] md:h-[400px]
                `}
              >
                {/* ----------------------------------
                   VIEW 1: ACTIVE (Split Layout)
                   ---------------------------------- */}
                <div 
                  className={`
                    col-start-1 row-start-1 w-full h-full flex flex-col md:flex-row
                    transition-opacity duration-500
                    ${isActive ? 'opacity-100 delay-300 pointer-events-auto' : 'opacity-0 delay-0 pointer-events-none'}
                  `}
                >
                  {/* Left: Large Image - Taller on mobile to look good stacked */}
                  <div className="w-full md:w-[45%] h-[240px] md:h-full relative bg-gray-100">
                    <Image
                      src={item.image}
                      alt="Testimonial"
                      fill
                      priority={isActive}
                      className="object-cover object-top"
                    />
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full md:w-[55%] flex flex-col justify-between p-8 md:p-10">
                    <div>
                       <span className="text-5xl text-[#5BB543] font-serif font-bold leading-none block mb-4">“</span>
                       <p className="font-sans text-gray-700 text-lg leading-relaxed">
                         {item.quote}
                       </p>
                    </div>

                    <div className="flex flex-col items-end mt-4">
                       <span className="font-serif italic text-3xl text-gray-800 font-cursive transform -rotate-2">
                           {item.signature}
                       </span>
                       <span className="font-sans text-xs font-bold text-gray-500 mt-1">
                         {item.designation}
                       </span>
                    </div>
                  </div>
                </div>


                {/* ----------------------------------
                   VIEW 2: INACTIVE (Cream Card Layout)
                   ---------------------------------- */}
                <div 
                  className={`
                    col-start-1 row-start-1 w-full h-full flex flex-col justify-between p-8
                    transition-opacity duration-300
                    ${isActive ? 'opacity-0 delay-0 pointer-events-none' : 'opacity-100 delay-100 pointer-events-auto'}
                  `}
                >
                  <div>
                    <span className="text-5xl text-[#5BB543] font-serif font-bold leading-none mb-4 block">“</span>
                    <p className="font-sans text-gray-600 text-lg leading-relaxed line-clamp-6">
                      {item.quote}
                    </p>
                  </div>

                  <div className="flex items-center justify-between w-full pt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 grayscale opacity-80">
                       <Image 
                         src={item.image} 
                         alt="Avatar" 
                         fill 
                         className="object-cover" 
                       />
                    </div>
                    
                    <div className="flex flex-col items-end">
                       <span className="font-serif italic text-xl text-gray-600">
                         {item.signature}
                       </span>
                       <span className="font-sans text-[10px] font-bold text-gray-400 mt-1">
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