import Image from "next/image";
import "./timeline.css";
import Logo from "@assets/images/preblurLogo.png";

const LGTVIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
    className="lg:w-[38px] lg:h-10"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8.485 10.67a.055.055 0 0 1 .012-.071 5 5 0 0 0 1.695-3.045 4.95 4.95 0 0 0-.712-3.401 5.05 5.05 0 0 0-3.157-2.23 5.1 5.1 0 0 0-3.827.633A5 5 0 0 0 .242 5.678a4.95 4.95 0 0 0 .64 3.784 5.04 5.04 0 0 0 2.776 2.126 5.1 5.1 0 0 0 3.512-.17.055.055 0 0 1 .069.02l1.73 2.739a.054.054 0 0 1-.018.075l-1.7 1.05a.29.29 0 0 0-.094.399l.468.74a.296.296 0 0 0 .402.093l1.7-1.05a.056.056 0 0 1 .076.018l1.14 1.806a.295.295 0 0 0 .403.092l.75-.462a.29.29 0 0 0 .092-.399l-1.14-1.806a.054.054 0 0 1 .017-.075l1.7-1.05a.29.29 0 0 0 .095-.398l-.468-.74a.295.295 0 0 0-.404-.092l-1.7 1.05a.056.056 0 0 1-.076-.018l-1.729-2.738zm2.684-3.676c0-.346.143-.66.372-.886.23-.227.547-.368.898-.368.307 0 .597.105.826.28.226.174.39.417.451.699.004.022.02.04.044.045a.054.054 0 0 0 .065-.043c.056-.286.216-.53.438-.702.225-.175.514-.278.825-.278.35 0 .668.141.898.368s.372.541.372.888V7c-.02.549-.348 1.095-.827 1.631-.477.535-1.104 1.059-1.728 1.565-1.305-.951-2.536-1.85-2.632-3.2zm3.242-3.66c.066.901.889 1.506 1.766 2.145.418-.34.837-.692 1.157-1.05.321-.36.542-.726.555-1.093v-.002a.83.83 0 0 0-.247-.59.85.85 0 0 0-.595-.244.9.9 0 0 0-.548.184.78.78 0 0 0-.29.465.054.054 0 0 1-.064.043.06.06 0 0 1-.044-.044.8.8 0 0 0-.3-.463.9.9 0 0 0-.548-.186.84.84 0 0 0-.595.245.83.83 0 0 0-.247.588zM12.359 1.18c0-.173.071-.328.185-.442a.64.64 0 0 1 .449-.183c.153 0 .298.052.412.14a.6.6 0 0 1 .226.345c.003.022.02.04.043.045a.054.054 0 0 0 .065-.042.6.6 0 0 1 .217-.35.67.67 0 0 1 .412-.138c.175 0 .333.07.449.183.114.113.185.27.185.443v.003c-.01.277-.178.555-.423.83-.242.271-.56.538-.878.797-.667-.486-1.292-.947-1.341-1.63M3.251 3.75a3.67 3.67 0 0 1 2.752-.455c.91.208 1.738.759 2.271 1.603a3.56 3.56 0 0 1 .46 2.722 3.6 3.6 0 0 1-1.618 2.244l-.006.004c-.853.526-1.84.66-2.75.453a3.64 3.64 0 0 1-2.269-1.6l-.003-.006a3.56 3.56 0 0 1-.458-2.72c.21-.899.767-1.718 1.621-2.245"
      clipRule="evenodd"
    ></path>
  </svg>
);

const LegIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="19"
    fill="none"
    viewBox="0 0 13 19"
    className="lg:w-[28px] lg:h-[42px] "
  >
    <path
      fill="#fff"
      d="M11.954 6.983C10.398 4.422 3.416.547 3.416.547L2.282 0S-.43 4.794.06 7.333c.49.285 5.336 2.167 7.404 2.452-.8 1.685-.867 5.69-.312 7.245L12.087 19c-.022 0 1.4-9.434-.133-12.017M7.196 8.756a.83.83 0 0 1-.222-1.138L2.683 4.64a.877.877 0 0 1-1.179.175.83.83 0 0 1-.2-1.182c.111-.154.29-.263.467-.329a.77.77 0 0 1 .156-.525.86.86 0 0 1 1.2-.197.83.83 0 0 1 .223 1.138l4.29 2.977a.877.877 0 0 1 1.179-.175c.378.263.49.788.2 1.182a1 1 0 0 1-.467.328.77.77 0 0 1-.156.526.89.89 0 0 1-1.2.197m4.09 7.18c0 .46-.377.831-.844.831a.9.9 0 0 1-.534-.175.9.9 0 0 1-.533.175.84.84 0 0 1-.845-.832.82.82 0 0 1 .823-.831V9.938a.847.847 0 0 1-.823-.832.838.838 0 0 1 1.378-.635c.156-.11.334-.197.534-.197.467 0 .845.372.845.832a.82.82 0 0 1-.823.832v5.166c.445.022.823.394.823.832"
    ></path>
  </svg>
);

const HartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
    className="lg:w-[40px] lg:h-[40px] "
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M9 14.94 5.498 11.44C.958 6.899 6.236 3.688 9 6.45c2.765-2.764 8.042.447 3.502 4.987zm6.47-2.27a.31.31 0 0 0-.274-.158.31.31 0 0 0-.274.158l-2.1 3.638a.31.31 0 0 0 0 .316c.058.1.157.158.274.158h4.2a.31.31 0 0 0 .274-.158.31.31 0 0 0 0-.316zM2.72.567a2.153 2.153 0 1 0 0 4.307 2.153 2.153 0 0 0 0-4.307m-.118.786a.119.119 0 0 1 .237 0v1.366c0 .048-.029.09-.07.108l-.967.537a.118.118 0 0 1-.115-.207l.915-.507L2.6 1.353m12.595 14.433a.193.193 0 1 1 0 .385.193.193 0 0 1 0-.385m.014-.293a.087.087 0 0 0 .087-.08l.124-1.273a.2.2 0 0 0-.051-.157.2.2 0 0 0-.152-.068h-.046a.2.2 0 0 0-.151.068.2.2 0 0 0-.052.157l.125 1.273c.004.045.042.08.087.08zM9 0C7.38 0 5.859.428 4.546 1.178q.077.092.144.19A8.7 8.7 0 0 1 9 .237c2.42 0 4.61.981 6.197 2.566A8.74 8.74 0 0 1 17.763 9a8.7 8.7 0 0 1-1.397 4.749l.133.23A8.96 8.96 0 0 0 18 8.998a8.97 8.97 0 0 0-2.636-6.363A8.97 8.97 0 0 0 9 0m4.09 17.02a.55.55 0 0 1-.321-.106A8.7 8.7 0 0 1 9 17.763c-2.42 0-4.61-.981-6.196-2.567A8.74 8.74 0 0 1 .236 9c0-1.567.411-3.037 1.131-4.31a2 2 0 0 1-.19-.144A8.95 8.95 0 0 0 0 9a8.97 8.97 0 0 0 2.636 6.364A8.97 8.97 0 0 0 9 18a8.96 8.96 0 0 0 4.09-.98M5.746 9.73l.84.119.308.7c.026.06.095.087.155.061a.12.12 0 0 0 .07-.09l.219-1.416.178.657a.12.12 0 0 0 .114.088h.61l.321 1.738a.118.118 0 0 0 .232 0l.547-2.912.204 1.076c.01.057.06.097.116.097h.618l.3 1.108a.118.118 0 0 0 .231-.012l.242-1.566.176.4a.12.12 0 0 0 .108.07v.002l.917-.119-.84-.118-.304-.693a.118.118 0 0 0-.229.021l-.218 1.416-.176-.65a.12.12 0 0 0-.116-.094h-.61l-.3-1.593a.118.118 0 0 0-.233-.002L8.68 10.92 8.458 9.72a.12.12 0 0 0-.118-.106h-.618L7.424 8.51a.118.118 0 0 0-.233.007l-.241 1.566-.172-.39a.12.12 0 0 0-.112-.08z"
      clipRule="evenodd"
    ></path>
  </svg>
);

