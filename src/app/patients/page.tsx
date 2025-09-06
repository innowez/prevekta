import ContactSection from '@/components/layout/HomeSection/ContactSection'
import Testimonials from '@/components/layout/HomeSection/Testimonials'
import HeroSection from '@/components/layout/Patients/HeroSection'
import PrevektaFor from '@/components/layout/Patients/PrevektaFor'
import { ReadyToStart } from '@/components/layout/Patients/ReadyToStart'
import HealingPrograms from '@/components/layout/Patients/HealingPrograms'
import PrevektavsPain from '@/components/layout/Patients/PrevektavsPain'

function page() {
  return (
    <>
    <HeroSection />
    <PrevektavsPain />
    <HealingPrograms />
    <PrevektaFor />
    <ReadyToStart />
    <Testimonials />
    <ContactSection />
    </>
  )
}

export default page