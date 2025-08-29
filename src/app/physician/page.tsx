import ContactSection from "@/components/layout/HomeSection/ContactSection"
import ForSenior from "@/components/layout/Physician/ForSenior"
import HeroSection from "@/components/layout/Physician/HeroSection"
import JuniorDocter from "@/components/layout/Physician/JuniorDocter"

function page() {
  return (
    <>
    <HeroSection />
    <ForSenior />
    <JuniorDocter />
    <ContactSection />
    </>
  )
}

export default page