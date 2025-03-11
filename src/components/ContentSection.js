import React from "react";
import i1 from "../utils/i1.jpg";
import i2 from "../utils/i2.jpg";
import i3 from "../utils/i3.jpg";

const ContentSection = () => {
  return (
    <div>
      {/* Section 1 - Unlimited Practice Session */}
      <section
        className="bg-white text-black py-12 px-[5%] md:px-[10%] pt-[20vh] mb-12 w-full flex flex-col items-start"
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        <div className="md:w-3/4 mb-8 text-left">
          <h2 className="text-[36px] md:text-[50px] font-semibold mb-4 pr-10 leading-tight">
            <span className="block">Unlimited Practice</span>
            <span className="block">Session</span>
          </h2>
          <p className="text-[18px] md:text-[22px] text-gray-600 font-[400] leading-relaxed mb-4 pr-10 md:w-[85%]">
            For topics and subjects you go through in your school and coaching
            every day, we create instant practice sessions specially made for
            your daily needs.&nbsp;
            <strong className="relative pt-4">
              Our innovative AI algorithm crafts batches of 20 questions, each
              accompanied by instant feedback and solutions - it's like having a
              Home tutor 24X7.
            </strong>
          </p>
        </div>

        <div className="w-full flex justify-end">
          <img
            src={i2}
            alt="Practice Session"
            className="w-full"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </div>
      </section>

      {/* Section 2 - Personalized Assessment */}
      <section
        className="bg-white text-black py-12 px-[5%] md:px-[10%] mb-12 flex flex-col items-end w-full"
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        <div className="md:w-3/4 mb-8 md:self-end text-left md:pl-20">
          <h2 className="text-[36px] md:text-[40px] font-[600] mb-4 leading-tight">
            Personalized <br /> Assessment
          </h2>
          <p className="text-[18px] md:text-[22px] font-[400] leading-relaxed mb-4 text-gray-600 md:w-[90%]">
            We measure your learning differently. Not just comparing you among
            your classmates and peers, but understanding how much you have
            learned and how much your skills have grown.
          
            We create tests based on your learning sessions and exam
            requirements to help you improve. Each test is uniquely designed to
            advance your knowledge effectively.
          </p>
        </div>

        <div className="w-full flex justify-start mt-5">
          <img
            src={i1}
            alt="Personalized Assessment"
            className="w-full"
            style={{ maxWidth: "60%", height: "auto" }}
          />
        </div>
      </section>

      {/* Section 3 - Managing Students’ Academic Life */}
      <section
        className="bg-white text-black py-12 px-[5%] md:px-[10%] mb-[15vh] w-full flex flex-col items-start"
        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      >
        <div className="md:w-3/4 mb-8 text-left">
          <h2 className="text-[36px] md:text-[40px] font-semibold mb-4 pr-10 leading-tight ">
            Managing Students <br/> Academic Life
          </h2>
          <p className="text-[18px] md:text-[22px] text-gray-600 font-[400] leading-relaxed mb-4 pr-10 md:w-[85%]">
            Studying involves more than just practice and tests. To succeed, you
            need a careful revision plan, a clear understanding of your learning
            curve, and a well-aligned study schedule.
          
            We manage it all for you, from school tests to scholarship exams, so
            you can focus on learning without worries.
          </p>
        </div>
        <div className="w-full flex justify-end mt-8">
          <img
            src={i2}
            alt="Managing Academic Life"
            className="w-full"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
