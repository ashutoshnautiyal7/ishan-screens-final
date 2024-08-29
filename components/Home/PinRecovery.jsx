import Image from "next/image";
import React from "react";
import LearnMore from "../Button/LearnMore";

const PinRecovery = () => {
  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#000000] text-[#FFFFFF] w-full flex flex-col items-center">
      <div>
        <h2 className="text-[20px] md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] text-center font-bold">
          Section to be decided based on the recovery{" "}
          <b className="bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text font-bold">
            Lorem Ipsum
          </b>
        </h2>
        <p className="text-[18px] md:text-[24px] leading-[23.5px] md:leading-[31.5px] text-[#8B8682] mt-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
        </p>
      </div>
      <div className="lg:p-8 bg-[#383029] max-w-[630px] mt-10 md:mt-14 rounded-xl">
        <Image
          src={"/Images/b2.png"}
          width={600}
          height={600}
          className="w-[400px] md:w-[500px] lg:w-[600px]"
        />
      </div>
      <div className="mt-12 md:mt-14">
        <LearnMore />
      </div>
    </section>
  );
};

export default PinRecovery;
