
import ContactSection from "@/components/layout/HomeSection/ContactSection";
import ForPatients from "@/components/layout/HomeSection/ForPatients";
import ForPhysicians from "@/components/layout/HomeSection/ForPhysicians";
import ForProducts from "@/components/layout/HomeSection/ForProducts";
import ForPublic from "@/components/layout/HomeSection/ForPublic";
import FranchiseSection from "@/components/layout/HomeSection/FranchiseSection";
import Hero from "@/components/layout/HomeSection/Hero";
import MovementSection from "@/components/layout/HomeSection/MovementSection";
import StorySection from "@/components/layout/HomeSection/StorySection";
import Testimonials from "@/components/layout/HomeSection/Testimonials";
import AyurvedaSection from "@/components/layout/HomeSection/AyurvedaSection";
import PrevektaSection from "@/components/layout/HomeSection/PrevektaSection";
import MantraSection from "@/components/layout/HomeSection/MantraSection";
import AyurvedaPlatform from "@/components/layout/HomeSection/AyurvedaPlatform";

const Home: React.FC = () => {

  return (
    <>
      {/* Story Sections - Use multiple instances with different props */}
      <StorySection/>
      <AyurvedaSection/>
      <Hero />
      <PrevektaSection/>
      <ForPatients />
      <ForPhysicians />
      {/* Remaining */}
      <ForProducts />
      {/* Remaining */}
      <ForPublic />
      <MovementSection />
      <AyurvedaPlatform />
      <MantraSection/>
      <Testimonials />
      <FranchiseSection />
      <ContactSection />
    </>
  );
};

export default Home;