import BecomeStoreOwnerSection from '@/components/how-it-works/BecomeStoreOwnerSection'
import FAQSection from '@/components/how-it-works/FAQSection'
import Hero from '@/components/how-it-works/Hero'
import HowToShopSection from '@/components/how-it-works/HowToShopSection'
import SafetySecuritySection from '@/components/how-it-works/SafetySecuritySection'
import React from 'react'

export default function page() {
  return (
    <>
    <Hero />
    <BecomeStoreOwnerSection />
    <HowToShopSection />
    <SafetySecuritySection />
    <FAQSection />
    </>
  )
}
