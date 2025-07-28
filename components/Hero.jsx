"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import TypingAnimation from "./TypingAnimation";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <motion.section
      className="w-screen min-h-[95vh] relative mt-[3%] "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="home">
      {/* Geometric shapes */}
      <div className="  absolute z-[-1] w-[100px] h-[100px] border-2 border-white/35 rotate-12 left-1 bottom-6"></div>
      <div className="  absolute z-[-1] w-[100px] h-[100px] border-2 border-white/35 rotate-12 right-1 top-6"></div>

      {/* Geometric shapes  end*/}

      {/* Four-pointed star shapes */}
      <div
        className="hidden  md:block absolute top-1/4 left-[66%] w-6 h-6 bg-orange-200 opacity-60 animate-pulse animation-delay-1000"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}></div>
      <div
        className="absolute bottom-1/3 left-1/12 w-4 h-4 bg-purple-200 opacity-70 animate-ping animation-delay-2000"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}></div>
      <div
        className="absolute top-2/3 right-1/5 w-5 h-5 bg-white opacity-50 animate-pulse animation-delay-3000"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}></div>

      {/* rounded shape */}
      <div className="w-[20px] h-[20px] hidden sm:block absolute top-[100px] left-[200px] bg-white/45 animate-pulse animation-delay-1000 rounded-full"></div>

      <div className="w-[270px] md:w-[350px] h-[400px] bg-[#000000] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl blur-[30px] z-[1] "></div>
      <div className="absolute w-full h-full z-[3] top-0 left-0 ">
        <div className="w-full h-full flex items-center justify-center flex-col ">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-[180px] flex items-center justify-center rounded-full bg-gradient-to-r
           from-purple-500 to-orange-500 p-1">
            <div className="w-full flex items-center justify-center rounded-full bg-black p-2 relative">
              <Image
                className=" absolute -right-3 bottom-5"
                src={assets.code}
                alt={assets.code}
              />
              <Image
                src={assets.round_profile}
                alt={assets.round_profile}
                className="w-full mx-auto"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h6 className=" text-2xl md:text-4xl my-3 font-bold">Hi !</h6>
            <Image
              src={assets.hand_icon}
              alt={assets.hand_icon}
              className="w-6"
            />
            <motion.h6 className="text-2xl md:text-4xl my-3 font-bold">
              I'm Ramakrishnan☺️
            </motion.h6>
          </motion.div>
          <TypingAnimation
            text={[
              "MERN stack developer",
              "Nextjs developer",
              "Reactjs developer",
              "UI/UX Designer",
              "Web Designer",
            ]}
            speed={300}
          />
          {/* <h6 className="text-3xl font-semibold"> based in tamilnadu</h6> */}
          <motion.p
            className="my-2 max-w-[80%] md:max-w-[700px] text-center"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            I design and develop responsive, user-friendly web applications with
            a focus on delivering exceptional user experiences.
          </motion.p>

          <motion.div
            className="flex items-center  flex-col-reverse sm:flex-row justify-center gap-5 mt-3"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <button
              className="w-[250px] sm:w-[200px] cursor-pointer  h-[60px] flex items-center 
            justify-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 px-4 py-2
             rounded-full text-lg hover:from-orange-500 hover:to-purple-500 transition duration-700">
              Contact me <ArrowUpRight />
            </button>
            <div
              className="w-[250px] sm:w-[200px]  h-[60px] flex items-center justify-center gap-2 p-[2px] bg-gradient-to-r from-purple-500 to-orange-500
             hover:from-orange-500 hover:to-purple-500 transition duration-700 cursor-pointer rounded-full text-lg">
              <button className="w-full  h-full flex justify-center gap-2 items-center rounded-full bg-black px-4 py-2 cursor-pointer ">
                My Resume <ArrowDownToLine />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
