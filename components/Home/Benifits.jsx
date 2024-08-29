import React from "react";
import ExplorePlan from "../Button/ExplorePlan";

const benefitData = [
  {
    id: 1,
    title: "Some Text",
    subTitle: "2 liner Text to be added here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Some Text",
    subTitle: "2 liner Text to be added here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Some Text",
    subTitle: "2 liner Text to be added here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    title: "Some Text",
    subTitle: "2 liner Text to be added here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    title: "Some Text",
    subTitle: "2 liner Text to be added here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    title: "Some Text",
    subTitle: "2 liner Text to be added here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Benifits = () => {
  return (
    <section className="font-sans px-[2rem] lg:px-[6rem] py-[3rem] lg:py-[5.5rem] bg-[#161211] text-[#FFFFFF] w-full flex flex-col items-center">
      <h2 className="font-bold text-[20px] max-w-[1170px] mx-auto md:text-[34px] lg:text-[40px] leading-[26px] md:leading-[44px] lg:leading-[52px] text-center text-[#FFFFFF]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum
      </h2>
      <div className="mt-10 lg:mt-16 flex flex-col gap-6 md:gap-8 lg:gap-14">
        {benefitData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row overflow-hidden rounded-lg ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } shadow-lg`}
          >
            <div className="w-full md:w-1/2 min-h-[350px] md:min-h-full bg-[#2E2824]"></div>
            <div className="w-full md:w-1/2 md:text-[24px] leading-[20px] md:leading-[31px] text-[#8B8682] px-6 md:px-14 py-4 md:py-6 bg-[#221B17]">
              <h3 className="">{item.title}</h3>
              <h4 className="text-[#FFFFFF] font-bold mt-3">{item.subTitle}</h4>
              <p className="mt-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 md:mt-16 text-black">
        <ExplorePlan />
      </div>
    </section>
  );
};

export default Benifits;
