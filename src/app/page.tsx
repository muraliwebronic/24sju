import Hero from '@/components/home/Hero'
import JutsImg from '@/components/home/JutsImg'
import NewsSection from '@/components/home/NewsSection'
import SocialMediaSection from '@/components/home/SocialMediaSection'
import StoreLocations from '@/components/home/StoreLocations'
import TimelineSection from '@/components/home/TimelineSection'
import WhySection from '@/components/home/WhySection'
import React from 'react'

export default function page() {
  return (
   <>
   <Hero />
   <StoreLocations />
   <JutsImg />
   <TimelineSection />
   <NewsSection />
   <WhySection />
   <SocialMediaSection />
   </>
  )
}
