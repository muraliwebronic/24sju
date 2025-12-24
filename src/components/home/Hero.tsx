import React from 'react';
import NavBar from '../layout/NavBar';

export default function Hero() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Container */}
      <div className="px-4 pb-4 md:px-6 md:pb-6 h-[calc(100vh-80px)]">
        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center text-center">
          
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source src="./assets/first video - header.mov" type="video/mp4" />
            <source src="./assets/first video - header.mov" type="video/quicktime" />
          </video>

          {/* Dark Overlay (to ensure text readability like the image) */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Hero Content */}
          <div className="relative z-20 flex flex-col items-center max-w-5xl px-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
            
            {/* Top Heading (Sans Bold) */}
            <h1 className="text-white leading-[0.9]">
              <span className="block font-sans font-bold text-4xl md:text-6xl lg:text-7xl mb-1 md:mb-4 tracking-tight">
                Störst på obemannat,
              </span>
              
              {/* Bottom Heading (Serif Italic) 
                  Using a customized large size to match the '157px' feel responsively 
              */}
              <span className="block font-serif italic font-medium text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem]">
                av en anledning.
              </span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="mt-6 md:mt-8 text-white/90 font-sans text-sm md:text-base max-w-md mx-auto leading-relaxed">
              24SJU är den största obemannade matkedjan i Europa.<br className="hidden md:block"/>
              Det är ingen slump
            </p>

            {/* Call to Action Button */}
            <button className="group mt-10 bg-primary hover:bg-[#3a782b] transition-all duration-300 text-white rounded-full pl-8 pr-2 py-2 flex items-center gap-4 cursor-pointer">
              <span className="font-serif italic font-medium text-lg md:text-xl pt-1">
                Open Store
              </span>
              <div className="bg-white/20 group-hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 7H17M17 7L11 1M17 7L11 13" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}