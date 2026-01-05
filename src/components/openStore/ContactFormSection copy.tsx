"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    storeLocation: "", // Backend expects 'storeLocation'
    source: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    // Map the textarea id="location" to state "storeLocation"
    const key = id === "location" ? "storeLocation" : id;

    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3006/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thanks! We have received your message.");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          storeLocation: "",
          source: "",
        });
      } else {
        alert("Error: " + (data.error || "Something went wrong"));
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-20 bg-background overflow-hidden container-padding"
      id="contact-form"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* =========================
              LEFT COLUMN: Form
             ========================= */}
          <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-normal text-foreground mb-2">
                Ready to Take the First Step?
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-5xl font-serif italic font-bold text-primary">
                Get in Touch With Us
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-sans text-sm font-medium text-foreground/70"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="company"
                    className="font-sans text-sm font-medium text-foreground/70"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="font-sans text-sm font-medium text-foreground/70"
                  >
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-sans text-sm font-medium text-foreground/70"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 3: Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="location"
                  className="font-sans text-sm font-medium text-foreground/70"
                >
                  Where would you like to open your store?*
                </label>
                <textarea
                  id="location"
                  rows={3}
                  required
                  value={formData.storeLocation}
                  onChange={handleChange}
                  className="w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Row 4: Select Dropdown */}
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="source"
                  className="font-sans text-sm font-medium text-foreground/70"
                >
                  How did you hear about us?
                </label>
                <div className="relative">
                  <select
                    id="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    <option
                      value=""
                      disabled
                      className="text-gray-400"
                    ></option>
                    <option value="social">Social Media</option>
                    <option value="search">Search Engine</option>
                    <option value="friend">Friend/Family</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 1l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group bg-primary hover:bg-[#3a782b] disabled:opacity-70 text-white rounded-full pl-8 pr-2 py-2 flex items-center gap-6 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span className="font-serif italic font-bold text-xl pt-1">
                    {loading ? "Sending..." : "Skicka"}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 18 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 7h16M11 1l6 6-6 6" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* =========================
              RIGHT COLUMN: Image
             ========================= */}
          <div className="relative h-[400px] lg:h-full min-h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-xl group animate-[fadeInUp_1s_ease-out_forwards]">
            <Image
              src="./assets/Store Images/Saxnäs 21-8/IMG_1161.JPG"
              alt="24SJU Saxnäs Store"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
