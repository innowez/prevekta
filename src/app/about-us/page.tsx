import Image from "next/image";
import React from "react";
import AboutBg from "../../assets/images/about-bg.png";
import AbGrid1 from "../../assets/images/abgrid1.png";
import FranchiseSection from "@/components/layout/HomeSection/FranchiseSection";
import ContactSection from "@/components/layout/HomeSection/ContactSection";

function page() {
  return (
    <>
      <section className="w-full h-screen p-4">
        <div className="relative rounded-2xl lg:rounded-[28px] h-[602px] lg:h-[568px]">
          <Image
            src={AboutBg}
            alt="contact-bg"
            className="w-full h-[602px] lg:h-[568px] object-cover rounded-2xl lg:rounded-[28px] "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000066] rounded-2xl lg:rounded-[28px]"></div>

          <div className="text-white absolute left-[16px] top-[16px]">
            <h1 className="text-2xl leading-7 font-[Atyp] mb-5">
              Reviving Ayurveda: The Prevekta Approach
            </h1>
            <h2 className="text-base leading-5 font-[Duplet]">
              A modern approach to integrating Ayurveda into contemporary
              healthcare systems, making holistic wellness accessible for all.
            </h2>
          </div>

          <div className="absolute left-[16px] bottom-[16px] right-[16px] bg-[#132D474D] p-4 rounded-xl lg:rounded-2xl">
            <p className="text-white text-base leading-5 font-[Duplet]">
              Prevekta Ayurveda, An Initiative By Viriksham Wellness Pvt. Ltd.,
              Is An Integrated Ayurvedic Ecosystem That Modernizes Traditional
              Healthcare Through Holistic Service, Product, And Digital Models.
              With The Tagline “Thrive Beyond,” It Bridges Ancient Wisdom And
              Modern Wellness, Promoting Ayurveda As An Accessible, Reliable,
              And Evidence-based Lifestyle Healthcare System Rooted In
              Protection, Prevention, And Progression.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="">
          <h1 className="text-2xl text-primary leading-7 font-Atyp mb-4">Mission</h1>
          <p className="text-base text-primary leading-5 font-[Duplet]">To build an ecosystem where Ayurveda, technology, and trust thrive together.</p>
        </div>

        <div>
          <div className="flex">
            
          </div>
        </div>
      </section>
            <FranchiseSection />
      <ContactSection />
    </>
  );
}

export default page;
