"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const socialPosts = [
  {
    id: 1,
    image: "/assets/Store Images/Hånger 21-5/P1120966.JPG", 
    overlayText: "INTE BARA STÖRST",
    alt: "Social media post 1"
  },
  {
    id: 2,
    image: "/assets/Store Images/Hånger 21-5/P1130002.JPG", 
    overlayText: "VILKA ÄR 24SJU?",
    alt: "Social media post 2"
  },
  {
    id: 3,
    image: "/assets/Store Images/Furulund 22-5/Furulund/P1130074.JPG", 
    overlayText: "24SJU KATRINEHOLM",
    alt: "Social media post 3"
  },
  {
    id: 4,
    image: "/assets/Store Images/Hånger 21-5/P1130002.JPG", 
    overlayText: "FOLLOW US",
    alt: "Social media post 4"
  },
];

export default function SocialMediaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Calculate the 3 visible posts based on currentIndex
  // We use modulo (%) to create an infinite loop effect
  const getVisiblePosts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % socialPosts.length;
      visible.push(socialPosts[index]);
    }
    return visible;
  };

  const visiblePosts = getVisiblePosts();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % socialPosts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + socialPosts.length) % socialPosts.length);
  };

  return (
    <section className="py-20 bg-background overflow-hidden container-padding">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* --- Header --- */}
        <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl">
            <span className="font-sans font-bold text-foreground">Social </span>
            <span className="font-serif font-bold italic text-primary">Media</span>
          </h2>
        </div>

        {/* --- Carousel Container --- */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev}
            className="flex absolute max-md:-bottom-10 max-md:left-1/3 max-md:-translate-x-1/3  md:left-0 lg:-left-12 z-20 w-12 h-12 bg-primary rounded-full items-center justify-center text-white hover:bg-[#3a782b] transition-colors shadow-lg group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards Wrapper */}
          <div className="flex gap-6 overflow-x-auto md:px-10 md:overflow-visible no-scrollbar w-full justify-start md:justify-center snap-x snap-mandatory pb-8 md:pb-0">
            
            {/* Map over the DYNAMIC visiblePosts array instead of a static slice */}
            {visiblePosts.map((post, index) => (
              <div 
                // We use a combination of ID and index for the key to ensure React re-renders correctly when looping
                key={`${post.id}-${index}`} 
                className="relative shrink-0 w-full   md:w-1/3 md:h-90 rounded-3xl overflow-hidden snap-center group cursor-pointer animate-[fadeIn_0.5s_ease-out]"
              >
                <img
                  src={post.image}
                  alt={post.alt}
          
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                {/* Text Overlay (Restored from missing snippet) */}
                
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={handleNext}
            className="flex absolute max-md:-bottom-10 max-md:right-1/3 max-md:translate-x-1/3 right-5 md:right-0 lg:-right-12 z-20 w-12 h-12 bg-primary rounded-full items-center justify-center text-white hover:bg-[#3a782b] transition-colors shadow-lg group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>

        {/* --- Pagination Dots --- */}
        <div className=" hidden lg:flex items-center justify-center gap-2 mt-10 md:mt-12">
          {socialPosts.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrentIndex(idx)}
               className={`w-2.5 h-2.5 rounded-full transition-colors ${
                 currentIndex === idx ? 'bg-primary' : 'bg-gray-200 hover:bg-gray-300'
               }`}
             />
          ))}
        </div>

      </div>
    </section>
  );
}