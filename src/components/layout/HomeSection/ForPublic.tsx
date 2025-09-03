"use client";
import PublicVideoOne from "@assets/videos/PublicVideoOne.gif";
import PublicVideoTwo from "@assets/videos/PublicVideoTwo.gif";
import PublicVideoThree from "@assets/videos/PublicVideoThree.gif";
import CustomButton from "@/components/ui/CustomButton";
import useMediaQuery from "@/hooks/useMediaquery";

const ForPublic: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 720px)');
  return (
    <section className="py-12 md:py-20 px-4 relative">
      <div id="Public" className="absolute -top-14"></div>
      <div className="max-w-[1360px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-5xl lg:text-6xl text-heading text-[#132D47] font-semibold">
            FOR PUBLIC
          </h2>
          <p className="text-base md:text-medium font-[Duplet] mt-4 md:mt-6 max-w-xl text-[#132D47] mx-auto">
            Ayurveda isnt just medicine. its a lifestyle. We make its timeless
            principles practical relatable, and ready for everyday living.
            Whether youre a curious learner or a wellness enthusiast, dive deep
            into resources designed for you.
          </p>
        </div>
        {/* sfasdsdfsdfsdafasdfsda */}

        {/* Video Grid */}
        <div className="flex flex-row items-center justify-start gap-4 md:gap-6 mb-8 md:mb-12 overflow-x-auto no-scrollbar">
          {/* Video 1 */}
          <div className="w-[297px] md:w-[437px] h-[413px] sm:h-[607px] lg:h-[523px]">
            <img
              src={PublicVideoOne.src}
              alt="Public 1"
              className="w-[297px] md:w-[437px] h-full object-cover rounded-[24px] max-w-none"
            />
          </div>

          {/* Video 2 - Taller on desktop */}
          <div className="w-[297px] md:w-[437px] h-[413px] sm:h-[607px] md:h-[607px]">
            <img
              src={PublicVideoTwo.src}
              alt="Public 2"
              className="w-[297px] md:w-[437px] h-full object-cover rounded-[24px] max-w-none"
            />
          </div>

          {/* Video 3 */}
          <div className="w-[297px] md:w-[437px] h-[413px] sm:h-[607] lg:h-[523px]">
            <img
              src={PublicVideoThree.src}
              alt="Public 3"
              className="w-[297px] md:w-[437px] h-full object-cover rounded-[24px] max-w-none"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <CustomButton
            mainWidth={isMobile ? "175px" : "210px"}
            labelWidth={isMobile ? "135px" : "210px"}
            labelWidthHover={isMobile ? "139px" : "180px"}
            labelBackground="rgba(19,45,71,0.0)"
            labelBackgroundHover="#132D47"
            labelTextColor="#132D47"
            labelTextColorHover="#FFFF"
            arrowFill="#132D47"
            arrowFillHover="#FFFF"
            labelText="Explore More"
            labelBorderColor="#132D47"
            iconPosition="0px"
            iconPositionHover="px"
          />
        </div>
      </div>
    </section>
  );
};

export default ForPublic;
