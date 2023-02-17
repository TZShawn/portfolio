import React from "react";

import C from "../Images/C.png"
import Cs from "../Images/c#.png"
import Cpp from "../Images/C++.png"
import Css from "../Images/css.png"
import Html from "../Images/html.png"
import Typescript from "../Images/typescript.png"
import Reac from "../Images/react.png"
import Redux from "../Images/redux.png"
import Python from "../Images/python.png"

const Skills: React.FC<{}> = ({}) => {
  return (
    <div className="mx-auto px-32 my-14">
      <div className="font-bold text-black text-4xl py-4">My Skills</div>
      <div className="w-full flex grid grid-cols-5">
        <SkillBox name={"C"} image={C}/>
        <SkillBox name={"C#"} image={Cs}/>
        <SkillBox name={"C++"} image={Cpp}/>
        <SkillBox name={"Css"} image={Css}/>
        <SkillBox name={"HTML"} image={Html}/>
        <SkillBox name={"React"} image={Reac}/>
        <SkillBox name={"Redux"} image={Redux}/>
        <SkillBox name={"Typescript"} image={Typescript}/>
        <SkillBox name={"Python"} image={Python}/>
      </div>
    </div>
  );
};

const SkillBox: React.FC<{name: string, image: any}> = ({name, image}) => {
  return (
    <div className="m-auto">
      <img className="flex justify-center h-14 m-0 p-0" src={image} alt={name}/>
      <div className="flex justify-center">{name}</div>
    </div>
  )
}

export default Skills;
