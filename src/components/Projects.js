import React from "react";
import Nutricipe from "../images/Nutricipe.png";
import waterudoin from "../images/waterudoin.png";
import CalmQuest from "../images/CalmQuest.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Nutricipe,
      title: "Nutricipe",
      github: "",
      demo: "",
    },
    {
      id: 2,
      image: waterudoin,
      title: "WaterUdoin",
      github: "https://github.com/CKBoytGT/waterUdoin",
      demo: "https://waterudoin.herokuapp.com/",
    },
    {
        id: 3,
        image: CalmQuest,
        title: "CalmQuest",
        github: "https://github.com/HunterWilson1/CalmQuest",
        demo: "https://calmquest.herokuapp.com/login",
        
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-start items-center p-5 text-center"
    >
      <h1 className="py-4 text-3xl font-bold">Projects</h1>
      <p className="max-w-2xl font-light text-lg pb-8">
        Here are some of the latest projects that I have worked on!
      </p>

      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, demo, github, title }) => (
          <div
            key={id}
            className="max-w-lg rounded-xl flex shadow-lg shadow-gray-300 rounxed-2xl overflow-hidden"
          >
            <img src={image} alt="projects" className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <div className="flex flex-col items-center justify-center">
                <button
                  className="mb-4 hover:scale-100"
                  onClick={() => window.open(demo, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="hover:scale-100"
                  onClick={() => window.open(github, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
