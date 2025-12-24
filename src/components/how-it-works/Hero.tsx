"use client";

import React from "react";
import NavBar from "@/components/layout/NavBar"; // Ensure this path matches your folder structure
import Image from "next/image";

// Data for the hero cards
const infoCards = [
  {
    id: 1,
    title: "Så här öppnar du butik",
    image: "./assets/Store Images/Furulund 22-5/Furulund/P1130074.JPG",
    link: "#",
  },
  {
    id: 2,
    title: "Så här handlar du",
    image: "./assets/Store Images/store images/24sjuMellosa.jpg", // Make sure this image exists
    link: "#",
  },
  {
    id: 3,
    title: "Trygghet & Säkerhet",
    image: "./assets/Store Images/store images/UCKLUM.jpg",
    link: "#",
  },
];

export default function Hero() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white pb-20">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Content Section */}
      <section className="mt-5 container px-5 ">
        <div className=" mx-auto">
          {/* Responsive Grid: 1 column on Mobile, 3 columns on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {infoCards.map((card, index) => (
              <div
                key={card.id}
                // Mobile Height: h-[400px] | Desktop Height: h-[600px]
                className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg animate-[fadeInUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay (Dark at bottom for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 pb-10 flex flex-col items-center justify-end text-center">
                  {/* Title */}
                  <h3 className="font-serif italic font-bold text-3xl text-white mb-6 drop-shadow-md">
                    {card.title}
                  </h3>

                  {/* Arrow Icon Circle */}
                  <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="translate-y-[1px]"
                    >
                      <path d="M7 1v12M7 13l-4-4M7 13l4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
