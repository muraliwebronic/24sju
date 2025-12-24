import React from 'react';
import Image from 'next/image';

export default function StoresMapSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* =======================
            LEFT COLUMN: Text Content
           ======================= */}
        <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
          
          {/* Heading */}
          <h2 className="text-6xl md:text-8xl mb-8 leading-tight">
            <span className="font-sans font-bold text-foreground">117 </span>
            <span className="font-serif font-bold italic text-primary">Stores</span>
          </h2>

          {/* Description */}
          <div className="font-sans text-foreground/80 text-lg md:text-xl leading-relaxed space-y-6 max-w-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

        </div>

        {/* =======================
            RIGHT COLUMN: Map Image
           ======================= */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-lg animate-[fadeInUp_1s_ease-out_forwards]">
          {/* Note: You will need to export the map image from your design file 
            and place it in public/assets/map-image.jpg
          */}
          <Image
            src="/assets/Rectangle 97.png"
            alt="Map of 24SJU store locations in Sweden"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
          
          {/* Optional: Overlay gradient if you want the map to feel blended */}
        </div>

      </div>
    </section>
  );
}