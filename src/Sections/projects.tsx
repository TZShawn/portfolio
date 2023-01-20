import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Project: React.FC<{}> = () => {

    var projectNames: string[] = ["temp1", "temp2", "temp3", "temp4", "temp5", "temp6", "temp7"];
    var projectDesc: string[] = ["Temp description 1", 
    "Temp description 2", "Temp description 3", "Temp description 4", "Temp description 5", 
    "Temp description 6", "Temp description 7"];
    var projectRepo: string[] = ["temp1", "temp1", "temp1", "temp1", "temp1", "temp1", "temp1"];
    var projectIcon: string[] = ["temp1", "temp1", "temp1", "temp1", "temp1", "temp1", "temp1"];

    return(
    <div className="mx-32">
        <div className="font-bold text-black text-4xl">Projects</div>
        <div className="grid grid-cols-3 gap-4">
            {projectNames.map((proj, index) => (
                <div className="">
                    <ProjectCard title={proj}
                            description={projectDesc[index]}
                            repo={projectRepo[index]}
                            icon={projectIcon[index]}/>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Project;
