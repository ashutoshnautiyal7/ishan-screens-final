import React from "react";
import Hero from "./Hero";
import ProblemStatement from "./ProblemStatement";
import Solution from "./Solution";
import StepByStep from "./StepByStep";
import Vedio from "./Vedio";
import Testimonial from "./Testimonial";
import BuyNow from "./BuyNow";
import Faq from "@/components/Home/Faq";

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
    title: "Lorem Ipsum is simply dummy text of",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    imageSrc: "/Images/demo.png",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    imageSrc: "/Images/demo.png",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    imageSrc: "/Images/demo.png",
  },
];

const heading =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum";

const stepsData2 = [
  {
    id: 1,
    title: "Step One",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only 
      five centuries.`,
    imgUrl: "/Images/demo.png",
  },
  {
    id: 2,
    title: "Step Two",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only 
      five centuries.`,
    imgUrl: "/Images/demo.png",
  },
  {
    id: 3,
    title: "Step Three",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only 
      five centuries.`,
    imgUrl: "/Images/demo.png",
  },
];

const heading2 = "Some three steps to be add";

const page = () => {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      {/* <Solution /> */}
      <StepByStep stepsData={stepsData} heading={heading} />
      <Vedio stepsData={stepsData2} heading={heading2} />
      <Testimonial />
      <BuyNow />
      <Faq />
    </main>
  );
};

export default page;
