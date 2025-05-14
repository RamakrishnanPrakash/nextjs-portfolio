"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const OnchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const onClickHandler = () => {
    console.log(contactData);
  };
  return (
    <div>
      <h6 className="text-center text-lg mb-2 text-white">Connect with me</h6>

      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
          Get in touch
        </h1>
      </div>

      <p className="max-w-2xl mx-auto text-white/80 mt-4 text-center px-2">
        I'd love to here form you! If you have any question,comments,or feedback
        please use the form below.
      </p>

      <div className="w-[90%] md:w-[70%] mx-auto p-5 flex flex-col items-center justify-between gap-2">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="w-full md:w-[50%] bg-gradient-to-r from-purple-500 overflow-hidden to-orange-500 p-[2px] rounded-lg ">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border-0 outline-0 text-lg py-2 px-4 bg-black overflow-hidden"
              value={contactData.name}
              onChange={(e) => OnchangeHandler(e)}
              required
            />
          </div>
          <div className="w-full md:w-[50%] bg-gradient-to-r from-purple-500 to-orange-500 p-[2px] rounded-lg ">
            <input
              type="email"
              name="email"
              placeholder="Enter Your email"
              className="w-full border-0 outline-0 text-lg py-2 px-4 bg-black overflow-hidden"
              value={contactData.email}
              onChange={(e) => OnchangeHandler(e)}
              required
            />
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-purple-500 to-orange-500 p-[2px] rounded-lg mt-2 flex items-center justify-center ">
          <textarea
            name="description"
            placeholder="Enter Your message"
            className="w-full border-0 h-[160px] outline-0 text-lg py-2 px-4 bg-black overflow-hidden"
            value={contactData.description}
            onChange={(e) => OnchangeHandler(e)}
          />
        </div>
        <button
          onClick={onClickHandler}
          className=" w-[200px] bg-gradient-to-r mt-4 hover:to-purple-500 hover:from-orange-500 
          cursor-pointer transform duration-700
           from-purple-500 to-orange-500 px-5 py-3 rounded-md">
          Submit Now
        </button>
      </div>

      <div className="w-full flex items-center justify-center flex-col">
        <Image src={assets.logo_light} alt="my logo" width={200} />
        <div className="max-w-[300px] flex items-center justify-center gap-2">
          <Image src={assets.mail_icon} alt="mail-icon" width={20} />
          <a href="" className="text-white/50">
            ramakrishnanguna2003@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
