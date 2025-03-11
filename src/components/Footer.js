import React from "react";
import { Instagram, MessageSquare, Pin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2A2A2A] text-gray-400 text-center pt-12 pb-12 px-8 border-t border-gray-300">
      <div className="flex justify-between items-start flex-wrap max-w-6xl mx-auto">
        {/* Left Section: Studytable */}
        <div className="text-5xl font-regular text-left mb-6">
          Study<strong>table</strong>
        </div>

        {/* Right Section: Notice Board, Socials, Blogs */}
        <div className="flex flex-row gap-[5vw] text-left ml-auto">
          <div>
            <button className="bg-[#ECECEC] text-black px-4 py-1.5 text-xl font-bold flex items-center gap-2">
              <Pin />
              Notice Board
            </button>
          </div>
          <div className="flex flex-col gap-4 items-center text-lg">
            <h3 className="font-semibold text-[20px] text-white">Socials</h3>
            <div className="flex gap-1 text-white">
              <Instagram className="pt-1" size={25} />
              <span>Instagram</span>
            </div>
            <div className="flex gap-1 text-white">
              <MessageSquare className="pt-1" size={25} />
              <span>WhatsApp</span>
            </div>
          </div>
          <div className="text-left ">
            <h3 className="text-left text-sm mb-3 font-semibold text-[20px] text-white">Blogs</h3>
            <ul className="space-y-1 text-white">
              <li>
                <a href="#" className="hover:underline">
                  How we plan learning session ?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How we plan assessment session ?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How we manage student life ?
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  The effective student ?
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
