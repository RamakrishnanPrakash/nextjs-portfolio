"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import TypingAnimation from "./TypingAnimation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="w-screen min-h-[100vh] relative "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="home">
      <div className="w-[350px] h-[400px] bg-[#000000] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl blur-[30px] z-[1] "></div>
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
            className="flex items-center justify-center gap-5 mt-3"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <button
              className="w-[200px] cursor-pointer  h-[60px] flex items-center 
            justify-center gap-2 bg-gradient-to-r from-purple-500 to-orange-500 px-4 py-2
             rounded-full text-lg hover:from-orange-500 hover:to-purple-500 transition duration-700">
              Contact me
            </button>
            <div
              className="w-[200px] h-[60px] flex items-center justify-center gap-2 p-[2px] bg-gradient-to-r from-purple-500 to-orange-500
             hover:from-orange-500 hover:to-purple-500 transition duration-700 cursor-pointer rounded-full text-lg">
              <button className="w-full h-full rounded-full bg-black px-4 py-2 cursor-pointer ">
                My Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
