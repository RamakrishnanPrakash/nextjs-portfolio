import { assets, languages1, languages2, tools } from "@/assets/assets";
import Image from "next/image";
import EducationIcon from "./UI/EducationIcon";

const About = () => {
  return (
    <div className="w-[100%]  pb-2 px-2">
      <h6 className="text-center text-lg mb-1">Introduction</h6>
      <div className="w-full flex items-center justify-center">
        {" "}
        <h1
          className="text-4xl font-semibold 
      bg-gradient-to-r from-purple-500 to-orange-500 inline-block
       text-transparent bg-clip-text">
          About me
        </h1>
      </div>
      <div className="w-full flex items-center flex-col lg:flex-row  justify-center gap-2 mt-2 px-10">
        <div className=" w-[80%] md:w-[30%] relative flex items-center justify-center  ">
          <Image
            src={assets.profile}
            alt="Myprofile"
            className="mt-4 rounded-xl w-[200px]  md:w-[250px] lg:w-[300px] border border-purple-500 "
          />
        </div>
        <div className="w-[95%] md:w-[70%]">
          <h1 className="text-center lg:text-left  mt-1 mb-2 font-bold text-2xl ">
            Welcome to my portfolio 🙏
          </h1>
          <p className="text-center lg:text-left max-w-[700px] text-white/70 tracking-wider mb-1">
            Hello! I’m Ramakrishnan Gunasekaran, an aspiring MERN stack
            developer with a Diploma in Computer Engineering (2024). I
            specialize in building responsive and user-friendly web applications
            using technologies like React, Node.js, and MongoDB. My projects
            include a personal portfolio website and a task manager app, both
            emphasizing clean design and efficient functionality. I'm passionate
            about continuous learning and thrive in collaborative environments.
            When I'm not coding, I enjoy exploring new tech trends and
            contributing to open-source projects.
          </p>

          <div className="w-full md:w-[90%] mt-3 flex flex-col lg:flex-row gap-5  bg-transparent lg:bg-black/30 ">
            <div className="w-full lg:w-[70%] h-[300px] rounded-lg overflow-hidden shadow shadow-white/20 relative">
              <div className=" absolute w-[50px] sm:w-[200px] h-[200px] blur-[200px] bg-gradient-to-tr from-purple-500 to-orange-500 z-[1] rounded-full"></div>
              <div className="absolute  top-[50%] -translate-y-1/2 left-4 z-[2]">
                <Image src={assets.codeIcon} alt="codeIcon" className="w-8" />
                <h6 className="text-lg">I constantly try to improve</h6>
                <h1
                  className="text-3xl my-2 font-extrabold bg-gradient-to-r
                 from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text">
                  My tech stack
                </h1>
              </div>
              <div className="absolute w-[280px] h-full top-0 right-4 rotate-2 z-[2] ">
                <div className="flex   gap-2 w-full">
                  <div className="w-[50%] flex items-center justify-center flex-col h-full overflow-hidden group">
                    {/* First copy of scrolling content */}
                    <div className="y-axis-scroll w-full group-hover:[animation-play-state:paused]">
                      {languages1.map((tech, index) => (
                        <div
                          key={index}
                          className="mt-5 w-[80%] h-[50px] bg-white/5 font-bold rounded-lg flex items-center justify-center">
                          {tech}
                        </div>
                      ))}
                    </div>

                    {/* Second copy for looping effect */}
                    <div
                      className="y-axis-scroll w-full group-hover:[animation-play-state:paused]"
                      aria-hidden={true}>
                      {languages1.map((tech, index) => (
                        <div
                          key={index + languages1.length}
                          className="mt-5 w-[80%] h-[50px] bg-white/5 font-bold rounded-lg flex items-center justify-center">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-[50%] flex items-center justify-center flex-col h-full overflow-hidden group">
                    {/* First copy of scrolling content */}
                    <div className="y-axis-scroll w-full group-hover:[animation-play-state:paused]">
                      {languages2.map((tech, index) => (
                        <div
                          key={index}
                          className="mt-5 w-[80%] h-[50px] bg-white/5 font-bold rounded-lg flex items-center justify-center">
                          {tech}
                        </div>
                      ))}
                    </div>

                    {/* Second copy for looping effect */}
                    <div
                      className="y-axis-scroll w-full group-hover:[animation-play-state:paused]"
                      aria-hidden={true}>
                      {languages2.map((tech, index) => (
                        <div
                          key={index + languages2.length}
                          className="mt-5 w-[80%] h-[50px] bg-white/5 font-bold rounded-lg flex items-center justify-center">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* <div className=" w-[50%] flex items-center justify-center flex-col h-full overflow-hidden group">
                    <div className="y-axis-scroll w-full group-hover:[animation-play-state:paused]">
                      {languages2.map((tech, index) => (
                        <div
                          key={index}
                          className="mt-5 w-[80%] h-[50px]  bg-white/5 font-bold  rounded-lg flex items-center justify-center">
                          {tech}
                        </div>
                      ))}
                    </div>

                    <div
                      className="y-axis-scroll w-full group-hover:[animation-play-state:paused]"
                      aria-hidden={true}>
                      {languages2.map((tech, index) => (
                        <div
                          key={index}
                          className="mt-5 w-[80%] h-[50px]  bg-white/5 font-bold  rounded-lg flex items-center justify-center">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>

              <div className=""></div>

              <div className="w-full h-[60px] ">
                {/* <Image
                    src={assets.codeIcon}
                    alt="codeIcon"
                    className="w-10"
                  />
                </div>
                <p className="pt-2 pl-4">Know Technology</p> */}

                <div className="overflow-hidden group ">
                  {/* <div className="y-axis-scroll group-hover:[animation-play-state:paused]"></div> */}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[30%]  flex flex-col gap-2 items-center ">
              <div className="w-full h-[140px] relative rounded-xl shadow shadow-white/20 mt-1 ">
                <div
                  className="w-[50px] left-4 absolute rounded-b-full  z-[1] h-[80px] bg-gradient-to-r
                 from-purple-500 to-orange-500 blur-3xl top-3 "></div>

                <div className="mt-3 ml-4">
                  <EducationIcon />
                  <h6 className="my-1">Education</h6>
                  <p className="max-w-[200px] text-white/70">
                    Diploma in Computer Science
                  </p>
                </div>
              </div>
              <div className="w-full h-[140px] relative shadow shadow-white/20 mt-1">
                <div className="mt-3 ml-4">
                  <Image
                    src={assets.project}
                    alt="projectIcon"
                    className="w-7"
                  />
                  <h6 className="my-1">Projects</h6>
                  <p className="max-w-[200px] text-white/70">
                    Built more than 5 projects
                  </p>
                </div>
                <div
                  className="w-[50px] left-4 absolute rounded-b-full  z-[1] h-[80px] bg-gradient-to-r
                 from-purple-500 to-orange-500 blur-3xl top-3 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[150px] my-3  mx-auto relative flex items-center justify-center flex-col gap-3">
        <div
          className="w-[50px] h-[50px] bg-purple-500
         rotate-45 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 blur-3xl"></div>

        <h3 className="text-center text-2xl font-bold pt-3 bg-gradient-to-r from-purple-500 bg-orange-500 inline-block bg-clip-text text-transparent mx-auto">
          Tools I use
        </h3>

        <div className="w-[97%] lg:w-[80%] flex overflow-hidden">
          <div className="flex gap-2  x-axis-scroll">
            {tools.concat(tools).map((tool, index) => (
              <Image
                src={tool}
                key={`${tool}-${index}`}
                className="w-12 mr-3"
                alt="tools"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
