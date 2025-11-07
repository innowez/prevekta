'use client'
import React, { useState } from "react";
import SearchButton from "./comp/SearchButton";
import ContactSection from "@/components/layout/HomeSection/ContactSection";
import ArticalList from "./comp/ArticalList";
import DoctorList from "./comp/DoctorList";
import Package from "./comp/Package";

function Service() {
  const [selTab, setSelTab] = useState(0)
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
            <button onClick={() => setSelTab(0)} className={`${selTab === 0 ? "text-white bg-primary" : " text-primary border border-primary"}  rounded-xl text-lg text-center font-[Duplet] px-4 py-2 cursor-pointer`}>
              Articles
            </button>
            <button  onClick={() => setSelTab(1)} className={`${selTab === 1 ? "text-white bg-primary" : " text-primary border border-primary"}  rounded-xl text-lg text-center font-[Duplet] px-4 py-2 cursor-pointer`}>
              Doctors
            </button>
            <button  onClick={() => setSelTab(2)} className={`${selTab === 2 ? "text-white bg-primary" : "text-primary border border-primary"}  rounded-xl text-lg text-center font-[Duplet] px-4 py-2 cursor-pointer`}>
              Package
            </button>
          </div>

          {selTab === 0 && <ArticalList />}
          {selTab === 1 && <DoctorList />}
          {selTab === 2 && <Package />}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}

export default Service;
