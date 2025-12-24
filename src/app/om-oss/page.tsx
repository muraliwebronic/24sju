import Hero from '@/components/aboutus/Hero'
import OurTeamSection from '@/components/aboutus/OurTeamSection'
import StoreOwnersSection from '@/components/aboutus/StoreOwnersSection'
import StoresMapSection from '@/components/aboutus/StoresMapSection'
import StoreLocations from '@/components/home/StoreLocations'
import React from 'react'

export default function page() {
  return (
    <>
    <Hero />
    <StoresMapSection />
    <StoreOwnersSection />
    <OurTeamSection />
    </>
  )
}
