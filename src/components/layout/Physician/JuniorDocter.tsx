"use client";
import CustomButton from "@/components/ui/CustomButton";
import React, { useState } from "react";
// import StarIcon from "@assets/icons/StarIcon";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 lg:w-12 lg:h-12"
      viewBox="0 0 26 27"
      fill="none"
    >
      <path
        d="M12.0992 1.36907C12.4629 0.614736 13.5371 0.614737 13.9008 1.36907L17.402 8.63193C17.5003 8.83575 17.6647 9.00022 17.8686 9.09847L25.1314 12.5997C25.8858 12.9633 25.8858 14.0376 25.1314 14.4013L17.8686 17.9025C17.6647 18.0008 17.5003 18.1652 17.402 18.369L13.9008 25.6319C13.5371 26.3862 12.4629 26.3862 12.0992 25.6319L8.59798 18.369C8.49973 18.1652 8.33526 18.0008 8.13144 17.9025L0.868584 14.4013C0.114248 14.0376 0.114249 12.9633 0.868585 12.5997L8.13144 9.09847C8.33526 9.00022 8.49973 8.83575 8.59799 8.63193L12.0992 1.36907Z"
        fill="white"
      />
    </svg>
  );
}

const ArrowIcon = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      className="lg:hidden"
    >
      <path
        fill="#81DE76"
        d="M16.468.82 7.451.29c-.448-.004-.768.32-.787.712a.78.78 0 0 0 .712.788l7.344.43L1.044 15.897a.75.75 0 1 0 1.061 1.06L15.78 3.282l.431 7.344c.02.393.395.72.788.713.409-.008.732-.395.712-.788l-.53-9.017c-.075-.45-.319-.65-.713-.713"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="25"
      fill="none"
      viewBox="0 0 27 25"
      className="hidden lg:block"
    >
      <path
        fill="#132D47"
        fillRule="evenodd"
        d="M21.566 11.623.804 11.46.75 13.925H21.02l-8.605 8.657 1.906 1.918L26.25 12.555l-.055-.055-1.851-1.863L14.322.5l-1.906 1.918z"
        clipRule="evenodd"
      ></path>
    </svg>
  </div>
);

const NetworkList = [
  {
    color: "#132D4733",
    text: "Peer community with purpose",
  },
  {
    color: "#132D4766",
    text: "Opportunities to improve practice, skills, and patient base",
  },
  {
    color: "#132D4799",
    text: "Access to tools, templates, resources, and clinical SOPs",
  },
  {
    color: "#132D47CC",
    text: "Mentorship & leadership opportunities",
  },
  {
    color: "#132D47",
    text: "CME hosting, journal publishing, brand collaborations",
  },
];

