import Image from "next/image";
import React from "react";
import GreenWomen from "@/assets/images/greenwomen.png";

function HeroSection() {
  return (
    <div>
      <div className="h-[622px] w-full relative ">
        <Image
          src={GreenWomen}
          alt="Branded Cleno"
          className="w-full h-full object-cover z-0 absolute top-0 left-0"
        />
        <div className="flex flex-col justify-between relative h-full z-10 py-7 px-4">
            <div>
          <h1 className="mb-4 text-white text-[28px] font-semibold font-[Atyp] leading-8"> 
            Modern Ayurveda,<br />
            Made for You
          </h1>
          <p className="text-white text-base font-[Duplet] leading-5">Because Your Body Deserves to Heal, <br />Not Just Cope</p>
          </div>

          <div>
            <p className="mb-1 text-base text-white font-[Duplet] leading-5" >At Prevekta, we believe that true healing starts with the right guidance not just a one-time consultation.</p>
            <p className="text-base text-white font-[Duplet] leading-5" >We connect you with a growing network of trusted Ayurveda doctors across specialties, helping you make clear, informed decisions about your health and well-being.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default HeroSection;
