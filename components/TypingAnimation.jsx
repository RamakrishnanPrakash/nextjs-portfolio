"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const TypingAnimation = ({ text, speed = 100 }) => {
  const [textIndex, setTextIndex] = useState(0); // current text index
  const [charIndex, setCharIndex] = useState(0); // current character index
  const [display, setDisplay] = useState(""); // final display

  useEffect(() => {
    if (text.length === 0) return;

    const currentText = text[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Finished current word, wait and go to next one
      const nextTimeout = setTimeout(() => {
        setDisplay("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % text.length); // loop back
      }, 1000); // wait before switching to next word
      return () => clearTimeout(nextTimeout);
    }
  }, [charIndex, textIndex, text, speed]);

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}>
      <a
        className="text-3xl md:text-6xl font-semibold mb-2 md:mb-5  tracking-wider bg-gradient-to-r transition-all
     from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
        {display}{" "}
      </a>
      <span className="text-3xl md:text-6xl font-semibold animate-blink text-white">
        |
      </span>
    </motion.div>
  );
};

export default TypingAnimation;