function JuniorDocter() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const cardData = [
    {
      title: "Live OP/IP Case Exposure",
      description: "Learn by participating, in real Ayurvedic clinics and wellness centers"
    },
    {
      title: "Clinical Mentorship", 
      description: "Shadow senior vaidyas, understand Ayurvedic diagnosis, plan real treatments"
    },
    {
      title: "Continuous Learning",
      description: "CMEs, research discussions, case reviews, and guided patient interactions"
    },
    {
      title: "Career Pathway Support",
      description: "Guidance on specializations, entrepreneurship, or research-oriented Ayurveda"
    }
  ];

  const cardVariants = {
    collapsed: {
      width: "20%",
      backgroundColor: "transparent",
      color: "#132d47",
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    expanded: {
      width: "40%", 
      backgroundColor: "#132d47",
      color: "white",
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  const textVariants = {
    collapsed: {
      rotate: -90,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    expanded: {
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };


  return (
    <>
      <div
        className="px-4 lg:px-10 pt-5 lg:pt-28 mb-24"
        style={{
          background: "linear-gradient(180deg, #D8FFD4 0%, #F3FCF2 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl leading-7 sm:leading-9 lg:leading-16 text-primary font-semibold ">
            For Junior Doctors & <br className="hidden lg:block" /> Fresh{" "}
            <br className="block lg:hidden " />
            Graduates
          </h2>
          <p className="text-base leading-5 lg:leading-6 font-[Duplet] font-light lg:w-[557px]">
            Turn Ayurvedic theory into practice. With clinical exposure and
            expert guidance, {"you'll"} not only refine your diagnostic and
            treatment skills but also gain practical insights into managing
            patient care and clinic operations. From therapeutic procedures to
            effective communication and case documentation, we prepare you to
            handle both the clinical and administrative aspects of Ayurvedic
            practice. {"You'll"} also gain valuable experience by learning under
            expert doctors from various Ayurvedic specializations.
          </p>
        </div>

        <div>
          <p className="text-2xl lg:text-[40px] leading-7 text-primary text-center lg:text-left font-semibold font-Atyp mb-6">
            What you gain as a junior physician in prevekta
          </p>

          <div className="w-[300px] mx-auto mb-6 md:hidden">
            <div className="w-[259px] h-[259px] relative bg-primary rounded-full">
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[227px]">
                <h2 className="text-center text-base text-white font-Duplet font-bold  ">
                  Live OP/IP Case Exposure
                </h2>
                <p className="text-center text-white text-base leading-5 font-[duplet] font-light ">
                  Learn by participating, in real Ayurvedic <br />
                  clinics and wellness centers
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-[259px] h-[259px] relative border border-primary rounded-full">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[227px]">
                  <h2 className="text-center text-base text-primary font-Duplet font-bold  ">
                    Clinical Mentorship
                  </h2>
                  <p className="text-center text-primary text-base leading-5 font-[duplet] font-light ">
                    Shadow senior vaidyas, <br />
                    understand Ayurvedic <br />
                    diagnosis, plan real treatments
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[259px] h-[259px] relative bg-primary rounded-full">
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[227px]">
                <h2 className="text-center text-base text-white font-Duplet font-bold  ">
                  Continuous Learning
                </h2>
                <p className="text-center text-white text-base leading-5 font-[duplet] font-light ">
                  CMEs, research discussions, <br />
                  case reviews, and guided <br />
                  patient interactions
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-[259px] h-[259px] relative border border-primary rounded-full">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[227px]">
                  <h2 className="text-center text-base text-primary font-Duplet font-bold  ">
                    Career Pathway Support
                  </h2>
                  <p className="text-center text-primary text-base leading-5 font-[duplet] font-light ">
                    Guidance on specializations, <br />
                    entrepreneurship, or research-
                    <br />
                    oriented Ayurveda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="hidden md:flex max-w-[1360px] mx-auto h-[516px] mb-[70px] ">
            <div
              className={`h-full rounded-full relative transition-all duration-700 ease-in-out transform ${
                hoveredIndex === 0
                  ? "w-[40%] bg-primary text-white"
                  : "w-[20%] text-primary border border-primary"
              }`}
              onMouseEnter={() => setHoveredIndex(0)}
              // onMouseLeave={() => setHoveredIndex(0)}
            >
              <div
                className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[327px] transition-all duration-500 ${
                  hoveredIndex === 0 ? "rotate-0" : "-rotate-90"
                }`}
              >
                <h2 className="text-center text-2xl font-Duplet font-bold">
                  Live OP/IP Case Exposure
                </h2>
                <p
                  className={`text-center text-lg leading-5 font-[duplet] transition-all duration-500 ${
                    hoveredIndex === 0 ? "block" : "hidden"
                  }`}
                >
                  Learn by doing, in real Ayurvedic <br />
                  clinics and wellness centers
                </p>
              </div>
            </div>

            <div
              className={`h-full rounded-full relative transition-all duration-700 ease-in-out transform ${
                hoveredIndex === 1
                  ? "w-[40%] bg-primary text-white"
                  : "w-[20%] text-primary border border-primary"
              }`}
              onMouseEnter={() => setHoveredIndex(1)}
              // onMouseLeave={() => setHoveredIndex(0)}
            >
              <div
                className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[327px] transition-all duration-500 ${
                  hoveredIndex === 1 ? "rotate-0" : "-rotate-90"
                }`}
              >
                <h2 className="text-center text-2xl font-Duplet font-semibold transition-all duration-500">
                  Clinical Mentorship
                </h2>
                <p
                  className={`text-center text-lg leading-5 font-[duplet] transition-all duration-500 ${
                    hoveredIndex === 1 ? "block" : "hidden"
                  }`}
                >
                  Learn by doing, in real Ayurvedic <br />
                  clinics and wellness centers
                </p>
              </div>
            </div>

            <div
              className={`h-full rounded-full relative  transition-all duration-700 ease-in-out transform ${
                hoveredIndex === 2
                  ? "w-[40%] bg-primary text-white"
                  : "w-[20%] text-primary border border-primary"
              }`}
              onMouseEnter={() => setHoveredIndex(2)}
              // onMouseLeave={() => setHoveredIndex(0)}
            >
              <div
                className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[327px] transition-all duration-500 ${
                  hoveredIndex === 2 ? "rotate-0" : "-rotate-90"
                }`}
              >
                <h2 className="text-center text-2xl font-Duplet font-semibold transition-all duration-500">
                  Continuous Learning
                </h2>
                <p
                  className={`text-center text-lg leading-5 font-[duplet] transition-all duration-500 ${
                    hoveredIndex === 2 ? "block" : "hidden"
                  }`}
                >
                  Learn by doing, in real Ayurvedic <br />
                  clinics and wellness centers
                </p>
              </div>
            </div>

            <div
              className={`h-full rounded-full relative transition-all duration-700 ease-in-out transform ${
                hoveredIndex === 3
                  ? "w-[40%] bg-primary text-white"
                  : "w-[20%] text-primary border border-primary"
              }`}
              onMouseEnter={() => setHoveredIndex(3)}
              // onMouseLeave={() => setHoveredIndex(0)}
            >
              <div
                className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[327px] transition-all duration-500 ${
                  hoveredIndex === 3 ? "rotate-0" : "-rotate-90"
                }`}
              >
                <h2 className="text-center text-2xl font-Duplet font-semibold transition-all duration-500">
                  Career Pathway Support
                </h2>
                <p
                  className={`text-center text-lg leading-5 font-[duplet] transition-all duration-500 ${
                    hoveredIndex === 3 ? "block" : "hidden"
                  }`}
                >
                  Learn by doing, in real Ayurvedic <br />
                  clinics and wellness centers
                </p>
              </div>
            </div>
          </div> */}

          <div className="hidden md:flex max-w-[1360px] mx-auto h-[516px] mb-[70px] p-4">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="h-full rounded-full relative cursor-pointer border border-primary"
          variants={cardVariants}

          initial="collapsed"
          animate={hoveredIndex === index ? "expanded" : "collapsed"}
          onMouseEnter={() => setHoveredIndex(index)}
          style={{
            originX: 0.5,
            originY: 0.5
          }}
        >
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[327px]"
            style={{ x: "-50%", y: "-50%" }}
            variants={textVariants}
            animate={hoveredIndex === index ? "expanded" : "collapsed"}
          >
            <motion.h2 
              className="text-center text-2xl font-bold mb-4"
              layout
            >
              {card.title}
            </motion.h2>
            
            <AnimatePresence mode="wait">
              {hoveredIndex === index && (
                <motion.p
                  className="text-center text-lg leading-5 font-[duplet]"
                  variants={descriptionVariants}
                  // variants={}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  key={`desc-${index}`}
                >
                  {card.description.split('<br />').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < card.description.split('<br />').length - 1 && <br />}
                    </span>
                  ))}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Subtle background glow effect on hover */}
          {/* <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIndex === index ? 0.1 : 0,
              scale: hoveredIndex === index ? 1.02 : 1
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            style={{
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          /> */}
        </motion.div>
      ))}
    </div>

          <p className="text-primary text-xl text-center font-Atyp sm:uppercase">
            “Join not just a platform, but a movement to elevate authentic,{" "}
            <br />
            modern Ayurveda”
          </p>
        </div>
      </div>

      <div
        className="px-4 lg:px-10 pt-5 lg:pt-28"
        style={{
          background: "linear-gradient(180deg, #F3FCF2 0%, #D8FFD4 100%)",
        }}
      >
        <div className="flex justify-between items-center mb-6 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-7 lg:leading-12 text-primary font-semibold font-[Atyp] ">
            Why Join the Prevekta
            <br className="" />
            Physician Network?
          </h2>

          <div className="hidden  lg:block">
            <CustomButton
              mainWidth="260px"
              labelWidth="249px"
              labelWidthHover="215px"
              labelBackground="#81DE76"
              labelBackgroundHover="#81DE76"
              labelTextColor="#132D47"
              labelTextColorHover="#132D47"
              arrowFill="#132D47"
              arrowFillHover="#132D47"
              labelText="Interested to join us"
              labelBorderColor="#81DE76"
              iconPosition="0px"
              iconPositionHover="px"
              // isHoveredProp={true}
            />
          </div>
        </div>

        <div className="mb-6">
          {NetworkList.map((item) => (
            <div
              key={item.color}
              className="rounded-2xl p-6 lg:p-12 flex items-center gap-7"
              style={{ backgroundColor: item.color }}
            >
              <div className="w-8 h-8 lg:w-12 lg:h-12">
                <StarIcon />
              </div>
              <p className="text-base sm:text-xl lg:text-2xl text-white font-[Duplet] leading-5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:hidden">
          <CustomButton
            mainWidth="260px"
            labelWidth="249px"
            labelWidthHover="215px"
            labelBackground="#81DE76"
            labelBackgroundHover="#81DE76"
            labelTextColor="#132D47"
            labelTextColorHover="#132D47"
            arrowFill="#132D47"
            arrowFillHover="#132D47"
            labelText="Interested to join us"
            labelBorderColor="#81DE76"
            iconPosition="0px"
            iconPositionHover="px"
            // isHoveredProp={true}
          />
        </div>

        <div className=" mt-12 lg:mt-28">
          <h2 className="text-2xl text-center lg:text-[40px] leading-7 lg:leading-12 text-primary font-semibold font-Atyp mb-6 lg:mb-12">
            Ready to Evolve Your
            <br className="block sm:hidden" />
            Ayurveda Practice?
          </h2>

          <div className="pb-12 lg:pb-32">
            <div className="flex justify-between gap-2 lg:gap-4 mb-4 lg:mb-12 lg:w-2/3">
              <div className="bg-secondary flex items-center px-4 w-4/5 lg:w-[90%] rounded-3xl ">
                <p className="font-[Duplet] text-primary text-base lg:text-2xl font-semibold">
                  Apply to Join the Prevekta <br className="sm:hidden" />
                  Physician Network
                </p>
              </div>
              <div className="h-[72px] w-[72px] lg:w-[93px] lg:h-[93px] bg-primary lg:bg-secondary rounded-full lg:rounded-4xl flex items-center justify-center">
                <ArrowIcon />
              </div>
            </div>

            <div className="flex justify-between gap-2 lg:justify-end lg:gap-4 ">
              <div className="h-[72px] w-[72px] lg:w-[93px] lg:h-[93px] bg-primary lg:bg-secondary rounded-full lg:rounded-4xl flex items-center justify-center">
                <ArrowIcon />
              </div>
              <div className="bg-secondary flex items-center px-4 lg:px-8 w-4/5 lg:w-auto rounded-3xl ">
                <p className="font-[Duplet] text-primary text-base lg:text-2xl font-semibold">
                  Book a 1-on-1 Discovery Call with
                  {/* <br className="hidden sm:block lg:hidden" /> */}
                  Our Clinical Onboarding Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JuniorDocter;
