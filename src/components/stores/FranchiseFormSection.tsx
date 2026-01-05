"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

// --- Interfaces & Types ---

interface FranchiseFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  about: string;
  location: string;
  storeCount: string;
  openTime: string;
  capital: string;
  source: string;
  gdprConsent: boolean;
}

type FormErrors = Partial<Record<keyof FranchiseFormData, string>>;

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

// --- Popup Modal Component ---

const StatusModal: React.FC<StatusModalProps> = ({ isOpen, type, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center relative animate-[scaleIn_0.3s_ease-out]">
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
        <p className="text-foreground/70 mb-8 font-sans">{message}</p>
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

// --- Main Form Component ---

export default function FranchiseFormSection() {
  const [loading, setLoading] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<FranchiseFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    about: '',
    location: '',
    storeCount: '',
    openTime: '',
    capital: '',
    source: '',
    gdprConsent: false
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

    if (!formData.name.trim()) { newErrors.name = "Name is required"; isValid = false; }
    if (!formData.phone.trim()) { newErrors.phone = "Phone is required"; isValid = false; }
    
    if (!formData.email.trim()) { 
      newErrors.email = "Email is required"; 
      isValid = false; 
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) { 
      newErrors.email = "Invalid email format"; 
      isValid = false; 
    }
    
    if (!formData.about.trim()) { newErrors.about = "Please tell us a bit about yourself"; isValid = false; }
    if (!formData.location.trim()) { newErrors.location = "Location is required"; isValid = false; }
    
    // Select dropdowns
    if (!formData.storeCount) { newErrors.storeCount = "Selection required"; isValid = false; }
    if (!formData.openTime) { newErrors.openTime = "Selection required"; isValid = false; }
    if (!formData.capital) { newErrors.capital = "Selection required"; isValid = false; }
    if (!formData.source) { newErrors.source = "Selection required"; isValid = false; }

    // GDPR Check
    if (!formData.gdprConsent) {
        newErrors.gdprConsent = "You must accept the terms";
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // --- Handlers ---

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    
    // Check if target is checkbox to safely access .checked
    const isCheckbox = type === 'checkbox';
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

    // Map frontend IDs to state keys
    let key = id;
    if (id === 'count') key = 'storeCount';
    if (id === 'time') key = 'openTime';
    if (id === 'gdpr') key = 'gdprConsent';

    setFormData(prev => ({
      ...prev,
      [key]: isCheckbox ? checked : value
    }));

    // Clear specific error
    if (errors[key as keyof FranchiseFormData]) {
      setErrors(prev => ({ ...prev, [key]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3006/api/franchise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setModal({
          isOpen: true,
          type: 'success',
          message: "Application sent successfully! We will review it and get back to you."
        });
        // Reset form
        setFormData({
          name: '', company: '', phone: '', email: '', about: '',
          location: '', storeCount: '', openTime: '', capital: '', source: '', gdprConsent: false
        });
        setErrors({});
      } else {
        setModal({
          isOpen: true,
          type: 'error',
          message: data.error || "Submission failed. Please try again."
        });
      }
    } catch (error) {
      console.error("API Error:", error);
      setModal({
        isOpen: true,
        type: 'error',
        message: "Failed to connect to the server."
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

      <section className="py-20 bg-background overflow-hidden" id="franchise-form">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            
            {/* LEFT COLUMN: Form */}
            <div className="flex flex-col animate-[fadeInUp_0.8s_ease-out_forwards]">
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-sans">
                  Trygghet & <span className="font-sans not-italic text-primary font-normal text-foreground">Säkerhet</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-sans text-sm font-medium text-foreground/70">Namn*</label>
                    <input 
                      type="text" id="name" value={formData.name} onChange={handleChange} 
                      className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 transition-all ${
                        errors.name ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                      }`} 
                    />
                    {errors.name && <span className="text-red-500 text-xs pl-2">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-sans text-sm font-medium text-foreground/70">Företag/Förening</label>
                    <input 
                      type="text" id="company" value={formData.company} onChange={handleChange} 
                      className="w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all" 
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-sans text-sm font-medium text-foreground/70">Telefonnr*</label>
                    <input 
                      type="tel" id="phone" value={formData.phone} onChange={handleChange} 
                      className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 transition-all ${
                        errors.phone ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                      }`} 
                    />
                    {errors.phone && <span className="text-red-500 text-xs pl-2">{errors.phone}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-sans text-sm font-medium text-foreground/70">E-post*</label>
                    <input 
                      type="email" id="email" value={formData.email} onChange={handleChange} 
                      className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 transition-all ${
                        errors.email ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                      }`} 
                    />
                    {errors.email && <span className="text-red-500 text-xs pl-2">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 3: Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="about" className="font-sans text-sm font-medium text-foreground/70">
                    Berätta lite om dig själv, vad jobbar du med, varför vill du starta franchise?*
                  </label>
                  <textarea 
                    id="about" rows={3} value={formData.about} onChange={handleChange} 
                    className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.about ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                    }`}
                  ></textarea>
                  {errors.about && <span className="text-red-500 text-xs pl-2">{errors.about}</span>}
                </div>

                {/* Row 4: Location & Count */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="location" className="font-sans text-sm font-medium text-foreground/70">Vart vill du öppna?*</label>
                    <input 
                      type="text" id="location" value={formData.location} onChange={handleChange} 
                      className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground focus:outline-none focus:ring-1 transition-all ${
                        errors.location ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                      }`} 
                    />
                    {errors.location && <span className="text-red-500 text-xs pl-2">{errors.location}</span>}
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="count" className="font-sans text-sm font-medium text-foreground/70">Antal butiker*</label>
                    <div className="relative">
                      <select 
                        id="count" value={formData.storeCount} onChange={handleChange} 
                        className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground appearance-none focus:outline-none focus:ring-1 cursor-pointer ${
                          errors.storeCount ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                        }`}
                      >
                        <option value="" disabled></option>
                        <option value="1">1</option>
                        <option value="2-3">2-3</option>
                        <option value="4+">4+</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                          <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l6 6 6-6"/></svg>
                      </div>
                    </div>
                    {errors.storeCount && <span className="text-red-500 text-xs pl-2">{errors.storeCount}</span>}
                  </div>
                </div>

                {/* Row 5: Time & Capital */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="time" className="font-sans text-sm font-medium text-foreground/70">När vill du öppna?*</label>
                    <div className="relative">
                      <select 
                        id="time" value={formData.openTime} onChange={handleChange} 
                        className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground appearance-none focus:outline-none focus:ring-1 cursor-pointer ${
                          errors.openTime ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                        }`}
                      >
                        <option value="" disabled></option>
                        <option value="asap">Snarast</option>
                        <option value="3m">Inom 3 månader</option>
                        <option value="6m">Inom 6 månader</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                          <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l6 6 6-6"/></svg>
                      </div>
                    </div>
                    {errors.openTime && <span className="text-red-500 text-xs pl-2">{errors.openTime}</span>}
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="capital" className="font-sans text-sm font-medium text-foreground/70">Hur mycket kapital har du?*</label>
                    <div className="relative">
                      <select 
                        id="capital" value={formData.capital} onChange={handleChange} 
                        className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground appearance-none focus:outline-none focus:ring-1 cursor-pointer ${
                          errors.capital ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                        }`}
                      >
                        <option value="" disabled></option>
                        <option value="low">100k - 500k</option>
                        <option value="med">500k - 1M</option>
                        <option value="high">1M+</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                          <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l6 6 6-6"/></svg>
                      </div>
                    </div>
                    {errors.capital && <span className="text-red-500 text-xs pl-2">{errors.capital}</span>}
                  </div>
                </div>

                {/* Row 6: Source */}
                <div className="flex flex-col gap-2 relative">
                    <label htmlFor="source" className="font-sans text-sm font-medium text-foreground/70">Hur hörde du talas om oss?*</label>
                    <div className="relative">
                      <select 
                        id="source" value={formData.source} onChange={handleChange} 
                        className={`w-full bg-[#FEFBF9] rounded-xl px-5 py-3.5 font-sans text-foreground appearance-none focus:outline-none focus:ring-1 cursor-pointer ${
                          errors.source ? "border border-red-500 focus:ring-red-200" : "focus:ring-primary/30"
                        }`}
                      >
                        <option value="" disabled></option>
                        <option value="social">Social Media</option>
                        <option value="search">Search Engine</option>
                        <option value="friend">Friend/Family</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                          <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l6 6 6-6"/></svg>
                      </div>
                    </div>
                    {errors.source && <span className="text-red-500 text-xs pl-2">{errors.source}</span>}
                </div>

                {/* GDPR Checkbox */}
                <div className="flex flex-col gap-1 mt-2">
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" id="gdpr" checked={formData.gdprConsent} onChange={handleChange} 
                      className={`w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary ${
                        errors.gdprConsent ? "border-red-500 ring-1 ring-red-500" : ""
                      }`} 
                    />
                    <label htmlFor="gdpr" className="font-sans text-sm text-foreground/70 leading-tight">
                      Godkänner du att vi sparar dina uppgifter i enlighet med GDPR?
                    </label>
                  </div>
                  {errors.gdprConsent && <span className="text-red-500 text-xs pl-8">{errors.gdprConsent}</span>}
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="group bg-[#438931] hover:bg-[#356f26] disabled:opacity-70 text-white rounded-full pl-8 pr-2 py-2 flex items-center gap-6 transition-all duration-300 shadow-md"
                  >
                    <span className="font-serif italic font-bold text-xl pt-1">
                      {loading ? 'Skickar...' : 'Skicka'}
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

            {/* RIGHT COLUMN: Image Overlay */}
            <div className="relative w-full h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] overflow-hidden shadow-2xl group animate-[fadeInUp_1s_ease-out_forwards]">
              <Image
                src="./assets/Store Images/Saxnäs 21-8/IMG_1161.JPG" 
                alt="24SJU Store"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <h3 className="text-white text-3xl md:text-4xl font-sans font-bold leading-tight mb-2">
                  Love to hear from you,
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-white text-3xl md:text-4xl font-sans font-bold">
                    Get in Touch
                  </span>
                  <span className="text-3xl md:text-4xl animate-bounce">👋</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}