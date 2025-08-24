import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LadyImage from "@assets/images/LadyImage.png";
import {ChevronLeft, ChevronRight,} from "lucide-react"

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Mrunalini",
      text: "I feel lighter, both emotionally and physically. It's amazing how much has improved. Thanks to Dr. Chithra and her supportive, non-judgmental team. This experience has been life-changing—beyond relaxation and healing, I've gained valuable insights into holistic wellness and self-care.",
      location: "Chennai",
    },
    {
      name: "Priya",
      text: "The treatment completely transformed my approach to health. I've never felt better in my life. The care and attention to detail from the team was exceptional.",
      location: "Bangalore",
    },
    {
      name: "Rahul",
      text: "After just a few sessions, my chronic pain has significantly reduced. The holistic approach addressed not just my physical symptoms but also my stress levels.",
      location: "Mumbai",
    },
    {
      name: "Anjali",
      text: "The personalized treatment plan worked wonders for my digestive issues. I'm grateful for the compassionate care and expert guidance throughout my journey.",
      location: "Delhi",
    },
    {
      name: "Vikram",
      text: "This has been a transformative experience. The combination of traditional Ayurveda with modern approaches created the perfect healing environment for me.",
      location: "Hyderabad",
    },
  ];

  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   if (!scrollContainer) return;

  //   let animationId: number;
  //   const speed = 1; // Pixels per frame

  //   const animateScroll = () => {
  //     if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
  //       scrollContainer.scrollLeft = 0;
  //     } else {
  //       scrollContainer.scrollLeft += speed;
  //     }
  //     animationId = requestAnimationFrame(animateScroll);
  //   };

  //   animationId = requestAnimationFrame(animateScroll);

  //   const handleMouseEnter = () => {
  //     cancelAnimationFrame(animationId);
  //   };

  //   const handleMouseLeave = () => {
  //     animationId = requestAnimationFrame(animateScroll);
  //   };

  //   scrollContainer.addEventListener('mouseenter', handleMouseEnter);
  //   scrollContainer.addEventListener('mouseleave', handleMouseLeave);

  //   return () => {
  //     cancelAnimationFrame(animationId);
  //     scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
  //     scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
  //   };
  // }, []);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationIdRef = useRef<number>(null);

  const cardWidth = 463; // 443px + 20px margin
  const visibleCards = Math.floor(
    typeof window !== "undefined" ? window.innerWidth / cardWidth : 3
  );

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const speed = 1; // Pixels per frame

    const animateScroll = () => {
      if (!isAutoScrolling) return;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        setCurrentIndex(0);
      } else {
        scrollContainer.scrollLeft += speed;
        setCurrentIndex(Math.floor(scrollContainer.scrollLeft / cardWidth));
      }
      animationIdRef.current = requestAnimationFrame(animateScroll);
    };

    if (isAutoScrolling) {
      animationIdRef.current = requestAnimationFrame(animateScroll);
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isAutoScrolling, cardWidth]);

  const handlePrevious = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setIsAutoScrolling(false);
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;

    scrollContainer.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(newIndex);

    // Resume auto scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleNext = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    setIsAutoScrolling(false);
    const newIndex =
      currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;

    if (newIndex === 0) {
      // Jump to the duplicate set for seamless transition
      scrollContainer.scrollTo({
        left: testimonials.length * cardWidth,
        behavior: "smooth",
      });
      setTimeout(() => {
        scrollContainer.scrollLeft = 0;
      }, 300);
    } else {
      scrollContainer.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }

    setCurrentIndex(newIndex);

    // Resume auto scroll after 3 seconds
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section className="py-5 md:py-20 bg-white overflow-hidden">
      <h2 className="text-2xl md:text-[40px] md:leading-[48px] font-bold text-left md:text-center text-[#132D47] font-['Atyp'] mb-12 ml-2.5 md:ml-0">
        Real Stories Real Healing
      </h2>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"></div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden py-4"
        style={{ scrollBehavior: "auto" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex">
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div 
              key={`first-${index}`}
              className="w-[290px] md:min-w-[443px] p-6 md:p-8 border-r border-[rgba(19,45,71,0.3)] rounded-[24px] mx-2 flex flex-col"
              style={{ flexShrink: 0 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-semibold text-[#132D47]">
                    <Image
                    src={LadyImage}
                    alt='Lady Image'
                    className='w-full h-full object-cover rounded-full'
                    />
                  </span>
                </div>
                <p className="text-base md:text-lg font-semibold mt-2 font-duplet">{testimonial.name}</p>
              </div>
              
              
              <div className="flex justify-center items-center md:w-[400px]">
                <p className="text-base md:text-lg font-duplet font-normal">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex items-center mt-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path 
                    d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" 
                    fill="#132D47"
                  />
                </svg>
                <p className="ml-2 text-base md:text-lg uppercase font-duplet">{testimonial.location}</p>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {testimonials.map((testimonial, index) => (
            <div 
              key={`second-${index}`}
              className="w-[290px] md:min-w-[443px] p-6 md:p-8 border-r border-[rgba(19,45,71,0.3)] rounded-[24px] mx-2 flex flex-col"
              style={{ flexShrink: 0 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center">
                  <span className="text-xl md:text-2xl font-semibold text-[#132D47]">
                     <Image
                    src={LadyImage}
                    alt='Lady Image'
                    className='w-full h-full object-cover rounded-full'
                    />
                  </span>
                </div>
                <p className="text-base md:text-lg font-semibold mt-2 font-duplet">{testimonial.name}</p>
              </div>
              
              
              <div className="flex justify-center items-center w-[400px] mb-2">
                <p className="text-base md:text-lg font-duplet font-normal">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex items-center mt-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path 
                    d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" 
                    fill="#132D47"
                  />
                </svg>
                <p className="ml-2 text-base md:text-lg uppercase font-duplet">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex  justify-end gap-2.5 mr-3.5">
        <button
          onClick={handlePrevious}
          className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} color="#132D47" />

        </button>

        {/* <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"></div> */}
        <button
          onClick={handleNext}
          className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} color="#132D47" />
        </button>
      </div>

      {/* Old code 👴👴👴 */}
      {/* <div 
        ref={scrollContainerRef}
        className="flex overflow-x-hidden py-4"
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex"> */}
      {/* First set of testimonials */}
      {/* {testimonials.map((testimonial, index) => (
            <div 
              key={`first-${index}`}
              className="min-w-[380px] md:min-w-[443px] p-6 md:p-8 border-r border-[rgba(19,45,71,0.3)] rounded-[24px] mx-2 flex flex-col"
              style={{ flexShrink: 0 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-semibold text-[#132D47]">
                    <Image
                    src={LadyImage}
                    alt='Lady Image'
                    className='w-full h-full object-cover rounded-full'
                    />
                  </span>
                </div>
                <p className="text-base md:text-lg font-semibold mt-2 font-duplet">{testimonial.name}</p>
              </div>
              
              
              <div className="flex justify-center items-center w-[400px]">
                <p className="text-base md:text-lg font-duplet font-normal">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex items-center mt-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path 
                    d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" 
                    fill="#132D47"
                  />
                </svg>
                <p className="ml-2 text-base md:text-lg uppercase font-duplet">{testimonial.location}</p>
              </div>
            </div>
          ))} */}

      {/* Duplicate set for seamless looping */}
      {/* {testimonials.map((testimonial, index) => (
            <div 
              key={`second-${index}`}
              className="min-w-[380px] md:min-w-[443px] p-6 md:p-8 border-r border-[rgba(19,45,71,0.3)] rounded-[24px] mx-2 flex flex-col"
              style={{ flexShrink: 0 }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center">
                  <span className="text-xl md:text-2xl font-semibold text-[#132D47]">
                     <Image
                    src={LadyImage}
                    alt='Lady Image'
                    className='w-full h-full object-cover rounded-full'
                    />
                  </span>
                </div>
                <p className="text-base md:text-lg font-semibold mt-2 font-duplet">{testimonial.name}</p>
              </div>
              
              
              <div className="flex justify-center items-center w-[400px] mb-2">
                <p className="text-base md:text-lg font-duplet font-normal">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex items-center mt-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path 
                    d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" 
                    fill="#132D47"
                  />
                </svg>
                <p className="ml-2 text-base md:text-lg uppercase font-duplet">{testimonial.location}</p>
              </div>
            </div>
          ))} */}
      {/* </div>
      </div> */}
    </section>
  );
};

export default Testimonials;
