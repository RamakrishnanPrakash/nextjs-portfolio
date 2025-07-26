"use client";
import Image from "next/image";

const NewProjectCard = ({ project }) => {
  const imageUrl = project?.images?.[0]?.replace(
    "/upload/",
    "/upload/q_auto,f_auto/"
  );

  return (
    <div
      className="relative w-full max-w-[300px] mx-auto bg-gradient-to-br mt-2 border border-white/30 from-black/90 to-black/80 rounded-lg
     overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl ">
      <div
        className="relative h-[180px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        {project?.title && (
          <div className="absolute top-4 left-4">
            <span className="text-white font-bold text-sm bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
              {project.title}
            </span>
          </div>
        )}
        {/* Content Section */}
      </div>
      <div className=" p-6 pb-0">
        {/* Action Buttons */}
        <div className="flex gap-3 mb-4">
          <button className="flex-1 bg-white text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-200">
            {/* <Play size={18} fill="currentColor" /> */}
            Watch Now
          </button>
          <button className="w-12 h-12 bg-white/20 text-white rounded-lg flex items-center justify-center hover:bg-black transition-colors duration-200">
            {/* <Plus size={20} /> */}+
          </button>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed px-3 py-1 pb-4">
        {project.description.slice(0, 150)}
      </p>
    </div>
  );
};

export default NewProjectCard;
{
  /* <Image
            src={imageUrl}
            fill // makes image fill its parent
            className="object-cover"
            alt={project?.title}
          /> */
}
