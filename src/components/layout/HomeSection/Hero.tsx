
import Image from "next/image";
import WisdomImage from "@assets/images/08d3753354181adb573fe9f85ff1e540754516d7.png";
import PeapleImage from "@assets/images/23d33544155f1b27c3c4cc9a89a7961f52e29477.jpg";
import ClinicImage from "@assets/images/ca08e9ba0fc4400efd6cc5e6712e7df02003591b.jpg";
// import SmokeImage from "@assets/images/5a5b3ce1edaad7f42a20285acef71d0f88255158.jpg";
import SmokeImage2 from "@assets/images/SmokeImage2.png";

const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="relative min-h-screen main-frame">

        {/* Frame one */}
        <div className="sticky top-16 left-0 h-screen w-full overflow-hidden z-0">
          <Image
            src={WisdomImage}
            alt="Wisdom Image"
            fill
            className="object-cover"
            priority
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(19, 45, 71, 0.08) 0%, rgba(19, 45, 71, 0.4) 100%)",
            }}
          />
          <div className="relative z-10 min-h-screen flex flex-col px-4 md:px-16 w-full max-w-7xl mx-auto justify-start pt-20">
            <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-[Atyp] font-bold leading-[48px] md:leading-[72px] text-white">
                Once upon a time
              </h1>
              <p className="text-lg md:text-xl font-[Duplet]  leading-6 md:leading-[23px] text-white">
                Ayurveda Thrived in the sacred silence of forests, whispered in
                the homes of grandmothers, and guided the hands of Vaidyas. But
                as the world sped forward, this 5,000-year-old science was
                scattered across clinics, scripts, tribes, and towns.
              </p>
            </div>
          </div>
        </div>

        {/* Frame two */}
        <div
          className="z-20 sticky top-16 left-0 h-[90vh] w-full overflow-hidden"
          // style={{
          //   backgroundImage: `url(${PeapleImage.src})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <Image
            src={PeapleImage}
            alt="Wisdom Image"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(19, 45, 71, 0.08) 0%, rgba(19, 45, 71, 0.4) 100%)",
            }}
          />
          <div className="w-full uppercase px-4 md:px-16 py-16 relative z-10 ">
            <h1 className="text-3xl  font-[Atyp] font-bold text-white">
              Each practitioner worked in isolation.
              <br /> Each remedy lived in a small corner.
              <br /> Each patient searched in pieces
            </h1>
          </div>
          <div className="text-3xl uppercase absolute z-10 -bottom-5 right-8 flex flex-row-reverse w-full text-white p-4 md:p-8">
            But healing was never meant to be fragmented.
          </div>
        </div>

        {/* Frame Three */}
        <div
          className="z-20 sticky top-16 left-0 h-screen w-full overflow-hidden"
          // style={{
          //   backgroundImage: ` url(${ClinicImage.src})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <Image
            src={ClinicImage}
            alt="Wisdom Image"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 flex justify-center items-center"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(19, 45, 71, 0.08) 0%, rgba(19, 45, 71, 0.4) 100%)",
            }}
          />
          <div className=" h-full uppercase  flex justify-center items-center px-4 md:px-16 py-8 relative z-10">
            <h1 className="text-5xl  font-atyp font-bold text-white">
              Prevekta was born to change this.
            </h1>
          </div>
        </div>

        {/* Frame Four */}
        <div
          className="z-20 sticky top-16 left-0 h-[90vh] w-full overflow-hidden"
          // style={{
          //   backgroundImage: ` url(${SmokeImage.src})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <Image
            src={SmokeImage2}
            alt="Wisdom Image"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(19, 45, 71, 0.08) 0%, rgba(19, 45, 71, 0.4) 50%)",
            }}
          />
          <div className="w-full uppercase px-4 md:px-16 py-8 relative z-20">
            <div className="text-3xl font-atyp font-bold text-white">
              <div className="text-white" >{"IT'S"} VERY NAME</div>
              <div className="mt-4 text-white">Prevail + Ekta (Unity)</div>
            </div>
          </div>
          <div className=" absolute bottom-5 lg:bottom-6  flex flex-row-reverse w-full text-white p-4 md:p-8">
            <div>
              <div className="text-2xl">Echoing our mission:</div>
              <div className="mt-4 w-[300px]">
                To bring together the broken strands of Ayurveda into one
                powerful platform
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
