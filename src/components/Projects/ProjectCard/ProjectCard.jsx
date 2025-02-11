import React from "react";

function ProjectCard({ image, link, sentences, title }) {
  return (
    <>
      <div className="w-full md:max-w-[400px] bg-white rounded-2xl shadow-md overflow-hidden">
        <img className="w-full h-72 object-cover" src={image} alt="Card Image" />
        <div className="p-4 text-center h-auto flex flex-col justify-between">
            <div className="mb-auto">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <div className="h-full">
                    <div className="text-gray-600 mt-2">
                        {sentences.map((sentence, index) => {
                        return <p key={index}>{sentence}</p>
                        })}
                    </div>
                </div>
            </div>
          <a href={link}>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
