import React from "react";
import { Instagram, MessageSquare, Pin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A] text-gray-400 text-center pt-12 pb-12 px-8 border-t border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-start flex-wrap max-w-6xl mx-auto gap-10 md:gap-0">
        
        {/* Left Section: Studytable */}
        <div className="text-4xl md:text-5xl font-regular text-left mb-6 md:mb-0">
          Study<strong>table</strong>
        </div>

        {/* Right Section: Notice Board, Socials, Blogs */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-[5vw] text-left ml-auto">
          
          {/* Notice Board Button */}
          <div>
            <button className="bg-[#ECECEC] text-black px-4 py-1.5 text-lg md:text-xl font-bold flex items-center gap-2 mb-4 md:mb-0">
              <Pin />
              Notice Board
            </button>
          </div>
          
          {/* Socials */}
          <div className="flex flex-col gap-4 items-start md:items-center text-base md:text-lg">
            <h3 className="font-semibold text-[18px] md:text-[20px] text-white">Socials</h3>
            <div className="flex gap-2 items-center text-white">
              <Instagram size={22} />
              <span>Instagram</span>
            </div>
            <div className="flex gap-2 items-center text-white">
              <MessageSquare size={22} />
              <span>WhatsApp</span>
            </div>
          </div>
          
          {/* Blogs */}
          <div>
            <h3 className="font-semibold text-[18px] md:text-[20px] text-white mb-2">Blogs</h3>
            <ul className="space-y-1 text-white text-sm md:text-base">
              <li>
                <a href="#" className="hover:underline">
                  How we plan learning sessions?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How we plan assessment sessions?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How we manage student life?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  The effective student?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
