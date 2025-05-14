"use client";
import { service } from "@/assets/assets";
import Image from "next/image";

const Service = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8">
      <h6 className="text-center text-lg mb-2 text-white">Introduction</h6>

      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
          My Services
        </h1>
      </div>

      <p className="max-w-2xl mx-auto text-white/80 mt-4 text-center">
        Although I am a fresher, I bring hands-on experience in web development
        and freelancing. I'm committed to delivering high-quality services
        tailored to your specific needs. Whether you need a responsive website,
        a custom web application, or support with UI/UX design, I ensure
        professional results that exceed expectations.
      </p>

      <div className="w-full mt-10 flex flex-wrap justify-center gap-6">
        {service.map((service, index) => (
          <div
            key={index}
            className="w-[80%] sm:w-[300px] h-[300px] rounded-xl shadow-lg p-6 bg-black/30 flex flex-col justify-start transition-transform hover:-translate-y-2 duration-300">
            <div className="h-20 mb-3 flex items-center">
              <Image src={service.image} alt={service.title} width={60} />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-2">
              {service.title}
            </h2>
            <p className="text-white/70 text-sm">{service.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
