"use client";
import Layout from "@/app/layout";
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
import bgGif from "@/assets/videos/sectionOneVedio.gif";
import AyurvedaSection from "@/components/layout/HomeSection/AyurvedaSection";
import PrevektaSection from "@/components/layout/HomeSection/PrevektaSection";
import { useEffect } from "react";
import MantraSection from "@/components/layout/HomeSection/MantraSection";
import AyurvedaPlatform from "@/components/layout/HomeSection/AyurvedaPlatform";

const Home: React.FC = () => {

   useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Window width:", window.innerWidth);
    }
  }, []);

  return (
    <>
      {/* <Layout> */}

      {/* Story Sections - Use multiple instances with different props */}
      <StorySection
        content="We unify care, career, commerce, and community through a single, tech-enabled platform that promotes Ayurveda with authenticity, innovation, and inclusivity."
        background={bgGif.src} // ✅ works with Next.js Image imports
      />
      <AyurvedaSection/>
      <Hero />
      <PrevektaSection/>
      <ForPatients />
      <ForPhysicians />
      <ForProducts />
      <ForPublic />
      <MovementSection />
      <AyurvedaPlatform />
      <MantraSection/>
      <Testimonials />
      <FranchiseSection />
      <ContactSection />
      {/* Add remaining sections like Mantra, etc. */}
      {/* </Layout> */}
    </>
  );
};

export default Home;