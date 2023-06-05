import React from "react";
import pic from "../images/grad.jpg";


const AboutMe = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={pic}
            alt="profile"
            className="rounded-2xl mx-auto custom-image md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            About Me
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am Hunter Wilson, a Full Stack Web Developer with experience and extensive education in software design and application development. 
          Equipped with a diverse and promising skill-set, I am proficient in various platforms, languages, and embedded systems. 
          I am experienced with cutting-edge development tools and procedures, and have the ability to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
          In addition to my technical skills, I am a strong team player with excellent communication and time management skills. I am constantly seeking ways to improve and expand my knowledge, and I am excited to embark on a career in the tech industry.
          Thank you for taking the time to learn more about me. I am eager to contribute my skills and knowledge and learn from others in a professional setting. 
          </p>
        </div>
        <div className="big-screen">
          <img
            src={pic}
            alt="profile"
            className="rounded-2xl mx-auto custom-image md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
