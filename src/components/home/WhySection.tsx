import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: 1,
    label: "Sortiment",
    icon: "./assets/Group 34.png", 
  },
  {
    id: 2,
    label: "Inredning",
    icon: "./assets/Path 41.png",
  },
  {
    id: 3,
    label: "Inköp",
    icon: "./assets/Path 42.png",
  },
  {
    id: 4,
    label: "Butikssupport",
    icon: "./assets/icon.svg (1).png",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 bg-background overflow-hidden container-padding">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
    
        <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
          
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="font-serif font-bold italic text-primary">Varför </span>
            <span className="font-sans font-bold text-foreground">24SJU?</span>
          </h2>

          {/* Subtext */}
          <div className="mb-10 font-sans text-foreground/80 text-lg space-y-1">
            <p>What do we have that others don't?</p>
            <p>We have the full solution on everything !!!</p>
          </div>

          {/* Feature Grid (2x2) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-1">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className="group bg-white border border-gray-100 rounded-3xl px-5 py-8 md:w-50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-start gap-4 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <Image 
                    src={feature.icon} 
                    alt={feature.label} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                
                {/* Label */}
                <span className="font-serif font-bold italic md:text-2xl text-foreground group-hover:text-primary transition-colors">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =======================
            RIGHT COLUMN: Images
           ======================= */}
        <div className="relative h-full min-h-[500px] flex flex-col gap-4 animate-[fadeInUp_1s_ease-out_forwards]">
          
          {/* Top Large Image */}
          <div className="relative w-full h-[300px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 group">
            <Image
              src="./assets/Store Images/Furulund 22-5/Furulund/P1130074.JPG" // Replace with your actual image path
              alt="24SJU Store by the lake"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Bottom Row (Split 50/50) */}
          <div className="grid grid-cols-2 gap-4 h-[200px]">
            
            {/* Bottom Left */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 group">
              <Image
                src="./assets/Store Images/store images/SVINNINGE-1024x997.jpeg" // Replace with your actual image path
                alt="Store owners"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Right */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 group">
              <Image
                src="./assets/Store Images/store images/UCKLUM.jpg" // Replace with your actual image path
                alt="Store fridge interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}