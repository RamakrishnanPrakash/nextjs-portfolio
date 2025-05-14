import { assets } from "@/assets/assets";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-[300px]  h-[360px] shadow hover:-translate-y-2 transition-all duration-300  shadow-purple-100 mt-3 overflow-hidden relative">
      <div
        className="relative w-[85%] mx-auto hover:rotate-2  pt-3 mt-2 h-[160px] shadow overflow-hidden shadow-white rounded-md bg-white/10 "
        onClick={() => window.location.replace(project.website_link)}>
        <div className="absolute top-2 left-0 w-[60px] h-[60px] blur-2xl rounded-3xl bg-gradient-to-r from-purple-500 to-orange-500 z-[-1]"></div>
        <div className="absolute top-2 right-0 w-[60px] h-[60px] blur-2xl rounded-3xl bg-purple-500  z-[-1]"></div>

        <div className="w-[80%] mx-auto  relative  rotate-3 h-[150px]  flex cursor-pointer ">
          <div className=" absolute w-full h-full   top-3">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="absolute top-10 z-[1] rounded-lg "
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ml-2 pt-1 pl-3 pr-1">
        <h1 className=" mt-1 text-xl truncate font-bold bg-gradient-to-r from-white/90 to-white/70 text-transparent bg-clip-text inline-block">
          {project.title}
        </h1>

        <div className="w-full max-h-[100px] overflow-hidden">
          <p className="text-sm text-white/90 tracking-wider">
            {project.description.slice(0, 130)}...
          </p>
        </div>
        <div className="w-full flex mt-2  items-center justify-between">
          <div
            className=" cursor-pointer w-[130px] flex items-center justify-between gap-2
           bg-white/15  py-2 px-3  text-lg rounded-full   font-bold"
            onClick={() => window.location.replace(project.website_link)}>
            <a>Explore</a>{" "}
            <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-purple-400">
              <Image
                src={assets.arrow_icon_white}
                alt="arrow-icon"
                width={12}
              />
            </div>
          </div>
          <Image
            src={assets.git_icon}
            alt="git-icon"
            width={40}
            className="mr-3 cursor-pointer"
            onClick={() => window.location.replace(project.github_link)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
