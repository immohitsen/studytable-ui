import React from "react";

const Conclusion = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto">
      {/* Gray Section */}
      <section
        className="bg-[#2A2A2A] text-white py-12 px-[5%] md:px-[2%] my-[10vh] text-left rounded-2xl shadow-lg"
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        <h3 className="text-[32px] md:text-[40px] font-[600] mb-4">How we come to this?</h3>
        <p className="text-[18px] md:text-[22px] text-gray-300 font-[400] mb-4 md:w-[65%]">
          We observed and researched for three years in a variety of students. 
          Where the best need more attention to do better, and the struggling students 
          need more attention to improve their own abilities. All students need personal attention. 
          Based on the notion of “Personal attention,” we have built our algorithm and AI tutor 
          to cater to each child uniquely…
        </p>
        <a href="#" className="text-white text-[18px] md:text-[22px] underline">
          Read the full story →
        </a>
      </section>

      {/* Conclusion Section */}
      <section
        className="bg-white text-black py-12 md:py-20 flex flex-col items-center text-center pb-[10vh]"
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        <div className="w-full md:w-3xl">
          <h2 className="text-[40px] md:text-[70px] font-[600] mb-4">
            Crafted for all your academic needs
          </h2>
          <button className="bg-[#2A2A2A] text-white text-[16px] md:text-[18px] px-5 py-2 mt-8 rounded-lg shadow-lg font-semibold hover:bg-gray-800 transition">
            Get your Entry
          </button>
        </div>
      </section>
    </div>
  );
};

export default Conclusion;
