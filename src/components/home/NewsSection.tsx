import React from "react";
import Image from "next/image";

const newsArticles = [
  {
    id: 1,
    date: "15 03 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: "/assets/Store Images/Högsby/P1130274.JPG",
  },
  {
    id: 2,
    date: "15 03 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: "/assets/Store Images/Hånger 21-5/P1120966.JPG",
  },
  {
    id: 3,
    date: "15 03 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    image: "/assets/Store Images/Hånger 21-5/P1130002.JPG",
  },
];

export default function NewsSection() {
  return (
    <section className="py-10 bg-background container-padding">
      <div className="container mx-auto ">
        <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl">
            <span className="font-sans font-bold text-foreground">News </span>
            <span className="font-serif font-bold italic text-primary">
              Articles
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div
              key={article.id}
              className="flex flex-col md:mx-auto group cursor-pointer animate-[fadeInUp_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative  flex-1  rounded-4xl overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover object-fill transition-transform duration-700 group-hover:scale-105 z-0"
                />

                <div className="absolute bottom-6 left-6 z-20">
                  <div className="border border-white/60 bg-black/20 backdrop-blur-sm rounded-full px-6 py-2">
                    <span className="font-serif italic text-white text-sm tracking-wider">
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center text-center px-4">
                <h3 className="font-sans font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>

                <button className="mt-4 flex items-center gap-3 group/btn">
                  <span className="font-serif italic text-primary text-lg group-hover/btn:underline">
                    Read more
                  </span>
                  <div className="w-6 h-6 rounded-full border border-primary flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-primary group-hover/btn:text-white text-primary">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M1 5H11M11 5L7 1M11 5L7 9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
