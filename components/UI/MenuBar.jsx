"use client";
import { X, House } from "lucide-react";

const MenuBar = ({ menuIsOpen, setMenuIsOpen }) => {
  return (
    <div
      className={`w-[60%] h-screen  fixed z-[5]
    bg-black backdrop-blur-[400px] top-0 duration-700 transition-all ${
      menuIsOpen ? "right-[0]" : "-right-[1200px]"
    }`}>
      <div className="w-full h-full relative">
        <button
          className=" absolute top-6 right-5 z-[5]"
          onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}>
          <X size={30} className="hover:text-orange-500" />
        </button>

        <div className="flex flex-col h-full items-center justify-center gap-4">
          <button
            className="flex items-center justify-center gap-2"
            onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}>
            {" "}
            <svg width="25px" height="25px" viewBox="0 0 24 24">
              <defs>
                <linearGradient
                  id="gradient-stroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" /> {/* purple-500 */}
                  <stop offset="100%" stopColor="#F97316" /> {/* orange-500 */}
                </linearGradient>
              </defs>
              <House
                stroke="url(#gradient-stroke)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <a
              href="#home"
              className=" text-lg bg-gradient-to-r from-purple-500 to-orange-500 
            inline-block text-transparent bg-clip-text font-bold duration-700   transition ">
              Home
            </a>
          </button>
          <a
            onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
            href="#about"
            className="text-lg font-bold hover:bg-gradient-to-r from-purple-500 to-orange-500 inline-block hover:text-transparent bg-clip-text  duration-700   transition ">
            About me
          </a>
          <a
            onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
            href=""
            className="text-lg font-bold hover:bg-gradient-to-r from-purple-500 to-orange-500 inline-block hover:text-transparent bg-clip-text  duration-700   transition ">
            My project
          </a>
          <a
            onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
            href="#service"
            className="text-lg font-bold hover:bg-gradient-to-r from-purple-500 to-orange-500 inline-block hover:text-transparent bg-clip-text  duration-700   transition ">
            Service
          </a>
          <a
            onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
            href=""
            className="text-lg font-bold hover:bg-gradient-to-r from-purple-500 to-orange-500 inline-block hover:text-transparent bg-clip-text  duration-700   transition ">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
