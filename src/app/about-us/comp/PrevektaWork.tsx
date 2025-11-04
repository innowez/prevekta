import React from 'react';
import ArrowRightThin from '@/assets/icons/ArrowRightThin';
import Image from 'next/image';
import LogoHalf from '@assets/images/LogoHalfImage.png'
import Link from 'next/link';

const PrevektaWork: React.FC = () => {
  return (
<section className="relative w-full max-w-[1360px] mx-auto bg-[rgba(129,222,118,0.2)] rounded-[20px] md:rounded-[40px] overflow-hidden">
  {/* Mobile Layout */}
  <div className="lg:hidden p-6 space-y-4 min-h-[280px]">
    <div className="flex justify-between items-start">
      <h2 className="text-[20px] sm:text-3xl leading-[24px] sm:leading-9 font-bold uppercase text-[#132D47] font-['Atyp'] flex-1 pr-4">
        Still wondering
        <span className="block">how Prevekta</span>
        <span className="block">works for you?</span>
      </h2>
      
      <div className="border-2 border-[#132D47] rounded-[16px] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] flex items-center justify-center flex-shrink-0">
        <div className="transform -rotate-45">
          <ArrowRightThin width={16} height={14} fill='#132D47' className='sm:w-10 sm:h-10' />
        </div>
      </div>
    </div>
    
    <p className="text-sm sm:text-xl text-[#132D47] font-[Duplet] font-normal mt-auto pt-8">
      Have questions? Head over to our [FAQ page] for quick, clear answers to everything you need to know about Prevekta’s model, opportunities, and benefits.
    </p>
    <div className="absolute left-[52%] top-[17%] transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[450px] h-[450px]">
      <Image
        src={LogoHalf}
        alt=""
        className="w-full h-full object-contain rounded-[16px]"
      />
    </div>
  </div>

  {/* Desktop Layout */}
  <div className="hidden lg:block relative h-[320px]">
    {/* Main content */}
    <div className="absolute left-10 top-10 w-[434px]">
      <h2 className="text-[40px] leading-[48px] font-bold uppercase text-[#132D47] font-Atyp">
        Still wondering <span className='whitespace-nowrap'>how Prevekta</span>  <br/> works for you?
      </h2>
    </div>

    {/* Bottom text */}
    <p className="absolute left-1/2 transform -translate-x-1/2 bottom-10 text-lg text-[#132D47] font-[Duplet] font-normal w-[427px] text-left">
    Have questions? Head over to our [FAQ page] for quick, clear answers to everything you need to know about Prevekta’s model, opportunities, and benefits.
    </p>

    {/* Logo in the center area */}
    <div className="absolute left-[52%] top-[17%] transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px]">
      <Image
        src={LogoHalf}
        alt=""
        className="w-full h-full object-contain rounded-[16px]"
      />
    </div>

    {/* Bordered Image Placeholder */}
    <Link href={"#"} className="absolute right-10 top-4 border-5 border-[#132D47] rounded-[29px] w-[288px] h-[288px] flex items-center justify-center overflow-hidden">
      <div className="w-60 h-55 transform flex justify-center items-center -rotate-45 relative">
        <ArrowRightThin width={60} height={55} fill='#132D47' />
      </div>
    </Link>
  </div>
</section>


  );
};

export default PrevektaWork;