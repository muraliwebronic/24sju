"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// 1. Data Structure (Assuming you have 20+ stores in reality)
const stores = [
  {
    id: 1,
    location: "Stora Herrestad",
    image: "/assets/Store Images/Stora Herrestad 22-5/P1130130.JPG",
  },
  {
    id: 2,
    location: "Hånger",
    image: "/assets/Store Images/Hånger 21-5/P1130009.JPG",
  },
  {
    id: 3,
    location: "Högsby",
    image: "/assets/Store Images/Högsby/P1130278.JPG",
  },
  {
    id: 4,
    location: "Forsvik",
    image: "/assets/Store Images/Forsvik (21-6)/P1130386.JPG",
  },
  {
    id: 5,
    location: "Alafors",
    image: "/assets/Store Images/Alafors 20-3/image00167.jpeg",
  },
  {
    id: 6,
    location: "Västra Bodarna",
    image: "/assets/Store Images/Västra Bodarna 29-8/IMG_1554.JPG",
  },
  // ... add your remaining stores here
];
export default function StoreLocations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Double the data to create the seamless infinite loop buffer
  const displayStores = [...stores, ...stores];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const speed = 1; // Adjust scroll speed (higher = faster)

    const scrollStep = () => {
      if (!isPaused && scrollContainer) {
        // Increment scroll position
        scrollContainer.scrollLeft += speed;

        // Infinite Loop Logic:
        // If we have scrolled past the first set of items (half width), snap back to 0
        // We use scrollWidth / 2 because we duplicated the array exactly once
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(scrollStep);

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className=" bg-background">
      <div className="container mx-auto py-16 md:py-24 pl-4  overflow-hidden">
       {/* Scrollable Container */}
      <div
        ref={scrollRef}
        // Handlers to pause auto-scroll for manual interaction
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-10 mx-auto overflow-x-auto no-scrollbar pb-10 pr-10 cursor-grab active:cursor-grabbing"
      >
        {displayStores.map((store, index) => (
          <div
            // Use index in key because IDs are duplicated
            key={`${store.id}-${index}`}
            className="shrink-0 flex flex-col group"
          >
            {/* Image Container */}
            <div className="relative h-100 w-70 overflow-hidden rounded-2xl">
              <Image
                src={store.image}
                alt={`24sju ${store.location}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Typography Section */}
            <div className="mt-5 flex  items-baseline gap-2">
              <span className="font-sans font-bold text-2xl md:text-md text-foreground">
                24sju
              </span>
              <span className="font-serif font-bold italic text-2xl md:text-md text-primary">
                {store.location}
              </span>
            </div>
          </div>
        ))}
      </div>  
      </div>
     
    </section>
  );
}
