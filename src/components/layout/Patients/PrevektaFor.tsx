import Image from "next/image";
import React from "react";
import MassageGirl from "@assets/images/massageGirl.png";
import MassageBed from "@assets/images/massagebed.png";

function PrevektaFor() {
  return (
    <div className="px-4 pt-12 lg:pt-[120px] overflow-x-hidden lg:overflow-x-visible lg:mb-28">
      <div className="flex justify-between lg:items-end flex-col lg:flex-row gap-4 mb-6">
        <div>
          <h1 className="text-primary text-base lg:text-2xl font-semibold font-[Duplet] mb-4">
            Who is Prevekta For?
          </h1>
          <h2 className="text-primary text-2xl lg:text-[40px] leading-[29px] lg:leading-[48px] ">
            If {"you're"} ready to heal, <br />
            Prevekta is ready for you
          </h2>
        </div>
        <p className="text-primary text-base lg:text-lg font-[Duplet] leading-5 lg:leading-[23px]">
          At Prevekta Ayurveda, we believe every wellness journey{" "}
          <br className="hidden lg:block" />
          begins with a choice the choice to care. When you take that{" "}
          <br className="hidden lg:block" />
          first step, we walk with you toward true healing.
        </p>
      </div>

      <div className="rounded-2xl lg:rounded-[28px] bg-primary mb-2 lg:mb-6 relative">
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "164px",
            left: "calc(50% - 1427px/2 + 0.5px)",
            top: "48px",

            /* Primary 2 */
            background: "#81DE76",
            filter: "blur(300px)",
          }}
        ></div>
        <div className="h-[256px] lg:h-[437px] rounded-2xl lg:rounded-[28px] ">
          <Image
            src={MassageGirl}
            alt="Left Side Half Logo"
            className="w-full h-full object-cover object-center lg:object-bottom rounded-2xl lg:rounded-[28px]"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <div className="p-4 lg:p-10 flex flex-col lg:flex-row justify-between gap-2">
          <h2 className="text-white text-xl lg:text-[32px] leading-6 lg:leading-[38px] font-Atyp ">
            We care for you not just to treat <br className="hidden lg:block" />
            but to transform
          </h2>

          <p className="text-base lg:text-lg text-white leading-[20px] lg:leading-[23px] font-[Duplet] ">
            Through personalized, root-cause care grounded in Ayurveda, we{" "}
            <br className="hidden lg:block" />
            don’t just give temporary relief. We restore balance, rejuvenate{" "}
            <br className="hidden lg:block" />
            vitality, and realign your mind, body, and spirit.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 mb-12 lg:mb-36 relative ">
        {[
          "The clarity in your thoughts",
          "The strength in your body",
          "The peace in your being",
        ].map((e, i) => (
          <div key={i + 1} className="bg-primary py-5 rounded-2xl w-full ">
            <p className="text-white text-center text-xl lg:text-2xl font-Atyp">
              {e}
            </p>
          </div>
        ))}

        <div
          className="-z-10"
          style={{
            position: "absolute",
            width: "214px",
            height: "206px",
            left: "calc(50% - 214px/2 + 193.5px)",
            top: "66px",
            background: "#81DE76",
            filter: "blur(150px)",
          }}
        ></div>
      </div>

      <div className="relative">
        <div
          className="-z-10"
          style={{
            position: "absolute",
            width: "240px",
            height: "225px",
            left: "calc(50% - 240px/2 - 145.5px)",
            top: "424px",
            background: "#81DE76",
            filter: "blur(150px)",
          }}
        ></div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4 lg:mb-12">
          <h1 className="text-2xl lg:text-[40px] text-primary font-Atyp ">
            Why choosing Prevekta <br className="lg:hidden" />
            is good
          </h1>
          <h2 className="text-lg text-primary leading-[23px] font-[Duplet] ">
            At Prevekta, we’re redefining the patient experience with care that
            feels <br className="hidden lg:block" />
            human, honest, and truly effective. {"Here's"} why people trust us
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-5 ">
          <div className="min-h-[240px] lg:min-h-[437px] lg:w-1/2 rounded-2xl lg:rounded-[28px] ">
            <Image
              src={MassageBed}
              alt="Left Side Half Logo"
              className="w-full h-full object-cover object-center lg:object-bottom rounded-2xl lg:rounded-[28px]"
              // style={{ transform: "scaleX(-1)" }}
            />
          </div>

          <div className="lg:w-1/2">
            {[
              "We Understand Your Pain",
              "Real Doctors. Real Ayurveda. Real Results.",
              "Clean, Calm & Comfortable Therapy Suites",
              "Your Progress, Measured & Tracked",
              "No Pushy Sales. Just Honest Care.",
            ].map((e, i) => (
              <div
                key={i + 1}
                className="rounded-full flex items-center gap-2 lg:gap-4 p-4 lg:px-6 lg:py-7 w-full  "
                style={{
                  backgroundColor: `rgba(129, 222, 118, ${(i + 1) * 0.2})`,
                }}
              >
                <div
                  className={`h-5 w-5 lg:h-8 lg:w-8 rounded-full ${
                    i % 2 === 0 ? "border border-primary" : "bg-primary"
                  }`}
                ></div>
                <p className="text-base lg:text-2xl text-primary">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrevektaFor;
