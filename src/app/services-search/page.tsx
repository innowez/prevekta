import React from "react";
import SearchButton from "./comp/SearchButton";
import YogaMaman from "@/assets/images/yogaMaman.png";
import AyurAmachi from "@/assets/images/ayurAmachi.png";
import Image from "next/image";
import ContactSection from "@/components/layout/HomeSection/ContactSection";

function page() {
  return (
    <main>
      <section className="mb-6 lg:mb-12">
        <div className="mt-8 lg:mt-24 mb-6 lg:mb-12">
          <h1 className="text-2xl lg:text-[40px] text-center text-primary font-[Atyp] font-semibold mb-4 lg:mb-6">
            Kayachitsa (General)
          </h1>
          <p className="text-base lg:text-lg text-primary text-center leading-[20px] lg:leading-[23px] font-[Duplet] ">
            Discover treatments, trusted practitioners, and knowledge <br className="hidden lg:block" />tailored
            to your needs.
          </p>
        </div>

        <div className="mx-4 mb-6 flex justify-center ">
          <SearchButton />
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center content-center gap-2">
          {[
            "Panchakarma",
            "Weight Management",
            "Skin Health",
            "Stress Relief",
            "Immunity Boost",
          ].map((item, ind) => (
            <div
              key={"asf" + ind}
              className="bg-[#81DE7633] rounded-full py-2 px-4"
            >
              <span className="text-base text-primary font-[Duplet]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-4">
        <h1 className="text-xl lg:text-[32px] text-center text-primary font-[Atyp] font-semibold mb-4 lg:mb-12">
          Search Results for
          <br className="block lg:hidden"/>
          Kayachitsa (General)
        </h1>

        <div className="border border-primary rounded-4xl p-4">
          <div className="flex gap-3 mb-4 overflow-x-scroll no-scrollbar">
            <button className="text-white bg-primary rounded-xl text-lg text-center font-[Duplet] px-4 py-2 cursor-pointer">
              Articles
            </button>
            <button className="text-primary border border-primary rounded-xl text-lg text-center font-[Duplet] px-4 py-2 cursor-pointer">
              Doctors
            </button>
            <button className="text-primary border border-primary rounded-xl text-lg text-center font-[Duplet] px-4 py-2 cursor-pointer">
              Package
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:content-start gap-4">
            <div className="lg:max-w-[318px] max-w-[450px] h-[450px] rounded-3xl overflow-hidden relative">
              <Image
                src={YogaMaman}
                alt="Yoga Maman"
                className="w-full h-full object-cover "
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-2xl text-white font-[Atyp] font-semibold leading-6">
                  The Morning Rituals of Ayurveda
                </h2>
                <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
                  Start your day the Ayurvedic way.
                </p>
                <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
                  <span className="uppercase text-base text-primary font-[Duplet] ">
                    READ More
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

            <div className="lg:max-w-[318px] max-w-[450px] h-[450px] rounded-3xl overflow-hidden relative">
              <Image
                src={AyurAmachi}
                alt="Yoga Maman"
                className="w-full h-full object-cover "
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-2xl text-white font-[Atyp] font-semibold leading-6">
                  Healing in the Kitchen
                </h2>
                <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
                  From turmeric to cumin, everyday spices aren’t just for flavor
                  — they’re{" "}
                </p>
                <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
                  <span className="uppercase text-base text-primary font-[Duplet] ">
                    READ More
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

            <div className="lg:max-w-[318px] max-w-[450px] h-[450px] rounded-3xl overflow-hidden relative">
              <Image
                src={YogaMaman}
                alt="Yoga Maman"
                className="w-full h-full object-cover "
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-2xl text-white font-[Atyp] font-semibold leading-6">
                  The Morning Rituals of Ayurveda
                </h2>
                <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
                  Start your day the Ayurvedic way.
                </p>
                <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
                  <span className="uppercase text-base text-primary font-[Duplet] ">
                    READ More
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

            <div className="lg:max-w-[318px] max-w-[450px] h-[450px] rounded-3xl overflow-hidden relative">
              <Image
                src={AyurAmachi}
                alt="Yoga Maman"
                className="w-full h-full object-cover "
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-2xl text-white font-[Atyp] font-semibold leading-6">
                  Healing in the Kitchen
                </h2>
                <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
                  From turmeric to cumin, everyday spices aren’t just for flavor
                  — they’re{" "}
                </p>
                <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
                  <span className="uppercase text-base text-primary font-[Duplet] ">
                    READ More
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

            <div className="lg:max-w-[318px] max-w-[450px] h-[450px] rounded-3xl overflow-hidden relative">
              <Image
                src={YogaMaman}
                alt="Yoga Maman"
                className="w-full h-full object-cover "
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-2xl text-white font-[Atyp] font-semibold leading-6">
                  The Morning Rituals of Ayurveda
                </h2>
                <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
                  Start your day the Ayurvedic way.
                </p>
                <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
                  <span className="uppercase text-base text-primary font-[Duplet] ">
                    READ More
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

            <div className="lg:max-w-[318px] max-w-[450px] h-[450px] rounded-3xl overflow-hidden relative">
              <Image
                src={AyurAmachi}
                alt="Yoga Maman"
                className="w-full h-full object-cover "
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-2xl text-white font-[Atyp] font-semibold leading-6">
                  Healing in the Kitchen
                </h2>
                <p className="text-base text-white font-[Duplet] font-extralight leading-[23px] mb-4">
                  From turmeric to cumin, everyday spices aren’t just for flavor
                  — they’re{" "}
                </p>
                <button className="flex justify-between items-center w-full bg-secondary rounded-full px-4 py-3.5 ">
                  <span className="uppercase text-base text-primary font-[Duplet] ">
                    READ More
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
        </div>
      </section>
      <ContactSection />
    </main>
  );
}

export default page;
