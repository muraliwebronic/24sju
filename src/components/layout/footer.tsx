import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background pt-16 pb-10 container-padding">
      <div className="container mx-auto ">
        {/* Top Divider Line using your specific variable */}
        <div className="w-full h-0.5 bg-beige-muted mb-14"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-20">
          {/* 1. Logo & Identity Section */}
          <div className="flex items-center gap-5">
            {/* Logo Mockup to match design */}
            <div className="relative w-15 h-15 bg-black rounded-full flex items-center justify-center overflow-hidden">
              <img src="/assets/24sju 2000.png" alt="24sju" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-2xl text-foreground leading-tight">
                <span className="font-sans font-bold">24SJU </span>
                <span className="font-serif italic font-medium">
                  Snabbköp Sverige
                </span>
              </h3>
              <p className="font-sans text-sm font-medium text-foreground/60 mt-2">
                Org.nr. 5592576317
              </p>
            </div>
          </div>

          {/* 2. Address Section */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-bold italic text-2xl text-foreground">
              Address
            </h4>
            <div className="flex items-start gap-3">
              {/* Location Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary mt-1 flex-shrink-0"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div className="font-sans text-foreground/80 leading-relaxed">
                <p>123 Demo Street</p>
                <p>Anywhere city, 12345</p>
              </div>
            </div>
          </div>

          {/* 3. Contact Section */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif font-bold italic text-2xl text-foreground">
              Kontakt
            </h4>

            {/* Email */}
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary flex-shrink-0"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a
                href="mailto:contact@24sju.com"
                className="font-sans text-foreground/80 hover:text-primary transition-colors"
              >
                contact@24sju.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary flex-shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a
                href="tel:+46123456789"
                className="font-sans text-foreground/80 hover:text-primary transition-colors"
              >
                +46 123 456 789
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Links & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            <Link
              href="#"
              className="font-sans text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-sans text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className="font-sans text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>

          <p className="font-sans text-sm text-foreground/70">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
