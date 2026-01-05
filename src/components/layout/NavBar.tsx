"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Startsida', href: '/' },
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Så fungerar det', href: '/sa-fungerar-det' },
    { name: 'Öppna butik', href: '/oppna-butik' },
    { name: 'Our Stores', href: '/stores' },
  ];

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 500);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-5 md:px-10 relative z-50 bg-transparent">
        
        <button 
          aria-label="Menu" 
          onClick={toggleMenu}
          className="p-2 hover:opacity-70 transition-opacity z-50"
        >
          {isOpen ? (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <line x1="18" y1="6" x2="6" y2="18"></line>
               <line x1="6" y1="6" x2="18" y2="18"></line>
             </svg>
          ) : (
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="2.5" fill="black"/>
              <rect y="6.5" width="24" height="2.5" fill="black"/>
              <rect y="13" width="18" height="2.5" fill="black"/>
            </svg>
          )}
        </button>

        <div className="flex items-center gap-2 z-50">
          <div className="relative w-10 h-10 bg-black rounded-full flex items-center justify-center overflow-hidden">
            <img src="./assets/24sju 2000.png" alt="24sju" className="object-contain w-full h-full" />
          </div>
          <span className=" italic font-sans font-bold text-lg tracking-wide">
            24SJU <span className="  font-serif italic font-normal text-sm ml-1 opacity-80">Snabbköp</span>
          </span>
        </div>

        <button aria-label="Search" className="p-2 hover:opacity-70 transition-opacity z-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </nav>

      <div 
        className={`fixed inset-0 z-40 bg-white h-screen w-screen overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isOpen && !isAnimating ? 'opacity-100 translate-y-0 visible' : ''}
          ${!isOpen && !isAnimating ? 'opacity-0 -translate-y-full invisible pointer-events-none' : ''}
          ${isAnimating ? 'opacity-0 -translate-y-full' : ''}
        `}
      >
          
          <div className="h-[80px] w-full flex-shrink-0"></div>

          <div className="flex-1 max-w-7xl mx-auto w-full px-6 pb-10 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start md:items-center h-full">
            
            <div className={`flex flex-col gap-6 md:gap-8 justify-start pt-10 md:pt-0 md:justify-center transition-all duration-700 delay-100 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={toggleMenu}
                    className={`group flex items-center gap-4 transition-colors duration-300
                      ${isActive 
                        ? 'text-4xl md:text-6xl font-serif italic font-bold text-black' 
                        : 'text-4xl md:text-5xl font-sans font-bold text-gray-300 hover:text-gray-500'
                      }
                    `}
                  >
                    {isActive && (
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="w-6 h-10 md:w-8 md:h-12">
                          <path d="M2 2L20 20L2 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                    {link.name}
                  </Link>
                );
              })}

            </div>

            <div className={`hidden lg:flex relative h-full max-h-[600px] w-full flex-col gap-4 transition-all duration-1000 delay-200 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
              <div className="relative w-full h-[55%] rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 group">
                <Image
                  src="./assets/Store Images/Furulund 22-5/Furulund/P1130074.JPG"
                  alt="24SJU Store"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 h-[45%]">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 group">
                  <Image
                    src="./assets/Store Images/store images/SVINNINGE-1024x997.jpeg"
                    alt="Store owners"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 group">
                  <Image
                    src="./assets/Store Images/store images/UCKLUM.jpg"
                    alt="Store interior"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
      </div>
    </>
  );
}