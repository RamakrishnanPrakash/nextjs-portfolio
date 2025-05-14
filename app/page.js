import { assets } from "@/assets/assets";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Fooder from "@/components/Fooder";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import Image from "next/image";

export const metadata = {
  title: "Ram's portfolio",
  description: "Welcome to our website! Learn more about what we do.",
};

const Page = () => {
  return (
    <>
      <div className="w-screen text-white relative">
        {/* Background effects */}
        {/* 
        <Image
          src={assets.bg_img}
          alt="Background decorative image"
          className="fixed top-0 -right-2 w-[480px] h-auto z-[-1]"
        />
        <Image
          src={assets.bg_img}
          alt="Background decorative image rotated"
          className="hidden md:block fixed top-0 left-0 rotate-180 w-[500px] h-auto z-[-1]"
        /> 
        */}
        <div className="fixed bottom-24 left-8 w-[200px] blur-[200px] h-[200px] bg-gradient-to-r from-purple-500 to-orange-500 rounded-full z-[-2]"></div>
        <div className="fixed top-[25rem] -right-[4rem] w-[200px] h-[200px] blur-[200px] bg-orange-500 z-[-1]"></div>

        <header>
          <Navbar />
        </header>

        <main className="relative w-full">
          <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[270px] h-[200px] rounded-full bg-purple-500 z-[2] blur-[180px]"></div>
          <Hero />
          <About />
          <Projects />
          <Service />
          <Contact />
          <Fooder />
        </main>
      </div>
    </>
  );
};

export default Page;
