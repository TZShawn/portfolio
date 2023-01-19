import React from "react";

const Landing: React.FC<{}> = () => {
  return (
    <div className="flex-1 w-full h-full m-auto">
      <div className="h-full w-1/2 m-16">
        <div className="font-bold text-slate-400 text-3xl">Hi!</div>
        <div className="font-bold text-black text-6xl">I'm Shawn Xue</div>
        <div className="font-bold text-black text-3xl">I am a Mathematics student at The University of Waterloo and an aspiring Web Developer and Software Engineer</div>
      </div>
    </div>
  );
};

export default Landing;
