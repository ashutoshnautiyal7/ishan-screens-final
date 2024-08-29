import Image from "next/image";
import React from "react";

const SilverCard = () => {
  return (
    <div className="font-poppins bg-[#272320] max-w-[400px] p-6 rounded-xl shadow-2x border-[#1B1714] border ">
      <div className="border-[#655F53] border-b text-start pb-8">
        <h2 className="text-[30px] leading-[45px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A2ADB3] via-[#F3F1F2] to-[#BCC3C9]">
          Silver
        </h2>
        <p className="text-[#8B8682] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">
          Some
        </p>
        <div className="flex gap-2 mt-3 items-end">
          <h3 className="text-white text-[40px] lg:text-[48px] leading-[60px] lg:leading-[72px] font-bold">
            $9
          </h3>
          <p className="text-[#8B8682] text-[16px] leading-[24px] mb-3 lg:mb-4">
            /Text/Text
          </p>
        </div>
        <p className="text-[#8B8682] text-[16px] leading-[24px] mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
      </div>
      <div className="flex flex-col gap-3 py-8">
        <div className="text-white text-[20px] leading-[30px] flex gap-6 items-center">
          <Image src={"/Images/right.png"} width={25} height={25} /> Some Value
        </div>
        <div className="text-white text-[20px] leading-[30px] flex gap-6 items-center">
          <Image src={"/Images/right.png"} width={25} height={25} /> Some Value
        </div>
        <div className="text-white text-[20px] leading-[30px] flex gap-6 items-center">
          <Image src={"/Images/right.png"} width={25} height={25} /> Some Value
        </div>
        <div className="text-white text-[20px] leading-[30px] flex gap-6 items-center w-fit">
          <Image src={"/Images/wrong.png"} width={25} height={25} />{" "}
          <p className="bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text">
            Some Value
          </p>
        </div>
      </div>
      <div className="flex mt-4">
        <button className="font-medium w-full px-8 py-2.5 rounded-[0.3rem] bg-gradient-to-r from-[#A2ADB3] via-[#F3F1F2] to-[#BCC3C9]">
          Text
        </button>
      </div>
    </div>
  );
};

export default SilverCard;
