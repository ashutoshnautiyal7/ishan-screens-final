"use client";
import Image from "next/image";
import React, { useState } from "react";

const Vedio = ({ stepsData, heading }) => {
  const [openStep, setOpenStep] = useState(1);

  const toggleStep = (stepId) => {
    setOpenStep((prevStep) => (prevStep === stepId ? null : stepId));
  };

  const activeStepData = stepsData.find((step) => step.id === openStep);

  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-gradient-to-r from-[#211C18] to-[#1B1714] min-h-[820px] w-full">
      <h2 className="text-[20px] font-bold md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text border-b-2 border-[#2C2520] pb-3">
        {heading}
      </h2>
      <div className="mt-12 flex gap-10 xl:gap-24 items-center">
        <div className="flex flex-col gap-10">
          {stepsData.map((step) => (
            <div key={step.id} className="flex flex-col md:flex-row gap-10 w-full">
              <div className="flex lg:hidden">
                <Image
                  src={step.imgUrl}
                  width={430}
                  height={430}
                  alt={`Image for ${
                    activeStepData ? activeStepData.title : step.title
                  }`}
                  className=""
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-center  md:w-1/2 lg:w-[50vw] border-b-2 lg:border-b-0 border-[#2C2520] pb-3">
                <div className="bg-[#33312D] p-2 rounded-full w-[50px] h-fit items-center flex justify-center text-white text-[20px]">
                  {step.id}
                </div>
                <div className="flex flex-col gap-1.5 lg:border-b-2 border-[#2C2520] pb-3 w-full">
                  <div className="text-[#CCC4BE] text-[20px] leading-[26px] flex justify-between items-center">
                    <h3>{step.title}</h3>
                    <button
                      onClick={() => toggleStep(step.id)}
                      className="text-white text-[24px] hidden lg:flex"
                    >
                      {openStep === step.id ? "-" : "+"}
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      openStep === step.id
                        ? "max-h-[500px]"
                        : "max-h-[500px] lg:max-h-0"
                    }`}
                  >
                    <p className="text-white text-[16px] leading-[20px] mt-4">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {activeStepData && (
          <div className="hidden lg:flex">
            <Image
              src={activeStepData.imgUrl}
              width={430}
              height={430}
              alt={`Image for ${activeStepData.title}`}
              className=""
            />
          </div>
        )}
      </div>

      <div className="mt-12 md:mt-20 flex justify-center w-full">
        <button
          className="font-bold px-8 py-2 rounded-lg mx-auto"
          style={{
            border: "2px solid transparent",
            borderRadius: "0.3rem",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            backgroundImage:
              "linear-gradient(#1B1714, #1B1714), linear-gradient(to right, #E9B873, #FEDD8F, #B78D51)",
          }}
        >
          <p className="bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text">
            See how it works in detail
          </p>
        </button>
      </div>
    </section>
  );
};

export default Vedio;
