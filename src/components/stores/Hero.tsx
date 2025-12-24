import React from 'react';
import NavBar from '../layout/NavBar';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Container */}
      <div className="px-4 pb-4 md:px-6 md:pb-6 h-[calc(100vh-80px)]">
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center">
          
          {/* Background Video */}
          <Image
            src="/assets/Store Images/store images/Stora-Herrestad.jpg"
            alt='store-img'
            className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
            fill
          >
      
          </Image>

          {/* Dark Overlay (to ensure text readability like the image) */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center max-w-5xl px-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
            
            {/* Top Heading (Sans Bold) */}
            <h1 className="text-white leading-[0.9]">
              <span className="block font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-1 md:mb-4 tracking-tight">
                OUR
              </span>
              
      
              <span className="block font-serif italic font-medium text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem]">
                Stores
              </span>
            </h1>


          </div>
        </div>
      </div>

    </div>
  );
}