import BlogSeries from "@/components/layout/ForPeople/BlogSeries"
import CaseStudies from "@/components/layout/ForPeople/CaseStudies"
import HeroSection from "@/components/layout/ForPeople/HeroSection"
import ResearchArticles from "@/components/layout/ForPeople/ResearchArticles"
import VideoSection from "@/components/layout/ForPeople/VideoSection"
import ContactSection from "@/components/layout/HomeSection/ContactSection"

function page() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <BlogSeries />
      <ResearchArticles />
      <CaseStudies /> 
      <ContactSection />
    </>
  )
}

export default page