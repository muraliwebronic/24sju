"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Data structure
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
      text: "John upgraded his traditional shop into a 24/7 unmanned store, giving customers round-the-clock access. With automated systems and seamless checkout, he quickly saw steady growth and higher satisfaction."
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
  const [activeIndex, setActiveIndex] = useState(1);
  const len = storeOwners.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % len);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + len) % len);
  };

  // Helper to determine position relative to active index
  const getPosition = (index: number) => {
    if (index === activeIndex) return 'active';
    if (index === (activeIndex - 1 + len) % len) return 'prev';
    if (index === (activeIndex + 1) % len) return 'next';
    return 'hidden';
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
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

        {/* --- 3D Carousel Container --- */}
        {/* Reduced height from 600/700px to 500/600px */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          
          {storeOwners.map((owner, index) => {
            const position = getPosition(index);
            const isActive = position === 'active';

            let positionClasses = '';
            if (isActive) {
              // Reduced max scale from 125 to 115 to match overall size reduction
              positionClasses = 'z-30 scale-100 md:scale-115 opacity-100 translate-x-0';
            } else if (position === 'prev') {
              positionClasses = 'z-10 scale-90 opacity-60 -translate-x-[65%] md:-translate-x-[85%] pointer-events-none';
            } else if (position === 'next') {
              positionClasses = 'z-10 scale-90 opacity-60 translate-x-[65%] md:translate-x-[85%] pointer-events-none';
            } else {
              positionClasses = 'z-0 scale-75 opacity-0 pointer-events-none';
            }

            return (
              <div 
                key={owner.id}
                // Reduced Base Dimensions by ~10%:
                // Width: 70% -> 63% | 45% -> 40%
                // Height: 60% -> 54% | 70% -> 63%
                className={`absolute w-[63%] md:w-[40%] h-[54%] md:h-[63%] rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${positionClasses}`}
              >
                <Image
                  src={owner.image}
                  alt={owner.name}
                  fill
                  className={`object-cover transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-110'}`}
                />

                <div 
                  // Kept text box size logic same, just adjusted positioning slightly
                  className={`absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-white rounded-3xl p-6 md:p-8 max-w-[280px] md:max-w-[350px] shadow-lg transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                  <h3 className="font-serif font-bold italic text-3xl text-primary mb-4">
                    {owner.testimonial.title}
                  </h3>
                  <p className="font-sans text-foreground/80 leading-relaxed text-sm md:text-base">
                    {owner.testimonial.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Navigation Buttons (SVGs) --- */}
        <div className="flex items-center justify-center gap-6 mt-4">
          
          {/* Left Button */}
          <button 
            onClick={handlePrev}
            className="group hover:opacity-70 transition-all duration-300 hover:-translate-x-1"
            aria-label="Previous slide"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29" stroke="black" strokeWidth="2" className="group-hover:stroke-primary transition-colors"/>
              <path d="M28 20L18 30L28 40" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-primary transition-colors"/>
              <path d="M18 30H36" stroke="black" strokeWidth="3" strokeLinecap="round" className="group-hover:stroke-primary transition-colors"/>
              <path d="M41 30H43" stroke="black" strokeWidth="3" strokeLinecap="round" className="group-hover:stroke-primary transition-colors"/>
            </svg>
          </button>

          {/* Right Button */}
          <button 
            onClick={handleNext}
            className="group hover:opacity-70 transition-all duration-300 hover:translate-x-1"
            aria-label="Next slide"
          >
             <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
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