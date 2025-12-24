
"use client";
import React from "react";
import NavBar from "../layout/NavBar";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      {/* Navigation Bar */}
      <NavBar />

       <ContactSection />
    </div>
  );
}



function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* =========================
              LEFT COLUMN: Contact Form (Span 3/5 on desktop)
             ========================= */}
          <div className="lg:col-span-3 flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
            
            {/* Heading */}
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl">
                <span className="font-sans font-bold text-foreground">Contact </span>
                <span className="font-serif font-bold italic text-primary">Us</span>
              </h2>
              <p className="mt-4 font-sans text-foreground/80 text-lg max-w-md mx-auto lg:mx-0">
                Got any questions? Send us a message and we will get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-xs font-bold text-foreground/60 uppercase tracking-wider">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your full name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-sans text-foreground placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs font-bold text-foreground/60 uppercase tracking-wider">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email address"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-sans text-foreground placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sans text-xs font-bold text-foreground/60 uppercase tracking-wider">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Your phone number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-sans text-foreground placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-sans text-xs font-bold text-foreground/60 uppercase tracking-wider">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Select a subject"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-sans text-foreground placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-xs font-bold text-foreground/60 uppercase tracking-wider">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-sans text-foreground placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button type="submit" className="group bg-primary hover:bg-[#3a782b] text-white rounded-full pl-8 pr-2 py-2 flex items-center gap-4 transition-all duration-300">
                  <span className="font-serif italic font-medium text-lg pt-1">
                    Send Message
                  </span>
                  <div className="bg-white/20 group-hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M1 7H17M17 7L11 1M17 7L11 13" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>

            </form>
          </div>

          {/* =========================
              RIGHT COLUMN: Image & Info Info (Span 2/5 on desktop)
             ========================= */}
          <div className="lg:col-span-2 h-[500px] lg:h-full lg:min-h-[700px] relative rounded-[2.5rem] overflow-hidden shadow-xl animate-[fadeInUp_1s_ease-out_forwards] group">
            {/* Background Image */}
            {/* Replace '/assets/contact-image.jpg' with the actual path to the image seen in image_12.png */}
            <Image
              src="/assets/contact-image.jpg" 
              alt="24SJU Storefront"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
              
              {/* Address Block */}
              <div className="mb-8">
                <h3 className="font-serif font-bold italic text-2xl md:text-3xl mb-3 text-primary">
                  Address
                </h3>
                <address className="font-sans text-lg md:text-xl leading-relaxed not-italic opacity-90">
                  Stora Gatan 123<br />
                  123 45 Staden<br />
                  Sverige
                </address>
              </div>

              {/* Contact Block */}
              <div>
                <h3 className="font-serif font-bold italic text-2xl md:text-3xl mb-3 text-primary">
                  Contact
                </h3>
                <div className="font-sans text-lg md:text-xl leading-relaxed opacity-90 flex flex-col gap-1">
                  <a href="tel:+46123456789" className="hover:text-primary transition-colors">
                    +46 123 456 789
                  </a>
                  <a href="mailto:info@24sju.se" className="hover:text-primary transition-colors">
                    info@24sju.se
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}