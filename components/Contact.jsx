"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialMediaAnimation from "./UI/SocialMediaAnimation";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const OnchangeHandler = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, description } = contactData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !description) {
      toast.error("Please fill in all the fields.");
      return false;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const onClickHandler = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", contactData.name);
    formData.append("email", contactData.email);
    formData.append("description", contactData.description);
    formData.append("access_key", "d28f2514-be26-4a46-b98d-23140399022a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        toast.success("Form submitted successfully!");
        setContactData({ name: "", email: "", description: "" });

        // Auto hide success message after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full relative">
      <SocialMediaAnimation />
      <div className="absolute w-full h-full bg-[#ffffff02] z-[-1] top-0 left-0"></div>

      <h6 className="text-center text-lg mb-2 text-white">Connect with me</h6>

      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
          Get in touch
        </h1>
      </div>

      <p className="max-w-2xl mx-auto text-white/80 mt-4 text-center px-2">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <div className="w-[90%] md:w-[70%] mx-auto p-5 flex flex-col items-center justify-between gap-2">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="w-full md:w-[50%] bg-gradient-to-r from-purple-500 to-orange-500 p-[2px] rounded-lg">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border-0 outline-0 text-lg py-2 px-4 bg-black"
              value={contactData.name}
              onChange={OnchangeHandler}
              required
            />
          </div>
          <div className="w-full md:w-[50%] bg-gradient-to-r from-purple-500 to-orange-500 p-[2px] rounded-lg">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border-0 outline-0 text-lg py-2 px-4 bg-black"
              value={contactData.email}
              onChange={OnchangeHandler}
              required
            />
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-purple-500 to-orange-500 p-[2px] rounded-lg mt-2">
          <textarea
            name="description"
            placeholder="Enter your message"
            className="w-full h-[160px] border-0 outline-0 text-lg py-2 px-4 bg-black"
            value={contactData.description}
            onChange={OnchangeHandler}
            required
          />
        </div>

        <button
          onClick={onClickHandler}
          disabled={isSubmitting}
          className="w-[200px] mt-4 bg-gradient-to-r from-purple-500 to-orange-500 hover:to-purple-500 hover:from-orange-500 
            px-5 py-3 rounded-md flex items-center justify-center gap-2 transition duration-300">
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit Now <ArrowRight />
            </>
          )}
        </button>
      </div>

      {/* <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-6 py-4 rounded-lg shadow-lg border border-white/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}>
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence> */}

      <div className="w-full flex items-center justify-center flex-col gap-1 md:gap-1 mt-6">
        <Image src={assets.logo_light} alt="my logo" width={200} />
        <div className="max-w-[300px] flex items-center justify-center gap-1">
          <Image src={assets.mail_icon} alt="mail-icon" width={20} />
          <a
            href="mailto:ramakrishnanguna2003@gmail.com"
            className="text-white/50">
            ramakrishnanguna2003@gmail.com
          </a>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
