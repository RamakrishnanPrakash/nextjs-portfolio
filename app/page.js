"use client";
import { assets } from "@/assets/assets";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Fooder from "@/components/Fooder";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [bgScroll, setIsBgScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // console.log(e);
      if (scrollY > 50) setIsScroll(true);
      else setIsScroll(false);

      if (scrollY > 50) setIsBgScroll(true);
      else setIsBgScroll(false);
    });
  }, []);
  return (
    <div className=" text-white relative overflow-hidden">
      {/* Background effects */}

      <div className="fixed top-20 -z-[2] left-10 w-64 h-64 bg-black sm:bg-orange-500/30 rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div
        className={`
       absolute top-[30rem] right-0 w-[100px] h-[100px]  md:top-[25rem] md:-right-[4rem]   md:w-[200px] md:h-[200px] blur-[150px] bg-purple-500
            z-[-1]`}></div>

      <div className="absolute bottom-32 z-[-2] left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/35 rounded-full blur-3xl animate-pulse opacity-60"></div>

      {/* Light streaks */}
      <div className="absolute top-10 left-1/4 w-px h-[300px] lg:h-[600px] bg-gradient-to-b from-orange-400/0 via-orange-400/40 to-orange-400/0 animate-pulse opacity-60"></div>
      <div className="absolute top-10 right-1/4 w-px h-[300px] lg:h-[600px] bg-gradient-to-b from-purple-400/0 via-purple-400/50 to-purple-400/0 animate-pulse opacity-50 animation-delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-px h-64 bg-gradient-to-t from-orange-300/0 via-orange-300/35 to-orange-300/0 animate-pulse opacity-45"></div>

      <header>
        <Navbar isScroll={isScroll} />
      </header>

      <div className="relative overflow-hidden ">
        <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[270px] h-[200px] rounded-full bg-purple-500 z-[2] blur-[180px]"></div>
        <Hero />
        <About />
        <Projects />
        <Service />
        <Contact />
        <Fooder />
      </div>
    </div>
  );
};

export default Page;
