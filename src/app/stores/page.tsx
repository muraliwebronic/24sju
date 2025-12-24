import FranchiseFormSection from "@/components/stores/FranchiseFormSection";
import Hero from "@/components/stores/Hero";
import StoreLocationsSection from "@/components/stores/StoreLocationsSection";
import TestimonialsSection from "@/components/stores/TestimonialsSection";
import React from "react";

export default function page() {
  return (
    <>
      <Hero />
      <TestimonialsSection />
      <StoreLocationsSection />
      <FranchiseFormSection />
    </>
  );
}
