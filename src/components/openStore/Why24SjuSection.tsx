"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    // Icon: Truck with leaf (Image 17)
    icon: "/assets/Image 17.png", 
    titleRegular: "Better for the",
    titleItalic: "Environment",
    description: "We have a far-reaching environmental approach with stores that make a minimal impact on the environment with the goal of our stores being self-sufficient."
  },
  {
    id: 2,
    // Icon: 24 circle (Image 15)
    icon: "/assets/Image 15.png",
    titleRegular: "Open",
    titleItalic: "24/7",
    description: "Our stores are always there for you, all day, all night, every day. All year round. Shop when it suits you and when the need arises."
  },
  {
    id: 3,
    // Icon: Quality Badge (Image 13)
    icon: "/assets/Image 13.png", 
    titleRegular: "Higher",
    titleItalic: "Quality",
    description: "Our stores increase the quality of living and the level of service in smaller towns, which contributes to vibrant communities."
  },
  {
    id: 4,
    // Icon: Person with shield (Image 25)
    icon: "/assets/Image 25.png",
    titleRegular: "Safe &",
    titleItalic: "Secure",
    description: "The store is easily opened by scanning a QR code via the BankID app on your mobile phone and the store is monitored by cameras."
  },
  {
    id: 5,
    // Icon: Greenhouse (Image 27)
    icon: "/assets/Image 27.png",
    titleRegular: "Lokala",
    titleItalic: "fördelar",
    description: "Vi strävar efter att gynna lokala aktörer och vårt mål är att erbjuda t.ex. bröd från lokala bagerier och råvaror från lokala gårdar."
  },
  {
    id: 6,
    // Icon: Price Tag (Image 29)
    icon: "/assets/Image 29.png",
    titleRegular: "Lower",
    titleItalic: "Price",
    description: "Thanks to good purchase prices and the market's lowest operating costs, we can offer really good prices."
  },
];

export default function Why24SjuSection() {
  return (
    <section className="py-20 bg-background overflow-hidden container-padding">
      <div className="container mx-auto ">
        
        {/* --- Header --- */}
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-between mb-16 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className='max-w-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi est at, inventore facilis magni architecto quos saepe id quidem quae dolores quo necessitatibus rem </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            <span className="font-serif italic font-bold text-primary">Why </span>
            <span className="font-sans font-bold text-foreground">24sju?</span>
          </h2>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="group bg-[#FEFBF9] rounded-[2rem] p-10 flex flex-col items-start hover:shadow-lg transition-shadow duration-300 animate-[fadeInUp_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              {/* Icon */}
              <div className="relative w-16 h-16 mb-8 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={feature.icon}
                  alt={`${feature.titleRegular} ${feature.titleItalic}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl mb-4">
                <span className="font-sans font-bold text-foreground">{feature.titleRegular} </span>
                <span className="font-serif italic font-bold text-primary">{feature.titleItalic}</span>
              </h3>

              {/* Description */}
              <p className="font-sans text-foreground/70 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}