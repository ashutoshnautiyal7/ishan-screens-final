import Image from "next/image";
import React from "react";
import LearnMore from "../Button/LearnMore";

const EstateRecovery = () => {
  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#221B17] text-[#FFFFFF] w-full flex flex-col items-center">
      <div className="">
        <h2 className="font-bold text-[20px] max-w-[1170px] mx-auto md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] text-center bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text">
          Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum {" "}
          <b className="text-[#FFFFFF] font-bold">Lorem Ipsum</b>
        </h2>
        <p className="text-[18px] md:text-[24px] leading-[23.5px] md:leading-[31.5px] text-[#8B8682] mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p>
      </div>
      <div className="bg-[#383029] max-w-[630px] mt-8 md:mt-14 rounded-xl">
        <Image
          src={"/Images/b2.png"}
          width={650}
          height={650}
          className="w-[400px] md:w-[500px] lg:w-[600px]"
        />
      </div>
      <div className="mt-12 md:mt-14">
        <LearnMore />
      </div>
    </section>
  );
};

export default EstateRecovery;
