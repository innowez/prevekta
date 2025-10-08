import React from "react";
import Image from "next/image";
import FinanceHero from "@assets/images/passive-investor.png";
import PassiveGraph from "@assets/images/passive-graph.png";
import SendReqBtn from "./comp/SendReqBtn";
import ContactSection from "@/components/layout/HomeSection/ContactSection";
import ROICalclator from "./comp/ROICalclator";

function page() {
  return (
    <main>
      <section className="p-4 lg:p-5 mb-12 md:mb-[80px]">
        <div className="relative w-full h-[634px] lg:h-[679px]">
          <div className="bg-[#132D4780] w-full h-full absolute z-10 rounded-2xl lg:rounded-4xl"></div>
          <Image
            src={FinanceHero}
            alt=""
            className="absolute w-full h-full rounded-2xl lg:rounded-4xl object-cover object-bottom"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center  w-full">
            <h2 className="uppercase text-white text-base lg:text-2xl text-center font-extralight font-[Duplet] mb-20">
              Passive Investor
            </h2>

            <h1 className="text-white text-2xl lg:text-[40px] text-center font-[Atyp] font-bold leading-[29px] lg:leading-12 mb-6">
              Hands-Free Investment, <br />
              High Returns
            </h1>

            <SendReqBtn />
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-[80px]">
        <h1 className="px-4 lg:px-5 text-primary text-2xl lg:text-[40px] font-Atpy mb-6 lg:mb-12">
          Why Invest with Prevekta?
        </h1>

        <div className="px-4 lg:px-5 flex justify-between gap-2 overflow-x-scroll lg:overflow-x-auto no-scrollbar">
          <div className="relative">
            <div className="absolute top-0 left-0 bg-primary w-14 h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="14"
                fill="none"
                viewBox="0 0 55 14"
              >
                <path
                  fill="#fff"
                  d="M40.39 7q0-1.944.934-3.539A6.8 6.8 0 0 1 43.91.933Q45.563 0 47.546 0t3.617.933a6.64 6.64 0 0 1 2.586 2.528q.953 1.595.953 3.539t-.953 3.558a6.8 6.8 0 0 1-2.586 2.528Q49.529 14 47.546 14t-3.636-.914a7 7 0 0 1-2.586-2.528Q40.391 8.944 40.391 7m2.878 0q0 1.245.564 2.256a4.4 4.4 0 0 0 1.536 1.614 4.2 4.2 0 0 0 2.178.583q1.185 0 2.159-.583a4.3 4.3 0 0 0 1.555-1.614q.564-1.012.564-2.256t-.564-2.256a4.2 4.2 0 0 0-1.536-1.594 4.05 4.05 0 0 0-2.178-.603q-1.186 0-2.178.603-.972.583-1.536 1.594T43.268 7M25.582 7q0-1.944.953-3.539A6.8 6.8 0 0 1 29.12.933Q30.754 0 32.738 0q1.516 0 2.78.544 1.284.545 2.178 1.44a6.5 6.5 0 0 1 1.4 1.963l-2.567.992a4.2 4.2 0 0 0-1.516-1.711 4 4 0 0 0-2.275-.68q-1.187 0-2.178.602-.972.583-1.536 1.594T28.46 7t.564 2.256a4.4 4.4 0 0 0 1.536 1.614 4.2 4.2 0 0 0 2.178.583q1.263 0 2.275-.661a4.3 4.3 0 0 0 1.516-1.73l2.567.99a6.5 6.5 0 0 1-1.4 1.965q-.894.894-2.178 1.439-1.264.544-2.78.544-1.984 0-3.617-.914a7 7 0 0 1-2.586-2.528Q25.582 8.944 25.582 7M9.992 7q0-1.944.933-3.539A6.8 6.8 0 0 1 13.513.933Q15.164 0 17.148 0q1.983 0 3.616.933a6.64 6.64 0 0 1 2.587 2.528q.952 1.595.952 3.539t-.953 3.558a6.8 6.8 0 0 1-2.586 2.528Q19.131 14 17.148 14t-3.636-.914a7 7 0 0 1-2.587-2.528Q9.993 8.944 9.993 7m2.878 0q0 1.245.564 2.256a4.4 4.4 0 0 0 1.536 1.614 4.2 4.2 0 0 0 2.178.583q1.186 0 2.158-.583a4.3 4.3 0 0 0 1.556-1.614q.564-1.012.564-2.256t-.564-2.256a4.2 4.2 0 0 0-1.536-1.594 4.05 4.05 0 0 0-2.178-.603q-1.186 0-2.178.603-.972.583-1.536 1.594T12.87 7M.297.194h8.672v2.47H3.077v3.403h5.698v2.47H3.077v5.269H.297z"
                ></path>
              </svg>
            </div>
            <div
              className="clipper w-[298px] h-[263px] lg:w-[429px] lg:h-[377px] bg-primary flex flex-col justify-between p-4 lg:p-10 relative"
              // style={{
              //   clipPath: `path("M429 329c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V138c0-25.405 20.595-46 46-46s46-20.595 46-46 20.595-46 46-46h243c26.51 0 48 21.49 48 48z")`,
              // }}
            >
              <h1 className="text-white text-base lg:text-2xl font-semibold font-[Atyp] ml-14 lg:ml-20">
                FOCO Model <br />
                <span className="text-xs font-extralight">
                  (Franchise Owned, Company Operated)
                </span>
              </h1>

              <p className="text-white text-lg leading-[23px] font-[Duplet]">
                You own the franchise, while our expert team handles operations.
              </p>

              <div className="absolute top-1/2 right-10 -translate-y-1/2 -z-10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="217"
                  height="243"
                  fill="none"
                  viewBox="0 0 217 243"
                >
                  <path
                    fill="#183653"
                    d="M207.958 198h-9.041v-72a8.98 8.98 0 0 0-2.649-6.364 9.06 9.06 0 0 0-6.393-2.636h-72.333V45h9.041a9.07 9.07 0 0 0 6.394-2.636A8.98 8.98 0 0 0 135.625 36V9a8.98 8.98 0 0 0-2.648-6.364A9.07 9.07 0 0 0 126.583 0H90.417a9.06 9.06 0 0 0-6.394 2.636A8.98 8.98 0 0 0 81.375 9v27a8.98 8.98 0 0 0 2.648 6.364A9.06 9.06 0 0 0 90.417 45h9.041v72H27.125a9.06 9.06 0 0 0-6.393 2.636A8.98 8.98 0 0 0 18.083 126v72H9.042a9.06 9.06 0 0 0-6.394 2.636A8.98 8.98 0 0 0 0 207v27a8.98 8.98 0 0 0 2.648 6.364A9.06 9.06 0 0 0 9.042 243h36.166a9.06 9.06 0 0 0 6.394-2.636A8.98 8.98 0 0 0 54.25 234v-27a8.98 8.98 0 0 0-2.648-6.364A9.06 9.06 0 0 0 45.208 198h-9.041v-63h63.291v63h-9.041a9.06 9.06 0 0 0-6.394 2.636A8.98 8.98 0 0 0 81.375 207v27a8.98 8.98 0 0 0 2.648 6.364A9.06 9.06 0 0 0 90.417 243h36.166a9.06 9.06 0 0 0 6.394-2.636 8.98 8.98 0 0 0 2.648-6.364v-27a8.98 8.98 0 0 0-2.648-6.364 9.06 9.06 0 0 0-6.394-2.636h-9.041v-63h63.291v63h-9.041a9.06 9.06 0 0 0-6.394 2.636A8.98 8.98 0 0 0 162.75 207v27c0 2.387.953 4.676 2.648 6.364a9.06 9.06 0 0 0 6.394 2.636h36.166a9.06 9.06 0 0 0 6.394-2.636A8.98 8.98 0 0 0 217 234v-27a8.98 8.98 0 0 0-2.648-6.364 9.06 9.06 0 0 0-6.394-2.636"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 bg-primary w-14 h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                fill="none"
                viewBox="0 0 42 42"
              >
                <path
                  fill="#fff"
                  d="m41.74 24.926-3.633-5.489a3 3 0 0 1-.32-1.069c-.624-7.206-6.7-12.868-14.11-12.868-.597 0-1.177.044-1.76.116a12.2 12.2 0 0 1 1.221 5.342c0 6.932-5.667 12.565-12.629 12.565-.174 0-.335 0-.509-.014.857 3.19 2.704 6.108 5.174 8.218.422.346.668.852.668 1.387V39.2c0 .634.493 1.169 1.134 1.213l12.209 1.083a1.23 1.23 0 0 0 1.337-1.227v-3.717a.68.68 0 0 1 .683-.679h4.288a2.365 2.365 0 0 0 2.369-2.367V27.83c0-.26.218-.462.464-.462h2.079c1.264 0 2.02-1.4 1.337-2.44z"
                ></path>
                <path
                  fill="#fff"
                  d="M10 .5C4.486.5 0 4.987 0 10.5c0 5.514 4.486 10 10 10 5.513 0 10-4.486 10-10 0-5.513-4.485-10-10-10m7.831 10c0 1.442-.418 2.777-1.102 3.939l-5.644-4.464V2.779c3.8.534 6.746 3.774 6.746 7.721m-8.916 7.723a7.8 7.8 0 0 1-4.311-2.072l4.31-3.41zm2.17-5.481 4.311 3.41a7.8 7.8 0 0 1-4.311 2.07zm-2.17-9.963v7.195L3.27 14.44c-.682-1.162-1.102-2.497-1.102-3.94 0-3.946 2.944-7.186 6.747-7.72"
                ></path>
              </svg>
            </div>
            <div
              className="clipper w-[298px] h-[263px] lg:w-[429px] lg:h-[377px] bg-primary flex flex-col justify-between p-4 lg:p-10 relative"
              // style={{
              //   clipPath: `path("M429 329c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V138c0-25.405 20.595-46 46-46s46-20.595 46-46 20.595-46 46-46h243c26.51 0 48 21.49 48 48z")`,
              // }}
            >
              <h1 className="text-white text-base lg:text-2xl font-semibold font-[Atyp] ml-14 lg:ml-20">
                Peace of Mind
              </h1>

              <p className="text-white text-base lg:text-lg leading-5 lg:leading-[23px] font-[Duplet]">
                No day-to-day responsibilities; enjoy the benefits of ownership
                without management stress.
              </p>

              <div className="absolute top-1/2 right-10 -translate-y-1/2 -z-10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="292"
                  height="239"
                  fill="none"
                  viewBox="0 0 292 239"
                >
                  <path
                    fill="#183653"
                    d="M140.676 221.265c.944 3.436-.498 7.056-3.487 8.794-3.513 2.054-7.551 3.949-12.008 5.608-8.915 3.396-19.665 4.226-30.27 2.356-2.308-.408-3.815-2.501-3.435-4.778 1.468-8.873 2.805-21.945.918-33.872-1.285-8.004-6.189-15.007-13.503-19.181l-37.206-21.299c-6.765-3.883-11.484-10.453-12.952-18.061L16.593 79.12a7.176 7.176 0 0 1 4.877-8.28c2.556-.817 5.244-.566 7.577.71 2.307 1.264 3.972 3.37 4.615 5.661l9.006 41.215a13.98 13.98 0 0 0 11.17 10.821l17.239 3.147c7.538 8.793 9.504 20.72 8.049 32.344 5.204-12.44 5.794-27.698-1.272-39.861 0-.013-.013-.013-.013-.026-1.285-2.843-5.414-11.624-9.36-16.258-1.993-2.33-2.95-6.213-.813-8.82 1.285-1.566 2.91-2.672 4.785-3.264a9.85 9.85 0 0 1 10.383 2.87c7.997 9.03 18.813 23.142 24.909 39.135a5.02 5.02 0 0 0 2.228 2.594l2.543 1.408c7.211 3.989 12.428 6.872 16.23 16.179 1.757 4.305 2.622 9.333 2.557 14.955l-.132 11.913c0 .474.053.948.184 1.396l9.387 34.293zM2.973 62.942A4.86 4.86 0 0 0 .56 65.166a4.9 4.9 0 0 0-.538 2.765q.06.532.236 1.066C2.488 72.42 4.48 76 6.552 79.528c-.669-6.279 2.097-12.282 7.092-15.85-3.16-1.868-7.08-2.25-10.671-.723zM270.53 70.84a9.63 9.63 0 0 0-7.577.711 9.57 9.57 0 0 0-4.667 5.924l-8.941 40.966a13.98 13.98 0 0 1-11.169 10.821l-17.24 3.146c-7.538 8.794-9.504 20.72-8.049 32.344-5.205-12.44-5.755-27.671 1.285-39.847 1.258-2.791 5.401-11.637 9.373-16.297 1.993-2.33 2.95-6.213.813-8.82a10.1 10.1 0 0 0-4.772-3.265 9.9 9.9 0 0 0-3.002-.474 9.77 9.77 0 0 0-7.368 3.331c-8.01 9.044-18.825 23.169-24.908 39.15a5.02 5.02 0 0 1-2.229 2.593l-2.543 1.408c-7.21 3.989-12.428 6.872-16.23 16.179-1.757 4.305-2.622 9.334-2.556 14.955l.131 11.9c0 .474-.053.948-.184 1.395l-9.386 34.294c-.944 3.422.498 7.042 3.487 8.793 3.513 2.054 7.551 3.95 11.982 5.608 8.941 3.397 19.691 4.239 30.297 2.37 2.307-.408 3.815-2.501 3.434-4.779-1.468-8.872-2.805-21.944-.917-33.872 1.284-8.004 6.188-15.007 13.503-19.18l37.205-21.299c6.765-3.884 11.484-10.453 12.94-18.035l12.139-61.712a7.2 7.2 0 0 0-4.877-8.307zm20.91-5.687a4.86 4.86 0 0 0-2.412-2.224 11.8 11.8 0 0 0-10.671.724 17.2 17.2 0 0 1 7.105 15.85c2.059-3.542 4.064-7.123 6.28-10.532.118-.356.197-.711.236-1.08a5 5 0 0 0-.538-2.751zm-100.971-20.8c0-22.905-17.278-41.821-39.434-44.335v40.086L182 70.461c5.297-7.346 8.469-16.35 8.469-26.092zM140.967 88.69V54.225L116.792 77.92c6.634 5.819 14.972 9.715 24.175 10.755zm10.068-34.465V88.69c9.203-1.053 17.541-4.936 24.174-10.755l-24.174-23.696zm-49.489-9.873c0 9.74 3.16 18.745 8.456 26.09l30.965-30.356V0c-22.156 2.528-39.421 21.431-39.421 44.336z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 bg-primary w-14 h-14 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="26"
                fill="none"
                viewBox="0 0 39 26"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M6.443 23.526a52 52 0 0 1-5.796.81l-.002-11.95h5.796zM13.02 8.254H7.225V23.36a46 46 0 0 0 5.796-1.641zm6.577-4.123h-5.796v17.304a44 44 0 0 0 5.796-2.68zm7.36 9.517V0H20.38v18.31a46 46 0 0 0 6.091-4.26q.244-.197.487-.402m1.217-5.692c-.031.005-.057.023-.066.055a.08.08 0 0 0 .017.086l2.85 2.98a67 67 0 0 1-4.014 3.607 46.7 46.7 0 0 1-6.578 4.553 44 44 0 0 1-6.578 3.06 47 47 0 0 1-6.579 1.89 52.5 52.5 0 0 1-6.578.959c-.048.005-.101.008-.149.014 15.409 2.843 26.559-1.768 34.525-10.236l2.64 2.93c.022.023.053.032.084.023a.09.09 0 0 0 .053-.073L38.5 7.126z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div
              className="clipper w-[298px] h-[263px] lg:w-[429px] lg:h-[377px] bg-primary flex flex-col justify-between p-4 lg:p-10 relative"
              // style={{
              //   clipPath: `path("M429 329c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V138c0-25.405 20.595-46 46-46s46-20.595 46-46 20.595-46 46-46h243c26.51 0 48 21.49 48 48z")`,
              // }}
            >
              <h1 className="text-white text-base lg:text-2xl font-semibold font-[Atyp] ml-14 lg:ml-20">
                Consistent Performance
              </h1>

              <p className="text-white text-base lg:text-lg leading-5 lg:leading-[23px] font-[Duplet]">
                Professionally managed operations ensure stability and growth.
              </p>

              <div className="absolute top-1/2 right-10 -translate-y-1/2 -z-10 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="310"
                  height="225"
                  fill="none"
                  viewBox="0 0 310 225"
                >
                  <path
                    fill="#183653"
                    d="m34.786 57.309 27.301 24.766c-15.857 20.165-25.342 45.578-25.342 73.186a4.807 4.807 0 0 1-4.797 4.807H4.797A4.807 4.807 0 0 1 0 155.261c0-37.103 13.048-71.21 34.786-97.952M150.203 0c-43.09 1.319-81.794 20.344-109.137 50.054l27.247 24.711c20.6-22.252 49.588-36.592 81.878-37.883zM275.27 57.39l-26.754 25.467c15.488 20.041 24.725 45.151 24.725 72.404 0 2.652 2.152 4.808 4.797 4.808h27.165c2.645 0 4.797-2.156 4.797-4.808 0-37.074-13.034-71.14-34.73-97.872M159.799 0v36.867c32.647 1.319 61.921 15.934 82.563 38.6l26.63-25.356C241.649 20.37 202.917 1.319 159.799 0m63.925 91.883-37.911 22.802a62.94 62.94 0 0 1 22.066 21.25l22.422-37.457a4.79 4.79 0 0 0-.726-5.866 4.78 4.78 0 0 0-5.851-.73m-12.788 77.06c0 30.907-25.095 56.057-55.931 56.057-30.837 0-55.932-25.151-55.932-56.057 0-30.893 25.095-56.046 55.932-56.046 30.836 0 55.931 25.151 55.931 56.046m-70.31-12.802c0-3.791 5.907-8.008 14.378-8.008s14.377 4.217 14.377 8.008c0 2.651 2.152 4.808 4.797 4.808s4.797-2.157 4.797-4.808c0-8.667-8.114-15.687-19.174-17.28v-3.544c0-2.651-2.152-4.808-4.797-4.808s-4.797 2.157-4.797 4.808v3.544c-11.06 1.593-19.174 8.612-19.174 17.28 0 9.877 10.526 17.61 23.971 17.61 8.47 0 14.378 4.217 14.378 8.008s-5.908 8.008-14.378 8.008-14.377-4.217-14.377-8.008a4.807 4.807 0 0 0-4.797-4.807 4.807 4.807 0 0 0-4.797 4.807c0 8.668 8.113 15.687 19.174 17.281v1.937a4.807 4.807 0 0 0 4.797 4.807 4.807 4.807 0 0 0 4.797-4.807v-1.937c11.06-1.594 19.174-8.613 19.174-17.281 0-9.876-10.526-17.61-23.971-17.61-8.471 0-14.378-4.217-14.378-8.008"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 lg:p-5 mb-12 md:mb-[80px]">
        <div className="bg-[#81DE7633] rounded-2xl lg:rounded-2xl pt-[72px] pb-5 px-5">
          <h1 className="text-primary text-2xl lg:text-[40px] text-center font-Atyp font-semibold mb-12 ">
            Investor Advantages
          </h1>

          <div className="flex gap-6 lg:gap-0 flex-col lg:flex-row justify-between items-start">
            <div className="relative method-3 flex flex-col lg:items-center w-full lg:w-1/3  h-[-webkit-fill-available]  pb-2">
              <h2 className="text-base lg:text-2xl text-primary lg:text-center leading-5 lg:leading-[29px] font-[Atyp] font-semibold mb-5 ">
                Hands-Free Ownership
              </h2>
              <p className="text-primary text-base lg:text-lg font-[Duplet] leading-5 lg:leading-[23px]">
                Simply invest; we manage the business <br className="hidden lg:block" /> for you.
              </p>
              <div className="sm:hidden absolute right-0 top-0 h-full w-1 method-1"></div>
            </div>

            <div className="relative method-1 h-[-webkit-fill-available] w-full lg:w-1/3">
              <div className="flex flex-col lg:items-center">
                <h2 className="text-base lg:text-2xl text-primary lg:text-center leading-5 lg:leading-[29px] font-[Atyp] font-semibold mb-5 ">
                  Expert-Driven Operations
                </h2>
                <p className="text-primary text-base lg:text-lg font-[Duplet] leading-5 lg:leading-[23px]">
                  Run by Prevekta’s trained professionals <br className="hidden lg:block" /> with proven systems.
                </p>
              </div>
            </div>

            <div className="relative method-1 flex flex-col lg:items-center w-full lg:w-1/3  h-[-webkit-fill-available]  pb-2 ">
              <h2 className="text-base lg:text-2xl text-primary lg:text-center leading-5 lg:leading-[29px] font-[Atyp] font-semibold mb-5 ">
                Transparency & Reliability
              </h2>
              <p className="text-primary text-base lg:text-lg font-[Duplet] leading-5 lg:leading-[23px]">
                Clear reporting and steady returns backed <br className="hidden lg:block" /> by Ayurveda’s growing demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 ">
        <h1 className="lg:hidden text-primary text-2xl leading-12 font-[Atyp] font-semibold">High-Profit, Assured Returns</h1>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          <Image
            src={PassiveGraph}
            alt="sdkf"
            width={563}
            height={577}
            className="w-full h-[319px] lg:w-[563px] lg:h-[577px] object-cover object-top-right rounded-3xl "
          />

          <div>
            <h1 className="hidden lg:block text-primary text-[40px] leading-12 font-[Atyp] font-semibold">
              High-Profit, <br />
              Assured Returns
            </h1>

            <div className="pt-8 pb-6 border-b border-b-[#132D474F]">
              <h1 className="mb-4 lg:mb-6 text-primary text-xl lg:text-2xl font-[Atyp] font-semibold">Monthly Assured Returns</h1>
              <p className="text-primary text-base lg:text-lg leading-[23px] font-[Duplet] font-extralight lg:font-semibold ">Minimum of 1% every month, adding up to 12% annually.</p>
            </div>

            <div className="pt-8 pb-6 border-b border-b-[#132D474F]">
              <h1 className="mb-4 lg:mb-6 text-primary text-xl lg:text-2xl font-[Atyp] font-semibold">Flat 10% Profit Share</h1>
              <p className="text-primary text-base lg:text-lg leading-[23px] font-[Duplet] font-extralight lg:font-semibold ">Directly from revenue, ensuring steady and transparent earnings.</p>
            </div>

            <div className="pt-8 pb-6 border-b border-b-[#132D474F]">
              <h1 className="mb-4 lg:mb-6 text-primary text-xl lg:text-2xl font-[Atyp] font-semibold">Stability + Growth</h1>
              <p className="text-primary text-base lg:text-lg leading-[23px] font-[Duplet] font-extralight lg:font-semibold ">A model built for financial security with long-term expansion potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator section */}
      <section className="p-5 mb-8 md:mb-[80px]">
        <ROICalclator />
      </section>

      <ContactSection />
    </main>
  );
}

export default page;
