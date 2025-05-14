"use client";
import { useCallback, useEffect, useState } from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import UrlTypingAnimation from "./UI/UrlTypingAnimation";
import { assets, BACKEND_URL, projects } from "@/assets/assets";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

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
    <div className="w-[100%]">
      <h6 className="text-center text-lg mb-1">Featured Projects</h6>
      <div className="w-full flex items-center justify-center flex-col gap-3">
        <h1
          className="text-4xl font-semibold 
      bg-gradient-to-r from-purple-500 to-orange-500 inline-block
       text-transparent bg-clip-text ">
          My Recent Work
        </h1>

        <p className="text-center text-white/70 mt-1 max-w-[400px] md:max-w-[600px] ">
          Dive into a selection of projects that highlight my skills in crafting
          responsive, dynamic, and engaging web applications.
        </p>

        {/*  */}
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-2">
        {projectData.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      <div className="w-full flex  flex-wrap-reverse   gap-5 items-center justify-center mt-5">
        <div className="w-[80%] lg:w-[500px] p-3">
          <div className="p-1 rounded-2xl bg-black">
            <div className=" w-full scrolling-container overflow-x-hidden">
              <JSONPretty data={jsonData} />
            </div>
          </div>
        </div>
        <div className="w-[80%] lg:w-[500px] flex flex-col justify-center lg:items-start items-center">
          <h1
            className="text-xl font-bold mb-2 bg-gradient-to-r text-center
           from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
            I dynamically manage my projects{" "}
          </h1>
          <p className="text-white/75 text-center lg:text-left">
            updating, adding, and improving them regularly. You can view the
            live project data anytime by visiting the URL below in your browser!
          </p>

          <div className="w-full flex flex-col items-start">
            <div className="w-full bg-gradient-to-r from-purple-500 bg-orange-500 p-[2px] rounded-xl mt-4">
              <div className="w-full bg-black p-1">
                <div className="w-full h-[55px] text-sm flex items-center pl-4">
                  <UrlTypingAnimation />
                </div>
              </div>
            </div>
          </div>
          <button
            className=" bg-gradient-to-r mt-4 hover:to-purple-500 hover:from-orange-500 cursor-pointer transform duration-700
           from-purple-500 to-orange-500 px-5 py-3 rounded-md">
            Hit the URL in your browser
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
