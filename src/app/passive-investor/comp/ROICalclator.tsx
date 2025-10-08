"use client";
import React, { useEffect, useState } from "react";
import ROIbgImage from "@assets/images/ROICalBG.png";
import Image from "next/image";

// Minimum Guarantee Returns/month = Inv.Amt * 1%/month		Yearly: M.G * 12
// Yearly Returns = (FT * 10%)*12 - (M.G/m * 12)
// ROI % = (M.G/y + YR) / Inv. Amt

function ROICalclator() {
  const [investmentAmount, setInvestmentAmount] = useState(3);
  const [monthlyTurnover, setMonthlyTurnover] = useState(3);
  const [yearlyReturns, setYearlyReturns] = useState(0);
  const [roi, setRoi] = useState(0);

  useEffect(() => {
    // Convert lakhs to rupees (1 Lakh = 100,000)
    const invAmt = investmentAmount * 1000000;
    const ft = monthlyTurnover * 100000;

    // 1. Minimum Guarantee per month = 1% of investment
    const minGuaranteeMonthly = invAmt * 0.01 / 1;

    // 2. Yearly Returns = (FT * 10%) * 12 - (MG * 12)
    const yearReturn = ft * 0.1 * 12 - minGuaranteeMonthly * 12;
    setYearlyReturns(yearReturn);

    // 3. ROI% = ((MG * 12) + YR) / InvAmt * 100
    const roiPercentage =
      ((minGuaranteeMonthly * 12 + yearReturn) / invAmt) * 100;

    setRoi(Number(roiPercentage.toFixed(2)));
  }, [investmentAmount, monthlyTurnover]);

  return (
    <div className="bg-[#DCF6DA] rounded-2xl p-3 lg:p-10 ">
      <div className="lg:flex lg:justify-between lg:gap-8">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-xl lg:text-[40px] text-center lg:text-left font-[Atyp] font-semibold text-primary lg:leading-[48px] ">
            Calculate Your ROI <br className="hidden lg:block" />
            in Seconds
          </h1>

          <div className="flex justify-between flex-col lg:flex-row gap-12 w-full">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-base lg:text-lg text-primary font-[Duplet] leading-[23px] mb-6">
                  Investment Amount
                </p>
                <div className="relative">
                  <input
                    type="range"
                    min="3"
                    max="10"
                    value={investmentAmount}
                    onChange={(e) =>
                      setInvestmentAmount(Number(e.target.value))
                    }
                    className="w-full lg:w-[452px] h-0.5 bg-[#132D4799] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>30L</span>
                    <span>40L</span>
                    <span>50L</span>
                    <span>60L</span>
                    <span>70L</span>
                    <span>80L</span>
                    <span>90L</span>
                    <span>1CR</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-base lg:text-lg text-primary font-[Duplet] leading-[23px] mb-6">
                  Franchise Turnover / Month
                </p>
                <div className="relative">
                  <input
                    type="range"
                    min="3"
                    max="15"
                    value={monthlyTurnover}
                    onChange={(e) => setMonthlyTurnover(Number(e.target.value))}
                    className="w-full lg:w-[452px] h-0.5 bg-[#132D4799] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    {Array.from({ length: 13 }, (_, i) => i + 3).map((num) => (
                      <span key={num}>{num}L</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#81DE764D] rounded-[12px] lg:rounded-2xl p-4 lg:p-7 flex flex-col gap-2.5 lg:gap-5 w-full lg:w-[300px]">
              <div className="flex flex-col gap-2 ">
                <p className="text-base lg:text-lg text-primary font-[Duplet] font-semibold leading-[23px]">
                  Yearly Returns:
                </p>

                <p className=" text-xl lg:text-2xl text-primary font-[Atyp] font-semibold leading-[29px] ">
                  {/* ₹ 3,60,000 */}
                  ₹ {yearlyReturns.toLocaleString('en-IN')}
                </p>
              </div>

              <hr className="bg-[#132D4766] text-[#132D4766]" />

              <div className="flex flex-col gap-2">
                <p className="text-base lg:text-lg text-primary font-[Duplet] font-semibold leading-[23px]">
                  ROI:
                </p>

                <p className=" text-xl lg:text-2xl text-primary font-[Atyp] font-semibold leading-[29px] ">
                  {/* 12% */}
                  {roi}%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            src={ROIbgImage}
            alt="ROI Background"
            width={411.043}
            height={375.999}
          />
        </div>
      </div>
    </div>
  );
}

export default ROICalclator;
