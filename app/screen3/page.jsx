import React from "react";
import Hero from "./Hero";
import ProblemStatement from "../screen2/ProblemStatement";
import Solution from "../screen2/Solution";
import Vedio from "../screen2/Vedio";
import Testimonial from "../screen2/Testimonial";
import BuyNow from "../screen2/BuyNow";
import Faq from "@/components/Home/Faq";
import StepByStep from "../screen2/StepByStep";

const stepsData = [
  // {
  //   id: 1,
  //   title: "Lorem Ipsum is simply dummy text of",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //   imageSrc: "/Images/demo.png",
  // },
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever a the 1500s,",
    imageSrc: "/Images/demo.png",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever a the 1500s,",
    imageSrc: "/Images/demo.png",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever a the 1500s,",
    imageSrc: "/Images/demo.png",
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever a the 1500s,",
    imageSrc: "/Images/demo.png",
  },
  {
    id: 5,
    title: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever a the 1500s,",
    imageSrc: "/Images/demo.png",
  },
  {
    id: 6,
    title: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever a the 1500s,",
    imageSrc: "/Images/demo.png",
  },
];

const heading = "Lorem Ipsum is simply dummy text of the printing";

const stepsData2 = [
  {
    id: 1,
    title: "Step I",
    description: `One Paragraph Here`,
    imgUrl: "/Images/demo.png",
  },
  {
    id: 2,
    title: "Step II",
    description: `One Paragraph Here`,
    imgUrl: "/Images/demo.png",
  },
  {
    id: 3,
    title: "Step III",
    description: `One Paragraph Here`,
    imgUrl: "/Images/demo.png",
  },
  {
    id: 4,
    title: "Step IV",
    description: `One Paragraph Here`,
    imgUrl: "/Images/demo.png",
  },
  {
    id: 5,
    title: "Step V",
    description: `One Paragraph Here`,
    imgUrl: "/Images/demo.png",
  },
];

const heading2 = "Header";

const page = () => {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Solution />
      <StepByStep stepsData={stepsData} heading={heading} />
      <Vedio stepsData={stepsData2} heading={heading2} />
      <Testimonial />
      <BuyNow />
      <Faq />
    </main>
  );
};

export default page;
