"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    id: 1,
    question: "Getting started with 24SJU",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
    answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(); // Default first open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background overflow-hidden container-padding">
      <div className="container mx-auto ">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* =========================
              LEFT COLUMN: Header & Image
             ========================= */}
          <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
            
            {/* Header Text */}
            <div className="mb-10">
              <h2 className="text-5xl md:text-6xl mb-4 font-serif font-bold italic text-primary">
                FAQ
              </h2>
              <h3 className="text-3xl md:text-4xl font-sans text-foreground leading-tight">
                You have Questions.<br />
                We Have Answers
              </h3>
            </div>

            {/* Large Image Card */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl group">
              {/* Using a store interior image as requested */}
              <Image
                src="./assets/Store Images/store images/UCKLUM.jpg" 
                alt="24SJU Store Interior"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Optional Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

          </div>

          {/* =========================
              RIGHT COLUMN: Accordion List
             ========================= */}
          <div className="flex flex-col gap-4 pt-0 lg:pt-10 animate-[fadeInUp_0.8s_ease-out_forwards] delay-100">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={faq.id}
                  onClick={() => toggleFAQ(index)}
                  className={`group rounded-3xl overflow-hidden bg-[#FEFBF9] cursor-pointer transition-all duration-300
                    ${isOpen ? ' shadow-sm' : ' hover:bg-gray-50'}
                  `}
                >
                  
                  {/* Question Row */}
                  <div className="flex items-center justify-between p-6">
                    <h4 className={`font-sans font-bold text-lg md:text-xl pr-4 transition-colors duration-300 ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>
                      {faq.question}
                    </h4>
                    
                    {/* Green Circle Icon */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 ${isOpen ? 'bg-primary rotate-180' : 'bg-primary/80 rotate-0'}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </div>
                  </div>

                  {/* Answer Row (Smooth Collapse) */}
                  <div 
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-8 pt-0">
                         <p className="font-serif text-foreground/70 leading-relaxed text-base md:text-lg">
                           {faq.answer}
                         </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}