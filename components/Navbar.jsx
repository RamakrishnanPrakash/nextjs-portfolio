"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";
import MenuBar from "./UI/MenuBar";
const Navbar = ({ isScroll }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div
      className={`w-full p-3 py-[14px]  fixed top-0 left-0 z-50 backdrop-blur-2xl ${
        isScroll ? "border-b border-white/20" : "border-transparent"
      }`}>
      <div className="w-full flex items-center justify-between px-5">
        <Image
          src={assets.logo_light}
          className="w-40"
          alt={assets.logo_light}
        />

        <ul className="hidden md:flex gap-5 px-7 rounded-md ]  py-3 bg-white/5  ">
          <li className="text-[17px]">
            <a
              href="#home"
              className="bg-gradient-to-r from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text font-bold duration-700   transition ">
              Home
            </a>
          </li>
          <li className="text-[17px]">
            <a
              href="#about"
              className="hover:bg-gradient-to-r from-purple-500 to-orange-500 inline-block hover:text-transparent bg-clip-text  duration-700   transition ">
              About me
            </a>
          </li>
          <li className="text-[17px]">
            <a
              href=""
              className="hover:bg-gradient-to-r from-purple-500 to-orange-500 inline-block hover:text-transparent bg-clip-text  duration-700   transition ">
              My project
            </a>
          </li>
          <li className="text-[17px]">
            <a
              href="#service"
              className="hover:bg-gradient-to-r from-purple-500 to-orange-500 inline-block hover:text-transparent bg-clip-text  duration-700   transition ">
              Service
            </a>
          </li>
          <li className="text-[17px]">
            <a
              href=""
              className="hover:bg-gradient-to-r from-purple-500 to-orange-500 inline-block hover:text-transparent bg-clip-text  duration-700   transition ">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-5 items-center justify-center">
          <Image
            src={assets.sun_icon}
            className="hidden md:block w-7 cursor-pointer"
            alt={assets.sun_icon}
          />

          <div className="bg-gradient-to-r  from-purple-500  to-orange-500 p-[2px] rounded-full flex items-center justify-center">
            <button className=" bg-[#000000] flex items-center justify-center gap-2 px-3 py-1 rounded-full ">
              <a className="font-bold">Contact</a>
              <Image
                src={assets.arrow_light}
                className="w-3"
                alt={assets.arrow_light}
              />
            </button>
          </div>
          <button
            className="block md:hidden"
            onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}>
            <AlignRight />
          </button>
        </div>
      </div>

      <MenuBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
};

export default Navbar;
