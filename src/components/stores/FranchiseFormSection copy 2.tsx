"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function FranchiseFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    about: "",
    location: "",
    storeCount: "",
    openTime: "",
    capital: "",
    source: "",
    gdprConsent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gdprConsent) {
      alert("Please accept GDPR consent");
      return;
    }

    try {
      const res = await fetch("http://localhost:3006/api/franchise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Franchise form submitted successfully");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section className="py-20 bg-background overflow-hidden" id="franchise-form">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-sans">
                Trygghet &{" "}
                <span className="font-sans not-italic text-primary font-normal text-foreground">
                  Säkerhet
                </span>
              </h2>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input id="name" onChange={handleChange} required className="input" />
                <input id="company" onChange={handleChange} className="input" />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input id="phone" onChange={handleChange} required className="input" />
                <input id="email" type="email" onChange={handleChange} required className="input" />
              </div>

              <textarea id="about" onChange={handleChange} required className="input" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input id="location" onChange={handleChange} required className="input" />

                <select id="storeCount" onChange={handleChange} required className="input">
                  <option value="" disabled />
                  <option value="1">1</option>
                  <option value="2-3">2-3</option>
                  <option value="4+">4+</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <select id="openTime" onChange={handleChange} required className="input">
                  <option value="" disabled />
                  <option value="asap">Snarast</option>
                  <option value="3m">3 månader</option>
                  <option value="6m">6 månader</option>
                </select>

                <select id="capital" onChange={handleChange} required className="input">
                  <option value="" disabled />
                  <option value="low">100k - 500k</option>
                  <option value="med">500k - 1M</option>
                  <option value="high">1M+</option>
                </select>
              </div>

              <select id="source" onChange={handleChange} required className="input">
                <option value="" disabled />
                <option value="social">Social Media</option>
                <option value="search">Search</option>
                <option value="friend">Friend</option>
              </select>

              <label className="flex gap-3 mt-2">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span className="text-sm">
                  Godkänner du att vi sparar dina uppgifter i enlighet med GDPR?
                </span>
              </label>

              <button type="submit" className="group bg-[#438931] text-white rounded-full py-3">
                Skicka
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative w-full h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/assets/Store Images/Saxnäs 21-8/IMG_1161.JPG"
              alt="24SJU Store"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
