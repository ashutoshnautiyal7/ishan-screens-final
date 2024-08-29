import Image from "next/image";
import React from "react";

const StepByStepPinRecovery = () => {
  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#1F1A15] text-[#FFFFFF] w-full flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
        <div className="lg:w-1/3">
          <Image src={"/Images/v1.png"} width={600} height={600} />
        </div>
        <div className="lg:w-1/2">
          <p className="text-white text-[18px] md:text-[24px] leading-[23px] md:leading-[31.2px] text-start">
            Lorem Ipsum is simply dummy text of the
          </p>
          <h2 className="font-bold text-[16px] md:text-[24px] lg:text-[34px] leading-[21px] md:leading-[31.2px] lg:leading-[44px] bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text mt-3 md:mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default StepByStepPinRecovery;
