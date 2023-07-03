import React from "react";
import ProjectCard from "../Components/ProjectCard";
import GitHubIcon from "@mui/icons-material/GitHub";

interface IProjectInfo {
  name: string;
  desc: string;
  repo: string;
  skills: string[];
  icon: string;
}

const Project: React.FC<{}> = () => {
  const projs: IProjectInfo[] = [
    {
      name: "Stud.io",
      desc: "A study aid tool that uses AI to track your eye movements and determine whether you are focused or not while studying supports reading a textbook",
      repo: "https://devpost.com/software/studi-io",
      skills: ["HTML", "CSS", "Javascript"],
      icon: "studio.jpeg",
    },
    {
      name: "SignSlate",
      desc: "An AI based sign language translator to help break communication barriers with hard of hearing individuals",
      repo: "https://devpost.com/software/sign-slate",
      skills: ["HTML", "CSS", "Javascript"],
      icon: "signslate.png",
    },
    {
      name: "Focus++",
      desc: "A study aid tool",
      repo: "https://devpost.com/software/focus-ulvbr3",
      skills: ["HTML", "CSS", "Javascript"],
      icon: "focus++.png",
    },
    {
      name: "ValuEx",
      desc: "An online marketplace where users can list their unwanted goods for others to purchase",
      repo: "https://devpost.com/software/valuex",
      skills: ["Node.Js", "Express.Js", "SQL", "HTML", "CSS", "Javascript"],
      icon: "valuex.png",
    },
    {
      name: "assemb.ly",
      desc: "An AI driven error detection tool for PCB manufacturing assembly lines that allows manufactureres to detect missing components",
      repo: "https://devpost.com/software/assemb-ly",
      skills: ["Typescript", "React.js", "TailwindCSS"],
      icon: "assembly.jpeg",
    },
    {
      name: "League Kit",
      desc: "temporary description",
      repo: "temporary repo link",
      skills: ["Node.js"],
      icon: "assembly.jpeg",
    },
  ];

  return (
    <div className="mx-auto w-full px-32">
      <div className="w-full flex items-end mb-4">
        <div className="font-bold text-black text-4xl">Projects</div>
        <div className="flex-1" />
        <div className="cursor-pointer" onClick={() => {
          window.open("https://github.com/TZShawn")
        }}>View more</div>
      </div>
      <div className="px-32 grid grid-cols-3 gap-4">
        {projs.map((proj, index) => (
          <div className="">
            <ProjectCard
              title={proj.name}
              description={proj.desc}
              skills={proj.skills.join(", ")}
              repo={proj.repo}
              icon={proj.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
