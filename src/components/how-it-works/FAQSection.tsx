"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    id: 1,
    question: "Getting started with 24SJU",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: null,
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: null,
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: null,
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet?",
    answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    image: "/assets/Store Images/Hånger 21-5/P1120964.JPG", 
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(); // First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background overflow-hidden" id="faq">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="text-center mb-10 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="font-sans font-normal text-foreground">Frequently asked </span>
            <span className="font-serif font-bold italic text-primary">Questions</span>
          </h2>
          <p className="font-sans text-xl font-bold text-foreground/80">
            How can we help you?
          </p>
        </div>

        {/* --- Search Bar --- */}
        <div className="relative max-w-2xl mx-auto mb-16 animate-[fadeInUp_0.9s_ease-out_forwards]">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full py-4 pl-12 pr-6 rounded-full border border-gray-100 bg-white shadow-sm focus:outline-none focus:border-primary/30 focus:shadow-md transition-all duration-300 font-sans text-foreground placeholder:text-green-800/40"
          />
        </div>

        {/* --- FAQ Items --- */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={faq.id}
                onClick={() => toggleFAQ(index)}
                // Using the specific requested color #FEFBF9
                className="group rounded-2xl bg-[#FEFBF9] overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-md animate-[fadeInUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                {/* Question Row */}
                <div className="flex items-center justify-between p-6 md:p-8">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  
                  {/* Rotating Arrow Icon */}
                  <div className={`w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>

                {/* Answer Content (Smooth Expand/Collapse) */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      
                      {/* Inner Content Layout */}
                      <div className={`flex flex-col ${faq.image ? 'md:flex-row gap-6 md:gap-10' : ''}`}>
                        
                        {/* If there is an image, show it on the left */}
                        {faq.image && (
                          <div className="relative w-full md:w-[250px] h-[160px] md:h-[180px] flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                            <Image
                              src={faq.image}
                              alt="FAQ visual"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        {/* Answer Text */}
                        <div className="flex-1">
                           <p className="font-sans text-foreground/70 leading-relaxed text-base md:text-lg">
                             {faq.answer}
                           </p>
                           {/* Extra text paragraph for layout balancing if image is present */}
                           {faq.image && (
                             <p className="mt-4 font-sans text-foreground/70 leading-relaxed text-base md:text-lg">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             </p>
                           )}
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}