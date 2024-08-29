import React from "react";

const LearnMore = () => {
  return (
    <button
      className="font-bold px-8 py-2 rounded-lg"
      style={{
        border: "2px solid transparent",
        borderRadius: "0.3rem",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        backgroundImage:
          "linear-gradient(#1B1714, #1B1714), linear-gradient(to right, #E9B873, #FEDD8F, #B78D51)",
      }}
    >
      <p className="bg-gradient-to-r from-[#E9B873] via-[#FEDD8F] to-[#B78D51] text-transparent bg-clip-text">Learn More</p>
    </button>
  );
};

export default LearnMore;
