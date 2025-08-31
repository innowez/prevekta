"use client";
import Image from "next/image";
import React from "react";
import BrandeClien from "@assets/images/branded_clinic.jpg";
import Endtotend from "@assets/images/end-to-end-client.png";
import Marketing from "@assets/images/marketing-patient.png";
import MemberShip from "@assets/images/membership.png";
import CustomButton from "@/components/ui/CustomButton";
import LeftLogo from "@assets/images/leftLogo.png";
import RightLogo from "@assets/images/rightLogo.png";

function ForSenior() {
  return (
    <div className="px-4 mt-12 relative">
      <div className="flex mb-6 items-end lg:items-center lg:flex-col gap-3 lg:mb-12">
        <h1 className="text-xl sm:text-3xl lg:text-[40px] font-Atyp font-semibold text-[#132D47] w-[60%] lg:text-center">
          For Senior <span className="font-light">&</span> <br className="sm:hidden" />
          Experienced <br className="lg:hidden" />
          Physicians
        </h1>
        <p className="text-[14px] sm:text-base lg:text-lg lg:leading-6 font-[Duplet] text-[#132D47] lg:text-center">
          You’ve mastered the science now let us{" "}
          <br className="hidden md:block" />
          help you scale your impact.
        </p>
      </div>

      <div className="mb-12 flex flex-col lg:flex-row justify-between lg:items-center">
        <p className="text-base sm:text-xl lg:text-2xl font-semibold font-[Duplet] text-[#132D47] mb-4">
          We understand the barriers that hold
          <br className="hidden lg:block" /> even back the best Ayurvedic
          <br className="hidden lg:block" />
          practitioners
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:w-[62%] ">
          <div className="py-[50px] lg:py-[100px] relative method-1 ">
            <p className="text-primary text-center text-base lg:text-lg font-[Duplet] font-semibold">
              Limited visibility
            </p>

            <div className="sm:hidden absolute right-0 top-0 h-full w-1 method-1"></div>
          </div>
          <div className="py-[50px] lg:py-[100px] relative method-1 method-right">
            <p className="text-primary text-center text-base lg:text-lg font-[Duplet] font-semibold">
              Inconsistent <br />
              patient footfall
            </p>
            <div className="lg:hidden absolute right-0 top-0 h-full w-1 method-1"></div>
          </div>
          <div className="py-[50px] lg:py-[100px] relative method-2">
            <p className="text-primary text-center text-base lg:text-lg font-[Duplet] font-semibold">
              Absence of Integrated <br />
              management ecosystem
            </p>
            <div className="sm:hidden absolute right-0 top-0 h-full w-1 method-1"></div>
          </div>
          <div className="py-[50px] lg:py-[100px] relative method-2">
            <p className="text-primary text-center text-base lg:text-lg font-[Duplet] font-semibold">
              No time for mentorship, <br />
              research, or innovation
            </p>
            <div className="lg:hidden absolute right-0 top-0 h-full w-1 method-1"></div>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-lg sm:text-3xl lg:text-[40px] text-center text-primary font-Atyp font-semibold mb-6">
          Prevekta Empowers You With
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 overflow-x-hidden mb-12">
          <div className="relative flex flex-col justify-end h-[499px] lg:h-[449px] w-full rounded-2xl overflow-hidden">
            <Image
              src={BrandeClien}
              alt="Branded Cleno"
              className="w-full h-full object-cover rounded-2xl z-0 absolute"
            />
            <div className="absolute bottom-0 left-0 h-40 z-10"></div>
            <div
              className="px-4 pb-6 pt-9 z-20"
              style={{
                backdropFilter: "blur(3px)",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,28%))",
                // border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h2 className="text-lg text-white font-[Atyp] font-semibold mb-1">
                Branded Clinic Infrastructure
              </h2>
              <p className="text-base text-white font-[Duplet] ">
                Custom-designed Ayurvedic spaces that <br />
                reflect your credibility
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-end h-[499px] lg:h-[449px] w-full rounded-2xl overflow-hidden">
            <Image
              src={Endtotend}
              alt="Branded Cleno"
              className="w-full h-full object-cover rounded-2xl z-0 absolute"
            />
            <div className="absolute bottom-0 left-0 h-40 z-10"></div>
            <div
              className="px-4 pb-6 pt-9 z-20"
              style={{
                backdropFilter: "blur(3px)",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,28%))",
                // border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h2 className="text-lg text-white font-[Atyp] font-semibold mb-1">
                End-to-End Clinic Support
              </h2>
              <p className="text-base text-white font-[Duplet] ">
                Staff training, front-office automation, follow-
                <br />
                up systems
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-end h-[499px] lg:h-[449px] w-full rounded-2xl overflow-hidden">
            <Image
              src={Marketing}
              alt="Branded Cleno"
              className="w-full h-full object-cover rounded-2xl z-0 absolute"
            />
            <div className="absolute bottom-0 left-0 h-40 z-10"></div>
            <div
              className="px-4 pb-6 pt-9 z-20"
              style={{
                backdropFilter: "blur(3px)",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,28%))",
                // border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h2 className="text-lg text-white font-[Atyp] font-semibold mb-1">
                Marketing & Patient Generation
              </h2>
              <p className="text-base text-white font-[Duplet] ">
                Digital presence, patient education <br />
                campaigns, lead management
              </p>
            </div>
          </div>

          <div className="relative flex flex-col justify-end h-[499px]  lg:h-[449px] w-full rounded-2xl overflow-hidden">
            <Image
              src={MemberShip}
              alt="Branded Cleno"
              className="w-full h-full object-cover object-top rounded-2xl z-0 absolute"
            />
            <div className="absolute bottom-0 left-0 h-40 z-10"></div>
            <div
              className="px-4 pb-6 pt-9 z-20"
              style={{
                backdropFilter: "blur(3px)",
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,28%))",
                // border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h2 className="text-lg text-white font-[Atyp] font-semibold mb-1">
                Mentorship Platform
              </h2>
              <p className="text-base text-white font-[Duplet] ">
                Host CMEs, train junior doctors, and establish <br />
                your legacy
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 lg:gap-12 pb-12 lg:pb-28">
          <h2 className="text-primary text-xl sm:text-2xl lg:text-[32px] text-center font-semibold font-Atyp sm:uppercase ">
            “With Prevekta, you don’t just <br className="sm:hidden" /> get
            patients. <br className="hidden lg:block" />
            You build a <br className="lg:hidden" />
            practice that fullfills”
          </h2>
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
            labelText="HOLD HANDS WITH US"
            labelBorderColor="#81DE76"
            iconPosition="0px"
            iconPositionHover="px"
            // isHoveredProp={true}
          />
        </div>
      </div>

      <div className="absolute h-[129px] lg:h-[646px] left-0 bottom-[70px] -z-10">
        <Image
          src={LeftLogo}
          alt="Left Logo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="absolute h-[129px] lg:h-[646px] right-0 bottom-[160px] lg:-bottom-[10px] -z-10 ">
        <Image
          src={RightLogo}
          alt="Right Logo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default ForSenior;
