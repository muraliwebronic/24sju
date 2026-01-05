"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

// --- Types & Interfaces ---

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  storeLocation: string;
  source: string;
}

// Errors object keys must match FormData keys, values are error strings
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

type ModalType = 'success' | 'error';

interface ModalState {
  isOpen: boolean;
  type: ModalType;
  message: string;
}

interface StatusModalProps {
  isOpen: boolean;
  type: ModalType;
  message: string;
  onClose: () => void;
}

// --- Components ---

const StatusModal: React.FC<StatusModalProps> = ({ isOpen, type, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative animate-[scaleIn_0.3s_ease-out]">
        
        {/* Icon based on type */}
        <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
          type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}>
          {type === 'success' ? (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <h3 className="text-2xl font-sans font-bold text-foreground mb-2">
          {type === 'success' ? 'Success!' : 'Error'}
        </h3>
        <p className="text-foreground/70 mb-8 font-sans">
          {message}
        </p>

        <button
          onClick={onClose}
          className="bg-primary hover:bg-[#3a782b] text-white rounded-xl px-8 py-3 font-sans font-medium transition-all w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function ContactFormSection() {
  const [loading, setLoading] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    storeLocation: "",
    source: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: 'success',
    message: ''
  });

  // --- Validation Logic ---
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.storeLocation.trim()) {
      newErrors.storeLocation = "Location is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // --- Event Handlers ---

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    
    // Map the textarea id="location" to state property "storeLocation"
    // Use type assertion to tell TS that 'key' is a valid key of ContactFormData
    const key = id === "location" ? "storeLocation" : (id as keyof ContactFormData);

    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Clear error for this field when user types
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; 
    }

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
        setModal({
          isOpen: true,
          type: 'success',
          message: "Thanks! We have received your message and will contact you shortly."
        });
        
        // Reset Form
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          storeLocation: "",
          source: "",
        });
        setErrors({});
      } else {
        setModal({
          isOpen: true,
          type: 'error',
          message: data.error || "Something went wrong. Please try again."
        });
      }
    } catch (error) {
      console.error("API Error:", error);
      setModal({
        isOpen: true,
        type: 'error',
        message: "Failed to connect to the server. Please check your connection."
      });
    } finally {
      setLoading(false);
    }
  };

  // --- Render ---

  return (
    <>
      <StatusModal 
        isOpen={modal.isOpen} 
        type={modal.type} 
        message={modal.message} 
        onClose={() => setModal(prev => ({ ...prev, isOpen: false }))} 
      />

      <section
        className="py-20 bg-background overflow-hidden container-padding"
        id="contact-form"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* LEFT COLUMN: Form */}
            <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-normal text-foreground mb-2">
                  Ready to Take the First Step?
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-5xl font-serif italic font-bold text-primary">
                  Get in Touch With Us
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-sm font-medium text-foreground/70">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.name 
                          ? "border border-red-500 focus:ring-red-200" 
                          : "focus:ring-primary/20 border border-transparent"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs pl-2 font-sans">{errors.name}</span>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-sans text-sm font-medium text-foreground/70">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 border border-transparent"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-sans text-sm font-medium text-foreground/70">
                      Phone number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.phone
                          ? "border border-red-500 focus:ring-red-200" 
                          : "focus:ring-primary/20 border border-transparent"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs pl-2 font-sans">{errors.phone}</span>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-sm font-medium text-foreground/70">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email
                          ? "border border-red-500 focus:ring-red-200" 
                          : "focus:ring-primary/20 border border-transparent"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs pl-2 font-sans">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Row 3: Textarea (Location) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="font-sans text-sm font-medium text-foreground/70">
                    Where would you like to open your store?*
                  </label>
                  <textarea
                    id="location" // mapped to storeLocation in handleChange
                    rows={3}
                    value={formData.storeLocation}
                    onChange={handleChange}
                    className={`w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.storeLocation
                        ? "border border-red-500 focus:ring-red-200" 
                        : "focus:ring-primary/20 border border-transparent"
                    }`}
                  ></textarea>
                  {errors.storeLocation && (
                    <span className="text-red-500 text-xs pl-2 font-sans">{errors.storeLocation}</span>
                  )}
                </div>

                {/* Row 4: Select Dropdown */}
                <div className="flex flex-col gap-2 mb-4">
                  <label htmlFor="source" className="font-sans text-sm font-medium text-foreground/70">
                    How did you hear about us?
                  </label>
                  <div className="relative">
                    <select
                      id="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full bg-[#FEFBF9] rounded-2xl px-5 py-4 font-sans text-foreground appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 cursor-pointer border border-transparent"
                    >
                      <option value="" disabled className="text-gray-400"></option>
                      <option value="social">Social Media</option>
                      <option value="search">Search Engine</option>
                      <option value="friend">Friend/Family</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg width="16" height="16" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 7h16M11 1l6 6-6 6" />
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN: Image */}
            <div className="relative h-[400px] lg:h-full min-h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-xl group animate-[fadeInUp_1s_ease-out_forwards]">
              <Image
                src="/assets/Store Images/Saxnäs 21-8/IMG_1161.JPG"
                alt="24SJU Saxnäs Store"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}