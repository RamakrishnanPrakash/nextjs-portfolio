"use client";
import { useCallback, useEffect, useState } from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import UrlTypingAnimation from "./UI/UrlTypingAnimation";
import { assets, BACKEND_URL, projects } from "@/assets/assets";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { motion } from "framer-motion";
import NewProjectCard from "./NewProjectCard";
import { AnimateElement } from "./UI/AnimateElement";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [jsonData, setJsonData] = useState(JSON.stringify(projects));
  const [projectData, setProjectData] = useState(projects.projects);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/v0/portfolio/project`
      );
      console.log(response.data);
      setJsonData(JSON.stringify(response.data));
      setProjectData(response.data.projects);
    } catch (error) {
      console.error(error);
      setJsonData(JSON.stringify(projects));
      setProjectData(projects.projects);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="w-[100%] relative">
      <AnimateElement />
      <motion.h6
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center text-lg mb-1">
        Featured Projects
      </motion.h6>
      <div className="w-full flex items-center justify-center flex-col gap-3">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-4xl font-semibold 
      bg-gradient-to-r from-purple-500 to-orange-500 inline-block
       text-transparent bg-clip-text ">
          My Recent Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-white/70 mt-1 max-w-[400px] md:max-w-[600px] ">
          Dive into a selection of projects that highlight my skills in crafting
          responsive, dynamic, and engaging web applications.
        </motion.p>

        {/*  */}
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-2 relative">
        {/* Decorative blur element for mobile */}
        <div className="absolute sm:hidden w-[40px] blur-3xl h-[50px] z-[-1] bg-orange-500 top-6 right-0"></div>

        {/* Reversed project cards */}
        {[...projectData].reverse().map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {/* <div className="w-full flex flex-wrap items-center justify-center px-10 gap-2  mt-2 relative">
        {projectData.map((project) => (
          <NewProjectCard key={project._id} project={project} />
        ))}
      </div> */}
      <div className="w-full flex  flex-wrap   gap-5 items-center justify-center mt-5">
        <div className="w-[80%] lg:w-[500px] flex flex-col justify-center lg:items-start items-center mt-5">
          <h1
            className="text-xl font-bold mb-2 bg-gradient-to-r text-center
           from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text ">
            I dynamically manage my projects{" "}
          </h1>
          <p className="text-white/75 text-center lg:text-left">
            updating, adding, and improving them regularly. You can view the
            live project data anytime by visiting the URL below in your browser!
          </p>

          <div className="w-full flex flex-col items-start overflow-hidden">
            <div className="w-full bg-gradient-to-r from-purple-500 overflow-hidden bg-orange-500 p-[2px] rounded-xl mt-4">
              <div className="w-full bg-black  overflow-hidden">
                <div className="w-full h-[55px]  text-sm flex items-center pl-4">
                  <UrlTypingAnimation />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              window.location.replace(BACKEND_URL + "/api/v0/portfolio/project")
            }
            className=" bg-gradient-to-r mt-4 hover:to-purple-500 hover:from-orange-500 cursor-pointer transform duration-700
           from-purple-500 to-orange-500 px-5 py-3 rounded-md flex items-center justify-center gap-2">
            Hit the URL <ArrowUpRight />
          </button>
        </div>
        <div className="w-[80%] lg:w-[500px] p-3">
          <div className="p-1 rounded-2xl bg-gradient-to-b from-black/10 via-black/5 to-transparent">
            <div className=" w-full scrolling-container overflow-x-hidden">
              <JSONPretty data={jsonData} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
