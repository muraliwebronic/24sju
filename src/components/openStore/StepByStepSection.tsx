"use client";

import React from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "./assets/Store Images/store images/Arentorp-1024x768.jpg", // Using a general store image
  },
  {
    id: 2,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "./assets/Store Images/Hånger 21-5/P1120964.JPG", // Using the deck/ramp image
  },
  {
    id: 3,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: "./assets/Store Images/store images/UCKLUM.jpg", // Using the interior fridge image
  },
];

export default function StepByStepSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden container-padding ">
      <div className="container mx-auto  relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl">
            <span className="font-sans font-normal text-foreground">Step-by-step </span>
            <span className="font-serif font-bold italic text-primary">guide</span>
          </h2>
        </div>

        {/* --- Central Connector Line (Desktop) --- */}
        <div className="hidden md:block absolute left-1/2 top-32 bottom-20 w-px border-l-2 border-dashed border-gray-200 -translate-x-1/2 -z-10" />

        {/* --- Steps List --- */}
        <div className="flex flex-col gap-8 md:gap-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0; // true for 0 (1st), 2 (3rd) -> Text Left

            return (
              <div 
                key={step.id} 
                className="relative w-full h-[300px]  rounded-[2rem] overflow-hidden shadow-lg group animate-[fadeInUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                
                {/* Background Image */}
                <Image
                  src={step.image}
                  alt={`Step ${step.id}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Gradient Overlay Logic:
                   - Even (Text Left): Gradient from Left (Dark) to Right (Transparent)
                   - Odd (Text Right): Gradient from Right (Dark) to Left (Transparent)
                   - Mobile: Always gradient from bottom or full overlay
                */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300
                    ${isEven 
                      ? 'bg-gradient-to-r from-black/80 via-black/40 to-transparent' 
                      : 'bg-gradient-to-l from-black/80 via-black/40 to-transparent'
                    }
                    /* Mobile Override: Vertical gradient for better readability on small screens */
                    max-md:bg-gradient-to-t max-md:from-black/90 max-md:via-black/50 max-md:to-transparent
                  `} 
                />

                {/* Text Content */}
                <div 
                  className={`absolute top-0 bottom-0 flex flex-col justify-center p-8 md:p-16 max-w-xl
                    ${isEven ? 'left-0 items-start text-left' : 'right-0 items-end text-right'}
                    /* Mobile Override: Always bottom aligned */
                    max-md:left-0 max-md:right-0 max-md:bottom-0 max-md:top-auto max-md:items-start max-md:text-left
                  `}
                >
                  <h3 className="flex items-baseline gap-3 text-2xl md:text-4xl mb-4">
                    <span className="font-serif italic font-bold text-primary">{step.id}.</span>
                    <span className="font-serif italic font-bold text-white">{step.title}</span>
                  </h3>
                  
                  <p className="font-sans text-white/90 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}