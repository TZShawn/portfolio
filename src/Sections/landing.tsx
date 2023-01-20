import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Landing: React.FC<{}> = () => {
  return (
    <div className="flex-1 w-full h-full m-auto grid-row-3">
      <div className="row-span-1 h-1/5" />
      <div className="w-1/2 h-1/3 my-16 mx-32 row-span-1">
        <div className="font-bold text-slate-400 text-3xl">Hi!</div>
        <div className="font-bold text-black text-6xl">I'm Shawn Xue</div>
        <div className="font-bold text-black text-3xl">I am a Mathematics student at The University of Waterloo and an aspiring Web Developer and Software Engineer</div>
      </div>
      <div className="row-span-1 h-fill flex flex-col w-full text-center">
        <div className="mt-32">
          <div className="font-bold">Learn more about me</div>
          <KeyboardArrowDownIcon className="text-black"/>
          </div>
      </div>
    </div>
  );
};

export default Landing;
