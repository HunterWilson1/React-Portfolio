import React from "react";
import { FaLinkedinIn, FaGithub, FaFileDownload } from "react-icons/fa";
import pic from "../images/grad.jpg";


const Me = () => {
  const socials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/hunter-wilson-2b5761273/",
      icon: <FaLinkedinIn />,
    },
    {
      id: 2,
      link: "https://github.com/HunterWilson1",
      icon: <FaGithub />,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold">
        Hunter Wilson
      </h2>
      <h3 className="py-3 text-2xl">Full-Stack Web Developer</h3>
      <p className="max-w-xl font-light">
        Welcome to my portfolio page! I'm a full stack developer specializing in
        crafting dynamic web applications with a keen eye for detail and a
        passion for problem-solving.
      </p>

      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {socials.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {" "}
            {icon}
          </a>
        ))}
      </div>

      <div>
        <img src={pic} alt="" className="w-60 h-60 md:w-72 md:h-72 object-cover object-top rounded-xl"/>
        <a href="/Resume.docx" download={true} className="flex items-center justify-center mt-10 bg-rose-600 py-2 rounded-lg animate-bounce"><FaFileDownload />Resume </a>
      </div>
    </section>
  );
};

export default Me;
