import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Project: React.FC<{}> = () => {

    var projectNames: string[] = ["Stud.io", "SignSlate", "Focus++", "ValuEx", "Assemb.ly", "League Kit"];
    var projectDesc: string[] = ["Temp description 1", 
    "Temp description 2", "Temp description 3", "Temp description 4", "Temp description 5", 
    "Temp description 6"];
    var projectRepo: string[] = ["temp1", "temp1", "temp1", "temp1", "temp1", "temp1"];
    var projectIcon: string[] = ["temp1", "temp1", "temp1", "temp1", "temp1", "temp1"];

    return(
    <div className="mx-auto w-full px-32">
        <div className="font-bold text-black text-4xl">Projects</div>
        <div className="px-32 grid grid-cols-3 gap-4">
            {projectNames.map((proj, index) => (
                <div className="">
                    <ProjectCard title={proj}
                            description={projectDesc[index]}
                            skills={projectRepo.join(', ')}
                            repo={projectRepo[index]}
                            icon={projectIcon[index]}/>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Project;
