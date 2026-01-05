"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const storeOwners = [
  {
    id: 1,
    name: "Familjen Lundqvist", 
    image: "/assets/Store Images/Stora Herrestad 22-5/P1130130.JPG",
    testimonial: {
      title: "Familjen Lundqvist",
      text: "Vi älskar friheten det ger oss och våra kunder. Att kunna erbjuda service dygnet runt i vår lilla ort har verkligen gjort skillnad för gemenskapen."
    }
  },
  {
    id: 2,
    name: "John Doe",
    image: "/assets/Store Images/store images/Arentorp-1024x768.jpg", 
    testimonial: {
      title: "John Doe",
      text: "John upgraded his traditional shop into a 24/7 unmanned store. With automated systems and seamless checkout, he quickly saw steady growth."
    }
  },
  {
    id: 3,
    name: "Team Högsby", 
    image: "/assets/Store Images/Högsby/P1130278.JPG",
    testimonial: {
      title: "Team Högsby",
      text: "Tekniken är fantastisk och gör driften så smidig. Vi kan fokusera på att hålla butiken fräsch och välfylld medan systemet sköter resten."
    }
  },
];

export default function StoreOwnersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const len = storeOwners.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % len);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + len) % len);
  };

  return (
    <section className="py-20 bg-background overflow-hidden container-padding">
      <div className="container mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="font-sans font-bold text-foreground">About our </span>
            <span className="font-serif font-bold italic text-primary">storeowners</span>
          </h2>
          <p className="font-serif text-xl text-foreground/80">
            we are so much more than a brand, we've created a family...
          </p>
        </div>

        {/* --- Slider Container --- */}
        {/* Mobile: Taller (500px) to stack image + text cleanly */}
        {/* Desktop: Shorter (400px) for rectangular aesthetic */}
        <div className="relative h-[500px] md:h-[400px] w-full">
          
          {/* Track */}
          <div 
            className="flex h-full items-center transition-transform duration-700 ease-in-out [--slide-width:80vw] md:[--slide-width:46vw]"
            style={{ 
              transform: `translateX(calc(50% - (var(--slide-width) / 2) - (${activeIndex} * (var(--slide-width) + 24px))))` 
            }}
          >
            {storeOwners.map((owner, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div 
                  key={owner.id} 
                  className={`
                    shrink-0 relative h-full rounded-md shadow-2xl overflow-hidden mr-[24px] 
                    w-[var(--slide-width)] transition-all duration-500
                    flex flex-col md:block 
                    ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}
                  `}
                >
                  
                  {/* --- IMAGE SECTION --- */}
                  {/* Mobile: Top 55% of card | Desktop: Full background */}
                  <div className="relative w-full h-[55%] md:h-full bg-gray-200">
                    <Image
                      src={owner.image}
                      alt={owner.name}
                      fill
                      className="object-cover"
                      priority={isActive}
                      sizes="(max-width: 768px) 80vw, 46vw"
                    />
                  </div>

                  {/* --- TEXT SECTION --- */}
                  {/* Mobile: Bottom 45% of card (Solid White Background) */}
                  {/* Desktop: Absolute Overlay (Floating Card) */}
                  <div 
                    className={`
                      /* Mobile Styles (Stacked) */
                      relative h-[45%] w-full bg-white p-6 flex flex-col justify-center items-start text-left
                      
                      /* Desktop Styles (Overlay) */
                      md:absolute md:h-auto md:w-[320px] md:rounded-3xl md:shadow-lg md:top-1/2 md:right-12 md:-translate-y-1/2
                      
                      /* Transitions */
                      transition-all duration-500 delay-200
                      ${isActive 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 md:opacity-0 md:translate-x-8 pointer-events-none' 
                        // Note: On mobile inactive, we simply rely on the parent opacity (0.4) to dim it, 
                        // but you can hide text content specifically if preferred.
                      }
                    `}
                  >
                    <h3 className="font-serif font-bold italic text-2xl md:text-3xl text-primary mb-2 md:mb-3">
                      {owner.testimonial.title}
                    </h3>
                    <p className="font-sans text-foreground/80 leading-relaxed text-sm md:text-sm line-clamp-4 md:line-clamp-none">
                      {owner.testimonial.text}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* --- Navigation Buttons --- */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button 
            onClick={handlePrev}
            className="group hover:opacity-70 transition-all duration-300 hover:-translate-x-1 focus:outline-none"
            aria-label="Previous slide"
          >
            <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29" stroke="black" strokeWidth="2" className="group-hover:stroke-primary transition-colors"/>
              <path d="M28 20L18 30L28 40" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary transition-colors"/>
              <path d="M18 30H36" stroke="black" strokeWidth="3" strokeLinecap="round" className="group-hover:stroke-primary transition-colors"/>
              <path d="M41 30H43" stroke="black" strokeWidth="3" strokeLinecap="round" className="group-hover:stroke-primary transition-colors"/>
            </svg>
          </button>

          <button 
            onClick={handleNext}
            className="group hover:opacity-70 transition-all duration-300 hover:translate-x-1 focus:outline-none"
            aria-label="Next slide"
          >
             <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29" stroke="black" strokeWidth="2" className="group-hover:stroke-primary transition-colors"/>
              <path d="M32 20L42 30L32 40" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary transition-colors"/>
              <path d="M42 30H24" stroke="black" strokeWidth="3" strokeLinecap="round" className="group-hover:stroke-primary transition-colors"/>
              <path d="M19 30H17" stroke="black" strokeWidth="3" strokeLinecap="round" className="group-hover:stroke-primary transition-colors"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}