function HealingPrograms() {
  return (
    <div className="mt-12 lg:mt-32 px-4 lg:px-20">
      <div className="mb-10 lg:mb-12">
        <h1 className="text-center text-2xl lg:text-6xl text-primary font-Atyp leading-7 lg:leading-[72px] mb-4 lg:mb-12">
          Healing Programs <br />
          Customized by Doctors
        </h1>
        <p className="text-base text-primary font-[Duplet] leading-5 ">
          Each healing program is designed and led by senior Ayurvedic experts.
          Each <br className="hidden lg:block" />
          treatment menu is personalized to align with your unique body
          constitution.
        </p>
      </div>

      <div>
        <div className="timeline">
            <Image src={Logo} className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" width={270.0184021858} height={266.2796631709347} />
          <div className="boxes right mb-12">
            <div className="content mb-6 ">
              <div className="flex gap-3 mb-2 lg:mb-5">
                <div className="w-8 h-8 lg:w-[72px] lg:h-[72px] border border-primary rounded-full "></div>
                <div className="w-8 h-8 lg:w-[72px] lg:h-[72px] bg-primary rounded-full flex justify-center items-center ">
                  <LGTVIcon />
                </div>
              </div>

              <h1 className="text-xl lg:text-[32px] text-primary leading-6 ">
                WOMEN’S WELLNESS
              </h1>
            </div>
            <div className="lg:flex lg:justify-end w-full">
              <div className="flex flex-col gap-6 lg:w-1/2 lg:max-w-[598px]">
                {["PCOD Reset", "Fibroid Freedom", "Endometriosis Ease"].map(
                  (e, i) => (
                    <p
                      key={i + 1}
                      className="text-lg text-primary font-[Duplet] leading-6 border-b border-b-[#82B29A] pb-4 "
                    >
                      {e}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="boxes right mb-12">
            <div className="content mb-6">
              <div className="flex gap-3 mb-2 lg:mb-5">
                <div className="w-8 h-8 lg:w-[72px] lg:h-[72px] bg-primary rounded-full flex justify-center items-center ">
                  <LegIcon />
                </div>
                <div className="w-8 h-8 lg:w-[72px] lg:h-[72px] border border-primary rounded-full "></div>
              </div>

              <h1 className="text-xl lg:text-[32px] text-primary leading-6 lg:leading-9 ">
                SURGICAL CARE & ORTHO <br />WELLNEESS:
              </h1>
            </div>
            <div className="lg:flex lg:justify-end lg:w-full">
              <div className="flex flex-col gap-6 lg:w-1/2 lg:max-w-[598px]">
                {[
                  "Diabetic ulcer & Pressure sores",
                  "Lower limb varicosities  & Ulcer",
                  "Corn & Callus Removal",
                  "Vertebral alignment disorder & ACL Repair",
                  "Ano-Rectal disorder(Piles, Fistula, Fissure)",
                ].map((e, i) => (
                  <p
                    key={i + 1}
                    className="text-lg text-primary font-[Duplet] leading-6 border-b border-b-[#82B29A] pb-4 "
                  >
                    {e}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="boxes right mb-12">
            <div className="content mb-6">
              <div className="flex gap-3 mb-2 lg:mb-5">
                <div className="w-8 h-8 lg:w-[72px] lg:h-[72px] border border-primary rounded-full "></div>
                <div className="w-8 h-8 lg:w-[72px] lg:h-[72px] bg-primary rounded-full flex justify-center items-center ">
                  <HartIcon />
                </div>
              </div>

              <h1 className="text-xl lg:text-[32px] text-primary leading-6 lg:leading-9 ">
                CHRONIC & SPECIAL <br />CONDITION
              </h1>
            </div>
            <div className="lg:flex lg:justify-end lg:w-full">
              <div className="flex flex-col gap-6 lg:w-1/2 lg:max-w-[598px]">
                {[
                  "Autism Support (for Children)",
                  "Pandu (Anemia)",
                  "CKD (Chronic Kidney Disease)",
                ].map((e, i) => (
                  <p
                    key={i + 1}
                    className="text-lg text-primary font-[Duplet] leading-6 border-b border-b-[#82B29A] pb-4 "
                  >
                    {e}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealingPrograms;

