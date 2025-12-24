import React from 'react';
import Image from 'next/image';

const timelineEvents = [
  {
    id: 1,
    yearPrefix: "20",
    yearSuffix: "21",
    description: "Butik nr. 1 byggdes!",
    image: "./assets/Rectangle 121.png",
  },
  {
    id: 2,
    yearPrefix: "20",
    yearSuffix: "24",
    description: "Butik nr. 1 byggdes!",
    image: "./assets/Rectangle 122.png",
  },
  {
    id: 3,
    yearPrefix: "20",
    yearSuffix: "25",
    description: "Våra chefer deltog i RedBulls Tandemkamp.",
    image: "./assets/Rectangle 123.png",
  },
  {
    id: 4,
    yearPrefix: "20",
    yearSuffix: "25",
    description: "Skördefest för våra butiker!",
    image: "./assets/Rectangle 124.png",
  },
  {
    id: 5,
    yearPrefix: "20",
    yearSuffix: "25",
    description: "Nominerade till årets franchisekedja.",
    image: "./assets/Rectangle 146.png",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-10 bg-background overflow-hidden">
      <div className=" container mx-auto px-4 sm:px-6 relative">
        
        <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="font-sans font-bold text-foreground">Vår </span>
            <span className="font-serif font-bold italic text-primary">värld</span>
          </h2>
          <p className="font-sans text-foreground/80 leading-relaxed text-sm md:text-base">
            2019 inleddes en utredning om bolagets framtid, 2020 startades bolaget
            & utveckling av mjukvaran inleddes. Sedan dess har det gått i rasande fart.
          </p>
        </div>

        <div className="relative">
          
          <div className=" md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-primary border-dashed z-0 opacity-50" />

          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={event.id} 
                  className={`group relative flex ${isEven ? 'flex-col' : 'flex-col-reverse'} md:flex-row items-center justify-between w-full md:min-h-[400px] hover:bg-surface/30 rounded-3xl transition-colors duration-500`}
                >
                  
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-white group-hover:scale-125 group-hover:bg-green-600 transition-transform duration-300 shadow-md" />

                  <div className="w-full md:w-[45%] flex flex-col md:items-end p-4 md:p-0">
                    {isEven ? (
                      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                        <Image
                          src={event.image}
                          alt={`Event ${event.yearPrefix}${event.yearSuffix}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      </div>
                    ) : (
                      <div className="flex flex-col md:items-end text-left md:text-right mt-6 md:mt-0 transition-transform duration-500 group-hover:-translate-x-2">
                        <div className="flex items-baseline mb-2 gap-1">
                          <span className="font-sans font-bold text-4xl md:text-6xl text-foreground group-hover:text-primary transition-colors duration-300">
                            {event.yearPrefix}
                          </span>
                          <span className="font-serif font-bold italic text-4xl md:text-6xl text-primary group-hover:text-foreground transition-colors duration-300">
                            {event.yearSuffix}
                          </span>
                        </div>
                        <p className="font-serif font-medium text-xl md:text-2xl text-foreground max-w-xs group-hover:text-foreground/80 transition-colors">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-[45%] flex flex-col md:items-start p-4 md:p-0">
                    {isEven ? (
                      <div className="flex flex-col items-start mt-6 md:mt-0 pl-0 md:pl-10 transition-transform duration-500 group-hover:translate-x-2">
                        <div className="flex items-baseline mb-2 gap-1">
                          <span className="font-sans font-bold text-4xl md:text-6xl text-foreground group-hover:text-primary transition-colors duration-300">
                            {event.yearPrefix}
                          </span>
                          <span className="font-serif font-bold italic text-4xl md:text-6xl text-primary group-hover:text-foreground transition-colors duration-300">
                            {event.yearSuffix}
                          </span>
                        </div>
                        <p className="font-serif font-medium text-xl md:text-2xl text-foreground max-w-xs group-hover:text-foreground/80 transition-colors">
                          {event.description}
                        </p>
                      </div>
                    ) : (
                      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                        <Image
                          src={event.image}
                          alt={`Event ${event.yearPrefix}${event.yearSuffix}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      </div>
                    )}
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