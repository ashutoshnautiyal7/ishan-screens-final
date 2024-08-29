import Image from "next/image";
import React from "react";

const ProblemStatement = () => {
  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#120F0C] text-[#FFFFFF] flex flex-col xl:flex-row gap-10 lg:gap-14">
      <Image src={"/Images/b1.png"} width={600} height={600} alt={""} />
      <div className="my-auto">
        <h2 className="text-[20px] md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] font-bold">
          Lorem Ipsum is simply dummy text of
        </h2>
        <p className="text-[#8B8682] text-[18px] md:text-[24px] leading-[23.44px] md:leading-[31.25px] mt-6 md:mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s
        </p>
      </div>
    </section>
  );
};

export default ProblemStatement;
