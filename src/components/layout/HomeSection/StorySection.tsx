import React from "react";
import StorySectionBtn from "./btns/StorySectionBtn";
import Link from "next/link";

const StorySection = () => {

  return (
    <section
      className="relative px-6 h-[600px] w-full bg-cover bg-center"
      // style={{
      //   backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(19, 45, 71, 0) 0%, rgba(19, 45, 71, 0.3) 100%), url(${background})`,
      // }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm w-full">
        <video muted autoPlay loop preload="none" className="w-full h-full object-cover ">
          <source src="/video/Herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-8 left-0  right-0 flex flex-col lg:flex-row justify-between items-start lg:items-end px-1.5 sm:px-6 md:px-12 gap-6 z-10">
        {/* Text Card */}
        <div className=" rounded-2xl p-6 md:p-5 w-full md:w-[550px] bg-[rgba(19,45,71,0.3)] backdrop-blur-sm">
          <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight font-[Atyp]">
            One Platform. Boundless <br />
            Possibilities in Ayurveda.
          </h2>
          <p className="text-white text-[16px] md:text-xl leading-snug mt-4 font-[Duplet]">
            We unify care, career, commerce, and community through a single, tech-enabled platform that promotes Ayurveda with authenticity, innovation, and inclusivity.
          </p>
        </div>

        {/* Button */}
        <Link href={"/appointment"} className=" w-full sm:w-auto">
            <StorySectionBtn />
        </Link>
      </div>
    </section>
  );
};

export default StorySection;
