import React from "react";
import GoldCard from "./GoldCard";
import SilverCard from "./SilverCard";

const Hero = () => {
  return (
    <section className="font-sans bg-[#1B1714] px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5rem] items-center justify-center w-full flex flex-col text-center">
      <h1 className="font-bold text-white text-[20px] md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px]">
        Some Value
      </h1>
      <p className="text-[#8B8682] text-[18px] md:text-[24px] leading-[23px] md:leading-[31.2px] max-w-[1170px] mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industryLorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-16 lg:mt-28 items-center justify-center">
        <SilverCard/>
        <GoldCard/>
      </div>
    </section>
  );
};

export default Hero;
