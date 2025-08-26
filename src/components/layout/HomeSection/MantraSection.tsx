import React from 'react';
import Image from 'next/image';
import DoctorsImage from '@assets/images/DoctorsImage.png'

const MantraSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-5 md:gap-10">
        {/* Header section */}
        <div className="flex flex-col gap-1 md:gap-5">
          <h3 className="text-basic md:text-[24px] md:leading-[29px] font-bold text-[#132D47] font-['Atyp']">
            Our Mantra
          </h3>
          <h2 className="text-[20px] md:text-[40px] md:leading-[48px] font-bold text-[#132D47] font-[Atyp]">
            Ayurveda for All. Ayurveda <br className='block md:hidden' />Together.
          </h2>
        </div>

        {/* Content section */}
        <div className="flex flex-col lg:flex-row gap-3 md:gap-10 items-center">
          {/* Image placeholder */}
          <p className="text-lg md:text-[18px] leading-[23px] text-[#132D47] font-[Duplet] font-light block md:hidden">
              Whether you are in a village in Kerala, a city like Hyderabad, or a small community in Tamil Nadu Prevekta brings the same promise: Rooted tradition, connected community, modern access.
            </p>
          <div className="w-full lg:w-[534px] h-[282px] sm:h-[400px] bg-gray-300 rounded-[28px] flex-shrink-0">
            <Image 
              src={DoctorsImage}
              alt="Ayurveda tradition" 
              className="w-full h-full object-cover rounded-[28px]"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-between gap-3 md:gap-8 w-full h-full lg:w-[506px]">
            <p className="text-lg md:text-[18px] leading-[23px] text-[#132D47] font-[Duplet] font-light hidden md:block">
              Whether you are in a village in Kerala, a city like Hyderabad, or a small community in Tamil Nadu Prevekta brings the same promise: Rooted tradition, connected community, modern access.
            </p>
            
            <div className="flex flex-col gap-1">
              <h4 className="text-[20px] md:text-[32px] md:leading-[38px] font-bold text-[#132D47] font-['Atyp']">
                We dont just treat illness. <br />We unite wellness.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MantraSection;