import Image from "next/image";
import React from "react";

const StepByStep = ({ stepsData, heading }) => {
  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#33312D] text-[#FFFFFF] w-full items-center flex-col flex">
      <div>
        <h2 className="text-[20px] max-w-[1170px] mx-auto font-bold md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] text-center bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text">
          {heading}
        </h2>
        {/* <p className="text-[18px] md:text-[24px] leading-[23.5px] md:leading-[31.5px] text-[#8B8682] mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p> */}
      </div>

      {stepsData.map((step, index) => (
        <div
          key={step.id}
          className={`mt-12 md:mt-24 flex flex-col lg:flex-row gap-7 md:gap-16 xl:gap-24 lg:items-center ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="space-y-3 md:space-y-6 text-left">
            <h3 className="font-bold text-[30px] md:text-[50px] lg:text-[60px] leading-[39px] md:leading-[65px] lg:leading-[78px] bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text">
              {step.id}
            </h3>
            <h4 className="text-[20px] md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] font-bold">
              {step.title}
            </h4>
            <p className="text-[#8B8682] text-[18px] md:text-[24px] leading-[23.44px] md:leading-[31.25px]">
              {step.description}
            </p>
          </div>
          <Image
            src={step.imageSrc}
            width={500}
            height={500}
            alt={`Step ${step.id}`}
          />
        </div>
      ))}
    </section>
  );
};

export default StepByStep;
