"use client";

import React from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function HowToShopSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* =========================
              LEFT COLUMN: Text Content
             ========================= */}
          <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
            
            {/* Main Heading */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl">
                <span className="font-sans font-bold text-foreground">Så här </span>
                <span className="font-serif font-bold italic text-primary">handlar du</span>
              </h2>
            </div>

            {/* Steps List */}
            <div className="flex flex-col gap-10">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-3xl text-primary font-serif italic font-bold">
                    {step.id}. {step.title}
                  </h3>
                  <p className="font-sans text-foreground/80 text-lg leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                  
                  {/* Decorative Line Separator (Optional, for visual structure) */}
                  <div className="h-[1px] w-20 bg-gray-200 mt-2"></div>
                </div>
              ))}
            </div>

          </div>

          {/* =========================
              RIGHT COLUMN: Image
             ========================= */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-xl group animate-[fadeInUp_1s_ease-out_forwards]">
            <Image
              // Path cleaned up for Next.js public folder usage
              src="./assets/Store Images/Hånger 21-5/P1120970.JPG" 
              alt="Person shopping in 24SJU store"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Optional Overlay to match the clean aesthetic */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          </div>

        </div>

      </div>
    </section>
  );
}