"use client";

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    isFeatured: true,
    // Restored correct asset path. If you really have a test.png, ensure it exists in /public./assets/
    image: "./assets/test.png", 
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    signature: "Charbel", 
    designation: "Franchise Owner",
  },
  {
    id: 2,
    isFeatured: false,
    image: "./assets/test.png",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    signature: "Tomas",
    designation: "Store Manager",
  },
  {
    id: 3,
    isFeatured: false,
    image: "./assets/test.png",
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    signature: "Cassandra",
    designation: "Partner",
  },
  {
    id: 4,
    isFeatured: false,
    image: "./assets/test.png",
    quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    signature: "Sofia",
    designation: "Investor",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl font-serif italic font-bold text-primary">
            Testimonials
          </h2>
          <p className="font-sans text-xl md:text-2xl text-foreground max-w-sm text-right leading-tight">
            Don't take our Word for it!<br />
            Hear it from our partners.
          </p>
        </div>

        {/* --- Scrollable Container --- */}
        <div className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className={`flex-shrink-0 snap-center rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]
                ${item.isFeatured 
                  ? 'w-[85vw] md:w-[700px] bg-white shadow-xl border border-gray-50 flex-col md:flex-row gap-8 items-stretch' 
                  : 'w-[75vw] md:w-[400px] bg-[#FEFBF9] shadow-sm items-start'
                }
              `}
            >
              
              {/* =================================
                  FEATURED LAYOUT
                 ================================= */}
              {item.isFeatured ? (
                <>
                  {/* Left: Image */}
                  {/* FIX: Changed md:min-h-full to md:h-full to ensure explicit height for 'fill' */}
                  <div className="w-full md:w-[45%] relative h-[300px] md:h-full rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt="Testimonial"
                      fill
                      priority={true} // Added priority to fix loading issues
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Right: Content */}
                  <div className="w-full md:w-[55%] flex flex-col justify-between py-2">
                      
                      {/* Quote Block */}
                      <div className="relative">
                        <span className="text-6xl text-primary font-serif font-bold leading-none absolute -top-4 -left-2">“</span>
                        <p className="font-sans text-foreground/80 text-lg leading-relaxed relative z-10 pt-8">
                          {item.quote}
                        </p>
                      </div>

                      {/* Signature Block */}
                      <div className="flex flex-col items-end mt-8">
                        <div className="relative w-32 h-12 mb-1 flex justify-end">
                           <span className="font-serif italic text-3xl text-foreground/80 font-cursive transform -rotate-2">
                             {item.signature}
                           </span>
                        </div>
                        
                        <span className="font-sans text-xs font-bold uppercase tracking-wider text-foreground/60">
                          {item.designation}
                        </span>
                      </div>
                  </div>
                </>
              ) : (
                
                /* =================================
                   STANDARD CARD LAYOUT 
                   ================================= */
                <>
                  <div>
                    <span className="text-5xl text-primary font-serif font-bold leading-none mb-4 block">“</span>
                    <p className="font-sans text-foreground/80 text-lg leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8 w-full pt-6 border-t border-black/5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                         src={item.image}
                         alt="Avatar"
                         fill
                         className="object-cover"
                      />
                    </div>
                    
                    <div className="flex flex-col flex-1 items-end">
                       <span className="font-serif italic text-xl text-foreground/60 font-cursive">
                         {item.signature}
                       </span>
                       <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                         {item.designation}
                       </span>
                    </div>
                  </div>
                </>
              )}

            </div>
          ))}

          {/* Spacer */}
          <div className="w-2 flex-shrink-0" />
          
        </div>

      </div>
      
     
    </section>
  );
}