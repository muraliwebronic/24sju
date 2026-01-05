"use client";

import React from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: "Varför det är en bra affärsidé",
    // Matches filename from image_0f8e21.png
    image: "./assets/Varför det är en bra affärsidé.png", 
    link: "#",
  },
  {
    id: 2,
    title: 'Kort "steg-för-steg" process',
    // Matches filename from image_0f8e21.png
    image: "./assets/Kort ”steg-för-steg” process.png", 
    link: "#",
  },
  {
    id: 3,
    title: "Länk till kontaktformulär",
    // Matches filename from image_0f8e21.png
    image: "./assets/Länk till kontaktformulär.png", 
    link: "#",
  },
];

export default function BecomeStoreOwnerSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl">
            <span className="font-sans font-bold text-foreground">Bli </span>
            <span className="font-serif font-bold italic text-primary">butiksägare</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="flex flex-col items-center group cursor-pointer animate-[fadeInUp_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container (Square with rounded corners) */}
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-shadow duration-500 bg-gray-50">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain  transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Title & Arrow Row */}
              <div className="flex items-center gap-4 w-full justify-center md:justify-between px-2">
                
                {/* Text Title */}
                <h3 className="font-serif italic font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Arrow Icon Circle */}
                <div className="w-10 h-10 flex-shrink-0 rounded-full border border-black/20 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 7h12M9 3l4 4-4 4" />
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}