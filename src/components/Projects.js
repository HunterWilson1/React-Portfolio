import React from "react";
import Nutricipe from "../images/nutricipe2.png";
import waterudoin from "../images/waterudoin.png";
import CalmQuest from "../images/CalmQuest.png";
import weather from "../images/weather.png";
import chample from "../images/chample.png";
import wurkit from "../images/wurkit.png";
import gifit from "../images/gifit.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Nutricipe,
      title: "Nutricipe",
      github: "https://github.com/HunterWilson1/Nutricipe",
      demo: "https://hunterwilson1.github.io/Nutricipe/",
    },
    {
      id: 2,
      image: wurkit,
      title: "Wurkit",
      github: "https://github.com/HunterWilson1/wurkit",
      demo: "https://wurkit-b5ccce7abaaf.herokuapp.com/login",
    },
    {
      id: 3,
      image: weather,
      title: "Weather Dashboard",
      github: "https://github.com/HunterWilson1/Weather-Dashboard",
      demo: "https://hunterwilson1.github.io/Weather-Dashboard/",
    },
    {
      id: 4,
      image: chample,
      title: "Chample",
      github: "https://github.com/HunterWilson1/chample",
      demo: "https://hunterwilson1.github.io/chample/",
    },
    {
      id: 5,
      image: gifit,
      title: "Gifit",
      github: "https://github.com/HunterWilson1/gifit",
      demo: "https://hunterwilson1.github.io/gifit/",
    },
    {
      id: 6,
      image: waterudoin,
      title: "WaterUdoin",
      github: "https://github.com/CKBoytGT/waterUdoin",
      demo: "https://waterudoin.herokuapp.com/",
    },
    {
        id: 7,
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
