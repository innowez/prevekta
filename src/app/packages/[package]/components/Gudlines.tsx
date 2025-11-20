import React from "react";

function Gudlines() {
  const gudlinList = [
    {
      title: "Eligibility & Medical Disclosure",
      desc: `Clients are required to provide complete and accurate medical history before the start of the program. <br /><br />

Any ongoing medication, allergies, or chronic health conditions must be disclosed during the initial consultation. <br /><br />

The physician reserves the right to modify or withhold any therapy based on health suitability.`,
    },
    {
      title: "Consultation & Customization",
      desc: `The therapies and diet plan will be customized after the Ayurvedic Practitioner consultation. <br /><br />

Changes to the schedule or therapies may be made by the doctor depending on the client’s body condition and daily response.`,
    },
    {
      title: "Therapy Timings",
      desc: `Clients are requested to strictly adhere to their allotted therapy timings.
Late arrivals may lead to inconvenience to other clients.`,
    },
    {
      title: "Diet & Lifestyle During Program",
      desc: `Discover Ayurveda’s magic — feel recharged, peaceful, and naturally alive in just a few days. <br /><br />
           Clients are advised to follow the prescribed  healthy  diet and lifestyle guidance throughout the package period for optimal results. <br/><br />

Consumption of alcohol, caffeine, tobacco, or heavy foods is discouraged during and immediately after the therapy. `,
    },
    {
      title: "Clothing & Personal Items",
      desc: `The clinic will provide towel, tissues, herbal bath powder as needed.`,
    },
    {
      title: "Payment & Cancellation",
      desc: `Full payment or 50% advance as per clinic policy is to be made prior to the start of the package. <br/><br />

Cancellations or rescheduling should be informed at least 24 hours in advance. <br/><br />

No refunds will be applicable once the therapy  has commenced.`,
    },
    {
      title: "Confidentiality",
      desc: `All personal and medical information shared with the clinic will remain strictly confidential`,
    },
    {
      title: "Responsibility & Safety",
      desc: `Therapies are conducted under qualified Ayurvedic Practitioner supervision. <br/><br />

Clients are requested to immediately inform the therapist of any discomfort during or after the procedure. <br/><br />

The clinic will not be responsible for any adverse effects if the prescribed post-therapy guidelines are not followed.`,
    },
    {
      title: "Post-Package Guidance",
      desc: `Clients will receive a short-term follow-up plan for maintaining benefits.
Continuing the suggested lifestyle and dietary regimen after the therapy is essential for sustained results.`,
    },
  ];

  return (
    <div className="flex gap-4">
      <div className="bg-[#81DE7633] rounded-2xl p-8 hidden lg:flex flex-col gap-7 w-[268px] h-fit ">
        {gudlinList.map((item, ind) =>(<p key={ind+"des"} className="font-[Duplet] text-lg text-primary ">{item.title}</p>))}
      </div>

      <div className="bg-[#81DE7633] rounded-2xl flex flex-col gap-6 p-6 w-[665px]">
        {gudlinList.map((itm, int) => (
          <div key={int + "desc"}>
            <div className="mb-4">
              <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
                {itm.title}
              </h1>
              <p
                className="font-[duplet] text-lg leading-[23px] text-primary "
                dangerouslySetInnerHTML={{ __html: itm.desc }}
              ></p>
            </div>

            {gudlinList.length - 1 !== int && (
              <hr className="w-full bg-[#00000033] h-0.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gudlines;
