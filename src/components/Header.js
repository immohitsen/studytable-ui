import React from "react";
import mask from "../utils/mask.png";

const Header = () => {
  return (
    <>
      <div className="text-5xl font-regular mb-8 md:mb-0">
        STUDY<strong>table</strong>
      </div>  
      <header
        className="bg-[#2A2A2A] text-white py-20 px-[10%] flex flex-row justify-between items-center"
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        {/* Logo */}

        {/* Left Section - Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-[56px] font-semibold leading-tight">
            Optimize Your Performance For <br />
            <span className="text-gray-300">JEE, NEET, and Boards</span>
          </h1>
          <p className="mt-4  max-w-xl" style={{ fontWeight: 400 }}>
            Your personal AI-Tutor for all academic needs. Whether it's school
            exams, boards, or competitive exams, we plan, manage, and help you
            clear your doubts instantly. For students of classes 10th, 11th, and
            12th (CBSE) and preparing for all medical or engineering entrance
            exams.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              Apply for admission
            </button>
            <button className="border border-white px-6 py-2 rounded-md text-white font-semibold hover:bg-gray-800 transition">
              Sign In →
            </button>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={mask}
            alt="Illustration"
            className="w-full max-w-md mr-10"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
