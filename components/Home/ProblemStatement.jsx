import Image from "next/image";
import React from "react";

const sectionData = [
  {
    id: 1,
    imgSrc: "/Images/b1.png",
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  // {
  //   id: 2,
  //   imgSrc: "/Images/b1.png",
  //   title: "Lorem Ipsum",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  // },
];

const ProblemStatement = () => {
  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#120F0C] text-[#FFFFFF]">
      <h2 className="max-w-[800px] text-[20px] md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] text-center mx-auto font-bold">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
      </h2>
      <div className="mt-10 md:mt-16 lg:mt-24 flex gap-5 md:gap-10 flex-col lg:flex-row justify-center">
        {sectionData.map((item, index) => (
          <div
            key={item.id}
            className={`w-full lg:w-1/2 p-4 md:p-7 bg-[#282523] rounded-lg flex flex-col gap-1 md:gap-7 shadow-lg ${
              index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"
            }`}
          >
            <div className="mx-auto">
              <Image
                src={item.imgSrc}
                width={600}
                height={600}
                alt={item.title}
              />
            </div>
            <div className="mt-6 lg:mt-0">
              <h3 className="text-[20px] md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] font-bold">
                {item.title}
              </h3>
              <p className="text-[18px] md:text-[24px] leading-[23.5px] md:leading-[31.5px] text-[#8B8682] mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemStatement;
