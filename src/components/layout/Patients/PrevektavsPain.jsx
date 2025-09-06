import Image from "next/image";
import React from "react";
import Human from "@assets/images/Human.png";

function PrevektavsPain() {
  return (
    <div className="px-4 mt-12 lg:mt-32">
      <h1 className="text-primary text-[28px] lg:text-6xl leading-8 text-center ">
        Prevekta vs Pain
      </h1>

      <div className="min-h-[550px] lg:min-h-[654px] relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20"
          style={{
            background: "#81DE76",
            filter: "blur(200px)",
          }}
        ></div>
        <Image
          src={Human}
          width={171.93321228027344}
          height={407}
          className="absolute top-2.5 left-1/2 -translate-x-1/2 "
        />
        <div
          className=" border border-[#132D471A] rounded-[20px] p-4 lg:max-w-[389px] absolute bottom-3 lg:top-1/2 lg:-translate-y-1/2 lg:left-28 "
          style={{
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(19, 45, 71, 0.1)",
            borderRadius: "20px",
          }}
        >
          <p className="text-primary text-base leading-5 font-[Duplet]">
            Pain is one of the most commonly ignored, self-managed, or
            mistreated conditions in today’s world. At Prevekta, pain isn’t just
            a symptom it’s a message. Our specialized Prevekta vs Pain segment
            focuses on identifying the root cause of chronic and
            lifestyle-related pain and treating it with classical Ayurvedic
            interventions like Panchakarma, Marma therapy, Yoga, and Herbal
            formulations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrevektavsPain;
