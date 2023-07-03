import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Landing: React.FC<{}> = () => {
  return (
    <div className="w-full h-full">
      {/* <div className="w-full flex">
        <div className="flex-1 bg-red-400" />
        <div className="px-4 py-2 m-4 bg-sky-300 rounded-3xl text-lg font-semibold">Contact me</div>
      </div> */}
      <div className="flex flex-col flex-1 w-full h-full justify-center mx-auto px-32 my-32">
        <div className="w-1/2">
          <div className="font-bold text-slate-400 text-3xl">Hi!</div>
          <div className="font-bold text-black text-6xl">I'm Shawn Xue</div>
          <div className="font-bold text-black text-3xl">
            I am a Mathematics student at The University of Waterloo and an
            aspiring Web Developer and Software Engineer
          </div>
        </div>
        <div className="items-center flex flex-col w-full text-center mt-80">
          <div className="">
            <div className="font-bold mb-4">Learn more about me</div>
            <KeyboardArrowDownIcon className="text-black animate-bounce transition duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
