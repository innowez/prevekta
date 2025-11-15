"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { X } from "lucide-react";
import { services } from "@/data/services";
import UrbanCleanse from "@/assets/images/urban_cleanse.png";
import TechNeck from "@/assets/images/tech_neck.jpg";
import DigitalDetox from "@/assets/images/digital_detox.jpg";
import Image from "next/image";
import { useServiceStore } from "@/provider/store-provider";
import { AnimatePresence, motion } from "motion/react";

function PackagesPage() {
  const servicesList = [
    {
      name: "Urban Cleanse",
      img: UrbanCleanse,
      desc: "A 3-day Ayurvedic package that gently purifies the body, calms the mind, and resto...",
      dur: "3 days",
      price: 7999,
      oldPrice: 9999,
      details: [
        "Individuals feeling tiredness, bloating, or heaviness",
        "Those with poor digestion or irregular bowel habits.",
        "People experiencing skin problems & recurrent infections.",
      ],
    },

    {
      name: "TECH NECK & SPINE RELIEF",
      img: TechNeck,
      desc: "This 3-days tech neck & spine relief package focuses on deep muscular relaxat...",
      dur: "3 days",
      price: 5999,
      oldPrice: 7999,
      details: [
        "People with neck, shoulder, or back stiffness from long screen time.",
        "Those with poor posture, tension headaches, or cervical discomfort.",
        "People in IT or desk jobs with limited movement.",
      ],
    },

    {
      name: "DIGITAL DETOX",
      img: DigitalDetox,
      desc: "The Digital Detox therapy is specifically designed to counteract the effects of excessive...",
      dur: "3 days",
      price: 5999,
      oldPrice: 7999,
      details: [
        "Ideal for individuals like IT professionals and night shift workers.",
        `Perfect for those experiencing <br /> <ul class="list-disc"><li>Eye strain or dryness of eyes.</li><li>Headaches due to screen exposure</li><li>Burning , Itching and watering of eyes.</li></ul>`,
      ],
    },
  ];
  const [selectBtn, setSelectBtn] = useState({
    ANUBAVA: false,
    RAKSHA: false,
    SIKISHA: false,
    SERVICES: false,
  });

  const [select, setselect] = useState("");

  const setServices = useServiceStore((state) => state.setService);

  return (
    <main>
      <section className="mb-6 lg:mb-12 pt-8 lg:pt-24 px-4">
        <div>
          <h1 className="text-xl lg:text-[40px] text-center text-primary font-[Atyp] lg:leading-[48px] font-semibold mb-2 ">
            Discover Ayurveda Packages <br className="hidden lg:block" />
            Tailored for You
          </h1>
          <h2 className="text-base lg:text-lg text-center text-primary leading-5 lg:leading-[23px] font-[Duplet] ">
            Explore personalized wellness journeys across our three holistic
            categories
          </h2>
        </div>
      </section>

      <section className="mb-6 lg:mb-12 mt-8 ">
        <div className="flex gap-2 overflow-x-auto px-4 mb-4 no-scrollbar">
          <motion.button
            className={`px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
              selectBtn.ANUBAVA
                ? "bg-primary text-white"
                : "border border-primary text-primary bg-white"
            }`}
            onClick={() =>
              setSelectBtn((prev) => ({ ...prev, ANUBAVA: !prev.ANUBAVA, RAKSHA: false, SIKISHA: false  }))
            }
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.span layout="position">ANUBAVA</motion.span>
            {selectBtn.ANUBAVA && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <X />
              </motion.div>
            )}
          </motion.button>

          <motion.button
            className={`px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
              selectBtn.RAKSHA
                ? "bg-primary text-white"
                : "border border-primary text-primary bg-white"
            }`}
            onClick={() =>
              setSelectBtn((prev) => ({ ...prev, RAKSHA: !prev.RAKSHA, ANUBAVA: false, SIKISHA: false }))
            }
            whileTap={{ scale: 0.95 }}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.span>RAKSHA</motion.span>
            {selectBtn.RAKSHA && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <X />
              </motion.div>
            )}
          </motion.button>

          <motion.button
            className={` px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
              selectBtn.SIKISHA
                ? "bg-primary text-white"
                : "border border-primary text-primary bg-white"
            }`}
            onClick={() =>
              setSelectBtn((prev) => ({ ...prev, SIKISHA: !prev.SIKISHA, ANUBAVA: false, RAKSHA: false }))
            }
            whileTap={{ scale: 0.95 }}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span>SIKISHA</span>
            {selectBtn.SIKISHA && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <X />
              </motion.div>
            )}
          </motion.button>

          <AnimatePresence mode="wait">
            {select ? (
              <motion.button
                key="selected"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                // whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 bg-primary text-white"
                onClick={() => {
                  setselect("");
                }}
              >
                <motion.span layout="position">{select}</motion.span>
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <X />
                </motion.div>
              </motion.button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    key="dropdown"
                    // initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    layout
                    className={`px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
                      selectBtn.SERVICES
                        ? "bg-primary text-white"
                        : "border border-primary text-primary bg-white"
                    }`}
                  >
                    <motion.span layout="position">
                      {select || "SERVICES"}
                    </motion.span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="9"
                      fill="none"
                      viewBox="0 0 15 9"
                      animate={{ rotate: 0 }}
                      whileHover={{ y: 2 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <path
                        fill="#132D47"
                        d="m.136 1.158.084.099 6.375 7.34c.216.248.54.403.9.403.361 0 .685-.16.9-.403l6.37-7.326.108-.122A.73.73 0 0 0 15 .741C15 .333 14.653 0 14.222 0H.778C.347 0 0 .333 0 .741c0 .155.052.3.136.417"
                      ></path>
                    </motion.svg>
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start" asChild>
                  <DropdownMenuGroup>
                    {services.map((service, ind) => (
                      <DropdownMenuItem
                        key={service}
                        onClick={() => {
                          setselect(service);
                          setServices(ind);
                        }}
                        textValue={service}
                        asChild
                      >
                        <motion.div
                          whileHover={{
                            x: 4,
                          }}
                          transition={{ duration: 0.15 }}
                        >
                          {service}
                        </motion.div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {(select ||
            selectBtn.ANUBAVA ||
            selectBtn.SERVICES ||
            selectBtn.SIKISHA) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                height: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1], // Custom easing for smoother height animation
                },
                opacity: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              style={{ overflow: "hidden" }} // Prevents content from showing during collapse
            >
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-base lg:text-lg font-[Duplet] font-extralight leading-[23px] px-4 mb-3 lg:mb-6 text-primary"
              >
                Discover {"Ayurveda's"} magic — feel recharged, peaceful, and
                naturally alive in just a few days.
              </motion.p>
            </motion.div>
          )}
          {selectBtn.RAKSHA && (<motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                height: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1], // Custom easing for smoother height animation
                },
                opacity: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              style={{ overflow: "hidden" }} // Prevents content from showing during collapse
            >
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-base lg:text-lg font-[Duplet] font-extralight leading-[23px] px-4 mb-3 lg:mb-6 text-primary"
              >
                Catch early imbalances and restore vitality - thrive with Ayurveda through RAKSHA
              </motion.p>
            </motion.div>)}
        </AnimatePresence>

        <div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {servicesList.map((item, index) => (
            <div key={index + "aior"} className="bg-primary p-6 rounded-2xl ">
              <div className="h-[224px] lg:h-[301px] w-full rounded-xl relative overflow-hidden mb-3">
                <Image
                  src={item.img}
                  className="w-full h-full absolute object-cover "
                  alt="desia"
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-full z-10"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 55.81%, rgba(0, 0, 0, 0.5) 100%)",
                  }}
                ></div>

                <div className="absolute bottom-4 left-4 z-20 ">
                  <h2 className="text-white text-xl lg:text-2xl font-[Atyp] font-semibold ">
                    {item.name}
                  </h2>
                  <p className="text-white text-base lg:text-lg font-[Duplet] font-extralight leading-[23px] ">
                    {item.desc}
                  </p>
                </div>
              </div>
              <p className="text-secondary text-lg font-[Duplet] leading-[23px] mb-3 ">
                Duration: {item.dur}
              </p>
              <div className="flex gap-4 font-[Atyp] font-semibold text-2xl ">
                <p className="text-white">
                  <span className="text-lg">₹</span>{" "}
                  <span className="">{item.price}</span>
                </p>

                <p className="text-[#ffffff3b]">
                  <span className="text-lg">₹</span>{" "}
                  <span className="">{item.oldPrice}</span>
                </p>
              </div>

              <button className="bg-secondary text-primary rounded-full py-3.5 px-4 flex justify-between items-center my-3 w-full ">
                <span className="uppercase leading-[15px] font-[Duplet] ">
                  View Details
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="none"
                  viewBox="0 0 17 17"
                >
                  <path
                    fill="#132D47"
                    d="M15.642.53 6.625 0c-.448-.004-.768.32-.788.713a.78.78 0 0 0 .713.787l7.343.431L.218 15.607a.75.75 0 1 0 1.06 1.06L14.955 2.992l.431 7.343c.02.393.394.72.787.713.41-.007.733-.395.713-.787l-.53-9.018c-.075-.45-.319-.649-.713-.713"
                  ></path>
                </svg>
              </button>

              <hr className="w-full text-[#ffffff44] mb-6" />

              <div className="flex flex-col gap-4 ">
                {item.details.map((item, index) => (
                  <div className="flex gap-[18px] " key={index + "sins"}>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#81DE76"
                          d="M10.029 0c-.254 0-.301.046-.373.073-.071.029-.129.054-.19.084q-.182.09-.404.219c-.297.17-.654.387-1.01.607-.355.22-.708.443-.983.613l-.34.207-.078.042c.051-.016.082-.025 0 .006-.082.034-.05.019 0-.006-.029.01-.055.019-.089.025-.095.025-.23.055-.388.091l-1.128.256c-.407.094-.815.191-1.146.279q-.246.065-.44.128a2 2 0 0 0-.196.074c-.07.032-.135.032-.316.21-.18.179-.18.244-.21.314-.032.07-.054.13-.076.195q-.065.194-.13.44c-.09.33-.19.737-.286 1.144l-.263 1.126-.093.388q-.016.05-.025.088c.025-.05.041-.081.006.001-.034.081-.022.05-.006 0l-.042.077c-.051.084-.124.203-.21.34-.171.273-.396.625-.618.98-.222.353-.442.71-.614 1.005q-.13.22-.221.403a2 2 0 0 0-.084.19C.047 9.669 0 9.716 0 9.97c0 .254.046.3.073.372.029.071.054.129.084.19q.09.184.219.404c.17.297.387.654.607 1.01s.443.709.613.983c.085.137.157.256.207.34l.042.078c-.016-.05-.025-.081.006 0 .034.082.019.05-.006 0 .01.029.019.055.025.089.025.096.055.23.091.388l.256 1.128c.094.408.191.815.279 1.146q.065.246.128.44c.022.066.044.127.074.197.032.07.032.135.21.315.18.18.244.18.314.211.07.032.13.053.195.075.13.045.275.086.44.131.33.09.737.19 1.144.285l1.127.263c.157.037.292.07.387.094l.089.025c-.05-.025-.082-.042 0-.007.081.034.051.023 0 .007q.036.017.077.042c.085.05.203.123.34.21.273.17.625.396.98.618.354.222.71.441 1.006.613q.22.13.402.221c.061.032.119.057.19.085s.118.074.372.075.3-.046.372-.073a3 3 0 0 0 .19-.083q.184-.091.404-.22c.297-.17.655-.387 1.01-.607.356-.22.709-.442.983-.612l.341-.208.078-.042c-.052.016-.082.026-.001-.006.082-.034.051-.019 0 .006.029-.01.056-.018.09-.025.095-.025.23-.055.387-.091l1.128-.256c.408-.094.815-.19 1.146-.279a7 7 0 0 0 .44-.128c.066-.022.127-.043.197-.074s.135-.031.315-.21.18-.244.212-.314c.031-.07.052-.13.074-.195q.066-.193.132-.44c.09-.33.189-.737.285-1.144s.189-.812.262-1.126c.037-.157.07-.292.094-.388q.015-.048.025-.088c-.025.05-.042.081-.006-.001.034-.08.025-.05.006 0l.042-.077c.051-.084.123-.203.21-.34.171-.273.396-.625.618-.979s.442-.71.613-1.006q.13-.22.221-.402c.032-.062.057-.12.085-.19.028-.072.075-.118.075-.372.001-.255-.046-.301-.073-.373a3 3 0 0 0-.083-.19 7 7 0 0 0-.22-.404c-.17-.297-.387-.654-.607-1.01-.22-.355-.442-.708-.612-.983l-.208-.34-.041-.079c.015.052.025.082-.007.001-.034-.082-.019-.05.007 0q-.016-.041-.026-.089c-.025-.096-.055-.23-.09-.388-.073-.315-.164-.72-.257-1.128-.094-.408-.19-.815-.279-1.146a7 7 0 0 0-.128-.44 2 2 0 0 0-.074-.197c-.031-.07-.031-.135-.21-.315s-.244-.18-.314-.211a2 2 0 0 0-.195-.075 7 7 0 0 0-.44-.131c-.33-.09-.737-.19-1.144-.286s-.812-.189-1.126-.262c-.157-.037-.292-.07-.388-.094q-.048-.016-.088-.025c.05.025.081.042-.002.006-.08-.033-.05-.022.002-.006l-.078-.042-.34-.21c-.273-.171-.625-.396-.979-.618s-.71-.442-1.006-.613a7 7 0 0 0-.402-.222 2 2 0 0 0-.19-.084c-.072-.028-.118-.074-.372-.075m-.006 1.75c.047.025.076.041.132.074.263.152.61.366.959.584l.977.617q.211.133.364.225c.1.061.115.084.296.16.181.075.208.068.322.097q.173.045.417.101l1.125.262c.4.094.796.19 1.089.27.063.016.093.028.146.044l.043.146c.078.294.171.69.263 1.09s.181.805.255 1.127q.056.244.099.418c.028.114.022.14.096.322.074.181.097.196.157.297q.091.153.224.365c.174.282.394.632.61.981.216.35.428.699.579.962l.073.133-.074.133c-.152.263-.366.61-.584.959l-.617.977q-.133.211-.225.364c-.06.1-.084.115-.16.296-.075.181-.068.208-.097.322q-.043.173-.101.417l-.262 1.125c-.094.4-.19.796-.27 1.089-.016.063-.028.093-.044.145-.052.016-.082.026-.146.044-.293.078-.69.172-1.09.263s-.804.181-1.127.255q-.245.055-.417.1c-.115.028-.141.021-.323.095-.18.074-.196.097-.297.157q-.152.092-.365.224c-.282.174-.632.395-.981.61-.35.217-.699.428-.962.58-.057.032-.086.046-.133.072l-.133-.073c-.263-.153-.61-.367-.958-.585s-.697-.44-.978-.616q-.211-.133-.364-.226c-.1-.06-.115-.083-.296-.159-.18-.076-.208-.069-.322-.098l-.416-.1-1.126-.262c-.4-.095-.796-.19-1.089-.27-.063-.016-.093-.029-.145-.045l-.043-.145c-.078-.294-.172-.691-.264-1.091s-.181-.804-.255-1.127l-.099-.417c-.028-.114-.022-.141-.096-.322s-.097-.196-.157-.297q-.091-.153-.224-.366l-.61-.98c-.216-.35-.428-.7-.579-.963-.032-.056-.047-.085-.073-.133.025-.047.04-.076.074-.133.152-.262.366-.61.584-.958s.44-.697.616-.977c.089-.14.165-.264.226-.364.06-.101.084-.116.16-.297.075-.18.068-.207.097-.321l.101-.417c.076-.322.168-.726.262-1.125.094-.4.19-.796.27-1.09.016-.062.028-.093.044-.145l.146-.043c.293-.078.69-.172 1.09-.264s.804-.18 1.127-.255q.245-.055.417-.099c.115-.028.141-.022.323-.095.18-.075.196-.098.297-.158l.365-.223c.282-.175.632-.395.981-.61.35-.217.698-.429.962-.58zM13.6 6.431a.83.83 0 0 0-.575.278l-4.062 4.56-1.758-1.5a.833.833 0 1 0-1.082 1.268l2.378 2.03a.834.834 0 0 0 1.163-.08l4.606-5.169a.833.833 0 0 0-.67-1.387"
                        ></path>
                      </svg>
                    </div>
                    <p
                      className="text-white text-lg font-[Duplet] font-extralight leading-[23px]"
                      dangerouslySetInnerHTML={{ __html: item }}
                    ></p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PackagesPage;
