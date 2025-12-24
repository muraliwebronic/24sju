"use client";

import React from "react";
import Image from "next/image";

// PascalCase for types
type TeamMember = {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  inNeedHelp?: boolean; // Renamed to camelCase for standard convention
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Charbel Bardavud",
    role: "Designation",
    email: "user@gmail.com",
    phone: "+47 123 456 7890",
    image: "./assets/team1.jpeg",
    inNeedHelp: false,
  },
  {
    id: 2,
    name: "Tomas Iunjumblom",
    role: "Designation",
    email: "user@gmail.com",
    phone: "+47 123 456 7890",
    image: "./assets/image000000-cropped.jpg",
    inNeedHelp: true,
  },
  {
    id: 3,
    name: "Cassandra Hallgren Muminovic",
    role: "Designation",
    email: "user@gmail.com",
    phone: "+47 123 456 7890",
    image: "./assets/DSC02359.jpg",
    inNeedHelp: true,
  },
];

export default function OurTeamSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* =================================
            PART 1: Header & Group Photo
           ================================= */}
        <div className="mb-20 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl">
              <span className="font-sans font-bold text-foreground">Our </span>
              <span className="font-serif font-bold italic text-primary">
                Team
              </span>
            </h2>
          </div>

          <div className="relative w-full h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl group">
            <Image
              src="./assets/Rectangle 48.png"
              alt="The entire 24SJU Team"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  gap-12 lg:gap-16  mb-24">
          <div className="w-full flex-1 flex flex-col justify-center pt-4 animate-[fadeInUp_1s_ease-out_forwards]">
            <h3 className="text-4xl md:text-5xl mb-6 leading-[1.1]">
              <span className="font-serif italic font-bold text-primary block mb-1">
                Need help
              </span>
              <span className="font-sans font-bold text-foreground">
                or have questions?
              </span>
            </h3>
            <p className="font-sans text-foreground/70 text-lg leading-relaxed max-w-sm mb-8">
              Our support team is here to assist you with everything you need.
            </p>
            <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
          </div>

          <div className="w-full flex-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {teamMembers.map((member, index) => {
                // LOGIC 1: HIDE if inNeedHelp is false
                if (member.inNeedHelp === false) return null;

                return (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={index}
                    isContact={true} // Show phone/email
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-bold mb-10 text-center">
            Meet the Whole Team
          </h3>

          {/* Flex container to match the horizontal layout in your image */}
          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, index) => {
              return (
                <div key={member.id} className="w-full sm:w-[300px]">
                  <TeamMemberCard
                    member={member}
                    index={index}
                    isContact={false} // Hides contact info to match your image
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({
  member,
  index,
  isContact,
}: {
  member: TeamMember;
  index: number;
  isContact?: boolean;
}) {
  return (
    <div
      className="flex flex-col group animate-[fadeInUp_0.8s_ease-out_forwards]"
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
    >
      {/* Image Card */}
      <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-md mb-5 bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      {/* Info */}
      <div className="flex flex-col px-1">
        {/* Name - Styled to match your image (Green first name, normal last name) */}
        <h4 className={`${isContact ? "" : "text-lg"} font-serif font-bold italic text-primary leading-tight mb-1 group-hover:text-[#3a782b] transition-colors`} >
          {member.name.split(" ")[0]}
          <span className="font-sans not-italic text-foreground ml-1">
            {member.name.split(" ").slice(1).join(" ")}
          </span>
        </h4>

        {/* Role */}
        <span className="font-sans text-xs font-bold text-foreground/50 uppercase tracking-wider mb-4">
          {member.role}
        </span>

        {/* Contact Info - Only renders if isContact is true */}
        {isContact && (
          <div className="flex flex-col gap-1.5 border-t border-gray-100 pt-3">
            <a
              href={`tel:${member.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-foreground/70 text-xs font-medium hover:text-primary transition-colors cursor-pointer group/link"
            >
              {/* Phone Icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/70 group-hover/link:text-primary transition-colors"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {member.phone}
            </a>

            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-foreground/70 text-xs font-medium hover:text-primary transition-colors cursor-pointer group/link"
            >
              {/* Email Icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/70 group-hover/link:text-primary transition-colors"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {member.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
