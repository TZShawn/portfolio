import React from "react";

const AboutMe: React.FC = () => {
    return(
        <div className="mx-auto px-32">
            <div className="w-2/3">
                <div className="font-bold text-black text-4xl py-4">About me</div>
                <div className="text-lg font-medium">Hi! I am a second year mathematics student at the University of Waterloo and have
                    a passion for web and software development!
                </div>
                <div className="text-lg font-medium">Outside of school and coding I enjoy tinkering with custom keyboards and playing video games
                    I have also been getting into digital art, so please feel free to contact me if you want to chat about anything!
                </div>
            </div>
        </div>
    )
}

export default AboutMe;