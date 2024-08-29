import CommingSoon from "@/components/Button/CommingSoon";
import React from "react";

const BuyNow = () => {
  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#120E0A] text-[#FFFFFF] w-full flex flex-col items-center">
      <div className=" bg-[#1D1915] p-7 md:p-14 gap-8 md:gap-16 shadow-lg rounded-lg text-center">
        <div className="max-w-[870px] text-center">
          <h2 className="font-medium text-[20px] md:text-[34px] lg:text-[40px] leading-[28px] md:leading-[45px] lg:leading-[52px]">
            Lorem Ipsum is simply dummy
          </h2>
          <p className="text-[16px] md:text-[24px] lg:text-[28px] leading-[28.6px] lg:leading-[36.5px] text-[#8B8682] mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
          <div className="mt-8 md:mt-10 w-full h-full">
            <CommingSoon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
