import ExplorePlan from "@/components/Button/ExplorePlan";
import LearnMore from "@/components/Button/LearnMore";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="font-sans bg-[#1B1714]  items-center lg:items-start justify-center w-full h-screen flex">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-4 items-center justify-between  text-center lg:text-start px-[2rem] lg:px-[6rem] py-10 lg:my-[2%] w-full">
        <div className="max-w-[820px]">
          <h1 className="text-[#FFFFFF] md:text-[24px] lg:text-[34px] leading-[20.83px] md:leading-[32.25px] lg:leading-[44.7px] ">
            PIN Recovery
          </h1>
          <h1 className="font-bold text-[30px] md:text-[50px] lg:text-[60px] leading-[39px] md:leading-[65px] lg:leading-[78px] px-[1.5rem] md:px-[4.5rem] lg:px-0 bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text mt-2">
            Lorem Ipsum is simply dummy text of
          </h1>
          <p className="text-[#8B8682] text-[18px] md:text-[24px] leading-[23.4px] md:leading-[31.25px] mt-2 md:mt-3 lg:mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
          <span className="flex gap-5 md:gap-6 mt-12 md:mt-16 justify-center lg:justify-start flex-col md:flex-row">
            <ExplorePlan />
            <LearnMore />
          </span>
        </div>
        <div className="">
          <Image
            src={"/Images/shield.png"}
            width={250}
            height={250}
            className="w-[150px] md:w-[200px] lg:w-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
