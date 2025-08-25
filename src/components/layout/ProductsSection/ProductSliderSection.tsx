
import React, { useState } from 'react';
import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton'; // Adjust path as needed
import ArrowRightThin from '@/assets/icons/ArrowRightThin'; // Adjust path as needed
import SlideImageOne from '@/assets/videos/PublicVideoOne.gif'; // Adjust path as needed
import SlideImageTwo from '@/assets/videos/PublicVideoTwo.gif'; // Adjust path as needed
import SlideImageThree from '@/assets/videos/PublicVideoThree.gif'; // Adjust path as needed

const ProductSliderSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { imageUrl: SlideImageOne, alt: 'Eye Migraine Ayurvedic Hack' },
    { imageUrl: SlideImageTwo, alt: 'Dark Circles and Puffy Eyes Solution' },
    { imageUrl: SlideImageThree, alt: 'Neem & Tulsi Face Pack' },
    { imageUrl: SlideImageTwo, alt: 'Eye Migraine Ayurvedic Hack' },
    { imageUrl: SlideImageOne, alt: 'Dark Circles and Puffy Eyes Solution' },
  ];

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 2));
    setTimeout(() => setIsTransitioning(false), 1500); // Match transition duration
  };

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev >= slides.length - 3 ? prev : prev + 2));
    setTimeout(() => setIsTransitioning(false), 1500); // Match transition duration
  };

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= slides.length - 3;

  return (
    <div className="flex flex-col items-start w-full max-w-[1360px] mx-auto gap-3 md:gap-12 py-10">
      {/* Heading and Button (Frame 372) */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 px-5">
        <h2 className="text-2xl md:text-[60px] font-[Atyp] font-bold md:leading-[72px] text-[#132D47] text-center w-full md:w-[479px]">
          Watch and Shop
        </h2>
        <div className="hidden md:block">
        <CustomButton
          mainWidth="176px"
          labelWidth="176px"
          labelWidthHover="130px"
          labelBackground="#81DE76"
          labelBackgroundHover="#6BCB62"
          labelBorderColor="#81DE76"
          labelTextColor="#000000"
          labelTextColorHover="#000000"
          arrowFill="#000000"
          arrowFillHover="#000000"
          labelText="Shop Now"
        />
        </div>
      </div>

      {/* Slider (Frame 550) */}
      <div className="w-full flex flex-col items-center gap-4 md:gap-12">
        {/* Slides (Frame 549) */}
        <div className="relative w-full overflow-x-scroll no-scrollbar">
          <div
            className={`flex transition-all duration-1500 ease-in-out ${
              isTransitioning ? 'opacity-80' : 'opacity-100'
            }`}
            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/3 p-5"
              >
                <Image
                  src={slide.imageUrl}
                  alt={slide.alt}
                  width={450}
                  height={607}
                  className="w-[450px] rounded-[24px] object-cover mx-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons (Frame 548) */}
        <div className="hidden md:flex flex-row items-center gap-4">
          <button
            className={`w-[56px] h-[56px] bg-[#132D47] rounded-full flex justify-center items-center ${
              isPrevDisabled ? 'opacity-30 cursor-not-allowed' : 'opacity-50 hover:opacity-100'
            }`}
            onClick={handlePrevSlide}
            disabled={isPrevDisabled}
          >
            <div className="w-[22.5px] h-[15px] relative">
              <ArrowRightThin fill="#FFFFFF" className="rotate-180" />
            </div>
          </button>
          <button
            className={`w-[56px] h-[56px] bg-[#132D47] rounded-full flex justify-center items-center ${
              isNextDisabled ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:opacity-80'
            }`}
            onClick={handleNextSlide}
            disabled={isNextDisabled}
          >
            <div className="w-[22.5px] h-[15px] relative">
              <ArrowRightThin fill="#FFFFFF" />
            </div>
          </button>
        </div>
        <div className="block md:hidden">
        <CustomButton
          mainWidth="176px"
          labelWidth="176px"
          labelWidthHover="130px"
          labelBackground="#81DE76"
          labelBackgroundHover="#6BCB62"
          labelBorderColor="#81DE76"
          labelTextColor="#000000"
          labelTextColorHover="#000000"
          arrowFill="#000000"
          arrowFillHover="#000000"
          labelText="Shop Now"
        />
        </div>
      </div>
    </div>
  );
};

export default ProductSliderSection;
