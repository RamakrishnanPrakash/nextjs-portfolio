"use client";
import { easeInOut, motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";
const SocialMediaAnimation = () => {
  return (
    <>
      <motion.a
        initial={{ y: -20 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
        className="absolute top-[1%] left-[17%] md:left-[30%] z-[-1]">
        <Instagram className=" text-orange-500  blur-[0.5px]" size={50} />
      </motion.a>

      <motion.a
        initial={{ y: -20 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
        className="absolute top-[5%] left-[7%]  z-[-2]">
        <Twitter className=" text-blue-300  blur-[0.5px]" size={30} />
      </motion.a>

      <a className="absolute top-[5%] left-[7%]  z-[-2]">
        <Linkedin size={30} className="text-red-500" />
      </a>
    </>
  );
};

export default SocialMediaAnimation;
