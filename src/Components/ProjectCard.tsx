import React from "react";

interface IProjectCard {
  title: string;
  description: string;
  skills: string;
  repo: string;
  icon: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  skills,
  repo,
  icon,
}) => {
  return (
    <div className="border-4 rounded-lg h-full">
      <div className="px-4 pt-4">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-lg">{description}</div>
        <div className="text-sm italic font-medium">{skills}</div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 p-2 text-center border-2 border-blue-400 bg-blue-300">
          <a>Check it out</a>
        </div>
        <div className="w-1/2 p-2 text-center border-2 border-blue-400 bg-blue-300">
          <a>Repo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
