import Image from "next/image";
import React from "react";
import Doctorone from "@/assets/images/doctor1.png";
import Doctortwo from "@/assets/images/doctor2.png";

function DoctorList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:max-w-[450px] max-w-[450px] w-full h-[450px] rounded-3xl overflow-hidden relative">
        <Image
          src={Doctorone}
          alt="Yoga Maman"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg text-white font-[Atyp] font-semibold leading-6 mb-2">
            Doctor’s Name (Qualification)
          </h2>

          <hr className="text-white mb-2" /> 
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Experience :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Department :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
            Category : Specialist
          </p>
          <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
            <span className="uppercase text-base text-primary font-[Duplet] ">
              Book Now
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6422 0.530345L6.62474 2.75494e-05C6.17709 -0.00395538 5.8569 0.320073 5.83737 0.712811C5.81783 1.10555 6.15739 1.48065 6.55013 1.50017L13.8934 1.93107L0.217953 15.6065C-0.0750044 15.8995 -0.0750307 16.3744 0.217927 16.6674C0.510885 16.9603 0.98586 16.9603 1.27882 16.6674L14.9542 2.99194L15.3851 10.3352C15.4047 10.7279 15.7793 11.0548 16.1725 11.048C16.5818 11.0408 16.9048 10.6533 16.8853 10.2606L16.3549 1.24311C16.2804 0.793673 16.036 0.593994 15.6422 0.530345Z"
                fill="#132D47"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:max-w-[450px] max-w-[450px] w-full h-[450px] rounded-3xl overflow-hidden relative">
        <Image
          src={Doctortwo}
          alt="Yoga Maman"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg text-white font-[Atyp] font-semibold leading-6">
            Doctor’s Name (Qualification)
          </h2>
            <hr className="text-white mb-2" /> 
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Experience :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Department :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
            Category : Specialist
          </p>
          <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
            <span className="uppercase text-base text-primary font-[Duplet] ">
              Book Now
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6422 0.530345L6.62474 2.75494e-05C6.17709 -0.00395538 5.8569 0.320073 5.83737 0.712811C5.81783 1.10555 6.15739 1.48065 6.55013 1.50017L13.8934 1.93107L0.217953 15.6065C-0.0750044 15.8995 -0.0750307 16.3744 0.217927 16.6674C0.510885 16.9603 0.98586 16.9603 1.27882 16.6674L14.9542 2.99194L15.3851 10.3352C15.4047 10.7279 15.7793 11.0548 16.1725 11.048C16.5818 11.0408 16.9048 10.6533 16.8853 10.2606L16.3549 1.24311C16.2804 0.793673 16.036 0.593994 15.6422 0.530345Z"
                fill="#132D47"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:max-w-[450px] max-w-[450px] w-full h-[450px] rounded-3xl overflow-hidden relative">
        <Image
          src={Doctorone}
          alt="Yoga Maman"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg text-white font-[Atyp] font-semibold leading-6">
            Doctor’s Name (Qualification)
          </h2>
          <hr className="text-white mb-2" /> 
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Experience :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Department :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
            Category : Specialist
          </p>
          <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
            <span className="uppercase text-base text-primary font-[Duplet] ">
              Book Now
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6422 0.530345L6.62474 2.75494e-05C6.17709 -0.00395538 5.8569 0.320073 5.83737 0.712811C5.81783 1.10555 6.15739 1.48065 6.55013 1.50017L13.8934 1.93107L0.217953 15.6065C-0.0750044 15.8995 -0.0750307 16.3744 0.217927 16.6674C0.510885 16.9603 0.98586 16.9603 1.27882 16.6674L14.9542 2.99194L15.3851 10.3352C15.4047 10.7279 15.7793 11.0548 16.1725 11.048C16.5818 11.0408 16.9048 10.6533 16.8853 10.2606L16.3549 1.24311C16.2804 0.793673 16.036 0.593994 15.6422 0.530345Z"
                fill="#132D47"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:max-w-[450px] max-w-[450px] w-full h-[450px] rounded-3xl overflow-hidden relative">
        <Image
          src={Doctortwo}
          alt="Yoga Maman"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg text-white font-[Atyp] font-semibold leading-6">
            Doctor’s Name (Qualification)
          </h2>
          <hr className="text-white mb-2" /> 
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Experience :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Department :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
            Category : Specialist
          </p>
          <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
            <span className="uppercase text-base text-primary font-[Duplet] ">
              Book Now
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6422 0.530345L6.62474 2.75494e-05C6.17709 -0.00395538 5.8569 0.320073 5.83737 0.712811C5.81783 1.10555 6.15739 1.48065 6.55013 1.50017L13.8934 1.93107L0.217953 15.6065C-0.0750044 15.8995 -0.0750307 16.3744 0.217927 16.6674C0.510885 16.9603 0.98586 16.9603 1.27882 16.6674L14.9542 2.99194L15.3851 10.3352C15.4047 10.7279 15.7793 11.0548 16.1725 11.048C16.5818 11.0408 16.9048 10.6533 16.8853 10.2606L16.3549 1.24311C16.2804 0.793673 16.036 0.593994 15.6422 0.530345Z"
                fill="#132D47"
              />
            </svg>
          </button>
        </div>
      </div>

            <div className="lg:max-w-[450px] max-w-[450px] w-full h-[450px] rounded-3xl overflow-hidden relative">
        <Image
          src={Doctorone}
          alt="Yoga Maman"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg text-white font-[Atyp] font-semibold leading-6 mb-2">
            Doctor’s Name (Qualification)
          </h2>

          <hr className="text-white mb-2" /> 
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Experience :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Department :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
            Category : Specialist
          </p>
          <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
            <span className="uppercase text-base text-primary font-[Duplet] ">
              Book Now
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6422 0.530345L6.62474 2.75494e-05C6.17709 -0.00395538 5.8569 0.320073 5.83737 0.712811C5.81783 1.10555 6.15739 1.48065 6.55013 1.50017L13.8934 1.93107L0.217953 15.6065C-0.0750044 15.8995 -0.0750307 16.3744 0.217927 16.6674C0.510885 16.9603 0.98586 16.9603 1.27882 16.6674L14.9542 2.99194L15.3851 10.3352C15.4047 10.7279 15.7793 11.0548 16.1725 11.048C16.5818 11.0408 16.9048 10.6533 16.8853 10.2606L16.3549 1.24311C16.2804 0.793673 16.036 0.593994 15.6422 0.530345Z"
                fill="#132D47"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:max-w-[450px] max-w-[450px] w-full h-[450px] rounded-3xl overflow-hidden relative">
        <Image
          src={Doctortwo}
          alt="Yoga Maman"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg text-white font-[Atyp] font-semibold leading-6">
            Doctor’s Name (Qualification)
          </h2>
            <hr className="text-white mb-2" /> 
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Experience :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Department :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
            Category : Specialist
          </p>
          <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
            <span className="uppercase text-base text-primary font-[Duplet] ">
              Book Now
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6422 0.530345L6.62474 2.75494e-05C6.17709 -0.00395538 5.8569 0.320073 5.83737 0.712811C5.81783 1.10555 6.15739 1.48065 6.55013 1.50017L13.8934 1.93107L0.217953 15.6065C-0.0750044 15.8995 -0.0750307 16.3744 0.217927 16.6674C0.510885 16.9603 0.98586 16.9603 1.27882 16.6674L14.9542 2.99194L15.3851 10.3352C15.4047 10.7279 15.7793 11.0548 16.1725 11.048C16.5818 11.0408 16.9048 10.6533 16.8853 10.2606L16.3549 1.24311C16.2804 0.793673 16.036 0.593994 15.6422 0.530345Z"
                fill="#132D47"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:max-w-[450px] max-w-[450px] w-full h-[450px] rounded-3xl overflow-hidden relative">
        <Image
          src={Doctorone}
          alt="Yoga Maman"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg text-white font-[Atyp] font-semibold leading-6">
            Doctor’s Name (Qualification)
          </h2>
          <hr className="text-white mb-2" /> 
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Experience :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Department :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
            Category : Specialist
          </p>
          <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
            <span className="uppercase text-base text-primary font-[Duplet] ">
              Book Now
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6422 0.530345L6.62474 2.75494e-05C6.17709 -0.00395538 5.8569 0.320073 5.83737 0.712811C5.81783 1.10555 6.15739 1.48065 6.55013 1.50017L13.8934 1.93107L0.217953 15.6065C-0.0750044 15.8995 -0.0750307 16.3744 0.217927 16.6674C0.510885 16.9603 0.98586 16.9603 1.27882 16.6674L14.9542 2.99194L15.3851 10.3352C15.4047 10.7279 15.7793 11.0548 16.1725 11.048C16.5818 11.0408 16.9048 10.6533 16.8853 10.2606L16.3549 1.24311C16.2804 0.793673 16.036 0.593994 15.6422 0.530345Z"
                fill="#132D47"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:max-w-[450px] max-w-[450px] w-full h-[450px] rounded-3xl overflow-hidden relative">
        <Image
          src={Doctortwo}
          alt="Yoga Maman"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-lg text-white font-[Atyp] font-semibold leading-6">
            Doctor’s Name (Qualification)
          </h2>
          <hr className="text-white mb-2" /> 
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Experience :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-2">
            Department :
          </p>
          <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
            Category : Specialist
          </p>
          <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
            <span className="uppercase text-base text-primary font-[Duplet] ">
              Book Now
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6422 0.530345L6.62474 2.75494e-05C6.17709 -0.00395538 5.8569 0.320073 5.83737 0.712811C5.81783 1.10555 6.15739 1.48065 6.55013 1.50017L13.8934 1.93107L0.217953 15.6065C-0.0750044 15.8995 -0.0750307 16.3744 0.217927 16.6674C0.510885 16.9603 0.98586 16.9603 1.27882 16.6674L14.9542 2.99194L15.3851 10.3352C15.4047 10.7279 15.7793 11.0548 16.1725 11.048C16.5818 11.0408 16.9048 10.6533 16.8853 10.2606L16.3549 1.24311C16.2804 0.793673 16.036 0.593994 15.6422 0.530345Z"
                fill="#132D47"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorList;
