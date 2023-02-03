import React from "react";

const Skills: React.FC<{}> = ({}) => {
  return (
    <div className="mx-auto px-32 my-14">
      <div className="font-bold text-black text-4xl py-4">My Skills</div>
      <div>
        
      </div>
    </div>
  );
};

const SkillBox: React.FC<{name: string, image: string}> = ({name, image}) => {
  return (
    <div>
      <img src={`../Images/${image}.png`} />
      <div>{name}</div>
    </div>
  )
}

export default Skills;
